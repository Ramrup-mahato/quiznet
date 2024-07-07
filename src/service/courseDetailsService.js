import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContextStore from "../context/Context";
import { toastError } from "../utils/tostify";
import { apiGetResponse } from "../utils/Helper";
import { getData } from "../components/AuthGard/LogGard";

const CourseDetailsService = () => {
  const navigation = useNavigate();
  const { path } = useParams();
  const {
    token,
    setLoaderInFolder,
    loaderInFolder,
    viewCourse,
    toggleView,
    setExam,
  } = useContext(ContextStore);
  const [subject, setSubject] = useState({});

  const handleSelectTopic = (item, path, parentPath) => {
    if (!item?.pdfStatus) {
      if (item?.test === true) {
        setExam(item?.test);
        navigation(`/test?testPath=${path}`);
      } else {
        navigation(`/${parentPath}/${path}`);
      }
    }
  };
  // ----------Get All Subject APi---------
  const getSubject = async () => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(
        await getData(`/subject?query=${path}`, token)
      );
      if (res?.success) {
        setSubject(res?.data);
        setLoaderInFolder(false);
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.log(error);
      toastError(error?.message || "Something went wrong!");
    }
  };
  // -------------------------open PDF--------------------------------
  const handleOpenPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };
  useEffect(() => {
    getSubject();
  }, [path]);

  return {
    path,
    subject,
    loaderInFolder,
    handleSelectTopic,
    viewCourse,
    toggleView,
    handleOpenPdf,
  };
};

export default CourseDetailsService;
