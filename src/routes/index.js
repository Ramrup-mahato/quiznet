import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screen/Home";
import About from "../Screen/About";
import CourseDetails from "../Screen/CourseDetails";
import QuizMain from "../Screen/QuizMain";
import PTEScreen from "../Screen/PTEScreen";

export const MainRoutes = () => {
  const authRouts = [
    {
      path: "/login",
      component: "MainLoginPage",
      name: "Login",
    },
    {
      path: "/forget",
      component: "Forget",
      name: "Forget",
    },
  ];
  const unprotectedRouts = [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/HA",
      component: About,
      name: "About",
    },
    {
      path: "/pte",
      component: PTEScreen,
      name: "PTE",
    },
  ];
  const protectedRouts = [
    {
      path: "/:path",
      component: CourseDetails,
      name: "Quiz",
    },
    {
      path: "/:path/:quizpath",
      component: QuizMain,
      name: "quiz",
    },
  ];
  return (
    <Router>
      <Routes>
        {/* <Route>
          {authRouts.map((auth, index) => (
            <Route
              key={index}
              path={auth.path}
              name={auth.name}
              element={auth.component}
            />
          ))}
        </Route> */}
        {/* <Route> */}
        {unprotectedRouts.map((rout, index) => (
          <Route
            key={index}
            path={rout.path}
            name={rout.name}
            element={<rout.component />}
          />
        ))}
        {/* </Route> */}
        <Route>
          {protectedRouts.map((rout, index) => (
            <Route
              key={index}
              path={rout.path}
              name={rout.name}
              element={<rout.component />}
            />
          ))}
        </Route>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route exact path="/About" element={<About />} /> */}
      </Routes>
    </Router>
  );
};
