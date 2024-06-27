import React, { useContext, useEffect, useState } from "react";
import TextInput from "../ReUsable/TextInput";
import { FaCamera } from "react-icons/fa";
import img from "../../assets/image/study3.png";
import { MdDelete } from "react-icons/md";
import WorkSpaceService from "../../service/WorkSpace/WorkSpaceService";

const WorkSpacePage = () => {
  const {
    work,
    handleOnChangeFile,
    handleOnChange,
    message,
    handleSubmit,
    handleDeleteWork,
  } = WorkSpaceService();
  const copyToClipboard = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center gap-5 flex-col sm:px-5   pt-[50px]  sm:pt-[100px] pb-5 sm:pb-10">
      <div className="w-full  h-full  flex justify-center items-center flex-col gap-3">
        {work?.map((ele, i) => (
          <div
            className="w-full  flex flex-col  bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
                 dark:shadow-gray-700 text-black dark:text-white rounded-xl p-2  "
          >
            <div className="w-full flex flex-col sm:flex-row">
              <div className="w-[200px] h-[150px] border-2 p-2 relative mt-2 mr-2 rounded">
                <a href={ele?.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={ele?.url || img}
                    alt="sample"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </a>
              </div>
              <div className="w-full py-2">
                <div className="flex justify-between">
                  <div className="flex p-2">
                    <p id="urlText" className=" text-[12px] px-3 wrap-text">
                      {ele?.url}
                    </p>
                    <button
                      onClick={() => copyToClipboard(ele?.url)}
                      className="bg-[var(--colB1)] px-2 py-1 text-gray-100 text-[10px] font-bold rounded cursor-pointer"
                    >
                      Copy
                    </button>
                  </div>
                  <div>
                    <MdDelete
                      className="text-rose-500 cursor-pointer "
                      onClick={() => handleDeleteWork(ele?._id)}
                    />
                  </div>
                </div>
                <p
                  id="additionalText"
                  className="border rounded p-2 text-[14px] text-gray-600"
                >
                  {ele?.message}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div
          className="w-full  flex flex-col  bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
                 dark:shadow-gray-700 text-black dark:text-white rounded-xl p-2  "
        >
          <div className="w-full  flex">
            <div className=" w-[150px] h-[100px] border-2  relative mt-2 mr-2 rounded">
              <img
                src={img}
                alt="sample"
                className="w-full h-full rounded cursor-pointer"
                id="ImageSelected"
              />
              <label htmlFor="imagefile">
                <FaCamera className="absolute bottom-1 right-1 text-[var(--colB1)] cursor-pointer" />
              </label>
              <input
                type="file"
                className="hidden"
                id="imagefile"
                onChange={handleOnChangeFile}
              />{" "}
            </div>
            <div className="w-full py-2">
              <TextInput
                textarea
                placeholder={"Enter your work here..."}
                classStyle={"h-full"}
                value={message}
                handleChange={handleOnChange}
              />
            </div>
          </div>
          <div className="w-full p-2 flex justify-end items-end">
            <button
              className="bg-[var(--colB1)] px-5 py-2 text-gray-100 text-[12px] font-bold rounded cursor-pointer"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpacePage;
