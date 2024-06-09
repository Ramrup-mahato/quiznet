import React from "react";
import { FaFolderPlus, FaPlus, FaUpload } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { IoMdArrowRoundBack, IoMdCloudUpload } from "react-icons/io";
import TextInput from "../../ReUsable/TextInput";
import { LuImport } from "react-icons/lu";
import QuestionDetails from "./QuestionDetails";
import { CSVLink } from "react-csv";

const AddSubjectQuestion = ({
  chapterInfo,
  handleGoBack,
  handleEditQuestion,
  QuestionDetail,
  allQuestion,
  handleCancelEditQuestion,
  handleQuestionModal,
  handleDeleteQuestion,
  handleUploadCsv,
  handleSearchQuestion,
}) => {
  const csvHeaders = [
    { label: "Id", key: "_id" },
    { label: "Correct_Answer", key: "correctAnswer" },
    { label: "Question", key: "question" },
    { label: "Question_Image", key: "questionsImg" },
    { label: "Option_A", key: "a" },
    { label: "Option_B", key: "b" },
    { label: "Option_C", key: "c" },
    { label: "Option_D", key: "d" },
    { label: "Option_A_Image", key: "aImg" },
    { label: "Option_B_Image", key: "bImg" },
    { label: "Option_C_Image", key: "cImg" },
    { label: "Option_D_Image", key: "dImg" },
  ];

  return (
    <div className="p-4 relative">
      <div className=" sticky top-0 z-10 ">
        <div
          className="w-full bg-violet-200 rounded-full flex justify-between items-center p-3 mb-3 shadow-md shadow-[var(--colG3)] 
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
              <span className="font-bold">
                {QuestionDetail?.chapterInfo?.chapterTitle}
              </span>
            </h1>
          </div>

          <div className="flex gap-2 justify-center items-center w-[60%]">
            <TextInput placeholder={"Search..."} RoundFull={true} value={QuestionDetail.search} handleChange={(e)=>handleSearchQuestion(e)} />
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
                  {allQuestion.length}
                </span>
              </h1>
            </div>
            <div>
              <CSVLink
                data={allQuestion}
                headers={csvHeaders}
                filename={`${QuestionDetail.chapterInfo?.chapterPath}`}
                className="btn btn-primary"
              >
                <LuImport
                  size={30}
                  // onClick={() => handleModal("", "add")}
                  className="w-10 h-10 text-[#FEB019] bg-[#fbf3e1] p-2 shadow-lg rounded-full cursor-pointer hover:bg-blue-100  "
                  title="Download CSV"
                />
              </CSVLink>
            </div>
            <label htmlFor="uploadCsvFile">
              <IoMdCloudUpload
                size={30}
                className="w-10 h-10 text-[#00E396] bg-[#e4fff6] p-2 shadow-lg rounded-full cursor-pointer hover:bg-blue-100  "
                title="Import CSV File"
              />
            </label>
            <input
              type="file"
              id="uploadCsvFile"
              accept=".csv"
              className="hidden"
              onChange={(e) => handleUploadCsv(e)}
            />
            <div>
              <FaPlus
                size={30}
                onClick={() => handleQuestionModal()}
                className="w-10 h-10 text-[var(--colB1)] bg-[#E7F4FF] p-2 shadow-lg rounded-full cursor-pointer hover:bg-blue-100  "
                title="Add Question & Answer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 mt-5">
        {allQuestion?.map((ele, i) => (
          <QuestionDetails
            key={i}
            index={i + 1}
            question={ele}
            handleEditQuestion={handleEditQuestion}
            QuestionDetail={QuestionDetail}
            handleCancelEditQuestion={handleCancelEditQuestion}
            handleDeleteQuestion={handleDeleteQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default AddSubjectQuestion;
