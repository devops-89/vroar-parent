import ParaField from "@/components/common/Para-Field";
import { COLORS } from "@/utils/enum";
import {
  Cancel,
  CheckCircle,
  CloseOutlined,
  CloseRounded,
} from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React, { ReactNode } from "react";

export interface dataProps {
  title: string;
  confidenceFeature: string | ReactNode | Icon;
  explorerFeature: string | ReactNode;
}

interface overviewListBoxProps {
  data: dataProps[];
}

const OverviewlistBox = ({ data }: overviewListBoxProps) => {
  return (
    <Box>
      {data?.map((item, index) => (
        <Grid
          key={index}
          container
          alignItems={"center"}
          sx={{
            pt: "32px",
            backgroundColor:
              index % 2 !== 0 ? COLORS.WHITE : COLORS.TRANSPARENT,
            pb: "32px",
            borderRadius: "12px",
            px: "32px",
          }}
          spacing={8}
          data-aos="fade-left"
          data-aos-delay={`${index+1 * 100}`}
        >
          <Grid size={4}>
            <ParaField
              label={item.title}
              sx={{ fontSize: 20, fontWeight: 700 }}
            />
          </Grid>

          <Grid size={4} sx={{ textAlign: "center" }}>
            {typeof item.explorerFeature === "string" ? (
              <>
                <CheckCircle sx={{ color: COLORS.PRIMARY }} />
                <ParaField
                  label={item.explorerFeature}
                  sx={{ fontSize: 16, color: "#262626", fontWeight: 700 }}
                />
              </>
            ) : (
              <Cancel sx={{ color: COLORS.DANGER }} />
            )}
          </Grid>
          <Grid size={4} sx={{ textAlign: "center" }}>
            {typeof item.confidenceFeature === "string" ? (
              <>
                <CheckCircle sx={{ color: COLORS.PRIMARY }} />
                <ParaField
                  label={item.confidenceFeature}
                  sx={{ fontSize: 16, color: "#262626", fontWeight: 700 }}
                />
              </>
            ) : (
              <Cancel sx={{ color: COLORS.DANGER }} />
            )}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default OverviewlistBox;
