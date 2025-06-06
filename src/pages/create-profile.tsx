import background from "@/banner/subscription-banner.png";
import Sidebar from "@/components/Profile/Sidebar";
import Step1Form from "@/components/Profile/Step1Form";
import { removeActiveStep, setActiveStep } from "@/redux/reducers/Stepper";
import { Box, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const CreateProfile = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);
  const user = useSelector((state: any) => state.user);
  // console.log("aas", activeStep, user);

  const router = useRouter();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (router.pathname === `/createProfile?email=${router.query.email}`) {
  //     dispatch(removeActiveStep());
  //   }
  // }, [router.pathname]);

  // console.log("eeee", router);

  // console.log("ususu", router);

  return (
    <Box
      sx={{
        backgroundImage: `url(${background.src})`,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card sx={{ p: 2, width: 1000, borderRadius: 4 }}>
        <Grid container>
          {/* <Grid size={{ lg: 4, xs: 12 }}>
            <Sidebar />
          </Grid> */}
          <Grid size={{ lg: 12, xs: 12 }}>
            {activeStep === 0 && <Step1Form />}
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CreateProfile;
