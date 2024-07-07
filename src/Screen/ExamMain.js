import React from "react";
import Parents from "../components/ReUsable/Parents";
import NavBar from "../components/NavBar";
import ContainerBox from "../components/ReUsable/ContainerBox";
import Footer from "../components/ReUsable/Footer";
import ExamService from "../service/ExamService/ExamService";
import ExamPage from "../components/ExamPage/ExamPage";
import Loader from "../components/ReUsable/Loader";
import NotFound from "../components/ReUsable/NotFound ";
import Modal from "../components/Modal/Modal";
import { GoDotFill } from "react-icons/go";

const ExamMain = () => {
  const {
    examInfo,
    setExamInFo,
    handleGoBack,
    testTime,
    loaderInFolder,
    question,
    response,
    loader,
    userDetails,
    handleSelectQuestion,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSelectAnswers,
    handleOpenModal,
    handleChange,
    handleStartExam,
  } = ExamService();
  return (
    <Parents>
      <NavBar pageName={"Home"} />
      <ContainerBox>
        {loaderInFolder ? (
          <div className="w-full  min-h-[calc(100vh-115px)] lg:min-h-[100vh]  px-3 sm:px-6  gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
            <Loader folderLoader={true} />
          </div>
        ) : (
          <>
            {response?.length > 0 ? (
              <ExamPage
                question={question}
                response={response}
                testTime={testTime}
                examInfo={examInfo}
                loader={loader}
                handleGoBack={handleGoBack}
                handleSelectQuestion={handleSelectQuestion}
                handleNextQuestion={handleNextQuestion}
                handlePreviousQuestion={handlePreviousQuestion}
                handleSelectAnswers={handleSelectAnswers}
                handleSeeResult={()=>{}}
              />
            ) : (
              <NotFound noData={true} />
            )}
          </>
        )}
        <TestModal
          userDetails={userDetails}
          examInfo={examInfo}
          handleOpenModal={handleOpenModal}
          handleChange={handleChange}
          handleStartExam={handleStartExam}
        />
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default ExamMain;

const TestModal = ({
  userDetails,
  examInfo,
  handleOpenModal,
  handleChange,
  handleStartExam,
}) => {
  return (
    <Modal open={examInfo.openModal} onClose={handleOpenModal}>
      <div className="p-2">
        <div className="w-full md:w-[500px] lg:w-[1000px]  max-h-[700px] bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded">
          <div
            className="flex justify-between bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
      font-semibold text-base  dark:shadow-gray-900 p-3 rounded-tr-3xl  "
          >
            <h3 className="text-[20px] md:text-[50px] p-2">
              Welcome, {userDetails?.username}{" "}
            </h3>
          </div>
          <div className="w-full max-h-[400px] p-2 overflow-y-scroll">
            <h3 className="text-[20px]">General Instructions</h3>
            <div className="flex ">
              <GoDotFill />
              <p className="text-[14px] text-gray-700">
                This online test requires a stable internet connection. We
                <span className="text-[var(--colB1)]">
                  {" "}
                  recommend using Chrome or Firefox browsers
                </span>
                .
              </p>
            </div>
            <div className="flex ">
              <GoDotFill />
              <p className="text-[14px] text-gray-700">
                Please close all other .
                <span className="text-[var(--colB1)]">
                  {" "}
                  browsers, browser tabs, and applications with sensitive or
                  personal information
                </span>
                .
              </p>
            </div>
            <div className="flex ">
              <GoDotFill size={20} className="text-[20px]" />
              <p className="text-[14px] text-gray-700">
                Please close all programs that upload or download files in the
                background (e.g., Dropbox, Google Drive, torrent, etc.). Ensure
                that no browser extensions or ad blockers are installed on the
                browser while taking the test, as they may conflict with the
                test flow. To avoid any distractions, close all chat windows,
                screen savers, etc., before starting the test. You can answer
                questions in any order. If you run out of time, all the
                attempted questions will be auto-submitted. Your attempted
                responses will be auto-saved if the test is disconnected for any
                reason. You can resume the test from the last attempted
                question. Browser search will be tracked during the assessment
                duration. Please close all the tabs that are not relevant for
                the assessment. Avoid switching tabs during the assessment as
                this may be considered suspicious by the employer. Please do not
                wear earphones or headphones while attempting the test. Ensure
                that your ears are visible and that your hair is not covering
                your ears. In case of any technical issues, you can reach out to
                Glider tech support via Live chat. Once on Glider, you will find
                the chat icon at the bottom right corner of your screen.
                <span className="text-[var(--colB1)]">
                  {" "}
                  recommend using Chrome or Firefox browsers
                </span>
                .
              </p>
            </div>
            <div className="w-full p-3 bg-gray-300 rounded ">
              <p className="text-gray-600 text-[13px]">
                I agree not to copy or consult code from any external source
                including website, book or individual to complete the test. I
                will refer to only documentation or tools linked in this test
                flow.
              </p>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  checked={examInfo?.termAgree}
                  onChange={(e) => handleChange(e)}
                />
                <p className="text-gray-600 ">I agree and continue.</p>
              </div>
            </div>
            <div className="w-full flex justify-end items-end gap-2 p-3 ">
              {" "}
              <button className="border-[3px] border-gray-300 text-gray-500 px-5 py-1 rounded-full hover:text-gray-700 hover:border-gray-400">
                Cancel
              </button>
              <button
                className={`border-[3px]  text-white px-5 py-1 rounded-full hover:shadow-md ${
                  examInfo?.termAgree === true
                    ? "border-[var(--colG4)] bg-[var(--colG4)]"
                    : " border-gray-500 bg-gray-500 cursor-not-allowed"
                }`}
                onClick={() => handleStartExam()}
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
