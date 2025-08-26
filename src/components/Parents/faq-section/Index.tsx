import { ParentFaqData } from "@/assets/faqData";
import FaqSection from "@/components/common/Faq-Section";
import { Box } from "@mui/material";
const ParentFaqSection = () => {
  return (
    <Box>
      <FaqSection
        faqData={ParentFaqData}
        heading="Got Questions?"
        subHeading="We’re Here to Guide You"
        description="  Parenting comes with a million questions we’ve answered the ones
        you might ask first. If it’s about your child’s growth, purpose,
        or future, we’ve got it covered."
      />
    </Box>
  );
};

export default ParentFaqSection;
