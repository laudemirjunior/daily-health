import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  const constLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.setItem("@KenzieHealth:userName", data.username);
        localStorage.setItem(
          "@KenzieHealth:token",
          JSON.stringify(response.data.access)
        );
      })
      .then(() => {
        toast.success("Login feito com Sucesso!");
        setAuthenticated(true);
        history.go(0);
        history.push("/dashboard");
      })
      .catch(() => {
        toast.error("Username ou senha inválidos!");
      });
  };

  const constSignUp = (data) => {
    api
      .post("/users/", data)
      .then(() => toast.success("Conta Criada Com Sucesso!"))
      .then(() => history.push("/login"))
      .catch(() => {
        toast.error("Erro ao Criar a Conta");
      });
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <UserContext.Provider
      value={{ constLogin, constSignUp, authenticated, setAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
