import Sidebar from "@/components/Profile/Sidebar";
import Wrapper from "@/components/Wrapper";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Invite = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);

  return (
    <Wrapper>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        
        {activeStep === 2 && <Box>hello</Box> }
      </Box>
    </Wrapper>
  );
};

export default Invite;
