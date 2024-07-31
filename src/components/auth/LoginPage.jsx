import React from "react";
import Study from "../../assets/image/study3.png";
import LoginService from "../../service/AuthService/loginService";
import { FaArrowLeftLong } from "react-icons/fa6";
import TextInput from "../ReUsable/TextInput";
import GoogleLoginButton from "../ReUsable/GoogleLoginButton";
import Modal from "../Modal/Modal";

const LoginPage = () => {
  const {
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
  } = LoginService();
  return (
    <div className="w-full p-5 sm:max-w-[1024px]  min-h-[100vh]  flex justify-center items-center">
      <div
        className="w-full  flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
     dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
      >
        <div
          className="flex bg-[var(--colB5)] gap-4 dark:bg-gray-950 text-black dark:text-[var(--colW2)]
    font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-3 rounded-tr-3xl "
        >
          <FaArrowLeftLong
            size={25}
            className="cursor-pointer"
            onClick={() => handleForgetRegister("")}
          />
          <p>Login to your Account!</p>
        </div>
        <div className="w-full flex p-3 sm:p-5 flex-col md:flex-row">
          <div className="w-full flex justify-center flex-col items-center">
            <img src={Study} alt="welcome" className="w-[150px] md:w-[350px]" />
            <p className="text-[25px] text-[var(--colB1)] font-[900]">
              Welcome To KizoStudy !
            </p>
            <p className="text-[12px] text-[var(--colB1)] font-[900]">
              Your 100% Study Solution
            </p>
          </div>

          <div className="flex gap-3 flex-col w-full h-full p-3">
            {activate === true ? (
              <p className="text-[25px] text-gray-500 font-[900]">
                <span className="text-[var(--colB1)]">Activate </span> your
                Account!
              </p>
            ) : (
              <p className="text-[25px] text-gray-500 font-[900]">
                <span className="text-[var(--colB1)]">Login </span>to your
                Account!
              </p>
            )}
            {activate === true ? (
              <>
                <TextInput
                  label={"OTP"}
                  placeholder={"Enter OTP."}
                  // error={forget?.errorOtp}
                  // errorMessage={forget?.errorOtp}
                  type={"text"}
                  OTP={true}
                  require
                  value={ActOtp}
                  handleChange={handleEnterOtp}
                />
                <div className="w-full flex justify-between items-center pt-4">
                  <div className="text-[13px] ">
                    {" "}
                    <button
                      onClick={handleResendOtp}
                      className={`${
                        time === 0 ? "text-[var(--colB1)]" : "text-gray-500"
                      }`}
                    >
                      Resend OTP
                    </button>
                  </div>
                  <div className="text-[13px]">
                    <p>{`00:${time < 10 ? "0" + time : time}`}</p>
                  </div>
                </div>
              </>
            ) : (
              <form>
                <TextInput
                  label={"Email"}
                  name={"email"}
                  error={errors.email && touched.email}
                  type={"text"}
                  errorMessage={errors.email}
                  value={values.email}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={false}
                />

                <TextInput
                  label={"Password"}
                  autoComplete={false}
                  error={errors.password && touched.password}
                  type={"password"}
                  name="password"
                  errorMessage={errors.password}
                  value={values.password}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                />
              </form>
            )}
            <div className="w-full">
              <button
                className="w-full bg-[var(--colB1)] rounded-full cursor-pointer h-[35px] flex 
              justify-center items-center text-[var(--colW2)] font-medium hover:opacity-[0.9] "
                type="submit"
                onClick={handleSubmit}
              >
                Login Account
              </button>
            </div>
            <div className="w-full flex justify-center items-center">
              <GoogleLoginButton
                handleGoogleSuccess={handleGoogleSuccess}
                text={"signin"}
              />
            </div>

            <div className="pl-5 text-[13px] text-gray-500">
              <p>
                I didn't remember!{" "}
                <span
                  onClick={() => handleForgetRegister("forget")}
                  className="font-bold cursor-pointer text-[var(--colB1)] text-[14px] hover:underline  "
                >
                  Forget Password
                </span>
              </p>
              <p>
                Not have an Account?{" "}
                <span
                  onClick={() => handleForgetRegister("registration")}
                  className="font-bold cursor-pointer text-[var(--colB1)] text-[14px] hover:underline  "
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
          <VerifyOTP
            openModal={openModal}
            handleModal={handleModal}
            handleCancel={handleCancel}
            handleActivate={handleActivate}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

const VerifyOTP = ({
  openModal,
  handleModal,
  handleCancel,
  handleActivate,
}) => {
  return (
    <Modal open={openModal} onClose={handleModal}>
      <div className="max-w-[400px]  bg-[var(--colW2)] dark:bg-slate-800 p-3  rounded-xl ">
        <div>
          <p className="text-[20px] text-gray-500 font-[900]">
            Do you want to
            <span className="text-[var(--colB1)]"> activate </span> your
            account?
          </p>
        </div>
        <div className="flex justify-around items-center p-5">
          <button
            className="w-[100px] border-[2px] border-[var(--colB1)] text-[var(--colB1)] rounded-md p-2 "
            onClick={() => handleCancel()}
          >
            {" "}
            Cancel
          </button>
          <button
            className="w-[100px] bg-[var(--colB1)] rounded-md p-2 text-white "
            onClick={() => handleActivate()}
          >
            Activate
          </button>
        </div>
      </div>
    </Modal>
  );
};
