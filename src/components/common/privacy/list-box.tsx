import { Circle } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import ParaField from "../Para-Field";
import { List as LIST } from "@/utils/types";

interface LIST_BOX_PROPS {
  data: LIST[];
}

const ListBox = ({ data }: LIST_BOX_PROPS) => {
  return (
    <Box>
      <List>
        {data.map((val, i) => (
          <ListItem sx={{ alignItems: "flex-start" }}>
            <ListItemAvatar sx={{ minWidth: 23, mt: 2 }}>
              <Circle sx={{ fontSize: 10 }} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <ParaField
                  label={val.label || ""}
                  sx={{ fontSize: 20, fontWeight: 550 }}
                />
              }
              secondary={
                <ParaField label={val.value || ""} sx={{ fontSize: 18 }} />
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListBox;
