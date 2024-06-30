import React, { useContext } from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import AddCoursePage from "../../../components/Admin/AddCourse/AddCoursePage";
import AddCourseService from "../../../service/AddCourse/AddCourseService";
import AddFolderModal from "../../../components/Admin/AddCourse/AddFolderModal";
import AddSubjectQuestion from "../../../components/Admin/AddCourse/AddSubjectQuestion";
import Loader from "../../../components/ReUsable/Loader";
import DeleteFolderModal from "../../../components/Admin/AddCourse/DeleteFolderModal";
import AddQuestionModal from "../../../components/Admin/AddCourse/AddQuestionModal";
import { filterQuestion } from "../../../utils/Helper";
import ContextStore from "../../../context/Context";

const AddCourse = () => {
  const { userDetails } = useContext(ContextStore);
  let {
    courseData,
    QuestionDetails,
    modal,
    loader,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    deleteFolder,
    allQuestion,
    questionModal,
    handleModalMain,
    handleModelSave,
    handleOpenSubject,
    handleGoBack,
    handleCancelEditQuestion,
    handleSelectImage,
    handleEditFolder,
    handleCancelModal,
    handleCloseDeleteModal,
    handleDeleteFolder,
    handleModal,
    handleQuestionModal,
    handleRadioAnswer,
    handleQuestionAnswer,
    handleSelectQuestionImage,
    handleCancelQuestionModal,
    handleSubmitQuestion,
    handleDeleteQuestion,
    handleEditQuestion,
    handleUpdateQuestion,
    handleUnSelectImage,
    handleUploadCsv,
    handleSearchQuestion,
    handlePublishCourse,
    handleSelectUpdateFile,
    handleTestToggle,
    handleDescription,
  } = AddCourseService();

  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Add Course"}
          avatar={userDetails?.avatar}
          userName={userDetails?.username}
        >
          {loader.allData === true ? (
            <>
              <Loader folderLoader={true} />
            </>
          ) : (
            <>
              {QuestionDetails.openChapter === true ? (
                <AddSubjectQuestion
                  chapterInfo={QuestionDetails?.chapterInfo}
                  handleGoBack={handleGoBack}
                  handleEditQuestion={handleEditQuestion}
                  QuestionDetail={QuestionDetails}
                  allQuestion={filterQuestion(
                    allQuestion,
                    QuestionDetails.search
                  )}
                  handleCancelEditQuestion={handleCancelEditQuestion}
                  handleQuestionModal={handleQuestionModal}
                  handleDeleteQuestion={handleDeleteQuestion}
                  handleUploadCsv={handleUploadCsv}
                  handleSearchQuestion={handleSearchQuestion}
                />
              ) : (
                <AddCoursePage
                  courseData={courseData}
                  handleModalMain={handleModalMain}
                  handleOpenSubject={handleOpenSubject}
                  handleEditFolder={handleEditFolder}
                  handleModal={handleModal}
                  handlePublishCourse={handlePublishCourse}
                />
              )}
            </>
          )}
          <AddFolderModal
            modal={modal}
            loader={loader}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            handleModal={handleModalMain}
            handleModelSave={handleModelSave}
            handleSelectImage={handleSelectImage}
            handleCancelModal={handleCancelModal}
            handleSelectUpdateFile={handleSelectUpdateFile}
            handleTestToggle={handleTestToggle}
          />
          <DeleteFolderModal
            openClose={deleteFolder.modalOpen}
            handleCloseDeleteModal={handleCloseDeleteModal}
            handleDeleteFolder={handleDeleteFolder}
            handleModal={handleModal}
          />
          <AddQuestionModal
            questionModal={questionModal}
            handleQuestionModal={handleQuestionModal}
            handleRadioAnswer={handleRadioAnswer}
            handleQuestionAnswer={handleQuestionAnswer}
            handleSelectQuestionImage={handleSelectQuestionImage}
            handleCancelQuestionModal={handleCancelQuestionModal}
            handleSubmitQuestion={handleSubmitQuestion}
            loader={loader}
            handleUpdateQuestion={handleUpdateQuestion}
            handleUnSelectImage={handleUnSelectImage}
            handleDescription={handleDescription}
          />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default AddCourse;
