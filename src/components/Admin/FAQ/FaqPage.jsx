import React, { useContext } from "react";
import FaqService from "../../../service/FAQService/FaqService";
import { RiEdit2Line } from "react-icons/ri";
import TextInput from "../../ReUsable/TextInput";
import Loader from "../../ReUsable/Loader";
import ContextStore from "../../../context/Context";
import { MdOutlineDelete } from "react-icons/md";

const FaqPage = () => {
  const { loaderInFolder } = useContext(ContextStore);

  let {
    allFaq,
    edit,
    handleSaveFaq,
    handleCancelFaq,
    handleTextChange,
    handleEditFAQ,
    handleAddFaq,
    handleDeleteFaq,
  } = FaqService();
  return (
    <>
      {loaderInFolder === true ? (
        <Loader folderLoader={true} />
      ) : (
        <div className="p-4 flex flex-col gap-3 ">
          {allFaq?.map((ele, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 bg-[var(--colW2)] dark:bg-slate-800 rounded-2xl p-3 "
            >
              <div className="flex justify-between items-center gap-2">
                <div className="flex w-full">
                  <p className="font-bold text-[14px] flex items-center justify-center pr-2 ">
                    Q{i + 1}.
                  </p>

                  {edit?._id === ele?._id ? (
                    <TextInput
                      value={edit?.question}
                      name="question"
                      placeholder={"Enter Question ..."}
                      handleChange={handleTextChange}
                    />
                  ) : (
                    <p className="font-bold text-[14px] flex items-center justify-center ">
                      {ele?.question}
                    </p>
                  )}
                </div>
                {edit?._id !== ele?._id && (
                  <RiEdit2Line
                    size={20}
                    className="text-[#D89F57] cursor-pointer drop-shadow-xl shadow-xl bg-[#E7F4FF] w-8 h-8 p-2 rounded-full hover:bg-[#f4e2cc] "
                    onClick={() => handleEditFAQ(ele)}
                  />

                  
                )}
                   <MdOutlineDelete
                    className="text-red-500 cursor-pointer drop-shadow-xl shadow-xl bg-[#E7F4FF] w-8 h-8 p-2 rounded-full hover:bg-[#ffe9e7]"
                    size={20}
                    title="Delete"
                    onClick={() => handleDeleteFaq(ele?._id)}
                  />
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="p-3"></p>
                {edit?._id === ele?._id ? (
                  <TextInput
                    value={edit?.answer}
                    textarea={true}
                    name="answer"
                    placeholder={"Enter Answer ..."}
                    handleChange={handleTextChange}
                  />
                ) : (
                  <p className=" text-[13px] flex items-center justify-center ">
                    {ele?.answer}
                  </p>
                )}
              </div>
              {edit?._id === ele?._id ? (
                <div className="flex justify-end items-center gap-2 py-1 px-2">
                  <button
                    className="text-[13px] py-2 rounded-md cursor-pointer px-4  border-[2px] border-red-300"
                    onClick={() => handleCancelFaq()}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-[13px] py-2 rounded-md cursor-pointer px-4 bg-[var(--colB1)] text-white border-[2px] border-[var(--colB1)]"
                    onClick={() => handleSaveFaq()}
                  >
                    Save
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
          {edit?.addNewFaq ? (
            <div className="flex flex-col gap-2 bg-[var(--colW2)] dark:bg-slate-800 rounded-2xl p-3 ">
              <>
                <div className="flex justify-center items-center gap-2">
                  <TextInput
                    value={edit?.question}
                    name="question"
                    placeholder={"Enter Question ..."}
                    handleChange={handleTextChange}
                  />
                </div>
                <div className="flex justify-center items-center gap-2">
                  <TextInput
                    value={edit?.answer}
                    textarea={true}
                    name="answer"
                    placeholder={"Enter Answer ..."}
                    handleChange={handleTextChange}
                  />
                </div>
                <div className="flex justify-end items-center gap-2 py-1 px-2">
                  <button className="text-[13px] py-2 rounded-md cursor-pointer px-4  border-[2px] border-red-300"
                   onClick={() => handleCancelFaq()}>
                    Cancel
                  </button>
                  <button
                    className="text-[13px] py-2 rounded-md cursor-pointer px-4 bg-[var(--colB1)] text-white border-[2px] border-[var(--colB1)]"
                    onClick={() => handleSaveFaq()}

                  >
                    Save
                  </button>
                </div>
              </>
            </div>
          ) : (
            <div className="flex justify-end items-center gap-2 py-1 px-2">
          
              <button
                className="text-[13px] py-2 rounded-md cursor-pointer px-4 bg-[var(--colB1)] text-white border-[2px] border-[var(--colB1)] "
                onClick={handleAddFaq}
              >
                Add FAQ
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FaqPage;
