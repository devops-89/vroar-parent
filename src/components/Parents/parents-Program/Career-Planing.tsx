import { nunito } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";
interface bannerProps {
  img: string;
  heading: string;
  description: string;
  height: string;
}
const CareerPlaning = ({ img, heading, description, height }: bannerProps) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        padding: "32px",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        border: "1px solid #f3f3f3",
        borderRadius: "20px",
        height: { height },
        width: "100%",
      }}
    >
      <Typography
        sx={{
          mt: 1,
          fontSize: 32,
          fontFamily: nunito.style,
          fontWeight: 700,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: nunito.style,

          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CareerPlaning;
