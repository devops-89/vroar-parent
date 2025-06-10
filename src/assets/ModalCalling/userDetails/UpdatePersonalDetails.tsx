import { hideModal } from "@/redux/reducers/Modal";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { Close } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { data } from "@/assets/data";
import { useFormik } from "formik";
import moment from "moment";
import { UserController } from "@/assets/api/UserController";
import { showToast } from "@/redux/reducers/Toast";
import Loading from "react-loading";
import { getUserDetails } from "@/assets/apiCalling/user";
import { setUserDetails } from "@/redux/reducers/User";
const UpdatePersonalDetails = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  //   console.log("user", user);
  const closeModal = () => {
    dispatch(hideModal());
  };

  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<{ label: string }>({
    label: user?.gender || "",
  });

  const [relationWithChildren, setRelationWithChildren] = useState<{
    label: string;
  }>({
    label: user?.relationWithChildren || "",
  });

  const relationShipWithChildrenHandler = (
    e: SyntheticEvent<Element, Event>,
    newValue: { label: string } | null
  ) => {
    setRelationWithChildren(newValue || { label: "" });
    formik.setFieldValue("relationWithKid", newValue?.label || "");
  };

  const [birthDate, setBirthDate] = useState(
    user?.birthDate ? moment.unix(user?.birthDate) : null
  );

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      birthDate: user?.birthDate || "",
      gender: user?.gender || "",
      relationWithKid: user?.relationWithKid || "",
    },
    onSubmit: (values) => {
      //   console.log("values", values);
      setLoading(true);
      handleSubmit(values);
    },
  });

  const handleSubmit = (body: any) => {
    UserController.updateProfile(body)
      .then((res) => {
        dispatch(
          showToast({
            message: res.data.message,
            variant: TOAST_STATUS.SUCCESS,
          })
        );
        closeModal();
        setLoading(false);
        dispatch(setUserDetails({ isLoading: true }));
        getUserDetails({ dispatch });
      })
      .catch((err) => {
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
        setLoading(false);
      });
  };

  const dateChangeHandler = (date: any) => {
    setBirthDate(date);
    const validDate = moment(date).isValid();
    if (validDate) {
      const timestampInSeconds = Math.floor(moment(date).valueOf() / 1000);
      formik.setFieldValue("birthDate", timestampInSeconds);
    }
  };

  const genderChangeHandler = (
    e: SyntheticEvent<Element, Event>,
    newValue: { label: string } | null
  ) => {
    setGender(newValue || { label: "" });
    formik.setFieldValue("gender", newValue?.label || "");
  };

  return (
    <Box sx={{ width: { lg: 500, xs: 300 } }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ width: "100%" }}
      >
        <Typography
          sx={{ fontSize: 20, fontFamily: nunito.style, fontWeight: 550 }}
        >
          Update Personal Details
        </Typography>
        <IconButton onClick={closeModal}>
          <Close sx={{ color: COLORS.PRIMARY }} />
        </IconButton>
      </Stack>
      <Divider />
      <Stack sx={{ mt: 2 }} spacing={2}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                sx={{ ...loginTextField }}
                label="First Name"
                fullWidth
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                sx={{ ...loginTextField }}
                label="Last Name"
                fullWidth
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </Grid>
            <Grid size={12}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  label="Date of Birth"
                  sx={{
                    ...loginTextField,
                    width: "100%",
                    "& fieldset": {
                      borderRadius: 4,
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #000 !important",
                    },
                    "& label": {
                      top: 0,
                    },
                  }}
                  format="DD/MM/YYYY"
                  value={birthDate}
                  onChange={dateChangeHandler}
                  disableFuture
                />
              </LocalizationProvider>
            </Grid>
            <Grid size={12}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    sx={{
                      ...loginTextField,
                      "& label": {
                        top: 0,
                      },
                    }}
                    {...params}
                    fullWidth
                    label="Gender"
                  />
                )}
                options={data.genderData}
                getOptionLabel={(option) => option.label}
                value={gender}
                onChange={genderChangeHandler}
              />
            </Grid>
            <Grid size={12}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    sx={{
                      ...loginTextField,
                      "& label": {
                        top: 0,
                      },
                    }}
                    {...params}
                    fullWidth
                    label="Relation with Children"
                  />
                )}
                options={data.relationshipData}
                getOptionLabel={(option) => option.label}
                value={relationWithChildren}
                onChange={relationShipWithChildrenHandler}
              />
            </Grid>
            <Grid size={12}>
              <Button
                sx={{
                  background: COLORS.LINEAR_GRADIENT,
                  color: COLORS.WHITE,
                  borderRadius: 4,
                }}
                fullWidth
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={20} sx={{ color: COLORS.BLACK }} />
                ) : (
                  "Submit"
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Stack>
    </Box>
  );
};

export default UpdatePersonalDetails;
