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
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState(false);

  const notifyGetHabitList = () =>
    toast.error("Erro ao carregar seus hábitos!");
  const notifyRemoveHabit = () => toast.error("Erro ao remover seu hábito!");
  const notifyCreateHabit = () => toast.error("Erro ao criar seu hábito!");
  const notifyUpdateHabit = () => toast.error("Erro ao atualizar seu hábito!");

  const getHabitList = () => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    setLoading(true);
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        setHabitList(response.data);
        await setLoading(false);
      })

      .catch((err) => {
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
      .then(() => {
        setAnime(false);
      })

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
        loading,
        anime,
      }}
    >
      {children}
    </HabitListContext.Provider>
  );
};

export const useHabit = () => useContext(HabitListContext);
