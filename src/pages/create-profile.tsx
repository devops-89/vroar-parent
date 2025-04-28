import Sidebar from "@/components/Profile/Sidebar";
import Step1Form from "@/components/Profile/Step1Form";
import Wrapper from "@/components/Wrapper";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const CreateProfile = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);
  return (
    <Wrapper>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{width:"100%"}}>{activeStep === 0 && <Step1Form />}</Box>
        
      </Box>
    </Wrapper>
  );
};

export default CreateProfile;
