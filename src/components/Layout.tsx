import { setUserDetails } from "@/redux/reducers/User";
import { LayoutProps } from "@/utils/types";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProfileSidebar from "./Profile/ProfileSidebar";
import { UserController } from "@/assets/api/UserController";
import Head from "next/head";
import { IconButton, useMediaQuery } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import MobileSidebar from "./Profile/MobileSidebar";
import Sidebar from "./Profile/Sidebar";
import Header from "./Header";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (
      router.pathname === "/parent/profile" ||
      router.pathname === "/parent/subscriptions" ||
      router.pathname === "/parent/settings"
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [router.pathname]);

  // useEffect(()=>{
  //   if()
  // },[router.pathname])
  const dispatch = useDispatch();
  const getUserDetails = () => {
    UserController.getUser()
      .then((res) => {
        const response = res.data.data;
        dispatch(
          setUserDetails({
            ...response,
            isLoading: false,
            isAuthenticated: true,
          })
        );
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      getUserDetails();
    }
  }, []);

  const phone = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <link rel="icon" href="/favicon.png" />
      {/* {show && <Sidebar />} */}
      <Head>
        <link rel="icon" href="/favicon_mytreks.png" />
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </Head>
      <Header />
      {phone && show ? <MobileSidebar /> : show ? <ProfileSidebar /> : ""}
      {children}
    </div>
  );
};

export default Layout;
