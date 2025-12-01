import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import { COLORS } from "@/utils/enum";
import { List as LIST } from "@/utils/types";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

interface contentSidebarProps {
  data: LIST[];
}

const ContentSidebar = ({ data }: contentSidebarProps) => {
  return (
    <Box sx={{ position: "sticky", left: 0, top: 50 }}>
      <HeadingField
        label="Table of Contents"
        sx={{
          fontSize: 25,
          fontFamily: "gomenasans-bold",
          textAlign: "flex-start",
        }}
      />
      <Divider sx={{ borderColor: COLORS.BLACK }} />

      <List>
        {data.map((val, i) => (
          <ListItemButton sx={{ alignItems: "flex-start" }}>
            <ListItemAvatar sx={{ minWidth: 25 }}>
              <ParaField
                label={`${String(i + 1)}.  `}
                sx={{ fontSize: 18, color: COLORS.TEXT_COLOR, mt: 0.5 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <ParaField
                  label={val.label || ""}
                  sx={{ fontSize: 18, color: COLORS.TEXT_COLOR }}
                />
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default ContentSidebar;
