import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContextStore from "../context/Context";
import { toastError } from "../utils/tostify";
import { apiGetResponse } from "../utils/Helper";
import { getData } from "../components/AuthGard/LogGard";

const CourseDetailsService = () => {
  const navigation = useNavigate();
  const { path } = useParams();
  const { token, setIsLoader, setLoaderInFolder,loaderInFolder } = useContext(ContextStore);
  const [subject, setSubject] = useState({});

  const handleSelectTopic = (path, parentPath) => {
    navigation(`/${parentPath}/${path}`);
  };
  // ----------Get All Subject APi---------
  const getSubject = async () => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(await getData(`/subject?query=${path}`,token));
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
  useEffect(() => {
    getSubject();
  }, []);

  return {
    path,
    subject,
    loaderInFolder,
    handleSelectTopic,
  };
};

export default CourseDetailsService;
