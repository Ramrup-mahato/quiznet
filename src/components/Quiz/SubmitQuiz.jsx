import React from "react";
import QuizBox from "./QuizBox";
import { GiCheckMark } from "react-icons/gi";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import entrance from "../../assets/image/study3.png";
import QuestionShow from "./QuestionShow";
import { VscDebugRestart } from "react-icons/vsc";

const SubmitQuiz = ({
  quizData,
  test,
  quiz,
  handleNextQuiz,
  handleAgainQuiz,
}) => {
  const totalQuestions = quiz?.totalQuestion || 0;
  const correctAnswers = quiz?.correctAnswer || 0;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  return (
    <div className="w-full  min-h-[calc(100vh-115px)] lg:min-h-[100vh] px-1 sm:px-6  gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
      <div
        className="w-full h-full  flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
     dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
      >
        <div
          className="flex justify-between bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
    font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-3 rounded-tr-3xl"
        >
          <h3>{quizData?.field}</h3>
          {test === true && <p>0:20:16</p>}
        </div>
        <div className="flex gap-3  flex-col sm:flex-row w-full h-full p-3">
          <div className="w-full h-full  sm:p-5 flex gap-[3px] flex-col">
            <div className=" mb-2 sm:mb-4 sm:p-5 bg-[var(--colW2)] dark:bg-gray-800 rounded-3xl ">
              <div className="flex w-full h-[150px] justify-center items-center gap-3">
                <div className="w-[200px] hidden sm:block  overflow-hidden ">
                  <img src={entrance} alt="study result" />
                </div>
                <div>
                  <p className="font-extrabold sm:font-semibold  text-[var(--colB1)] text-[12px] sm:text-[15px] ">
                    Total Question:{quiz?.totalQuestion}
                  </p>
                  <p className="font-extrabold sm:font-semibold  text-[12px] sm:text-[15px]  text-green-600">
                    Correct Answer:{quiz?.correctAnswer}
                  </p>
                  <p className="font-extrabold sm:font-semibold   text-[12px] sm:text-[15px]  text-red-600">
                    Wrong Answer:{quiz?.wrongAnswer}
                  </p>
                  {/* <p className="font-extrabold sm:font-semibold   text-[12px] sm:text-[15px]  text-[var(--colB1)]">
                    Time Taken:{quiz?.time}min
                  </p> */}
                </div>

                <div>
                  <CircularProgressbarWithChildren
                    value={percentage}
                    text={`${percentage}%`}
                    maxValue={100}
                    className="w-[100px] md:w-[150px] h-[100px] md:h-[150px]"
                    styles={buildStyles({
                      pathColor: "#00abe4",
                      // trailColor: "#f13",
                      // strokeLinecap: "butt"
                    })}
                  />
                </div>
              </div>
              <div className="w-full flex justify-end gap-2 p-2">
                <button
                  onClick={() => handleAgainQuiz()}
                  className="rounded-full h-[35px] px-5 py-1 bg-[var(--colB1)] text-[var(--colW2)]  cursor-pointer flex justify-center items-center gap-1"
                >
                  Again
                  <VscDebugRestart />
                </button>
                <button
                  onClick={() => handleNextQuiz()}
                  className="rounded-full h-[35px] px-5 py-1 bg-[var(--colB1)] text-[var(--colW2)]  cursor-pointer"
                >
                  Next Quiz
                </button>
              </div>
            </div>
            {quizData?.questions?.map((question, i) => (
              <div
                className={`p-1 sm:p-5 bg-[var(--colW2)] dark:bg-gray-800 ${
                  i === 0 && "rounded-t-3xl"
                } ${i == quizData?.questions?.length - 1 && "rounded-b-3xl"}`}
                key={i}
              >
                <p className="p-2 no-select ">
                  {i + 1}. {question?.question}
                </p>
                <div className=" ">
                  <QuestionShow
                    // question={question}
                    answerTitle={question.a}
                    correctAns={question.correctAnswer}
                    yourAns={question?.yourAnswer}
                    answerNo={"a"}
                    answerResult={
                      question?.yourAnswer === "a"
                        ? question.correctAnswer === question?.yourAnswer
                          ? "correct"
                          : "wrong"
                        : null
                    }
                    questionId={question?._id}
                    img={question.aImg}
                  />
                  <QuestionShow
                    // question={question}
                    answerTitle={question.b}
                    correctAns={question.correctAnswer}
                    answerNo={"b"}
                    img={question.bImg}
                    yourAns={question?.yourAnswer}
                    questionId={question?._id}
                    answerResult={
                      question?.yourAnswer === "b"
                        ? question.correctAnswer === question?.yourAnswer
                          ? "correct"
                          : "wrong"
                        : null
                    }
                  />
                  <QuestionShow
                    // question={question}
                    answerTitle={question.c}
                    correctAns={question.correctAnswer}
                    answerNo={"c"}
                    img={question.cImg}
                    yourAns={question?.yourAnswer}
                    questionId={question?._id}
                    answerResult={
                      question?.yourAnswer === "c"
                        ? question.correctAnswer === question?.yourAnswer
                          ? "correct"
                          : "wrong"
                        : null
                    }
                  />
                  <QuestionShow
                    // question={question}
                    answerTitle={question.d}
                    correctAns={question.correctAnswer}
                    answerNo={"d"}
                    img={question.dImg}
                    yourAns={question?.yourAnswer}
                    questionId={question?._id}
                    answerResult={
                      question?.yourAnswer === "d"
                        ? question.correctAnswer === question?.yourAnswer
                          ? "correct"
                          : "wrong"
                        : null
                    }
                  />
                </div>
              </div>
            ))}
            <div className="w-full flex justify-end gap-2 p-2">
              <button
                onClick={() => handleNextQuiz()}
                className="rounded-full h-[35px] px-5 py-1 bg-[var(--colB1)] text-[var(--colW2)]  cursor-pointer"
              >
                Next Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitQuiz;
