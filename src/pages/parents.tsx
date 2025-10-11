import BookaDemo from "@/assets/ModalCalling/website/book-a-demo";
import { parentTestimonial } from "@/assets/testimonial";
import banner from "@/banner/parents/parents-hero.avif";
import phone_mock from "@/banner/parents/phone-mock.avif";
import phone_mock_banner from "@/banner/parents/why_mytreks/why_choose_section.jpg";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import ButtonWithIcon from "@/components/Home/Components/ButtonWithIcon";
import ParentCurriculum from "@/components/Parents/curriculum/Index";
import ParentFaqSection from "@/components/Parents/faq-section/Index";
import OurMentorsParents from "@/components/Parents/Mentors";
import OurParentApp from "@/components/Parents/OurApp";
import Parentsprogram from "@/components/Parents/parents-Program";
import ParentTestimonial from "@/components/Parents/Testimonial/Parent-Testimonial";
import Workshop from "@/components/Parents/workshop/Index";
import { showModal } from "@/redux/reducers/Modal";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const Parents = () => {
  const phone = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();

  const bookDemoModal = () => {
    dispatch(showModal(<BookaDemo />));
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          height: "100%",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgrooundRepeat: "no-repeat",
          py: { lg: 20, xs: 5 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container sx={{ mt: { lg: 10, xs: 10 } }}>
          <Grid container>
            <Grid size={{ lg: 10, xs: 12 }} margin={"auto"}>
              <Typography
                sx={{
                  fontSize: { lg: 68, xs: 35 },
                  fontFamily: "gomenasans-bold,Arial,sans-serif",
                  fontWeight: 700,
                  color: COLORS.BLACK,
                  textAlign: "center",
                  marginBottom: -1,
                  lineHeight: 1.1,
                }}
              >
                Discover What Makes
              </Typography>
              <Typography
                sx={{
                  backgroundImage: COLORS.TEXT_GRADIENT,
                  backgroundClip: "text",
                  color: COLORS.TRANSPARENT,
                  fontSize: { lg: 68, xs: 35 },
                  fontFamily: "gomenasans-bold,Arial,sans-serif",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Your Child Shine
              </Typography>
              <Typography
                sx={{
                  fontFamily: nunito.style,
                  color: COLORS.BLACK,
                  textAlign: "center",
                  fontSize: { lg: 20, xs: 18 },
                  mt: 3,
                }}
              >
                Backed by neuroscience, powered by coaching, and built for
                parents who want clarity for their child.
              </Typography>
              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Link href={"/login"}>
                  <ButtonWithIcon
                    label="Get started now"
                    // onClick={bookDemoModal}
                    sx={{ width: 250 }}
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ pt: 10 }}>
        <Parentsprogram />
      </Box>
      <Box sx={{ pt: 10 }}>
        <Workshop />
      </Box>
      <Box sx={{ pt: 10 }}>
        <ParentCurriculum />
      </Box>
      <Box sx={{ pt: 10 }}>
        <OurMentorsParents />
      </Box>
      <Box sx={{ pt: 10 }}>
        <OurParentApp />
      </Box>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundImage: `url(${phone_mock_banner.src})`,
            border: `1px solid ${COLORS.WHITE}`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            borderRadius: "57px",
            height: { lg: "430px", xs: "100%" },
            paddingLeft: "80px",
            marginTop: "-70px",
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: 99,
          }}
        >
          <Grid container>
            <Grid size={{ lg: 6, xs: 12 }}>
              <HeadingField
                label="Turn Potential into Purpose Together."
                color="#28084B"
                textAlign="left"
                sx={{
                  fontSize: { lg: 60, xs: 35 },
                  fontFamily: "gomenasans-bold",
                }}
              />
              <ParaField
                label="Enroll with MyTreks.ai Today"
                color="#28084B"
                sx={{ mt: 2, fontSize: { lg: 20, xs: 16 } }}
              />
              <Link href="/login">
                <ButtonWithIcon label="Enroll Now" sx={{ mt: 2,width:200 }} />
              </Link>
            </Grid>
            <Grid size={{ lg: 6, xs: 12 }}>
              <Image
                src={phone_mock}
                alt=""
                style={{
                  position: phone ? "initial" : "absolute",
                  inset: "auto -3% 0% auto",
                  top: phone ? 130 : -75,
                  width: phone ? 300 : 570,
                  height: phone ? 300 : 500,
                  maxWidth: "100%",
                  bottom: phone ? 0 : 0,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ mt: 8 }}>
        <ParentTestimonial testimonialData={parentTestimonial} />
      </Box>
      <Box >
        <ParentFaqSection />
      </Box>
    </Box>
  );
};

export default Parents;
