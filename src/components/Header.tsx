import { data } from "@/assets/data";
import logo from "@/logo/Logo.png";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SimpleButton from "./Home/Components/SimpleButton";
import { Menu } from "@mui/icons-material";
import HeaderSidebar from "./Home/drawer";
const Header = () => {
  const router = useRouter();
  const [isStuck, setIsStuck] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsStuck(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Box
      sx={{
        position: isStuck ? "fixed" : "absolute",
        width: "100%",
        top: isStuck ? 0 : "1rem",
        left: 0,
        right: 0,
        zIndex: 999,
        transition: "top 300ms ease",
        px: { xs: 1, sm: 2, md: 0 },
        boxSizing: "border-box",
      }}
    >
      <Grid container>
        <Grid
          size={{ lg: 8, xs: 12 }}
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
              paddingTop: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              paddingBottom: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              transition: "transform 300ms ease",
              transform: isStuck ? "translateY(6px)" : "translateY(0)",
              backdropFilter: "blur(10px)",
              width: isStuck ? "80%" : "100%",
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
              {data.headerLinks1.map((val, i) => (
                <Link href={val.href} className="link" key={i}>
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
                </Link>
              ))}
              <Link href={"/"}>
                <Image src={logo} alt="logo" width={100} />
              </Link>
              {data.headerLinks2.map((val, i) => (
                <Link href={val.href} className="link">
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
                </Link>
              ))}
              <SimpleButton label="Sign In" />
            </Stack>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                display: { xs: "flex", lg: "none" },
                width: "100%",
                minWidth: 0,
              }}
            >
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="logo"
                  width={80}
                  height={40}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
              <IconButton
                sx={{
                  backgroundColor: COLORS.WHITE,
                  boxShadow: "0px 0px 1px 1px #00000030",
                  flexShrink: 0,
                }}
                onClick={() => setOpen(true)}
              >
                <Menu sx={{ color: COLORS.PRIMARY }} />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <HeaderSidebar open={open} setOpen={setOpen} />
      </Grid>
    </Box>
  );
};

export default Header;
