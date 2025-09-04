import { data } from "@/assets/data";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "@/logo/Logo.png";
import SimpleButton from "./Home/Components/SimpleButton";
import Link from "next/link";
import currentLink from "@/icons/current-link.avif";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "absolute",
        // left: "50%",
        // right: "50%",
        // transform: "translateX(50%)",
        width: "100%",
        top: "2rem",
        zIndex: 999,
      }}
    >
      <Grid container>
        <Grid size={8} margin={"auto"}>
          <Box
            sx={{
              backgroundColor: COLORS.WHITE,
              borderRadius: "20rem",
              border: "5px solid #fff3f0",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {data.headerLinks1.map((val, i) => (
                <Link href={val.href} className="link" key={i}>
                  <Typography
                    className={
                      router.pathname === val.href ? "active_link" : ""
                    }
                    sx={{
                      color: COLORS.TEXT_COLOR,
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
                      color: COLORS.TEXT_COLOR,
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
