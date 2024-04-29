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
  handleChange = () => {},
  onBlur = () => {},
  OTP,
  disable,
  classStyle,
  textarea,
  RoundFull,
  require,
  name,
  autoComplete,
}) => {
  const [password, setPassword] = useState(false);
  const handleChangePasswordType = () => {
    setPassword(!password);
  };
  return (
    <div className="w-full flex flex-col inputMainField">
      {label && (
        <div className=" flex py-2 flex-row justify-between items-center">
          <p className="text-[14px] font-bold text-gray-600 dark:text-[var(--colW2)]">
            {label}
            {require && <span className="text-red-500">*</span>}
          </p>
          {error == true && (
            <span className="text-red-500 text-[12px]">{errorMessage}</span>
          )}
        </div>
      )}
      <div className="relative flex justify-center items-center">
        {textarea ? (
          <textarea
            type={password == true ? "text" : type}
            placeholder={placeholder}
            value={value}
            name={name}
            autoComplete={autoComplete === true ? "on" : "off"}
            disabled={disable}
            className={`w-full min-h-[100px] text-[14px] text-gray-600 dark:text-gray-50 dark:bg-gray-600 placeholder:dark:text-gray-400 EditInput ${classStyle} ${
              error == true ? "EditRed" : "EditBlue"
            } ${OTP == true ? "text-center" : ""} $ `}
            onChange={handleChange}
            onBlur={onBlur}
          />
        ) : (
          <input
            type={password == true ? "text" : type}
            placeholder={placeholder}
            value={value}
            name={name}
            disabled={disable}
            className={`w-full h-[35px] text-[14px] text-gray-600 dark:text-gray-50 dark:bg-gray-600 placeholder:dark:text-gray-400 EditInput ${classStyle} ${
              error == true ? "EditRed" : "EditBlue"
            } ${OTP == true ? "text-center" : ""} ${
              RoundFull === true ? "roundedInput" : ""
            } `}
            autoComplete={autoComplete === true ? "on" : "off"}
            onChange={handleChange}
            onBlur={onBlur}
          />
        )}

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
