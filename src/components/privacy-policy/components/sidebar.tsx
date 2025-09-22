import HeadingField from "@/components/common/Heading-Field";
import { Box } from "@mui/material";
import React from "react";

const ContentSidebar = () => {
  return (
    <Box>
      <HeadingField
        label="Table of Contents"
        sx={{ fontSize: 25, fontFamily: "gomenasans-bold" }}
      />
    </Box>
  );
};

export default ContentSidebar;
