import { COLORS } from "@/utils/enum";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const BecomeAMentor = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography sx={{ fontSize: 20, fontFamily: "gomenasans" }}>
          Ready to{" "}
          <Typography sx={{ color: COLORS.PRIMARY }}>inspire</Typography> a
          young mind?
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              backgroundColor: "#ffc935",
              padding: "12px 16px",
              borderRadius: "12px",
              boxShadow:
                "0 1.61px 4.84px #00000029,0 8px 8px #00000012,0 19.9px 14px #0000000a,0 35.7px 14.04px #00000003",
            }}
          >
            Mentor
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default BecomeAMentor;
