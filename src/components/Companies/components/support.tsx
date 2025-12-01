import { SUPPORT_CARD_DATA } from "@/assets/mentors";
import GradientText from "@/components/common/Greadient-text";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { Box, Container, Grid, Stack } from "@mui/material";
import SupportCard from "./support-card";
const Support = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid size={{ lg: 10, xs: 12 }} margin="auto">
            <Box data-aos="fade-up">
              <Badge label="Support" margin="auto" width={120} />
            </Box>

            <HeadingField
              label="Support a Student &
empower a Soldier’s Family"
              sx={{
                fontWeight: 700,
                fontFamily: "gomenasans-bold",
                fontSize: { lg: 64, xs: 35 },
              }}
              dataaos="fade-up"
            />
            <ParaField
              label="Real Mentorship. Real Careers. Real Change."
              dataaos="fade-up"
              sx={{ textAlign: "center", fontSize: { lg: 20, xs: 18 } }}
            />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
              sx={{ mt: 3 }}
              data-aos="fade-up"
            >
              <HeadingField label="How" sx={{ fontSize: { lg: 36, xs: 20 } }} />
              <GradientText
                label="Companies"
                sx={{ fontSize: { lg: 36, xs: 20 }, mt: 2 }}
              />
              <HeadingField
                label="Create Impact"
                sx={{ fontSize: { lg: 36, xs: 20 } }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {SUPPORT_CARD_DATA.map((item, index) => (
            <Grid
              size={{ lg: 4, xs: 12 }}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <SupportCard
                img={item.img}
                heading={item.heading}
                description={item.description}
                isLast={item.isLast}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Support;
