import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import AddCoursePage from "../../../components/Admin/AddCourse/AddCoursePage";
import AddCourseService from "../../../service/AddCourse/AddCourseService";
import AddFolderModal from "../../../components/Admin/AddCourse/AddFolderModal";
import AddSubjectQuestion from "../../../components/Admin/AddCourse/AddSubjectQuestion";

const AddCourse = () => {
  let {
    courseData,
    CourseDetails,
    modal,
    handleModalMain,
    handleModelSave,
    handleOpenSubject,
    handleGoBack,
    handleEditSubjectQuestion,
    handleCancelEditQuestion,
  } = AddCourseService();

  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Add Course"}
          avatar={""}
          userName={"niku singh"}
        >
          {CourseDetails.openSubject === true ? (
            <AddSubjectQuestion
              subjectInfo={CourseDetails?.subjectInfo}
              handleGoBack={handleGoBack}
              handleEditSubjectQuestion={handleEditSubjectQuestion}
              CourseDetails={CourseDetails}
              handleCancelEditQuestion={handleCancelEditQuestion}
            />
          ) : (
            <AddCoursePage
              courseData={courseData}
              handleModalMain={handleModalMain}
              handleOpenSubject={handleOpenSubject}
            />
          )}
          <AddFolderModal
            openModal={modal?.mainFolder}
            handleModal={handleModalMain}
            handleModelSave={handleModelSave}
          />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default AddCourse;
