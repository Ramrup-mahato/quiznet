import { useContext, useEffect, useState } from "react";
import { courseName, newCorseData } from "../../utils/data";
import image from "../../assets/image/study3.png";
import image2 from "../../assets/image/study1.png";
import { ImageUpload, apiGetResponse, apiResponse } from "../../utils/Helper";
import {
  getData,
  postData,
  updateData,
} from "../../components/AuthGard/LogGard";
import ContextStore from "../../context/Context";
import { useFormik } from "formik";
import { folderSchema } from "../../Schema";
import { toastWarning } from "../../utils/tostify";

const AddCourseService = () => {
  const { token, setIsLoader } = useContext(ContextStore);
  const [editValue, setEditValue] = useState({
    folder: "",
    path: "",
  });
  const [courseData, setCourseData] = useState([]);
  const [allQuestion, setAllQuestion] = useState([]);
  const [QuestionDetails, setQuestionDetails] = useState({
    openChapter: false,
    chapterInfo: {},
    EditQuestion: "",
    editFolder: false,
  });
  console.log("QuestionDetails", QuestionDetails);
  console.log("allQuestion", allQuestion);

  const [loader, setLoader] = useState({
    imageKit: false,
    allData: false,
    allQuestion: false,
  });

  const [modal, setModal] = useState({
    mainFolder: false,
    subFolder: false,
    folderType: "",
    folderPath: "",
    folderImage: "",
    mainFolderDetails: {},
    editId: "",
  });

  const [deleteFolder, setDeleteFolder] = useState({
    modalOpen: false,
    folderPath: "",
    folderType: "",
  });
  // console.log("deleteFolder###", deleteFolder);
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: editValue,
    validationSchema: folderSchema,
    onSubmit: async (values, action) => {
      QuestionDetails?.editFolder === true
        ? handleUpdateFolder(values)
        : handleCreateFolder(values);
    },
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
  //----------Cancel Modal --------------------

  const handleCancelModal = () => {
    handleReset();
    setModal((oldData) => {
      return {
        ...oldData,
        mainFolder: !oldData?.mainFolder,
        folderType: "",
        folderImage: "",
        mainFolderDetails: {},
        folderType: "",
      };
    });
    setQuestionDetails((old) => {
      return {
        ...old,
        editFolder: false,
      };
    });
  };
  //Add main Folder
  const handleModalMain = (val, course) => {
    if (val) {
      setModal((oldData) => {
        return {
          ...oldData,
          mainFolder: !oldData?.mainFolder,
          folderType: val,
          mainFolderDetails: course ? course : {},
        };
      });
    } else {
      handleCancelModal();
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
    setQuestionDetails((oldData) => {
      return {
        ...oldData,
        chapterInfo: field,
        openChapter: true,
      };
    });
  };
  // close subject component
  const handleGoBack = () => {
    setQuestionDetails((oldData) => {
      return {
        ...oldData,
        openChapter: false,
      };
    });
  };
  //subject Question Edit
  const handleEditSubjectQuestion = (Qid) => {
    setQuestionDetails((oldData) => {
      return {
        ...oldData,
        EditQuestion: Qid,
      };
    });
  };

  // Cancel Edit Question
  const handleCancelEditQuestion = () => {
    setQuestionDetails((oldData) => {
      return {
        ...oldData,
        EditQuestion: "",
      };
    });
  };
  // ----------------------handle delete model-------------------------

  const handleModal = (val, path) => {
    setDeleteFolder((old) => {
      return {
        ...old,
        modalOpen: !deleteFolder?.modalOpen,
        folderPath: path ? path : "",
        folderType: val ? val : "",
      };
    });
  };
  // ---------------------------close Delete-----------------------------
  const handleCloseDeleteModal = () => {
    setDeleteFolder((old) => {
      return {
        ...old,
        modalOpen: false,
        folderPath: "",
        folderType: "",
      };
    });
  };

  // ------------------------Delete Api Call----------------------------
  const handleDeleteFolder = async () => {
    try {
      if (deleteFolder?.folderType === "Course") {
        setIsLoader(true);
        let json = {
          coursePath: deleteFolder?.folderPath,
        };
        console.log("step");

        let folder = await apiResponse(
          await postData("/delete-course", json, token)
        );
        console.log("step2");
        if (folder.success) {
          setDeleteFolder((old) => {
            return {
              ...old,
              modalOpen: false,
              folderPath: "",
              folderType: "",
            };
          });
          handleGetAllCourse();
          setIsLoader(false);
        }
      } else if (deleteFolder?.folderType === "Subject") {
        let json = {
          subjectPath: deleteFolder?.folderPath,
        };
        setIsLoader(true);
        let folder = await apiResponse(
          await postData("/delete-subject", json, token)
        );
        if (folder.success) {
          setIsLoader(false);
          setDeleteFolder((old) => {
            return {
              ...old,
              modalOpen: false,
              folderPath: "",
              folderType: "",
            };
          });
          handleGetAllCourse();
        }
      } else if (deleteFolder?.folderType === "Chapter") {
        let json = {
          chapterPath: deleteFolder?.folderPath,
        };
        setIsLoader(true);
        let folder = await apiResponse(
          await postData("/delete-chapter", json, token)
        );
        if (folder.success) {
          handleGetAllCourse();
          setIsLoader(false);
          setDeleteFolder((old) => {
            return {
              ...old,
              modalOpen: false,
              folderPath: "",
              folderType: "",
            };
          });
        }
      }
    } catch (error) {
      toastWarning(
        error.message || "An error occurred while creating the folder."
      );
    } finally {
      setIsLoader(false);
    }
  };
  // -------------------------------select image for upload--------------------------------

  const handleSelectImage = async (e) => {
    const file = e.target.files[0];
    const result = URL.createObjectURL(file);
    // let img = document.getElementById(id);
    //   img.src = result;

    setLoader((old) => {
      return {
        ...old,
        imageKit: true,
      };
    });
    let imageKitResponse = await ImageUpload(file, "course");
    console.log("imageKitResponse", imageKitResponse);
    if (imageKitResponse) {
      setModal((old) => {
        return {
          ...old,
          folderImage: imageKitResponse,
        };
      });
      setLoader((old) => {
        return {
          ...old,
          imageKit: false,
        };
      });
    }
  };
  // ---------------Edit folder ------------------------
  const handleEditFolder = (val, course) => {
    console.log("val, course", val, course);
    if (val === "Course") {
      setFieldValue("folder", course?.courseTitle);
      setFieldValue("path", course?.coursePath);
      setModal((old) => {
        return {
          ...old,
          folderImage: course?.courseImage,
          mainFolder: true,
          editId: course?._id,
          folderType: val,
        };
      });
      setQuestionDetails((old) => {
        return {
          ...old,
          editFolder: true,
        };
      });
    } else if (val === "Subject") {
      setFieldValue("folder", course?.subjectTitle);
      setFieldValue("path", course?.subjectPath);
      setModal((old) => {
        return {
          ...old,
          folderImage: course?.subjectImage,
          mainFolder: true,
          editId: course?._id,
          folderType: val,
        };
      });
      setQuestionDetails((old) => {
        return {
          ...old,
          editFolder: true,
        };
      });
    } else if (val === "Chapter") {
      setFieldValue("folder", course?.chapterTitle);
      setFieldValue("path", course?.chapterPath);
      setModal((old) => {
        return {
          ...old,
          mainFolder: true,
          editId: course?._id,
          folderType: val,
        };
      });
      setQuestionDetails((old) => {
        return {
          ...old,
          editFolder: true,
        };
      });
    }
  };

  // ----------------Update Folder--------------------

  const handleUpdateFolder = async (value) => {
    console.log("value", value);
    try {
      if (modal?.folderType === "Course") {
        if (modal.folderImage) {
          setIsLoader(true);
          let json = {
            courseTitle: value.folder,
            courseImage: modal.folderImage,
            coursePath: value.path,
            _id: modal?.editId,
          };
          let folder = await apiResponse(
            await updateData("/course", json, token)
          );
          console.log("folder", folder);
          if (folder.success) {
            handleGetAllCourse();
            setIsLoader(false);
            setModal((old) => {
              return {
                ...old,
                mainFolder: !old?.mainFolder,
                folderType: "",
                folderImage: "",
                mainFolderDetails: {},
                folderType: "",
              };
            });
            handleReset();
          }
        } else {
          toastWarning("please upload image");
        }
      } else if (modal?.folderType === "Subject") {
        if (modal.folderImage) {
          let json = {
            _id: modal?.editId,
            courseId: modal?.mainFolderDetails?.coursePath,
            subjectTitle: value.folder,
            subjectImage: modal?.folderImage,
            subjectPath: value?.path,
          };
          setIsLoader(true);
          let folder = await apiResponse(
            await updateData("/subject", json, token)
          );
          if (folder.success) {
            setIsLoader(false);
            handleGetAllCourse();
            setModal((old) => {
              return {
                ...old,
                mainFolder: !old?.mainFolder,
                folderType: "",
                folderImage: "",
                mainFolderDetails: {},
                folderType: "",
              };
            });
            handleReset();
          }
        } else {
          toastWarning("please upload image");
        }
      } else if (modal?.folderType === "Chapter") {
        let json = {
          _id: modal?.editId,
          subjectId: modal?.mainFolderDetails?.subjectPath,
          chapterTitle: value.folder,
          chapterPath: value.path,
        };
        setIsLoader(true);
        let folder = await apiResponse(
          await updateData("/chapter", json, token)
        );
        if (folder.success) {
          handleGetAllCourse();
          setIsLoader(false);
          setModal((old) => {
            return {
              ...old,
              mainFolder: !old?.mainFolder,
              folderType: "",
              folderImage: "",
              mainFolderDetails: {},
              folderType: "",
            };
          });
          handleReset();
        }
      }
    } catch (error) {
      toastWarning(
        error.message || "An error occurred while creating the folder."
      );
    } finally {
      setIsLoader(false);
    }
  };
  // ------------------- Api Call for post Folder Create -----------------------
  const handleCreateFolder = async (val) => {
    try {
      if (modal?.folderType === "Course") {
        if (modal.folderImage) {
          setIsLoader(true);
          let json = {
            courseTitle: val.folder,
            courseImage: modal.folderImage,
            coursePath: val.path,
          };
          let folder = await apiResponse(
            await postData("/course", json, token)
          );
          console.log("folder", folder);
          if (folder.success) {
            handleGetAllCourse();
            setIsLoader(false);
            setModal((old) => {
              return {
                ...old,
                folderImage: "",
                mainFolder: false,
              };
            });
            handleReset();
          }
        } else {
          toastWarning("please upload image");
        }
      } else if (modal?.folderType === "Subject") {
        if (modal.folderImage) {
          let json = {
            courseId: modal?.mainFolderDetails?.coursePath,
            subjectTitle: val.folder,
            subjectImage: modal?.folderImage,
            subjectPath: val?.path,
          };
          setIsLoader(true);
          let folder = await apiResponse(
            await postData("/subject", json, token)
          );
          if (folder.success) {
            setIsLoader(false);
            handleGetAllCourse();
            setModal((old) => {
              return {
                ...old,
                folderImage: "",
                mainFolder: false,
              };
            });
            handleReset();
          }
        } else {
          toastWarning("please upload image");
        }
      } else if (modal?.folderType === "Chapter") {
        let json = {
          subjectId: modal?.mainFolderDetails?.subjectPath,
          chapterTitle: val.folder,
          chapterPath: val.path,
        };
        setIsLoader(true);
        let folder = await apiResponse(await postData("/chapter", json, token));
        if (folder.success) {
          handleGetAllCourse();
          setIsLoader(false);
          setModal((old) => {
            return {
              ...old,
              mainFolder: false,
            };
          });
          handleReset();
        }
      }
    } catch (error) {
      toastWarning(
        error.message || "An error occurred while creating the folder."
      );
    } finally {
      setIsLoader(false);
    }
  };

  //----get All course Folder-----------------------------------------------------------
  const handleGetAllCourse = async () => {
    try {
      setLoader((old) => {
        return {
          ...old,
          allData: true,
        };
      });
      const getRes = await apiGetResponse(await getData("/course/all", token));
      if (getData) {
        setCourseData(getRes?.data);
        setLoader((old) => {
          return {
            ...old,
            allData: false,
          };
        });
      }
    } catch (error) {
      if (error) {
        console.log(error);
        setLoader((old) => {
          return {
            ...old,
            allData: false,
          };
        });
      }
    }
  };

  // ---------------------get All Question------------------------------
  const handleGetQuestion = async () => {
    try {
      setLoader((old) => {
        return {
          ...old,
          allData: true,
        };
      });
      const getRes = await apiGetResponse(
        await getData(
          `/questions?query=${QuestionDetails.chapterInfo?.chapterPath}`,
          token
        )
      );
      if (getData) {
        console.log("getRes", getRes);
        setAllQuestion(getRes?.data);
        setLoader((old) => {
          return {
            ...old,
            allData: false,
          };
        });
      }
    } catch (error) {
      if (error) {
        console.log(error);
        setLoader((old) => {
          return {
            ...old,
            allQuestion: false,
          };
        });
      }
    }
  };
  useEffect(() => {
    handleGetAllCourse();
  }, []);

  useEffect(() => {
    handleGetQuestion();
  }, [QuestionDetails.openChapter]);

  return {
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    courseData,
    QuestionDetails,
    modal,
    loader,
    deleteFolder,
    handleModalMain,
    handleModelSave,
    handleOpenSubject,
    handleGoBack,
    handleEditSubjectQuestion,
    handleCancelEditQuestion,
    handleSelectImage,
    handleEditFolder,
    handleCloseDeleteModal,
    handleDeleteFolder,
    handleModal,
    handleCancelModal,
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
