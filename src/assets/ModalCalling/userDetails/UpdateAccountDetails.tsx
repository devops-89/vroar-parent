import { UserController } from "@/assets/api/UserController";
import { hideModal } from "@/redux/reducers/Modal";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { changePasswordValidationSchema } from "@/utils/validationSchema";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
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
      console.log("values", values);
    },
  });

  return (
    <Box sx={{ width: 500 }}>
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
              Update Password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UpdateAccountDetails;
