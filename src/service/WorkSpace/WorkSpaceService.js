import React, { useContext, useEffect, useState } from "react";
import ContextStore from "../../context/Context";
import { ImageUpload, apiGetResponse, apiResponse } from "../../utils/Helper";
import { getData, postData } from "../../components/AuthGard/LogGard";
import { toastError } from "../../utils/tostify";
import image from "../../assets/image/study3.png";

const WorkSpaceService = () => {
  const { token, setIsLoader, userDetails } = useContext(ContextStore);
  const [work, setWork] = useState([]);
  const [message, setMassage] = useState("");
  const [img, setImg] = useState("");

  const handleOnChange = (e) => {
    setMassage(e.target.value);
  };

  //   -------------------get file ----------------
  const handleOnChangeFile = (e) => {
    let file = e.target.files[0];
    setImg(file);
    let imageUrl = URL.createObjectURL(file);
    let img = document.getElementById("ImageSelected");
    img.src = imageUrl;
  };
  // -----------------------Delete work oe Url message------------------------------
  const handleDeleteWork = async (id) => {
    try {
      setIsLoader(true);
      let json = {
        id: id,
      };
      let res = await apiResponse(
        await postData(`/workspace/delete`, json, token)
      );
      if (res?.success) {
        handleGetAllWorkSpace();
        setIsLoader(false);
      }
    } catch (error) {
      setIsLoader(false);
      console.error(error);
      toastError(error?.message || "something wrong with imageKit");
    }
  };
  //   ----------------------------submit image and message-------------------------------
  const handleSubmit = async () => {
    try {
      setIsLoader(true);
      let imageKitResponse = await ImageUpload(img, "WorkSpace");
      if (imageKitResponse) {
        let json = {
          message: message,
          url: imageKitResponse,
          userId: userDetails?._id,
        };
        console.log("json", json);
        let res = await apiResponse(await postData(`/workspace`, json, token));
        if (res?.success) {
          setIsLoader(false);
          let img = document.getElementById("ImageSelected");
          img.src = image;
          setMassage("");
          handleGetAllWorkSpace();
        }
      }
    } catch (error) {
      setIsLoader(false);
      console.error(error);
      toastError(error?.message || "something wrong with imageKit");
    }
  };

  //   ----------------get All work list---------------
  const handleGetAllWorkSpace = async () => {
    try {
      setIsLoader(true);
      let res = await apiGetResponse(await getData(`/workspace`, token));
      if (res?.success) {
        setWork(res?.data);
        setImg("");
        setIsLoader(false);
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 500);
      }
    } catch (error) {
      setIsLoader(false);
      console.error(error);
      toastError(error?.message || "something went wrong");
    }
  };
  useEffect(() => {
    handleGetAllWorkSpace();
  }, []);
  return {
    work,
    handleSubmit,
    message,
    handleOnChangeFile,
    handleOnChange,
    handleDeleteWork,
  };
};

export default WorkSpaceService;
