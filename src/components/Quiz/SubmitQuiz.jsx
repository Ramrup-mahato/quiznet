import React from "react";
import QuizBox from "./QuizBox";
import { GiCheckMark } from "react-icons/gi";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import entrance from "../../assets/image/study3.png";

const SubmitQuiz = ({ quizData, test, quiz,handleNextQuiz }) => {
  return (
    <div className="w-full  min-h-[calc(100vh-115px)] lg:min-h-[100vh]  px-6 sm:px-5 gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
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
                  <p className="font-extrabold sm:font-semibold   text-[12px] sm:text-[15px]  text-[var(--colB1)]">
                    Time Taken:{quiz?.time}min
                  </p>
                </div>

                <div>
                  <CircularProgressbarWithChildren
                    value={quiz?.correctAnswer}
                    text={`${quiz?.correctAnswer}/${quiz?.totalQuestion}`}
                    maxValue={quiz?.totalQuestion}
                    className="w-[100px] md:w-[150px] h-[100px] md:h-[150px]"
                    styles={buildStyles({
                      pathColor: "#00abe4",
                      // trailColor: "#f13",
                      // strokeLinecap: "butt"
                    })}
                  />
                </div>
              </div>
            </div>
            {quizData?.questions?.map((que, i) => (
              <div
                className={` sm:p-5 bg-[var(--colW2)] dark:bg-gray-800 ${
                  i === 0 && "rounded-t-3xl"
                } ${i == quizData?.questions?.length - 1 && "rounded-b-3xl"}`}
                key={i}
              >
                <p className="p-2 no-select ">
                  {i + 1}. {que?.question}
                </p>
                <div className="py-2  sm:pl-10 ">
                  {que?.option?.map((ans, i) => (
                    <div
                      key={i}
                      className={` px-2 py-1 sm:py-2 m-1 flex items-center gap-3 rounded-full 
                          ${
                            que?.yourAnswer == que?.correctAnswer
                              ? que?.yourAnswer == ans?.name &&
                                "bg-green-700 text-[var(--colW2)]"
                              : `${
                                  que?.yourAnswer == ans?.name &&
                                  "bg-red-300 dark:bg-red-900 "
                                } ${
                                  que?.correctAnswer == ans?.name &&
                                  "bg-green-300 dark:bg-lime-900 "
                                }`
                          } `}
                    >
                      <p className="text-[14px] no-select w-full flex gap-2  pl-4 items-center pl-2 sm:pl-5 ">
                        {ans?.que}{" "}
                        {que?.yourAnswer == que?.correctAnswer
                          ? que?.yourAnswer == ans?.name && (
                              <GiCheckMark
                                size={20}
                                className="text-[var(--colB3)] "
                              />
                            )
                          : null}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="w-full flex justify-end gap-2 p-2">
              <button onClick={()=>handleNextQuiz()} className="rounded-full h-[35px] px-5 py-1 bg-[var(--colB1)] text-[var(--colW2)]  cursor-pointer">
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
