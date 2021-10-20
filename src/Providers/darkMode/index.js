import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [change, setChange] = useState(true);

  const reverse = () => {
    setChange(!change);
  };

  return (
    <DarkModeContext.Provider value={{ change, reverse }}>
      {children}
    </DarkModeContext.Provider>
  );
};
