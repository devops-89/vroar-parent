import ProfileData from "@/components/Profile/ProfileData";
import Wrapper from "@/components/Wrapper";
import { nunito } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Wrapper>
      <Box sx={{ p: 4 }}>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: nunito.style,
            fontWeight: 700,
            mb: 3,
          }}
        >
          My Profile
        </Typography>
        <Box>
          <ProfileData />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Profile;
