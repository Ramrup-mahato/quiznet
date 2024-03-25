import React, { useState } from "react";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeCloseFill } from "react-icons/ri";

const TextInput = ({
  label,
  type,
  placeholder,
  value,
  errorMessage,
  error,
  handleChange,
  OTP,
  disable,
}) => {
  const [password, setPassword] = useState(false);
  const handleChangePasswordType = () => {
    setPassword(!password);
  };
  return (
    <div className="w-full flex flex-col inputMainField">
      <div className=" flex py-2 flex-row justify-between items-center">
        <p className="text-[15px] font-bold text-gray-600 dark:text-[var(--colW2)]" >
          {label}
          <span className="text-red-500">*</span>
        </p>
        {error == true && (
          <span className="text-red-500 text-[12px]">{errorMessage}</span>
        )}
      </div>
      <div className="relative flex justify-center items-center">
        <input
          type={password == true ? "text" : type}
          placeholder={placeholder}
          value={value}
          disabled={disable}
          className={`w-full h-[35px] text-[14px] text-gray-600 dark:bg-gray-600 EditInput ${
            error == true ? "EditRed" : "EditBlue"
          } ${OTP==true? "text-center":''}`}
          onChange={(e) => handleChange(e.target.value, label)}
        />
        {type === "password" &&
          (password === true ? (
            <RiEyeFill
              size={20}
              className="absolute right-1 cursor-pointer text-red-500"
              onClick={handleChangePasswordType}
            />
          ) : (
            <RiEyeCloseFill
              size={20}
              className="absolute right-1 cursor-pointer text-gray-700 dark:text-gray-100"
              onClick={handleChangePasswordType}
            />
          ))}
      </div>
    </div>
  );
};

export default TextInput;
