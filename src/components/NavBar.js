import React, { useContext, useEffect, useRef, useState } from "react";
import logo1 from "../assets/image/quizNet2.png";
// import avatar from "../assets/image/ramrup pic.JPG";
import ToggleButton from "./ToggleButton";
import { NavLink } from "react-router-dom";
import { navRoute } from "../routes/NavigationRoute";
import ContextStore from "../context/Context";
import TextInput from "./ReUsable/TextInput";
import { MdOutlineSearch } from "react-icons/md";

const NavBar = ({ pageName }) => {
  const navMenuRef = useRef(null);
  const { userDetails, token } = useContext(ContextStore);
  const [navMenu, setNavMenu] = useState(false);

  const handleNavMenu = () => {
    setNavMenu((old) => !old);
  };

  const handleLogout = () => {
    localStorage.removeItem("quizNetToken");
    window.location.href = "/";
  };
  const handleClickOutside = (event) => {
    if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
      setNavMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`w-full flex justify-center items-center fixed top-0 z-20 `}
    >
      <div className="md:w-[90%] w-[100%] sm:h-[75px] h-[50px] rounded-full m-2 px-3  flex flex-row justify-between items-center bg-[var(--colB2)] dark:bg-gray-900 dark:text-white drop-shadow-lg ">
        <div>
          <NavLink to={"/"}>
            <img
              src={logo1}
              alt="QuizNet"
              className="sm:w-48 w-32  cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="relative flex flex-row  items-center justify-center">
          <div className=" bg-white rounded-full justify-center items-center px-3 hidden md:flex  ">
            <MdOutlineSearch />
            <input
              placeholder='Enter Course "Physics"...'
              className=" searchInput md:min-w-[300px] lg:min-w-[500px] "
            />
          </div>
          {/* <ul className="hidden flex-row  items-center cursor-pointer  sm:flex">
            {navRoute?.map((name, index) => (
              <NavLink key={index} to={name.path}>
                <li className="px-3 py-2  text-[14px] font-bold hover:bg-[var(--colB6)] hover:text-black rounded-sm ">
                  {name.name}
                </li>
              </NavLink>
            ))}
          </ul> */}
          <div className=" m-2 hover:bg-[var(--colB6)] hover:text-black rounded-full">
            <ToggleButton />
          </div>
          {/* <RxHamburgerMenu className="w-6 h-6 mx-2 sm:hidden  cursor-pointer" /> */}
          {token ? (
            <div className="w-10 overflow-hidden relative cursor-pointer  flex justify-center items-center ">
              {userDetails?.avatar ? (
                <img
                  src={userDetails?.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-white border-2 imageAvatar "
                  onClick={() => handleNavMenu()}
                />
              ) : (
                <div className="">
                  <p
                    className="w-10 h-10 rounded-full border-white border-2 imageAvatar flex justify-center items-center font-bold 
                   bg-[#512Dab] text-[var(--colW2)] text-[25px]"
                    onClick={() => handleNavMenu()}
                  >
                    {userDetails?.username?.slice(0, 1)?.toUpperCase()}
                  </p>
                </div>
              )}
              {/* <p className="text-[0.7rem] text-center w-full absolute bottom-[-14px]">
              Rahul
            </p> */}
            </div>
          ) : (
            <>
              <NavLink to={"/login"}>
                <p className="pl-3 py-2  text-[13px] font-bold hover:text-black rounded-sm ">
                  Sign In
                </p>
              </NavLink>
              <div className="text-gray-500">|</div>
              <NavLink to={"/registration"}>
                <p className="pr-3 py-2  text-[13px] font-bold  hover:text-black rounded-sm ">
                  Sign Up
                </p>
              </NavLink>
            </>
          )}
          {navMenu === true && (
            <div className="absolute top-10 right-1  "  ref={navMenuRef}>
              <div
                className="w-[200px] h-full flex flex-col bg-[var(--colW3)] dark:bg-gray-800 shadow-xl shadow-[var(--colG3)]
           dark:shadow-gray-700 text-black dark:text-white  rounded-lg "
              >
                <ul className="w-full flex flex-col  cursor-pointer p-2 gap-1">
                  {navRoute?.map((name, index) => (
                    <NavLink key={index} to={name?.path}>
                      <li
                        className={`px-3 py-2 w-full hover:bg-[var(--colB6)] hover:text-black rounded-md  ${
                          pageName === name?.name
                            ? "bg-[var(--colB5)] text-black"
                            : ""
                        }`}
                      >
                        {name?.name}
                      </li>
                    </NavLink>
                  ))}
                  <NavLink to={"/setting"}>
                    <li
                      className={`px-3 py-2 w-full hover:bg-[var(--colB6)] hover:text-black rounded-md  ${
                        pageName === "setting"
                          ? "bg-[var(--colB5)] text-black"
                          : ""
                      }`}
                    >
                      Setting
                    </li>
                  </NavLink>
                  <li
                    onClick={() => handleLogout()}
                    className={`px-3 py-2 w-full hover:bg-[var(--colB6)] hover:text-black rounded-md  ${
                      pageName === "setting"
                        ? "bg-[var(--colB5)] text-black"
                        : ""
                    }`}
                  >
                    logout
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
