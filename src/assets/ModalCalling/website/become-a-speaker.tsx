import { COLORS, FORM_TYPE, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import mic from "@/banner/modals/speaker_form_banner.avif";
import Image from "next/image";
import { enquiryTextField, loginTextField } from "@/utils/styles";
import {
  matchIsValidTel,
  MuiTelInput,
  MuiTelInputInfo,
  MuiTelInputProps,
} from "mui-tel-input";
import Link from "next/link";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showToast } from "@/redux/reducers/Toast";
import {
  mentorValidationSchema,
  speakerValidationSchema,
} from "@/utils/validationSchema";
import { hideModal } from "@/redux/reducers/Modal";
import { Close } from "@mui/icons-material";
const SpeakerModal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedIn: "",
      topics: "",
      video_link: "",
    },
    validationSchema: speakerValidationSchema,
    onSubmit: (values) => {
      const body = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        linkedIn: values.linkedIn,
        topics: values.topics,
      };
      setLoading(true);

      axios
        .post("/api/contact", { type: FORM_TYPE.SPEAKER, fields: body })
        .then((res) => {
          // console.log("res", res);
          dispatch(
            showToast({
              open: true,
              message: "Query Send Successfully",
              variant: TOAST_STATUS.SUCCESS,
            })
          );
          setLoading(false);
          dispatch(hideModal());
        })
        .catch((err) => {
          const matchingField = err.response?.data?.error?.meta?.matchingField;

          if (matchingField) {
            dispatch(
              showToast({
                open: true,
                message: "Your query has already been submitted to MyTreks.ai",
                variant: TOAST_STATUS.ERROR,
              })
            );
          } else {
            dispatch(
              showToast({
                open: true,
                message:
                  err.response.data.message ||
                  err.message ||
                  "Something went wrong",
                variant: TOAST_STATUS.ERROR,
              })
            );
          }
          setLoading(false);
        });
    },
  });

  const [phone, setPhone] = useState("");

  const handlePhoneNumber = (value: string, info: MuiTelInputInfo) => {
    setPhone(value);
    const validPhone = matchIsValidTel(value);
    if (validPhone) {
      formik.setFieldValue("phone", info.nationalNumber);
    }
  };
  return (
    <Box sx={{ width: { lg: 650, xs: 350 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          sx={{
            background: "linear-gradient(#ffb7a6,#fff 35%)",
            borderRadius: "48px",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxShadow:
              "0 0 2.33px 1.17px #ffdcd3, 0 1.17px 1.17px 1.17px #ffffff40, inset 0 2.33px 1.17px #fff;",
          }}
          onClick={() => dispatch(hideModal())}
        >
          <Close sx={{ color: COLORS.PRIMARY }} />
        </IconButton>
      </Box>
      <Stack
        direction={{ lg: "row", xs: "column-reverse" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ position: "relative" }}
        spacing={{ lg: 0, xs: 4 }}
      >
        <Box sx={{ width: { lg: "50%", xs: "100%" } }}>
          <Typography
            sx={{
              fontSize: { lg: 40, xs: 29 },
              fontFamily: "gomenasans-bold",
              textAlign: { lg: "left", xs: "center" },
            }}
          >
            Have a{" "}
            <Typography
              sx={{
                color: COLORS.PRIMARY,
                fontFamily: "gomenasans-bold",
                fontSize: { lg: 40, xs: 29 },
              }}
              component={"span"}
            >
              story
            </Typography>{" "}
            worth sharing?
          </Typography>
        </Box>

        <Box>
          <Box
            sx={{
              backgroundColor: "#ffc935",
              padding: "12px 16px",
              borderRadius: "12px",
              boxShadow:
                "0 1.61px 4.84px #00000029,0 8px 8px #00000012,0 19.9px 14px #0000000a,0 35.7px 14.04px #00000003",
              fontFamily: nunito.style,
              width: 200,
              fontSize: 35,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Speaker
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: -50,
              right: -40,
              display: { lg: "block", xs: "none" },
            }}
          >
            <Image src={mic} alt="" style={{ width: 120, height: 120 }} />
          </Box>
        </Box>
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid size={{ lg: 12, xs: 12 }}>
            <TextField
              sx={{ ...enquiryTextField }}
              label="Enter Full Name*"
              fullWidth
              id="fullName"
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <TextField
              sx={{ ...enquiryTextField }}
              label="Enter Email Address*"
              fullWidth
              id="email"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <MuiTelInput
              defaultCountry={"US"}
              sx={{ ...enquiryTextField }}
              fullWidth
              label="Enter Phone Number*"
              onChange={handlePhoneNumber}
              value={phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              sx={{ ...enquiryTextField }}
              fullWidth
              label="LinkedIn Profile URL*"
              onChange={formik.handleChange}
              id="linkedIn"
              error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
              helperText={formik.touched.linkedIn && formik.errors.linkedIn}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              sx={{ ...enquiryTextField }}
              fullWidth
              label="Talk Topics You'd Love to Cover*"
              onChange={formik.handleChange}
              id="topics"
              error={formik.touched.topics && Boolean(formik.errors.topics)}
              helperText={formik.touched.topics && formik.errors.topics}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              sx={{
                ...enquiryTextField,
              }}
              fullWidth
              label="Link to Past Talk / Video (if any)"
              onChange={formik.handleChange}
              id="video_link"
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <ButtonWithIcon
              label="Submit"
              type="submit"
              fullWidth
              sx={{ width: "100%" }}
              loading={loading}
              loadingIndicator={
                <CircularProgress sx={{ color: COLORS.WHITE, fontSize: 20 }} />
              }
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SpeakerModal;
