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

const ReportPage = () => {
  const {
    columns,
    openModal,
    report,
    handleModal,
    handleSelectStatus,
    handleSelectAnswer,
    handleSelectOption,
    handleModelSave,
  } = ReportService();
  console.log("question ", report?.reportData?.question);
  return (
    <div className="p-4">
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
          data={report?.reportData}
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
        <div className="w-[500px] min-h-[500px] bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl ">
          <div
            className="flex justify-between bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
      font-semibold text-base  dark:shadow-gray-900 p-3 rounded-tr-3xl"
          >
            <h3>Report Question</h3>
          </div>
          {question?.map((que, i) => (
            <div
              className={` sm:p-5 bg-[var(--colW2)] dark:bg-gray-800 ${
                i === 0 && "rounded-t-3xl"
              } ${i == question?.length - 1 && "rounded-b-3xl"}`}
              key={i}
            >
              <p className="p-2 no-select ">Q. {que?.question}</p>
              <div className="py-2  sm:pl-10 ">
                {que?.option?.map((ans, i) => (
                  <div
                    key={i}
                    className={` px-2 py-1 sm:py-2 m-1 flex items-center gap-3 rounded-full 
                          ${
                            que?.yourAnswer == que?.correctAnswer
                              ? que?.yourAnswer == ans?.name &&
                                "bg-green-700 text-[var(--colW2)]"
                              : `${
                                  que?.yourAnswer == ans?.name &&
                                  "bg-red-300 dark:bg-red-900 "
                                } ${
                                  que?.correctAnswer == ans?.name &&
                                  "bg-green-300 dark:bg-lime-900 "
                                }`
                          } `}
                  >
                    <p className="text-[14px] no-select w-full flex gap-2   items-center ">
                      {que?.yourAnswer == que?.correctAnswer ? (
                        que?.yourAnswer == ans?.name && (
                          <GiCheckMark
                            size={20}
                            className="text-[var(--colB3)] "
                          />
                        )
                      ) : (
                        <>
                          {ans?.name == que?.correctAnswer ? (
                            <span className="p-2 bg-slate-300 dark:bg-slate-500 text-[12px] font-bold rounded-full ">
                              Answer
                            </span>
                          ) : null}
                          {ans?.name == que?.yourAnswer ? (
                            <span className="p-2 bg-slate-300 dark:bg-slate-500 text-[12px] font-bold rounded-full ">
                              user Answer
                            </span>
                          ) : null}
                        </>
                      )}{" "}
                      {ans?.que}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
