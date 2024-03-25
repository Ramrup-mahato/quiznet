import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screen/Home";
import About from "../Screen/About";
import CourseDetails from "../Screen/CourseDetails";
import QuizMain from "../Screen/QuizMain";
import PTEScreen from "../Screen/PTEScreen";
import Login from "../Screen/auth/Login";
import Registration from "../Screen/auth/Registration";
import Forget from "../Screen/auth/Forget";
import AdminLogin from "../Screen/Admin/AdminScreen/AdminLogin";

export const MainRoutes = () => {
  const authRouts = [
    {
      path: "/login",
      component: Login,
      name: "Login",
    },
    {
      path: "/registration",
      component: Registration,
      name: "Registration",
    },
    {
      path: "/forget",
      component: Forget,
      name: "Forget",
    },
    {
      path: "/admin/login",
      component: AdminLogin,
      name: "Admin login",
    },
  ];
  const unprotectedRouts = [
    {
      path: "/",
      component: Home,
      name: "Home",
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
        <Route>
          {authRouts.map((auth, index) => (
            <Route
              key={index}
              path={auth.path}
              name={auth.name}
              element={<auth.component />}
            />
          ))}
        </Route>
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
