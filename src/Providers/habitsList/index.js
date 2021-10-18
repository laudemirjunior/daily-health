import { createContext, useState, useEffect } from "react";
import api from "../../services";
import { useJwt } from "react-jwt";

export const HabitListContext = createContext();

export const HabitListProvider = ({ children }) => {
  const user = localStorage.getItem("user");
  const [habitList, setHabitList] = useState([]);
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;
  const { decodedToken, isExpired } = useJwt(token);

  const getHabitList = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => setHabitList(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHabitList();
  }, []);

  const removeHabit = (habit) => {
    api
      .delete(`/habits/${habit.id}/`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getHabitList())
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
  };

  return (
    <HabitListContext.Provider
      value={{ habitList, removeHabit, createHabit, updateHabit }}
    >
      {children}
    </HabitListContext.Provider>
  );
};
