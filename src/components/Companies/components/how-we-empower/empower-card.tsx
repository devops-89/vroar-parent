import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import { COLORS } from "@/utils/enum";
import { JOIN_CARD_PROPS } from "@/utils/types";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
const EmpowerCard = ({ img, heading, description }: JOIN_CARD_PROPS) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        borderRadius: "16px",
        padding: { lg: "24px", xs: "20px" },
      }}
    >
      <Image src={img} alt="" width={phone ? 80 : 100} />
      <HeadingField
        label={heading}
        sx={{ fontSize: { lg: 24, xs: 20 }, textAlign: "left" }}
      />
      <ParaField sx={{ fontSize: { lg: 20, xs: 18 } }} label={description} />
    </Box>
  );
};

export default EmpowerCard;
