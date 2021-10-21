import { createContext, useState } from "react";
import api from "../../services";
import { toast } from "react-toastify";
export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goalsList, setGoalsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [batata, setBatata] = useState(false);
  const notifySearchGoals = () => toast.error("Erro ao carregar suas metas!");
  const notifyCreateGoals = () => toast.error("Erro ao criar sua meta!");
  const notifyUpdateGoals = () => toast.error("Erro ao atualizar sua meta!");
  const notifyDeleteGoals = () => toast.error("Erro ao deletar sua meta!");

  const searchGoals = (id) => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));

    api
      .get(`/goals/?group=${id}&page=1`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        setGoalsList(response.data.results);
        setBatata("batata");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        notifySearchGoals();
      });
  };

  const createGoals = (goal) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    api
      .post("/goals/", goal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.log(err);
        notifyCreateGoals();
      });
  };

  const updateGoals = (boolean, id) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    api
      .patch(
        `/goals/${id}/`,
        { achieved: boolean },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch(() => notifyUpdateGoals());
  };

  const deleteGoals = (id) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
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
        loading,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
