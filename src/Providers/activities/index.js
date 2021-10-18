import { createContext, useState } from "react";
import api from "../../services";
export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activitiesList, setActivitiesList] = useState([]);
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;

  const searchActivities = (id) => {
    api
      .get(`/activities/?group=${id}&page=1`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setActivitiesList(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const createActivity = (activity) => {
    api
      .post("/activities/", activity, {
        headers: {
          Authorization: token,
        },
      })
      .catch((err) => console.log(err));
  };

  const updateAtivity = (id, title) => {
    api
      .patch(`/activities/${id}/`, title, {
        headers: {
          Authorization: token,
        },
      })
      .catch((err) => console.log(err));
  };

  const deleteActivity = (id) => {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: token,
        },
      })
      .catch((err) => console.log(err));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        searchActivities,
        activitiesList,
        createActivity,
        updateAtivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
