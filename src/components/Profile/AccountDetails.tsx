import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

const AccountDetails = () => {
  const password = "Pass@1234";
  const maskedPassword = "•".repeat(password.length);
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
        >
          Edit
        </Button>
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
            kunal@gmail.com
          </Typography>
        </Grid>
        <Grid size={6}>
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
