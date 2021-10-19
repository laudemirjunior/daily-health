import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services";
export const MyGroupListContext = createContext();

export const MyGroupListProvider = ({ children }) => {
  const user = localStorage.getItem("user");
  const [myGroupList, setMygroupList] = useState([]);

  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;
  const notifyGetMyGroupList = () =>
    toast.error("Erro ao carregar sua lista de grupos!");
  const notifyCreateGroup = () => toast.error("Erro ao criar seu grupo!");
  const notifySubscribe = () => toast.error("Erro ao se escrever no grupo!");
  const notifyUnSubscribe = () => toast.error("Erro ao desinscrever do grupo!");

  const getMyGroupList = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => setMygroupList(response.data))
      .catch((err) => notifyGetMyGroupList());
  };

  useEffect(() => {
    getMyGroupList();
  }, []);

  const createGroup = (groupInfo) => {
    console.log(groupInfo);
    api
      .post("/groups/", groupInfo, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getMyGroupList())
      .catch(() => notifyCreateGroup());
  };

  const subscribe = (group) => {
    api
      .post(`/groups/${group.id}/subscribe/`, null, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getMyGroupList())
      .catch(() => notifySubscribe());
  };

  const unSubscribe = (group) => {
    api
      .delete(`/groups/${group.id}/unsubscribe/`, {
        headers: {
          Authorization: token,
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
      }}
    >
      {children}
    </MyGroupListContext.Provider>
  );
};
