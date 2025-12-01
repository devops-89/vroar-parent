import { COLORS } from "@/utils/enum";
import { SPEAKER_PERKS_CARD } from "@/utils/types";
import { Box, Card } from "@mui/material";
import Image from "next/image";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";

const SpeakerPerksCard = ({
  img,
  heading,
  description,
}: SPEAKER_PERKS_CARD) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: COLORS.WHITE,
        borderRadius: "16px",
        padding: { lg: "20px", xs: "10px" },
        gap: 5,
      }}
    >
      <Image src={img} alt="" width={100} />
      <Box>
        <HeadingField
          label={heading}
          sx={{
            lineHeight: 1.4,
            fontWeight: 700,
            textAlign: "left",
            fontSize: { lg: 24, xs: 16 },
          }}
        />
        <ParaField
          label={description}
          sx={{ fontSize: { lg: 20, xs: 16 }, lineHeight: 1.4, mt: 1 }}
        />
      </Box>
    </Card>
  );
};

export default SpeakerPerksCard;
