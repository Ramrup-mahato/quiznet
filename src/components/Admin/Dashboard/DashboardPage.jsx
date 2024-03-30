import React from "react";
import Chart from "react-apexcharts";
import DashboardService from "../../../service/AdminService/DashboardService";
import icon from "../../../assets/image/study3.png";
import { FaUsers } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { RiSpeakFill } from "react-icons/ri";
import { MdReport } from "react-icons/md";

const DashboardPage = () => {
  let { activeInactive, registerUser, commaSeparated, handleNavigate } =
    DashboardService();

  return (
    <div className="p-4">
      <div
        className="w-full flex  justify-between  items-center flex-wrap gap-1 bg-[var(--colW2)]
       dark:bg-gray-800 rounded-lg mb-2 p-2 "
      >
        <div>
          <img
            src={icon}
            alt="study image ."
            className="w-[200px] imgShadow "
          />
        </div>
        {/* <p>Evaluation of the User Progress </p> */}
        <div className="flex gap-2 bg-white dark:bg-gray-700 p-4 rounded-lg">
          <div className="min-w-[100px] flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#E7F4FF]">
            <FaUsers size={30} color={"#008FFB"} />
            <p className="font-medium text-[10px] text-slate-500">Total User</p>
            <p className="font-bold text-[14px] text-gray-600">
              {commaSeparated(746466)}
            </p>
          </div>
          <div className="min-w-[100px]  flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#E7FCF5]">
            <FaPersonRunning size={30} color={"#00E396"} />
            <p className="font-medium text-[10px] text-slate-500">
              Active User
            </p>
            <p className="font-bold text-[14px] text-gray-600">
              {commaSeparated(554546)}
            </p>
          </div>
          <div className="min-w-[100px] flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#FFF8E9]">
            <FaBed size={30} color={"#FEB019"} />
            <p className="font-medium text-[10px] text-slate-500">
              InActive User
            </p>
            <p className="font-bold text-[14px] text-gray-600">
              {commaSeparated(4466)}
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
          <div
            className="min-w-[150px] flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#E7F7FC] cursor-pointer"
            onClick={() => handleNavigate("/admin/contact")}
          >
            <RiSpeakFill size={55} color={"#00abe4"} />
            <p className="font-medium text-[10px] text-slate-500">
              User Enquiry
            </p>

            <p className="font-bold text-[14px] text-gray-600">
              {commaSeparated(46)}
            </p>
          </div>
          <div
            className="min-w-[150px] flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#FDF9F2] cursor-pointer"
            onClick={() => handleNavigate("/admin/report")}
          >
            <MdReport size={55} color={"#EABC77"} />
            <p className="font-medium text-[10px] text-slate-500">
              Report Question
            </p>

            <p className="font-bold text-[14px] text-gray-600">
              {commaSeparated(46)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  gap-1 ">
        <div className="bg-[var(--colW2)] dark:bg-gray-800 rounded-lg ">
          <div className="flex justify-between items-center p-2">
            <h1 className="font-bold text-gray-700 dark:text-gray-100 ">
              Register User
            </h1>
            <div className="flex p-1 bg-[var(--colW3)] dark:bg-gray-600 rounded-full text-[12px] font-medium ">
              <p className="bg-orange-400 py-1 px-3 rounded-full cursor-pointer text-white">
                Month
              </p>
              <p className="py-1 px-3 rounded-full cursor-pointer ">Year</p>
            </div>
          </div>
          <Chart
            type="bar"
            height={300}
            options={registerUser.options}
            series={registerUser.series}
          />
        </div>
        <div className="bg-[var(--colW2)] dark:bg-gray-800 rounded-lg relative ">
          <div className="flex justify-between items-center p-2">
            <h1 className="font-bold text-gray-700 dark:text-gray-100 ">
              Total User
            </h1>
            <div className="flex p-1 bg-[var(--colW3)] dark:bg-gray-600 rounded-full text-[12px] font-medium ">
              <p className="bg-orange-400 py-1 px-3 rounded-full cursor-pointer text-white">
                Month
              </p>
              <p className="py-1 px-3 rounded-full cursor-pointer">Year</p>
            </div>
          </div>
          <Chart
            type="area"
            height={300}
            options={activeInactive.options}
            series={activeInactive.series}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
