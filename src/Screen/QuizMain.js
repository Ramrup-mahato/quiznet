import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Parents from "../components/ReUsable/Parents";
import NavBar from "../components/NavBar";
import ContainerBox from "../components/ReUsable/ContainerBox";
import Courses from "../components/Home/Courses";
import Footer from "../components/ReUsable/Footer";
import Banner from "../components/Home/Banner";
import Quiz from "../components/Quiz/Quiz";
import QuizService from "../service/quizService";
import { topicsName } from "../utils/data";

const QuizMain = () => {
  const { question,quizData, handleSelectQuestion } = QuizService();

  return (
    <Parents>
      <NavBar />
      <ContainerBox>
        <Quiz
          quizData={quizData}
          handleSelectQuestion={handleSelectQuestion}
          question={question}
        />
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default QuizMain;
