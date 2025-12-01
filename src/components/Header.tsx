import { data } from "@/assets/data";
import logo from "@/logo/Logo.png";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItemButton,
  Popover,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SimpleButton from "./Home/Components/SimpleButton";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "@/redux/reducers/Modal";
import BookaDemo from "@/assets/ModalCalling/website/book-a-demo";
import LogoutModal from "@/assets/ModalCalling/LogoutModal";
const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isStuck, setIsStuck] = useState(false);
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsStuck(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const user = useSelector((state: any) => state.user);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(showModal(<LogoutModal />));
    handleClose();
  };
  return (
    <Box
      sx={{
        position: isStuck ? "fixed" : "absolute",
        width: "100%",
        top: isStuck ? 0 : "1rem",
        left: 0,
        right: 0,
        zIndex: 9999,
        transition: "top 300ms ease",
        px: { xs: 1, sm: 2, md: 0 },
        boxSizing: "border-box",
        margin: "auto",
      }}
    >
      <Grid container>
        <Grid
          size={{ lg: 8 }}
          margin={"auto"}
          sx={{
            transition: "top 300ms ease,",
            backgroundColor: isStuck ? "transparent" : "transparent",
            px: { xs: 0, sm: 1 },
          }}
        >
          <Box
            sx={{
              backgroundColor: isStuck ? COLORS.WHITE : COLORS.WHITE,
              borderRadius: { xs: "40px", sm: "2rem", md: "20rem" },
              border: isStuck ? "5px solid #fff3f0" : "5px solid #fff3f0",
              paddingLeft: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              paddingRight: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              paddingTop: "8px",
              paddingBottom: "8px",
              transition: "transform 300ms ease",
              transform: isStuck ? "translateY(6px)" : "translateY(0)",
              backdropFilter: "blur(10px)",
              width: isStuck ? "100%" : "100%",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              {data.headerLinks1.map((val, i) => {
                const isButton = val.href === "#";
                const content = (
                  <Typography
                    className={
                      router.pathname === val.href ? "active_link" : ""
                    }
                    sx={{
                      color: isStuck ? COLORS.BLACK : COLORS.TEXT_COLOR,
                      fontFamily: nunito.style,
                      fontSize: 16,
                    }}
                  >
                    {val.label}
                  </Typography>
                );
                if (isButton) {
                  return (
                    <a
                      key={i}
                      className="link"
                      onClick={() => dispatch(showModal(<BookaDemo />))}
                      style={{ cursor: "pointer" }}
                    >
                      {content}
                    </a>
                  );
                }
                return (
                  <Link href={val.href} className="link" key={i}>
                    {content}
                  </Link>
                );
              })}
              <Link href={"/"}>
                <Image src={logo} alt="logo" width={100} />
              </Link>
              {data.headerLinks2.map((val, i) => {
                const isButton = val.href === "#";
                const content = (
                  <Typography
                    sx={{
                      color: isStuck ? COLORS.BLACK : COLORS.TEXT_COLOR,
                      fontFamily: nunito.style,
                      fontSize: 16,
                    }}
                    className={
                      router.pathname === val.href ? "active_link" : ""
                    }
                  >
                    {val.label}
                  </Typography>
                );
                if (isButton) {
                  return (
                    <a
                      key={i}
                      className="link"
                      onClick={() => dispatch(showModal(<BookaDemo />))}
                      style={{ cursor: "pointer" }}
                    >
                      {content}
                    </a>
                  );
                }
                return (
                  <Link href={val.href} className="link" key={i}>
                    {content}
                  </Link>
                );
              })}
              {user.isAuthenticated ? (
                <IconButton
                  sx={{ borderRadius: "50%", width: 60, height: 60 }}
                  onClick={handleClick}
                >
                  <Image
                    src={user.avatar}
                    width={50}
                    height={50}
                    alt="avatar"
                    style={{ borderRadius: "50%" }}
                  />
                </IconButton>
              ) : (
                <Link href={"/login"}>
                  <SimpleButton label="Sign In" />
                </Link>
              )}
            </Stack>
          </Box>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ mt: 2 }}
          >
            <List>
              <ListItemButton onClick={handleClose}>
                <Link href={"/parent/profile"} className="link">
                  <Typography
                    sx={{
                      color: COLORS.BLACK,
                      fontFamily: nunito.style,
                      fontSize: 16,
                    }}
                  >
                    Dashboard
                  </Typography>
                </Link>
              </ListItemButton>
              <ListItemButton onClick={handleLogout}>
                <Typography
                  sx={{
                    color: COLORS.BLACK,
                    fontFamily: nunito.style,
                    fontSize: 16,
                  }}
                >
                  Logout
                </Typography>
              </ListItemButton>
            </List>
          </Popover>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
