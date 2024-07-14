import React, { useContext } from "react";
import ContextStore from "../../context/Context";
import { toastError } from "../../utils/tostify";
import { ImageUpload, apiResponse } from "../../utils/Helper";
import { postData } from "../../components/AuthGard/LogGard";

const ProfileService = () => {
  const { userDetails, token, loaderInFolder, setLoaderInFolder } =
    useContext(ContextStore);
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
        }else{
          setLoaderInFolder(false);
        }
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.error(error);
      toastError(error?.message || "something wrong with imageKit");
    }
  };
  return { userDetails, token, handleChangeFile, loaderInFolder };
};

export default ProfileService;
