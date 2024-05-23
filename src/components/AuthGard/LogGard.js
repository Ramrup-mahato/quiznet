import axios from "axios";
import { toastError } from "../../utils/tostify";


const BaseUrl = process.env.REACT_APP_BASE_URL;

export const postData = async (URL, data, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = BaseUrl + URL;
      await axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.data);
          } else {
            reject({
              success: false,
              message: "An unknown error occurred",
            });
          }
        });
    } catch (error) {
      toastError("Something went wrong. Please check your internet connection.");
      console.log("Something went wrong. Please check your internet connection.");
      reject({
        success: false,
        message: "Network error",
      });
    }
  });
};

export const getData = async (URL,token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = BaseUrl + URL;
      await axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    } catch (error) {
      toastError(
        "Something went wrong. Please check your internet connection."
      );
      console.log(
        "Something went wrong. Please check your internet connection."
      );
    }
  });
};


export const updateData = async (URL, data, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = BaseUrl + URL;
      await axios
        .put(url, data, {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.data);
          } else {
            reject({
              success: false,
              message: "An unknown error occurred",
            });
          }
        });
    } catch (error) {
      toastError("Something went wrong. Please check your internet connection.");
      console.log("Something went wrong. Please check your internet connection.");
      reject({
        success: false,
        message: "Network error",
      });
    }
  });
};
