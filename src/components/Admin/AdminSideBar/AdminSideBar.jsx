import React from "react";
import logo from "../../../assets/image/quizNet2.png";
import avatar from "../../../assets/image/ramrup pic.JPG";
import ToggleButton from "../../ToggleButton";
import { RxDashboard } from "react-icons/rx";
import { adminSideBarRoute } from "../../../routes/NavigationRoute";
import { NavLink } from "react-router-dom";

const AdminSideBar = ({ children, selected }) => {
  return (
    <div className="w-full p-2 h-[100vh] ">
      <div
        className="w-full  h-full flex flex-row bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
    dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
      >
        <div
          className="w-[400px] h-full shadow-xl shadow-[var(--colG3)]  rounded-bl-3xl 
    dark:shadow-gray-700"
        >
          <div
            className="w-full h-[72px] bg-[var(--colB2)] dark:bg-gray-900  shadow-md shadow-[var(--colG3)] 
    dark:shadow-gray-700"
          >
            <img
              src={logo}
              alt="QuizNet logo"
              className="sm:w-48 w-32  cursor-pointer"
            />
          </div>
          <div className="w-full  p-3 py-5 flex flex-col gap-1 ">
            {adminSideBarRoute?.map((Ele, i) => (
              <NavLink
                to={Ele?.path}
                key={i}
                className={`flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded hover:bg-slate-200\
                 dark:hover:bg-gray-700 
                 ${selected == Ele?.name ? "select text-black" : ""}`}
              >
                <Ele.icon size={20} />
                <p className="text-[14px]">{Ele?.name}</p>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="w-full h-full">
          <d
            iv
            className="w-full h-[72px] bg-[var(--colB2)] dark:bg-gray-900 flex justify-end items-center gap-3 rounded-tr-3xl pr-5 shadow-md shadow-[var(--colG3)] 
    dark:shadow-gray-700 "
          >
            <div className=" m-2 hover:bg-[var(--colB6)] hover:text-black rounded-full">
              <ToggleButton />
            </div>
            <div className="w-10 overflow-hidden relative cursor-pointer  flex justify-center items-center ">
              <img
                src={avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full border-white border-2 imageAvatar "
                //   onClick={() => handleNavMenu()}
              />
              <p className="text-[0.7rem] text-center w-full absolute bottom-[-14px] z-10">
                Rahul
              </p>
            </div>
          </d>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
