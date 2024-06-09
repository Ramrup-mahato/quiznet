import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { FaUsers, FaFolderPlus, FaEdit } from "react-icons/fa";
import { FaCameraRotate } from "react-icons/fa6";
import AccordionFolder from "./AccordionFolder";
import AddFolderModal from "./AddFolderModal";
import img from "../../../assets/image/study1.png";
import ToggleButton from "react-toggle-button";

const AddCoursePage = ({
  courseData,
  handleModalMain,
  handleOpenSubject,
  handleEditFolder,
  handleModal,
  handlePublishCourse,
}) => {
  return (
    <div className=" p-4">
      <div
        className="w-full bg-violet-200 rounded-full flex justify-between items-center p-3 mb-3 shadow-xl shadow-[var(--colG3)]
           dark:shadow-gray-700"
      >
        <div className=" flex justify-center items-center gap-2 relative  ">
          <FaFolderOpen size={25} color="#D89F57" />
          <h1 className="font-medium text-[14px] text-gray-600 absolute top-[-10px] right-[-10px]  bg-[var(--colB1)] p-1 rounded-full w-5 h-5  flex justify-center items-center ">
            <span className="font-bold text-[12px] text-[var(--colW3)]">
              {courseData.length}
            </span>
          </h1>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <FaFolderPlus
            size={35}
            color="#D89F57"
            onClick={() => handleModalMain("Course")}
            title="Add Folder"
            className=" cursor-pointer hover:text-blue-100 drop-shadow-xl "
          />
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-1 px-6 sm:px-5 gap-5  pb-5 sm:pb-10">
        {courseData &&
          courseData?.map((course, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
           dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
            >
              <div
                className="flex justify-between items-center bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
          font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl"
              >
                <div className="flex justify-center items-center gap-1">
                  <FaFolderOpen size={25} color="#D89F57" />

                  <h3>{course?.courseTitle}</h3>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <ToggleButton
                    value={course?.publish}
                    onToggle={(value) => handlePublishCourse(value,course?._id)}
                  />

                  <p className="font-medium text-[14px] text-[#00E396] bg-[#e4fff6] px-2 rounded-full flex justify-center items-center gap-1">
                    <FaUsers size={20} className="text-[var(--colB1)]" />{" "}
                    <span>40</span>
                  </p>
                  <FaEdit
                    size={25}
                    color="#fff"
                    onClick={() => handleEditFolder("Course", course)}
                    className=" cursor-pointer hover:text-blue-100 drop-shadow-xl "
                    title="Edit"
                  />
                  <FaFolderPlus
                    size={25}
                    color="#D89F57"
                    onClick={() => handleModalMain("Subject", course)}
                    className=" cursor-pointer hover:text-blue-100 drop-shadow-xl "
                    title="Add Folder"
                  />
                  <MdOutlineDelete
                    className="text-red-500 cursor-pointer drop-shadow-xl shadow-xl bg-[#E7F4FF] w-8 h-8 p-2 rounded-full hover:bg-[#ffe9e7]"
                    size={20}
                    title="Delete"
                    onClick={() => handleModal("Course", course?.coursePath)}
                  />
                </div>
              </div>
              <div className="flex flex-row p-3 sm:p-5 gap-3">
                <div className="w-[150px] h-[120px] justify-center items-center flex overflow-hidden relative bg-[var(--colW2)] rounded-xl">
                  {course?.courseImage ? (
                    <img
                      src={course?.courseImage}
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
                    className="absolute top-0 right-0 m-2 cursor-pointer text-[var(--colB1)]"
                    onClick={() => handleEditFolder("Course", course)}
                  />
                </div>

                <div className="w-full ">
                  {course?.subjects?.map((subject, i) => (
                    <AccordionFolder
                      key={i}
                      subject={subject}
                      handleModalMain={handleModalMain}
                      handleOpenSubject={handleOpenSubject}
                      handleEditFolder={handleEditFolder}
                      handleModal={handleModal}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddCoursePage;
