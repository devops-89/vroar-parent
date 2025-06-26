import { AuthenticationController } from "@/assets/api/AuthenticationController";
import CustomBanner from "@/components/CustomBanner";
import { showToast } from "@/redux/reducers/Toast";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { forgotPasswordEmailValidation } from "@/utils/validationSchema";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordEmailValidation,
    onSubmit: (values) => {
      //   console.log("values", values);
      forgotPassword(values);
    },
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const forgotPassword = (data: { email: string }) => {
    setLoading(true);
    AuthenticationController.forgotPassword(data)
      .then((res) => {
        // console.log("res", res);
        localStorage.setItem("referenceId", res.data.data.referenceId);
        dispatch(
          showToast({
            open: true,
            message: res.data.message,
            variant: TOAST_STATUS.SUCCESS,
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({
            open: true,
            message: errMessage,
            variant: TOAST_STATUS.ERROR,
          })
        );
        setLoading(false);
      });
  };
  return (
    <Box>
      <CustomBanner>
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontSize: 28,
              textAlign: "center",
              fontWeight: 600,
              fontFamily: nunito.style,
            }}
          >
            Oops Happens.
          </Typography>
          <Typography
            sx={{
              fontSize: 28,
              textAlign: "center",
              color: COLORS.PRIMARY,
              fontWeight: 550,
              fontFamily: nunito.style,
            }}
          >
            Let’s Get You Back In!
          </Typography>
          <Typography
            sx={{
              width: 400,
              fontSize: 16,
              fontFamily: nunito.style,
              color: COLORS.TEXT_COLOR,
              textAlign: "center",
              margin: "auto",
              mt: 2,
            }}
          >
            No worries — just enter your email and we’ll send you a secure
            one-time password (OTP) to verify your identity.
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              sx={{ ...loginTextField, mt: 4 }}
              fullWidth
              label="Email*"
              id="email"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Button
              sx={{
                background: COLORS.LINEAR_GRADIENT,
                mt: 3,
                color: COLORS.WHITE,
                fontFamily: nunito.style,
                fontSize: 15,
                borderRadius: 20,
              }}
              fullWidth
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={20} sx={{ color: COLORS.BLACK }} />
              ) : (
                "Send Otp"
              )}
            </Button>
          </form>
        </Box>
      </CustomBanner>
    </Box>
  );
};

export default ForgotPassword;
