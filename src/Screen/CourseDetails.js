import React from "react";
import Parents from "../components/ReUsable/Parents";
import NavBar from "../components/NavBar";
import ContainerBox from "../components/ReUsable/ContainerBox";
import Footer from "../components/ReUsable/Footer";
import CourseDetailsPage from "../components/CourseDetails/CourseDetailsPage";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { path } = useParams();
  console.log("path", path);
  return (
    <Parents>
      <NavBar pageName={'Home'} />
      <ContainerBox>
        <CourseDetailsPage path={path} />
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default CourseDetails;
