import { useState } from "react";
import { courseName, newCorseData } from "../../utils/data";
import image from "../../assets/image/study3.png";
import image2 from "../../assets/image/study1.png";


const AddCourseService = () => {
  const [courseData, setCourseData] = useState([...newCorseData]);
  const [CourseDetails, setCourseDetails] = useState({
    openSubject: false,
    subjectInfo: {},
    EditQuestion: "",
  });
  const [modal, setModal] = useState({
    mainFolder: false,
    subFolder: false,
    folderType: "",
    folderId: "",
  });

  const folder = {
    mainFolder: {
      course: "survey",
      image: image,
      fields: [],
    },
    courseFolder: {
      course: "survey Details",
      path: "survey",
      image: image2,
      fields: [],
    },
  };
  //Add main Folder
  const handleModalMain = (val, id) => {
    if (val === "main") {
      setModal((oldData) => {
        return {
          ...oldData,
          mainFolder: !oldData?.mainFolder,
          folderType: val,
        };
      });
    } else if (val === "subFolder") {
      setModal((oldData) => {
        return {
          ...oldData,
          mainFolder: !oldData?.mainFolder,
          folderType: val,
          folderId: id,
        };
      });
    } else if (val === "subject") {
      setModal((oldData) => {
        return {
          ...oldData,
          mainFolder: !oldData?.mainFolder,
          folderType: val,
          folderId: id,
        };
      });
    } else {
      setModal((oldData) => {
        return {
          ...oldData,
          mainFolder: !oldData?.mainFolder,
        };
      });
    }
  };

  // Save Modal Data
  const handleModelSave = () => {
    if (modal.folderType === "main") {
      let data = {
        ...folder.mainFolder,
        id: courseData?.length + 1,
      };
      setCourseData([...courseData, data]);
    } else if (modal.folderType === "subFolder") {
      let AllData = [...courseData];
      let data = {
        ...folder.courseFolder,
        id: courseData?.length + 1,
      };
      let update = AllData?.map((ele) => {
        if (ele?.id === modal?.folderId) {
          let newData = [...ele?.fields, data];
          return {
            ...ele,
            fields: newData,
          };
        }
        return ele;
      });
      setCourseData([...update]);
    }

    setModal((oldData) => {
      return {
        ...oldData,
        mainFolder: !oldData?.mainFolder,
      };
    });
  };

  // open subject Data
  const handleOpenSubject = (field) => {
    setCourseDetails((oldData) => {
      return {
        ...oldData,
        subjectInfo: field,
        openSubject: true,
      };
    });
  };
  // close subject component
  const handleGoBack = () => {
    setCourseDetails((oldData) => {
      return {
        ...oldData,
        openSubject: false,
      };
    });
  };
  //subject Question Edit
  const handleEditSubjectQuestion = (Qid) => {
    setCourseDetails((oldData) => {
      return {
        ...oldData,
        EditQuestion: Qid,
      };
    });
  };

  // Cancel Edit Question
  const handleCancelEditQuestion = () => {
    setCourseDetails((oldData) => {
      return {
        ...oldData,
        EditQuestion: "",
      };
    });
  };

  return {
    courseData,
    CourseDetails,
    modal,
    handleModalMain,
    handleModelSave,
    handleOpenSubject,
    handleGoBack,
    handleEditSubjectQuestion,
    handleCancelEditQuestion,
  };
};

export default AddCourseService;


// import csvToJson from "csvtojson";
// const handleSelectFile = async (e) => {
//   e.preventDefault();
//   const fileReader = new FileReader();
//   const file = e.target?.files[0];
//  if (file && file.type === "text/csv") {
//     setFileName(file?.name);
//     setIsDisable(true);
//     fileReader.onload = async (event) => {
//       const text = event.target.result;
//       const json = await csvToJson().fromString(text);
//       // console.log('json',json)
//       const productData = json.map((value) => {
//         return {
//           categories: JSON.parse(value.categories),
//           image: JSON.parse(value.image),
//           barcode: value.barcode,
//           tag: JSON.parse(value.tag),
//           variants: JSON.parse(value.variants),
//           status: value.status,
//           prices: JSON.parse(value.prices),
//           isCombination: JSON.parse(value.isCombination),
//           title: JSON.parse(value.title),
//           productId: value.productId,
//           slug: value.slug,
//           sku: value.sku,
//           category: JSON.parse(value.category),
//           stock: JSON.parse(value.stock),
//           description: JSON.parse(value.description),
//         };
//       });

//       setSelectedFile(productData);
//     };

//     fileReader.readAsText(file);
//   }
// };
