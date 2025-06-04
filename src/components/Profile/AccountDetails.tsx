import UpdateAccountDetails from "@/assets/ModalCalling/userDetails/UpdateAccountDetails";
import { showModal } from "@/redux/reducers/Modal";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const AccountDetails = () => {
  const user = useSelector((state: any) => state.user);
  const password = user?.password || "";
  const maskedPassword = "•".repeat(password.length);

  const dispatch = useDispatch();
  const handleEditPersonalDetails = () => {
    dispatch(showModal(<UpdateAccountDetails />));
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mt: 2 }}
      >
        <Typography
          sx={{ fontSize: 20, fontFamily: nunito.style, fontWeight: 600 }}
        >
          Address
        </Typography>
        <Button
          startIcon={<FaRegEdit />}
          sx={{
            fontSize: 16,
            color: COLORS.BLACK,
            fontFamily: nunito.style,
            textTransform: "initial",
            fontWeight: 600,
          }}
          onClick={handleEditPersonalDetails}
        >
          Edit
        </Button>
      </Stack>
      <Grid container sx={{ mt: 2 }} spacing={3}>
        <Grid size={{ lg: 6, xs: 12 }}>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: nunito.style,
              fontWeight: 500,
              color: COLORS.TEXT_COLOR,
            }}
          >
            Email Address
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: nunito.style,
              color: COLORS.BLACK,
              fontWeight: 600,
              mt: 1,
            }}
          >
            {user?.email}
          </Typography>
        </Grid>
        <Grid size={{ lg: 6, xs: 12 }}>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: nunito.style,
              fontWeight: 500,
              color: COLORS.TEXT_COLOR,
            }}
          >
            Password
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: nunito.style,
              color: COLORS.BLACK,
              fontWeight: 600,
              mt: 1,
            }}
          >
            {maskedPassword}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountDetails;
