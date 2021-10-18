import { createContext, useState } from "react";
import api from "../../services";
export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goalsList, setGoalsList] = useState([]);
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;

  const searchGoals = (id) => {
    api
      .get(`/goals/?group=${id}&page=1`, null, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setGoalsList(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const createGoals = (goal) => {
    api
      .post("/goals/", goal, {
        headers: {
          Authorization: token,
        },
      })
      .catch((err) => console.log(err));
  };

  const updateGoals = (boolean, id) => {
    api
      .patch(
        `/goals/${id}/`,
        { achieved: boolean },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .catch((err) => console.log(err));
  };

  const deleteGoals = (id) => {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: token,
        },
      })
      .catch((err) => console.log(err));
  };

  return (
    <GoalsContext.Provider
      value={{
        searchGoals,
        goalsList,
        createGoals,
        updateGoals,
        deleteGoals,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
