import CustomBanner from "@/components/CustomBanner";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { Box, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import React from "react";

const ForgotPasswordVerify = () => {
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
            />
          </Box>
        </Box>
      </CustomBanner>
    </Box>
  );
};

export default ForgotPasswordVerify;
