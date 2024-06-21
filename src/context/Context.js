import React, { createContext, useEffect, useState } from "react";
import Loader from "../components/ReUsable/Loader";

const ContextStore = createContext();

export const Context = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [viewCourse, setViewCourse] = useState("more");
  const [userDetails, setUserDetails] = useState("");

  const [isLoader, setIsLoader] = useState(false);
  const [loaderInFolder, setLoaderInFolder] = useState(false);

  const [loading, setLoading] = useState(true);
  console.log("tokenContext", token);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    if (theme === "light") {
      localStorage.setItem("quizNetTheme", "dark");
    } else {
      localStorage.setItem("quizNetTheme", "light");
    }
  };
  const toggleView = () => {
    setViewCourse((prevTheme) => (prevTheme === "less" ? "more" : "less"));
    if (viewCourse === "less") {
      localStorage.setItem("viewCourse", "more");
    } else {
      localStorage.setItem("viewCourse", "less");
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
        setUserDetails(getToken?.user);
        if (getToken?.role) {
          setRole(getToken?.role);
        }
      } else {
        setToken("");
        setRole("");
      }
    }
    console.log("getTokenContext", getToken);

    const getTheme = localStorage.getItem("quizNetTheme");
    const getView = localStorage.getItem("viewCourse");
    if (getView) {
      setViewCourse(getView);
    }

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
        value={{
          theme,
          toggleTheme,
          token,
          setIsLoader,
          isLoader,
          role,
          setLoaderInFolder,
          loaderInFolder,
          userDetails,
          viewCourse,
          toggleView,
        }}
      >
        {children}
      </ContextStore.Provider>
    </>
  );
};

export default ContextStore;
