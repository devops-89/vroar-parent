import { useDispatch } from "react-redux";
import { UserController } from "../api/UserController";
import { setUserDetails } from "@/redux/reducers/User";
import { AuthenticationController } from "../api/AuthenticationController";
import { validateDate } from "@mui/x-date-pickers";
import { showToast } from "@/redux/reducers/Toast";
import { TOAST_STATUS } from "@/utils/enum";

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

export const googleCallbackUrl = (code: string) => {
  AuthenticationController.googleCallback(code)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
