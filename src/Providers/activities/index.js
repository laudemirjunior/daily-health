import { createContext, useState } from "react";
import api from "../../services";
import { toast } from "react-toastify";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activitiesList, setActivitiesList] = useState([]);
  const [loadingAct, setLoading] = useState(false);
  const [batata, setBatata] = useState(false);
  const notifySearchActivities = () =>
    toast.error("Erro ao carregar as atividade!");
  const notifyCreateActivity = () => toast.error("Erro ao criar a atividade!");
  const notifyUpdateAtivity = () =>
    toast.error("Erro ao atualizar a atividade!");
  const notifyDeleteActivity = () =>
    toast.error("Erro ao deletar a atividade!");

  const searchActivities = async (id) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    setLoading(true);
    await api
      .get(`/activities/?group=${id}&page=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActivitiesList(response.data.results);
        setBatata("batata");
        setLoading(false);
      })
      .catch(() => notifySearchActivities());
  };

  const createActivity = (activity) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    api
      .post("/activities/", activity, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(() => notifyCreateActivity());
  };

  const updateAtivity = (id, title) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    api
      .patch(`/activities/${id}/`, title, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(() => notifyUpdateAtivity());
  };

  const deleteActivity = (id) => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(() => notifyDeleteActivity());
  };

  return (
    <ActivitiesContext.Provider
      value={{
        searchActivities,
        activitiesList,
        createActivity,
        updateAtivity,
        deleteActivity,
        loadingAct,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
