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

export const loginWithGoogle = ({ dispatch, setSocialLoading }: any) => {
  AuthenticationController.googleLogin()
    .then((res) => {
      const response = res.data.data;
      window.location.href = response?.url;
      setSocialLoading(false);
      // console.log("google", res);
    })
    .catch((err) => {
      console.log("err", err);
      let errMessage =
        (err.response && err.response.data.message) || err.message;
      dispatch(showToast({ message: errMessage, variant: TOAST_STATUS.ERROR }));
      setSocialLoading(false);
    });
};
