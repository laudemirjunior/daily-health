import { createContext, useState, useEffect } from "react";
import api from "../../services";
import { toast } from "react-toastify";
export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [groupList, setgroupList] = useState([]);
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;
  const notifyGroupList = () => toast.error("Erro ao carregar os grupos!");

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
      .catch(() => notifyGroupList());
  }, []);

  return (
    <GroupListContext.Provider value={{ groupList }}>
      {children}
    </GroupListContext.Provider>
  );
};
