import React from "react";
import { FaRegEdit } from "react-icons/fa";
import TextInput from "../../ReUsable/TextInput";

const QuestionDetails = ({
  question,
  handleEditSubjectQuestion,
  CourseDetails,
  handleCancelEditQuestion,
}) => {
  return (
    <div className=" bg-[var(--colW2)] p-2 rounded-md">
      <div className="flex justify-between items-center px-2">
        <div className="flex justify-start items-center gap-1 w-full">
          <p className="p-2 no-select ">Q.{question?.id}</p>
          {CourseDetails?.EditQuestion === question?.id ? (
            <TextInput value={question?.question} />
          ) : (
            <p className="p-2 no-select ">{question?.question}</p>
          )}
        </div>
        {CourseDetails?.EditQuestion === question?.id ? (
          ""
        ) : (
          <FaRegEdit
            size={20}
            className="text-[#FEB019] cursor-pointer"
            onClick={() => handleEditSubjectQuestion(question?.id)}
          />
        )}
      </div>
      <div className="sm:pl-10">
        {question?.option?.map((ans, i) => (
          <div
            key={i}
            className={` m-1 flex items-center gap-3 rounded-full 
            ${question?.correctAnswer == ans?.name ? "yourAnswer" : null} `}
          >
            <div className="w-[20px] h-[20px]  px-2 ">
              {CourseDetails?.EditQuestion === question?.id ? (
                <input
                  type="radio"
                  name={ans?.name}
                  id={`${ans?.name}${i}`}
                  className="w-[20px] h-[20px] "
                  checked={question?.correctAnswer == ans?.name ? true : false}
                  // onChange={() =>
                  //   handleSelectAnswer(question?.question, ans?.name)
                  // }
                />
              ) : (
                ""
              )}
            </div>
            <label
              htmlFor={`${ans?.name}${i}`}
              className="text-[14px] no-select w-full px-2 py-1 sm:py-2 cursor-pointer "
            >
              {CourseDetails?.EditQuestion === question?.id ? (
                <TextInput value={question?.question} RoundFull />
              ) : (
                <p className="p-2 no-select ">{ans?.que}</p>
              )}
            </label>
          </div>
        ))}
      </div>
      {CourseDetails?.EditQuestion === question?.id ? (
        <div className="w-full flex justify-end items-center gap-2 p-3">
          <button
            className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-white dark:bg-slate-700 border-[2px] border-rose-500 s cursor-pointer rounded-md py-1 px-3"
            onClick={handleCancelEditQuestion}
          >
            Cancel
          </button>
          <button
            className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-[var(--colB1)] border border-[var(--colB1)] text-white cursor-pointer rounded-md py-1 px-3"
            // onClick={() => handleModelSave()}
          >
            Save
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuestionDetails;
