import { hideModal } from "@/redux/reducers/Modal";
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
import { matchIsValidTel, MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { data } from "../data";
import { getIn, useFormik } from "formik";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { inviteValidationSchema } from "@/utils/validationSchema";
import { USER_INVITE } from "@/utils/types";
import { AuthenticationController } from "../api/AuthenticationController";
import { showToast } from "@/redux/reducers/Toast";

interface ChildInviteProps {
  getInviteeDetails: () => void;
}
const ChildInvite = ({ getInviteeDetails }: ChildInviteProps) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "",
      phoneNo: "",
      grade: "",
      relationshipToStudent: "",
    },
    validationSchema: inviteValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values as USER_INVITE);
    },
  });

  const closeModal = () => {
    dispatch(hideModal());
  };

  const [phone, setPhone] = useState<string>("");

  const handleChangePhoneNumber = (
    newPhone: string,
    countryData: MuiTelInputInfo
  ) => {
    setPhone(newPhone);
    const validPhone = matchIsValidTel(newPhone);

    console.log("first", validPhone);
    if (validPhone) {
      formik.setFieldValue("phoneNo", countryData?.nationalNumber);
      formik.setFieldValue("countryCode", countryData?.countryCallingCode);
      formik.setFieldError("phoneNo", "");
    } else {
      formik.setFieldError("phoneNo", "Please Enter Valid Phone Number");
    }
  };
  const [grade, setGrade] = useState<{ label: string } | null>(null);
  const [gender, setGender] = useState<{ label: string } | null>(null);
  const handleChange = (
    e: SyntheticEvent,
    newValue: { label: string } | null,
    id: string
  ) => {
    if (id === "grade") {
      setGrade(newValue);
    }
    if (id === "relationshipToStudent") {
      setGender(newValue);
    }
    if (newValue) {
      formik.setFieldValue(id, newValue?.label);
      formik.setFieldError(id, "");
    } else {
      formik.setFieldError(
        id,
        id === "grade" ? "Please Select Gender" : "Please Select Grade"
      );
    }
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data: USER_INVITE) => {
    setLoading(true);
    AuthenticationController.inviteUser(data)
      .then((res) => {
        dispatch(
          showToast({
            message: res.data.message,
            variant: TOAST_STATUS.SUCCESS,
          })
        );
        closeModal();
        getInviteeDetails();
        setLoading(false);
      })
      .catch((err) => {
        // console.log("err", err);
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
        setLoading(false);
      });
  };

  return (
    <Box sx={{ width: 600 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{ fontSize: 20, fontFamily: nunito.style, fontWeight: 600 }}
        >
          Invite Child
        </Typography>
        <IconButton onClick={closeModal}>
          <Close />
        </IconButton>
      </Stack>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2} rowSpacing={4}>
            <Grid size={6}>
              <TextField
                sx={{ ...loginTextField }}
                label="First Name"
                fullWidth
                id="firstName"
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                sx={{ ...loginTextField }}
                label="Last Name"
                fullWidth
                id="lastName"
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                sx={{ ...loginTextField }}
                label="Email"
                fullWidth
                id="email"
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid size={6}>
              <MuiTelInput
                label="Phone Number"
                fullWidth
                sx={{ ...loginTextField }}
                defaultCountry="US"
                id="phoneNumber"
                onChange={handleChangePhoneNumber}
                value={phone}
                error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                helperText={formik.touched.phoneNo && formik.errors.phoneNo}
              />
            </Grid>
            <Grid size={6}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    sx={{ ...loginTextField }}
                    {...params}
                    label="Grade"
                    error={formik.touched.grade && Boolean(formik.errors.grade)}
                    helperText={formik.touched.grade && formik.errors.grade}
                  />
                )}
                options={data.grade}
                getOptionLabel={(option) => option.label}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    padding: "5px",
                  },
                }}
                onChange={(e, newValue) => handleChange(e, newValue, "grade")}
                value={grade}
              />
            </Grid>
            <Grid size={6}>
              <Autocomplete
                renderInput={(params) => (
                  <TextField
                    sx={{ ...loginTextField }}
                    {...params}
                    label="Relationship"
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
                options={data.relationshipData}
                getOptionLabel={(option) => option.label}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    padding: "5px",
                  },
                }}
                onChange={(e, newValue) =>
                  handleChange(e, newValue, "relationshipToStudent")
                }
                value={gender}
              />
            </Grid>
            {/* <Grid size={6}>
            <Button
              sx={{
                border: `1px solid ${COLORS.PRIMARY}`,
                backgroundColor: COLORS.TRANSPARENT,
                borderRadius: 4,
                color: COLORS.PRIMARY,
              }}
              fullWidth
            >
              Cancel
            </Button>
          </Grid> */}
            <Grid size={12}>
              <Button
                sx={{
                  border: `1px solid ${COLORS.PRIMARY}`,
                  background: COLORS.LINEAR_GRADIENT,
                  borderRadius: 4,
                  color: COLORS.WHITE,
                  fontSize: 17,
                  fontFamily: nunito.style,
                  textTransform: "initial",
                }}
                fullWidth
                type="submit"
              >
                {loading ? (
                  <CircularProgress
                    sx={{ fontSize: 16, color: COLORS.WHITE }}
                  />
                ) : (
                  "Invite Child"
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default ChildInvite;
