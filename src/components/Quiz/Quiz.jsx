import React from "react";
import QuizBox from "./QuizBox";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const Quiz = ({
  quizData,
  question,
  test,
  quiz,
  handleSelectQuestion,
  handleSelectAnswers,
  handleNextQuestion,
  handlePreviousQuestion,
  handleSeeResult,
  handleReportQuestion,
}) => {

  return (
    <div className="w-full  min-h-[calc(100vh-115px)] lg:min-h-[100vh]  px-3 sm:px-6  gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
      <div
        className="w-full h-full   flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
       dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
      >
        <div
          className="  max-h-[100vh] flex justify-between bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
      font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-3 rounded-tr-3xl"
        >
          <h3>{quizData?.chapterTitle}</h3>
          {test === true && <p>0:20:16</p>}
        </div>
        <div className="flex gap-3  flex-col sm:flex-row  p-3  min-h-[80vh] sm:h-full">
          <div className=" sm:w-[150px] md:w-[250px] lg:w-[400px] bg-[var(--colW2)] dark:bg-slate-800 rounded-md rounded-bl-2xl p-2 ">
            <div className="flex   justify-between items-center gap-3">
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
              </div>
              <div className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px]">
                <CircularProgressbarWithChildren
                  value={quiz?.noOfGivenAnswer}
                  text={`${quiz?.noOfGivenAnswer}/${quiz?.totalQuestion}`}
                  maxValue={quiz?.totalQuestion}
                  className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px]"
                  styles={buildStyles({
                    pathColor: "#00abe4",
                    // trailColor: "#f13",
                    // strokeLinecap: "butt"
                  })}
                />
              </div>
            </div>
            <h1 className="font-bold text-[13px] text-gray-600 dark:text-gray-50">
              Total Questions
            </h1>
            <div className="flex sm:flex-wrap gap-1 overflow-x-scroll sm:overflow-y-scroll sm:overflow-hidden whitespace-nowrap scrollBarY ">
              {quizData?.questions?.map((que, i) => (
                <div
                  key={i}
                  className="md:w-[30px] w-[25px] md:h-[30px] h-[25px]"
                >
                  <p
                    key={i}
                    onClick={() => handleSelectQuestion(i)}
                    className={`bg-slate-300 text-gray-600 dark:text-gray-50 text-[13px] dark:bg-slate-900 flex justify-center items-center rounded-md md:w-[30px] w-[25px] md:h-[30px] h-[25px] cursor-pointer ${
                      que?.yourAnswer === ""
                        ? ""
                        : que?.yourAnswer === que?.correctAnswer
                        ? "correctAns"
                        : "wrongAns"
                    } ${que?._id === quiz?.selectQue ? "yourAnswer" : null}`}
                  >
                    {i + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full  sm:p-5">
            <QuizBox
              question={question}
              handleSelectAnswers={handleSelectAnswers}
              handleReportQuestion={handleReportQuestion}
            />
            <div className="w-full flex justify-end gap-2 py-2 sm:py-3">
              {quiz?.questionNumber === 0 ? (
                ""
              ) : (
                <button
                  onClick={() => handlePreviousQuestion()}
                  className="border-[2px] h-[35px] border-gray-300 dark:border-gray-600 rounded-full px-5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                >
                  Previous
                </button>
              )}

              {quiz?.questionNumber + 1 === quizData?.questions?.length ? (
                <button
                  onClick={() => handleSeeResult()}
                  className="rounded-full h-[35px] px-5 py-1 bg-[var(--colB1)] text-[var(--colW2)]  cursor-pointer"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() => handleNextQuestion()}
                  className="rounded-full h-[35px] px-5 py-1 bg-[var(--colB1)] text-[var(--colW2)]   cursor-pointer"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
