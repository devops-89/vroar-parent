import { data } from "@/assets/data";
import bannerImage from "@/banner/banner-image.png";
import parentBanner from "@/banner/parent-web.png";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { signUpValidationSchema } from "@/utils/validationSchema";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
const Banner = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage.src})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid size={8} margin={"auto"}>
            <Card sx={{ p: 2 }}>
              <Grid container>
                <Grid size={6}>
                  <Image
                    src={parentBanner}
                    alt=""
                    className="img-fluid"
                    style={{ borderRadius: 4 }}
                  />
                </Grid>

                <Grid size={6} alignItems={"center"} justifyContent={"center"}>
                  <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ p: 4 }}>
                      <Typography
                        sx={{
                          fontSize: 28,
                          fontWeight: 770,
                          textAlign: "center",
                          fontFamily: nunito.style,
                        }}
                      >
                        Welcome
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 28,
                          fontWeight: 770,
                          textAlign: "center",
                          fontFamily: nunito.style,
                          color: COLORS.PRIMARY,
                        }}
                      >
                        Parents/Guardians!
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          textAlign: "center",
                          fontFamily: nunito.style,
                          color: COLORS.TEXT_COLOR,
                        }}
                      >
                        Sign up to stay connected and support your child's
                        success
                      </Typography>
                      <TextField
                        sx={{ ...loginTextField, mt: 2 }}
                        fullWidth
                        label="Email Id"
                        id="email"
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                      <Button
                        sx={{
                          background: COLORS.LINEAR_GRADIENT,
                          borderRadius: 5,
                          color: COLORS.WHITE,
                          textTransform: "initial",
                          fontFamily: nunito.style,
                          mt: 2,
                        }}
                        fullWidth
                        type="submit"
                      >
                        Sign Up
                      </Button>
                      <Divider sx={{ mt: 2 }}>
                        <Typography
                          sx={{
                            fontSize: 11,
                            fontFamily: nunito.style,
                            color: COLORS.TEXT_COLOR,
                          }}
                        >
                          Or continue with
                        </Typography>
                      </Divider>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        spacing={2}
                        mt={2}
                      >
                        {data.socialIcons.map((val, i) => (
                          <IconButton
                            sx={{ backgroundColor: "#EEEFF3", borderRadius: 2 }}
                          >
                            <Image src={val.img} alt="" width={15} />
                          </IconButton>
                        ))}
                      </Stack>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontFamily: nunito.style,
                          textAlign: "center",
                          mt: 2,
                        }}
                      >
                        Already have an account?{" "}
                        <Typography
                          component={"span"}
                          sx={{
                            fontSize: 14,
                            fontFamily: nunito.style,
                            color: COLORS.PRIMARY,
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          Sign In
                        </Typography>
                      </Typography>
                    </Box>
                  </form>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
