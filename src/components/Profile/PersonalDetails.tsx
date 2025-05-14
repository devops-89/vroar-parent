import UpdatePersonalDetails from "@/assets/ModalCalling/userDetails/UpdatePersonalDetails";
import { showModal } from "@/redux/reducers/Modal";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Button, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const PersonalDetails = () => {
  const user = useSelector((state: any) => state.user);
  // console.log("user", user);
  const dispatch = useDispatch();
  const handleEditPersonalDetails = () => {
    dispatch(showModal(<UpdatePersonalDetails />));
  };
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mb: 3 }}
      >
        <Typography
          sx={{ fontSize: 20, fontFamily: nunito.style, fontWeight: 600 }}
        >
          Personal Details
        </Typography>
        <Button
          startIcon={<FaRegEdit />}
          sx={{
            fontSize: 16,
            color: "#262626",
            fontFamily: nunito.style,
            textTransform: "initial",
            fontWeight: 600,
          }}
          onClick={handleEditPersonalDetails}
        >
          Edit
        </Button>
      </Stack>
      <Grid container>
        <Grid size={4}>
          <Typography
            sx={{
              fontFamily: nunito.style,
              fontSize: 16,
              color: COLORS.TEXT_COLOR,
              fontWeight: 500,
            }}
          >
            Full Name
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: nunito.style,
              color: COLORS.BLACK,
              fontWeight: 600,
              mt: 1,
              textTransform: "capitalize",
            }}
          >
            {user?.firstName} {user?.lastName}
          </Typography>
        </Grid>
        <Grid size={4}>
          <Typography
            sx={{
              fontFamily: nunito.style,
              fontSize: 16,
              color: COLORS.TEXT_COLOR,
              fontWeight: 500,
            }}
          >
            Date of Birth
          </Typography>
          {user?.birthDate ? (
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: nunito.style,
                color: COLORS.BLACK,
                fontWeight: 600,
                mt: 1,
              }}
            >
              {moment.unix(user?.birthDate).format("DD-MM-YYYY") || "--"}
            </Typography>
          ) : (
            <Typography>--</Typography>
          )}
        </Grid>
        <Grid size={4}>
          <Typography
            sx={{
              fontFamily: nunito.style,
              fontSize: 16,
              color: COLORS.TEXT_COLOR,
              fontWeight: 500,
            }}
          >
            Gender
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
            {user?.gender || "Not Disclosed"}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalDetails;
