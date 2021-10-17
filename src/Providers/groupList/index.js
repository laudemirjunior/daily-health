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
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzY2MTQzLCJqdGkiOiI4ZmFkOGU4ODU1OGI0ZGFiOGJlZGI1YWNhYTYxOWQwMiIsInVzZXJfaWQiOjE1fQ.MyM-dshWnP1BhPl-jbGWJGvTpe_ujZzKuEN1N6so-pY`,
          },
        })
        .then((response) => {
          setgroupList([...groupList, ...response.data.results]);
          setLink(response.data.next);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <GroupListContext.Provider value={{ groupList, setgroupList }}>
      {children}
    </GroupListContext.Provider>
  );
};
