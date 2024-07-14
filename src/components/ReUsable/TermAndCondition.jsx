import React from "react";
import Parents from "./Parents";
import ContainerBox from "./ContainerBox";
import { FaArrowLeftLong } from "react-icons/fa6";
import { termAndCondition } from "../../utils/data";

const TermAndCondition = () => {
    const handleGoBack=()=>{
        window.history.back()
    }
  return (
    <Parents>
      <ContainerBox>
        <div className="max-w-[1000px]  h-full  px-3 sm:px-6  gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
          <div
            className="w-full h-full   flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
       dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
          >
            <div
              className="  max-h-[100vh] flex justify-between bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
      font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-3 rounded-tr-3xl"
            >
              <div className="flex  justify-center items-center">
                <FaArrowLeftLong size={30} className="cursor-pointer mr-1 " onClick={handleGoBack} />
                <h1 className="text-[20px] md:text-[30px]">Terms and Conditions</h1>
              </div>
            </div>
            <div className="p-2 sm:p-5 ">
              {termAndCondition?.map((ele, i) => (
                <div key={i} className="p-2">
                  <h1 className="text-[20px] font-bold">{ele?.title}</h1>
                  <p className="text-[13px] text-gray-500 px-2">
                    {ele?.paragraph}
                  </p>
                </div>
              ))}
              <div className="px-4 flex ">
                <p className="text-[13px] text-gray-500 px-2"> By email:</p>
                <p className="text-[13px] text-[var(--colB1)] px-2">
                  {" "}
                  kizoStudy@.com
                </p>
              </div>
              <div className="px-4 flex ">
                <p className="text-[13px] text-gray-500 px-2">
                  {" "}
                  By visiting this page on our website:
                </p>
                <p className="text-[13px] text-[var(--colB1)] px-2">
                  {" "}
                  Contact Us Page URL
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerBox>
    </Parents>
  );
};

export default TermAndCondition;
