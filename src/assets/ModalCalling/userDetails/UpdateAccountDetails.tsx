import { UserController } from "@/assets/api/UserController";
import { hideModal } from "@/redux/reducers/Modal";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
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
      email: user?.email || "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

//   const handleSubmit=(data:any)=>{
//     UserController.updateProfile(data).then((res)=>{

//     })
//   }

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
          Update Account Details
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
              label="Email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField
              sx={{ ...loginTextField }}
              label="Password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              fullWidth
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UpdateAccountDetails;
