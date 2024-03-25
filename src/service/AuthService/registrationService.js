import React from 'react'
import { useNavigate } from 'react-router-dom';

const RegistrationService = () => {
    const navigation = useNavigate();

    const handleSigIn = (path) => {
      console.log('handleForgetRegister',path);
      navigation(`/${path}`);
    };
  return {
    handleSigIn
  }
}

export default RegistrationService