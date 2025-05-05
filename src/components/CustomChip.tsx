import { COLORS, USER_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  label: USER_STATUS | string;
  isDotted?: boolean;
}

const CustomChip = ({ label, isDotted }: Props) => {
  return (
    <div>
      <Chip
        label={
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            {isDotted && (
              <Box
                sx={{
                  backgroundColor:
                    label === USER_STATUS.ACTIVE ? COLORS.DONE_TEXT : "",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                }}
              ></Box>
            )}
            <Typography
              sx={{ fontSize: 14, fontWeight: 550, fontFamily: nunito.style }}
            >
              {label}
            </Typography>
          </Stack>
        }
        sx={{
          backgroundColor: label === USER_STATUS.ACTIVE ? COLORS.DONE : "",
          color: label === USER_STATUS.INACTIVE ? COLORS.DONE : "",
        }}
      />
    </div>
  );
};

export default CustomChip;
