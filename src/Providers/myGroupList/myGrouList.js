import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MyGroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
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

  return (
    <MyGroupListContext.Provider value={{ myGroupList, setMygroupList }}>
      {children}
    </MyGroupListContext.Provider>
  );
};
