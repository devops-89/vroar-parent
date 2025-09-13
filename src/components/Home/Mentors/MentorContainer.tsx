import React, { useState } from "react";
import { MENTORS_DATA } from "@/assets/mentors";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import ButtonWithIcon from "../Components/ButtonWithIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const MentorContainer = ({ index }: { index: string | number }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid size={{ lg: 6, xs: 12 }}>
          <Grid container spacing={4}>
            {MENTORS_DATA.map((val, i) => (
              <Grid size={4} key={val.id}>
                <IconButton
                  onClick={() => setSelectedIndex(i)}
                  sx={{
                    width: 100,
                    height: 100,
                    backgroundColor:
                      selectedIndex === i ? "#DBDBDB" : "#DBDBDB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                    // border:
                    //   selectedIndex === i
                    //     ? `2px solid ${COLORS.PRIMARY} `
                    //     : "none",
                    transition: "background 0.2s, border 0.2s",
                    ":hover": {
                      backgroundColor:
                        selectedIndex === i ? "DBDBDB" : "#DBDBDB",
                    },
                  }}
                >
                  <Image
                    src={val.img}
                    alt={val.id}
                    width={100}
                    height={100}
                    style={{
                      opacity: selectedIndex === i ? 1 : 0.4,
                      transition: "opacity 0.2s",
                      borderRadius: "50%",
                    }}
                  />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid size={{ lg: 6, xs: 12 }}>
          <div>
            <Typography
              sx={{ fontSize: 18, fontFamily: nunito.style, lineHeight: 2 }}
            >
              {MENTORS_DATA[selectedIndex]?.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Link href={"/all-mentors"}>
          <ButtonWithIcon label="Meet Our Mentors" width={250} />
        </Link>
      </Box>
    </Container>
  );
};

export default MentorContainer;
