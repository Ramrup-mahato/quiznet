import React from "react";
import Modal from "../../Modal/Modal";
import { FaCameraRotate, FaFolderOpen } from "react-icons/fa6";
import Study from "../../../assets/image/study3.png";
import TextInput from "../../ReUsable/TextInput";

const AddFolderModal = ({ openModal, handleModal,handleModelSave }) => {
  return (
    <Modal open={openModal} onClose={handleModal}>
      <div className="w-[500px] min-h-[500px] bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl ">
        <div
          className="flex items-center bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
          font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl"
        >
          <FaFolderOpen size={25} color="#D89F57" />
          <h3>Folder Details</h3>
        </div>
        <div className="p-4">
          <TextInput
            label={"Folder name"}
            placeholder={"Enter Folder Name..."}
            require
          />
          <TextInput
            label={"path"}
            placeholder={"Enter Folder path..."}
            require
          />
          <div className="bg-[var(--colW1)] w-[200px] h-[200px] relative mt-3 p-3 border-[3px] rounded-lg border-[var(--colB1)]">
            <img src={Study} alt="course" />
            <label htmlFor="foldername">
              <FaCameraRotate
                size={25}
                className="absolute top-0 right-0 m-2 cursor-pointer text-[var(--colB1)]"
              />
            </label>
            <input type="file" id="foldername" className="hidden" />
          </div>
          <div className="w-full flex justify-end items-center gap-2 p-3">
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-white dark:bg-slate-700 border-[2px] border-rose-500 s cursor-pointer rounded-md py-1 px-3"
              onClick={handleModal}
            >
              Cancel
            </button>
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-[var(--colB1)] border border-[var(--colB1)] text-white cursor-pointer rounded-md py-1 px-3"
              onClick={() => handleModelSave()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddFolderModal;
