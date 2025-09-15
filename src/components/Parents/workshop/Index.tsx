import img1 from "@/banner/parents/workshop/img1.avif";
import img2 from "@/banner/parents/workshop/img2.avif";
import banner from "@/banner/parents/workshopBanner.avif";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import WorkshopCard from "./Workshop-card";
const Workshop = () => {
  const workshopData = [
    {
      img: img1,
      workshopLabel: "Workshop 1",
      heading: "High School Success Plan",
      description:
        "Create a personalized high school roadmap with the right classes, programs, and internships aligned to GPA, goals, and strengths",
      labelColor: COLORS.DARK_YELLOW,
    },
    {
      img: img2,
      workshopLabel: "Workshop 2",
      heading: "College & Career Prep",
      description:
        "Create a personalized high school roadmap with the right classes, programs, and internships aligned to GPA, goals, and strengths",
      labelColor: COLORS.LIGHT_YELLOW,
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        p: { lg: 10, xs: 0 },
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 10, lg: 0 } }}>
        <Grid container>
          <Grid size={{ lg: 10, xs: 12 }} margin={{ lg: "auto", xs: 0 }}>
            <Badge label="Workshop" margin="auto" width={100} />
            <HeadingField
              label="Family-First Career Planning That Actually Works"
              color={COLORS.WHITE}
              sx={{ fontSize: { xs: 25 } }}
            />
            <ParaField
              label="Designed as a family partnership. Delivered with expert guidance."
              color={COLORS.WHITE}
              // fontSize={20}
              textAlign="center"
              sx={{ mt: 2, fontSize: { xs: 16, lg: 20 } }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {workshopData.map((val, i) => (
            <Grid size={{ lg: 6, xs: 12 }} key={i}>
              <WorkshopCard
                img={val.img}
                workshopLabel={val.workshopLabel}
                heading={val.heading}
                description={val.description}
                labelColor={val.labelColor}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Workshop;
