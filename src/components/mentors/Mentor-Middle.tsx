import middleMentor from "@/banner/mentors/mentor_hero.avif";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import SimpleButton from "../Home/Components/SimpleButton";
import Secondarybutton from "../common/Secondary-Button";
import { useDispatch } from "react-redux";
import { showModal } from "@/redux/reducers/Modal";
import BecomeAMentor from "@/assets/ModalCalling/website/become-a-mentor";
import SpeakerModal from "@/assets/ModalCalling/website/become-a-speaker";
const MentorMiddle = () => {
  const dispatch = useDispatch();

  const becomeaMentor = () => {
    dispatch(showModal(<BecomeAMentor />));
  };

  const becomeaSpeaker = () => {
    dispatch(showModal(<SpeakerModal />));
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Image
        src={middleMentor}
        alt=""
        style={{ width: "100%", height: "100%" }}
      />
      <Box
        sx={{
          textAlign: "center",
          margin: { lg: "auto", xs: "0" },
        }}
      >
        <Stack
          direction={{ lg: "row", xs: "column" }}
          sx={{
            backgroundColor: { lg: COLORS.WHITE, xs: COLORS.TRANSPARENT },
            borderRadius: "160px",
            padding: "16px",
            position: { lg: "absolute", xs: "initial" },
            bottom: "1.375rem",
            left: "50%",
            transform: { lg: "translateX(-50%)", xs: "" },
            width: { lg: "60%", xs: "100%" },
            zIndex: 999,
          }}
          alignItems={"center"}
          spacing={2}
          justifyContent={"center"}
        >
          <SimpleButton label="Become a Mentor" onClick={becomeaMentor} />
          <Secondarybutton
            label="Become a Speaker"
            sx={{
              border: `1px solid ${COLORS.BLACK}`,
              backgroundColor: COLORS.TRANSPARENT,
              color: COLORS.BLACK,
              fontSize: 18,
              fontFamily: nunito.style.fontFamily,
              borderRadius: "10rem",
              textTransform: "initial",
            }}
            onClick={becomeaSpeaker}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default MentorMiddle;
