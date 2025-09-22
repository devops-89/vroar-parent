import { COLORS } from "@/utils/enum";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/logo/Logo.png";
import { Menu } from "@mui/icons-material";
import HeaderSidebar from "../Home/drawer";
import SimpleButton from "../Home/Components/SimpleButton";
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
          padding: "8px",
          top: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 999,
        }}
      >
        <IconButton
          sx={{ background: COLORS.LINEAR_GRADIENT, color: COLORS.WHITE }}
          onClick={() => setOpen(true)}
        >
          <Menu />
        </IconButton>
        <Image src={logo} alt="" width={100} />
        <SimpleButton label="Sign In" />
      </Box>

      <HeaderSidebar open={open} setOpen={setOpen} />
    </Box>
  );
};

export default MobileHeader;
