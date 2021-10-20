import { createContext, useState, useEffect } from "react";
import api from "../../services";
import { toast } from "react-toastify";
export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [groupList, setgroupList] = useState([]);
  const [tokenLocal] = useState(
    JSON.parse(localStorage.getItem("@KenzieHealth:token")) || ""
  );
  const token = `Bearer ${tokenLocal}`;
  const notifyGroupList = () => toast.error("Erro ao carregar os grupos!");

  useEffect(() => {
    if (localStorage.getItem("@KenzieHealth:token")) {
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
    }
  }, []);

  return (
    <GroupListContext.Provider value={{ groupList }}>
      {children}
    </GroupListContext.Provider>
  );
};
