import React, { useContext, useState } from "react";
import ContextStore from "../../context/Context";
import { toastError } from "../../utils/tostify";
import { ImageUpload, apiResponse } from "../../utils/Helper";
import { postData } from "../../components/AuthGard/LogGard";

const FullName = /^[A-Za-z. ]{3,30}$/;
const phoneValidation = /^[789]\d{9}$/;

const ProfileService = () => {
  const { userDetails, token, loaderInFolder, setLoaderInFolder,setIsLoader } =
    useContext(ContextStore);
  const [profile, setProfile] = useState({
    modal: false,
    editFor: "",
    value: "",
    error: "",
  });

  // -------------------------Change Profile photo-----------------------------
  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    try {
      setLoaderInFolder(true);
      let imageKitResponse = await ImageUpload(file, "profile");
      let getToken = JSON.parse(localStorage.getItem("quizNetToken"));
      if (imageKitResponse && getToken) {
        let json = {
          _id: userDetails?._id,
          avatar: imageKitResponse,
        };
        let res = await apiResponse(
          await postData("/profile/update", json, token)
        );
        if (res?.success) {
          getToken.user.avatar = imageKitResponse;
          localStorage.setItem("quizNetToken", JSON.stringify(getToken));
          setLoaderInFolder(false);
          window.location.reload();
        } else {
          setLoaderInFolder(false);
        }
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.error(error);
      toastError(error?.message || "something wrong with imageKit");
    }
  };
  // ------------------------Open modal------------------
  const handleModal = () => {
    setProfile((prev) => ({
      ...prev,
      modal: !profile.modal,
      editFor: "",
    }));
  };
  // ----------------------------Edit username, phone, user type-----------------------
  const handleEdit = (type, value) => {
    if (type === "username") {
      setProfile((prev) => ({
        ...prev,
        modal: !profile.modal,
        editFor: "username",
        value: value,
      }));
    } else if (type === "phone") {
      setProfile((prev) => ({
        ...prev,
        modal: !profile.modal,
        editFor: "phone",
        value: value,
      }));
    } else if (type === "userType") {
      setProfile((prev) => ({
        ...prev,
        modal: !profile.modal,
        editFor: "userType",
        value: value,
      }));
    }
  };
  // ----------------------select user Type-------------------------
  const handleSelectRadio = (val) => {
    setProfile((prev) => ({
      ...prev,
      value: val,
    }));
  };
  // -----------------------get text from input field -----------------------
  const handleInput = (e) => {
    let val = e.target.value;
    setProfile((prev) => ({
      ...prev,
    value:val,
    error:''
    }));
  } ;
  // ---------------------------------submit --------------------------------
  const handleSubmit=async()=>{
    setProfile((prev) => ({
      ...prev,
      error: "",
    }));
    let getToken = JSON.parse(localStorage.getItem("quizNetToken"));
    try {
      
      if (profile.editFor === "username") {
        if (FullName.test(profile.value)) {
          setIsLoader(true)
          let json = {
            _id: userDetails?._id,
            username: profile.value,
          };
          let res = await apiResponse(
            await postData("/profile/update", json, token)
          );
          if (res?.success) {
            getToken.user.username = profile.value;
            localStorage.setItem("quizNetToken", JSON.stringify(getToken));
            window.location.reload();
            setIsLoader(false)

          }
        } else {
          setProfile((prev) => ({
            ...prev,
            error: "please give valid name.",
          }));
        }
      }else if(profile.editFor === "phone"){
        if (phoneValidation.test(profile.value)) {
          setIsLoader(true)
          let json = {
            _id: userDetails?._id,
            phone: profile.value,
          };
          let res = await apiResponse(
            await postData("/profile/update", json, token)
          );
          if (res?.success) {
            getToken.user.phone = profile.value;
            localStorage.setItem("quizNetToken", JSON.stringify(getToken));
            window.location.reload();
            setIsLoader(false)
          }
        } else {
          setProfile((prev) => ({
            ...prev,
            error: "please give valid phone.",
          }));
        }
      }else if(profile.editFor === "userType"){
        setIsLoader(true)
        let json = {
          _id: userDetails?._id,
          userType: profile.value,
        };
        let res = await apiResponse(
          await postData("/profile/update", json, token)
        );
        if (res?.success) {
          getToken.user.userType = profile.value;
          localStorage.setItem("quizNetToken", JSON.stringify(getToken));
          window.location.reload();
          setIsLoader(false)
        }
      }
    } catch (error) {
      setIsLoader(false)
      toastError(error.message)
    }
  }
  return {
    userDetails,
    token,
    handleChangeFile,
    loaderInFolder,
    profile,
    handleModal,
    handleEdit,
    handleSelectRadio,
    handleInput,
    handleSubmit,
  };
};

export default ProfileService;
