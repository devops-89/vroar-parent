import ProfileData from "@/components/Profile/ProfileData";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state: any) => state.user);

  console.log("user", user);

  return (
    <Wrapper>
      {user.isLoading ? (
        <Backdrop open={user?.isLoading} sx={{ zIndex: 999 }}>
          <CircularProgress sx={{ color: COLORS.WHITE }} />
        </Backdrop>
      ) : (
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
      )}
    </Wrapper>
  );
};

export default Profile;
