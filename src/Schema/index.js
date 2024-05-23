import * as Yup from "yup";

const FullName = /^[A-Za-z. ]{3,30}$/;
const path = /^[a-z-]+$/;

const Password =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email..."),
  password: Yup.string().required("Please enter your password..."),
});

export const RegisterSchema = Yup.object({
  username: Yup.string()
    .min(3)
    .matches(FullName, "Please Give valid name")
    .required("Please enter username..."),
  email: Yup.string().email().required("Please enter your email..."),
  phone: Yup.string().required("Please enter your phone"),
  password: Yup.string()
    .min(8)
    .matches(
      Password,
      "requires:uppercase,lowercase,special character, and digit."
    )
    .required("Please enter your password..."),
  conformPassword: Yup.string()
    .required("please Enter conform password...")
    .oneOf([Yup.ref("password"), null], "password must match"),
});

export const EmailScheme = Yup.object({
  email: Yup.string().email().required("Please enter your email..."),
});
export const NewPasswordScheme = Yup.object({
  password: Yup.string()
    .min(8)
    .matches(
      Password,
      "requires:uppercase,lowercase,special character, and digit."
    )
    .required("Please enter your password..."),
  conformPassword: Yup.string()
    .required("please Enter conform password...")
    .oneOf([Yup.ref("password"), null], "password must match"),
});

export const folderSchema = Yup.object({
  folder: Yup.string().required("This field is required").min(5),
  path: Yup.string()
    .required("This field path is required")
    .min(2)
    .matches(
      path,
      "Please Give valid path, only lower case letter is required."
    ),
});
