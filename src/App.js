import { useEffect, useState } from "react";
import "./App.css";
import { MainRoutes } from "./routes";

function App() {
  // const [theme, setTheme] = useState("dark");

  // useEffect(() => {
  //   // Update the class on the HTML element based on the current theme
  //   {

  //   }
  //   document.documentElement.classList.remove("light", "dark");
  //   document.documentElement.classList.add(`${theme}`);
  // }, [theme]);

  useEffect(() => {
    const getTheme = localStorage.getItem("quizNetTheme");
    
    // setTheme(getTheme);
    document.documentElement.classList.add(`${getTheme}`);

  }, []);
  return <MainRoutes />;
}

export default App;
