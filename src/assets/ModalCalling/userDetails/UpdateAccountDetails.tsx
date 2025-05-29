import { AuthenticationController } from "@/assets/api/AuthenticationController";
import { UserController } from "@/assets/api/UserController";
import { hideModal } from "@/redux/reducers/Modal";
import { showToast } from "@/redux/reducers/Toast";
import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { PASSWORD_PROPS } from "@/utils/types";
import { changePasswordValidationSchema } from "@/utils/validationSchema";
import { Close } from "@mui/icons-material";
import {
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
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateAccountDetails = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(hideModal());
  };
  const user = useSelector((state: any) => state.user);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: changePasswordValidationSchema,
    onSubmit: (values) => {
      // console.log("values", values);
      handleSubmit(values as PASSWORD_PROPS);
    },
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (body: PASSWORD_PROPS) => {
    setLoading(true);
    AuthenticationController.changePassword(body)
      .then((res) => {
        // console.log("first", res);
        const response = res.data.data;
        localStorage.setItem("accessToken", response?.accessToken);
        localStorage.setItem("refreshToken", response?.refreshToken);
        dispatch(
          showToast({
            message: res.data.message,
            variant: TOAST_STATUS.SUCCESS,
          })
        );
        setLoading(false);
        closeModal();
      })
      .catch((err) => {
        // console.log("error", err);
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
        setLoading(false);
      });
  };

  return (
    <Box sx={{ width: { lg: 400, xs: 350 } }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{ fontSize: 20, fontFamily: nunito.style, fontWeight: 600 }}
        >
          Change Password
        </Typography>
        <IconButton onClick={closeModal}>
          <Close sx={{ color: COLORS.PRIMARY }} />
        </IconButton>
      </Stack>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} mt={2}>
          <Grid size={12}>
            <TextField
              sx={{ ...loginTextField }}
              label="Old Password"
              id="oldPassword"
              onChange={formik.handleChange}
              value={formik.values.oldPassword}
              fullWidth
              error={
                formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
              }
              helperText={
                formik.touched.oldPassword && formik.errors.oldPassword
              }
            />
          </Grid>
          <Grid size={12}>
            <TextField
              sx={{ ...loginTextField }}
              label="New Password"
              id="newPassword"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              fullWidth
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
            />
          </Grid>
          <Grid size={12}>
            <Button
              sx={{
                background: COLORS.LINEAR_GRADIENT,
                color: COLORS.WHITE,
                borderRadius: 5,
              }}
              fullWidth
              type="submit"
            >
              {loading ? (
                <CircularProgress sx={{ fontSize: 16, color: COLORS.WHITE }} />
              ) : (
                "Update Password"
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UpdateAccountDetails;
