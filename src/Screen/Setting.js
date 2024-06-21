import React from "react";
import Parents from "../components/ReUsable/Parents";
import NavBar from "../components/NavBar";
import ContainerBox from "../components/ReUsable/ContainerBox";
import NotFound from "../components/ReUsable/NotFound ";
import Footer from "../components/ReUsable/Footer";
import ContactMainPage from "../components/contact/ContactMainPage";

const Setting = () => {
  return (
    <Parents>
      <NavBar pageName={"Home"} />
      <ContainerBox>
        <ContactMainPage />
      </ContainerBox>
      <Footer />
    </Parents>
  );
};

export default Setting;
