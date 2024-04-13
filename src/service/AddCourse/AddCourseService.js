import { useState } from "react";
import { courseName, newCorseData } from "../../utils/data";

const AddCourseService = () => {
  const [courseData, setCourseData] = useState([...newCorseData]);
  const [CourseDetails, setCourseDetails] = useState({});
  return {
    courseData,
    CourseDetails,
  };
};

export default AddCourseService;
