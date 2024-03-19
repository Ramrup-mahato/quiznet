import React from "react";
import { useNavigate } from "react-router-dom";

const CourseService = () => {
  const navigation = useNavigate();

  const handleSelectCourse = (path) => {
    navigation(`/${path}`);
  };

  return {
    handleSelectCourse,
  };
};

export default CourseService;
