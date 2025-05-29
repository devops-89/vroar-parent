import { MoreVert } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";

const MobileSidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        sx={{ position: "absolute", top: 30 }}
        onClick={() => setDrawerOpen(true)}
      >
        <MoreVert />
      </IconButton>
      <Drawer open={drawerOpen} sx={{ zIndex: 999 }}>
        <ProfileSidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </Box>
  );
};

export default MobileSidebar;
