import { createProfileSidebar } from "@/assets/createProfileSidebar";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);

  return (
    <Box
      sx={{
        // position: "fixed",
        // left: 0,
        // height: "100vh",
        background: COLORS.SIDEBAR_GRADIENT,
        // width: 300,
        // top: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Stepper
        orientation="vertical"
        activeStep={activeStep}
        sx={{
          p: 2,
        }}
      >
        {createProfileSidebar.map((val, i) => (
          <Step
            key={i}
            sx={{
              "& .MuiStepIcon-root.Mui-active": {
                color: COLORS.PRIMARY,
                "& .MuiStepIcon-text": {
                  fill: COLORS.WHITE,
                },
              },
              "& .MuiStepIcon-root.Mui-completed": {
                color: COLORS.PRIMARY,
                "& .MuiStepIcon-text": {
                  fill: COLORS.WHITE,
                },
              },
              "& .MuiStepIcon-root": {
                color: COLORS.WHITE,
              },
              "& .MuiStepIcon-text": {
                fill: COLORS.TEXT_COLOR,
              },
              "& .MuiStepIcon-text.Mui-active": {
                fill: COLORS.WHITE,
              },
            }}
          >
            <StepLabel>
              <Typography sx={{ fontFamily: nunito.style, fontSize: 16 }}>
                {val.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Sidebar;
