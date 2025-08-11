import number from "@/banner/mentors/beMentor/step-01.avif";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ParaField from "../common/Para-Field";
import { MENTOR_PROGRESS_CARD } from "@/utils/types";

const MentorProgressCard = ({
  img,
  heading,
  description,
}: MENTOR_PROGRESS_CARD) => {
  return (
    <Box
      sx={{
        padding: "54px 28px 40px",
        overflow: "visible",
        backgroundColor: COLORS.WHITE,
        position: "relative",
        borderRadius: "16px",
        height:250
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -40,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image src={img} alt="" width={64} />
      </Box>
      <ParaField
        label={heading}
        fontSize={28}
        sx={{ fontWeight: 700 }}
        textAlign="center"
      />
      <ParaField
        label={description}
        fontSize={20}
        textAlign="center"
        sx={{ mt: 1 }}
      />
    </Box>
  );
};

export default MentorProgressCard;
