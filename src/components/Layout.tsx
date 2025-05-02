import { setUserDetails } from "@/redux/reducers/User";
import { LayoutProps } from "@/utils/types";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProfileSidebar from "./Profile/ProfileSidebar";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (router.pathname === "/parent/profile") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [router.pathname]);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(setUserDetails({ ...decoded }));
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
