import React, { useState, useEffect, useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ContextStore from "../context/Context";
// import "../index.css";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ContextStore);
  return (
    <DarkModeSwitch
      style={{
        marginBottom: "2rem",
        color: theme === "dark" ? "#FDB813" : "#fff",
        marginBottom: 0,
        padding: 10,
      }}
      className="w-10 h-10"
      checked={theme === "dark" ? false : true}
      onChange={toggleTheme}
      size={20}
    />
  );
};

export default ToggleButton;
