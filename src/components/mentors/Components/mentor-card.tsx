import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { MENTOR_CARD_PROPS } from "@/utils/types";
import { Business } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
const MentorCard = ({
  avatar,
  designation,
  firstName,
  lastName,
  careerSummary,
  professionalBackground,
}: MENTOR_CARD_PROPS) => {
  const [show, setShow] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        borderRadius: "20px",
        border: "1px solid #dcdcdc",
        p: 2,
        height: "100%",
        position: "relative",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Avatar sx={{ width: 70, height: 70 }}>
          <Image src={avatar} alt="" width={70} height={70} />
        </Avatar>
        <HeadingField
          label={`${firstName} ${lastName}`}
          sx={{
            fontFamily: "gomenasans-bold",
            fontSize: 22,
            lineHeight: 1.5,
            textTransform: "capitalize",
          }}
        />
      </Stack>
      <Box
        sx={{
          mt: 2,
          maxHeight: show ? 1000 : 80,
          overflow: "hidden",
          transition: "max-height 1000ms ease",
        }}
      >
        <ParaField label={careerSummary} sx={{ fontSize: 17 }} />
      </Box>

      {careerSummary?.length > 100 && (
        <Box sx={{ textAlign: "end" }}>
          <Button
            sx={{
              fontSize: 14,
              p: 0.2,
              color: COLORS.PRIMARY,
              fontFamily: nunito.style.fontFamily,
            }}
            onClick={() => setShow(!show)}
          >
            {show ? "Read Less" : "Read More"}
          </Button>
        </Box>
      )}
      <Box sx={{ marginTop: "auto" }}>
        <Divider sx={{ mt: 2 }} />
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: COLORS.TRANSPARENT,
              border: "1px solid #dcdcdc",
            }}
          >
            <Business sx={{ color: COLORS.PRIMARY }} />
            {/* <Image src={professionalBackground.} alt="" width={50} /> */}
          </Avatar>
          <Box>
            <ParaField
              label={professionalBackground?.[0]?.company ?? ""}
              sx={{ fontSize: 16, color: COLORS.TEXT_COLOR }}
            />
            <ParaField
              label={designation}
              sx={{
                fontSize: 16,
                color: COLORS.TEXT_COLOR,
                textTransform: "capitalize",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MentorCard;
