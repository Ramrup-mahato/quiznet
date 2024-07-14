import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../Schema";
import { toastSuccess, toastWarning } from "../../utils/tostify";
import { postData } from "../../components/AuthGard/LogGard";
import { apiResponse } from "../../utils/Helper";
import ContextStore from "../../context/Context";

const initialValues = {
  username: "",
  email: "",
  phone: "",
  password: "",
  conformPassword: "",
};

const RegistrationService = () => {
  const navigation = useNavigate();
  const { setIsLoader } = useContext(ContextStore);
  const [regDetails, setRegDetails] = useState({
    radioSelect: "student",
    termCondition: false,
    OTPPage: false,
    OTP: "",
    email: "",
  });
  const [time, setTime] = useState(0);
  console.log("regDetails", regDetails);
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values, action) => {
      if (regDetails.termCondition === true) {
        handleRegister(values);
      } else {
        toastWarning("Please read and select term and condition");
      }
      // action.resetForm();
    },
  });
  // ------------------Navigate -----------------------
  const handleSigIn = (path) => {
    console.log("handleForgetRegister", path);
    navigation(`/${path}`);
  };
  // ------------------Selection of student or Expert  -----------------------

  const handleSelectRadio = (e) => {
    let select = e.target.name;
    setRegDetails((oldData) => {
      return {
        ...oldData,
        radioSelect: select,
      };
    });
  };
  // ---------------select Term And condition------------------------
  const handleTermCondition = (e) => {
    let { checked } = e.target;
    setRegDetails((oldData) => {
      return {
        ...oldData,
        termCondition: checked,
      };
    });
  };
  // -------------------Filling OTP-----------------
  const handleEnterOTP = (e) => {
    setRegDetails((oldData) => {
      return {
        ...oldData,
        OTP: e.target.value,
      };
    });
  };
  // --------------------Submit OTP with API------------------------
  const handleSubmitOTP = async () => {
    try {
      setIsLoader(true);
      const json = {
        email: regDetails?.email,
        OTP: regDetails?.OTP,
      };
      let verifyOtp = await apiResponse(await postData("/verifyOTP", json));
      if (verifyOtp?.success) {
        setIsLoader(false);
        setTimeout(() => {
          navigation("/login");
        }, 2000);
      }else{
        setIsLoader(false);
      }
    } catch (error) {
      if (error) setIsLoader(false);
    }
  };
  const handleRegister = async (value) => {
    try {
      const json = {
        userType: regDetails?.radioSelect,
        username: value?.username,
        email: value?.email,
        phone: value?.phone,
        password: value?.password,
        conformPassword: value?.conformPassword,
      };
      setIsLoader(true);
      const response = await apiResponse(await postData("/register", json));
      if (response?.success) {
        setTime(40);
        setIsLoader(false);
        setRegDetails((oldData) => {
          return {
            ...oldData,
            OTPPage: true,
            email: value?.email,
          };
        });
      }else{
        setIsLoader(false);
      }
    } catch (error) {
      if (error) setIsLoader(false);
    }
  };
  // -------------------Resend OTP----------------------------
  const handleResendOtp = async (event) => {
    event.preventDefault();
    setTime(40);
    toastSuccess("Send request for new OTP");
    setIsLoader(true);
    let json = {
      email: values.email,
    };

    let res = await apiResponse(await postData("/forgetPassword", json));
    console.log(res);
    if (res) setIsLoader(false);
  
  };
  // ------------------only enter number----------------------
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setFieldValue(name, value);
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
    regDetails,
    time,
    handleSigIn,
    handleTermCondition,
    handleSelectRadio,
    handleEnterOTP,
    handleSubmitOTP,
    handleResendOtp,
    handlePhoneChange,
  };
};

export default RegistrationService;
