import React from "react";
import NavBar from "../components/NavBar";
import Parents from "../components/ReUsable/Parents";
import ContainerBox from "../components/ReUsable/ContainerBox";
import Courses from "../components/Home/Courses";
import Footer from "../components/ReUsable/Footer";

const Home = () => {
  return (
    <Parents>
      <NavBar pageName={"Home"} />
      <ContainerBox>
        {/* <Banner /> */}
        <Courses />
       
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default Home;
