import { createContext, useState } from "react";

export const ShowCardsContext = createContext();

export const ShowCardsProvider = ({ children }) => {
  const [open, setOpen] = useState(true);

  const showCard = () => {
    setOpen(!open);
  };

  return (
    <ShowCardsContext.Provider value={{ open, showCard }}>
      {children}
    </ShowCardsContext.Provider>
  );
};
