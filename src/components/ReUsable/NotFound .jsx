import React from "react";
import pic from "../../assets/image/studyBanner.png";
import { NavLink } from "react-router-dom";

const NotFound = ({ noData }) => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col pt-[50px] sm:pt-[100px]">
      {noData ? (
        <h1 className="font-black text-[var(--colB1)] text-[50px]">
          <i>No Data Found !</i>
        </h1>
      ) : (
        <h1 className="font-black text-[var(--colB1)] text-[100px]">404</h1>
      )}
      <img src={pic} alt="not found" className="w-[300px] sm:w-[500px] " />
      <p className="font-semibold  text-[20px] dark:text-white">
        Click{" "}
        <NavLink to={"/"}>
          <span className="text-[var(--colB1)] cursor-pointer font-bold">
            Here
          </span>{" "}
        </NavLink>
        to see list Courses!
      </p>
    </div>
  );
};

export default NotFound;
