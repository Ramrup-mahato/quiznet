import { useContext, useEffect, useState } from "react";
import { toastWarning } from "../../utils/tostify";
import { apiGetResponse, apiResponse } from "../../utils/Helper";
import {
  getData,
  postData,
  updateData,
} from "../../components/AuthGard/LogGard";
import ContextStore from "../../context/Context";

const FaqService = () => {
  const { setLoaderInFolder, setIsLoader, token } = useContext(ContextStore);

  const [allFaq, setAllFaq] = useState([]);
  const [edit, setEdit] = useState({
    editQuestion: false,
    addNewFaq: false,
    _id: "",
    question: "",
    answer: "",
  });

  // Text Question

  const handleTextChange = (e) => {
    setEdit((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  // Save FAQ Data
  const handleSaveFaq = async () => {
    try {
      if (edit._id.length > 0) {
        setIsLoader(true);
        let json = {
          _id: edit?._id,
          question: edit?.question,
          answer: edit?.answer,
        };
        let response = await apiResponse(await updateData("/faq", json, token));
        if (response?.success) {
          handleGetAll();
          setIsLoader(false);
          setEdit((old) => {
            return {
              ...old,
              _id: "",
              question: "",
              answer: "",
            };
          });
        }
      } else {
        setIsLoader(true);
        let json = {
          question: edit?.question,
          answer: edit?.answer,
        };
        let response = await apiResponse(await postData("/faq", json, token));
        if (response?.success) {
          handleGetAll();
          setIsLoader(false);
          setEdit((old) => {
            return {
              ...old,
              _id: "",
              question: "",
              answer: "",
              addNewFaq: false,
            };
          });
        }
      }
    } catch (error) {
      toastWarning(error.message);
      setIsLoader(false);
    }
  };
  // Cancel FAQ Data
  const handleCancelFaq = () => {
    setEdit((old) => {
      return {
        ...old,
        addNewFaq: false,
        _id: "",
        question: "",
        answer: "",
      };
    });
  };
  // edit FAQ
  const handleEditFAQ = (field) => {
    setEdit((old) => {
      return {
        ...old,

        _id: field?._id,
        question: field?.question,
        answer: field?.answer,
      };
    });
  };

  // ----------------------------get all faq --------------------------
  const handleGetAll = async () => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(await getData("/faq"));
      if (res.success) {
        setAllFaq(res?.data);
        setLoaderInFolder(false);
      }
    } catch (error) {
      toastWarning(error.message);
      setLoaderInFolder(false);
    }
  };
  // --------------------Add new FAQ -------------------------
  const handleAddFaq = () => {
    setEdit((old) => ({
      ...old,
      addNewFaq: true,
    }));
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // -------------------- Delete FAQ ----------------------------
  const handleDeleteFaq = async (id) => {
    try {
      setIsLoader(true);
      let json = {
        _id: id,
      };
      let response = await apiResponse(
        await postData("/faq/delete", json, token)
      );
      if (response?.success) {
        handleGetAll();
        setIsLoader(false);
      }
    } catch (error) {
      toastWarning(error.message);
      setIsLoader(false);
    }
  };

  useEffect(() => {
    handleGetAll();
  }, []);

  return {
    allFaq,
    edit,
    handleSaveFaq,
    handleCancelFaq,
    handleTextChange,
    handleEditFAQ,
    handleAddFaq,
    handleDeleteFaq,
  };
};

export default FaqService;
