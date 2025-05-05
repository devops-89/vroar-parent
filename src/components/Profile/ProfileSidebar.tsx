import { sidebarData } from "@/assets/createProfileSidebar";
import profileImage from "@/banner/avatar.png";
import logo from "@/logo/Logo.png";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
const ProfileSidebar = () => {
  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  };
  return (
    <Box
      sx={{
        background: COLORS.SIDEBAR_GRADIENT,
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
          <Image src={profileImage} alt="" width={100} height={100} />
        </Avatar>
        <Typography
          sx={{
            mt: 1,
            fontFamily: nunito.style,
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          Kunal Sharma
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontFamily: nunito.style, color: "#262626" }}
        >
          kunal@gmail.com
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
                      fontSize: 16,
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
    </Box>
  );
};

export default ProfileSidebar;
