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
    openModal: false,
    termAgree: false,
    pendingModal: false,
    pendingNo: [],
    testResult: false,
    timeLimit: false,
  });
  const [loader, setLoader] = useState({
    newQuestionLoader: false,
    submitLoader: false,
  });
  const [question, setQuestion] = useState({});
  const [response, setResponse] = useState([]);
  const [result, setResult] = useState([]);

  const [testTime, setTestTime] = useState(0);
  const query = useQuery();
  let testPath = query.get("testPath");
  const { token, setLoaderInFolder, loaderInFolder, userDetails, setIsLoader } =
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

  //   ---------------------------select question from list ---------------------------------
  const handleSelectQuestion = (i) => {
    setQuestion(response?.[i]);
    setExamInFo((prev) => ({
      ...prev,
      questionNumber: i,
      answer: "",
    }));
  };
  //   ---------------------save answer in db----------------
  const handleSaveQuestion = async (last) => {
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
        let arr = [...response];

        arr.forEach((item, i) => {
          if (item._id === examInfo.questionId) {
            item.yourAnswer = examInfo.answer;
          }
        });
        setResponse([...arr]);

        if (last === "last") {
          setExamInFo((prev) => ({
            ...prev,

            answer: "",
          }));
        } else {
          setQuestion(response?.[examInfo.questionNumber + 1]);
          setExamInFo((prev) => ({
            ...prev,
            questionNumber: prev.questionNumber + 1,
            answer: "",
          }));
        }
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
  // ----------------Next -----------------
  const handleNextQuestion = () => {
    setQuestion(response?.[examInfo.questionNumber + 1]);
    setExamInFo((prev) => ({
      ...prev,
      questionNumber: prev.questionNumber + 1,
      answer: "",
    }));
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
    // let arr = [...response];

    // arr.forEach((item, i) => {
    //   if (item._id === id) {
    //     item.yourAnswer = answer;
    //   }
    // });
    // setResponse([...arr]);
    setExamInFo((prev) => ({
      ...prev,
      questionId: id,
      answer: answer,
    }));
  };
  // ------------------check pending before submit ----------------------
  const handleSeeResult = () => {
    let arr = [];
    response.forEach((ele, i) => {
      if (!ele?.yourAnswer) {
        arr.push(i + 1);
      }
    });
    if (arr?.length > 0) {
      setExamInFo((prev) => ({
        ...prev,
        pendingNo: arr,
        pendingModal: true,
      }));
    } else {
      GetResult();
    }
  };

  // ------------------get chapter and  Question APi--------------
  const getTest = async () => {
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
          openModal: true,
          testId: res?.data?._id,
        }));
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.log(error);
      toastError(error?.message || "Something went wrong.");
    }
  };
  // ------------------------Result Api Call----------------------------
  const GetResult = async () => {
    try {
      setIsLoader(true);
      let json = {
        userId: userDetails._id,
      };

      let res = await apiGetResponse(
        await postData(`/test/result`, json, token)
      );
      if (res?.success) {
        setIsLoader(false);
        setResult(res?.data);
        setExamInFo((prev) => ({
          ...prev,
          testResult: true,
          pendingModal: false,
          termAgree: false,
        }));
      }
    } catch (error) {
      setIsLoader(false);
      console.log(error);
      toastError(error?.message || "Something went wrong.");
    }
  };
  // -----------------Warning Cancel-------------------
  const handleWarningCancel = () => {
    setExamInFo((prev) => ({
      ...prev,
      pendingNo: [],
      pendingModal: false,
    }));
  };
  // --------------Warning Submit ----------------
  const handleWarningSubmit = () => {
    GetResult();
  };
  // --------------handle get result ---------------------

  // -------------handleGoBack-------------------
  const handleGoBack = () => {
    window.history.back();
  };
  // ---------------------------Restart test -------------------------
  const handleAgainQuiz = () => {
    getTest();
    setExamInFo((prev) => ({
      ...prev,
      testResult: false,
      pendingModal: false,
      questionNumber: 0,
    }));
  };
  //-------------------------set Test Result----------------------------
  const handleSeeTestResult = () => {
    GetResult();
    setExamInFo((prev) => ({
      ...prev,
      timeLimit: false,
    }));
  };

  useEffect(() => {
    getTest();
  }, []);
  useEffect(() => {
    if (testTime > 0) {
      const timerId = setTimeout(() => {
        setTestTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
    if (examInfo.totalTime !== 0 && testTime === 0) {
      setExamInFo((prev) => ({
        ...prev,
        timeLimit: true,
      }));
    }
  }, [testTime]);
  return {
    examInfo,
    question,
    response,
    testTime,
    loader,
    userDetails,
    result,
    handleChange,
    setExamInFo,
    handleGoBack,
    loaderInFolder,
    handleSelectQuestion,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSelectAnswers,
    handleStartExam,
    handleSeeResult,
    handleWarningSubmit,
    handleWarningCancel,
    handleAgainQuiz,
    handleSeeTestResult,
    handleSaveQuestion,
  };
};

export default ExamService;
