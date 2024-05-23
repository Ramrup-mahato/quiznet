import React, { createContext, useEffect, useState } from "react";
import Loader from "../components/ReUsable/Loader";

const ContextStore = createContext();

export const Context = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [isLoader, setIsLoader] = useState(false);
  const [loading, setLoading] = useState(true); // Introduce loading state
  console.log("tokenContext", token);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    if (theme === "light") {
      localStorage.setItem("quizNetTheme", "dark");
    } else {
      localStorage.setItem("quizNetTheme", "light");
    }
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(`${theme}`);
  }, [theme]);

  useEffect(() => {
    const getToken = JSON.parse(localStorage.getItem("quizNetToken"));
    if (getToken) {
      if (getToken?.token) {
        setToken(getToken?.token);
        if (getToken?.role) {
          setRole(getToken?.role);
        }
      } else {
        setToken("");
        setRole("")
      }
    }
    console.log("getTokenContext", getToken);

    const getTheme = localStorage.getItem("quizNetTheme");
    if (getTheme) {
      setTheme(getTheme);
    }
    setLoading(false);
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ContextStore.Provider
        value={{ theme, toggleTheme, token, setIsLoader, isLoader, role }}
      >
        {children}
      </ContextStore.Provider>
    </>
  );
};

export default ContextStore;
