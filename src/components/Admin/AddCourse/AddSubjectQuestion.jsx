import React from "react";
import { FaFolderPlus, FaPlus, FaUpload } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { IoMdArrowRoundBack, IoMdCloudUpload } from "react-icons/io";
import TextInput from "../../ReUsable/TextInput";
import { LuImport } from "react-icons/lu";
import QuestionDetails from "./QuestionDetails";

const AddSubjectQuestion = ({
  subjectInfo,
  handleGoBack,
  handleEditSubjectQuestion,
  CourseDetails,
  handleCancelEditQuestion,
}) => {
  return (
    <div className="p-4">
      <div
        className="w-full bg-violet-200 rounded-full flex justify-between items-center p-3 mb-3 shadow-md shadow-[var(--colG3)] sticky
           dark:shadow-gray-700"
      >
        <div className=" flex justify-center items-center gap-2   ">
          <IoMdArrowRoundBack
            size={30}
            title="Back to folder"
            className="cursor-pointer text-[var(--colB1)]"
            onClick={() => handleGoBack()}
          />
          <h1
            className="font-medium text-[18px] text-gray-600  p-1 
                    rounded-full flex justify-center items-center "
          >
            <span className="font-bold">{subjectInfo?.field}</span>
          </h1>
        </div>

        <div className="flex gap-2 justify-center items-center w-[60%]">
          <TextInput placeholder={"Search..."} RoundFull={true} />
          <div
            className="flex justify-center items-center py-1 px-3 gap-1 bg-[var(--colB1)] rounded-full"
            title="Total Question & Answer"
          >
            <MdQuiz size={25} color="#D89F57" />
            <h1
              className="font-medium text-[14px] text-gray-600  p-1 
                    rounded-full w-5 h-5 flex justify-center items-center "
            >
              <span className="font-bold text-[12px] text-white">
                {/* {courseData.length} */}
                200
              </span>
            </h1>
          </div>
          <div>
            <LuImport
              size={30}
              // onClick={() => handleModal("", "add")}
              className="w-10 h-10 text-[#FEB019] bg-[#fbf3e1] p-2 shadow-lg rounded-full cursor-pointer hover:bg-blue-100  "
              title="Download CSV"
            />
          </div>
          <label htmlFor="uploadCsvFile">
            <IoMdCloudUpload
              size={30}
              // onClick={() => handleModal("", "add")}
              className="w-10 h-10 text-[#00E396] bg-[#e4fff6] p-2 shadow-lg rounded-full cursor-pointer hover:bg-blue-100  "
              title="Import CSV File"
            />
          </label>
          <input type="file" id="uploadCsvFile" className="hidden" />
          <div>
            <FaPlus
              size={30}
              // onClick={() => handleModal("", "add")}
              className="w-10 h-10 text-[var(--colB1)] bg-[#E7F4FF] p-2 shadow-lg rounded-full cursor-pointer hover:bg-blue-100  "
              title="Add Question & Answer"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 mt-5">
        {subjectInfo?.questions?.map((ele, i) => (
          <QuestionDetails
            key={i}
            question={ele}
            handleEditSubjectQuestion={handleEditSubjectQuestion}
            CourseDetails={CourseDetails}
            handleCancelEditQuestion={handleCancelEditQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default AddSubjectQuestion;
