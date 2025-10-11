import {
  PRIVACY_POLICY_DATA,
  privacyPolicySidebar,
} from "@/assets/contentSidebar";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { Circle, CircleOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { FaAngleRight } from "react-icons/fa";
import ParaField from "../common/Para-Field";
import Overview from "../common/privacy/overview";
import ContentSidebar from "../widgets/sidebar";
import NestedListBox from "../common/privacy/nested-list-box";
import ListBox from "../common/privacy/list-box";

const PrivacyPolicyLayout = () => {
  return (
    <Box sx={{ mt: 4, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start" wrap="nowrap">
          <Grid size={3} sx={{ display: { lg: "block", xs: "none" } }}>
            <ContentSidebar data={privacyPolicySidebar} />
          </Grid>
          <Grid size={{ lg: 9, xs: 12 }} sx={{ overflowY: "auto" }}>
            <Overview description="MyTreks is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and share your data when you use our App." />

            <Divider sx={{ mt: 3, borderWidth: 1 }} />

            {/* collection */}
            <Box sx={{ mt: 3 }}>
              <ParaField
                label={`1. ${PRIVACY_POLICY_DATA.collection.heading}`}
                sx={{ fontSize: 24, fontWeight: 700 }}
              />
              <ParaField
                label={PRIVACY_POLICY_DATA.collection.description}
                sx={{ fontSize: 20, mt: 3 }}
              />

              <Box sx={{ mt: 3 }}>
                <NestedListBox data={PRIVACY_POLICY_DATA.collection.list} />

                <ParaField
                  label={PRIVACY_POLICY_DATA.collection.endDescription}
                  sx={{ fontSize: 20 }}
                />
              </Box>
            </Box>
            <Divider sx={{ mt: 3, borderWidth: 1 }} />

            {/* data security */}
            <Box sx={{ mt: 3 }}>
              <ParaField
                label={`2. ${PRIVACY_POLICY_DATA.data_security.heading}`}
                sx={{ fontSize: 24, fontWeight: 700 }}
              />

              <Box sx={{ mt: 3 }}>
                <ListBox data={PRIVACY_POLICY_DATA.data_security.list} />
              </Box>
            </Box>

            {/* information sharing */}
            <Divider sx={{ mt: 3, borderWidth: 1 }} />
            <Box sx={{ mt: 3 }}>
              <ParaField
                label={`3. ${PRIVACY_POLICY_DATA.information_sharing.heading}`}
                sx={{ fontSize: 24, fontWeight: 700 }}
              />

              <ParaField
                label={PRIVACY_POLICY_DATA.information_sharing.description}
                sx={{ fontSize: 20, fontWeight: 400, mt: 2 }}
              />
              <Box sx={{ mt: 3 }}>
                <ListBox data={PRIVACY_POLICY_DATA.information_sharing.list} />
              </Box>
            </Box>

            {/* cookies */}

            <Divider sx={{ mt: 3, borderWidth: 1 }} />
            <Box sx={{ mt: 3 }}>
              <ParaField
                label={`4. ${PRIVACY_POLICY_DATA.cookies.heading}`}
                sx={{ fontSize: 24, fontWeight: 700 }}
              />

              <ParaField
                label={PRIVACY_POLICY_DATA.cookies.description}
                sx={{ fontSize: 20, fontWeight: 400, mt: 2 }}
              />
              <Box sx={{ my: 2 }}>
                <ListBox data={PRIVACY_POLICY_DATA.cookies.list} />
              </Box>
              <ParaField
                label={PRIVACY_POLICY_DATA.cookies.endDescription}
                sx={{ fontSize: 20, fontWeight: 400, mt: 2 }}
              />
            </Box>

            {/*  third party links */}
            <Divider sx={{ mt: 3, borderWidth: 1 }} />
            <Box sx={{ mt: 3 }}>
              <ParaField
                label={`5. ${PRIVACY_POLICY_DATA.third_party.heading}`}
                sx={{ fontSize: 24, fontWeight: 700 }}
              />

              <ParaField
                label={PRIVACY_POLICY_DATA.third_party.description}
                sx={{ fontSize: 20, fontWeight: 400, mt: 2 }}
              />
            </Box>
            {/* privacy rights */}
            <Divider sx={{ mt: 3, borderWidth: 1 }} />
            <Box sx={{ mt: 3 }}>
              <ParaField
                label={`6. ${PRIVACY_POLICY_DATA.privacy_rights.heading}`}
                sx={{ fontSize: 24, fontWeight: 700 }}
              />

              <ParaField
                label={PRIVACY_POLICY_DATA.privacy_rights.description}
                sx={{ fontSize: 20, fontWeight: 400, mt: 2 }}
              />
            </Box>
            {/* privacy policy */}
            <Divider sx={{ mt: 3, borderWidth: 1 }} />
            <Box sx={{ mt: 3 }}>
              <ParaField
                label={`7. ${PRIVACY_POLICY_DATA.privacy_policy.heading}`}
                sx={{ fontSize: 24, fontWeight: 700 }}
              />

              <ParaField
                label={PRIVACY_POLICY_DATA.privacy_policy.description}
                sx={{ fontSize: 20, fontWeight: 400, mt: 2 }}
              />
            </Box>
            {/* privacy policy */}
            <Divider sx={{ mt: 3, borderWidth: 1 }} />
            <Box sx={{ mt: 3 }}>
              <ParaField
                label={`8. Policy Access and Contact Information`}
                sx={{ fontSize: 24, fontWeight: 700 }}
              />

              <List>
                <ListItem sx={{ alignItems: "flex-start" }}>
                  <ListItemAvatar sx={{ minWidth: 30, mt: 1 }}>
                    <Circle sx={{ fontSize: 10 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <ParaField label="Policy Access:" sx={{ fontSize: 20 }} />
                    }
                    secondary={
                      <Typography
                        sx={{
                          fontSize: 18,
                          fontWeight: 400,
                          color: COLORS.LIGHT_BLACK,
                          fontFamily: nunito.style.fontFamily,
                        }}
                      >
                        The full Privacy Policy is available directly within the
                        MyTreks App under “Settings <FaAngleRight /> Legal” as
                        well as on our{" "}
                        <Typography
                          sx={{
                            textDecoration: "underline",
                            color: COLORS.PRIMARY,
                            fontWeight: 600,
                          }}
                          component={"span"}
                        >
                          App Store listing{" "}
                        </Typography>{" "}
                        .
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ alignItems: "flex-start" }}>
                  <ListItemAvatar sx={{ minWidth: 30, mt: 1 }}>
                    <Circle sx={{ fontSize: 10 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <ParaField label="Contact Us:" sx={{ fontSize: 20 }} />
                    }
                    secondary={
                      <Stack>
                        <ParaField
                          label="For any questions or concerns regarding this Privacy Policy,"
                          sx={{ fontSize: 18, color: COLORS.BLACK }}
                        />
                        <ParaField
                          label="please contact us at:"
                          sx={{ fontSize: 18, color: COLORS.BLACK }}
                        />
                        <ParaField
                          label="Email: info@mytreks.ai"
                          sx={{ fontSize: 18, color: COLORS.BLACK }}
                        />
                        <ParaField
                          label="Mailing Address: 6275 Corvara Court Frisco, TX 75035, USA"
                          sx={{ fontSize: 18, color: COLORS.BLACK }}
                        />
                      </Stack>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyLayout;
