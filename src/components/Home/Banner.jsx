import React from "react";
import img1 from "../../assets/image/studyBanner.png";
// import img2 from "../../assets/image/study1.png";
// import img3 from "../../assets/image/study2.webp";
// import img4 from "../../assets/image/study3.png";
// import img5 from "../../assets/image/study4.png";

import { IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="w-full h-[100vh] sm:px-3 md:px-11  flex flex-col-reverse sm:flex-row justify-center sm:justify-around">
      <div className="w-full  sm:w-[50%] flex flex-col justify-center items-center  ">
        <div className="w-full flex flex-col gap-5 justify-between items-start  ">
          <h1 className=" text-4xl text-[var(--colB2)]  font-bold  testShadow ">
            Explore optimal methods for studying flexibly, anywhere, anytime.
          </h1>
          <button className="flex justify-center items-center gap-3 px-10 py-3 cursor-pointer bg-[var(--colG3)] text-white rounded-full mt-5 sm:mt-0 shadow-lg hover:shadow-blue-500/50">
            Explore<IoIosArrowRoundForward className="text-white " size={25} />
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[50%] flex justify-end items-center mt-10 sm:mt-0">
        <img src={img1} alt="study" className="w-full img" />
      </div>
    </div>
  );
};

export default Banner; 
