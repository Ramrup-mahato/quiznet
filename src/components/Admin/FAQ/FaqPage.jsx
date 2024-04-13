import React from "react";
import FaqService from "../../../service/FAQService/FaqService";
import { RiEdit2Line } from "react-icons/ri";
import TextInput from "../../ReUsable/TextInput";

const FaqPage = () => {
  let {
    allFaq,
    edit,
    handleSaveFaq,
    handleCancelFaq,
    handleTextChange,
    handleAreaChange,
    handleEditFAQ,
  } = FaqService();
  return (
    <div className="p-4 flex flex-col gap-3 ">
      {allFaq?.map((ele, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 bg-[var(--colW2)] dark:bg-slate-800 rounded-2xl p-3 "
        >
          <div className="flex justify-center items-center gap-2">
            <p className="font-bold text-[14px] flex items-center justify-center ">
              Q{i + 1}.
            </p>
            <TextInput
              value={ele?.question}
              disable={edit && edit == i + 1 ? false : true}
              handleChange={handleTextChange}
            />
            {edit !== i + 1 && (
              <RiEdit2Line
                size={20}
                className="cursor-pointer text-red-400 "
                onClick={() => handleEditFAQ(i + 1)}
              />
            )}
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="p-3"></p>
            <TextInput
              value={ele?.answer}
              textarea={true}
              disable={edit && edit == i + 1 ? false : true}
              handleChange={handleAreaChange}
            />
          </div>
          {edit && edit == i + 1 ? (
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
      <div className="flex flex-col gap-2 bg-[var(--colW2)] dark:bg-slate-800 rounded-2xl p-3 ">
        <div className="flex justify-center items-center gap-2">
          {/* <p className="font-bold text-[14px] flex items-center justify-center "></p> */}
          <TextInput />
          {/* <RiEdit2Line size={20} /> */}
        </div>
        <div className="flex justify-center items-center gap-2">
          {/* <p className="p-3"></p> */}
          <TextInput textarea={true} />
        </div>
        <div className="flex justify-end items-center gap-2 py-1 px-2">
          <button className="text-[13px] py-2 rounded-md cursor-pointer px-4  border-[2px] border-red-300">
            Cancel
          </button>
          <button className="text-[13px] py-2 rounded-md cursor-pointer px-4 bg-[var(--colB1)] text-white border-[2px] border-[var(--colB1)]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
