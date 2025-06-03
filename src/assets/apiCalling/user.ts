import { useDispatch } from "react-redux";
import { UserController } from "../api/UserController";
import { setUserDetails } from "@/redux/reducers/User";
import { AuthenticationController } from "../api/AuthenticationController";
import { validateDate } from "@mui/x-date-pickers";
import { showToast } from "@/redux/reducers/Toast";
import { TOAST_STATUS, USER_TYPE } from "@/utils/enum";
import { addActiveStep, removeActiveStep } from "@/redux/reducers/Stepper";

export const getUserDetails = ({ dispatch }: any) => {
  UserController.getUser()
    .then((res) => {
      const response = res.data.data;

      dispatch(
        setUserDetails({ ...response, isLoading: false, isAuthenticated: true })
      );
    })
    .catch((err) => {
      console.log("err in get user details", err);
    });
};

// utils/loadGoogleScript.js
export const loadGoogleScript = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    if (document.getElementById("google-client-script")) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.id = "google-client-script";
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

// utils/googleOAuth.ts
export function loadGoogleOAuthScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const scriptId = "google-oauth-script";
    if (document.getElementById(scriptId)) return resolve();

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject("Google script failed to load");
    script.id = scriptId;

    document.head.appendChild(script);
  });
}

export const googleCallbackUrl = ({
  code,
  router,
  setLoading,
  dispatch,
}: any) => {
  AuthenticationController.googleCallback(code)

    .then((res) => {
      // console.log("res", res);
      const response = res.data.data;
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);
      // console.log("response", response);
      localStorage.setItem("group", response.group);
      response.group === USER_TYPE.PARENT
        ? router.push("/parent/profile")
        : response.group === USER_TYPE.STUDENT
        ? router.push("/")
        : router.push(`/create-profile?email=${response.userEmail}`);
      if (response.group === USER_TYPE.STUDENT) {
        dispatch(
          showToast({
            message: "You are not authorized to access this application",
            status: TOAST_STATUS.ERROR,
          })
        );
      }
      setLoading(false);
      getUserDetails({ dispatch });

      dispatch(removeActiveStep());
    })
    .catch((err) => {
      console.log("err", err);
    });
};
