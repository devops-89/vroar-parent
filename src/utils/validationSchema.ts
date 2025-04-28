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
  avatar: Yup.mixed().required("Please Select Avatar"),
});
