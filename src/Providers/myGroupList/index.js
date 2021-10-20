import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services";
export const MyGroupListContext = createContext();

export const MyGroupListProvider = ({ children }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHealth:token")) || ""
  );

  const [myGroupList, setMygroupList] = useState([]);

  const notifyGetMyGroupList = () =>
    toast.error("Erro ao carregar sua lista de grupos!");
  const notifyCreateGroup = () => toast.error("Erro ao criar seu grupo!");
  const notifySubscribe = () => toast.error("Erro ao se escrever no grupo!");
  const notifyUnSubscribe = () => toast.error("Erro ao desinscrever do grupo!");

  const getMyGroupList = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setMygroupList(response.data))
      .catch(() => notifyGetMyGroupList());
  };

  useEffect(() => {
    getMyGroupList();
  }, []);

  const createGroup = (groupInfo) => {
    console.log(groupInfo);
    api
      .post("/groups/", groupInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getMyGroupList())
      .catch(() => notifyCreateGroup());
  };

  const subscribe = (group) => {
    api
      .post(`/groups/${group.id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getMyGroupList())
      .catch(() => notifySubscribe());
  };

  const unSubscribe = (group) => {
    api
      .delete(`/groups/${group.id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getMyGroupList())
      .catch(() => notifyUnSubscribe());
  };

  return (
    <MyGroupListContext.Provider
      value={{
        myGroupList,
        setMygroupList,
        createGroup,
        subscribe,
        unSubscribe,
        getMyGroupList,
      }}
    >
      {children}
    </MyGroupListContext.Provider>
  );
};
