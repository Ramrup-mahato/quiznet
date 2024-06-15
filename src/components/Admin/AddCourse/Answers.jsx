import React from "react";
import TextInput from "../../ReUsable/TextInput";
import { CorrectAnswer } from "../../../utils/Helper";

const Answers = ({
  answerTitle,
  correctAns,
  img,
  userAnswer,
  answerNo,
}) => {
  const isCorrect = CorrectAnswer(answerNo, correctAns);
  // console.log("answerNo===>", answerNo, isCorrect);

  return (
    <div className="flex flex-row items-center cursor-pointer ">
      <div
        className={`flex items-start gap-3 
          `}
      >
        <p
          className={`font-extrabold rounded-full  border-[3px] px-2 ${
            isCorrect ? "yourAnswer" : ""
          } ${userAnswer===answerNo?'correctAns':''}`}
        >
          {answerNo.toUpperCase()}
        </p>
      </div>
      <div
        className={`min-w-[285px] sm:min-w-[300px] m-1 text-[14px] sm:text-[15px] hover:shadow-lg  flex items-start gap-3 flex-col border-[3px] px-2 rounded-lg
        } ${isCorrect ? "yourAnswer" : ""}  ${userAnswer===answerNo?'correctAns':''} `}
      >
        <p className="p-2 no-select ">{answerTitle}</p>
        {img ? (
          <img
            src={img}
            alt="course"
            className=" max-h-[200px] rounded-lg object-cover mb-2 "
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Answers;
