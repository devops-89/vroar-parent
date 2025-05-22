import Sidebar from "@/components/Profile/Sidebar";
import { Box, Grid } from "@mui/material";
import React from "react";

const PaymentFail = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={3}>
          <Sidebar />
        </Grid>
        <Grid size={9}>
            
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentFail;
