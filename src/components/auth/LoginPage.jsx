import React from "react";
import TextInput from "./TextInput";
import Study from "../../assets/image/study3.png";
import LoginService from '../../service/AuthService/loginService'
import { FaArrowLeftLong } from "react-icons/fa6";

const LoginPage = () => {
  const { handleForgetRegister } = LoginService();
  return (
    <div className="w-full p-5 sm:max-w-[1024px]  h-[100vh]  flex justify-center items-center">
      <div
        className="w-full  flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
     dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
      >
        <div
          className="flex bg-[var(--colB5)] gap-4 dark:bg-gray-950 text-black dark:text-[var(--colW2)]
    font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-3 rounded-tr-3xl "
        >
          <FaArrowLeftLong size={25} className="cursor-pointer" onClick={()=>handleForgetRegister('')}   />
          <p>Login to your Account!</p>
        </div>
        <div className="w-full flex p-3 sm:p-5 flex-col md:flex-row">
          <div className="w-full flex justify-center flex-col items-center">
            <img src={Study} alt="welcome" className="w-[150px] md:w-[350px]" />
            <p className="text-[25px] text-[var(--colB1)] font-[900]">
              Welcome To QuizNet !
            </p>
            <p className="text-[12px] text-[var(--colB1)] font-[900]">
              Your 100% Study Solution
            </p>
          </div>

          <div className="flex gap-3 flex-col w-full h-full p-3">
            <form>
              <TextInput
                label={"Email"}
                error={false}
                type={"text"}
                errorMessage={"This field is required"}
                // value={"ramrup majhat"}
                // handleChange={handleChange}
              />
              <TextInput
                label={"Phone"}
                error={false}
                type={"text"}
                errorMessage={"This field is required"}
                // value={"ramrup majhat"}
                // handleChange={handleChange}
              />
              <TextInput
                label={"Password"}
                error={true}
                type={"password"}
                errorMessage={"This field is required"}
                value={"ramrup"}
                // handleChange={handleChange}
              />
            </form>
            <div className="w-full">
              <button
                className="w-full bg-[var(--colB1)] rounded-full cursor-pointer h-[35px] flex 
              justify-center items-center text-[var(--colW2)] font-medium hover:opacity-[0.9] "
              >
                Login Account
              </button>
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
