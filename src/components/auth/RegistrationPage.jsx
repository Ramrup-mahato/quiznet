import React from "react";
import Study from "../../assets/image/study3.png";
import RegistrationService from "../../service/AuthService/registrationService";
import TextInput from "../ReUsable/TextInput";
import GoogleLoginButton from "../ReUsable/GoogleLoginButton";
const RegistrationPage = () => {
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    regDetails,
    handleSelectRadio,
    handleTermCondition,
    handleSigIn,
  } = RegistrationService();
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
          <p>Join Us!!</p>
        </div>
        <div className="w-full flex p-3 sm:p-5 flex-col md:flex-row">
          <div className="w-full hidden md:flex justify-center flex-col items-center">
            <img
              src={Study}
              alt="welcome"
              className="hidden md:block w-[150px] md:w-[350px]"
            />
            <p className="text-[25px] text-[var(--colB1)] font-[900]">
              Welcome To QuizNet !
            </p>
            <p className="text-[12px] text-[var(--colB1)] font-[900]">
              Your 100% Study Solution
            </p>
          </div>

          <div className="flex gap-3 flex-col w-full h-full p-3">
            <div className="flex gap-10 justify-center">
              <div className="flex justify-center items-center h-8">
                <input
                  type="radio"
                  id="Student"
                  className="reg"
                  checked={regDetails.radioSelect === "student" ? true : false}
                  onChange={handleSelectRadio}
                  name="student"
                />
                <label
                  htmlFor="Student"
                  className="px-5 text-[14px] font-bold text-slate-600 dark:text-slate-100 cursor-pointer"
                >
                  I am Student
                </label>
              </div>
              <div>
                <input
                  id="Expert"
                  type="radio"
                  className="reg"
                  checked={regDetails.radioSelect === "expert" ? true : false}
                  onChange={handleSelectRadio}
                  name="expert"
                />
                <label
                  htmlFor="Expert"
                  className="px-5 text-[14px] font-bold text-slate-600 dark:text-slate-100 cursor-pointer"
                >
                  I am Expert
                </label>
              </div>
            </div>
            <form>
              <TextInput
                label={"Full Name"}
                error={errors.fullname && touched.fullname}
                type={"text"}
                name={"fullname"}
                errorMessage={errors.fullname}
                value={values.fullname}
                handleChange={handleChange}
                onBlur={handleBlur}
                autoComplete={true}
              />
              <TextInput
                label={"Email"}
                error={errors.email && touched.email}
                type={"text"}
                name={"email"}
                errorMessage={errors.email}
                value={values.email}
                handleChange={handleChange}
                onBlur={handleBlur}
                autoComplete={false}
              />
              <TextInput
                label={"Password"}
                error={errors.password && touched.password}
                type={"password"}
                errorMessage={errors.password}
                value={values.password}
                handleChange={handleChange}
                onBlur={handleBlur}
                name={"password"}
              />
              <TextInput
                label={"Conform-Password"}
                error={errors.conformPassword && touched.conformPassword}
                type={"password"}
                errorMessage={errors.conformPassword}
                value={values.conformPassword}
                handleChange={handleChange}
                onBlur={handleBlur}
                name={"conformPassword"}
              />
              <div className="flex items-center gap-2 py-2 mt-2">
                <input
                  type="checkbox"
                  onChange={handleTermCondition}
                  checked={regDetails.termCondition}
                />
                <p className=" text-gray-500 text-[12px]  ">
                  I agree to{" "}
                  <span className="cursor-pointer text-[var(--colB1)] text-[14px] hover:underline">
                    Term & conditions
                  </span>{" "}
                </p>
              </div>
            </form>
            <div className="w-full">
              <button
                className="w-full bg-[var(--colB1)] rounded-full cursor-pointer h-[35px] flex 
              justify-center items-center text-[var(--colW2)] font-medium hover:opacity-[0.9] "
                type="submit"
                onClick={handleSubmit}
              >
                Register Account
              </button>
            </div>

            <GoogleLoginButton text={"continue_with"} />

            <div className="pl-5 text-[13px] text-gray-500">
              <p>
                Already have an account?{" "}
                <a
                  onClick={() => handleSigIn("login")}
                  className="font-bold cursor-pointer text-[var(--colB1)] text-[14px] hover:underline  "
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
