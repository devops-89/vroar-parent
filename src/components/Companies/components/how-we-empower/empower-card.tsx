import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import { COLORS } from "@/utils/enum";
import { JOIN_CARD_PROPS } from "@/utils/types";
import { Box } from "@mui/material";
import Image from "next/image";
const EmpowerCard = ({ img, heading, description }: JOIN_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <Image src={img} alt="" width={100} />
      <HeadingField label={heading} sx={{ fontSize: 24, textAlign: "left" }} />
      <ParaField sx={{ fontSize: 20 }} label={description} />
    </Box>
  );
};

export default EmpowerCard;
