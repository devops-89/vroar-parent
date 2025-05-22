import { AuthenticationController } from "@/assets/api/AuthenticationController";
import UpdateChildDetails from "@/assets/ModalCalling/userDetails/UpdateChildDetails";
import { showModal } from "@/redux/reducers/Modal";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
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
  const [inviteeDetails, setInviteeDetails] = useState([]);
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

  const personalTableHeader = [
    {
      label: "Full Name",
    },
    {
      label: "Grade",
    },
    {
      label: "Gender",
    },
    {
      label: "Relation",
    },
  ];

  const contactDetailsHeader = [
    {
      label: "Email Address",
    },
    {
      label: "Phone Number",
    },
  ];

  console.log("assdsa", inviteeDetails);
  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{ fontSize: 30, fontFamily: nunito.style, fontWeight: 700 }}
        >
          Kid Details
        </Typography>
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
        >
          Invite Child
        </Button>
      </Stack>
      {inviteeDetails.length ? (
        <>
          <Card sx={{ p: 2, mt: 2 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, fontFamily: nunito.style }}
              >
                Personal Details
              </Typography>
              <Button
                startIcon={<FaRegEdit />}
                sx={{
                  color: COLORS.BLACK,
                  textTransform: "initial",
                  fontSize: 16,
                  boxShadow: "0px 0px 2px 2px #eeeeee",
                  px: 2,
                }}
                onClick={editPersonalDetailModal}
              >
                Edit
              </Button>
            </Stack>

            <Table
              sx={{
                "& .MuiTableCell-root": {
                  border: "none",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  {personalTableHeader.map((val, i) => (
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 600,
                          fontFamily: nunito.style,
                          color: COLORS.TEXT_COLOR,
                        }}
                      >
                        {val.label}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {inviteeDetails.map((val: any, i: number) => (
                  <TableRow>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 600,
                          fontFamily: nunito.style,
                          color: "#262626",
                        }}
                      >
                        {val.firstName} {val.lastName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 600,
                          fontFamily: nunito.style,
                          color: "#262626",
                        }}
                      >
                        {val.grade}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 600,
                          fontFamily: nunito.style,
                          color: "#262626",
                        }}
                      >
                        {val.gender || "--"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 600,
                          fontFamily: nunito.style,
                          color: "#262626",
                        }}
                      >
                        {val.relationshipToStudent || "--"}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
          <Card sx={{ p: 2, mt: 2 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 700, fontFamily: nunito.style }}
              >
                Contact Details
              </Typography>
              <Button
                startIcon={<FaRegEdit />}
                sx={{
                  color: COLORS.BLACK,
                  textTransform: "initial",
                  fontSize: 16,
                  boxShadow: "0px 0px 2px 2px #eeeeee",
                  px: 2,
                }}
              >
                Edit
              </Button>
            </Stack>
            <Table
              sx={{
                "& .MuiTableCell-root": {
                  border: "none",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  {contactDetailsHeader.map((val, i) => (
                    <TableCell key={i}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 600,
                          fontFamily: nunito.style,
                          color: COLORS.TEXT_COLOR,
                        }}
                      >
                        {val.label}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {inviteeDetails.map((val: any, i: number) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 600,
                          fontFamily: nunito.style,
                          color: "#262626",
                        }}
                      >
                        {val.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 600,
                          fontFamily: nunito.style,
                          color: "#262626",
                        }}
                      >
                        +{val.countryCode} {val.phoneNo}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </>
      ) : (
        <Typography
          sx={{ fontSize: 20, fontFamily: nunito.style, fontWeight: 600 }}
        >
          No Data Found
        </Typography>
      )}
    </Box>
  );
};

export default InviteDetails;
