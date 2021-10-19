import { createContext, useState, useEffect } from "react";

export const AuthenticatedContext = createContext();

export const AuthenticatedProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHealth:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <AuthenticatedContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthenticatedContext.Provider>
  );
};
