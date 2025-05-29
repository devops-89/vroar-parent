import InviteDetails from "@/components/Profile/InviteDetails";
import ProfileData from "@/components/Profile/ProfileData";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Backdrop,
  Box,
  CircularProgress,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state: any) => state.user);

  // console.log("user", user);
  const phone = useMediaQuery("(max-width:650px)");

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
              fontSize: 30,
              fontFamily: nunito.style,
              fontWeight: 700,
              mb: 3,
              textAlign: phone ? "center" : "",
            }}
          >
            My Profile
          </Typography>
          <Box>
            <ProfileData />
          </Box>
          <Divider sx={{ mt: 3, mb: 3 }} />
          <Box>
            <InviteDetails />
          </Box>
        </Box>
      )}
    </Wrapper>
  );
};

export default Profile;
