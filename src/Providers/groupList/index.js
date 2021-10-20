import { createContext, useState, useEffect } from "react";
import api from "../../services";
import { toast } from "react-toastify";
export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHealth:token")) || ""
  );

  const [groupList, setgroupList] = useState([]);

  const notifyGroupList = () => toast.error("Erro ao carregar os grupos!");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("@KenzieHealth:token"))) {
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
    }
  }, []);

  return (
    <GroupListContext.Provider value={{ groupList }}>
      {children}
    </GroupListContext.Provider>
  );
};
