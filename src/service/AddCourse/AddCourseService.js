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
import { toastError, toastWarning } from "../../utils/tostify";
import csvToJson from "csvtojson";

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
    search: "",
  });

  const [loader, setLoader] = useState({
    imageKit: false,
    allData: false,
    allQuestion: false,
    AImage: false,
    BImage: false,
    CImage: false,
    DImage: false,
    QueImage: false,
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

  const [questionModal, setQuestionModal] = useState({
    openCloseModal: false,
    correctAnswer: "",
    Que: "",
    A: "",
    B: "",
    C: "",
    D: "",
    QueImage: "",
    AImage: "",
    BImage: "",
    CImage: "",
    DImage: "",
    _id: "",
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
  // ---------------------------close Delete-----------------------------
  const handleDeleteQuestion = (course, id) => {
    setDeleteFolder((old) => {
      return {
        ...old,
        modalOpen: !deleteFolder?.modalOpen,
        folderPath: id ? id : "",
        folderType: course ? course : "",
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
      } else if (deleteFolder?.folderType === "Question") {
        let json = {
          _id: deleteFolder?.folderPath,
        };
        console.log("(json==>", json);

        setIsLoader(true);
        let folder = await apiResponse(
          await postData("/delete-question", json, token)
        );
        if (folder.success) {
          handleGetQuestion();
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
  // ------------------------Delete Api Call----------------------------

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

  // ----------------------Open Close Question Modal-------------------------------

  const handleQuestionModal = () => {
    if (questionModal._id) {
      handleCancelQuestionModal();
      setQuestionModal((old) => {
        return {
          ...old,
          openCloseModal: !questionModal.openCloseModal,
        };
      });
    } else {
      setQuestionModal((old) => {
        return {
          ...old,
          openCloseModal: !questionModal.openCloseModal,
        };
      });
    }
  };
  // -----------------------Select Correct  Answer---------------------------
  const handleRadioAnswer = (e) => {
    let corr = e.target.name;
    setQuestionModal((old) => {
      return {
        ...old,
        correctAnswer: corr,
      };
    });
  };
  // -----------------------Select Correct  Answer---------------------------
  const handleQuestionAnswer = (e) => {
    setQuestionModal((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  //------------------------handle Select image--------------------------------------
  const handleSelectQuestionImage = async (e) => {
    const file = e.target.files[0];

    setLoader((old) => {
      return {
        ...old,
        [e.target.name]: true,
      };
    });
    let imageKitResponse = await ImageUpload(file, "question");
    console.log("imageKitResponse", imageKitResponse);
    if (imageKitResponse) {
      setQuestionModal((old) => {
        return {
          ...old,
          [e.target.name]: imageKitResponse,
        };
      });
      setLoader((old) => {
        return {
          ...old,
          [e.target.name]: false,
        };
      });
    }
  };
  // ---------------------Cancel Question Modal----------------------
  const handleCancelQuestionModal = () => {
    setQuestionModal((old) => {
      return {
        ...old,
        correctAnswer: "",
        Que: "",
        A: "",
        B: "",
        C: "",
        D: "",
        QueImage: "",
        AImage: "",
        BImage: "",
        CImage: "",
        DImage: "",
        _id: "",
      };
    });
  };
  //-----------------------------------handle Submit Question--------------------------------
  const isValidOption = (option, optionImg) => option || optionImg;
  const handleSubmitQuestion = async () => {
    try {
      if (
        !isValidOption(questionModal.A, questionModal.AImage) ||
        !isValidOption(questionModal.B, questionModal.BImage) ||
        !isValidOption(questionModal.C, questionModal.CImage) ||
        !isValidOption(questionModal.D, questionModal.DImage) ||
        !questionModal.Que ||
        !questionModal.correctAnswer
      ) {
        if (!questionModal.Que) {
          toastWarning("Please Enter Question ");
        } else if (!questionModal.correctAnswer) {
          toastWarning("Please select correctAnswer");
        } else {
          toastWarning(
            "Please fill a proper Value or image or select correctAnswer"
          );
        }
      } else {
        setIsLoader(true);
        let json = {
          chapterId: QuestionDetails.chapterInfo?.chapterPath,
          question: questionModal.Que,
          questionsImg: questionModal.QueImage,
          correctAnswer: questionModal.correctAnswer.toLocaleLowerCase(),
          a: questionModal.A,
          b: questionModal.B,
          c: questionModal.C,
          d: questionModal.D,
          aImg: questionModal.AImage,
          bImg: questionModal.BImage,
          cImg: questionModal.CImage,
          dImg: questionModal.DImage,
        };
        console.log("step");

        let folder = await apiResponse(
          await postData("/questions", json, token)
        );
        console.log("step2");
        if (folder.success) {
          setQuestionModal((old) => {
            return {
              ...old,
              openCloseModal: false,
              correctAnswer: "",
              Que: "",
              A: "",
              B: "",
              C: "",
              D: "",
              QueImage: "",
              AImage: "",
              BImage: "",
              CImage: "",
              DImage: "",
            };
          });
          handleGetQuestion();
          setIsLoader(false);
        }
      }
    } catch (error) {
      if (error) {
        console.log(error);
        toastWarning(error.data.message);
        setIsLoader(false);
      }
    }
  };
  // --------------------Edit Question----------------------------
  const handleEditQuestion = (question) => {
    setQuestionModal((old) => {
      return {
        ...old,
        openCloseModal: !questionModal.openCloseModal,
        _id: question?._id,
        correctAnswer: question?.correctAnswer.toUpperCase(),
        Que: question?.question,
        A: question?.a,
        B: question?.b,
        C: question?.c,
        D: question?.d,
        QueImage: question?.questionsImg,
        AImage: question?.aImg,
        BImage: question?.bImg,
        CImage: question?.cImg,
        DImage: question?.dImg,
      };
    });
  };
  // ---------------------------Update Question---------------------------------------
  const handleUpdateQuestion = async () => {
    try {
      if (
        !isValidOption(questionModal.A, questionModal.AImage) ||
        !isValidOption(questionModal.B, questionModal.BImage) ||
        !isValidOption(questionModal.C, questionModal.CImage) ||
        !isValidOption(questionModal.D, questionModal.DImage) ||
        !questionModal.Que ||
        !questionModal.correctAnswer
      ) {
        if (!questionModal.Que) {
          toastWarning("Please Enter Question ");
        } else if (!questionModal.correctAnswer) {
          toastWarning("Please select correctAnswer");
        } else {
          toastWarning("Please fill a  Value or image");
        }
      } else {
        setIsLoader(true);
        let json = {
          question: questionModal.Que,
          questionsImg: questionModal.QueImage,
          correctAnswer: questionModal.correctAnswer.toLocaleLowerCase(),
          a: questionModal.A,
          b: questionModal.B,
          c: questionModal.C,
          d: questionModal.D,
          aImg: questionModal.AImage,
          bImg: questionModal.BImage,
          cImg: questionModal.CImage,
          dImg: questionModal.DImage,
          _id: questionModal._id,
        };

        let folder = await apiResponse(
          await updateData("/questions", json, token)
        );
        console.log("folder", folder);
        if (folder.success) {
          handleGetQuestion();
          setIsLoader(false);
          setQuestionModal((old) => {
            return {
              ...old,
              openCloseModal: false,
              correctAnswer: "",
              Que: "",
              A: "",
              B: "",
              C: "",
              D: "",
              QueImage: "",
              AImage: "",
              BImage: "",
              CImage: "",
              DImage: "",
              _id: "",
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
  // -----------------------Remove Image from Modal--------------------------
  const handleUnSelectImage = (val) => {
    setQuestionModal((old) => {
      return {
        ...old,
        [val]: "",
      };
    });
  };

  // ------------------handle Upload Csv-------------------
  const handleUploadCsv = async (e) => {
    const fileReader = new FileReader();
    const file = e.target?.files[0];
    if (file && file.type === "text/csv") {
      fileReader.onload = async (event) => {
        const text = event.target.result;
        const json = await csvToJson().fromString(text);
        // setSelectedFile(json);
        await handleArrayOfQuestion(json);
      };
      fileReader.readAsText(file);
    }
  };

  // ------------post  Array of Question -------------
  const handleArrayOfQuestion = async (array) => {
    try {
      const isValidOption = (option, optionImg) => option || optionImg;
      const questions = array.map((value) => {
        if (!isValidOption(value?.Question, value?.Question_Image)) {
          toastWarning(`Add Question or Question Image`);
        }
        if (!value?.Correct_Answer) {
          toastWarning(
            `Add correct Answer of "${value?.Question ? value?.Question : ""}"`
          );
        }

        if (
          !isValidOption(value?.Option_A, value?.Option_A_Image) ||
          !isValidOption(value?.Option_B, value?.Option_B_Image) ||
          !isValidOption(value?.Option_C, value?.Option_C_Image) ||
          !isValidOption(value?.Option_D, value?.Option_D_Image)
        ) {
          toastWarning(`Add all Option of this Question`);
        }

        return {
          _id: value?.Id && value?.Id ? value?.Id : "",
          chapterId: QuestionDetails.chapterInfo?.chapterPath,
          question: value?.Question,
          correctAnswer: value?.Correct_Answer,
          a: value?.Option_A,
          b: value?.Option_B,
          c: value?.Option_C,
          d: value?.Option_D,
          aImg: value?.Option_A_Image,
          bImg: value?.Option_B_Image,
          cImg: value?.Option_C_Image,
          dImg: value?.Option_D_Image,
          questionsImg: value?.Question_Image,
        };
      });
      console.log("questions", questions);
      let Question = await apiResponse(
        await postData("/questions/csv", { questionsOfArray: questions }, token)
      );
      if (Question.success) {
        handleGetQuestion();
      }
    } catch (error) {
      console.log(error);
      toastError(error?.data?.message);
    }
  };
  const handleSearchQuestion = (e) => {
    setQuestionDetails((old) => {
      return {
        ...old,
        search: e.target.value,
      };
    });
  };
  // ----------------------------publish Course ------------------------------
  const handlePublishCourse = async (value,id) => {
    console.log("publish", value);
    try {
      setIsLoader(true);
      let json = {
        _id: id,
        publish:!value
      };

      let folder = await apiResponse(
        await updateData("/course/publish", json, token)
      );
      console.log("publish", folder);
      if (folder.success) {
        handleGetAllCourse();
        setIsLoader(false);
      }
    } catch (error) {
      toastWarning(
        error.message || "An error occurred while creating the folder."
      );
    } finally {
      setIsLoader(false);
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
    allQuestion,
    questionModal,
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
    handleQuestionModal,
    handleRadioAnswer,
    handleQuestionAnswer,
    handleSelectQuestionImage,
    handleCancelQuestionModal,
    handleSubmitQuestion,
    handleDeleteQuestion,
    handleEditQuestion,
    handleUpdateQuestion,
    handleUnSelectImage,
    handleUploadCsv,
    handleSearchQuestion,
    handlePublishCourse,
  };
};

export default AddCourseService;
