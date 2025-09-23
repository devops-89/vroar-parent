import { Box } from "@mui/material";
import React from "react";
import HeadingField from "../Heading-Field";
import ParaField from "../Para-Field";

const Overview = ({ description }: { description: string }) => {
  return (
    <Box sx={{}}>
      <HeadingField
        label="Overview"
        sx={{ fontSize: 30, textAlign: "left", fontFamily: "gomenasans-bold" }}
      />
      <ParaField label={description} sx={{ fontSize: 20 }} />
    </Box>
  );
};

export default Overview;
