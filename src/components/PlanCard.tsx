import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  PAYMENT_ITEMS,
  PAYMENT_LINK_PROPS,
  SUBSCRIPTION_PLANS,
} from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CircularProgress,
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
import { UserController } from "@/assets/api/UserController";
import { useDispatch } from "react-redux";
import { showToast } from "@/redux/reducers/Toast";
import { useRouter } from "next/router";
const PlanCard = ({
  description,
  id,
  name,
  prices,
  img,
  benefits,
}: SUBSCRIPTION_PLANS) => {
  if (!prices || prices.length === 0) {
    return <Typography>No pricing available for this plan.</Typography>;
  }
  const [priceIndex, setPriceIndex] = useState(0);
  const [switchStatus, setSwitchStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const switchHandler = (e: SyntheticEvent) => {
    // console.log("sad", id);
    const { checked } = e.target as HTMLInputElement;
    setSwitchStatus(checked);
    setPriceIndex(checked ? 1 : 0);
  };
  console.log("test", prices);

  // console.log("id", id);

  const dispatch = useDispatch();

  const router = useRouter();
  const createPaymentLink = (price_id: string) => {
    let paymentProduct = {
      productId: id,
      priceId: price_id,
    };
    setLoading(true);

    let body = [];
    body.push(paymentProduct);

    // console.log("asdsa", body);

    // console.log("first", type);
    UserController.createPaymentLink({ items: body } as PAYMENT_ITEMS)
      .then((res) => {
        const response = res.data.data;
        setLoading(false);
        window.location.href = response.url;
      })
      .catch((err) => {
        let errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
      });

    setLoading(false);
  };

  return (
    <div>
      <Card
        sx={{
          p: 2,
          backgroundColor: prices[priceIndex].isRecurring
            ? "#111828"
            : "#FFF6F3",
          borderRadius: "20px",
          height: 850,
          // pb: 4,
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
            {prices.length ?? prices[priceIndex].isRecurring
              ? switchStatus
                ? Math.round(prices[0].amount / 12)
                : prices[1]?.amount / 3
              : prices[0]?.amount}
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
                  left: { lg: "90%", xs: "80%" },
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
            onClick={() =>
              createPaymentLink(
                prices[priceIndex].isRecurring
                  ? switchStatus
                    ? prices[0].id
                    : prices[1].id
                  : prices[priceIndex].id
              )
            }
            disabled={loading}
          >
            {loading ? (
              <CircularProgress sx={{ color: COLORS.WHITE }} size={20} />
            ) : prices[priceIndex].isRecurring ? (
              "Unlock Confidence"
            ) : (
              "Explore Now"
            )}
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
