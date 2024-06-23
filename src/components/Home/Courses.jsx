import React from "react";
// import { courseName, faqDetails } from "../../utils/data";
import { IoIosArrowForward } from "react-icons/io";
import CourseService from "../../service/CourseService";
import Accordion from "../Admin/FAQ/Accordion";
import contactImage from "../../assets/image/studyBanner.png";
import TextInput from "../ReUsable/TextInput";
import { IoIosSwitch } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";

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
              className="w-full h-full flex flex-col  dark:bg-gray-900 
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
                    className="item m-[2px] bg-[var(--colW1)] dark:bg-gray-800 flex justify-between items-center flex-col  mt-1 sm:my-2  shadow-sm shadow-slate-500 hover:shadow-[var(--colB1)]
               rounded-lg text-[14px]  cursor-pointer"
                    onClick={() => handleSelectCourse(sub.subjectPath)}
                  >
                    <div>
                      <img
                        src={sub?.subjectImage}
                        alt={sub?.subjectTitle}
                        className="w-[200vw] sm:w-[250vw] h-[150px] sm:h-[230px] rounded-t-lg"
                      />
                    </div>
                    <div className="w-full py-2 px-1 sm:px-3 text-gray-700 dark:text-gray-200">
                      <p className="font-bold text-blue-900 dark:text-blue-100">
                        {sub?.subjectTitle}
                      </p>
                      <div className="py-1 text-[12px] flex justify-between ">
                        <p>
                          Total:
                          <span className="font-bold text-[var(--colG2)]">{sub?.chapterCount}</span>
                        </p>
                        <p className="pr-3 hover:text-[var(--colB1)] hover:underline font-bold">
                          T&C
                        </p>
                      </div>
                      <div className=" text-[12px] flex justify-between items-center ">
                        <p>
                          visit:<span className="font-bold text-[var(--colG2)]"> 1254</span>
                        </p>
                        <p className=" text-[var(--colG2)]  text-[14px] border-[2px] border-[var(--colG2)] rounded-md px-7 py-2 font-extrabold">
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
                      className="w-full bg-[var(--colW2)] dark:bg-gray-800 flex justify-between items-center px-3 my-2 py-1 shadow-sm shadow-slate-500 hover:shadow-[var(--colB1)] dark:hover:shadow-gray-950 rounded-full text-[14px] 
                hover:bg-[var(--colB1)] dark:hover:bg-gray-950 dark:hover:text-[var(--colB1)]  cursor-pointer"
                      onClick={() => handleSelectCourse(sub.subjectPath)}
                    >
                      <p className="">{sub?.subjectTitle}</p>
                      <IoIosArrowForward />
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
      <div id="contactMessage" className="w-full flex flex-col md:flex-row   gap-2 p-2 mb-7">
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
