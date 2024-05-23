import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import AddCoursePage from "../../../components/Admin/AddCourse/AddCoursePage";
import AddCourseService from "../../../service/AddCourse/AddCourseService";
import AddFolderModal from "../../../components/Admin/AddCourse/AddFolderModal";
import AddSubjectQuestion from "../../../components/Admin/AddCourse/AddSubjectQuestion";
import Loader from "../../../components/ReUsable/Loader";
import DeleteFolderModal from "../../../components/Admin/AddCourse/DeleteFolderModal";

const AddCourse = () => {
  let {
    courseData,
    QuestionDetails,
    modal,
    loader,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    deleteFolder,
    handleModalMain,
    handleModelSave,
    handleOpenSubject,
    handleGoBack,
    handleEditSubjectQuestion,
    handleCancelEditQuestion,
    handleSelectImage,
    handleEditFolder,
    handleCancelModal,
    handleCloseDeleteModal,
    handleDeleteFolder,
    handleModal,
  } = AddCourseService();

  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Add Course"}
          avatar={""}
          userName={"niku singh"}
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
                  handleEditSubjectQuestion={handleEditSubjectQuestion}
                  QuestionDetails={QuestionDetails}
                  handleCancelEditQuestion={handleCancelEditQuestion}
                />
              ) : (
                <AddCoursePage
                  courseData={courseData}
                  handleModalMain={handleModalMain}
                  handleOpenSubject={handleOpenSubject}
                  handleEditFolder={handleEditFolder}
                  handleModal={handleModal}
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
          />
          <DeleteFolderModal 
          openClose={deleteFolder.modalOpen}
          handleCloseDeleteModal={handleCloseDeleteModal}
          handleDeleteFolder={handleDeleteFolder}
          handleModal={handleModal}
           />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default AddCourse;
