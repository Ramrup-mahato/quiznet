import React from "react";
import Parents from "../components/ReUsable/Parents";
import NavBar from "../components/NavBar";
import ContainerBox from "../components/ReUsable/ContainerBox";
import Footer from "../components/ReUsable/Footer";
import Quiz from "../components/Quiz/Quiz";
import QuizService from "../service/quizService";
import SubmitQuiz from "../components/Quiz/SubmitQuiz";
import "react-circular-progressbar/dist/styles.css";
import Loader from "../components/ReUsable/Loader";
import NotFound from "../components/ReUsable/NotFound ";
import Modal from "../components/Modal/Modal";
import TextInput from "../components/ReUsable/TextInput";

const QuizMain = () => {
  const {
    question,
    quizData,
    quiz,
    loaderInFolder,
    reportQuestion,
    testTime,
    exam,
    handleSelectQuestion,
    handleSelectAnswers,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSeeResult,
    handleNextQuiz,
    handleAgainQuiz,
    handleReportQuestion,
    handleSelectReportAnswer,
    handleSubmitReportQuestion,
    handleReportText,
    handleGoBack,
  } = QuizService();

  return (
    <Parents>
      <NavBar pageName={"Home"} />
      <ContainerBox>
        {quiz?.result === false ? (
          <>
            {loaderInFolder ? (
              <div className="w-full  min-h-[calc(100vh-115px)] lg:min-h-[100vh]  px-3 sm:px-6  gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
                <Loader folderLoader={true} />
              </div>
            ) : (
              <>
                {quizData?.questions?.length > 0 ? (
                  <Quiz
                    quizData={quizData}
                    handleSelectQuestion={handleSelectQuestion}
                    question={question}
                    quiz={quiz}
                    exam={exam}
                    handleSelectAnswers={handleSelectAnswers}
                    handleNextQuestion={handleNextQuestion}
                    handlePreviousQuestion={handlePreviousQuestion}
                    handleSeeResult={handleSeeResult}
                    handleReportQuestion={handleReportQuestion}
                    handleGoBack={handleGoBack}
                    testTime={testTime}
                  />
                ) : (
                  <NotFound noData={true} />
                )}
              </>
            )}
          </>
        ) : (
          <SubmitQuiz
            handleGoBack={handleGoBack}
            quizData={quizData}
            handleSelectQuestion={handleSelectQuestion}
            question={question}
            quiz={quiz}
            handleNextQuiz={handleNextQuiz}
            handleAgainQuiz={handleAgainQuiz}
          />
        )}
        <ReportModal
          handleReportQuestion={handleReportQuestion}
          reportQuestion={reportQuestion}
          handleSelectReportAnswer={handleSelectReportAnswer}
          handleSubmitReportQuestion={handleSubmitReportQuestion}
          handleReportText={handleReportText}
        />
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default QuizMain;

const ReportModal = ({
  handleReportQuestion,
  reportQuestion,
  handleSelectReportAnswer,
  handleSubmitReportQuestion,
  handleReportText,
}) => {
  return (
    <Modal open={reportQuestion.reportModal} onClose={handleReportQuestion}>
      <div className="min-w-[300px] sm:w-[500px]  bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl ">
        <div
          className="flex items-center bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
          font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl"
        >
          <h3>Report Details</h3>
        </div>
        <div className=" flex pt-5 flex-row justify-between items-center px-4">
          <p className="text-[13px] font-bold text-gray-600 dark:text-[var(--colW2)]">
            Select corrected Answer
          </p>
        </div>

        <div className="w-full flex justify-start items-center gap-2 py-2 px-4">
          {["a", "b", "c", "d"].map((ele, i) => (
            <div
              key={i}
              className={`flex items-start gap-3  cursor-pointer `}
              onClick={() => handleSelectReportAnswer(ele)}
            >
              <p
                className={`font-extrabold rounded-full  border-[3px] px-2  bg-white 
                 ${
                   reportQuestion?.yourAnswer === ele &&
                   "shadow-md shadow-green-800 border-green-800  text-green-800"
                 }  
                `}
              >
                {ele.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
        <div className="px-4">
          <TextInput
            name={"folder"}
            require
            textarea
            error={reportQuestion?.errorMessage.length > 0 ? true : false}
            errorMessage={reportQuestion?.errorMessage}
            label={"Message"}
            placeholder={"Please enter message here..."}
            handleChange={handleReportText}
            value={reportQuestion?.message}
          />

          <div className="w-full flex justify-end items-center gap-2 p-3">
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-white dark:bg-slate-700 border-[2px] border-rose-500 s cursor-pointer rounded-md py-1 px-3"
              onClick={handleReportQuestion}
            >
              Cancel
            </button>
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-[var(--colB1)] border border-[var(--colB1)] text-white cursor-pointer rounded-md py-1 px-3"
              type="submit"
              onClick={() => handleSubmitReportQuestion()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
