import React from "react";
// import { courseName, topicsName } from "../../utils/data";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaArrowLeftLong,
  FaBookOpen,
  FaFilePdf,
  FaFolderOpen,
  FaRegCircleDown,
} from "react-icons/fa6";
import CourseDetailsService from "../../service/courseDetailsService";
// import { useParams } from "react-router-dom";
import Loader from "../ReUsable/Loader";
import NotFound from "../ReUsable/NotFound ";
import { BsNintendoSwitch } from "react-icons/bs";
import pdfImg from "../../assets/image/pdf.png";
import { MdVerified } from "react-icons/md";
import { NavLink } from "react-router-dom";
import test from "../../assets/image/test1.png"

const CourseDetailsPage = () => {
  const {
    path,
    subject,
    loaderInFolder,
    handleSelectTopic,
    viewCourse,
    toggleView,
    handleOpenPdf,
  } = CourseDetailsService();
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="w-full min-h-[calc(100vh-115px)] lg:min-h-[100vh]   sm:px-5 gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
      {loaderInFolder ? (
        <Loader folderLoader={true} />
      ) : (
        <>
          {subject?._id ? (
            <>
              {viewCourse === "more" ? (
                <div
                  className=" w-full h-full flex flex-col 
              text-black dark:text-gray-300 rounded-bl-3xl rounded-tr-3xl "
                >
                  <div
                    className="bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
                  font-semibold text-base  p-2 rounded-tr-3xl flex justify-between items-center"
                  >
                    <div className="flex  justify-center items-center">
                      <FaArrowLeftLong
                        size={20}
                        className="cursor-pointer mr-1 "
                        onClick={() => handleGoBack("")}
                      />
                      <h3>{subject?.subjectTitle}</h3>
                    </div>
                    <BsNintendoSwitch
                      title="change view"
                      className={`mr-3 cursor-pointer text-[var(--colG3)]  ${
                        viewCourse === "more" ? "" : "rotate-180"
                      }`}
                      onClick={() => toggleView()}
                    />
                  </div>
                  <div className="userMainDivs p-1 gap-1 sm:p-2">
                    {subject?.chapters?.map((ele, i) => (
                      <div
                        key={i}
                        className="item m-[2px] bg-[var(--colW1)] dark:bg-gray-700 flex justify-between items-center flex-col  mt-1 sm:my-2    shadow-slate-500 dark:shadow-slate-900
               rounded-lg text-[14px]  cursor-pointer shadow-2xl"
                      >
                        <div>
                          <img
                            src={ele?.chapterImage || pdfImg}
                            alt={ele?.chapterTitle}
                            className="w-[200vw] sm:w-[250vw] h-[150px] sm:h-[230px] rounded-t-lg object-cover"
                          />
                        </div>
                        <div className="w-full py-2 px-1 sm:px-3 text-gray-700 dark:text-gray-200">
                          <p className="font-extrabold text-blue-900 dark:text-blue-100">
                            {ele?.chapterTitle}
                          </p>
                          <div className="py-1 text-[12px] flex justify-between ">
                            {ele?.pdfStatus === true ? (
                              <>
                                <p>
                                  Format:
                                  <span className="font-bold">.pdf </span>{" "}
                                </p>
                                <NavLink to={"/term&condition"}>
                                  <p className="pr-3 hover:text-[var(--colB1)] hover:underline font-bold">
                                    T&C
                                  </p>
                                </NavLink>
                              </>
                            ) : (
                              <>
                                <p className="text-[11px] sm:text-[13px]  flex justify-center items-center">
                                  <FaBookOpen size={15} color="#A1662F " />
                                  &nbsp;
                                  <span className="font-bold  underline">
                                    {" "}
                                    {"100"}&nbsp;
                                  </span>
                                  questions
                                </p>
                                <NavLink to={"/term&condition"}>
                                  <p className="pr-3 hover:text-[var(--colB1)] hover:underline font-bold">
                                    T&C
                                  </p>
                                </NavLink>
                              </>
                            )}
                          </div>
                          <div className=" text-[12px] flex justify-between items-center ">
                            {ele?.pdfStatus === true ? (
                              <>
                                <p className=" py-2 font-bold">Download</p>
                                <FaRegCircleDown
                                  size={30}
                                  className="text-[var(--colG2)] cursor-pointer"
                                  onClick={() => handleOpenPdf(ele?.pdfFile)}
                                />
                              </>
                            ) : (
                              <>
                                <div className="flex justify-center items-center">
                                  <MdVerified className="text-[var(--colG4)] text-[14px] md:text-[20px]" />

                                  <p className="text-[11px] sm:text-[13px]">
                                    <span className="text-[var(--colG4)]">
                                      Verified
                                    </span>
                                  </p>
                                </div>
                                <p
                                  className={` rounded-md px-2 sm:px-7 py-1 sm:py-2 font-bold  flex justify-center items-center ${
                                    ele?.test
                                      ? "text-[var(--colW1)]  bg-[var(--colG4)]  font-black border-[2px] border-[var(--colG4)]"
                                      : "text-[var(--colW1)] bg-[var(--colG2)] font-black border-[2px] border-[var(--colG2)]"
                                  }`}
                                  onClick={() =>
                                    handleSelectTopic(
                                      ele,
                                      ele?.chapterPath,
                                      path
                                    )
                                  }
                                >
                                  {ele?.test ? "Start Test" : "Start Quiz"}
                                </p>
                              </>
                            )}
                          </div>
                          <div className=" text-[12px] flex justify-between items-center border-t-2 mt-1 ">
                            <p>
                              website:
                              <span className="font-bold hover:text-[var(--colB1)] hover:underline">
                                {" "}
                                www.quiznp.com
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  className="w-full h-full lg:h-[calc(100vh-115px)]  flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
         dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
                >
                  <div
                    className="bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
          font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl  flex justify-between items-center"
                  >
                    <div className="flex justify-center items-center">
                      <FaArrowLeftLong
                        size={20}
                        className="cursor-pointer mr-1 "
                        onClick={() => handleGoBack("")}
                      />
                      <h3>{subject?.subjectTitle}</h3>
                    </div>
                    <BsNintendoSwitch
                      title="change view"
                      className={`mr-3 cursor-pointer text-[var(--colG3)]  ${
                        viewCourse === "more" ? "" : "rotate-180"
                      }`}
                      onClick={() => toggleView()}
                    />
                  </div>
                  <div className="w-full flex flex-row p-3 sm:p-5 gap-3">
                    <div className="justify-center items-center hidden sm:flex h-full overflow-hidden p-4">
                      <img
                        src={subject?.subjectImage}
                        alt="course..."
                        className="w-[300px] h-[200px]"
                      />
                    </div>
                    <div className="w-full h-fit  grid lg:grid-cols-2 sm:grid-cols-1 gap-x-5 justify-normal items-start  ">
                      {subject?.chapters?.map((ele, i) => (
                        <div
                          key={i}
                          className={`w-full  bg-[var(--colW2)] dark:bg-gray-800 font-medium flex justify-between items-center px-3 my-1 sm:my-2 py-2 rounded-full ${
                            ele?.pdfStatus === true
                              ? ""
                              : " hover:bg-blue-50 hover:text-[var(--colB7)] dark:hover:bg-gray-950 dark:hover:text-[var(--colB1)]   cursor-pointer"
                          } `}
                          onClick={() =>
                            handleSelectTopic(ele, ele?.chapterPath, path)
                          }
                        >
                          <div className="flex flex-row justify-center items-center gap-3">
                            {ele?.pdfStatus === true ? (
                              <FaFilePdf size={30} className="text-[#cc532b]" />
                            ) : (
                              <>
                                {ele?.test ? (
                                  <img src={test} alt="Test..." className="w-[30px]" />
                                ) : (
                                  <FaFolderOpen size={25} color="#D89F57" />
                                )}
                              </>
                            )}

                            <p className="">{ele?.chapterTitle}</p>
                          </div>
                          {ele?.pdfStatus === true ? (
                            <FaRegCircleDown
                              size={20}
                              className="text-[var(--colG2)] cursor-pointer"
                              onClick={() => handleOpenPdf(ele?.pdfFile)}
                            />
                          ) : (
                            <IoIosArrowForward />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </div>
  );
};

export default CourseDetailsPage;
