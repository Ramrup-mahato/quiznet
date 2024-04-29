import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../Schema";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  conformPassword: "",
};

const RegistrationService = () => {
  const navigation = useNavigate();
  const [regDetails, setRegDetails] = useState({
    radioSelect: "student",
    termCondition: false,
  });
  console.log("regDetails", regDetails);
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values, action) => {
        console.log("this is formik", values);
        action.resetForm();
      },
    });

  const handleSigIn = (path) => {
    console.log("handleForgetRegister", path);
    navigation(`/${path}`);
  };
  const handleSelectRadio = (e) => {
    let select = e.target.name;
    setRegDetails((oldData) => {
      return {
        ...oldData,
        radioSelect: select,
      };
    });
  };

  const handleTermCondition = (e) => {
    let { checked } = e.target;
    setRegDetails((oldData) => {
      return {
        ...oldData,
        termCondition: checked,
      };
    });
  };
  return {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    regDetails,
    handleSigIn,
    handleTermCondition,
    handleSelectRadio,
  };
};

export default RegistrationService;
