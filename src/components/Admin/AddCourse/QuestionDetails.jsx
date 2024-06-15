import React from "react";
import { FaRegEdit } from "react-icons/fa";
import Answers from "./Answers";
import { MdOutlineDelete } from "react-icons/md";

const QuestionDetails = ({
  index,
  question,
  handleEditQuestion,
  QuestionDetail,
  handleCancelEditQuestion,
  handleDeleteQuestion,
}) => {
  return (
    <div className=" bg-[var(--colW2)] dark:bg-slate-700 p-2 rounded-md">
      <div className="flex justify-between items-center px-2">
        <div className="flex justify-start items-center gap-1 w-full">
          <p className="p-2 no-select ">Q.{index}</p>

          <p className="p-2 no-select ">{question?.question}</p>
        </div>

        <FaRegEdit
          size={20}
          className="text-[#FEB019] cursor-pointer  drop-shadow-xl shadow-xl bg-[#E7F4FF] w-8 h-8 p-2 rounded-full hover:bg-[#fff7e7] mr-2"
          onClick={() => handleEditQuestion(question)}
        />
        <MdOutlineDelete
          className="text-red-500 cursor-pointer drop-shadow-xl shadow-xl bg-[#E7F4FF] w-8 h-8 p-2 rounded-full hover:bg-[#ffe9e7]"
          size={20}
          title="Delete"
          onClick={() => handleDeleteQuestion("Question", question?._id)}
        />
      </div>
      {question?.questionsImg ? (
        <div className="px-4 py-2 border-[2px] rounded-lg">
          <img
            src={question?.questionsImg}
            alt="course"
            className=" max-h-[200px] rounded-lg object-cover mb-2 "
          />
        </div>
      ) : (
        ""
      )}
      <div className="sm:pl-10 ">
        <Answers
          QuestionDetail={QuestionDetail}
          question={question}
          answerTitle={question.a}
          correctAns={question.correctAnswer}
          answerNo={"a"}
          img={question.aImg}
        />
        <Answers
          QuestionDetail={QuestionDetail}
          question={question}
          answerTitle={question.b}
          correctAns={question.correctAnswer}
          answerNo={"b"}
          img={question.bImg}
        />
        <Answers
          QuestionDetail={QuestionDetail}
          question={question}
          answerTitle={question.c}
          correctAns={question.correctAnswer}
          answerNo={"c"}
          img={question.cImg}
        />
        <Answers
          QuestionDetail={QuestionDetail}
          question={question}
          answerTitle={question.d}
          correctAns={question.correctAnswer}
          answerNo={"d"}
          img={question.dImg}
        />
      </div>
      {QuestionDetail?.EditQuestion === question?.id ? (
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
