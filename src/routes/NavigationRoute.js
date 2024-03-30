import { RxDashboard } from "react-icons/rx";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";

export const navRoute = [
  {
    name: "Home",
    path: "/",
  },
  // {
  //   name: "PTEpractice",
  //   path: "/pte",
  // },
  {
    name: "Learn",
    path: "/about",
  },
  {
    name: "Score",
    path: "/score",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Result",
    path: "/result",
  },
];

export const adminSideBarRoute = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: RxDashboard,
  },
  {
    name: "Employees",
    path: "/admin/employees",
    icon: FaPeopleGroup,
  },
  {
    name: "Course Material",
    path: "/admin/course",
    icon: IoBookSharp,
  },
  {
    name: "Add Course",
    path: "/admin/addCourse",
    icon: BiSolidBookAdd,
  },
  {
    name: "Contact user",
    path: "/admin/contact",
    icon: RiContactsLine,
  },
  {
    name: "Report Question",
    path: "/admin/report",
    icon: MdReportProblem,
  },
  {
    name: "FAQ",
    path: "/admin/faq",
    icon: FaQuestionCircle,
  },
];
