import profile from "@/banner/avatar.png";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import ContactDetails from "./ContactDetails";
import { useSelector } from "react-redux";
const ProfileData = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [showAvatar, setShowAvatar] = useState<string | null>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setShowAvatar(url);
    }
  };
  const user = useSelector((state: any) => state.user);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={3}>
          <Avatar
            sx={{
              width: 200,
              height: 200,
              bgcolor: "transparent",
              border: `1px solid ${COLORS.PRIMARY}`,
              overflow: "hidden",
              margin: "auto",
            }}
          >
            <Image
              src={user?.avatar}
              alt="Profile"
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </Avatar>
          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{
                fontSize: 14,
                fontFamily: nunito.style,
                color: COLORS.BLACK,
                textTransform: "initial",
                mt: 1,
                textAlign: "center",
              }}
              onClick={handleClick}
            >
              Upload new photo
            </Button>
          </Box>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={ref}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={9}>
          <PersonalDetails />
          <Divider sx={{ mt: 2 }} />
          <AccountDetails />
          <Divider sx={{ mt: 2 }} />
          <ContactDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileData;
