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
        height: "80vh",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        position: "relative",
      }}
    >
      <Container>
        <Grid container>
          <Grid size={8}>
            <Box sx={{ pt: "100px" }}>
              <Image src={logo} alt="" width={120} />
              <Stack
                direction="row"
                alignItems={"center"}
                spacing={4}
                sx={{ mt: 3 }}
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
              >
                <Image src={insta} alt="" width={45} />
                <Image src={linkedin} alt="" width={45} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ position: "absolute", bottom: 10,width:"85%" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
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
