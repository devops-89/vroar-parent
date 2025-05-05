import { setUserDetails } from "@/redux/reducers/User";
import { LayoutProps } from "@/utils/types";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProfileSidebar from "./Profile/ProfileSidebar";
import { UserController } from "@/assets/api/UserController";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (
      router.pathname === "/parent/profile" ||
      router.pathname === "/parent/subscriptions"
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [router.pathname]);
  const dispatch = useDispatch();
  const getUserDetails = () => {
    UserController.getUser()
      .then((res) => {
        // console.log("Res", res);
        const response = res.data.data;
        dispatch(setUserDetails({ ...response, isLoading: false }));
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

  return (
    <div>
      {/* {show && <Sidebar />} */}
      {show && <ProfileSidebar />}
      {children}
    </div>
  );
};

export default Layout;
