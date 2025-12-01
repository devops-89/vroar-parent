import { Drawer, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/logo/Logo.png";
import navbar_bg from "@/banner/mobile_navigation.avif";
import { COLORS } from "@/utils/enum";
import { Close } from "@mui/icons-material";
import { data } from "@/assets/data";
import { useRouter } from "next/router";
import Link from "next/link";
import { nunito } from "@/utils/fonts";
const HeaderSidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const router = useRouter();
  const mergedArray = data.headerLinks1.concat(data.headerLinks2);

  const finalArray = [{ label: "Home", href: "/" }, ...mergedArray];

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          zIndex: 99999,
          p: 3,
          height: "100vh",
          backgroundImage: `url(${navbar_bg.src})`,
          backgroundPosition: "50% 100%",
          backgroundSize: "cover",
        },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Image src={logo} alt="" />

        <IconButton
          sx={{ background: COLORS.LINEAR_GRADIENT }}
          onClick={() => setOpen(false)}
        >
          <Close sx={{ color: COLORS.WHITE }} />
        </IconButton>
      </Stack>

      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={3}
        sx={{ mt: 30 }}
      >
        {finalArray.map((val, i) => (
          <Link
            href={val.href}
            className="link"
            key={i}
            onClick={() => setOpen(false)}
          >
            <Typography
              className={router.pathname === val.href ? "active_link" : ""}
              sx={{
                color: COLORS.BLACK,
                fontFamily: nunito.style,
                fontSize: 20,
              }}
            >
              {val.label}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Drawer>
  );
};

export default HeaderSidebar;
