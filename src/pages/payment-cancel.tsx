import Sidebar from "@/components/Profile/Sidebar";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Close } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const PaymentCancel = () => {
  const router = useRouter();

  const handleChange = () => {
    router.push("/plans");
  };

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Grid container>
        <Grid size={3}>
          <Sidebar />
        </Grid>
        <Grid size={9}>
          <Box
            sx={{
              height: "100vh",
              display: "grid",
              alignItems: "center",
              placeItems: "center",
              p: 2,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(222, 17, 53, 0.08)",
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  margin: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(222, 17, 53, 0.12)",
                    width: 105,
                    height: 105,
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(222, 17, 53, 0.16)",
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(222, 17, 53, 1)",
                        width: 69,
                        height: 69,
                        borderRadius: "50%",
                      }}
                    >
                      <Close sx={{ color: COLORS.WHITE, fontSize: 40 }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: 40,
                  fontFamily: nunito.style,
                  fontWeight: 800,
                  textAlign: "center",
                  mt: 2,
                }}
              >
                Payment Cancel!
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: nunito.style,
                  fontWeight: 500,
                  textAlign: "center",
                  width: 500,
                  mt: 2,
                }}
              >
                Something went wrong with your payment. But don't worry you can
                try again in just a few clicks!
              </Typography>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  sx={{
                    fontSize: 18,
                    fontFamily: nunito.style,
                    boxShadow: "0px 0px 2px 2px rgba(253, 144, 101, 1)",
                    background: COLORS.LINEAR_GRADIENT,
                    margin: "auto",
                    color: COLORS.WHITE,
                    borderRadius: 20,
                    width: 200,
                    p: 1,
                  }}
                    onClick={handleChange}
                >
                  Retry Payment
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentCancel;
