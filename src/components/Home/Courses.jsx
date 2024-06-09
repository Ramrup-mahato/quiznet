import React from "react";
import { courseName, faqDetails } from "../../utils/data";
import { IoIosArrowForward } from "react-icons/io";
import CourseService from "../../service/CourseService";
import Accordion from "../Admin/FAQ/Accordion";
import contactImage from "../../assets/image/studyBanner.png";
import TextInput from "../ReUsable/TextInput";

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
  } = CourseService();
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-full grid lg:grid-cols-2 sm:grid-cols-1 px-6 sm:px-5 gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
        {course?.map((ele, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
           dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
          >
            <div
              className="bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
          font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl"
            >
              <h3>{ele?.courseTitle}</h3>
            </div>
            <div className="flex flex-row p-3 sm:p-5 gap-3">
              <div className="justify-center items-center hidden sm:flex h-full overflow-hidden p-4">
                <img
                  src={ele?.courseImage}
                  alt="ele image..."
                  className="w-[300px] h-[200px]"
                />
              </div>
              <div className="w-full ">
                {ele?.subjects.map((sub, i) => (
                  <div
                    key={i}
                    className="w-full bg-[var(--colW2)] dark:bg-gray-800 flex justify-between items-center px-3 my-2 py-1 shadow-sm shadow-slate-500 hover:shadow-[var(--colB1)] dark:hover:shadow-gray-950 rounded-full text-[14px] 
                hover:bg-[var(--colB1)] dark:hover:bg-gray-950 dark:hover:text-[var(--colB1)]  cursor-pointer"
                    onClick={() => handleSelectCourse(sub.subjectPath
                    )}
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
      <div className="w-full flex flex-col md:flex-row   gap-2 p-2 mb-7">
        <div className="w-full md:w-[45%] flex flex-col justify-center px-10">
          <h1 className="w-full font-extrabold  text-[25px] items-center dark:text-slate-50">
            We Love to connect, Help,Receive feedback just tell us...
          </h1>
          <img src={contactImage} alt="contact Image ..." />
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
              <button  className="border-[3px] rounded mt-3 py-2 px-4 border-[var(--colB1)] bg-[var(--colB1)] text-[15px] font-bold text-white cursor-pointer"
              type="submit"
              onClick={handleSubmit}
              >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
