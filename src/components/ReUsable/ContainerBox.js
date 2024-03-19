import React from "react";

const ContainerBox = ({ children }) => {
  return <div className="w-full lg:max-w-[1500px] h-full px-[1%] sm:px-[5%] flex justify-center ">
    {children}</div>;
};

export default ContainerBox;
