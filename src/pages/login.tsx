import { AuthenticationController } from "@/assets/api/AuthenticationController";
import {
  getUserDetails,
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
      handleLoginClick();
    }
  };

  const [googleReady, setGoogleReady] = useState(false);

  useEffect(() => {
    loadGoogleScript().then(() => {
      setGoogleReady(true);

      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
        });
      }
    });
  }, []);

  const handleCredentialResponse = (response: GoogleCredentialResponse) => {
    const user = jwtDecode(response.credential);

    setLoading(false);

    AuthenticationController.googleLogin(response?.credential)
      .then((res) => {
        // console.log("respone", res);
        const response = res.data.data;
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        router.push("/parent/profile");
        dispatch(
          setUserDetails({ ...user, isLoading: false, isAuthenticated: false })
        );
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  const handleLoginClick = () => {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.prompt(); // triggers the sign-in prompt
      window.google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed()) {
          console.log(
            "Sign-in prompt not displayed:",
            notification.getNotDisplayedReason()
          );
        }
        if (notification.isSkippedMoment()) {
          console.log(
            "Sign-in prompt skipped:",
            notification.getSkippedReason()
          );
        }
      });
      window.google.accounts.id.prompt();
      window.google.accounts.id.renderButton(
        document.getElementById("googleDiv"),
        {
          theme: "outline",
          size: "large",
        }
      );
      // const params = new URLSearchParams({
      //   client_id:
      //     clientId ||
      //     "814443057039-h55fl7pjfabl3b8rgo1fhg7s4jlofale.apps.googleusercontent.com",
      //   redirect_uri: "https://vroar-188a2.firebaseapp.com/__/auth/handler",
      //   response_type: "token",
      //   scope: "openid email profile",
      // });

      // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    } else {
      console.error("Google Identity Services SDK not loaded yet");
    }
  };

  useEffect(() => {
    loadGoogleOAuthScript();
  }, []);

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
                onClick={handleLoginClick}
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
