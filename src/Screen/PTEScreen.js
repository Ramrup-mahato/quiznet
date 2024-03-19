import React from "react";
import Parents from "../components/ReUsable/Parents";
import NavBar from "../components/NavBar";
import ContainerBox from "../components/ReUsable/ContainerBox";
import Courses from "../components/Home/Courses";
import Footer from "../components/ReUsable/Footer";
import PTEPractice from "../components/PTEPractice/PTEPractice";

const PTEScreen = () => {
  return (
    <Parents>
      <NavBar />
      <ContainerBox>
        <PTEPractice />
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default PTEScreen;
