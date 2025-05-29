import { AuthenticationController } from "@/assets/api/AuthenticationController";
import {
  getUserDetails,
  googleCallbackUrl,
  loadGoogleOAuthScript,
  loadGoogleScript,
} from "@/assets/apiCalling/user";
import { data } from "@/assets/data";
import bannerImage from "@/banner/banner-image.png";
import parentBanner from "@/banner/parent-web.png";
import { auth } from "@/lib/firebase";
import {
  addActiveStep,
  removeActiveStep,
  setActiveStep,
} from "@/redux/reducers/Stepper";
import { showToast } from "@/redux/reducers/Toast";
import { setUserDetails } from "@/redux/reducers/User";
import { COLORS, SOCIAL_LOGIN, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import {
  GoogleCredentialResponse,
  GoogleNotification,
  JwtPayload,
} from "@/utils/types";
import { signUpValidationSchema } from "@/utils/validationSchema";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useFormik } from "formik";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

declare global {
  interface Window {
    google: any;
  }
}

interface CustomJwtPayload extends JwtPayload {
  email: string;
}
const Banner = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      setLoading(true);
      handleSubmit(values);
    },
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (body: { email: string }) => {
    AuthenticationController.emailExists(body)
      .then((res) => {
        router.push(`/create-profile?email=${body.email}`);
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

  // social Logins
  const [socialLoading, setSocialLoading] = useState(false);
  // const socialLoginHandler = (type: string) => {
  //   setSocialLoading(true);
  //   if (type === SOCIAL_LOGIN.GOOGLE) {
  //   }
  // };

  // const socialLoginHandler = (type: string) => {
  //   if (type === SOCIAL_LOGIN.GOOGLE && clientId) {
  //     setSocialLoading(true);

  //     window.google.accounts.id.initialize({
  //       client_id: clientId,
  //       scope: "openid email profile",
  //       prompt: "select_account",
  //       ux_mode: "popup",
  //       callback: async (response: any) => {
  //         try {
  //           const idToken = response.credential;

  //           const backendResponse = await AuthenticationController.googleLogin(
  //             idToken
  //           );

  //           // console.log("Backend response:", backendResponse);
  //           const result = backendResponse.data.data;
  //           localStorage.setItem("accessToken", result.accessToken);
  //           localStorage.setItem("refreshToken", result.refreshToken);

  //           const decoded = jwtDecode<CustomJwtPayload>(idToken);
  //           const email = decoded.email;

  //           router.push(`/create-profile?email=${email}`);
  //           getUserDetails({ dispatch });
  //           dispatch(removeActiveStep());
  //         } catch (err: any) {
  //           const message =
  //             (err.response && err.response.data.message) || err.message;
  //           dispatch(showToast({ message, variant: TOAST_STATUS.ERROR }));
  //         } finally {
  //           setSocialLoading(false);
  //         }
  //       },
  //     });

  //     window.google.accounts.id.prompt();
  //   }
  // };

  // const handleGoogleLogin = async () => {
  //   try {
  //     // setSocialLoading(true);
  //     const provider = new GoogleAuthProvider();
  //     const result = await signInWithPopup(auth, provider);

  //     const idToken = await result.user.getIdToken();
  //     const backendResponse = await AuthenticationController.googleLogin(
  //       idToken
  //     );

  //     // const backendResponse =
  //     //   await AuthenticationController.googleSocialLogin();

  //     // const backendData = backendResponse.data.url;
  //     // window.location.href = backendData;
  //     // localStorage.setItem("accessToken", backendResponse.accessToken);
  //     // localStorage.setItem("refreshToken", backendResponse.refreshToken);
  //     console.log("first", backendResponse);

  //     const email = result.user.email;
  //     router.push(`/create-profile?email=${email}`);
  //     getUserDetails({ dispatch });
  //     dispatch(removeActiveStep());
  //   } catch (err: any) {
  //     const message =
  //       (err.response && err.response.data.message) || err.message;
  //     dispatch(showToast({ message, variant: TOAST_STATUS.ERROR }));
  //   } finally {
  //     setSocialLoading(false);
  //   }
  // };

  const handleGoogleLogin = () => {
    AuthenticationController.googleSocialLogin()
      .then((res) => {
        // console.log("res", res);
        const response = res.data.data.url;
        window.location.href = response;
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const socialLoginHandler = async (type: string) => {
    if (type === SOCIAL_LOGIN.GOOGLE) {
      await handleGoogleLogin();
    }
  };
  const [googleReady, setGoogleReady] = useState(false);
  const [rawQueryString, setRawQueryString] = useState("");
  const user = useSelector((state: any) => state.user);
  useEffect(() => {
    const { code, prompt, scope } = router.query;
    if (code && prompt && scope) {
      const queryWithoutQuestionMark = window.location.search.substring(1);
      setRawQueryString(queryWithoutQuestionMark);
      googleCallbackUrl(queryWithoutQuestionMark);
    }
  }, [router.query]);
  

  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage.src})`,
        height: { lg: "100vh", xs: "120vh" },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {socialLoading ? (
        <Backdrop open={socialLoading}>
          <CircularProgress sx={{ color: COLORS.PRIMARY }} />
        </Backdrop>
      ) : (
        <Container>
          <Grid container>
            <Grid size={{ lg: 8, xs: 12 }} margin={"auto"}>
              <Card sx={{ p: 2 }}>
                <Grid container>
                  <Grid size={{ xs: 12, lg: 6 }}>
                    <Image
                      src={parentBanner}
                      alt=""
                      className="img-fluid"
                      style={{ borderRadius: 4 }}
                    />
                  </Grid>

                  <Grid
                    size={{ lg: 6, xs: 12 }}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <form onSubmit={formik.handleSubmit}>
                      <Box sx={{ p: 4 }}>
                        <Typography
                          sx={{
                            fontSize: 28,
                            fontWeight: 770,
                            textAlign: "center",
                            fontFamily: nunito.style,
                          }}
                        >
                          Welcome
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 28,
                            fontWeight: 770,
                            textAlign: "center",
                            fontFamily: nunito.style,
                            color: COLORS.PRIMARY,
                          }}
                        >
                          Parents/Guardians!
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 500,
                            textAlign: "center",
                            fontFamily: nunito.style,
                            color: COLORS.TEXT_COLOR,
                          }}
                        >
                          Sign up to stay connected and support your child's
                          success
                        </Typography>
                        <TextField
                          sx={{ ...loginTextField, mt: 2 }}
                          fullWidth
                          label="Email Id"
                          id="email"
                          onChange={formik.handleChange}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                        <Button
                          sx={{
                            background: COLORS.LINEAR_GRADIENT,
                            borderRadius: 5,
                            color: COLORS.WHITE,
                            textTransform: "initial",
                            fontFamily: nunito.style,
                            mt: 2,
                          }}
                          fullWidth
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <CircularProgress
                              size={20}
                              sx={{ color: COLORS.BLACK }}
                            />
                          ) : (
                            "Sign Up"
                          )}
                        </Button>
                        <Divider sx={{ mt: 2 }}>
                          <Typography
                            sx={{
                              fontSize: 11,
                              fontFamily: nunito.style,
                              color: COLORS.TEXT_COLOR,
                            }}
                          >
                            Or continue with
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
                              sx={{
                                backgroundColor: "#EEEFF3",
                                borderRadius: 2,
                              }}
                              onClick={() => socialLoginHandler(val.label)}
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
                            onClick={() => router.push("/login")}
                          >
                            Sign In
                          </Typography>
                        </Typography>
                      </Box>
                    </form>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default Banner;
