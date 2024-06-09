import React, { useContext } from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import FaqPage from "../../../components/Admin/FAQ/FaqPage";
import ContextStore from "../../../context/Context";

const Faq = () => {
  const { userDetails } = useContext(ContextStore);
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"FAQ"}
          avatar={""}
          userName={userDetails?.username}
        >
          <FaqPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Faq;
