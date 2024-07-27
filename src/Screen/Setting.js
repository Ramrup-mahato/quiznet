import React from "react";
import Parents from "../components/ReUsable/Parents";
import NavBar from "../components/NavBar";
import ContainerBox from "../components/ReUsable/ContainerBox";
import Footer from "../components/ReUsable/Footer";
import ProfileMailPage from "../components/profile/ProfileMailPage";

const Setting = () => {
  return (
    <Parents>
      <NavBar pageName={"Home"} />
      <ContainerBox>
        <ProfileMailPage />
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default Setting;
