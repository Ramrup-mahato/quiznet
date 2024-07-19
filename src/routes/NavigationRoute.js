import { RxDashboard } from "react-icons/rx";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { MdHome, MdReportProblem } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";

export const navRoute = [
  {
    icon: MdHome,
    name: "Home",
    path: "/",
  },
  // {
  //   name: "PTEpractice",
  //   path: "/pte",
  // },
  {
    name: "About",
    path: "/about",
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
    icon:IoBookSharp,
  },
  {
    name: "User Manager",
    path: "/admin/users",
    icon: FaPeopleGroup ,
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
