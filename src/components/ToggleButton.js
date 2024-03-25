import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
// import "../index.css";

const ToggleButton = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    if (theme === "light") {
      localStorage.setItem("quizNetTheme", "dark");
    } else {
      localStorage.setItem("quizNetTheme", "light");
    }
  };
  //   console.log(theme);

  useEffect(() => {
    // Update the class on the HTML element based on the current theme
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(`${theme}`);
  }, [theme]);

  useEffect(() => {
    const getTheme = localStorage.getItem("quizNetTheme");
    
    setTheme(getTheme);
  }, []);
  return (
    <DarkModeSwitch
      style={{
        marginBottom: "2rem",
        color: theme === "dark" ? "#FDB813" : "#fff",
        marginBottom: 0,
       padding:10
        
      }}
      className="w-10 h-10"
      checked={theme === "dark" ? false : true}
      onChange={toggleTheme}
      size={20}
    />
  );
};

export default ToggleButton;
