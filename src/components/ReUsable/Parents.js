import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import ContextStore from "../../context/Context";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

const Parents = ({ children }) => {
  const { theme, isLoader } = useContext(ContextStore);
  return (
    <div className="w-full h-full flex justify-center items-center flex-col  bg-gradient-to-r from-sky-200 dark:from-[#15111E] via-sky-100 dark:via-[#053C48] to-sky-200 dark:to-[#1A102A] ">
      {children}
      {isLoader && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
    </div>
  );
};

export default Parents;
