import HeadingField from "@/components/common/Heading-Field";
import Badge from "@/components/Home/Components/Badge";
import { Box } from "@mui/material";
import React from "react";

const AllMentors = () => {
  return (
    <Box sx={{ pt: 20 }}>
      <Badge label="Mentors" margin="auto" width={100} />
      <HeadingField
        label="Mentors Library"
        sx={{ fontFamily: "gomenasans-bold" }}
      />
    </Box>
  );
};

export default AllMentors;
