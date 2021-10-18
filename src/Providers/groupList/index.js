import { createContext, useState, useEffect } from "react";
import api from "../../services";
export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [groupList, setgroupList] = useState([]);
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;

  useEffect(() => {
    api
      .get("/groups/", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setgroupList(response.data.results);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GroupListContext.Provider value={{ groupList }}>
      {children}
    </GroupListContext.Provider>
  );
};
