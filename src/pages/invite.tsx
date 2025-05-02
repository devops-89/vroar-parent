import Sidebar from "@/components/Profile/Sidebar";
import Wrapper from "@/components/Wrapper";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import background from "@/banner/subscription-banner.png";
import { data } from "@/assets/data";
import { useFormik } from "formik";
import { inviteValidationSchema } from "@/utils/validationSchema";
import { ArrowBack } from "@mui/icons-material";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { goBackStep, setActiveStep } from "@/redux/reducers/Stepper";
import { useRouter } from "next/router";
import { AuthenticationController } from "@/assets/api/AuthenticationController";
import { USER_INVITE } from "@/utils/types";
import { showToast } from "@/redux/reducers/Toast";
import Loading from "react-loading";

const Invite = () => {
  const activeStep = useSelector((state: any) => state.StepSlice.activeStep);
  //   const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      countryCode: "",
      grade: "",
      relationshipToStudent: "",
    },
    validationSchema: inviteValidationSchema,
    onSubmit: (values) => {
      //   console.log(values);
      setLoading(true);
      AuthenticationController.inviteUser(values as USER_INVITE)
        .then((res) => {
          //   console.log("res", res);
          dispatch(
            showToast({
              message: res.data.message,
              variant: TOAST_STATUS.SUCCESS,
            })
          );
          setLoading(false);
          router.push("/parent/profile");
        })
        .catch((err) => {
          let errMessage =
            (err.response && err.response.data.message) || err.message;
          dispatch(
            showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
          );
        });
    },
  });

  const [phone, setPhone] = useState<string>("");

  const phoneChangeHandler = (
    newPhone: string,
    countryData: MuiTelInputInfo
  ) => {
    setPhone(newPhone);
    const validPhone = matchIsValidTel(newPhone);
    if (validPhone) {
      formik.setFieldValue("phoneNo", countryData?.nationalNumber);
      formik.setFieldValue("countryCode", countryData?.countryCallingCode);
      formik.setFieldError("phoneNo", "");
    } else {
      formik.setFieldError("phoneNo", "Please Enter Valid Phone Number");
    }
  };

  const dispatch = useDispatch();
  const previousStep = () => {
    dispatch(goBackStep());
    router.back();
  };
  const [grade, setGrade] = useState<{ label: string } | null>(null);
  const [relation, setRelation] = useState<{ label: string } | null>(null);

  const handleChange = (
    e: SyntheticEvent,
    newValue: { label: string } | null,
    id: string
  ) => {
    if (id === "grade") {
      setGrade(newValue);
      formik.setFieldValue(id, newValue?.label || "");
    }
    if (id === "relationshipToStudent") {
      setRelation(newValue);
      formik.setFieldValue(id, newValue?.label || "");
    }
  };

  //   useEffect(() => {
  //     if (router.pathname === "/invite") {
  //       dispatch(setActiveStep(2));
  //     }
  //   }, [router.pathname]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${background.src})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ p: 2, width: 900 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid size={4}>
              <Sidebar />
            </Grid>
            <Grid size={8}>
              {activeStep === 2 && (
                <Box sx={{ p: 4, width: "100%" }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontFamily: nunito.style,
                      fontWeight: 600,
                    }}
                  >
                    Kid's Name
                  </Typography>
                  <Grid container mt={3} spacing={3}>
                    <Grid size={6}>
                      <TextField
                        label="First Name"
                        sx={{ ...loginTextField }}
                        fullWidth
                        id="firstName"
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        label="Last Name"
                        sx={{ ...loginTextField }}
                        fullWidth
                        id="lastName"
                        onChange={formik.handleChange}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                      />
                    </Grid>
                    <Grid size={6}>
                      <InputLabel>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontFamily: nunito.style,
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          Email Address
                        </Typography>
                      </InputLabel>
                      <TextField
                        label="Email"
                        sx={{ ...loginTextField }}
                        fullWidth
                        id="email"
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid size={6}>
                      <InputLabel>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontFamily: nunito.style,
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          Phone Number
                        </Typography>
                      </InputLabel>
                      <MuiTelInput
                        defaultCountry="US"
                        sx={{ ...loginTextField }}
                        fullWidth
                        label="Phone Number"
                        onChange={phoneChangeHandler}
                        value={phone}
                        error={
                          formik.touched.phoneNo &&
                          Boolean(formik.errors.phoneNo)
                        }
                        helperText={
                          formik.touched.phoneNo && formik.errors.phoneNo
                        }
                      />
                    </Grid>
                    <Grid size={6}>
                      <InputLabel>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontFamily: nunito.style,
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          Grade
                        </Typography>
                      </InputLabel>

                      <Autocomplete
                        renderInput={(params) => (
                          <TextField
                            sx={{ ...loginTextField }}
                            {...params}
                            label="Grade"
                            error={
                              formik.touched.grade &&
                              Boolean(formik.errors.grade)
                            }
                            helperText={
                              formik.touched.grade && formik.errors.grade
                            }
                          />
                        )}
                        value={grade}
                        options={data.grade}
                        renderOption={(props, option) => (
                          <Box component={"li"} {...props}>
                            <Typography
                              sx={{ fontSize: 14, fontFamily: nunito.style }}
                            >
                              {option.label}
                            </Typography>
                          </Box>
                        )}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            padding: "5px",
                          },
                        }}
                        onChange={(e, newValue) =>
                          handleChange(e, newValue, "grade")
                        }
                      />
                    </Grid>
                    <Grid size={6}>
                      <InputLabel>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontFamily: nunito.style,
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          Relation
                        </Typography>
                      </InputLabel>
                      <Autocomplete
                        renderInput={(params) => (
                          <TextField
                            sx={{ ...loginTextField }}
                            {...params}
                            label="Relation"
                            error={
                              formik.touched.relationshipToStudent &&
                              Boolean(formik.errors.relationshipToStudent)
                            }
                            helperText={
                              formik.touched.relationshipToStudent &&
                              formik.errors.relationshipToStudent
                            }
                          />
                        )}
                        value={relation}
                        options={data.relationshipData}
                        renderOption={(props, option) => (
                          <Box component={"li"} {...props}>
                            <Typography
                              sx={{ fontSize: 14, fontFamily: nunito.style }}
                            >
                              {option.label}
                            </Typography>
                          </Box>
                        )}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            padding: "5px",
                          },
                        }}
                        onChange={(e, newValue) =>
                          handleChange(e, newValue, "relationshipToStudent")
                        }
                      />
                    </Grid>
                  </Grid>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{
                      mt: 2,
                      textTransform: "initial",
                      fontFamily: nunito.style,
                    }}
                  >
                    <Button
                      startIcon={<ArrowBack />}
                      sx={{
                        color: COLORS.PRIMARY,
                        textTransform: "initial",
                        fontFamily: nunito.style,
                        fontSize: 16,
                      }}
                      onClick={previousStep}
                    >
                      Back
                    </Button>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                      <Button
                        sx={{
                          fontSize: 16,
                          fontFamily: nunito.style,
                          color: COLORS.PRIMARY,
                          textTransform: "initial",
                        }}
                      >
                        Do this Later
                      </Button>
                      <Button
                        sx={{
                          fontSize: 16,
                          fontFamily: nunito.style,
                          color: COLORS.WHITE,
                          textTransform: "initial",
                          background: COLORS.LINEAR_GRADIENT,
                          borderRadius: 5,
                          width: 130,
                        }}
                        type="submit"
                      >
                        {loading ? (
                          <CircularProgress
                            sx={{ color: COLORS.BLACK }}
                            size={20}
                          />
                        ) : (
                          "Continue"
                        )}
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              )}
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default Invite;
