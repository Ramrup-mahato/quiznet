import React from "react";
import { Navigate } from "react-router-dom";
import ContextStore from "../../context/Context";
import { useContext } from "react";

const AuthGuard = ({ element: Component }) => {
  const { token } = useContext(ContextStore);

  return token ? <Component /> : <Navigate to="/login" />;
};

export default AuthGuard;
