import React from "react";
import Study from "../../assets/image/study3.png";
import ForgetService from "../../service/AuthService/forgetService";
import TextInput from "../ReUsable/TextInput";

const ForgetPassword = () => {
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    stage,
    handleForgetRegister,
    handleSubmitStage,
  } = ForgetService();
  return (
    <div className="w-full p-5 sm:max-w-[1024px]  h-[100vh]  flex justify-center items-center">
      <div
        className="w-full  flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
   dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
      >
        <div
          className="flex justify-between bg-[var(--colB5)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
  font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-3 rounded-tr-3xl"
        >
          <p>Reset password</p>
        </div>
        <div className="w-full flex p-3 sm:p-5 flex-col md:flex-row relative">
          <div className="w-full flex justify-center flex-col items-center">
            <img src={Study} alt="welcome" className="w-[150px] md:w-[350px]" />
            <p className="text-[25px] text-[var(--colB1)] font-[900]">
              Welcome To QuizNet !
            </p>
            <p className="text-[12px] text-[var(--colB1)] font-[900]">
              Your 100% Study Solution
            </p>
          </div>

          <div className="flex gap-3 flex-col w-full h-full p-3 ">
            {stage !== "finish" && (
              <p className="text-[25px] text-gray-500 font-[900]">
                <span className="text-[var(--colB1)]">Reset </span> password of
                your account!
              </p>
            )}
            <form>
              {stage === "email" && (
                <TextInput
                  label={"Email"}
                  error={false}
                  placeholder={"Enter Your Email here."}
                  type={"text"}
                  errorMessage={"This field is required"}

                  // value={"123"}
                  // handleChange={handleChange}
                />
              )}
              {stage === "otp" && (
                <TextInput
                  label={"OTP"}
                  error={false}
                  placeholder={"Enter OTP."}
                  type={"text"}
                  errorMessage={"This field is required"}
                  OTP={true}
                  // disable={true}
                  // value={"123"}
                  // handleChange={handleChange}
                />
              )}
              {stage === "password" && (
                <>
                  <TextInput
                    label={"New Password"}
                    error={false}
                    placeholder={"Enter New Password."}
                    type={"password"}
                    errorMessage={"This field is required"}
                    // disable={true}
                    // value={"123"}
                    // handleChange={handleChange}
                  />
                  <TextInput
                    label={"Conform-password"}
                    error={false}
                    placeholder={"Enter Conform-password."}
                    type={"password"}
                    errorMessage={"This field is required"}

                    // disable={true}
                    // value={"123"}
                    // handleChange={handleChange}
                  />
                </>
              )}
              {stage === "finish" && (
                <div className="w-full h-[60px] flex justify-center flex-col items-center gap-2 my-10">
                  <img
                    src="https://js.pngtree.com/a4/static/l03b0s.d57ca31e.gif"
                    className="absolute top-0 border-[5px ] w-full h-full z-0"
                    alt="gif image"
                  />
                  <p className="text-[35px] text-[var(--colB1)] font-[900]">
                    Congratulations! 🙂
                  </p>
                  <p className="text-[20px] text-[var(--colB1)] text-center font-[900]">
                    You have successfully reset your password.
                  </p>
                </div>
              )}
            </form>
            {stage !== "finish" && (
              <div className="w-full">
                <button
                  className="w-full bg-[var(--colB1)] rounded-full cursor-pointer h-[35px] flex 
            justify-center items-center text-[var(--colW2)] font-medium hover:opacity-[0.9] "
                  type="submit"
                  onClick={() => handleSubmitStage(stage)}
                >
                  Submit {stage}
                </button>
              </div>
            )}

            <div className="pl-5 text-[13px] text-gray-500">
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => handleForgetRegister("login")}
                  className="font-bold cursor-pointer text-[var(--colB1)] text-[14px] hover:underline  "
                >
                  Sign In
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
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
