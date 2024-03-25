import React from "react";
import QuizBox from "./QuizBox";
import { useNavigate } from "react-router-dom";

const Quiz = ({
  quizData,
  question,
  test,
  quiz,
  handleSelectQuestion,
  handleSelectAnswer,
  handleNextQuestion,
  handlePreviousQuestion,
  handleSeeResult,
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-full  min-h-[calc(100vh-115px)] lg:min-h-[100vh]  px-6 sm:px-5 gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
      <div
        className="w-full h-full md:h-[calc(100vh-115px)]  flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
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
          <div className=" sm:w-[150px] md:w-[250px] lg:w-[400px] bg-[var(--colW2)] dark:bg-slate-800 rounded-md rounded-bl-2xl p-2 ">
            <h1 className="font-bold text-[13px] text-gray-600 dark:text-gray-50">
              Total Questions
            </h1>
            <div className=" flex flex-wrap gap-1 ">
              {quizData?.questions?.map((que, i) => (
                <p
                  key={i}
                  onClick={() => handleSelectQuestion(i)}
                  className={`bg-slate-300  text-gray-600 dark:text-gray-50 text-[13px] dark:bg-slate-900 flex justify-center 
                  items-center rounded-md md:w-[30px] w-[25px] md:h-[30px] h-[25px] cursor-pointer ${
                    que?.yourAnswer == "" ? "" : "yourAnswer"
                  } ${
                    que?.question == quiz?.selectQue ? "selectedQuestion" : null
                  }`}
                >
                  {i + 1}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full h-full  sm:p-5">
            <QuizBox
              question={question}
              handleSelectAnswer={handleSelectAnswer}
            />
            <div className="w-full flex justify-end gap-2">
              {quiz?.questionNumber == 0 ? (
                ""
              ) : (
                <button
                  onClick={() => handlePreviousQuestion()}
                  className="border-[2px] h-[35px] border-gray-300 dark:border-gray-600 rounded-full px-5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                >
                  Previous
                </button>
              )}

              {quiz?.questionNumber+1 == quizData?.questions?.length ? (
                <button onClick={()=>handleSeeResult()} className="rounded-full h-[35px] px-5 py-1 bg-[var(--colB1)] text-[var(--colW2)]  cursor-pointer">
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
