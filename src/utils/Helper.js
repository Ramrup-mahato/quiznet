import { toastSuccess, toastWarning } from "./tostify";
import ImageKit from "imagekit-javascript";

export const Capitalized = (str) => {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
};

export const apiResponse = (data) => {
  if (data?.success === true) {
    toastSuccess(data?.message);
    return data;
  } else {
    toastWarning(data?.message);
    return data;
  }
};

export const apiGetResponse = (data) => {
  if (data?.success === true) {
    return data;
  } else {
    toastWarning(data?.message);
    return data;
  }
};

export const ImageUpload = async (file, folderPath) => {
  const imagekit = new ImageKit({
    publicKey: process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.REACT_APP_IMAGEKIT_URL_END_POINT,
    transformationPosition: "path",
    authenticationEndpoint:
      process.env.REACT_APP_IMAGEKIT_AUTHENDTICATION_ENDPOINT,
  });

  return new Promise((resolve, reject) => {
    imagekit
      .upload({
        file: file,
        fileName: file.name,
        folder: folderPath,
        extensions: [
          {
            name: "google-auto-tagging",
            maxTags: 5,
            minConfidence: 95,
          },
        ],
      })
      .then((response) => {
        console.log(response);
        resolve(response.url);
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
};

