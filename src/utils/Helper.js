import { toastSuccess, toastWarning } from "./tostify";
import ImageKit from "imagekit-javascript";

export const Capitalized = (str) => {
  if (str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }
};

export const CorrectAnswer = (option, correctAnswer) => {
  if (option === correctAnswer) {
    return true;
  } else {
    return false;
  }
};

export const filterQuestion = (data, search) => {
  if (!search) return data;

  const searchLowerCase = search.trim().toLowerCase();

  const filtered = data.filter((item) =>
    item.question.trim().toLowerCase().includes(searchLowerCase)
  );

  console.log("filtered", filtered);
  return filtered;
};

export const apiResponse = (data) => {
  console.log("data", data);
  if (data?.success === true) {
    toastSuccess(data?.message);
    return data;
  } else if (data?.success === false) {
    toastWarning(data?.message);
  }
};

export const apiGetResponse = (data) => {
  if (data?.success === true) {
    return data;
  } else if (data?.success === false) {
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

export const DateConverter = (data) => {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${day}/${month}/${year}`;
};

export const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
};
