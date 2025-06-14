import { data } from "@/assets/data";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "@/logo/Logo.png";
import SimpleButton from "./Home/Components/SimpleButton";
const Header = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        // left: "50%",
        // right: "50%",
        // transform: "translateX(50%)",
        width: "100%",
        top: "2rem",
      }}
    >
      <Grid container>
        <Grid size={7} margin={"auto"}>
          <Box
            sx={{
              backgroundColor: COLORS.WHITE,
              borderRadius: "20rem",
              border: "5px solid #fff3f0",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {data.headerLinks1.map((val, i) => (
                <Typography
                  sx={{
                    color: COLORS.TEXT_COLOR,
                    fontFamily: nunito.style,
                    fontSize: 16,
                  }}
                >
                  {val.label}
                </Typography>
              ))}
              <Image src={logo} alt="logo" />
              {data.headerLinks2.map((val, i) => (
                <Typography
                  sx={{
                    color: COLORS.TEXT_COLOR,
                    fontFamily: nunito.style,
                    fontSize: 16,
                  }}
                >
                  {val.label}
                </Typography>
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
