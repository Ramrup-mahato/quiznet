import React, { useContext } from "react";
import ContextStore from "../../context/Context";

const SettingService = () => {
  const { userDetails, token } = useContext(ContextStore);
  return { userDetails, token };
};

export default SettingService;
