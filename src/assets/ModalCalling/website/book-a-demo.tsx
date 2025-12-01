import GradientText from "@/components/common/Greadient-text";
import ParaField from "@/components/common/Para-Field";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import banner from "@/banner/modals/parentform_banner.avif";
import { Close } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { useDispatch } from "react-redux";
import { hideModal } from "@/redux/reducers/Modal";
const BookaDemo = () => {
  const phone = useMediaQuery("(max-width:600px)");

  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: { lg: "1000px", xs: 350 },
        height: { lg: "100vh", xs: "100vh" },
        overflowY: "auto",
      }}
    >
      <Box sx={{ textAlign: "end", mb: 1 }}>
        <IconButton
          sx={{ background: COLORS.LINEAR_GRADIENT, color: COLORS.WHITE }}
          onClick={() => dispatch(hideModal())}
        >
          <Close />
        </IconButton>
      </Box>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <ParaField
            label="Curious About"
            sx={{
              fontSize: { lg: 50, xs: 25 },
              textAlign: { lg: "left", xs: "center" },
              fontWeight: 600,
            }}
          />
          <GradientText
            label="How It Works?"
            sx={{
              fontSize: { lg: 50, xs: 25 },
              textAlign: { lg: "left", xs: "center" },
            }}
          />
        </Box>
        <Image
          src={banner}
          alt=""
          width={phone ? 300 : 400}
          height={phone ? 150 : 200}
          style={{ objectFit: "cover", borderRadius: "20px" }}
        />
      </Stack>

      <Box sx={{ height: "100vh", overflowY: "hidden", mt: 3 }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/kygVYzU0ClvlxA5CcNaN"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            // overflowY: "auto",
          }}
          scrolling="no"
        ></iframe>
      </Box>
    </Box>
  );
};

export default BookaDemo;
