import React from "react";
import Modal from "../../Modal/Modal";
import { FaCameraRotate, FaFolderOpen } from "react-icons/fa6";
import TextInput from "../../ReUsable/TextInput";
import Loader from "../../ReUsable/Loader";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";

const AddQuestionModal = ({
  modal,
  handleQuestionModal,
  loader,
  handleRadioAnswer,
  questionModal,
  handleQuestionAnswer,
  handleSelectQuestionImage,
  handleCancelQuestionModal,
  handleSubmitQuestion,
  handleUpdateQuestion,
  handleUnSelectImage,
}) => {
  return (
    <Modal open={questionModal.openCloseModal} onClose={handleQuestionModal}>
      <div className="min-w-[500px] max-h-[600px]  bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl ">
        <div
          className="flex items-center bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
        font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl justify-between"
        >
          <div className=" flex items-center">
            <FaFolderOpen size={25} color="#D89F57" />
            <h3>Add Question Details</h3>
          </div>
          <div>
            <GrPowerReset
              title="Reset Value"
              className="font-extrabold text-[25px] mx-3 cursor-pointer"
              onClick={handleCancelQuestionModal}
            />
          </div>
        </div>

        <div className="p-4 overflow-scroll min-w-[500px] h-[530px] ">
          {["Que", "A", "B", "C", "D"].map((ele, i) => (
            <>
              <div key={i} className="flex flex-row justify-center items-center">
                <input
                  type="radio"
                  name={`${ele}`}
                  className={`mt-[35.5px] mr-4 ${
                    ele === "Que" ? "hidden" : ""
                  } reg`}
                  checked={ele === questionModal.correctAnswer ? true : false}
                  onChange={(e) => handleRadioAnswer(e)}
                />
                <TextInput
                  label={`${
                    ele === "Que" ? "Q. Question" : `Answer for Option ${ele}`
                  } `}
                  placeholder={`Enter ${
                    ele === "Que" ? "Question" : `Answer for Option ${ele}`
                  } `}
                  name={ele}
                  value={questionModal[ele]}
                  require
                  RoundFull={ele === "Que" ? false : true}
                  handleChange={handleQuestionAnswer}
                />
                <label htmlFor={`foldername${ele}`}>
                  <FaCameraRotate
                    size={25}
                    className="m-2 cursor-pointer text-[var(--colB1)] h-full mt-[35.5px]"
                  />
                </label>
                <input
                  type="file"
                  id={`foldername${ele}`}
                  name={`${ele}Image`}
                  className="hidden"
                  onChange={(e) => handleSelectQuestionImage(e)}
                />
              </div>
              {loader[`${ele}Image`] === true ? (
                <div className="w-full p-2">
                  <Loader folderLoader={true} />
                </div>
              ) : (
                <div className="relative">
                  {questionModal[`${ele}Image`] ? (
                    <>
                      <img
                        src={questionModal[`${ele}Image`]}
                        alt="course"
                        className=" max-h-[200px] rounded-lg object-cover my-2 mx-7 border-[2px]"
                      />
                      <MdOutlineCancel className="text-red-500 font-[900] text-[30px] absolute left-4 top-1 mx-4 cursor-pointer"
                       onClick={()=>handleUnSelectImage(`${ele}Image`)} />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </>
          ))}
          <div className="w-full flex justify-end items-center gap-2 p-3">
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-white dark:bg-slate-700 border-[2px] border-rose-500 s cursor-pointer rounded-md py-1 px-3"
              onClick={handleQuestionModal}
            >
              Cancel
            </button>
            {questionModal._id ? (
              <button
                className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-[var(--colB1)] border border-[var(--colB1)] text-white cursor-pointer rounded-md py-1 px-3"
                type="submit"
                onClick={() => handleUpdateQuestion()}
              >
                Update
              </button>
            ) : (
              <button
                className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-[var(--colB1)] border border-[var(--colB1)] text-white cursor-pointer rounded-md py-1 px-3"
                type="submit"
                onClick={() => handleSubmitQuestion()}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddQuestionModal;
