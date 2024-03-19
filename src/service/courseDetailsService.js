import React from "react";
import { useNavigate } from "react-router-dom";

const CourseDetailsService = () => {
  const navigation = useNavigate();

  const handleSelectTopic = (path,parentPath) => {
    navigation(`/${parentPath}/${path}`);
  };

  return {
    handleSelectTopic,
  };
};

export default CourseDetailsService;
