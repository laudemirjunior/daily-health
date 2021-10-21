import { createContext, useState, useEffect } from "react";
import api from "../../services";
import { toast } from "react-toastify";
export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [groupList, setgroupList] = useState([]);
  const notifyGroupList = () => toast.error("Erro ao carregar os grupos!");
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(1);
  const [pag, setPag] = useState(1);

  const getAllGroups = () => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    setLoading(true);
    api
      .get(`/groups/?page=${number}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPag(Math.round(response.data.count / 15));
        setgroupList(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        notifyGroupList();
      });
  };

  const next = () => {
    if (number <= pag) {
      setNumber(number + 1);
      getAllGroups();
    } else {
      toast.error("Pagina seguinte nao existe!");
    }
  };

  const prev = () => {
    if (number > 0) {
      setNumber(number - 1);
      getAllGroups();
    } else {
      toast.error("Pagina anterior nao existe!");
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("@KenzieHealth:token"))) {
      getAllGroups();
    }
  }, []);

  return (
    <GroupListContext.Provider
      value={{ groupList, getAllGroups, next, prev, loading }}
    >
      {children}
    </GroupListContext.Provider>
  );
};
