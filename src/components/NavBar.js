import React, { useContext, useEffect, useRef, useState } from "react";
import logo1 from "../assets/image/quizNet2.png";
import ToggleButton from "./ToggleButton";
import { NavLink, useNavigate } from "react-router-dom";
import { navRoute } from "../routes/NavigationRoute";
import ContextStore from "../context/Context";
import { MdOutlineSearch } from "react-icons/md";
import { toastError } from "../utils/tostify";
import { apiGetResponse } from "../utils/Helper";
import { getData } from "./AuthGard/LogGard";
import Loader from "./ReUsable/Loader";
import { RxCross2 } from "react-icons/rx";

const NavBar = ({ pageName }) => {
  const navigation = useNavigate();
  const navMenuRef = useRef(null);
  const { userDetails, token } = useContext(ContextStore);
  const [navMenu, setNavMenu] = useState(false);
  const [loaderInFolder, setLoaderInFolder] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [searchList, setSearchList] = useState([]);

  const handleNavMenu = () => {
    setNavMenu((old) => !old);
  };
  const handleSelectTopic = (path) => {
    navigation(`/${path}`);
    setSearchList([]);
    setSearchText("");
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
  const handleClearSearch = () => {
    setSearchList([]);
    setSearchText("");
  };
  const handleSearch = async (e) => {
    let val = e.target.value;
    setSearchText(val);
    if (val.length > 1) {
      setLoaderInFolder(true);
      setTimeout(async () => {
        try {
          let res = await apiGetResponse(
            await getData(`/search?search=${val}`, token)
          );
          if (res?.success) {
            setSearchList(res?.data);
            setLoaderInFolder(false);
          }
        } catch (error) {
          setLoaderInFolder(false);
          console.error(error);
          toastError(error?.message || "something went wrong while searching");
        }
      }, 500);
    } else {
      setSearchList([]);
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
        <div className="relative flex flex-row  items-center ">
          {token && (
            <div className=" bg-white dark:bg-gray-700 rounded-full justify-center items-center px-3 hidden md:flex  ">
              <MdOutlineSearch className="text-gray-500" />
              <input
                placeholder='Enter Course "Physics"...'
                value={searchText}
                className=" searchInput md:min-w-[300px] lg:min-w-[500px] bg-white dark:bg-gray-700 "
                onChange={(e) => handleSearch(e)}
              />
              {(searchText.length > 0 || searchList.length > 0) && (
                <RxCross2
                  onClick={() => handleClearSearch()}
                  className="cursor-pointer text-gray-400"
                />
              )}
            </div>
          )}
          {loaderInFolder === true ? (
            <div className="absolute top-[50px] bg-white dark:bg-gray-800 p-5 md:min-w-[300px] lg:min-w-[500px] rounded-lg flex justify-center items-center">
              <Loader folderLoader={true} />
            </div>
          ) : (
            <>
              {searchList.length > 0 ? (
                <div className="absolute top-[50px] bg-white dark:bg-gray-800 dark:text-gray-100 p-5 md:min-w-[300px] lg:min-w-[500px] rounded-lg hidden md:block ">
                  {searchList?.slice(0, 7)?.map((ele, i) => (
                    <div
                      className="w-full bg-[var(--colW1)] dark:bg-gray-900 dark:text-gray-100 m-1 p-2 border rounded flex justify-start items-center gap-4 cursor-pointer"
                      onClick={() => handleSelectTopic(ele?.subjectPath)}
                    >
                      <img
                        src={
                          ele?.courseImage ||
                          ele?.subjectImage ||
                          ele?.chapterImage
                        }
                        alt="search course.."
                        className="w-[50px] h-[40px] rounded"
                      />
                      <div>
                        <p className="text-[13px] text-gray-700 dark:text-gray-100 font-bold">
                          {ele?.courseTitle ||
                            ele?.subjectTitle ||
                            ele?.chapterTitle}
                        </p>
                        <p className=" text-[12px] text-gray-500 dark:text-gray-100">
                          {ele?.coursePath ||
                            ele?.subjectPath ||
                            ele?.chapterPath}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {searchText.length > 1 && (
                    <div className="absolute top-[50px] bg-white dark:bg-gray-800 p-5 md:min-w-[300px] lg:min-w-[500px] rounded-lg flex justify-center items-center">
                      <p className="bg-[var(--colW1)] dark:bg-gray-900 border rounded px-3 p-1">
                        No Data found !
                      </p>
                    </div>
                  )}
                </>
              )}
            </>
          )}
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
                  className="w-10 h-10 rounded-full border-white border-2 imageAvatar object-cover"
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
                <p className="pl-3 py-2  text-[13px] font-bold hover:text-black dark:hover:text-gray-100 rounded-sm ">
                  Sign In
                </p>
              </NavLink>
              <div className="text-gray-500">|</div>
              <NavLink to={"/registration"}>
                <p className="pr-3 py-2  text-[13px] font-bold  hover:text-black dark:hover:text-gray-100 rounded-sm ">
                  Sign Up
                </p>
              </NavLink>
            </>
          )}
          {navMenu === true && (
            <div className="absolute top-10 right-1  " ref={navMenuRef}>
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
                  <NavLink to={"/profile"}>
                    <li
                      className={`px-3 py-2 w-full hover:bg-[var(--colB6)] hover:text-black rounded-md  ${
                        pageName === "profile"
                          ? "bg-[var(--colB5)] text-black"
                          : ""
                      }`}
                    >
                      Profile
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
