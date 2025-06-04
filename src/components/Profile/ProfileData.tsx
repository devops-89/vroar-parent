import profile from "@/banner/avatar.png";
import { COLORS, MEDIA_LIBRARY_TYPE, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
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
import { useDispatch, useSelector } from "react-redux";
import { UserController } from "@/assets/api/UserController";
import { MEDIA_UPLOAD } from "@/utils/types";
import { getUserDetails } from "@/assets/apiCalling/user";
import { showToast } from "@/redux/reducers/Toast";
import parentAvatar from "@/banner/parent.jpg";
const ProfileData = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [showAvatar, setShowAvatar] = useState<string | null>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);

      const data = {
        mediaFile: file,
        mediaLibraryType: MEDIA_LIBRARY_TYPE.PROFILE,
        userId: user?.id
      };
      setLoading(true);
      UserController.mediaUpload(data as MEDIA_UPLOAD)
        .then((res) => {
          // console.log("res", res);
          setShowAvatar(res.data.data.filePath);
          getUserDetails({ dispatch });
          setLoading(false);
        })
        .catch((err) => {
          let errMessage =
            (err.response && err.response.data.message) || err.message;
          dispatch(
            showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
          );
        });
    }
  };
  const user = useSelector((state: any) => state.user);

  return (
    <div>
      {loading ? (
        <Backdrop open={loading}>
          <CircularProgress sx={{ color: COLORS.PRIMARY }} />
        </Backdrop>
      ) : (
        <Grid container spacing={2}>
          <Grid size={{ lg: 3, xs: 12 }}>
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
                src={user?.avatar ?? parentAvatar}
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
          <Grid size={{ lg: 9, xs: 12 }}>
            <PersonalDetails />
            <Divider sx={{ mt: 2 }} />
            <AccountDetails />
            <Divider sx={{ mt: 2 }} />
            <ContactDetails />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ProfileData;
