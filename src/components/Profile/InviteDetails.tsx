import { AuthenticationController } from "@/assets/api/AuthenticationController";
import ChildInvite from "@/assets/ModalCalling/ChildInvite";
import UpdateChildDetails from "@/assets/ModalCalling/userDetails/UpdateChildDetails";
import { showModal } from "@/redux/reducers/Modal";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { USER_INVITE_DETAILS } from "@/utils/types";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const InviteDetails = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [inviteeDetails, setInviteeDetails] = useState<USER_INVITE_DETAILS[]>(
    []
  );
  const editPersonalDetailModal = () => {
    dispatch(showModal(<UpdateChildDetails />));
  };
  //   console.log("user", user);
  const getDetails = () => {
    AuthenticationController.getInviteesDetail()
      .then((res) => {
        // console.log("res", res);
        const response = res.data.data;
        setInviteeDetails(response);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  useEffect(() => {
    if (user?.isAuthenticated) {
      getDetails();
    }
  }, []);

  // const personalTableHeader = [
  //   {
  //     label: "Full Name",
  //   },
  //   {
  //     label: "Grade",
  //   },
  //   {
  //     label: "Gender",
  //   },
  //   {
  //     label: "Relation",
  //   },
  // ];

  // const [index, setIndex] = useState(inviteeDetails?.length);

  // const personalTableHeader = [
  //   {
  //     label: "Full Name",
  //     value: inviteeDetails[index]
  //       ? `${inviteeDetails[index].firstName} ${inviteeDetails[index].lastName}`
  //       : "--",
  //   },
  //   {
  //     label: "Grade",
  //     value: inviteeDetails[index] ? inviteeDetails[index]?.grade : "-",
  //   },
  //   // {
  //   //   label: "Gender",
  //   // },
  //   {
  //     label: "Relation",
  //     value: inviteeDetails[index]
  //       ? inviteeDetails[index]?.relationshipToStudent
  //       : "--",
  //   },
  // ];

  const contactDetailsHeader = [
    {
      label: "Email Address",
    },
    {
      label: "Phone Number",
    },
  ];

  const inviteChild = () => {
    dispatch(showModal(<ChildInvite getInviteeDetails={getDetails} />));
  };

  return (
    <Box>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        alignItems={{ lg: "center", xs: "flex-start" }}
        justifyContent={{ lg: "space-between", xs: "flex-start" }}
        spacing={2}
      >
        <Typography
          sx={{ fontSize: 30, fontFamily: nunito.style, fontWeight: 700 }}
        >
          Kid Details
        </Typography>
        {!inviteeDetails?.length && (
          <Button
            startIcon={<Add />}
            sx={{
              background: COLORS.LINEAR_GRADIENT,
              color: COLORS.WHITE,
              borderRadius: 20,
              width: 150,
              p: 1,
              boxShadow: `0px 0px 2px 2px ${COLORS.PRIMARY}`,
              fontWeight: 600,
            }}
            onClick={inviteChild}
          >
            Invite Child
          </Button>
        )}
      </Stack>

      {inviteeDetails.length ? (
        inviteeDetails.map((invitee, index) => (
          <React.Fragment key={index}>
            <Card sx={{ p: 2, mt: 2 }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: nunito.style,
                  }}
                >
                  Personal Details - {invitee.firstName} {invitee.lastName}
                </Typography>
              </Stack>

              <Grid container sx={{ mt: 2 }} spacing={2}>
                <Grid size={{ lg: 3, xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: COLORS.TEXT_COLOR,
                    }}
                  >
                    Full Name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: "#262626",
                    }}
                  >
                    {invitee.firstName} {invitee.lastName}
                  </Typography>
                </Grid>

                <Grid size={{ lg: 3, xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: COLORS.TEXT_COLOR,
                    }}
                  >
                    Grade
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: "#262626",
                    }}
                  >
                    {invitee.grade || "--"}
                  </Typography>
                </Grid>

                <Grid size={{ lg: 3, xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: COLORS.TEXT_COLOR,
                    }}
                  >
                    Relation
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: "#262626",
                    }}
                  >
                    {invitee.relationshipToStudent || "--"}
                  </Typography>
                </Grid>
              </Grid>
            </Card>

            <Card sx={{ p: 2, mt: 2 }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: nunito.style,
                  }}
                >
                  Contact Details
                </Typography>
              </Stack>

              <Grid container sx={{ mt: 2 }} spacing={2}>
                <Grid size={{ lg: 3, xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: COLORS.TEXT_COLOR,
                    }}
                  >
                    Email Address
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: "#262626",
                    }}
                  >
                    {invitee.email}
                  </Typography>
                </Grid>

                <Grid size={{ lg: 3, xs: 12, md: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: COLORS.TEXT_COLOR,
                    }}
                  >
                    Phone Number
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: nunito.style,
                      color: "#262626",
                    }}
                  >
                    +{invitee.countryCode} {invitee.phoneNo}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </React.Fragment>
        ))
      ) : (
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: nunito.style,
            fontWeight: 600,
            mt: 2,
          }}
        >
          No Data Found
        </Typography>
      )}
    </Box>
  );
};

export default InviteDetails;
