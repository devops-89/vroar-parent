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
const Header = () => {
  const router = useRouter();
  const [isStuck, setIsStuck] = useState(false);

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
        zIndex: 99999,
        transition: "top 300ms ease",
      }}
    >
      <Grid container>
        <Grid
          size={{ lg: 8, xs: 12 }}
          margin={"auto"}
          sx={{
            transition: "top 300ms ease,",
            backgroundColor: isStuck ? "transparent" : "transparent",
          }}
        >
          <Box
            sx={{
              backgroundColor: isStuck ? COLORS.WHITE : COLORS.WHITE,
              borderRadius: "20rem",
              border: isStuck ? "5px solid #fff3f0" : "5px solid #fff3f0",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              transition: "transform 300ms ease",
              transform: isStuck ? "translateY(6px)" : "translateY(0)",
              backdropFilter: "blur(10px)",
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
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              <Link href={"/"}>
                <Image src={logo} alt="logo" width={100} />
              </Link>
              <IconButton
                sx={{
                  backgroundColor: COLORS.WHITE,
                  boxShadow: "0px 0px 1px 1px #00000030",
                }}
              >
                <Menu sx={{ color: COLORS.PRIMARY }} />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
