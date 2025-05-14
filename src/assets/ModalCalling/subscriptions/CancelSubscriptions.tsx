import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import dangerIcon from "@/icons/danger.png";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { useDispatch } from "react-redux";
import { hideModal } from "@/redux/reducers/Modal";
const CancelSubscriptions = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(hideModal());
  };
  return (
    <Box sx={{ width: 500 }}>
      <Box
        sx={{
          backgroundColor: "rgba(237, 143, 120, 0.12)",
          width: "150px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 171, 151, 0.16)",
            width: "130px",
            height: "130px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <Box
            sx={{
              background: COLORS.LINEAR_GRADIENT,
              borderRadius: "50%",
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Image src={dangerIcon} alt="" />
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: 25,
          fontWeight: 700,
          fontFamily: nunito.style,
          textAlign: "center",
          mt: 2,
        }}
      >
        Are you sure you want to cancel your subscription?{" "}
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          color: COLORS.TEXT_COLOR,
          fontFamily: nunito.style,
          textAlign: "center",
          mt: 2,
        }}
      >
        Your access will remain active until{" "}
        <Typography
          sx={{ fontSize: 20, color: COLORS.PRIMARY, fontFamily: nunito.style }}
          component={"span"}
        >
          30 June 2025
        </Typography>{" "}
        , but the plan will not renew automatically
      </Typography>
      <Stack spacing={2} mt={2}>
        <Button
          sx={{
            background: COLORS.LINEAR_GRADIENT,
            color: COLORS.WHITE,
            textTransform: "initial",
            fontFamily: nunito.style,
            fontSize: 20,
            borderRadius: 8,
          }}
          onClick={closeModal}
        >
          No, Go Back
        </Button>
        <Button
          sx={{
            background: COLORS.TRANSPARENT,
            color: COLORS.PRIMARY,
            textTransform: "initial",
            fontFamily: nunito.style,
            fontSize: 20,
            borderRadius: 8,
            border: `1px solid ${COLORS.PRIMARY}`,
          }}
        >
          Yes, Cancel Subscription
        </Button>
      </Stack>
    </Box>
  );
};

export default CancelSubscriptions;
