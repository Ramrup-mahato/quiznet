import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Home from "../Screen/Home";
// import CourseDetails from "../Screen/CourseDetails";
// import QuizMain from "../Screen/QuizMain";
// import PTEScreen from "../Screen/PTEScreen";
// import Login from "../Screen/auth/Login";
// import Registration from "../Screen/auth/Registration";
// import Forget from "../Screen/auth/Forget";
// import AdminLogin from "../Screen/Admin/AdminScreen/AdminLogin";
// import Dashboard from "../Screen/Admin/DashboardScreen/Dashboard";
// import Employee from "../Screen/Admin/EmployeeScreen/Employee";
// import Faq from "../Screen/Admin/FAQScreen/Faq";
// import Report from "../Screen/Admin/ReportScreen/Report";
// import Contact from "../Screen/Admin/ContactScreen/Contact";
// import AddCourse from "../Screen/Admin/AddCourseScreen/AddCourse";
import AuthGard from "../components/AuthGard/AuthGard";
import AdminAuthGard from "../components/AuthGard/AdminAuthGard";
import NotFound from "../components/ReUsable/NotFound ";
// import About from "../Screen/About";
// import Setting from "../Screen/Setting";
// import UsersManager from "../Screen/Admin/UserScreen/UsersManager";
// import WorkSpace from "../Screen/WorkSpace";
import Loader from "../components/ReUsable/Loader";
const Home = lazy(() => import("../Screen/Home"));
const CourseDetails = lazy(() => import("../Screen/CourseDetails"));
const QuizMain = lazy(() => import("../Screen/QuizMain"));
const PTEScreen = lazy(() => import("../Screen/PTEScreen"));
const Login = lazy(() => import("../Screen/auth/Login"));
const Registration = lazy(() => import("../Screen/auth/Registration"));
const Forget = lazy(() => import("../Screen/auth/Forget"));
const AdminLogin = lazy(() => import("../Screen/Admin/AdminScreen/AdminLogin"));
const Dashboard = lazy(() =>
  import("../Screen/Admin/DashboardScreen/Dashboard")
);
const Employee = lazy(() => import("../Screen/Admin/EmployeeScreen/Employee"));
const Faq = lazy(() => import("../Screen/Admin/FAQScreen/Faq"));
const Report = lazy(() => import("../Screen/Admin/ReportScreen/Report"));
const Contact = lazy(() => import("../Screen/Admin/ContactScreen/Contact"));
const AddCourse = lazy(() =>
  import("../Screen/Admin/AddCourseScreen/AddCourse")
);
const About = lazy(() => import("../Screen/About"));
const Setting = lazy(() => import("../Screen/Setting"));
const UsersManager = lazy(() =>
  import("../Screen/Admin/UserScreen/UsersManager")
);
const WorkSpace = lazy(() => import("../Screen/WorkSpace"));

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
      path: "/about",
      component: About,
      name: "about",
    },
  ];

  const adminProtectedRouts = [
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
      path: "/admin/users",
      component: UsersManager,
      name: "Users manager",
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
      path: "/profile",
      component: Setting,
      name: "profile",
    },
    {
      path: "/workspace",
      component: WorkSpace,
      name: "workspace",
    },
    {
      path: "/pte",
      component: PTEScreen,
      name: "PTE",
    },
  ];
  return (
    <Router basename="/">
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-[100vh]">
            <Loader folderLoader={true} />
          </div>
        }
      >
        <Routes>
          {authRouts.map((auth, index) => (
            <Route
              key={index}
              path={auth.path}
              name={auth.name}
              element={<auth.component />}
            />
          ))}

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

          {protectedRouts.map((rout, index) => (
            <Route
              key={index}
              path={rout.path}
              name={rout.name}
              element={<AuthGard element={rout.component} />}
            />
          ))}

          {adminProtectedRouts.map((rout, index) => (
            <Route
              key={index}
              path={rout.path}
              name={rout.name}
              element={<AdminAuthGard element={rout.component} />}
            />
          ))}

          <Route path="*" element={<NotFound />} />
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route exact path="/About" element={<About />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};
