import React, { useEffect, useState } from "react";
import logo from "../assets/image/QuizNet.png";
import logo1 from "../assets/image/quizNet2.png";
import avatar from "../assets/image/ramrup pic.JPG";
import ToggleButton from "./ToggleButton";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { navRoute } from "../routes/NavigationRoute";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [visibleTop, setVisibleTop] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    setVisible(isScrollingDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    setTimeout(() => setVisibleTop(!visible), 400);
  }, [visible]);

  return (
    <nav
      className={`w-full flex justify-center items-center fixed top-0 z-20 `}
    >
      <div className="md:w-[90%] w-[100%] sm:h-[75px] h-[50px] rounded-full m-2 px-3  flex flex-row justify-between items-center bg-[var(--colB2)] dark:bg-gray-900 dark:text-white drop-shadow-lg ">
        <div>
          <NavLink to={'/'}>
            <img
              src={logo1}
              alt="QuizNet"
              className="sm:w-48 w-32  cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="flex flex-row  items-center justify-center">
          <ul className="hidden flex-row  items-center cursor-pointer  sm:flex">
            {navRoute?.map((name, index) => (
              <NavLink key={index} to={name.path}>
                <li className="px-3 py-2 hover:bg-[var(--colB6)] hover:text-black rounded-sm ">
                  {name.name}
                </li>
              </NavLink>
            ))}
          </ul>
          <div className="px-2 py-2 hover:bg-[var(--colB6)] hover:text-black rounded-full">
            <ToggleButton />
          </div>
          <RxHamburgerMenu className="w-6 h-6 mx-2 sm:hidden  cursor-pointer" />
          <div className="w-12 relative cursor-pointer hidden sm:flex justify-center items-center ">
            <img
              src={avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full border-white border-2 imageAvatar "
            />
            {/* <p className="text-[0.7rem] text-center w-full absolute bottom-[-14px]">
              Rahul
            </p> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
