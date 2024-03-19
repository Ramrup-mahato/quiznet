import React from "react";

const Parents = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col  bg-gradient-to-r from-sky-200 dark:from-[#15111E] via-sky-100 dark:via-[#053C48] to-sky-200 dark:to-[#1A102A] ">
      {children}
    </div>
  );
};

export default Parents;
