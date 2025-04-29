import CustomBanner from "@/components/CustomBanner";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito, roboto } from "@/utils/fonts";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { loginTextField } from "@/utils/styles";
import { AuthenticationController } from "@/assets/api/AuthenticationController";
import { useDispatch } from "react-redux";
import { showToast } from "@/redux/reducers/Toast";
import Loading from "react-loading";
import { addActiveStep } from "@/redux/reducers/Stepper";

const VerifyOtp = () => {
  const router = useRouter();
  const { email } = router.query;
  const [otp, setOtp] = useState<string>("");
  const handleChange = (value: string) => {
    setOtp(value);
  };
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const verifyValidOtp = () => {
    if (otp === "") {
      dispatch(
        showToast({
          variant: TOAST_STATUS.ERROR,
          message: "Please Enter OTP",
        })
      );
      return;
    }
    const body = {
      referenceId: localStorage.getItem("referenceId"),
      otp: otp,
    };
    setLoading(true);
    router.push("/plans");
    AuthenticationController.verifyOtp(body)
      .then((res) => {
        dispatch(
          showToast({
            variant: TOAST_STATUS.SUCCESS,
            message: res.data.message,
          })
        );
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        dispatch(addActiveStep());
        router.push("/plans");
        setLoading(false);
      })
      .catch((err) => {
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ variant: TOAST_STATUS.ERROR, message: errMessage })
        );
        setLoading(false);
      });
  };

  const [timer, setTimer] = useState(60);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0 && disabled) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      setDisabled(false);
    }
  }, [timer, disabled]);

  return (
    <div>
      <CustomBanner>
        <Box sx={{ p: 4 }}>
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
            We've sent a six-digit code to {email}
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
              value={otp}
              onChange={handleChange}
              autoFocus={true}
            />
          </Box>
          <Box textAlign={"center"} sx={{ mt: 2 }}>
            <Button
              sx={{
                background: COLORS.LINEAR_GRADIENT,
                color: COLORS.WHITE,
                borderRadius: 4,
                fontFamily: nunito.style,
              }}
              fullWidth
              onClick={verifyValidOtp}
            >
              {loading ? (
                <CircularProgress sx={{ color: COLORS.WHITE }} size={20} />
              ) : (
                "Verify Email"
              )}
            </Button>
          </Box>
          <Box textAlign={"center"} sx={{ mt: 2 }}>
            <Button
              sx={{
                backgroundColor: COLORS.TRANSPARENT,
                color: COLORS.PRIMARY,
                borderRadius: 4,
                fontFamily: nunito.style,
                ":disabled": {
                  background: "#f3f3f3",
                  color: "#A6A6A6",
                  border: "none",
                },
                border: `1px solid ${COLORS.PRIMARY}`,
              }}
              fullWidth
              disabled={disabled}
            >
              {timer > 0 ? `Resend OTP in ${timer} seconds` : "Resend OTP"}
            </Button>
          </Box>
        </Box>
      </CustomBanner>
    </div>
  );
};

export default VerifyOtp;
