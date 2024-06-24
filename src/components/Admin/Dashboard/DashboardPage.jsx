import React from "react";
import Chart from "react-apexcharts";
import DashboardService from "../../../service/AdminService/DashboardService";
import icon from "../../../assets/image/study3.png";
import { FaUsers } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { RiSpeakFill } from "react-icons/ri";
import { MdReport } from "react-icons/md";
import Loader from "../../ReUsable/Loader";

const DashboardPage = () => {
  let {
    dashboard,
    loaderInFolder,
    dashboardInfo,
    registerGraph,
    visitGraph,
    commaSeparated,
    handleNavigate,
    handleViewType,
    handleRegisterType,
    handleSelectRegisterYear,
    handleSelectVisitYear,
  } = DashboardService();

  const countViewGraph = {
    series: [
      {
        name: "View count",
        data:
          dashboardInfo?.viewType === "month"
            ? visitGraph?.monthlyVisitData?.data
            : visitGraph?.yearlyVisitData?.data,
        // [162, 162, 432, 321, 162, 207, 194, 175, 167, 223, 104, 265],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      // colors: ["green"],
      //   stroke: { width: 0, curve: "smooth" },
      //   fill: { opacity: 1, type: "solid"},

      yaxis: {
        labels: {
          style: {
            // colors: "#fff",
          },
        },
      },
      xaxis: {
        title: {
          // text: "years",
          style: { fontSize: 20, color: "#165baa" },
        },

        categories:
          dashboardInfo?.viewType === "month"
            ? [
                "jan",
                "feb",
                "mar",
                "Apr",
                "may",
                "jun",
                "jul",
                "Aug",
                "oct",
                "Sep",
                "Nov",
                "Dec",
              ]
            : visitGraph?.yearlyVisitData?.years,
        labels: {
          style: {
            // colors: "#fff",
          },
        },
        grid: {
          show: false, // Hide grid lines
        },
        fill: {
          opacity: 1, // Set fill opacity to make the area chart fully opaque
        },
        markers: {
          size: 0, // Hide markers
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: true,
        fillSeriesColor: true,
      },
      legend: {
        show: true,
        labels: {
          //   colors: "#fff",
          useSeriesColors: false,
        },
      },
    },
  };
  const registersGraph = {
    series: [
      {
        name: "Register user",
        data:
          dashboardInfo?.registerType === "month"
            ? registerGraph?.monthlyRegistrationData?.data
            : registerGraph?.yearlyRegistrationData?.data,
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },

      //   colors: ["#165BAA"],
      //     stroke: { width: 0, curve: "smooth" },
      //     fill: { opacity: 1, type: "solid" },

      yaxis: {
        labels: {
          style: {
            // colors: "#fff",
          },
        },
      },
      xaxis: {
        title: {
          // text: "years",
          style: { fontSize: 20, color: "#165baa" },
        },

        categories:
          dashboardInfo?.registerType === "month"
            ? [
                "jan",
                "feb",
                "mar",
                "Apr",
                "may",
                "jun",
                "jul",
                "Aug",
                "oct",
                "Sep",
                "Nov",
                "Dec",
              ]
            : registerGraph?.yearlyRegistrationData?.years,
        labels: {
          style: {
            // colors: "#fff",
          },
        },
        grid: {
          show: false, // Hide grid lines
        },
        fill: {
          opacity: 1, // Set fill opacity to make the area chart fully opaque
        },
        markers: {
          size: 0, // Hide markers
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: true,
        fillSeriesColor: true,
      },
      legend: {
        show: true,
        labels: {
          //   colors: "#fff",
          useSeriesColors: false,
        },
      },
    },
  };

  return (
    <div className="p-4">
      <>
        <div
          className="w-full flex  justify-between  items-center flex-wrap gap-1 bg-[var(--colW2)]
       dark:bg-gray-800 rounded-lg mb-2 p-2 "
        >
          <div>
            <img src={icon} alt="study..." className="w-[200px] imgShadow " />
          </div>
          {/* <p>Evaluation of the User Progress </p> */}
          <div className="flex gap-2 bg-white dark:bg-gray-700 p-4 rounded-lg">
            <div className="min-w-[100px] flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#E7F4FF]">
              <FaUsers size={30} color={"#008FFB"} />
              <p className="font-medium text-[10px] text-slate-500">
                Total User
              </p>
              <p className="font-bold text-[14px] text-gray-600">
                {commaSeparated(dashboard?.totalUser)}
              </p>
            </div>
            <div className="min-w-[100px]  flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#E7FCF5]">
              <FaPersonRunning size={30} color={"#00E396"} />
              <p className="font-medium text-[10px] text-slate-500">
                Active User
              </p>
              <p className="font-bold text-[14px] text-gray-600">
                {commaSeparated(dashboard?.activeUser)}
              </p>
            </div>
            <div className="min-w-[100px] flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#FFF8E9]">
              <FaBed size={30} color={"#FEB019"} />
              <p className="font-medium text-[10px] text-slate-500">
                InActive User
              </p>
              <p className="font-bold text-[14px] text-gray-600">
                {commaSeparated(dashboard?.inActiveUser)}
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-white dark:bg-gray-700 p-3 rounded-lg">
            <div
              className="min-w-[100px] flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#E7F7FC] cursor-pointer"
              onClick={() => handleNavigate("/admin/contact")}
            >
              <RiSpeakFill size={35} color={"#00abe4"} />
              <p className="font-medium text-[10px] text-slate-500">
                User Enquiry
              </p>

              <p className="font-bold text-[14px] text-gray-600">
                {commaSeparated(dashboard?.contactUs)}
              </p>
            </div>
            <div
              className="min-w-[100px] flex justify-center flex-col items-center gap-1 p-3 rounded-lg shadow-lg bg-[#FDF9F2] cursor-pointer"
              onClick={() => handleNavigate("/admin/report")}
            >
              <MdReport size={35} color={"#EABC77"} />
              <p className="font-medium text-[10px] text-slate-500">
                Report Question
              </p>

              <p className="font-bold text-[14px] text-gray-600">
                {commaSeparated(dashboard?.reportQuestion)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2  gap-1 ">
          <div className="bg-[var(--colW2)] dark:bg-gray-800 rounded-lg ">
            <div className="flex justify-between items-center pt-2 px-2">
              <h1 className="font-bold text-gray-700 dark:text-gray-100 ">
                Register User
              </h1>
            </div>
            <div
              className={` w-full p-2 flex ${
                dashboardInfo?.registerType === "year"
                  ? "justify-end items-end"
                  : "justify-between "
              }`}
            >
              {dashboardInfo?.registerType === "year" ? (
                ""
              ) : (
                <div className="flex bg-white dark:bg-gray-700 gap-1 px-2  py-1 rounded-full shadow overflow-scroll max-w-[300px]">
                  {registerGraph?.yearlyRegistrationData?.years?.map(
                    (year, i) => (
                      <div
                        key={i}
                        className={`text-[12px] shadow flex justify-center items-center px-3 py-1 rounded-full cursor-pointer ${
                          dashboardInfo?.selectRegisterYear === year
                            ? "bg-[var(--colB1)] text-white "
                            : null
                        }`}
                        onClick={() => handleSelectRegisterYear(year)}
                      >
                        <p className=" ">{year}</p>
                      </div>
                    )
                  )}
                </div>
              )}
              <div className="flex p-1 bg-[var(--colW3)] dark:bg-gray-600 rounded-full text-[12px] font-medium ">
                <p
                  className={`${
                    dashboardInfo?.registerType === "month"
                      ? "bg-orange-400 text-white"
                      : null
                  }  py-1 px-3 rounded-full cursor-pointer`}
                  onClick={() => handleRegisterType("month")}
                >
                  Month
                </p>
                <p
                  className={`${
                    dashboardInfo?.registerType === "year"
                      ? "bg-orange-400 text-white"
                      : null
                  } py-1 px-3 rounded-full cursor-pointer `}
                  onClick={() => handleRegisterType("year")}
                >
                  Year
                </p>
              </div>
            </div>
            {dashboardInfo.registerLoader ? (
              <div className="h-[315px] w-full flex justify-center items-center">
                <Loader folderLoader={true} />
              </div>
            ) : (
              <Chart
                type="bar"
                height={300}
                options={registersGraph.options}
                series={registersGraph.series}
              />
            )}
          </div>
          <div className="bg-[var(--colW2)] dark:bg-gray-800 rounded-lg relative ">
            <div className="flex justify-between items-center p-2">
              <h1 className="font-bold text-gray-700 dark:text-gray-100 ">
                User Visit on course
              </h1>
            </div>
            <div
              className={` w-full p-2 flex ${
                dashboardInfo?.viewType === "year"
                  ? "justify-end items-end"
                  : "justify-between "
              }`}
            >
              {dashboardInfo?.viewType === "year" ? (
                ""
              ) : (
                <div className="flex bg-white dark:bg-slate-700 gap-1 px-2  py-1 rounded-full shadow overflow-scroll max-w-[300px]">
                  {visitGraph?.yearlyVisitData?.years?.map((year, i) => (
                    <div
                      key={i}
                      className={`text-[12px] shadow flex justify-center items-center px-3 py-1 rounded-full cursor-pointer ${
                        dashboardInfo.selectVisitYear === year
                          ? "bg-[var(--colB1)] text-white "
                          : null
                      }`}
                      onClick={() => handleSelectVisitYear(year)}
                    >
                      <p className=" ">{year}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex p-1 bg-[var(--colW3)] dark:bg-gray-600 rounded-full text-[12px] font-medium ">
                <p
                  className={`${
                    dashboardInfo?.viewType === "month"
                      ? "bg-orange-400 text-white "
                      : null
                  }  py-1 px-3 rounded-full cursor-pointer `}
                  onClick={() => handleViewType("month")}
                >
                  Month
                </p>
                <p
                  className={`${
                    dashboardInfo?.viewType === "year"
                      ? "bg-orange-400 text-white"
                      : null
                  } py-1 px-3 rounded-full cursor-pointer `}
                  onClick={() => handleViewType("year")}
                >
                  Year
                </p>
              </div>
            </div>
            {dashboardInfo.visitLoader ? (
              <div className="h-[315px] w-full flex justify-center items-center">
                <Loader folderLoader={true} />
              </div>
            ) : (
              <Chart
                type="area"
                height={300}
                options={countViewGraph.options}
                series={countViewGraph.series}
              />
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default DashboardPage;
