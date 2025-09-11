import { Box, Button, Card } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import teamImg from "@/team/yusra.avif";
import Image from "next/image";
import HeadingField from "../common/Heading-Field";
import ParaField from "../common/Para-Field";
import { COLORS } from "@/utils/enum";
import { nunito } from "@/utils/fonts";
import { TEAM_CARD_PROPS } from "@/utils/types";
const TeamCard = ({ img, designation, name, summary }: TEAM_CARD_PROPS) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const COLLAPSED_HEIGHT = 180;
  const HEIGHT_BUFFER = 64;

  useEffect(() => {
    const updateHeights = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, [summary]);

  useEffect(() => {
    if (!contentRef.current || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);
  const showToggle = contentHeight > COLLAPSED_HEIGHT;

  return (
    <Card sx={{ p: "20px", borderRadius: "20px", height: "100%" }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={img}
          alt=""
          style={{ width: 350, height: 300, margin: "auto" }}
        />
      </Box>

      <HeadingField
        label={name}
        sx={{
          textTransform: "capitalize",
          fontSize: 24,
          textAlign: "left",
          lineHeight: 1.1,
          fontFamily: "gomenasans-bold",
        }}
      />
      <ParaField label={designation} sx={{ fontSize: 18, fontWeight: 600 }} />
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          transition: "max-height 400ms ease",
          maxHeight: expanded
            ? `${contentHeight + HEIGHT_BUFFER}px`
            : `${COLLAPSED_HEIGHT}px`,
        }}
      >
        <Box ref={contentRef}>
          <ParaField label={summary} sx={{ fontSize: 16 }} />
        </Box>
        {!expanded && showToggle && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 48,
              background: (theme) =>
                `linear-gradient(to top, ${theme.palette.background.paper}, rgba(255,255,255,0))`,
              pointerEvents: "none",
            }}
          />
        )}
      </Box>
      {showToggle && (
        <Box sx={{ textAlign: "end", mt: 1 }}>
          <Button
            onClick={() => setExpanded((prev) => !prev)}
            sx={{
              mt: 1,
              color: COLORS.PRIMARY,
              fontSize: 14,
              fontfamily: nunito.style.fontFamily,
              fontWeight: 550,
            }}
          >
            {expanded ? "Read less" : "Read more"}
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default TeamCard;
