import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const HabitListContext = createContext();

export const HabitListProvider = ({ children }) => {
  const [habitList, setHabitList] = useState([]);
  const getHabitList = () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
        },
      })
      .then((response) => setHabitList(response.data.results))
      .catch((err) => console.log(err));
  };

  const addNewHabit = (habit) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
        },
        habit,
      })
      .catch((err) => console.log(err));
  };
  const removeHabit = (habit) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
        },
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHabitList();
  }, []);

  return (
    <HabitListContext.Provider
      value={{ habitList, setHabitList, addNewHabit, removeHabit }}
    >
      {children}
    </HabitListContext.Provider>
  );
};
