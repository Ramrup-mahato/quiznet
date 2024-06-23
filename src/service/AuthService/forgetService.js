import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmailScheme, NewPasswordScheme } from "../../Schema";
import { toastError, toastSuccess } from "../../utils/tostify";
import { apiResponse } from "../../utils/Helper";
import { postData } from "../../components/AuthGard/LogGard";
import ContextStore from "../../context/Context";

const EmailValue = {
  email: "",
};
const newPassword = {
  password: "",
  conformPassword: "",
};

const ForgetService = () => {
  const navigation = useNavigate();
  const {setIsLoader}=useContext(ContextStore)
  const [stage, setStage] = useState("email");
  const [forget, setForget] = useState({
    otp: "",
    email: "a1@b.com",
  });
  const [time, setTime] = useState(0);
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: stage === "email" ? EmailValue : newPassword,
      validationSchema: stage === "email" ? EmailScheme : NewPasswordScheme,
      onSubmit: (values, action) => {
        handleApiCall(values);
        action.resetForm();
      },
    });

  const handleForgetRegister = (path) => {
    console.log("handleForgetRegister", path);
    navigation(`/${path}`);
  };
  const handleEnterOtp = (e) => {
    setForget((old) => {
      return {
        ...old,
        otp: e.target.value,
      };
    });
  };
  const handleSubmitStage = (stage) => {
    setTimeout(() => {
      if (stage === "email") {
        handleSubmit();
      } else if (stage === "otp") {
        if (forget?.otp?.length === 0) {
          toastError("Please enter OTP");
        } else {
          handleApiCall();
        }
      } else if (stage === "password") {
        handleSubmit();
      }
    }, 1000);
  };
  const handleApiCall = async (value) => {
    try {
      if (stage === "email") {
        let json = {
          email: value.email,
        };
        setIsLoader(true)
        let res = await apiResponse(await postData("/forgetPassword", json));
        if (res) {
          setStage("otp");
          alert(JSON.stringify(res))
          setTime(40)
          setIsLoader(false)
          setForget((old) => {
            return {
              ...old,
              email: value.email,
            };
          });
        }
      } else if (stage === "otp") {
        let json = {
          email: forget.email,
          OTP: forget.otp,
        };
        setIsLoader(true)
        let res = await apiResponse(await postData("/verifyOTP", json));
        if (res) {
          setIsLoader(false)
          setStage("password");
        }
      } else if (stage === "password") {
        let json = {
          otp: forget.otp,
          email: forget.email,
          password: value.password,
          conformPassword: value.conformPassword,
        };
        setIsLoader(true)
        let res = await apiResponse(await postData("/updatePassword", json));
        if (res) {
          setIsLoader(false)
          setStage("finish");
          setTimeout(() => navigation('/login'), 3000);
        }
      }
    } catch (error) {
      if(error) setIsLoader(false)
    }
  };
  // -------------------Resend OTP----------------------------
  const handleResendOtp = async (event) => {
    try {
      
    
    event.preventDefault();
    setTime(40)
    let json = {
      email: forget.email,
    };
    toastSuccess("Send request for new OTP");
    setIsLoader(true)
    let res = await apiResponse(await postData("/forgetPassword", json));
    console.log(res);
    alert(JSON.stringify(res))
    if(res) setIsLoader(false)
    } catch (error) {
      if(error) setIsLoader(false)
    }
  };

  useEffect(() => {
    if (time !== 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);
  return {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    stage,
    forget,
    time,
    handleForgetRegister,
    handleSubmitStage,
    handleEnterOtp,
    handleResendOtp,
  };
};

export default ForgetService;
