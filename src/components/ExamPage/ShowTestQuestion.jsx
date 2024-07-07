import React from "react";
import QuestionShow from "../Quiz/QuestionShow";
import { BsThreeDotsVertical } from "react-icons/bs";

const ShowTestQuestion = ({
  question,
  handleSelectAnswers,
  handleReportQuestion,
}) => {
  return (
    <div className=" sm:p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="p-2 no-select text-[15px] sm:text-[16px] ">
            Q. {question?.question}
          </p>
        </div>
        {/* <BsThreeDotsVertical
          className="cursor-pointer "
          size={20}
          onClick={() => handleReportQuestion(question?._id)}
        /> */}
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

      <div className=" ">
        <QuestionShow
          // question={question}
          answerTitle={question?.a}
          correctAns={question?.correctAnswer}
          yourAns={question?.yourAnswer}
          answerNo={"a"}
          answerResult={question?.yourAnswer === "a" ? "correct" : null}
          questionId={question?._id}
          img={question?.aImg}
          handleSelectAnswers={handleSelectAnswers}
        />
        <QuestionShow
          // question={question}
          answerTitle={question?.b}
          correctAns={question?.correctAnswer}
          answerNo={"b"}
          img={question?.bImg}
          handleSelectAnswers={handleSelectAnswers}
          yourAns={question?.yourAnswer}
          questionId={question?._id}
          answerResult={question?.yourAnswer === "b" ? "correct" : null}
        />
        <QuestionShow
          // question={question}
          answerTitle={question?.c}
          correctAns={question?.correctAnswer}
          answerNo={"c"}
          img={question?.cImg}
          handleSelectAnswers={handleSelectAnswers}
          yourAns={question?.yourAnswer}
          questionId={question?._id}
          answerResult={question?.yourAnswer === "c" ? "correct" : null}
        />
        <QuestionShow
          // question={question}
          answerTitle={question?.d}
          correctAns={question?.correctAnswer}
          answerNo={"d"}
          img={question?.dImg}
          handleSelectAnswers={handleSelectAnswers}
          yourAns={question?.yourAnswer}
          questionId={question?._id}
          answerResult={question?.yourAnswer === "d" ? "correct" : null}
        />
      </div>
    </div>
  );
};

export default ShowTestQuestion;
