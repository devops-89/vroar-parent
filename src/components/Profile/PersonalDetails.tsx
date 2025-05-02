import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

const PersonalDetails = () => {
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
            }}
          >
            Kunal Sharma
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
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: nunito.style,
              color: COLORS.BLACK,
              fontWeight: 600,
              mt: 1,
            }}
          >
            12/11/2001
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
            Male
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalDetails;
