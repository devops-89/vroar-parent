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
import { mentorValidationSchema } from "@/utils/validationSchema";
import ParaField from "@/components/common/Para-Field";
import { hideModal } from "@/redux/reducers/Modal";
import { Close } from "@mui/icons-material";
const BecomeAMentor = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedIn: "",
      role: "",
      message: "",
      consent: false,
    },
    validationSchema: mentorValidationSchema,
    onSubmit: (values) => {
      const body = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        role: values.role,
        linkedIn: values.linkedIn,
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

  const consentCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("consent", e.target.checked);
  };

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
            Ready to{" "}
            <Typography
              sx={{
                color: COLORS.PRIMARY,
                fontFamily: "gomenasans-bold",
                fontSize: { lg: 40, xs: 29 },
              }}
              component={"span"}
            >
              inspire
            </Typography>{" "}
            a young mind?
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
            Mentor
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: -20,
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
          <Grid size={{ lg: 12, xs: 12 }}>
            <TextField
              sx={{
                ...enquiryTextField,
                fieldset: {
                  height: 100,
                },
                "& .MuiOutlinedInput-input": {
                  height: "60px !important",
                },
              }}
              fullWidth
              label="Why do you want to mentor with MyTreks.ai?*"
              multiline
              onChange={formik.handleChange}
              id="message"
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid size={{ lg: 12, xs: 12 }}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: COLORS.PRIMARY,
                    "& .MuiSvgIcon-root": { color: COLORS.PRIMARY },
                  }}
                  name="consent"
                  checked={formik.values.consent}
                  onChange={consentCheck}
                  onBlur={() => formik.setFieldTouched("consent", true)}
                />
              }
              label={
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography
                    sx={{
                      fontSize: { lg: 14, xs: 10 },
                      fontFamily: "gomenasans",
                    }}
                  >
                    By clicking, you agree to our
                  </Typography>
                  <Link href="/terms-and-conditions" target="__blank">
                    <Typography
                      sx={{
                        fontSize: { lg: 14, xs: 10 },
                        fontFamily: "gomenasans",
                        color: COLORS.PRIMARY,
                        textDecoration: "underline",
                        ml: { lg: 0.4, xs: 0 },
                      }}
                    >
                      {"  "}
                      Terms & Conditions
                    </Typography>
                  </Link>
                  <Typography
                    sx={{
                      fontSize: { lg: 14, xs: 12 },
                      fontFamily: "gomenasans",
                      ml: { lg: 0.4, xs: 0 },
                    }}
                  >
                    and
                  </Typography>
                  <Link href="/privacy-policy" target="__blank">
                    <Typography
                      sx={{
                        fontSize: { lg: 14, xs: 10 },
                        fontFamily: "gomenasans",
                        color: COLORS.PRIMARY,
                        textDecoration: "underline",
                        ml: { lg: 0.4, xs: 0 },
                      }}
                    >
                      {"  "}
                      Privacy Policy
                    </Typography>
                  </Link>
                  .
                </Stack>
              }
            />
            {formik.touched.consent && Boolean(formik.errors.consent) && (
              <ParaField
                label={formik?.errors?.consent || ""}
                sx={{ fontSize: 14, color: COLORS.DANGER }}
              />
            )}
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

export default BecomeAMentor;
