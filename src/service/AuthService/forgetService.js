import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetService = () => {
  const navigation = useNavigate();
  const [stage, setStage] = useState("email");

  const handleForgetRegister = (path) => {
    console.log("handleForgetRegister", path);
    navigation(`/${path}`);
  };
  const handleSubmit = (stage) => {
    setTimeout(() => {
      if (stage == "email") {
        setStage("otp");
      } else if (stage == "otp") {
        setStage("password");
      } else if (stage == "password") {
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
    stage,
    handleForgetRegister,
    handleSubmit,
  };
};

export default ForgetService;
