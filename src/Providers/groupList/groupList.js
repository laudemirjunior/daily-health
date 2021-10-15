import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [groupList, setgroupList] = useState([]);
  const [link, setLink] = useState(
    "https://kenzie-habits.herokuapp.com/groups/"
  );

  useEffect(() => {
    if (link !== null) {
      axios
        .get(`${link}`, {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjUxMjQwLCJqdGkiOiIzNTQxMmM0NGM0NjI0ZjZhOTU3NTIzNGJlNzJiMmQ0ZSIsInVzZXJfaWQiOjE5fQ.kFFi1u2rRMG49LUeVOln18ViRtG_XioJKa2-H-ZNi3c`,
          },
        })
        .then((response) => {
          setgroupList([...groupList, ...response.data.results]);
          setLink(response.data.next);
        })
        .catch((err) => console.log(err));
    }
  }, [groupList, link]);

  return (
    <GroupListContext.Provider value={{ groupList, setgroupList }}>
      {children}
    </GroupListContext.Provider>
  );
};
