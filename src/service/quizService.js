import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { topicsName } from "../utils/data";

const QuizService = () => {
  const [question, setQuestion] = useState({});
  const [quizData, setQuizData] = useState({});
  console.log("quizData", quizData);
  const { quizpath } = useParams();
  const handleSelectQuestion = (i) => {
    setQuestion(quizData?.questions[i]);
  };

  useEffect(() => {
    const data = topicsName?.fields?.filter((ele) => ele?.path === quizpath);
    setQuizData(...data);
    setQuestion(data[0]?.questions[0]);
  }, []);
  return {
    question,
    quizData,
    handleSelectQuestion,
  };
};

export default QuizService;
