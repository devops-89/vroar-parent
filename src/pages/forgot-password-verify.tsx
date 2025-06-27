import { AuthenticationController } from "@/assets/api/AuthenticationController";
import CustomBanner from "@/components/CustomBanner";
import { showToast } from "@/redux/reducers/Toast";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ForgotPasswordVerify = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const verifyOtp = () => {
    if (otp === "") {
      dispatch(
        showToast({
          open: true,
          message: "OTP is required! ",
          variant: TOAST_STATUS.ERROR,
        })
      );
    } else {
      setLoading(true);
      let body = {
        referenceId: localStorage.getItem("referenceId"),
        password: password,
        otp: otp,
      };
      AuthenticationController.verifyForgotPassword(body)
        .then((res) => {
          // console.log("res", res);
          dispatch(
            showToast({
              open: true,
              message: res.data.message,
              variant: TOAST_STATUS.SUCCESS,
            })
          );
          setLoading(false);
          router.push("/login");
        })
        .catch((err) => {
          // console.log("err", err);
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
    }
  };
  const [resendLoading, setResendLoading] = useState(false);
  const resendOtp = () => {
    let body = {
      referenceId: localStorage.getItem("referenceId"),
    };
    setResendLoading(true);
    AuthenticationController.resendOtp(body)
      .then((res) => {
        console.log("res", res);
        setResendLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setResendLoading(false);
      });
  };
  return (
    <Box>
      <CustomBanner>
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontSize: 28,
              fontFamily: nunito.style,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Enter
          </Typography>
          <Typography
            sx={{
              fontSize: 28,
              fontFamily: nunito.style,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Verification{" "}
            <Typography
              component={"span"}
              sx={{
                fontSize: 28,
                fontFamily: nunito.style,
                fontWeight: 700,
                color: COLORS.PRIMARY,
              }}
            >
              Code{" "}
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: nunito.style,
              textAlign: "center",
              fontWeight: 400,
              width: 200,
              margin: "0 auto",
            }}
          >
            We've sent a six-digit code to your email address
          </Typography>
          <Box sx={{ mt: 2, px: 2 }}>
            <MuiOtpInput
              length={6}
              sx={{
                ...loginTextField,
                "& .MuiOtpInput-TextField": {
                  width: 50,
                  height: 50,
                  margin: "auto",
                },
                "&.MuiOtpInput-Box": {
                  justifyContent: "center",
                  gap: "10px",
                },
              }}
              autoFocus={true}
              onChange={setOtp}
              value={otp}
            />

            <TextField
              sx={{ ...loginTextField, mt: 2 }}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button
              sx={{
                background: COLORS.LINEAR_GRADIENT,
                fontSize: 15,
                fontFamily: nunito.style,
                color: COLORS.WHITE,
                mt: 2,
                borderRadius: 20,
              }}
              fullWidth
              onClick={verifyOtp}
            >
              {loading ? (
                <CircularProgress sx={{ color: COLORS.BLACK }} size={20} />
              ) : (
                "Verify"
              )}
            </Button>
            {/* <Button
              sx={{
                background: COLORS.TRANSPARENT,
                fontSize: 15,
                fontFamily: nunito.style,
                color: COLORS.PRIMARY,
                mt: 2,
                borderRadius: 20,
                border: `1px solid ${COLORS.PRIMARY}`,
              }}
              fullWidth
              onClick={resendOtp}
            >
              {resendLoading ? (
                <CircularProgress sx={{ color: COLORS.BLACK }} size={20} />
              ) : (
                "Resend OTP"
              )}
            </Button> */}
          </Box>
        </Box>
      </CustomBanner>
    </Box>
  );
};

export default ForgotPasswordVerify;
