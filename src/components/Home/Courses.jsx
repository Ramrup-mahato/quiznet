import React from "react";
import { courseName } from "../../utils/data";
import { IoIosArrowForward } from "react-icons/io";
import CourseService from "../../service/CourseService";


const Courses = () => {
  const { handleSelectCourse } = CourseService();
  return (
    <div className="w-full h-full  grid lg:grid-cols-2 sm:grid-cols-1 px-6 sm:px-5 gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
      {courseName?.map((course, index) => (
        <div
          key={index}
          className="w-full h-full flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
           dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
        >
          <div
            className="bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
          font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl"
          >
            <h3 >{course?.course}</h3>
          </div>
          <div className="flex flex-row p-3 sm:p-5 gap-3">
            <div className="justify-center items-center hidden sm:flex h-full overflow-hidden p-4">
              <img
                src={course?.image}
                alt="course image..."
                className="w-[300px] h-[200px]"
              />
            </div>
            <div className="w-full">
              {course?.fields.map((field, i) => (
                <div
                  key={i}
                  className="w-full bg-[var(--colW2)] dark:bg-gray-800 flex justify-between items-center px-3 my-2 py-1 shadow-sm shadow-slate-500 hover:shadow-[var(--colB1)] dark:hover:shadow-gray-950 rounded-full text-[14px] 
                hover:bg-[var(--colB1)] dark:hover:bg-gray-950 dark:hover:text-[var(--colB1)]  cursor-pointer"
                  onClick={() => handleSelectCourse(field.path)}
                >
                  <p className="">{field?.field}</p>
                  <IoIosArrowForward />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
