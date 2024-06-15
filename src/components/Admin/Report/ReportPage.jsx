import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { dataReport } from "../../../utils/data";
import { IoSearch } from "react-icons/io5";
import TextInput from "../../ReUsable/TextInput";
import ReportService from "../../../service/ReportService/ReportService";
import Modal from "../../Modal/Modal";
import QuizBox from "../../Quiz/QuizBox";
import { GiCheckMark } from "react-icons/gi";
import Status from "../../ReUsable/Status";
import Loader from "../../ReUsable/Loader";
import Answers from "../AddCourse/Answers";

const ReportPage = () => {
  const {
    columns,
    openModal,
    report,
    loaderInFolder,
    reportAllData,
    handleModal,
    handleSelectStatus,
    handleSelectAnswer,
    handleSelectOption,
    handleModelSave,
  } = ReportService();
  console.log("question ", report?.reportData?.question);
  return (
    <div className="p-4">
      {loaderInFolder ? (
        <Loader folderLoader={true} />
      ) : (
        <>
          <div className="bg-[var(--colW2)] dark:bg-slate-800 p-2 rounded-md rounded-t-3xl ">
            <div className="flex justify-between items-center pb-3  ">
              <div className="w-[60%]">
                <TextInput
                  classStyle={"border-none "}
                  RoundFull={true}
                  placeholder={"Search ..."}
                />
              </div>

              <div className="flex justify-center items-center bg-white dark:bg-slate-700 rounded-full p-1">
                <div
                  className={`w-[70px] flex justify-center items-center p-2  font-bold rounded-full cursor-pointer
               ${
                 report?.reportStatus === "pending" &&
                 " text-[#FEB019] bg-[#fbf3e1] shadow-xl"
               }`}
                  onClick={() => handleSelectStatus("pending")}
                >
                  <p className="text-[12px]">Pending</p>
                </div>
                <div
                  className={`p-2 w-[70px] flex justify-center items-center  font-bold rounded-full cursor-pointer 
                ${
                  report?.reportStatus === "resolve" &&
                  "  text-[#00E396] bg-[#e4fff6] shadow-xl"
                }`}
                  onClick={() => handleSelectStatus("resolve")}
                >
                  <p className="text-[12px]">Resolve</p>
                </div>
                <div
                  className={`p-2 w-[70px] flex justify-center items-center font-bold rounded-full cursor-pointer  ${
                    report?.reportStatus === "reject" &&
                    " text-rose-500 bg-red-100 shadow-xl"
                  }`}
                  onClick={() => handleSelectStatus("reject")}
                >
                  <p className="text-[12px]">Reject</p>
                </div>
              </div>
            </div>
            <DataTable
              //   title="Contact List"
              columns={columns}
              data={reportAllData}
              defaultSortField="name"
              striped
              // pagination
              subHeader={false}

              // subHeaderComponent={subHeaderComponent}
            />
          </div>
          <ReportModal
            report={report}
            openModal={openModal}
            handleModal={handleModal}
            question={report?.reportQuestion?.questions}
            handleSelectAnswer={handleSelectAnswer}
            handleSelectOption={handleSelectOption}
            handleModelSave={handleModelSave}
          />
        </>
      )}
      <div></div>
    </div>
  );
};

const ReportModal = ({
  openModal,
  handleModal,
  question,
  handleSelectOption,
  report,
  handleModelSave,
}) => {
  return (
    <>
      <Modal open={openModal} onClose={handleModal}>
        <div className="w-[500px]  max-h-[600px] bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl">
          <div
            className="flex justify-between bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
      font-semibold text-base  dark:shadow-gray-900 p-3 rounded-tr-3xl"
          >
            <h3>Report Question</h3>
          </div>

          <div className="w-full max-h-[400px] overflow-scroll">
            <div className="flex justify-between items-center px-2">
              <div className="flex justify-start items-center gap-1 w-full">
                <p className="p-2 no-select ">
                  Q. {report?.reportQuestion?.[0]?.qsId?.question}
                </p>
              </div>
            </div>
            {report?.reportQuestion?.[0]?.qsId?.questionsImg ? (
              <div className="px-4 py-2 border-[2px] rounded-lg">
                <img
                  src={report?.reportQuestion?.[0]?.qsId?.questionsImg}
                  alt="course"
                  className=" max-h-[200px] rounded-lg object-cover mb-2 "
                />
              </div>
            ) : (
              ""
            )}

            <div className="sm:pl-10 ">
              <Answers
                answerTitle={report?.reportQuestion?.[0]?.qsId?.a}
                correctAns={report?.reportQuestion?.[0]?.qsId?.correctAnswer}
                answerNo={"a"}
                img={report?.reportQuestion?.[0]?.qsId?.aImg}
                userAnswer={report?.reportQuestion?.[0]?.userAnswer}
              />
              <Answers
                answerTitle={report?.reportQuestion?.[0]?.qsId?.b}
                correctAns={report?.reportQuestion?.[0]?.qsId?.correctAnswer}
                answerNo={"b"}
                img={report?.reportQuestion?.[0]?.qsId?.bImg}
                userAnswer={report?.reportQuestion?.[0]?.userAnswer}
              />
              <Answers
                answerTitle={report?.reportQuestion?.[0]?.qsId?.c}
                correctAns={report?.reportQuestion?.[0]?.qsId?.correctAnswer}
                answerNo={"c"}
                img={report?.reportQuestion?.[0]?.qsId?.cImg}
                userAnswer={report?.reportQuestion?.[0]?.userAnswer}
              />
              <Answers
                answerTitle={report?.reportQuestion?.[0]?.qsId?.d}
                correctAns={report?.reportQuestion?.[0]?.qsId?.correctAnswer}
                answerNo={"d"}
                img={report?.reportQuestion?.[0]?.qsId?.dImg}
                userAnswer={report?.reportQuestion?.[0]?.userAnswer}
              />
            </div>
          </div>
          <div className="p-3">
            <Status
              selector={["pending", "resolve", "reject"]}
              title={"Status"}
              state={report?.reportStatusOption}
              handleSelectOption={handleSelectOption}
            />
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
      </Modal>
    </>
  );
};

export default ReportPage;
