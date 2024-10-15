import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);
  const [useContextAPI, setUseContextAPI] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLogin(true);
  };

  const logout = () => {
    setUser({ username: "", password: "" });
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      setUser,
      isLogin, 
      setIsLogin,
      login, 
      logout,
      useContextAPI,
      setUseContextAPI
    }}>
      {children}
    </AuthContext.Provider>
  );
};