import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../../Schema";
import { jwtDecode } from "jwt-decode";

const initialValues = {
  email: "",
  password: "",
};

const LoginService = () => {
  const navigation = useNavigate();
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log("this is formik", values);
        action.resetForm();
      },
    });

  const handleForgetRegister = (path) => {
    console.log("handleForgetRegister", path);
    navigation(`/${path}`);
  };
  const handleGoogleSuccess = async (response) => {
    let newResponse = jwtDecode(response.credential);
    console.log("newResponse", newResponse);
  };
  return {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleForgetRegister,
    handleGoogleSuccess,
  };
};

export default LoginService;
