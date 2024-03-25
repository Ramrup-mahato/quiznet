import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { topicsName } from "../utils/data";

const QuizService = () => {
  const [question, setQuestion] = useState({});
  const [quizData, setQuizData] = useState({});
  const [quiz, setQuiz] = useState({
    submitAnswer: "",
    selectQue: "",
    questionNumber: 0,
    result: false,
    totalQuestion: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
    time: 3,
  });
  // console.log("quizData", quizData);
  const { quizpath } = useParams();
  const handleSelectQuestion = (i) => {
    setQuestion(quizData?.questions[i]);
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        selectQue: quizData?.questions[i].question,
        questionNumber: i,
      };
    });
  };

  //select Answer from  given option
  const handleSelectAnswer = (que, ans) => {
    let arr = quizData;
    arr?.questions?.forEach((ele, i) => {
      if (ele?.question == que) {
        ele.yourAnswer = ans;
      }
    });
    setQuizData({ ...arr });
  };

  // next Question
  const handleNextQuestion = () => {
    setQuestion(quizData?.questions[quiz.questionNumber + 1]);
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        selectQue: quizData?.questions[quiz.questionNumber + 1].question,
        questionNumber: oldEle.questionNumber + 1,
      };
    });
  };
  // Previous Question
  const handlePreviousQuestion = () => {
    setQuestion(quizData?.questions[quiz.questionNumber - 1]);
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        selectQue: quizData?.questions[quiz.questionNumber - 1].question,
        questionNumber: oldEle.questionNumber - 1,
      };
    });
  };
  // see Result Page after submitting answer
  const handleSeeResult = () => {
    let totalQuestion = quizData?.questions?.length;
    let correctAnswer = 0;
    let wrongAnswer = 0;
    let time = 3;
    for (let ele of quizData?.questions) {
      if (ele?.yourAnswer == ele?.correctAnswer) {
        correctAnswer += 1;
      } else {
        wrongAnswer += 1;
      }
    }

    setQuiz((oldEle) => {
      return {
        ...oldEle,
        result: true,
        totalQuestion: totalQuestion,
        correctAnswer: correctAnswer,
        wrongAnswer: wrongAnswer,
        time: 3,
      };
    });
  };
  // next quiz page
  const handleNextQuiz = () => {
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        result: false,
      };
    });

    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  };
  useEffect(() => {
    const data = topicsName?.fields?.filter((ele) => ele?.path === quizpath);
    setQuizData(...data);
    setQuestion(data[0]?.questions[0]);
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        selectQue: data[0]?.questions[0].question,
      };
    });
  }, []);
  return {
    question,
    quizData,
    quiz,
    handleSelectQuestion,
    handleSelectAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSeeResult,
    handleNextQuiz,
  };
};

export default QuizService;
