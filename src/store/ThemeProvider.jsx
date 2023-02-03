import { createContext, useContext, useState } from "react";

export const ThemesContext = createContext();

export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
const setDark = ()=>{
 setTheme("dark")
 
 
} 
const setLight = ()=>{
 setTheme("light")
 
} 
  const contextValue = {
    theme,
    setDark,
    setLight
  };

  return (
    <ThemesContext.Provider value={contextValue}>
      {children}
    </ThemesContext.Provider>
  );
};

export const useTodoContext = () => useContext(ThemesContext);
