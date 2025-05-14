import { data } from "@/assets/data";
import { hideModal } from "@/redux/reducers/Modal";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { Close } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const UpdateChildDetails = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(hideModal());
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
          Update Kid Personal Details
        </Typography>
        <IconButton onClick={closeModal}>
          <Close sx={{ color: COLORS.PRIMARY }} />
        </IconButton>
      </Stack>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Stack spacing={2}>
        <TextField sx={{ ...loginTextField }} label="First Name" />
        <TextField sx={{ ...loginTextField }} label="Last Name" />
        <Autocomplete
          renderInput={(params) => (
            <TextField {...params} label="Gender" sx={{ ...loginTextField }} />
          )}
          options={data.genderData}
          renderOption={(props, option) => (
            <Box component={"li"} {...props}>
              <Typography
                sx={{ fontSize: 16, fontFamily: nunito.style, fontWeight: 500 }}
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
        />
        <Autocomplete
          renderInput={(params) => (
            <TextField {...params} label="Grade" sx={{ ...loginTextField }} />
          )}
          options={data.grade}
          renderOption={(props, option) => (
            <Box component={"li"} {...props}>
              <Typography
                sx={{ fontSize: 16, fontFamily: nunito.style, fontWeight: 500 }}
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
        />
        <Autocomplete
          renderInput={(params) => (
            <TextField
              {...params}
              label="Relation"
              sx={{ ...loginTextField }}
            />
          )}
          options={data.relationshipData}
          renderOption={(props, option) => (
            <Box component={"li"} {...props}>
              <Typography
                sx={{ fontSize: 16, fontFamily: nunito.style, fontWeight: 500 }}
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
        />
      </Stack>
    </Box>
  );
};

export default UpdateChildDetails;
