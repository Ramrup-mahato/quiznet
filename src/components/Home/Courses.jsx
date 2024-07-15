import React from "react";
// import { courseName, faqDetails } from "../../utils/data";
import { IoIosArrowForward } from "react-icons/io";
import CourseService from "../../service/CourseService";
import Accordion from "../Admin/FAQ/Accordion";
import contactImage from "../../assets/image/studyBanner.png";
import TextInput from "../ReUsable/TextInput";
import { IoIosSwitch } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaArrowRight, FaFolderOpen } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Courses = () => {
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleSelectCourse,
    handlePhoneChange,
    faqQuestion,
    course,
    viewCourse,
    toggleView,
  } = CourseService();
  return (
    <div className="w-full h-full flex flex-col items-center">
      {viewCourse === "more" ? (
        <div className="w-full h-full flex gap-5 flex-col sm:px-5   pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
          {course?.map((ele, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col  
            text-black dark:text-gray-300 rounded-bl-3xl rounded-tr-3xl "
            >
              <div
                className="bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
                font-semibold text-base  p-2 rounded-tr-3xl flex justify-between items-center"
              >
                <h3>{ele?.courseTitle}</h3>
                <BsNintendoSwitch
                  title="change view"
                  className={`mr-3 cursor-pointer text-[var(--colG3)]  ${
                    viewCourse === "more" ? "" : "rotate-180"
                  }`}
                  onClick={() => toggleView()}
                />
              </div>
              <div className="userMainDivs p-1 gap-1 sm:p-2">
                {ele?.subjects.map((sub, i) => (
                  <div
                    key={i}
                    className="item m-[2px] bg-[var(--colW1)] dark:bg-gray-700 flex justify-between items-center flex-col  mt-1 sm:my-2    shadow-slate-500 dark:shadow-slate-900
               rounded-lg text-[14px]  cursor-pointer shadow-2xl"
                  >
                    <div>
                      <img
                        src={sub?.subjectImage}
                        alt={sub?.subjectTitle}
                        className="w-[200vw] sm:w-[250vw] h-[150px] sm:h-[230px] rounded-t-lg object-cover"
                      />
                    </div>
                    <div className="w-full py-2 px-1 sm:px-3 text-gray-700 dark:text-gray-200">
                      <p className="font-bold text-[12px] sm:text-[14px] text-blue-900 dark:text-blue-100">
                        {sub?.subjectTitle}
                      </p>
                      <div className="py-1 text-[12px] flex justify-between ">
                        <p className="text-[11px] sm:text-[13px]  flex justify-center items-center">
                          <FaBookOpen size={15} color="#A1662F " />
                          &nbsp;
                          <span className="font-bold  underline">
                            {" "}
                            {sub?.chapterCount}&nbsp;
                          </span>
                          Courses
                        </p>
                        <NavLink to={"/term&condition"}>
                          <p className="pr-3 hover:text-[var(--colB1)] hover:underline font-bold">
                            T&C
                          </p>
                        </NavLink>
                      </div>
                      <div className=" text-[12px] flex justify-between items-center ">
                        <div className="flex justify-center items-center">
                          <MdVerified className="text-[var(--colG4)] text-[14px] md:text-[20px]" />

                          <p className="text-[11px] sm:text-[13px]">
                            <span className="text-[var(--colG4)]">
                              Verified
                            </span>
                          </p>
                        </div>

                        <p
                          className="flex gap-1 justify-center items-center text-[var(--colW2)] bg-[var(--colB1)] 
                        text-[12px] md:text-[14px] border-[2px] border-[var(--colB1)] rounded-md px-3 md:px-7
                          py-1 md:py-2 font-extrabold hover:shadow-md"
                          onClick={() => handleSelectCourse(sub.subjectPath)}
                        >
                          View <FaArrowRight />
                        </p>
                      </div>
                      <div className=" text-[12px] flex justify-center items-center border-t-2 mt-1 ">
                        <p className="flex">
                          <span className="hidden md:block">website:</span>
                          <span className="font-bold hover:text-[var(--colB1)] hover:underline">
                            {" "}
                            www.kizostudy.com
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full grid lg:grid-cols-2 sm:grid-cols-1 px-2 sm:px-5 gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
          {course?.map((ele, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-md shadow-[var(--colG3)]
           dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
            >
              <div
                className="bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
          font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl  flex justify-between items-center"
              >
                <h3>{ele?.courseTitle}</h3>
                <BsNintendoSwitch
                  title="change view"
                  className={`mr-3 cursor-pointer text-[var(--colG3)]  ${
                    viewCourse === "more" ? "" : "rotate-180"
                  }`}
                  onClick={() => toggleView()}
                />
              </div>
              <div className="flex flex-row p-3 sm:p-5 gap-3">
                <div className="justify-center items-center hidden sm:flex h-full overflow-hidden p-4">
                  <img
                    src={ele?.courseImage}
                    alt="course..."
                    className="w-[300px] h-[200px]"
                  />
                </div>
                <div className="w-full ">
                  {ele?.subjects.map((sub, i) => (
                    <div
                      key={i}
                      className="w-full bg-[var(--colW2)] font-medium dark:bg-gray-800 flex justify-between items-center px-3 my-2 py-1 shadow-sm shadow-slate-500  dark:hover:shadow-gray-950 rounded-full text-[14px] 
                hover:bg-blue-50 hover:text-[var(--colB7)] dark:hover:bg-gray-950 dark:hover:text-[var(--colB1)]  cursor-pointer"
                      onClick={() => handleSelectCourse(sub.subjectPath)}
                    >
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-5 h-5 flex justify-center items-center">
                          <FaFolderOpen size={20} color="#D89F57" />
                        </div>
                        <p className="text-[13px] sm:text-[14px] font-bold ">{sub?.subjectTitle}</p>
                      </div>
                      <div className="w-4 h-4 flex justify-center items-center">
                        <IoIosArrowForward />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="w-full lg:max-w-[1024px] flex flex-col gap-2 items-center justify-center p-2 mb-7">
        <h1 className="w-full font-extrabold  text-[25px] dark:text-slate-50">
          {" "}
          FAQ’S RELATED TO MCQ QUERY
        </h1>
        {faqQuestion?.map((ele, i) => (
          <Accordion
            key={i}
            title={ele?.question}
            content={ele?.answer}
            id={i + 1}
          />
        ))}
      </div>
      <div
        id="contactMessage"
        className="w-full flex flex-col md:flex-row   gap-2 p-2 mb-7"
      >
        <div className="w-full md:w-[45%] flex flex-col justify-center px-10">
          <h1 className="w-full font-extrabold  text-[25px] items-center dark:text-slate-50">
            We Love to connect, Help,Receive feedback just tell us...
          </h1>
          <img src={contactImage} alt="contact ..." />
        </div>
        <div id="contactUs" className="w-full md:w-[55%] md:pt-10 ">
          <div>
            <TextInput
              label={"Your Name"}
              require={true}
              placeholder={"Enter Your Name..."}
              error={errors.username && touched.username}
              errorMessage={errors.username}
              name={"username"}
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <TextInput
              label={"Your Email"}
              require={true}
              placeholder={"Enter Your Email..."}
              error={errors.email && touched.email}
              errorMessage={errors.email}
              name={"email"}
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <TextInput
              label={"Your Phone"}
              require={true}
              placeholder={"Enter Your Phone..."}
              error={errors.phone && touched.phone}
              errorMessage={errors.phone}
              name={"phone"}
              handleChange={handlePhoneChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <TextInput
              label={"Your Message"}
              require={true}
              textarea={true}
              placeholder={"Enter message..."}
              error={errors.message && touched.message}
              errorMessage={errors.message}
              name={"message"}
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <div className="flex justify-end items-center gap-2 py-2">
              <button
                className="border-[3px] rounded mt-3 py-2 px-4 border-[var(--colB1)] bg-[var(--colB1)] text-[15px] font-bold text-white cursor-pointer"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
