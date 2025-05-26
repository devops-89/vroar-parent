import { createProfileSidebar } from "@/assets/createProfileSidebar";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);
  const phone = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        background: COLORS.SIDEBAR_GRADIENT,
        display: "flex",
        flexDirection: { lg: "column", xs: "row" },
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        height: "100%",
        pt: { lg: 0, xs: 15 },
      }}
    >
      <Stepper
        orientation={phone ? "horizontal" : "vertical"}
        activeStep={activeStep}
        sx={{
          p: 2,
        }}
        alternativeLabel={phone ? true : false}
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
