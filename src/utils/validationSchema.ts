import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .required("Please Enter Email")
    .email("Please Enter Valid Email"),
});
