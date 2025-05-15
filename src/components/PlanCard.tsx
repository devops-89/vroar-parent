import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { SUBSCRIPTION_PLANS } from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";
import extension from "@/icons/Explorer.png";
import PlanBadges from "./PlanBadges";
import tick from "@/icons/listAvatar.png";
const PlanCard = ({
  description,
  id,
  name,
  prices,
  img,
  benefits,
}: SUBSCRIPTION_PLANS) => {
  const [priceIndex, setPriceIndex] = useState(0);
  const [switchStatus, setSwitchStatus] = useState(false);

  const switchHandler = (e: SyntheticEvent) => {
    // setSwitchStatus(true)
    // console.log(e);

    console.log("sad", id);
    const { checked } = e.target as HTMLInputElement;
    setSwitchStatus(checked);
    setPriceIndex(checked ? 1 : 0);
  };

  return (
    <div>
      {/* <Card sx={{ p: 2, borderRadius: "17.2px" }}>
        <Typography
          sx={{ fontSize: 22, fontFamily: nunito.style, fontWeight: 700 }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: 18, fontFamily: nunito.style, fontWeight: 600 }}
        >
          Duration -{" "}
          {prices[priceIndex].interval === "month"
            ? "Quarterly"
            : prices[priceIndex].interval === "year"
            ? "Yearly"
            : ""}
        </Typography>
        <Typography
          sx={{
            fontSize: 38,
            fontFamily: nunito.style,
            color: COLORS.PRIMARY,
            fontWeight: 700,
          }}
        >
          ${prices[priceIndex].amount}
        </Typography>
        <Typography
          sx={{ fontSize: 14, fontWeight: 600, fontFamily: nunito.style }}
        >
          What’s included
        </Typography>

        <Button
          sx={{
            background: COLORS.LINEAR_GRADIENT,
            fontFamily: nunito.style,
            color: COLORS.WHITE,
            borderRadius: 6,
            fontSize: 15,
            ":hover": {
              "& .icon": {
                transform: "rotate(0deg)",
              },
            },
          }}
          fullWidth
          endIcon={
            <Box
              sx={{
                backgroundColor: COLORS.WHITE,
                borderRadius: "50%",
                width: 30,
                height: 30,
              }}
            >
              <ArrowForward
                sx={{
                  fontSize: 20,
                  color: COLORS.PRIMARY,
                  transform: "rotate(-45deg)",
                  transition: "0.5s ease all",
                }}
                className="icon"
              />
            </Box>
          }
          // onClick={onClick}
        >
          Subscribe Now
        </Button>
      </Card> */}
      <Card
        sx={{
          p: 2,
          backgroundColor: prices[priceIndex].isRecurring
            ? "#111828"
            : "#FFF6F3",
          borderRadius: "20px",
          height: 800,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={img ? img : extension} alt="" width={64} />
          {prices[priceIndex].isRecurring && (
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: nunito.style,
                  color: switchStatus ? COLORS.WHITE : COLORS.PRIMARY,
                  fontWeight: 700,
                }}
              >
                Quarterly
              </Typography>
              <Switch
                onChange={switchHandler}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: `rgba(251, 89, 51, 1) !important`,
                  },
                  "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
                    backgroundColor: `${COLORS.WHITE} !important`,
                  },
                  "& .MuiSwitch-switchBase .MuiSwitch-track": {
                    backgroundColor: "#d7d7d7 !important",
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: nunito.style,
                  color: switchStatus ? COLORS.PRIMARY : COLORS.WHITE,
                  fontWeight: 700,
                }}
              >
                Yearly
              </Typography>
            </Stack>
          )}
        </Stack>

        <Typography
          sx={{
            mt: 3,
            color: prices[priceIndex].isRecurring ? COLORS.WHITE : COLORS.BLACK,
            fontFamily: nunito.style,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 500,
            color: prices[priceIndex].isRecurring ? COLORS.WHITE : COLORS.BLACK,
            fontFamily: nunito.style,
            mt: 1,
          }}
        >
          {description || "Not Disclosed"}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Typography
            sx={{
              fontSize: 35,
              fontWeight: 700,
              color: prices[priceIndex].isRecurring
                ? COLORS.PRIMARY
                : COLORS.PRIMARY,
              fontFamily: nunito.style,
              mt: 2,
            }}
          >
            $
            {prices[priceIndex].isRecurring
              ? prices[priceIndex].amount
              : prices[0].amount}
          </Typography>
          {prices[priceIndex].isRecurring ? (
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2}
            >
              <PlanBadges
                bgColor="#402523"
                label="per month"
                border="1px solid #ffffff"
                color={COLORS.WHITE}
              />
              <PlanBadges
                bgColor="#4D0058"
                label={switchStatus ? "Billed Annually" : "Billed quarterly"}
                border="1px solid #ffffff"
                color={COLORS.WHITE}
              />
            </Stack>
          ) : (
            <PlanBadges
              border={"1px solid rgba(0,0,0,0.2)"}
              label={"One-Time Payment"}
              bgColor="#FAFFBA"
              color={COLORS.BLACK}
            />
          )}
        </Stack>
        <Box sx={{ position: "relative", mt: 3 }}>
          <Button
            sx={{
              background: COLORS.LINEAR_GRADIENT,
              fontFamily: nunito.style,
              color: COLORS.WHITE,
              borderRadius: 6,
              fontSize: 15,
              ":hover": {
                "& .icon": {
                  transform: "rotate(0deg)",
                },
              },
              p: 1.5,
              position: "relative",
              fontWeight: 600,
              boxShadow: `${
                prices[priceIndex].isRecurring
                  ? "0px 0px 4px 4px rgba(253, 144, 101, 1)"
                  : "0px 0px 4px 4px rgba(253, 144, 101, 0.4)"
              }`,
            }}
            fullWidth
            endIcon={
              <Box
                sx={{
                  backgroundColor: COLORS.WHITE,
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  boxShadow: "0px 0px 2px 2px rgba(255,255,255,0.2)",
                  position: "absolute",
                  left: "90%",
                  top: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowForward
                  sx={{
                    fontSize: 25,
                    color: COLORS.PRIMARY,
                    transform: "rotate(-45deg)",
                    transition: "0.5s ease all",
                  }}
                  className="icon"
                />
              </Box>
            }
            // onClick={onClick}
          >
            {prices[priceIndex].isRecurring
              ? "Unlock Confidence"
              : "Explore Now"}
          </Button>
          <Box sx={{ mt: 5 }}>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: nunito.style,
                color: prices[priceIndex].isRecurring
                  ? COLORS.WHITE
                  : COLORS.BLACK,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              What’s included
            </Typography>
            <List>
              {benefits?.map((val, i) => (
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Image src={tick} alt="" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontFamily: nunito.style,
                          fontWeight: 600,
                          color: prices[priceIndex].isRecurring
                            ? COLORS.WHITE
                            : COLORS.BLACK,
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default PlanCard;
