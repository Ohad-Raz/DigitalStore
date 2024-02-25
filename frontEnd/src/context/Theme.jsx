import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext({});
export default function ThemeProvider({ children }) {
  const [isDarkMode, SetIsDarkMode] = useState(false);
  const darkModeColors = {
    backgroundImage: "url('')",
  };
  const lightModeColors = {
    backgroundImage:
      "url('')",
  };
  const [selectedTheme, setSelectedTheme] = useState(lightModeColors);
  const toggleTheme = () => {
    console.log("clicked");
    if (isDarkMode) {
      setSelectedTheme(lightModeColors);
    } else {
      setSelectedTheme(darkModeColors);
    }
    SetIsDarkMode(!isDarkMode);
    console.log("Selected Theme:", selectedTheme);
  };
  console.log(isDarkMode);
  useEffect(() => {
    // console.log(children);
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode, selectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}