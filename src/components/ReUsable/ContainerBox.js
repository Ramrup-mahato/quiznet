import React, { useEffect } from "react";

const ContainerBox = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full lg:max-w-[1500px] h-full px-[1%] sm:px-[5%] flex justify-center ">
      {children}
    </div>
  );
};

export default ContainerBox;
