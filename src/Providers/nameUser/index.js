import { createContext, useState, useContext } from "react";

export const NameUserContext = createContext();

export const NameUserProvider = ({ children }) => {
  const [nameUser, setNameUser] = useState("");

  return (
    <NameUserContext.Provider value={{ nameUser, setNameUser }}>
      {children}
    </NameUserContext.Provider>
  );
};
export const useLogin = () => useContext(NameUserContext);
