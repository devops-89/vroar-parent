import React from "react";
import footerBanner from "@/homePage/footer_banner.webp";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "@/logo/Logo.png";
import { nunito } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import insta from "@/icons/instagram.webp";
import linkedin from "@/icons/linkedin.webp";
import Link from "next/link";
const Footer = () => {
  const links = [
    {
      label: "Parents",
      url: "/parents",
    },
    {
      label: "Mentors",
      url: "/mentors",
    },
    {
      label: "Companies",
      url: "/companies",
    },
    {
      label: "Pricing",
      url: "/pricing",
    },
    {
      label: "About Us",
      url: "/about-us",
    },
    {
      label: "Book a Call",
      url: "#",
    },
  ];

  const links2 = [
    {
      label: "Support",
      url: "/support",
    },
    {
      label: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      label: "Terms and Conditions",
      url: "/terms-and-conditions",
    },
  ];
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerBanner.src})`,
        height: { lg: "80vh", xs: "100%" },
        backgroundSize: "cover",
        backgroundPosition: "50%",
        position: "relative",
      }}
    >
      <Container>
        <Grid container>
          <Grid size={{ lg: 8, xs: 12 }}>
            <Box sx={{ pt: "100px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { lg: "flex-start", xs: "center" },
                }}
              >
                <Image src={logo} alt="" width={120} />
              </Box>
              <Stack
                direction={{ lg: "row", xs: "column" }}
                alignItems={"center"}
                spacing={4}
                sx={{ mt: 3 }}
                justifyContent={{ lg: "flex-start", xs: "center" }}
              >
                {links.map((val, i) => (
                  <Link href={val.url} className="link">
                    <Typography
                      sx={{
                        color: "#262626",
                        fontSize: 20,
                        fontFamily: nunito.style,
                        textTransform: "capitalize",
                      }}
                    >
                      {val.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
              <Divider sx={{ borderColor: "#b4b4b4", mt: 3 }} />
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={3}
                sx={{ mt: 2 }}
                justifyContent={{ lg: "flex-start", xs: "center" }}
              >
                <Image src={insta} alt="" width={45} />
                <Image src={linkedin} alt="" width={45} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: { lg: "absolute", xs: "inherit" },
            bottom: { lg: 10, xs: 0 },
            width: { lg: "85%", xs: "95%" },
          }}
        >
          <Stack
            direction={{ lg: "row", xs: "column" }}
            alignItems={"center"}
            justifyContent={{ lg: "space-between", xs: "center" }}
            spacing={{ lg: 0, xs: 2 }}
          >
            <Stack
              direction={{ lg: "row", xs: "column" }}
              alignItems={"center"}
              spacing={{ lg: 3, xs: 1 }}
            >
              {links2.map((val, i) => (
                <Link href={val.url} className="link" key={i}>
                  <Typography
                    sx={{
                      color: "#262626",
                      fontSize: 20,
                      fontFamily: nunito.style,
                      textTransform: "capitalize",
                    }}
                  >
                    {val.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
            <Typography
              sx={{ fontFamily: nunito.style, fontSize: 16, fontWeight: 400 }}
            >
              {" "}
              <Typography
                component={"span"}
                sx={{ fontWeight: 700, fontFamily: nunito.style, fontSize: 16 }}
              >
                Everybody Wins LLC.
              </Typography>{" "}
              All Rights Reserved
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
