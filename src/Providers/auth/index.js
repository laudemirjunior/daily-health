import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@KenzieHealth:token")) || ""
  );
  const up = (token) => {
    localStorage.clear();
    localStorage.setItem("@KenzieHealth:token", token);
    setToken(token);
  };
  return (
    <AuthContext.Provider value={{ token, up }}>
      {children}
    </AuthContext.Provider>
  );
};
