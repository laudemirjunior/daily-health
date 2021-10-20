import { createContext, useState, useEffect } from "react";
import api from "../../services";
import { useJwt } from "react-jwt";
import { toast } from "react-toastify";

export const HabitListContext = createContext();

export const HabitListProvider = ({ children }) => {
  const [tokenLocal] = useState(
    JSON.parse(localStorage.getItem("@KenzieHealth:token")) || ""
  );
  const [habitList, setHabitList] = useState([]);

  const token = `Bearer ${tokenLocal}`;

  const { decodedToken, isExpired } = useJwt(token);

  const notifyGetHabitList = () =>
    toast.error("Erro ao carregar seus hábitos!");
  const notifyRemoveHabit = () => toast.error("Erro ao remover seu hábito!");
  const notifyCreateHabit = () => toast.error("Erro ao criar seu hábito!");
  const notifyUpdateHabit = () => toast.error("Erro ao atualizar seu hábito!");

  const getHabitList = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => setHabitList(response.data))
      .catch(() => notifyGetHabitList());
  };

  useEffect(() => {
    if (localStorage.getItem("@KenzieHealth:token")) {
      getHabitList();
    }
  }, []);

  const removeHabit = (habit) => {
    api
      .delete(`/habits/${habit.id}/`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getHabitList())
      .catch(() => notifyRemoveHabit());
  };

  const createHabit = (habit) => {
    let newHabit = {
      ...habit,
      how_much_achieved: 0,
      user: decodedToken.user_id,
    };
    api
      .post("/habits/", newHabit, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getHabitList())
      .catch(() => notifyCreateHabit());
  };

  const updateHabit = (habit, item) => {
    const newHabit = { how_much_achieved: habit };
    api
      .patch(`/habits/${item}/`, newHabit, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getHabitList())
      .catch(() => notifyUpdateHabit());
  };

  return (
    <HabitListContext.Provider
      value={{
        habitList,
        removeHabit,
        createHabit,
        updateHabit,
        getHabitList,
      }}
    >
      {children}
    </HabitListContext.Provider>
  );
};
