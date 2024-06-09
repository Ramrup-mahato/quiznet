import React from "react";
import Modal from "../../Modal/Modal";

const DeleteFolderModal = ({
  handleModal,
  openClose,
  handleCloseDeleteModal,
  handleDeleteFolder,
}) => {
  return (
    <Modal open={openClose} onClose={handleModal}>
      <div className=" bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-xl p-4 ">
        <p className="text-[25px] text-gray-500 font-[900]">
          Are you sure, You want to
          <span className="text-[var(--colB1)] text-[25px] ">
            {" "}
            Delete{" "}
          </span>{" "}
          this Item
        </p>

        <div className="w-full flex justify-center items-center gap-2 p-3">
          <button
            className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-white dark:bg-slate-700 border-[2px] border-gray-300 s cursor-pointer rounded-md py-1 px-3"
            onClick={() => handleCloseDeleteModal()}
          >
            Cancel
          </button>
          <button
            className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-red-500 border border-red-500 text-white cursor-pointer rounded-md py-1 px-3"
            type="submit"
            onClick={() => handleDeleteFolder()}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteFolderModal;
