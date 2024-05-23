import React from "react";
import { Navigate } from "react-router-dom";
import ContextStore from "../../context/Context";
import { useContext } from "react";

const AdminAuthGard = ({ element: Component }) => {
  const { token, role } = useContext(ContextStore);

  if (role === "admin") {
    return token ? <Component /> : <Navigate to="/admin/login" />;
  } else {
    return <Navigate to="/admin/login" />;
  }
};

export default AdminAuthGard;
