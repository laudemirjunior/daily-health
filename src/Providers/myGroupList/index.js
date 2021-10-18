import { createContext, useState, useEffect } from "react";
import api from "../../services";
export const MyGroupListContext = createContext();

export const MyGroupListProvider = ({ children }) => {
  const user = localStorage.getItem("user");
  const [myGroupList, setMygroupList] = useState([]);

  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`;

  const getMyGroupList = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => setMygroupList(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyGroupList();
  }, []);

  const createGroup = (groupInfo) => {
    api
      .post("/groups/", {
        headers: {
          Authorization: token,
        },
        groupInfo,
      })
      .catch((err) => console.log(err));
  };

  const subscribe = (group) => {
    api
      .post(`/groups/${group.id}/subscribe/`, null, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getMyGroupList())
      .catch((err) => console.log(err));
  };

  const unSubscribe = (group) => {
    api
      .delete(`/groups/${group.id}/unsubscribe/`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getMyGroupList())
      .catch((err) => console.log(err));
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
