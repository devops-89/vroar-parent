import banner from "@/banner/faq.avif";
import faq1 from "@/banner/faq1.avif";
import faq2 from "@/banner/faq2.avif";
import FaqCard from "@/components/common/Faq-Card";
import HeadingField from "@/components/common/Heading-Field";
import ParaField from "@/components/common/Para-Field";
import Badge from "@/components/Home/Components/Badge";
import { List } from "@/utils/types";
import { Box, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";

interface FAQ_DATA_PROPS {
  faqData: List[];
  heading: string;
  subHeading: string;
  description: string;
}

const FaqSection = ({
  faqData,
  heading,
  subHeading,
  description,
}: FAQ_DATA_PROPS) => {
  return (
    <Box sx={{ position: "relative", pt: 10 }}>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          minHeight: "120vh",
          backgroundPosition: "50% 100%",
          backgroundSize: "cover",
          pb: 10,
        }}
      >
        <Container>
          <Grid container>
            <Grid size={9} margin={"auto"}>
              <Badge label="FAQS" width={100} margin="auto" />

              <HeadingField label={heading} sx={{ lineHeight: 1.2 }} />
              <HeadingField label={subHeading} sx={{ lineHeight: 1.2 }} />
              <ParaField
                label={description}
                fontSize={20}
                sx={{
                  color: "#262626",
                  fontWeight: 550,
                  textAlign: "center",
                  mt: 2,
                }}
              />

              <FaqCard data={faqData} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ position: "absolute", bottom: 40, width: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={faq1} alt="" width={250} />
          <Image src={faq2} alt="" width={250} />
        </Stack>
      </Box>
    </Box>
  );
};

export default FaqSection;
