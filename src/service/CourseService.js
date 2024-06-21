import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactSchema } from "../Schema";
import { toastError, toastWarning } from "../utils/tostify";
import { apiGetResponse, apiResponse } from "../utils/Helper";
import { getData, postData } from "../components/AuthGard/LogGard";
import ContextStore from "../context/Context";

const initialValue = {
  username: "",
  email: "",
  phone: "",
  message: "",
};

const CourseService = () => {
  const { token, setIsLoader, viewCourse, toggleView } =
    useContext(ContextStore);
  const navigation = useNavigate();
  const [faqQuestion, setFaqQuestion] = useState([]);
  const [course, setCourse] = useState([]);

  const handleSelectCourse = (path) => {
    navigation(`/${path}`);
  };
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    handleReset,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: contactSchema,
    onSubmit: (values, action) => {
      handleSubmitMessage(values);
    },
  });
  // ---------------handling phone validation validation
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setFieldValue(name, value);
    }
  };

  //------------------Submit Query contact message-------------------------------
  const handleSubmitMessage = async (value) => {
    try {
      setIsLoader(true);
      let response = await apiResponse(
        await postData("/contact", value, token)
      );
      if (response.success) {
        setIsLoader(false);
        handleReset();
      }
    } catch (error) {
      setIsLoader(false);
      toastWarning(error.message);
    }
  };
  //-------------------Get Faq Question----------------------
  const GetFaqApi = async () => {
    try {
      let res = await apiGetResponse(await getData("/faq", token));
      if (res?.success) {
        setFaqQuestion(res?.data);
      }
    } catch (error) {
      console.log(error?.message);
      toastError(error.message || "something went Wrong.");
    }
  };
  // -------------------Get Course APi ------------
  const GetCourse = async () => {
    try {
      let res = await apiGetResponse(await getData("/course", token));
      if (res?.success) {
        setCourse(res?.data);
      }
    } catch (error) {
      console.log(error?.message);
      toastError(error?.message || "Some thing went wrong.");
    }
  };

  useEffect(() => {
    GetCourse();
    GetFaqApi();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  return {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleSelectCourse,
    handlePhoneChange,
    faqQuestion,
    course,
    viewCourse,
    toggleView,
  };
};

export default CourseService;
