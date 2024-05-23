import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineDelete,
} from "react-icons/md";
import {
  FaCameraRotate,
  FaFolderOpen,
  FaFolderPlus,
  FaMinus,
  FaPlus,
  FaUsers,
} from "react-icons/fa6";
import { LuImport } from "react-icons/lu";
import img from "../../../assets/image/study1.png";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const AccordionFolder = ({
  subject,
  handleModalMain,
  handleOpenSubject,
  handleEditFolder,
  handleModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full dark:bg-slate-800">
      <div
        className={`w-full cursor-pointer flex items-center justify-between`}
      >
        <div className="w-full bg-[var(--colW2)] dark:bg-gray-800 flex justify-between items-center px-3 my-2 py-1 rounded-full text-[14px] cursor-pointer">
          <div className="flex justify-center items-center gap-1">
            <FaFolderOpen size={20} color="#D89F57" />
            <p className="">{subject?.subjectTitle}</p>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <p className="font-medium text-[12px] text-[var(--colB1)] shadow-xl bg-[#e4fff6] px-2 rounded-full flex justify-center items-center gap-1">
              <FaUsers size={15} className="text-[var(--colB1)]" />{" "}
              <span>220</span>
            </p>
            <FaEdit
              size={20}
              color="#7654f6"
              title="Edit"
              onClick={() => handleEditFolder("Subject", subject)}
              className=" cursor-pointer hover:text-blue-100 drop-shadow-xl "
            />
            <FaFolderPlus
              size={20}
              color="#D89F57"
              onClick={() => handleModalMain("Chapter", subject)}
              className=" cursor-pointer hover:text-blue-100 drop-shadow-xl "
              title="Add Chapter in this subject folder"
            />
            {isOpen ? (
              <IoIosArrowUp
                size={30}
                onClick={toggleAccordion}
                title="Close Subject"
                // onClick={() => handleModal("", "add")}
                className="w-8 h-8 text-[var(--colB1)] bg-[#ffffff] p-2 shadow-xl rounded-full cursor-pointer hover:bg-blue-100 "
              />
            ) : (
              <IoIosArrowDown
                size={30}
                onClick={toggleAccordion}
                title="View All Chapter of this Subject"
                // onClick={() => handleModal("", "add")}
                className="w-8 h-8 text-[var(--colB1)] bg-[#ffffff] p-2 shadow-xl rounded-full cursor-pointer hover:bg-blue-100 "
              />
            )}

            <MdOutlineDelete
              className="text-red-500 cursor-pointer drop-shadow-xl shadow-xl bg-[#E7F4FF] w-8 h-8 p-2 rounded-full hover:bg-[#ffe9e7]"
              size={20}
              title="Delete"
              onClick={() => handleModal("Subject", subject?.subjectPath)}
            />
          </div>
        </div>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="accordion-content"
        unmountOnExit
      >
        <div
          className={`p-3  dark:bg-slate-800 accordion-content rounded-bl-3xl shadow-xl`}
        >
          <div className="flex flex-row p-3 sm:p-5 gap-3">
            <div className="w-[120px] h-[90px] justify-center items-center flex overflow-hidden relative bg-[var(--colW2)] rounded-xl">
              {subject?.subjectImage ? (
                <img
                  src={subject?.subjectImage}
                  alt="course ..."
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={img}
                  alt="course ..."
                  className="w-full h-full object-cover"
                />
              )}

              <FaCameraRotate
                size={25}
                className="absolute top-0 right-0 m-1 cursor-pointer text-[var(--colB1)]"
                onClick={() => handleEditFolder("Subject", subject)}
              />
            </div>

            <div className="w-full ">
              {subject?.chapters?.map((chapter, i) => (
                <div
                  key={i}
                  className="w-full bg-[var(--colW2)] dark:bg-gray-800 flex justify-between items-center px-3 my-2 py-1 rounded-full text-[14px] cursor-pointer p-2"
                >
                  <div className="flex justify-center items-center gap-1">
                    <FaFolderOpen size={20} color="#D89F57" />
                    <p className="">{chapter?.chapterTitle}</p>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <LuImport
                      size={10}
                      // onClick={() => handleModal("", "add")}
                      className="w-8 h-8 text-[#FEB019] bg-[#fbf3e1] p-2 shadow-lg rounded-full cursor-pointer hover:bg-blue-100  "
                      title="Download CSV"
                    />
                    <FaEdit
                      size={20}
                      color="#7654f6"
                      title="Edit"
                      onClick={() => handleEditFolder("Chapter", chapter)}
                      className=" cursor-pointer hover:text-blue-100 drop-shadow-xl "
                    />
                    <IoEye
                      size={30}
                      title="View All question of this chapter"
                      onClick={() => handleOpenSubject(chapter)}
                      className="w-8 h-8 text-[var(--colB1)] bg-[#E7F4FF] p-2 shadow-xl rounded-full cursor-pointer hover:bg-blue-100 "
                    />

                    <MdOutlineDelete
                      className="text-red-500 cursor-pointer drop-shadow-xl shadow-xl bg-[#E7F4FF] w-8 h-8 p-2 rounded-full hover:bg-[#ffe9e7]"
                      size={20}
                      title="Delete Chapter"
                      onClick={() =>
                        handleModal("Chapter", chapter?.chapterPath)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AccordionFolder;
