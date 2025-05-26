import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

const ContactDetails = () => {
  const user = useSelector((state: any) => state.user);

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
          Contact Details
        </Typography>
        {/* <Button
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
        </Button> */}
      </Stack>
      <Grid container sx={{ mt: 2 }}>
        <Grid size={6}>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: nunito.style,
              fontWeight: 500,
              color: COLORS.TEXT_COLOR,
            }}
          >
            Phone Number
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
            +{user.countryCode} {user?.phoneNo}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactDetails;
