import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import logoutIcon from "@/icons/logout.png";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { useDispatch } from "react-redux";
import { hideModal } from "@/redux/reducers/Modal";
import { AuthenticationController } from "../api/AuthenticationController";
import { showToast } from "@/redux/reducers/Toast";
import { useRouter } from "next/router";
import { removeUserDetails } from "@/redux/reducers/User";
import Loading from "react-loading";
const LogoutModal = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(hideModal());
  };
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const logoutUser = () => {
    setLoading(true);
    AuthenticationController.logout()
      .then((res) => {
        dispatch(
          showToast({
            message: res.data.message,
            variant: TOAST_STATUS.SUCCESS,
          })
        );
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/");
        dispatch(removeUserDetails());
        setLoading(false);
        closeModal();
      })
      .catch((err) => {
        dispatch(
          showToast({
            message: "Logout Successfully",
            variant: TOAST_STATUS.SUCCESS,
          })
        );
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/");
        setLoading(false);
        closeModal();
      });
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "rgba(237, 143, 120, 0.12)",
          width: 150,
          height: 150,
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
            width: 130,
            height: 130,
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
            }}
          >
            <Image src={logoutIcon} alt="" />
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: 24,
          fontFamily: nunito.style,
          color: COLORS.BLACK,
          textAlign: "center",
          mt: 2,
          fontWeight: 700,
        }}
      >
        Oh no, you’re logging out!{" "}
      </Typography>
      <Typography
        sx={{
          fontSize: 24,
          fontFamily: nunito.style,
          color: COLORS.BLACK,
          textAlign: "center",
          mt: 1,
          fontWeight: 700,
        }}
      >
        Are you sure?
      </Typography>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Button
          sx={{
            background: COLORS.LINEAR_GRADIENT,
            color: COLORS.WHITE,
            fontWeight: 800,
            fontSize: 18,
            borderRadius: 8,
            textTransform: "initial",
          }}
          onClick={closeModal}
        >
          No, Go Back
        </Button>
        <Button
          sx={{
            background: COLORS.TRANSPARENT,
            color: COLORS.PRIMARY,
            fontWeight: 800,
            fontSize: 18,
            border: `1px solid ${COLORS.PRIMARY}`,
            borderRadius: 8,
            textTransform: "initial",
          }}
          onClick={logoutUser}
        >
          {loading ? (
            <CircularProgress sx={{ color: COLORS.PRIMARY }} size={30} />
          ) : (
            "Yes, Log out"
          )}
        </Button>
      </Stack>
    </Box>
  );
};

export default LogoutModal;
