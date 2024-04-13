import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screen/Home";
import CourseDetails from "../Screen/CourseDetails";
import QuizMain from "../Screen/QuizMain";
import PTEScreen from "../Screen/PTEScreen";
import Login from "../Screen/auth/Login";
import Registration from "../Screen/auth/Registration";
import Forget from "../Screen/auth/Forget";
import AdminLogin from "../Screen/Admin/AdminScreen/AdminLogin";
import Dashboard from "../Screen/Admin/DashboardScreen/Dashboard";
import Employee from "../Screen/Admin/EmployeeScreen/Employee";
import Faq from "../Screen/Admin/FAQScreen/Faq";
import Report from "../Screen/Admin/ReportScreen/Report";
import Contact from "../Screen/Admin/ContactScreen/Contact";
import CourseMaterial from "../Screen/Admin/CourseMaterialScreen/CourseMaterial";
import AddCourse from "../Screen/Admin/AddCourseScreen/AddCourse";

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
    {
      path: "/admin/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
    {
      path: "/admin/employees",
      component: Employee,
      name: "Employees",
    },
    {
      path: "/admin/course",
      component: CourseMaterial,
      name: "Course Material",
    },
    {
      path: "/admin/addCourse",
      component: AddCourse,
      name: "Add course",
    },
    {
      path: "/admin/contact",
      component: Contact,
      name: "Contact",
    },
    {
      path: "/admin/report",
      component: Report,
      name: "Report",
    },
    {
      path: "/admin/faq",
      component: Faq,
      name: "FAQ",
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
