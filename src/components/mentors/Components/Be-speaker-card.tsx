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
    <Box sx={{ textAlign: "center", width: "260px" }}>
      <Image src={img} alt="" width={50} />
      <ParaField
        label={heading}
        fontSize={28}
        textAlign="center"
        sx={{ fontWeight: 700 }}
      />
      <ParaField label={description} fontSize={20} textAlign="center" />
    </Box>
  );
};

export default BeSpeakerCard;
