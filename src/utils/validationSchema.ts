import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  email: Yup.string()
    .required("Please Enter Email")
    .email("Please Enter Valid Email"),
});

// export const registerValidationSchema = Yup.object({
//   firstName: Yup.string()
//     .required("Please Enter First Name")
//     .trim()
//     .min(2, "Name is too Short!")
//     .max(55, "Name is too long!"),

//   lastName: Yup.string()
//     .required("Please Enter Last Name")
//     .trim()
//     .min(2, "Name is too Short!")
//     .max(55, "Name is too long!"),

//   password: Yup.string()
//     .required("Please Enter Password")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
//       "Password must contain at least one uppercase letter, one lowercase letter, and one number"
//     )
//     .min(8, "Password must be 8 characters long"),

//   email: Yup.string()
//     .required("Please Enter Email")
//     .email("Please Enter Valid Email"),

//   phoneNumber: Yup.string().required("Please Enter Valid Phone Number"),

//   showAvatar: Yup.string().nullable(),

//   avatar: Yup.mixed().when("$showAvatar", {
//     is: (val: any) => {
//       try {
//         return Boolean(val && new URL(val));
//       } catch {
//         return false;
//       }
//     },
//     then: (schema) => schema.nullable().notRequired(),
//     otherwise: (schema) =>
//       schema
//         .optional()
//         .test("fileType", "Only JPG or PNG files are allowed", (value) => {
//           if (!value) return false;
//           const file = value as File;
//           return ["image/jpeg", "image/png"].includes(file.type);
//         })
//         .test("fileSize", "File size must be less than 1MB", (value) => {
//           if (!value) return false;
//           const file = value as File;
//           return file.size <= 1024 * 1024;
//         }),
//   }),
// });
export const registerValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("Please Enter First Name")
    .trim()
    .min(2, "Name is too Short!")
    .max(55, "Name is too long!"),

  lastName: Yup.string()
    .required("Please Enter Last Name")
    .trim()
    .min(2, "Name is too Short!")
    .max(55, "Name is too long!"),

  password: Yup.string()
    .required("Please Enter Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .min(8, "Password must be 8 characters long"),

  email: Yup.string()
    .required("Please Enter Email")
    .email("Please Enter Valid Email"),

  phoneNumber: Yup.string().required("Please Enter Valid Phone Number"),

  showAvatar: Yup.string().nullable(),

  avatar: Yup.mixed()
    .nullable()
    .notRequired()
    .test("fileType", "Only JPG or PNG files are allowed", (value) => {
      if (!value) return true; // Skip validation if no file
      const file = value as File;
      return ["image/jpeg", "image/png"].includes(file.type);
    })
    .test("fileSize", "File size must be less than 1MB", (value) => {
      if (!value) return true; // Skip validation if no file
      const file = value as File;
      return file.size <= 1024 * 1024;
    }),
});

// export const getRegisterValidationSchema = (showAvatar: string | null) => {
//   const isValidAvatarUrl = (() => {
//     try {
//       return !!showAvatar && new URL(showAvatar);
//     } catch {
//       return false;
//     }
//   })();

//   return Yup.object({
//     firstName: Yup.string()
//       .required("Please Enter First Name")
//       .trim()
//       .min(2, "Name is too Short!")
//       .max(55, "Name is too long!"),
//     lastName: Yup.string()
//       .required("Please Enter Last Name")
//       .trim()
//       .min(2, "Name is too Short!")
//       .max(55, "Name is too long!"),
//     password: Yup.string()
//       .required("Please Enter Password")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
//         "Password must contain at least one uppercase letter, one lowercase letter, and one number"
//       )
//       .min(8, "Password must be 8 characters long"),
//     email: Yup.string()
//       .required("Please Enter Email")
//       .email("Please Enter Valid Email"),
//     phoneNumber: Yup.string().required("Please Enter Valid Phone Number"),
//     avatar: isValidAvatarUrl
//       ? Yup.mixed().nullable().notRequired()
//       : Yup.mixed()
//           .optional()
//           .test("fileType", "Only JPG or PNG files are allowed", (value) => {
//             if (!value) return false;
//             const file = value as File;
//             return ["image/jpeg", "image/png"].includes(file.type);
//           })
//           .test("fileSize", "File size must be less than 1MB", (value) => {
//             if (!value) return false;
//             const file = value as File;
//             return file.size <= 1024 * 1024;
//           }),
//   });
// };

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
