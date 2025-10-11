import { COLORS, FORM_TYPE, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import mic from "@/banner/parents/mentor/mic.avif";
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
  speakerMentorValidation,
} from "@/utils/validationSchema";
import ParaField from "@/components/common/Para-Field";
import { hideModal } from "@/redux/reducers/Modal";
import { Close } from "@mui/icons-material";
import speaker_mentor from "@/banner/modals/mentor_speaker.avif";
const SpeakerMentorModal = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedIn: "",
      role: "",
      topics: "",
      video_link: "",
    },
    validationSchema: speakerMentorValidation,
    onSubmit: (values) => {
      const body = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        role: values.role,
        linkedIn: values.linkedIn,
        topics: values.topics,
        video_link: values.video_link,
      };
      setLoading(true);

      axios
        .post("/api/contact", { type: FORM_TYPE.MENTOR, fields: body })
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
        <Box sx={{ width: { lg: "60%", xs: "100%" } }}>
          <Typography
            sx={{
              fontSize: { lg: 40, xs: 29 },
              fontFamily: "gomenasans-bold",
              textAlign: { lg: "left", xs: "center" },
            }}
          >
            <Typography
              sx={{
                color: COLORS.PRIMARY,
                fontFamily: "gomenasans-bold",
                fontSize: { lg: 40, xs: 29 },
              }}
              component={"span"}
            >
              Speaker. Mentor.
            </Typography>{" "}
            Impact. Lives.
          </Typography>
        </Box>

        <Box>
          <Image src={speaker_mentor} alt="" style={{ width: "100%" }} />
        </Box>
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid size={{ lg: 12, xs: 12 }}>
            <TextField
              sx={{ ...enquiryTextField }}
              label="Full Name*"
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
              label="Email*"
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
              label="Phone Number*"
              onChange={handlePhoneNumber}
              value={phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid size={{ lg: 12, xs: 12 }}>
            <TextField
              sx={{ ...enquiryTextField }}
              fullWidth
              label="LinkedIn Profile URL"
              onChange={formik.handleChange}
              id="linkedIn"
              error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
              helperText={formik.touched.linkedIn && formik.errors.linkedIn}
            />
          </Grid>
          <Grid size={{ lg: 12, xs: 12 }}>
            <TextField
              sx={{ ...enquiryTextField }}
              fullWidth
              label="Current Role/Profession*"
              onChange={formik.handleChange}
              id="role"
              error={formik.touched.role && Boolean(formik.errors.role)}
              helperText={formik.touched.role && formik.errors.role}
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
              error={formik.touched.video_link && Boolean(formik.errors.video_link)}
              helperText={formik.touched.video_link && formik.errors.video_link}
            />
          </Grid>

          <Grid size={{ lg: 6, xs: 12 }}>
            <ButtonWithIcon
              label="Submit"
              type="submit"
              fullWidth
              sx={{ width: "100%" }}
              loading={loading}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SpeakerMentorModal;
