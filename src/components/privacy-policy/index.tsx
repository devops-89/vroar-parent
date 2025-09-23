import {
  PRIVACY_POLICY_DATA,
  privacyPolicySidebar,
} from "@/assets/contentSidebar";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import {
  Circle,
  CircleOutlined
} from "@mui/icons-material";
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

const PrivacyPolicyLayout = () => {
  return (
    <Box sx={{ mt: 4, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start" wrap="nowrap">
          <Grid size={3}>
            <ContentSidebar data={privacyPolicySidebar} />
          </Grid>
          <Grid size={9} sx={{ overflowY: "auto" }}>
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
                {PRIVACY_POLICY_DATA.collection.list.map((val, i) => (
                  <Box key={i}>
                    <Stack direction={"row"} alignItems={"center"} spacing={3}>
                      <Circle sx={{ fontSize: 12 }} />

                      <ParaField label={val.heading} sx={{ fontSize: 20 }} />
                    </Stack>
                    {val.nestedList && (
                      <List>
                        {val.nestedList.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemAvatar>
                              <CircleOutlined sx={{ fontSize: 12 }} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <ParaField
                                  label={item.label}
                                  sx={{ fontSize: 18 }}
                                />
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                ))}

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
                <List>
                  {PRIVACY_POLICY_DATA.data_security.list.map((val, i) => (
                    <ListItem sx={{ alignItems: "flex-start" }}>
                      <ListItemAvatar sx={{ minWidth: 23, mt: 2 }}>
                        <Circle sx={{ fontSize: 10 }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <ParaField
                            label={val.label}
                            sx={{ fontSize: 20, fontWeight: 550 }}
                          />
                        }
                        secondary={
                          <ParaField label={val.value} sx={{ fontSize: 18 }} />
                        }
                      />
                    </ListItem>
                  ))}
                </List>
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
                <List>
                  {PRIVACY_POLICY_DATA.information_sharing.list.map(
                    (val, i) => (
                      <ListItem sx={{ alignItems: "flex-start" }}>
                        <ListItemAvatar sx={{ minWidth: 23, mt: 2 }}>
                          <Circle sx={{ fontSize: 10 }} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <ParaField
                              label={val.label}
                              sx={{ fontSize: 20, fontWeight: 600 }}
                            />
                          }
                          secondary={
                            <ParaField
                              label={val.value}
                              sx={{ fontSize: 18 }}
                            />
                          }
                        />
                      </ListItem>
                    )
                  )}
                </List>
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
                <List>
                  {PRIVACY_POLICY_DATA.cookies.list.map((val, i) => (
                    <ListItem sx={{ alignItems: "flex-start" }}>
                      <ListItemAvatar sx={{ minWidth: 23, mt: 2 }}>
                        <Circle sx={{ fontSize: 10 }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <ParaField label={val.label} sx={{ fontSize: 20 }} />
                        }
                      />
                    </ListItem>
                  ))}
                </List>
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
