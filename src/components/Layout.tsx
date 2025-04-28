import { LayoutProps } from "@/utils/types";
import React, { useEffect, useState } from "react";
import Sidebar from "./Profile/Sidebar";
import { useRouter } from "next/router";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/verify-otp") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [router.pathname]);

  return (
    <div>
      {/* {show && <Sidebar />} */}
      {children}
    </div>
  );
};

export default Layout;
