import { COLORS, TOAST_STATUS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { PAYMENT_ITEMS, SUBSCRIPTION_PLANS } from "@/utils/types";
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

  const isRecurring = prices.some((p) => p.isRecurring);
  const hasYearly = prices.length > 1;
  const [switchStatus, setSwitchStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const priceIndex = isRecurring
    ? switchStatus && hasYearly
      ? 1 // Yearly
      : 0 // Quarterly
    : 0; // One-time

  const selectedPrice = prices[priceIndex];

  const switchHandler = (e: SyntheticEvent) => {
    const { checked } = e.target as HTMLInputElement;
    setSwitchStatus(checked);
  };

  const createPaymentLink = (price_id: string) => {
    setLoading(true);
    const items = [{ productId: id, priceId: price_id }];
    UserController.createPaymentLink({ items } as PAYMENT_ITEMS)
      .then((res) => {
        window.location.href = res.data.data.url;
      })
      .catch((err) => {
        const errMessage =
          (err.response && err.response.data.message) || err.message;
        dispatch(
          showToast({ message: errMessage, variant: TOAST_STATUS.ERROR })
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: selectedPrice.isRecurring ? "#111828" : "#FFF6F3",
        borderRadius: "20px",
        height: 850,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Image src={img || extension} alt="Plan icon" width={64} />
        {isRecurring && (
          <Stack direction="row" spacing={1} alignItems="center">
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
              checked={switchStatus}
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
          fontSize: 20,
          fontWeight: 700,
          color: selectedPrice.isRecurring ? COLORS.WHITE : COLORS.BLACK,
          fontFamily: nunito.style,
        }}
      >
        {name}
      </Typography>

      <Typography
        sx={{
          fontSize: 18,
          mt: 1,
          fontWeight: 500,
          fontFamily: nunito.style,
          color: selectedPrice.isRecurring ? COLORS.WHITE : COLORS.BLACK,
        }}
      >
        {description || "Not Disclosed"}
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mt={2}>
        <Typography
          sx={{
            fontSize: 35,
            fontWeight: 700,
            color: COLORS.PRIMARY,
            fontFamily: nunito.style,
          }}
        >
          $
          {isRecurring
            ? switchStatus
              ? Math.round(prices[0].amount / 12)
              : prices[1]?.amount / 3
            : prices[0]?.amount}
        </Typography>

        {selectedPrice.isRecurring ? (
          <Stack direction="row" spacing={2} alignItems="center">
            <PlanBadges
              bgColor="#402523"
              label="per month"
              border="1px solid #ffffff"
              color={COLORS.WHITE}
            />
            <PlanBadges
              bgColor="#4D0058"
              label={switchStatus ? "Billed Annually" : "Billed Quarterly"}
              border="1px solid #ffffff"
              color={COLORS.WHITE}
            />
          </Stack>
        ) : (
          <PlanBadges
            bgColor="#FAFFBA"
            color={COLORS.BLACK}
            border="1px solid rgba(0,0,0,0.2)"
            label="One-Time Payment"
          />
        )}
      </Stack>

      <Box mt={3} position="relative">
        <Button
          fullWidth
          disabled={loading}
          onClick={() =>
            createPaymentLink(
              isRecurring
                ? switchStatus
                  ? prices[0].id
                  : prices[1].id
                : prices[0].id
            )
          }
          sx={{
            background: COLORS.LINEAR_GRADIENT,
            fontFamily: nunito.style,
            color: COLORS.WHITE,
            borderRadius: 6,
            fontSize: 15,
            fontWeight: 600,
            p: 1.5,
            position: "relative",
            boxShadow: selectedPrice.isRecurring
              ? "0px 0px 4px 4px rgba(253, 144, 101, 1)"
              : "0px 0px 4px 4px rgba(253, 144, 101, 0.4)",
            ":hover": {
              "& .icon": {
                transform: "rotate(0deg)",
              },
            },
          }}
          endIcon={
            <Box
              sx={{
                position: "absolute",
                left: { lg: "90%", xs: "80%" },
                top: 5,
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: COLORS.WHITE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 2px 2px rgba(255,255,255,0.2)",
              }}
            >
              <ArrowForward
                className="icon"
                sx={{
                  fontSize: 25,
                  color: COLORS.PRIMARY,
                  transform: "rotate(-45deg)",
                  transition: "0.5s ease all",
                }}
              />
            </Box>
          }
        >
          {loading ? (
            <CircularProgress sx={{ color: COLORS.WHITE }} size={20} />
          ) : selectedPrice.isRecurring ? (
            "Unlock Confidence"
          ) : (
            "Explore Now"
          )}
        </Button>

        <Box mt={5}>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 800,
              textTransform: "uppercase",
              fontFamily: nunito.style,
              color: selectedPrice.isRecurring ? COLORS.WHITE : COLORS.BLACK,
            }}
          >
            What’s included
          </Typography>
          <List>
            {benefits?.map((val, i) => (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Image src={tick} alt="tick" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        fontFamily: nunito.style,
                        color: selectedPrice.isRecurring
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
  );
};

export default PlanCard;
