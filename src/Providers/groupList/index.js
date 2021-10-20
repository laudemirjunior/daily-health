import { createContext, useState, useEffect } from "react";
import api from "../../services";
import { toast } from "react-toastify";
export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [groupList, setgroupList] = useState([]);
  const notifyGroupList = () => toast.error("Erro ao carregar os grupos!");

  const getAllGroups = () => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    api
      .get("/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setgroupList(response.data.results);
      })
      .catch(() => notifyGroupList());
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("@KenzieHealth:token"))) {
      getAllGroups();
    }
  }, []);

  return (
    <GroupListContext.Provider value={{ groupList, getAllGroups }}>
      {children}
    </GroupListContext.Provider>
  );
};
