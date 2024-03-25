import React from "react";
import { useNavigate } from "react-router-dom";

const LoginService = () => {
  const navigation = useNavigate();

  const handleForgetRegister = (path) => {
    console.log('handleForgetRegister',path);
    navigation(`/${path}`);
  };
  return {
    handleForgetRegister,
  };
};

export default LoginService;
