import { COLORS } from "@/utils/enum";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/logo/Logo.png";
import { Menu } from "@mui/icons-material";
import HeaderSidebar from "../drawer";
const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: COLORS.WHITE,
          borderRadius: 20,
          width: "100%",
          border: "5px solid #fff3f0",
          position: "absolute",
          padding: 2,
          top: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // position: "absolute",
          zIndex: 999,
        }}
      >
        <Image src={logo} alt="" width={100} />
        <IconButton
          sx={{ background: COLORS.LINEAR_GRADIENT, color: COLORS.WHITE }}
          onClick={() => setOpen(true)}
        >
          <Menu />
        </IconButton>
      </Box>

      <HeaderSidebar open={open} setOpen={setOpen} />
    </Box>
  );
};

export default MobileHeader;
