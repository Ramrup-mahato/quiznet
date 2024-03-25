import React from "react";
import Parents from "../components/ReUsable/Parents";
import NavBar from "../components/NavBar";
import ContainerBox from "../components/ReUsable/ContainerBox";
import Footer from "../components/ReUsable/Footer";
import Quiz from "../components/Quiz/Quiz";
import QuizService from "../service/quizService";
import SubmitQuiz from "../components/Quiz/SubmitQuiz";
import 'react-circular-progressbar/dist/styles.css';

const QuizMain = () => {
  const {
    question,
    quizData,
    quiz,
    handleSelectQuestion,
    handleSelectAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSeeResult,
    handleNextQuiz
  } = QuizService();

  return (
    <Parents>
      <NavBar pageName={'Home'} />
      <ContainerBox>
        {quiz?.result == false ? (
          <Quiz
            quizData={quizData}
            handleSelectQuestion={handleSelectQuestion}
            question={question}
            quiz={quiz}
            handleSelectAnswer={handleSelectAnswer}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            handleSeeResult={handleSeeResult}
          />
        ) : (
          <SubmitQuiz
            quizData={quizData}
            handleSelectQuestion={handleSelectQuestion}
            question={question}
            quiz={quiz}
            handleNextQuiz={handleNextQuiz}
            
          />
        )}
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default QuizMain;
