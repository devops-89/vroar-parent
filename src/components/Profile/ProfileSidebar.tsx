import { AuthenticationController } from "@/assets/api/AuthenticationController";
import { sidebarData } from "@/assets/createProfileSidebar";
import LogoutModal from "@/assets/ModalCalling/LogoutModal";
import logo from "@/logo/Logo.png";
import { showModal } from "@/redux/reducers/Modal";
import { showToast } from "@/redux/reducers/Toast";
import { removeUserDetails } from "@/redux/reducers/User";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProfileSidebar = () => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  };
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState(false);
  // const handleLogout = () => {
  //   AuthenticationController.logout()
  //     .then((res) => {
  //       dispatch(
  //         showToast({
  //           message: res.data.message,
  //           variant: TOAST_STATUS.SUCCESS,
  //         })
  //       );
  //       localStorage.removeItem("accessToken");
  //       localStorage.removeItem("refreshToken");
  //       router.push("/");
  //       dispatch(removeUserDetails());
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       dispatch(
  //         showToast({
  //           message: "Logout Successfully",
  //           variant: TOAST_STATUS.SUCCESS,
  //         })
  //       );
  //       localStorage.removeItem("accessToken");
  //       localStorage.removeItem("refreshToken");
  //       router.push("/");
  //       dispatch(removeUserDetails());
  //       setLoading(false);
  //     });
  // };

  const handleLogout = () => {
    dispatch(showModal(<LogoutModal />));
  };
  return loading ? (
    <Backdrop open={loading}>
      <CircularProgress sx={{ color: COLORS.WHITE }} />
    </Backdrop>
  ) : (
    <Box
      sx={{
        backgroundColor: "rgba(255, 168, 147, 1)",
        height: "100vh",
        width: 300,
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Image src={logo} alt="" />
      </Box>
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Avatar sx={{ width: 100, height: 100, margin: "auto" }}>
          <Image src={user?.avatar} alt="" width={100} height={100} />
        </Avatar>
        <Typography
          sx={{
            mt: 1,
            fontFamily: nunito.style,
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          {user?.firstName} {user?.lastName}
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontFamily: nunito.style, color: "#262626" }}
        >
          {user?.email}
        </Typography>
      </Box>
      <Box sx={{ mt: 5, p: 4, textAlign: "center" }}>
        <List>
          {sidebarData.map((val, i) => (
            <ListItemButton
              key={i}
              sx={{
                justifyContent: "center",
                color: router.pathname === val.url ? COLORS.PRIMARY : "#737373",
                backgroundColor:
                  router.pathname === val.url
                    ? COLORS.WHITE
                    : COLORS.TRANSPARENT,
                borderRadius: 10,
                boxShadow:
                  router.pathname === val.url
                    ? "0px 0px 4px 4px rgba(0,0,0,0.10)"
                    : "none",
                ":hover": {
                  color:
                    router.pathname === val.url ? COLORS.PRIMARY : "#737373",
                  backgroundColor:
                    router.pathname === val.url
                      ? COLORS.WHITE
                      : COLORS.TRANSPARENT,
                },
              }}
              onClick={() => handleRouter(val.url)}
            >
              <ListItemAvatar sx={{ minWidth: 40 }}>
                <val.icon />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontFamily: nunito.style,
                      fontSize: 20,
                      fontWeight: 550,
                    }}
                  >
                    {val.label}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          px: 4,
          position: "absolute",
          bottom: 50,
          width: "100%",
          textAlign: "start",
        }}
      >
        {/* <Divider sx={{ borderColor: "#FB953340", borderWidth: "1.5px" }} /> */}
        <Button
          startIcon={<Logout fontSize="large" />}
          sx={{
            fontSize: 20,
            fontFamily: nunito.style,
            color: COLORS.BLACK,
            textTransform: "initial",
            ":hover": {
              backgroundColor: COLORS.WHITE,
              borderRadius: 8,
              width: "100%",
              boxShadow: "0px 0px 4px 4px rgba(0,0,0,0.10)",
            },
            textAlign: "start",
            borderRadius: 8,
            transition: "0.5s ease all",
            justifyContent: "flex-start",
            px: 4,
          }}
          onClick={handleLogout}
          fullWidth
        >
          Log out
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSidebar;
