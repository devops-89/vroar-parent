import { AuthenticationController } from "@/assets/api/AuthenticationController";
import { getUserDetails } from "@/assets/apiCalling/user";
import { data } from "@/assets/data";
import CustomBanner from "@/components/CustomBanner";
import { removeActiveStep } from "@/redux/reducers/Stepper";
import { showToast } from "@/redux/reducers/Toast";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { LOGIN_SCHEMA } from "@/utils/types";
import { loginValidationSchema } from "@/utils/validationSchema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      //   console.log("values", values);
      setLoading(true);
      submitHandler(values as LOGIN_SCHEMA);
    },
  });
  const router = useRouter();

  const dispatch = useDispatch();
  const submitHandler = (body: LOGIN_SCHEMA) => {
    AuthenticationController.login(body)
      .then((res) => {
        // console.log("res", res);
        dispatch(
          showToast({
            message: res.data.message,
            variant: TOAST_STATUS.SUCCESS,
          })
        );
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        router.push("/parent/profile");
        getUserDetails({ dispatch });
        dispatch(removeActiveStep());
        setLoading(false);
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

  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <CustomBanner>
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 700,
              fontFamily: nunito.style,
              textAlign: "center",
            }}
          >
            Welcome
          </Typography>
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 700,
              fontFamily: nunito.style,
              color: COLORS.PRIMARY,
              textAlign: "center",
            }}
          >
            Parents/Guardians!
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: nunito.style,
              color: COLORS.TEXT_COLOR,
              textAlign: "center",
              width: 350,
              margin: "auto",
            }}
          >
            Sign in to your existing account to buy or manage your child's
            roadmap subscription{" "}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2} sx={{ px: 4, mt: 2 }}>
              <TextField
                sx={{ ...loginTextField }}
                label="Email"
                id="email"
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                sx={{ ...loginTextField }}
                label="Password"
                id="password"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={showPasswordHandler}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Button
                sx={{
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.WHITE,
                  borderRadius: 4,
                }}
                fullWidth
                type="submit"
              >
                {loading ? (
                  <CircularProgress sx={{ color: COLORS.BLACK }} size={20} />
                ) : (
                  "Submit"
                )}
              </Button>
            </Stack>
          </form>
          <Divider sx={{ mt: 2 }}>
            <Typography
              sx={{
                color: "#262626",
                fontSize: 11,
                fontWeight: 600,
                fontFamily: nunito.style,
              }}
            >
              or Login Via
            </Typography>
          </Divider>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
            mt={2}
          >
            {data.socialIcons.map((val, i) => (
              <IconButton
                sx={{ backgroundColor: "#EEEFF3", borderRadius: 2 }}
                key={i}
              >
                <Image src={val.img} alt="" width={15} />
              </IconButton>
            ))}
          </Stack>
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: nunito.style,
              textAlign: "center",
              mt: 2,
            }}
          >
            Already have an account?{" "}
            <Typography
              component={"span"}
              sx={{
                fontSize: 14,
                fontFamily: nunito.style,
                color: COLORS.PRIMARY,
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              Sign Up
            </Typography>
          </Typography>
        </Box>
      </CustomBanner>
    </div>
  );
};

export default Login;
