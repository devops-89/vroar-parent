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
      <Drawer 
        open={drawerOpen} 
        anchor="left"
        onClose={() => setDrawerOpen(false)}
        sx={{ 
          zIndex: 999,
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: '80%',
            maxWidth: '300px',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            boxSizing: 'border-box',
            WebkitOverflowScrolling: 'touch', 
          }
        }}
        ModalProps={{
          keepMounted: true, 
        }}
        SlideProps={{
          timeout: 300, 
        }}
      >
        <ProfileSidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </Box>
  );
};

export default MobileSidebar;
