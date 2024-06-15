import React from "react";
// import { CorrectAnswer } from "../../utils/Helper";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const QuestionShow = ({
  answerTitle,
  correctAns,
  yourAns,
  img,
  answerNo,
  handleSelectAnswers = () => {},
  questionId,
  answerResult,
}) => {
  //   const isCorrect = CorrectAnswer(answerNo, correctAns);
  // console.log("answerNo===>", answerNo, isCorrect);

  return (
    <div
      className="flex flex-row items-center cursor-pointer "
      onClick={() => handleSelectAnswers(answerNo, questionId)}
    >
      <div className={`flex items-start gap-3  `}>
        <p
          className={`font-extrabold rounded-full  border-[3px] px-2  ${
            answerResult === "correct" &&
            "shadow-md shadow-green-800 border-green-800"
          }  ${
            yourAns !== "" &&
            correctAns === answerNo &&
            "shadow-md shadow-green-800 border-green-800"
          } ${
            answerResult === "wrong" &&
            "shadow-md shadow-red-800 border-red-800 "
          } `}
        >
          {answerNo.toUpperCase()}
        </p>
      </div>
      <div
        className={`relative min-w-[280px] sm:min-w-[300px] m-1 text-[14px] sm:text-[15px] hover:shadow-md  flex items-start gap-3 flex-col border-[3px] px-2 
        rounded-lg ${
          answerResult === "correct" &&
          "shadow-md shadow-green-800 border-green-800 hover:shadow-green-800"
        }
        ${
          yourAns !== "" &&
          correctAns === answerNo &&
          "shadow-md shadow-green-800 border-green-800 hover:shadow-green-800"
        }
        ${
          answerResult === "wrong" &&
          "shadow-md shadow-red-800 border-red-800 hover:shadow-red-800"
        } `}
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
        {yourAns !== "" && correctAns === answerNo && (
          <div className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-green-800 rounded-full flex justify-center items-center text-white p-1">
            <GiCheckMark />
          </div>
        )}
        {answerResult === "wrong" && (
          <div className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-red-800 rounded-full flex justify-center items-center text-white p-1">
            {" "}
            <ImCross />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionShow;
