import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import bannerImage from "@/banner/support-banner.webp";
import HeadingField from "@/components/common/Heading-Field";
import { COLORS } from "@/utils/enum";
import ContentSidebar from "@/components/widgets/sidebar";
import {
  terms_conditions_data,
  TERMS_CONTENT_SIDEBAR,
} from "@/assets/contentSidebar";
import Overview from "@/components/common/privacy/overview";
import ParaField from "@/components/common/Para-Field";
import ListBox from "@/components/common/privacy/list-box";
import NestedListBox from "@/components/common/privacy/nested-list-box";
const Terms = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bannerImage.src})`,
          height: { lg: "60vh", xs: "40vh" },
          backgroundPosition: "50%",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <HeadingField
            label="Terms and Conditions"
            sx={{
              fontSize: { lg: 64, xs: 35 },
              fontFamily: "gomenasans-bold",
              color: COLORS.WHITE,
            }}
          />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
        <Grid container spacing={5}>
          <Grid size={3} sx={{ display: { lg: "block", xs: "none" } }}>
            <ContentSidebar data={TERMS_CONTENT_SIDEBAR} />
          </Grid>
          <Grid size={{ lg: 9, xs: 12 }}>
            <Overview description="Welcome to MyTreks, a revolutionary platform designed to connect students with companies, mentors, career counselors and coaches. These Terms and Conditions and Privacy Policy govern your use of our services. By accessing or using MyTreks (the “App”), you agree to be bound by these policies. Our platform serves multiple user roles—including Students, Parents, Companies, and Mentors—and each category is subject to additional terms outlined below." />
            <Divider sx={{ borderWidth: 1, my: 2 }} />
            {/*  acceptance */}
            <ParaField
              label={`1. ${terms_conditions_data.acceptance.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ParaField
              label={terms_conditions_data.acceptance.description}
              sx={{ fontSize: 20, fontWeight: 400, mt: 1 }}
            />
            <Divider sx={{ borderWidth: 1, my: 2 }} />
            {/* description */}
            <ParaField
              label={`2. ${terms_conditions_data.descriptionOfServices.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ParaField
              label={terms_conditions_data.descriptionOfServices.description}
              sx={{ fontSize: 20, fontWeight: 400, mt: 1 }}
            />
            <ListBox data={terms_conditions_data.descriptionOfServices.list} />
            {/* user categories */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`3. ${terms_conditions_data.user_categories_and_eligibility.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <NestedListBox
              data={terms_conditions_data.user_categories_and_eligibility.list}
            />
            {/* Account registration */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`4. ${terms_conditions_data.account_registry_and_security.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ListBox
              data={terms_conditions_data.account_registry_and_security.list}
            />
            {/* Authentication method */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`5. ${terms_conditions_data.authentication_methods.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ListBox data={terms_conditions_data.authentication_methods.list} />
            {/* Authentication method */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`6. ${terms_conditions_data.permitted_use_and_prohibited_conduct.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <NestedListBox
              data={
                terms_conditions_data.permitted_use_and_prohibited_conduct.list
              }
            />
            {/* Authentication method */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`7. ${terms_conditions_data.intellectula_property_rights.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ListBox
              data={terms_conditions_data.intellectula_property_rights.list}
            />
            {/* Authentication method */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`8. ${terms_conditions_data.disclaimer.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <NestedListBox data={terms_conditions_data.disclaimer.list} />
            {/* Authentication method */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`9. ${terms_conditions_data.termination.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ListBox data={terms_conditions_data.termination.list} />
            {/* governing */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`10. ${terms_conditions_data.governing_law.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ListBox data={terms_conditions_data.governing_law.list} />
            {/* modifications */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`11. ${terms_conditions_data.modifications.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ListBox data={terms_conditions_data.modifications.list} />
            {/* policy */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`12. ${terms_conditions_data.policy_access.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            <ListBox data={terms_conditions_data.policy_access.list} />
            {/* contact information */}
            <Divider sx={{ borderWidth: 1, my: 2 }} />

            <ParaField
              label={`13. ${terms_conditions_data.contact.title}`}
              sx={{ fontSize: 24, fontWeight: 600 }}
            />
            {/* <ParaField
              label={`${terms_conditions_data.contact.value}`}
              sx={{ fontSize: 20 }}
            /> */}
            <ParaField
              label="For any questions or concerns regarding these Terms and Conditions, please contact us at:"
              sx={{ fontSize: 18 }}
            />
            <ParaField label="Email: info@mytreks.ai" sx={{ fontSize: 18 }} />
            <ParaField
              label="Mailing Address: 6275 Corvara Court Frisco,
TX 75035, USA"
              sx={{ fontSize: 18 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Terms;
