import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [groupList, setgroupList] = useState([]);
  const getGroupList = () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
        },
      })
      .then((response) => setgroupList(response.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroupList();
  }, []);

  return (
    <GroupListContext.Provider value={{ groupList, setgroupList }}>
      {children}
    </GroupListContext.Provider>
  );
};
