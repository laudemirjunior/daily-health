import { createContext, useState } from "react";
import api from "../../services";
import { toast } from "react-toastify";
export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goalsList, setGoalsList] = useState([]);
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;
  const notifySearchGoals = () => toast.error("Erro ao carregar suas metas!");
  const notifyCreateGoals = () => toast.error("Erro ao criar sua meta!");
  const notifyUpdateGoals = () => toast.error("Erro ao atualizar sua meta!");
  const notifyDeleteGoals = () => toast.error("Erro ao deletar sua meta!");

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
      .catch(() => notifySearchGoals());
  };

  const createGoals = (goal) => {
    api
      .post("/goals/", goal, {
        headers: {
          Authorization: token,
        },
      })
      .catch(() => notifyCreateGoals());
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
      .catch(() => notifyUpdateGoals());
  };

  const deleteGoals = (id) => {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: token,
        },
      })
      .catch(() => notifyDeleteGoals());
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
