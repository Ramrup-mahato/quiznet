import React from "react";
import Modal from "../../Modal/Modal";
import { FaCameraRotate, FaFolderOpen } from "react-icons/fa6";
import Study from "../../../assets/image/study3.png";
import TextInput from "../../ReUsable/TextInput";
import Loader from "../../ReUsable/Loader";



const AddFolderModal = ({
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  modal,
  loader,
  handleModal,
  handleModelSave,
  handleSelectImage,
  handleCancelModal,
}) => {
  return (
    <Modal open={modal?.mainFolder} onClose={handleModal}>
      <div className="w-[500px]  bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl ">
        <div
          className="flex items-center bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
          font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl"
        >
          <FaFolderOpen size={25} color="#D89F57" />
          <h3>{modal?.folderType} Details</h3>
        </div>
        <div className="p-4">
          <TextInput
            label={`${modal?.folderType} name`}
            placeholder={`Enter a ${modal?.folderType} name.`}
            error={errors.folder && touched.folder}
            errorMessage={errors.folder}
            name={"folder"}
            value={values.folder}
            handleChange={handleChange}
            onBlur={handleBlur}
            require
          />
          <TextInput
            label={`${modal?.folderType} path`}
            placeholder={`Enter a ${modal?.folderType} path name.`}
            require
            error={errors.path && touched.path}
            errorMessage={errors.path}
            name={"path"}
            value={values.path}
            handleChange={handleChange}
            onBlur={handleBlur}
          />
          {modal?.folderType !== "Chapter" && (
            <div className="bg-[var(--colW1)] w-[200px] h-[200px] relative mt-3  border-[3px] rounded-lg border-[var(--colB1)] overflow-hidden flex justify-center items-center ">
              {loader.imageKit === true ? (
                <Loader folderLoader={true} />
              ) : (
                <>
                  {modal?.folderImage ? (
                    <img src={modal?.folderImage} alt="course" className=" w-[190px] h-[190px] rounded-lg object-cover " />
                  ) : (
                    <img src={Study} alt="course"  className=" w-[190px] h-[190px] rounded-lg object-cover" />
                  )}
                </>
              )}
              <label htmlFor="foldername">
                <FaCameraRotate
                  size={25}
                  className="absolute top-0 right-0 m-2 cursor-pointer text-[var(--colB1)]"
                />
              </label>
              <input
                type="file"
                id="foldername"
                className="hidden"
                onChange={(e) => handleSelectImage(e)}
              />
            </div>
          )}
          <div className="w-full flex justify-end items-center gap-2 p-3">
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-white dark:bg-slate-700 border-[2px] border-rose-500 s cursor-pointer rounded-md py-1 px-3"
              onClick={handleCancelModal}
            >
              Cancel
            </button>
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-[var(--colB1)] border border-[var(--colB1)] text-white cursor-pointer rounded-md py-1 px-3"
              type="submit"
              onClick={() => handleSubmit()}
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
