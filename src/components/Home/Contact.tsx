import {
  Box,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import contact_banner from "@/homePage/contact/contact_banner.avif";
import Badge from "./Components/Badge";
import { COLORS } from "@/utils/enum";
import { Mail } from "@mui/icons-material";
import { loginTextField } from "@/utils/styles";
import ButtonWithIcon from "./Components/ButtonWithIcon";
const Contact = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${contact_banner.src})`,
        height: { lg: "100vh", xs: "90vh" },
        backgroundPosition: "50% 100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { lg: "", xs: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ lg: 0, xs: 5 }}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Badge
              label="Get in touch"
              width={120}
              sx={{ margin: { lg: "", xs: "auto" } }}
            />
            <Typography
              sx={{
                fontSize: { lg: 64, xs: 36 },
                fontFamily: "gomenasana,sans-serif",
                fontWeight: 600,
                textAlign: { lg: "start", xs: "center" },
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 16, xs: 14 },
                fontFamily: "gomenasana,sans-serif",
                width: 400,
                fontWeight: 500,
                textAlign: { lg: "start", xs: "center" },
              }}
            >
              Connect with peers, mentors, and families to share experiences and
              thrive.
            </Typography>
            <Stack
              direction={{ lg: "row", xs: "column" }}
              alignItems={"center"}
              justifyContent={"flex-start"}
              spacing={3}
              sx={{ mt: 2 }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: COLORS.PRIMARY,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.WHITE,
                }}
              >
                <Mail />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: 24,
                    lineHeight: 1.4,
                    fontWeight: 550,
                    textAlign: { lg: "start", xs: "center" },
                  }}
                >
                  Email
                </Typography>
                <Typography sx={{ fontSize: 18 }}>info@mytreks.ai</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Card
              sx={{
                backgroundColor: COLORS.WHITE,
                borderRadius: "20px",
                padding: "24px 32px",
                boxShadow:
                  "0 6px 13px #0000000a, 0 23px 23px #00000008, 0 52px 31px #00000005, 0 92px 47px #00000003",
              }}
            >
              <form>
                <Stack alignItems={"center"} spacing={2}>
                  <TextField
                    sx={{ ...loginTextField }}
                    fullWidth
                    label="Enter Name"
                  />
                  <TextField
                    sx={{ ...loginTextField }}
                    fullWidth
                    label="Enter Email Address"
                  />
                  <TextField
                    sx={{
                      ...loginTextField,

                      fieldset: {
                        height: 110,
                      },
                      "& .MuiOutlinedInput-input": {
                        height: "100px !important",
                      },
                    }}
                    fullWidth
                    label="Enter Your Query"
                    multiline
                  />
                  <ButtonWithIcon label="Send Enquiry" width={"100%"} />
                </Stack>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
