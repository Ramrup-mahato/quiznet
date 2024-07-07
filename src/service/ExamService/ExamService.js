import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContextStore from "../../context/Context";
import { apiGetResponse } from "../../utils/Helper";
import {
  getData,
  postData,
  updateData,
} from "../../components/AuthGard/LogGard";
import { toastError } from "../../utils/tostify";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ExamService = () => {
  const [examInfo, setExamInFo] = useState({
    totalTime: 0,
    testId: "",
    questionNumber: 0,
    title: "",
    createdOn: "",
    questionId: "",
    answer: "",
    testMessage: "",
    openModal: true,
    termAgree: false,
  });
  const [loader, setLoader] = useState({
    newQuestionLoader: false,
    submitLoader: false,
  });
  const [question, setQuestion] = useState({});
  const [response, setResponse] = useState([]);

  const [testTime, setTestTime] = useState(0);
  const query = useQuery();
  let testPath = query.get("testPath");
  const { token, setLoaderInFolder, loaderInFolder, userDetails } =
    useContext(ContextStore);
  // ----------------------onChange-------------------------------
  const handleChange = (e) => {
    setExamInFo((prev) => ({
      ...prev,
      termAgree: !prev.termAgree,
    }));
  };
  // -------------------------Start Exam--------------------------------------
  const handleStartExam = () => {
    if (examInfo?.termAgree) {
      setExamInFo((prev) => ({
        ...prev,
        openModal: false,
      }));
      setTestTime(examInfo?.totalTime);
    }
  };

  //   ---------------------------select question---------------------------------
  const handleSelectQuestion = (i) => {
    setQuestion(response?.[i]);
    setExamInFo((prev) => ({
      ...prev,
      questionNumber: i,
    }));
  };
  //   ---------------------next question----------------
  const handleNextQuestion = async () => {
    try {
      setLoader((prev) => ({
        ...prev,
        newQuestionLoader: true,
      }));
      let json = {
        questionId: examInfo?.questionId,
        userId: userDetails?._id,
        studentAnswer: examInfo?.answer,
      };
      let res = await apiGetResponse(
        await updateData("/test/answer", json, token)
      );
      if (res?.success) {
        setQuestion(response?.[examInfo.questionNumber + 1]);
        setExamInFo((prev) => ({
          ...prev,
          questionNumber: prev.questionNumber + 1,
        }));
        setLoader((prev) => ({
          ...prev,
          newQuestionLoader: false,
        }));
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } catch (error) {
      setLoader((prev) => ({
        ...prev,
        newQuestionLoader: false,
      }));
      toastError(error?.message || "some thing went wrong!");
      console.log(error);
    }
  };
  //   -----------------------previous -----------------------
  const handlePreviousQuestion = () => {
    setQuestion(response?.[examInfo.questionNumber - 1]);
    setExamInFo((prev) => ({
      ...prev,
      questionNumber: prev.questionNumber - 1,
    }));
  };
  // ------------------------select Answer---------------------------
  const handleSelectAnswers = (answer, id) => {
    let arr = [...response];

    arr.forEach((item, i) => {
      if (item._id === id) {
        item.yourAnswer = answer;
      }
    });
    setResponse([...arr]);
    setExamInFo((prev) => ({
      ...prev,
      questionId: id,
      answer: answer,
    }));
  };

  // ------------------get chapter and  Question APi--------------
  const getChapter = async () => {
    try {
      setLoaderInFolder(true);

      let res = await apiGetResponse(
        await getData(`/test/questions?query=${testPath}`, token)
      );
      if (res?.success) {
        setLoaderInFolder(false);

        setResponse(res?.data?.questions);
        setQuestion(res?.data?.questions?.[0]);
        setExamInFo((prev) => ({
          ...prev,
          title: res?.data?.chapterTitle,
          createdOn: res?.data?.createdOn,
          totalTime: res?.data?.testTime * 60,
          testMessage: res?.data?.testMessage,
        }));
        setTestTime(res?.data?.testTime * 60);
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.log(error);
      toastError(error?.message || "Something went wrong.");
    }
  };
  // -------------handleGoBack-------------------
  const handleGoBack = () => {
    window.history.back();
  };
  // ---------------------------------------------------------

  useEffect(() => {
    getChapter();
  }, []);
  useEffect(() => {
    if (testTime > 0) {
      const timerId = setTimeout(() => {
        setTestTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [testTime]);
  return {
    examInfo,
    question,
    response,
    testTime,
    loader,
    userDetails,
    handleChange,
    setExamInFo,
    handleGoBack,
    loaderInFolder,
    handleSelectQuestion,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSelectAnswers,
    handleStartExam,
  };
};

export default ExamService;
