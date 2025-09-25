import { Circle, CircleOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import ParaField from "../Para-Field";
import { List as LIST } from "@/utils/types";
import { COLORS } from "@/utils/enum";

interface data_list {
  heading: string;
  nestedList?: LIST[];
  value?: string;
}

interface nested_list_box {
  data: data_list[];
}

const NestedListBox = ({ data }: nested_list_box) => {
  return (
    <Box>
      {data.map((val, i) => (
        <Box key={i}>
          <Stack
            direction={"row"}
            alignItems={val.value ? "flex-start" : "center"}
            spacing={3}
            sx={{ my: 2 }}
          >
            <Box sx={{ pt: val.value ? 1 : 0 }}>
              <Circle sx={{ fontSize: 12 }} />
            </Box>
            <Box>
              <ParaField
                label={val.heading}
                sx={{ fontSize: 20, fontWeight: val.value ? 600 : 500 }}
              />
              <ParaField
                label={val.value || ""}
                sx={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: COLORS.LIGHT_BLACK,
                }}
              />
            </Box>
          </Stack>
          {val.nestedList && (
            <List>
              {val.nestedList.map((item, index) => (
                <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                  <ListItemAvatar sx={{ minWidth: 30, mt: 1 }}>
                    <CircleOutlined sx={{ fontSize: 12 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <ParaField
                        label={item.label || ""}
                        sx={{ fontSize: 18 }}
                      />
                    }
                    secondary={
                      <ParaField
                        label={item.value || ""}
                        sx={{ fontSize: 16 }}
                      />
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default NestedListBox;
