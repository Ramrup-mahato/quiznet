import * as Yup from "yup";

const FullName = /^[A-Za-z. ]{3,30}$/;
const path = /^([a-z0-9]+-)*[a-z0-9]+(-[a-z0-9]+)*$/;
const phoneValidation = /^[789]\d{9}$/;
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
  phone: Yup.string()
  .matches(phoneValidation, "Give valid phone")
  .required("Please Enter a phone number"),
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
      "Please give a valid path, only lower case letters are required."
    ),
  test: Yup.boolean().default(false),
  testTime: Yup.number().when("test", {
    is: true,
    then: (schema) =>
      schema
        .required("Test time is required")
        .min(5, "Test time must be at least 5"),
    otherwise: (schema) => schema.nullable(),
  }),
  testMessage: Yup.string().when("test", {
    is: true,
    then: (schema) => schema.required("Please write a test message"),
    otherwise: (schema) => schema.nullable(),
  }),
});

export const contactSchema = Yup.object({
  username: Yup.string()
    .required("Please Enter Your FullName..")
    .matches(FullName, "Please Give valid name"),
  email: Yup.string()
    .email()
    .required("Please Enter email (ex:-john@gmail.com)"),
  phone: Yup.string()
    .matches(phoneValidation, "Give valid phone")
    .required("Please Enter a phone number"),
  message: Yup.string().required("Please Enter Your FullName.."),
});


