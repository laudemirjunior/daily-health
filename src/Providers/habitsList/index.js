import { createContext, useState, useEffect, useContext } from "react";
import api from "../../services";
import { useJwt } from "react-jwt";
import { toast } from "react-toastify";
import { AuthContext } from "../auth";

export const HabitListContext = createContext();

export const HabitListProvider = ({ children }) => {
  const [habitList, setHabitList] = useState([]);
  const { token } = useContext(AuthContext);
  const { decodedToken, isExpired } = useJwt(token);

  const notifyGetHabitList = () =>
    toast.error("Erro ao carregar seus hábitos!");
  const notifyRemoveHabit = () => toast.error("Erro ao remover seu hábito!");
  const notifyCreateHabit = () => toast.error("Erro ao criar seu hábito!");
  const notifyUpdateHabit = () => toast.error("Erro ao atualizar seu hábito!");

  const getHabitList = () => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));

    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabitList(response.data))
      .catch((err) => {
        console.log(err);
        notifyGetHabitList();
      });
  };

  const removeHabit = (habit) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    api
      .delete(`/habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getHabitList())
      .catch(() => notifyRemoveHabit());
  };

  const CreateHabit = (habit) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));

    let newHabit = {
      ...habit,
      how_much_achieved: 0,
      user: decodedToken.user_id,
    };
    api
      .post("/habits/", newHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getHabitList())
      .catch(() => notifyCreateHabit());
  };

  const updateHabit = (habit, item) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    const newHabit = { how_much_achieved: habit };
    api
      .patch(`/habits/${item}/`, newHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getHabitList())
      .catch(() => notifyUpdateHabit());
  };

  useEffect(() => {
    if (localStorage.getItem("@KenzieHealth:token")) {
      getHabitList();
    }
  }, []);

  return (
    <HabitListContext.Provider
      value={{
        habitList,
        removeHabit,
        CreateHabit,
        updateHabit,
        getHabitList,
      }}
    >
      {children}
    </HabitListContext.Provider>
  );
};

export const useHabit = () => useContext(HabitListContext);
