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

const QuizMain = () => {
  const {
    question,
    quizData,
    quiz,
    loaderInFolder,
    handleSelectQuestion,
    handleSelectAnswers,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSeeResult,
    handleNextQuiz,
    handleAgainQuiz,
  } = QuizService();

  return (
    <Parents>
      <NavBar pageName={"Home"} />
      <ContainerBox>
        {quiz?.result == false ? (
          <>
            {loaderInFolder ? (
              <div className="w-full  min-h-[calc(100vh-115px)] lg:min-h-[100vh]  px-3 sm:px-6  gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
                <Loader folderLoader={true} />
              </div>
            ) : (
              <>
              {
                quizData?.questions?.length>0?

                <Quiz
                  quizData={quizData}
                  handleSelectQuestion={handleSelectQuestion}
                  question={question}
                  quiz={quiz}
                  handleSelectAnswers={handleSelectAnswers}
                  handleNextQuestion={handleNextQuestion}
                  handlePreviousQuestion={handlePreviousQuestion}
                  handleSeeResult={handleSeeResult}
                />:
                <NotFound />
              }
              </>
            )}
          </>
        ) : (
          <SubmitQuiz
            quizData={quizData}
            handleSelectQuestion={handleSelectQuestion}
            question={question}
            quiz={quiz}
            handleNextQuiz={handleNextQuiz}
            handleAgainQuiz={handleAgainQuiz}
          />
        )}
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default QuizMain;
