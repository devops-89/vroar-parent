import camera from "@/icons/Layer_1.png";
import {
  COLORS,
  MEDIA_LIBRARY_TYPE,
  TOAST_STATUS,
  USER_TYPE,
} from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useFormik } from "formik";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { AuthenticationController } from "@/assets/api/AuthenticationController";
import { UserController } from "@/assets/api/UserController";
import { addActiveStep } from "@/redux/reducers/Stepper";
import { showToast } from "@/redux/reducers/Toast";
import { isValidURL } from "@/utils/regex";
import { MEDIA_UPLOAD, USER_REGISTER } from "@/utils/types";
import { getRegisterValidationSchema } from "@/utils/validationSchema";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
const Step1Form = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [showAvatar, setShowAvatar] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const router = useRouter();
  const { email } = router.query;
  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  const dispatch = useDispatch();

  const mobileQuery = useMediaQuery("(max-width:600px)");
  const user = useSelector((state: any) => state.user);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: email,
      countryCode: "",
      phoneNumber: "",
      avatar: null,
      role: USER_TYPE.PARENT,
    },
    validationSchema: getRegisterValidationSchema(showAvatar),
    onSubmit: (values) => {
      setLoading(true);
      const body = {
        mediaFile: values?.avatar,
        mediaLibraryType: MEDIA_LIBRARY_TYPE.PROFILE,
      };

      const registerBody: USER_REGISTER = {
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        email: (email || formik.values.email) as string,
        role: USER_TYPE.PARENT,
        password: formik.values.password,
        phoneNo: formik.values.phoneNumber,
        avatar: showAvatar,
        countryCode: formik.values.countryCode,
      };

      const isUserValid =
        user?.isAuthenticated === true &&
        Object.keys(user).length > 0 &&
        Object.values(user).some(
          (value) => value !== null && value !== undefined
        );

      if (showAvatar && body.mediaFile !== null) {
        if (!isValidURL(body.mediaFile)) {
          uploadMedia(body as MEDIA_UPLOAD);
        } else {
          if (!isUserValid) {
            registerUser(registerBody);
          } else {
            const { email, avatar, ...updateBody } = registerBody;
            if (avatar) {
              updateProfile({ ...updateBody, avatar });
            } else {
              updateProfile(updateBody);
            }
          }
        }
      } else {
        if (!isUserValid) {
          registerUser(registerBody);
        } else {
          const { email, avatar, ...updateBody } = registerBody;
          if (avatar) {
            updateProfile({ ...updateBody, avatar });
          } else {
            updateProfile(updateBody);
          }
        }
      }
    },
  });

  const updateProfile = (body: any) => {
    // console.log("first", body);
    UserController.updateProfile(body)
      .then((res) => {
        // console.log("res", res.data.data);
        setLoading(false);
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        localStorage.setItem("group", res.data.data.group);
        router.push("/plans");
        dispatch(addActiveStep({ path: "/plans" }));
      })
      .catch((err) => {
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
        setLoading(false);
      });
  };

  const uploadMedia = (body: MEDIA_UPLOAD) => {
    UserController.mediaUpload(body)
      .then((res) => {
        const response = res.data.data;
        if (response) {
          const registerBody: USER_REGISTER = {
            firstName: formik.values.firstName,
            lastName: formik.values.lastName,
            email: (email || formik.values.email) as string,
            role: USER_TYPE.PARENT,
            password: formik.values.password,
            phoneNo: formik.values.phoneNumber,
            avatar: response?.filePath,
            countryCode: formik.values.countryCode,
          };

          // Check if user is authenticated
          const isUserValid =
            user?.isAuthenticated === true &&
            Object.keys(user).length > 0 &&
            Object.values(user).some(
              (value) => value !== null && value !== undefined
            );

          if (!isUserValid) {
            registerUser(registerBody);
          } else {
            const { email, avatar, ...updateBody } = registerBody;
            if (avatar) {
              updateProfile({ ...updateBody, avatar });
            } else {
              updateProfile(updateBody);
            }
          }
        }
      })
      .catch((err) => {
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
        setLoading(false);
      });
  };
  const registerUser = (body: USER_REGISTER) => {
    AuthenticationController.register(body)
      .then((res) => {
        dispatch(
          showToast({
            message: res.data.message,
            variant: TOAST_STATUS.SUCCESS,
          })
        );
        localStorage.setItem("referenceId", res.data.data.referenceId);
        setLoading(false);
        router.push(`/verify-otp?email=${body.email}`);
      })
      .catch((err) => {
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(showToast({ message: errMessage, variant: "error" }));
        setLoading(false);
      });
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setShowAvatar(url);
      formik.setFieldValue("avatar", file);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Add function to split full name
  const splitFullName = (fullName: string) => {
    if (!fullName) return { firstName: "", lastName: "" };
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    return { firstName, lastName };
  };

  const [phone, setPhone] = useState<string>("");
  const handleChangePhoneNumber = (
    value: string,
    countryData: MuiTelInputInfo
  ) => {
    setPhone(value);
    const validPhone = matchIsValidTel(value);

    formik.setFieldTouched("phoneNumber", true, false);

    if (validPhone && countryData?.nationalNumber) {
      formik.setFieldValue("phoneNumber", countryData.nationalNumber);
      formik.setFieldValue("countryCode", countryData.countryCallingCode);
      formik.setFieldError("phoneNumber", undefined);
    } else {
      formik.setFieldValue("phoneNumber", "");
      formik.setFieldValue("countryCode", "");
      formik.setFieldError("phoneNumber", "Please enter a valid phone number");
    }
  };

  useEffect(() => {
    if (email) {
      formik.setFieldValue("email", email);
    }
  }, [router.query]);

  useEffect(() => {
    if (user) {
      // Split the full name that comes in firstName field
      const { firstName, lastName } = splitFullName(user?.firstName);
      formik.setFieldValue("firstName", firstName);
      formik.setFieldValue("lastName", lastName);
      formik.setFieldValue("avatar", user?.avatar);
      setShowAvatar(user?.avatar);
    }
  }, [user]);

  // console.log("first",formik.errors.avatar)
  return (
    <Box sx={{ p: 5, borderRadius: 4 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{ textAlign: "center" }}>
          {mobileQuery && (
            <Grid size={6} sx={{ margin: "auto" }}>
              <IconButton
                sx={{
                  backgroundColor: "#9E9E9E",
                  width: 180,
                  height: 180,
                  ":hover": {
                    backgroundColor: "#9E9E9E",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={handleClick}
              >
                {showAvatar ? (
                  <Box sx={{ position: "relative", width: 180, height: 180 }}>
                    <Image
                      src={showAvatar}
                      alt=""
                      width={180}
                      height={180}
                      style={{ borderRadius: 100 }}
                    />
                    <input
                      type="file"
                      ref={ref}
                      hidden
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Box>
                ) : (
                  <Box>
                    <Image src={camera} alt="" width={40} />
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: nunito.style,
                        color: COLORS.WHITE,
                      }}
                    >
                      Upload photo
                    </Typography>
                    <input
                      type="file"
                      ref={ref}
                      hidden
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Box>
                )}
              </IconButton>
              {/* {formik.touched.avatar && Boolean(formik.errors.avatar) && (
                <FormHelperText
                  sx={{ textAlign: "center", color: COLORS.DANGER }}
                >
                  {formik.errors.avatar}
                </FormHelperText>
              )} */}
            </Grid>
          )}
        </Grid>

        <Typography
          sx={{
            fontSize: 18,
            color: COLORS.BLACK,
            fontFamily: nunito.style,
            fontWeight: 600,
            mb: 2,
          }}
        >
          Name
        </Typography>
        <Grid container alignItems={"center"} spacing={6}>
          <Grid size={{ lg: 8, xs: 12 }}>
            <Stack spacing={3}>
              <TextField
                sx={{ ...loginTextField }}
                label="First Name"
                id="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                sx={{ ...loginTextField }}
                label="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                id="lastName"
              />
            </Stack>
          </Grid>
          {!mobileQuery && (
            <Grid size={4}>
              <IconButton
                sx={{
                  backgroundColor: "#9E9E9E",
                  width: 180,
                  height: 180,
                  ":hover": {
                    backgroundColor: "#9E9E9E",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={handleClick}
              >
                {showAvatar ? (
                  <Box sx={{ position: "relative", width: 180, height: 180 }}>
                    <Image
                      src={showAvatar}
                      alt=""
                      width={180}
                      height={180}
                      style={{ borderRadius: 100 }}
                    />
                    <input
                      type="file"
                      ref={ref}
                      hidden
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Box>
                ) : (
                  <Box>
                    <Image src={camera} alt="" width={40} />
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontFamily: nunito.style,
                        color: COLORS.WHITE,
                      }}
                    >
                      Upload photo
                    </Typography>
                    <input
                      type="file"
                      ref={ref}
                      hidden
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </Box>
                )}
              </IconButton>
              {/* {Boolean(formik.errors.avatar) && ( */}
              <FormHelperText
                sx={{ textAlign: "center", color: COLORS.DANGER }}
              >
                {formik.errors.avatar}
              </FormHelperText>
              {/* )} */}
            </Grid>
          )}
        </Grid>

        <Typography
          sx={{
            fontSize: 18,
            color: COLORS.BLACK,
            fontFamily: nunito.style,
            fontWeight: 600,
            mt: 2,
          }}
        >
          Account Security
        </Typography>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField
            sx={{ ...loginTextField }}
            label="Enter Password"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Stack>
        <Grid container sx={{ mt: 4 }} alignItems={"center"} spacing={6}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: 18,
                color: COLORS.BLACK,
                fontFamily: nunito.style,
                fontWeight: 600,
                mb: 1,
              }}
            >
              Email Address
            </Typography>
            <TextField
              sx={{ ...loginTextField, mt: 1 }}
              label="Enter Email Address"
              fullWidth
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              focused={Boolean(formik.values.email)}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: 18,
                color: COLORS.BLACK,
                fontFamily: nunito.style,
                fontWeight: 600,
                mb: 1,
              }}
            >
              Phone Number
            </Typography>
            <MuiTelInput
              defaultCountry="US"
              sx={{ ...loginTextField }}
              fullWidth
              onChange={handleChangePhoneNumber}
              value={phone}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "end", mt: 2 }}>
          <Button
            sx={{
              background: COLORS.LINEAR_GRADIENT,
              width: 150,
              borderRadius: 4,
              color: COLORS.WHITE,
            }}
            type="submit"
          >
            {loading ? (
              <CircularProgress size={20} sx={{ color: COLORS.BLACK }} />
            ) : (
              "Next"
            )}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Step1Form;
