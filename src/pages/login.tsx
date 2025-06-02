import { AuthenticationController } from "@/assets/api/AuthenticationController";
import {
  getUserDetails,
  googleCallbackUrl,
  loadGoogleOAuthScript,
  loadGoogleScript,
} from "@/assets/apiCalling/user";
import { data } from "@/assets/data";
import CustomBanner from "@/components/CustomBanner";
import { removeActiveStep } from "@/redux/reducers/Stepper";
import { showToast } from "@/redux/reducers/Toast";
import { setUserDetails } from "@/redux/reducers/User";
import { COLORS, SOCIAL_LOGIN, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { GoogleCredentialResponse, LOGIN_SCHEMA } from "@/utils/types";
import { loginValidationSchema } from "@/utils/validationSchema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Backdrop,
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
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
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

  const [socialLoading, setSocialLoading] = useState(false);
  const socialLoginHandler = (type: string) => {
    setSocialLoading(true);
    if (type === SOCIAL_LOGIN.GOOGLE) {
      handleGoogleLogin();
    }
  };

  const handleGoogleLogin = () => {
    AuthenticationController.googleSocialLogin()
      .then((res) => {
        const response = res.data.data.url;
        window.location.href = response;
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const [googleLoginLoading, setGoogleLoading] = useState(false);
  useEffect(() => {
    if (!router.isReady) return;

    const { code, scope, authuser, prompt } = router.query;

    if (code && scope && authuser && prompt) {
      const queryParams = `code=${code}&scope=${scope}&authuser=${authuser}&prompt=${prompt}`;
      setGoogleLoading(true);
      googleCallbackUrl({
        code: queryParams,
        router,
        setLoading: setGoogleLoading,
        dispatch: dispatch,
      });
    }
  }, [router.isReady, router.query]);

  return (
    <div>
      <Backdrop open={googleLoginLoading} sx={{ zIndex: 10000 }}>
        <CircularProgress sx={{ color: COLORS.PRIMARY }} />
      </Backdrop>
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
                onClick={handleGoogleLogin}
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
            Doesn't have an account?{" "}
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
