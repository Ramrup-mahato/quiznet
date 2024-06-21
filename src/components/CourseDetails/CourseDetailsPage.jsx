import React from "react";
// import { courseName, topicsName } from "../../utils/data";
import { IoIosArrowForward } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa6";
import CourseDetailsService from "../../service/courseDetailsService";
// import { useParams } from "react-router-dom";
import Loader from "../ReUsable/Loader";
import NotFound from "../ReUsable/NotFound ";
import { BsNintendoSwitch } from "react-icons/bs";

const CourseDetailsPage = () => {
  const {
    path,
    subject,
    loaderInFolder,
    handleSelectTopic,
    viewCourse,
    toggleView,
  } = CourseDetailsService();
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
                  className="w-full h-full flex flex-col  dark:bg-gray-900 
              text-black dark:text-gray-300 rounded-bl-3xl rounded-tr-3xl "
                >
                  <div
                    className="bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
                  font-semibold text-base  p-2 rounded-tr-3xl flex justify-between items-center"
                  >
                    <h3>{subject?.subjectTitle}</h3>
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
                        className="item m-[2px] bg-[var(--colW2)] dark:bg-gray-800 flex justify-between items-center flex-col  mt-1 sm:my-2  shadow-sm shadow-slate-500 hover:shadow-[var(--colB1)]
                 rounded-lg text-[14px]   cursor-pointer"
                        onClick={() =>
                          handleSelectTopic(ele?.chapterPath, path)
                        }
                      >
                        <div>
                          <img
                            src={ele?.chapterImage}
                            alt={ele?.chapterTitle}
                            className="w-[200vw] sm:w-[250vw] h-[150px] sm:h-[230px] rounded-t-lg"
                          />
                        </div>
                        <div className="w-full py-2 px-1 sm:px-3 text-gray-700 dark:text-gray-200">
                          <p className="font-extrabold text-blue-900 dark:text-blue-100">
                            {ele?.chapterTitle}
                          </p>
                          <div className="py-1 text-[12px] flex justify-between ">
                            <p>
                              Total:<span className="font-bold"> 10 </span>{" "}
                              subject
                            </p>
                            <p className="pr-3 hover:text-[var(--colB1)] hover:underline">
                              view T&C
                            </p>
                          </div>
                          <div className=" text-[12px] flex justify-between items-center ">
                            <p>
                              visit:<span className="font-bold"> 1254</span>
                            </p>
                            <p className=" text-[var(--colG2)] border-[2px] border-[var(--colG2)] rounded-md px-7 py-2 font-bold">
                              View
                            </p>
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
                    <h3>{subject?.subjectTitle}</h3>
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
                          className="w-full  bg-[var(--colW2)] dark:bg-gray-800 flex justify-between items-center px-3 my-1 sm:my-2 py-2 shadow-sm shadow-slate-500 hover:shadow-[var(--colB1)] dark:hover:shadow-gray-950 rounded-full text-[14px]
              hover:bg-[var(--colB1)] dark:hover:bg-gray-950 dark:hover:text-[var(--colB1)]  cursor-pointer"
                          onClick={() =>
                            handleSelectTopic(ele?.chapterPath, path)
                          }
                        >
                          <div className="flex flex-row justify-center items-center gap-3">
                            <FaFolderOpen size={25} color="#D89F57" />
                            <p className="">{ele?.chapterTitle}</p>
                          </div>
                          <IoIosArrowForward />
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
