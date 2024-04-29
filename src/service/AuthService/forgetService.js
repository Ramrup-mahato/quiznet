import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailScheme, NewPasswordScheme } from "../../Schema";

const EmailValue = {
  email: "",
};
const newPassword = {
  password: "",
  conformPassword: "",
};

const ForgetService = () => {
  const navigation = useNavigate();
  const [stage, setStage] = useState("email");
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: stage === "email" ? EmailValue : newPassword,
      validationSchema: stage === "email" ? EmailScheme : NewPasswordScheme,
      onSubmit: (values, action) => {
        console.log("this is formik", values);
        action.resetForm();
      },
    });

  const handleForgetRegister = (path) => {
    console.log("handleForgetRegister", path);
    navigation(`/${path}`);
  };
  const handleSubmitStage = (stage) => {
    setTimeout(() => {
      if (stage == "email") {
        setStage("otp");
        handleSubmit()
      } else if (stage == "otp") {
        setStage("password");
      } else if (stage == "password") {
        handleSubmit()
        setStage("finish");
      }
    }, 1000);
  };
  useEffect(() => {
    if (stage === "finish") {
      setTimeout(() => navigation(-1), 3000);
    }
  }, [stage]);
  return {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    stage,
    handleForgetRegister,
    handleSubmitStage,
  };
};

export default ForgetService;
