import number1 from "@/Mentors/1.avif";
import ParaField from "@/components/common/Para-Field";
import { BE_SPEAKER_CARD_PROPS } from "@/utils/types";
import { Box } from "@mui/material";
import Image from "next/image";
const BeSpeakerCard = ({
  img,
  heading,
  description,
}: BE_SPEAKER_CARD_PROPS) => {
  return (
    <Box sx={{ textAlign: "center", width: { lg: "260px", xs: "100%" } }}>
      <Image src={img} alt="" width={50} />
      <ParaField
        label={heading}
        textAlign="center"
        sx={{ fontWeight: 700, fontSize: { lg: 28, xs: 25 } }}
      />
      <ParaField
        label={description}
        textAlign="center"
        sx={{ fontSize: { lg: 20, xs: 16 } }}
      />
    </Box>
  );
};

export default BeSpeakerCard;
