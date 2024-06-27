import React from 'react'
import Parents from '../components/ReUsable/Parents'
import NavBar from '../components/NavBar'
import ContainerBox from '../components/ReUsable/ContainerBox'
import WorkSpacePage from '../components/WorkSpace/WorkSpacePage'

const WorkSpace = () => {
  return (
    <Parents>
    <NavBar pageName={"workspace"} />
    <ContainerBox>
      <WorkSpacePage />
     
    </ContainerBox>
  </Parents>
  )
}

export default WorkSpace