import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Button, Card, Stack, Switch, Typography } from "@mui/material";
import React from "react";

const Settings = () => {
  return (
    <Wrapper>
      <Box sx={{ p: 4 }}>
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
            fontFamily: nunito.style,
            textAlign: { xs: "center" },
          }}
        >
          Settings
        </Typography>
        <Card sx={{ p: 2, mt: 5 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              sx={{ fontSize: 20, fontWeight: 700, fontFamily: nunito.style }}
            >
              Subscribe to Newsletter
            </Typography>
            <Switch
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: `${COLORS.PRIMARY} !important`,
                },
                "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
                  backgroundColor: `${COLORS.PRIMARY} !important`,
                },
              }}
            />
          </Stack>
        </Card>
        {/* <Button
          sx={{
            mt: 2,
            textTransform: "initial",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: nunito.style,
            color: COLORS.PRIMARY,
            border: `1px solid ${COLORS.PRIMARY}`,
            borderRadius: 8,
            p: 1,
            width: 200,
          }}
        >
          Deactivate Account
        </Button> */}
      </Box>
    </Wrapper>
  );
};

export default Settings;
