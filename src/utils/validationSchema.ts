import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .required("Please Enter Email")
    .email("Please Enter Valid Email"),
});

export const registerValidationSchema = Yup.object({
  firstName: Yup.string().required("Please Enter First Name"),
  lastName: Yup.string().required("Please Enter Last Name"),
  password: Yup.string()
    .required("Please Enter Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  email: Yup.string()
    .required("Please Enter Email")
    .email("Please Enter Valid Email"),
  phoneNumber: Yup.string().required("Please Enter Phone Number"),
  avatar: Yup.mixed()
    .required("Please Select Avatar")
    .test("fileSize", "File size must be less than 1MB", (value) => {
      if (!value) return false; 
      const file = value as File; 
      return file.size <= 1024 * 1024; 
    }),
});

export const inviteValidationSchema = Yup.object({
  firstName: Yup.string().required("Please Enter First Name"),
  lastName: Yup.string().required("Please Enter Last Name"),
  email: Yup.string()
    .required("Please Enter Email")
    .email("Please Enter Valid Email"),
  phoneNo: Yup.string().required("Please Enter Phone Number"),
  grade: Yup.string().required("Please Select Grade"),
  relationshipToStudent: Yup.string().required(
    "Please Select Relation to student"
  ),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required("Please Enter Email")
    .email("Please Enter Valid Email"),
  password: Yup.string().required("Please Enter Password"),
});

export const changePasswordValidationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Please Enter Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  newPassword: Yup.string()
    .required("Please Enter Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});
