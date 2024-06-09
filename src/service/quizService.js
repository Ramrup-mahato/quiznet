import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { topicsName } from "../utils/data";
import { toastError } from "../utils/tostify";
import ContextStore from "../context/Context";
import { apiGetResponse } from "../utils/Helper";
import { getData } from "../components/AuthGard/LogGard";

const QuizService = () => {
  const [question, setQuestion] = useState({}); //selected show Question
  const [quizData, setQuizData] = useState([]); //All response data
  const [quiz, setQuiz] = useState({
    submitAnswer: "",
    selectQue: "",
    questionNumber: 0,
    result: false,
    totalQuestion: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
    time: 3,
    noOfGivenAnswer: 0,
  });
  // console.log("quizData", quizData);
  const { quizpath, path } = useParams();
  const navigation = useNavigate();
  const { token, setIsLoader, setLoaderInFolder, loaderInFolder } =
    useContext(ContextStore);
  // console.log("quizpath", quizpath);
  const handleSelectQuestion = (i) => {
    setQuestion(quizData?.questions[i]);
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        selectQue: quizData?.questions[i]._id,
        questionNumber: i,
      };
    });
  };

  //select Answer from  given option
  const handleSelectAnswers = (ans, questionId) => {
    let arr = quizData;
    arr?.questions?.forEach((ele, i) => {
      if (ele?._id === questionId) {
        if (ele.yourAnswer === "") {
          ele.yourAnswer = ans;
          if (ele?.correctAnswer == ans) {
            setQuiz((oldEle) => {
              return {
                ...oldEle,
                correctAnswer: oldEle.correctAnswer + 1,
                noOfGivenAnswer: oldEle.noOfGivenAnswer + 1,
              };
            });
          } else {
            setQuiz((oldEle) => {
              return {
                ...oldEle,
                wrongAnswer: oldEle.wrongAnswer + 1,
                noOfGivenAnswer: oldEle.noOfGivenAnswer + 1,
              };
            });
          }
        }
      }
    });
    setQuizData({ ...arr });
  };

  // --------------------next Question-----------------
  const handleNextQuestion = () => {
    setQuestion(quizData?.questions[quiz.questionNumber + 1]);
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        selectQue: quizData?.questions[quiz.questionNumber + 1]._id,
        questionNumber: oldEle.questionNumber + 1,
      };
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // ---------------------Previous Question------------------
  const handlePreviousQuestion = () => {
    setQuestion(quizData?.questions[quiz.questionNumber - 1]);
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        selectQue: quizData?.questions[quiz.questionNumber - 1]._id,
        questionNumber: oldEle.questionNumber - 1,
      };
    });
  };
  // ------------------see Result Page after submitting answer--------------------
  const handleSeeResult = () => {
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        result: true,
      };
    });
  };
  // next quiz page
  const handleNextQuiz = () => {
    console.log("path==>", path);
    navigation(`/${path}`);
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        result: false,
      };
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //---------Again restart quiz-------
  const handleAgainQuiz = () => {
    getChapter();
    setQuiz((oldEle) => {
      return {
        ...oldEle,
        result: false,
      };
    });
  };

  // ------------------get chapter and  Question APi--------------
  const getChapter = async () => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(
        await getData(`/chapter?query=${quizpath}`, token)
      );
      if (res?.success) {
        setLoaderInFolder(false);
        setQuizData(res?.data);
        setQuestion(res?.data?.questions[0]);
        setQuiz((old) => ({
          ...old,
          selectQue: res?.data?.questions?.[0]?._id,
          totalQuestion: res?.data?.questions.length,
        }));
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.log(error);
      toastError(error?.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    getChapter();
  }, []);
  return {
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
  };
};

export default QuizService;
