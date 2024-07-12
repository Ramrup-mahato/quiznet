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
import ShowAnswerList from "../components/ExamPage/ShowAnswerList";

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
    result,
    userDetails,
    handleSelectQuestion,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSelectAnswers,
    handleOpenModal,
    handleChange,
    handleStartExam,
    handleSeeResult,
    handleWarningSubmit,
    handleWarningCancel,
    handleAgainQuiz,
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
            {examInfo?.testResult ? (
              <>
                <ShowAnswerList
                  result={result}
                  handleGoBack={handleGoBack}
                  handleAgainQuiz={handleAgainQuiz}
                  handleNextQuiz={handleGoBack}
                />
              </>
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
                    handleSeeResult={handleSeeResult}
                  />
                ) : (
                  <NotFound noData={true} />
                )}
              </>
            )}
          </>
        )}
        <TestModal
          userDetails={userDetails}
          examInfo={examInfo}
          handleOpenModal={handleOpenModal}
          handleChange={handleChange}
          handleStartExam={handleStartExam}
          handleGoBack={handleGoBack}
        />
        <WarningModal
          examInfo={examInfo}
          handleWarningSubmit={handleWarningSubmit}
          handleWarningCancel={handleWarningCancel}
        />
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default ExamMain;

const WarningModal = ({
  examInfo,
  handleWarningSubmit,
  handleWarningCancel,
}) => {
  return (
    <Modal open={examInfo?.pendingModal}>
      <div className="p-2">
        <div className="w-full  md:w-[500px]  max-h-[90vh] bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500  rounded-xl p-3">
          <div>
            <h1 className="font-bold fontFamily">
              Are you sure you want to submit? You still have{" "}
              {examInfo?.pendingNo?.map((ele, index) => (
                <span className="text-[20px] text-[var(--colB1)]" key={index}>
                  {ele}
                  {examInfo.pendingNo.length - 1 > index ? ", " : ""}
                </span>
              ))}{" "}
              questions pending.
            </h1>
          </div>

          <div className="w-full flex justify-end items-end gap-2 p-3 ">
            {" "}
            <button
              className="border-[3px] border-gray-300 text-gray-500 px-5 py-1 rounded-full hover:text-gray-700 hover:border-gray-400"
              onClick={handleWarningCancel}
            >
              Cancel
            </button>
            <button
              className={`border-[3px]  text-white px-5 py-1 rounded-full hover:shadow-md border-[var(--colG4)] bg-[var(--colG4)]`}
              onClick={() => handleWarningSubmit()}
            >
              Submit Test
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const TestModal = ({
  userDetails,
  examInfo,
  handleOpenModal,
  handleChange,
  handleStartExam,
  handleGoBack,
}) => {
  return (
    <Modal open={examInfo.openModal} onClose={handleOpenModal}>
      <div className="p-2">
        <div className="w-full md:w-[500px] lg:w-[1000px]  max-h-[90vh] bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded">
          <div
            className="flex justify-between bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
      font-semibold text-base  dark:shadow-gray-900 p-3 rounded-tr-3xl  "
          >
            <h3 className="text-[20px] md:text-[50px] p-2 fontFamily">
              Welcome, {userDetails?.username}{" "}
            </h3>
          </div>
          <div className="w-full max-h-[80vh] p-2 overflow-y-scroll dark:text-[var(--colW2)]">
            <h3 className="text-[20px] font-bold">General Instructions</h3>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                This online test requires a stable internet connection. We
                <span className="text-[var(--colB1)]">
                  {" "}
                  recommend using Chrome or Firefox browsers
                </span>
                .
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Please close all other
                <span className="text-[var(--colB1)]">
                  {" "}
                  browsers, browser tabs, and applications with sensitive or
                  personal information
                </span>
                .
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Please close all programs that upload or download files in the
                background{" "}
                <span className="text-[var(--colB1)]">
                  (e.g., Dropbox, Google Drive, torrent, etc.)
                </span>
                .
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Ensure that{" "}
                <span className="text-[var(--colB1)]">
                  no browser extensions or ad blockers are installed on the
                  browser{" "}
                </span>
                while taking the test, as they may conflict with the test flow.
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                To avoid any{" "}
                <span className="text-[var(--colB1)]">
                  distractions, close all chat windows, screen savers, etc.,{" "}
                </span>
                before starting the test.
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                You can answer questions in any order or click left side no. If
                you run out of time, all the attempted questions will be
                auto-submitted.
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Your attempted responses will be auto-saved if the test is
                disconnected for any reason.
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Your attempted responses will be auto-saved if the test is
                disconnected for any reason. You can resume the test from the
                last attempted question.
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                If the test is{" "}
                <span className="text-[var(--colB1)]">
                  disconnected for any reason, please restart your test within
                  10 minutes. After 10 minutes, the test will expire
                </span>
                .
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Browser search will be tracked during the assessment duration.
                Please close all the tabs that are not relevant for the
                assessment.
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Avoid switching tabs during the assessment as this may be
                considered suspicious by the employer.
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Please do{" "}
                <span className="text-[var(--colB1)]">
                  not wear earphones or headphones{" "}
                </span>
                while attempting the test.
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                Ensure that{" "}
                <span className="text-[var(--colB1)]">
                  your ears are visible and that your hair is not covering your
                  ears
                </span>
                .
              </p>
            </div>
            <div className="flex py-1 gap-1">
              <GoDotFill size={20} className="text-[20px]" />
              <p className="text-[14px] text-gray-700 dark:text-[var(--colW2)]">
                In case of any technical issues, you can reach out to KizoStudy
                tech support via email or message. Once on KizoStudy, you will
                find the message at the bottom of the screen.
              </p>
            </div>
            <h3 className="text-[20px] font-bold">Message From Instructor</h3>
            <div className="w-full p-3 bg-gray-100 dark:bg-gray-600 rounded my-2 border-gray-400 ">
              <p className="text-gray-600 text-[13px] fontFamily dark:text-[var(--colW2)]">
                {examInfo?.testMessage}
              </p>
            </div>
            <div className="w-full p-3 bg-gray-300 dark:bg-gray-600 rounded ">
              <p className="text-gray-600 text-[13px] dark:text-[var(--colW2)]">
                I agree that to not seeking or using answers from any external
                sources such as websites, books, or individuals for the duration
                of this test. I will only use the documentation or tools
                provided within the test flow.
              </p>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  checked={examInfo?.termAgree}
                  onChange={(e) => handleChange(e)}
                />
                <p className="text-[var(--colB1)] text-[13px]">
                  I agree and continue.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-end items-end gap-2 p-3 ">
              {" "}
              <button
                className="border-[3px] border-gray-300 text-gray-500 px-5 py-1 rounded-full hover:text-gray-700 hover:border-gray-400"
                onClick={handleGoBack}
              >
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
