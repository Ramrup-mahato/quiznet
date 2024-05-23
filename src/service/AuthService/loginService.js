import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../../Schema";
import { jwtDecode } from "jwt-decode";
import { postData } from "../../components/AuthGard/LogGard";
import { apiResponse } from "../../utils/Helper";
import { toastSuccess, toastWarning } from "../../utils/tostify";
import ContextStore from "../../context/Context";

const initialValues = {
  email: "",
  password: "",
};

const LoginService = () => {
  const { setIsLoader } = useContext(ContextStore);
  const navigation = useNavigate();
  const [activate, setActivate] = useState(false);
  const [ActOtp, setActOtp] = useState("");
  const [time, setTime] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        ApiCall(values);
      },
    });
  // -----------------------------Api call for login and verify OTP=--------------------------
  const ApiCall = async (values) => {
    try {
      if (activate) {
        if (ActOtp) {
          setIsLoader(true);
          let json = {
            email: values.email,
            OTP: ActOtp,
          };
          let Res = await apiResponse(await postData("/verifyOTP", json));

          if (Res) {
            setActivate(false);
            setIsLoader(false);
          }
        } else {
          toastWarning("Please Enter OTP");
        }
      } else {
        setIsLoader(true);
        const loginRes = await apiResponse(await postData("/login", values));
        console.log("step1", loginRes);
        if (loginRes) setIsLoader(false);
        localStorage.setItem("quizNetToken", JSON.stringify(loginRes.data));
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      await apiResponse(error);
      if (error) setIsLoader(false);
      if (error?.data?.isActive === false) {
        setTimeout(() => setOpenModal(true), 2000);
      }
    }
  };

  const handleForgetRegister = (path) => {
    // console.log("handleForgetRegister", path);
    navigation(`/${path}`);
  };
  // -------------------------login with Google ------------------------
  const handleGoogleSuccess = async (response) => {
    let newResponse = jwtDecode(response.credential);
    console.log("newResponse", newResponse);
  };

  const handleEnterOtp = (e) => {
    setActOtp(e.target.value);
  };

  // -------------------Resend OTP ----------------------------
  const handleResendOtp = async (event) => {
    event.preventDefault();
    setIsLoader(true);
    setTime(40);
    let json = {
      email: values.email,
    };
    toastSuccess("Send request for new OTP");

    let res = await apiResponse(await postData("/forgetPassword", json));
    if (res) setIsLoader(false);
    console.log(res);
  };
  // -----------close modal---------------
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  // --------------Cancel Activate-------------
  const handleCancel = () => {
    setOpenModal(false);
  };
  // ------------------------Activate Account--------------------------
  const handleActivate = async () => {
    setIsLoader(true);
    setTime(40);
    let json = {
      email: values.email,
    };
    let res = await apiResponse(await postData("/forgetPassword", json));
    console.log(res);
    if (res) {
      setIsLoader(false);
      setActivate(true);
      setOpenModal(false);
    }
  };
  return {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    activate,
    time,
    ActOtp,
    openModal,
    handleForgetRegister,
    handleGoogleSuccess,
    handleResendOtp,
    handleEnterOtp,
    handleModal,
    handleCancel,
    handleActivate,
  };
};

export default LoginService;
