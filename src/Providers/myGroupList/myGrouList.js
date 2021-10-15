import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MyGroupListContext = createContext();

export const MyGroupListProvider = ({ children }) => {
  const user = localStorage.getItem("user");
  const [myGroupList, setMygroupList] = useState([]);
  const getMyGroupList = () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
        },
      })
      .then((response) => setMygroupList(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyGroupList();
  }, []);
  const createGroup = (groupInfo) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/groups/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
        },
        groupInfo,
      })
      .catch((err) => console.log(err));
  };
  const subscribe = (group) => {
    axios
      .post(
        `https://kenzie-habits.herokuapp.com/groups/${group.id}/subscribe/`,
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
          },
        }
      )
      .catch((err) => console.log(err));
  };
  const unSubscribe = (group) => {
    axios
      .delete(
        `https://kenzie-habits.herokuapp.com/groups/${group.id}/subscribe/`,
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
          },
        }
      )
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
