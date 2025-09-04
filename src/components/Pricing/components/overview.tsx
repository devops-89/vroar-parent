import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import OverviewlistBox from "./over-view-list-box";
import { FeatureList } from "@/assets/plans";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";

const Overview = () => {
  return (
    <Box sx={{ backgroundColor: "#fff6f3", py: 10 }}>
      <Container>
        <Grid container>
          <Grid size={10} margin={"auto"}>
            <Badge label="Overview" width={100} margin="auto" />
            <HeadingField
              label="Plans and features"
              sx={{
                textAlign: "center",
                fontFamily: "gomenasans-bold",
                lineHeight: 1.1,
                letterSpacing: "-.04em",
              }}
            />
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid size={4}></Grid>
          <Grid size={4}>
            <ParaField
              label="Explorer Package"
              textAlign="center"
              sx={{ fontWeight: 700 }}
            />
            <ParaField
              label="$399"
              textAlign="center"
              sx={{ fontWeight: 700 }}
            />
          </Grid>
          <Grid size={4}>
            <ParaField
              label="Confidence Package"
              textAlign="center"
              sx={{ fontWeight: 700 }}
            />
            <ParaField
              label="$166/$186"
              textAlign="center"
              sx={{ fontWeight: 700 }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, borderWidth: 1 }} />
        <OverviewlistBox data={FeatureList} />
        <Grid container mt={5}>
          <Grid size={4}></Grid>
          <Grid size={4} textAlign={"center"}>
            <ButtonWithIcon
              label="Explore Now"
              width={220}
              sx={{ textAlign: "left" }}
            />
          </Grid>
          <Grid size={4} sx={{ textAlign: "center" }}>
            <ButtonWithIcon
              label="Unlock Confidence"
              width={260}
              sx={{ textAlign: "left" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Overview;
