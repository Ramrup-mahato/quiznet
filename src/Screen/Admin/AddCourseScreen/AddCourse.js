import React from 'react'
import Parents from '../../../components/ReUsable/Parents'
import ContainerBox from '../../../components/ReUsable/ContainerBox'
import AdminSideBar from '../../../components/Admin/AdminSideBar/AdminSideBar'
import AddCoursePage from '../../../components/Admin/AddCourse/AddCoursePage'

const AddCourse = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Add Course"}
          avatar={""}
          userName={"niku singh"}
        >
          <AddCoursePage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  )
}

export default AddCourse