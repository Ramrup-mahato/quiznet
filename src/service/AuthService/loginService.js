import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../../Schema";
import { jwtDecode } from "jwt-decode";
import { postData } from "../../components/AuthGard/LogGard";
import { apiResponse } from "../../utils/Helper";
import { toastError, toastSuccess, toastWarning } from "../../utils/tostify";
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

          if (Res?.success === true) {
            setActivate(false);
            setIsLoader(false);
          } else {
            setIsLoader(false);
          }
        } else {
          toastWarning("Please Enter OTP");
        }
      } else {
        setIsLoader(true);
        const loginRes = await apiResponse(await postData("/login", values));
        console.log("step1", loginRes);
        if (loginRes?.success) {
          setIsLoader(false);
          localStorage.setItem("quizNetToken", JSON.stringify(loginRes.data));
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        } else {
          console.log("#########==>", loginRes);
          setIsLoader(false);
          if (loginRes?.data?.isActive === false) {
            setTimeout(() => setOpenModal(true), 2000);
          }
          if (loginRes?.data?.isBlocked) {
            setTimeout(() => {
              navigation("/");
            }, 2000);
            setTimeout(() => {
              const element = document.getElementById("contactMessage");
              const yOffset = -100;
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }, 4000);
          }
        }
      }
    } catch (error) {
      await apiResponse(error);
      console.log("error==>", error?.data);
      if (error) setIsLoader(false);
      if (error?.data?.isActive === false) {
        setTimeout(() => setOpenModal(true), 2000);
      }
      if (error?.data?.isBlocked) {
        setTimeout(() => {
          navigation("/");
        }, 2000);
        setTimeout(() => {
          const element = document.getElementById("contactMessage");
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 4000);
      }
    }
  };

  const handleForgetRegister = (path) => {
    // console.log("handleForgetRegister", path);
    navigation(`/${path}`);
  };
  // -------------------------login with Google ------------------------
  const handleGoogleSuccess = async (response) => {
    // console.log("response from google", response);

    // let newResponse = jwtDecode(response.credential);
    // console.log("newResponse", newResponse);
    try {
      setIsLoader(true);
      let json = {
        credential: response?.credential,
      };
      let res = await apiResponse(await postData("/login/google", json));
     
      if (res?.success) {
        setIsLoader(false);
        localStorage.setItem("quizNetToken", JSON.stringify(res?.data));
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        setIsLoader(false);
        if (res?.data?.isActive === false) {
          setTimeout(() => setOpenModal(true), 2000);
        }
        if (res?.data?.isBlocked) {
          setTimeout(() => {
            navigation("/");
          }, 2000);
          setTimeout(() => {
            const element = document.getElementById("contactMessage");
            const yOffset = -100;
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 4000);
        }
      }
    } catch (error) {
      setIsLoader(false);
      console.log(error);
    }
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
    try {
      setIsLoader(true);
      setTime(40);

      const json = {
        email: values.email,
      };

      const response = await postData("/forgetPassword", json);
      const res = await apiResponse(response);

      if (res?.success) {
        setActivate(true);
        setOpenModal(false);
      } else {
        setIsLoader(false);
        // Handle the case where the response is not successful
        toastError("An error occurred: " + (res?.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      toastError("An error occurred while processing your request.");
    } finally {
      setIsLoader(false);
    }
  };

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

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
