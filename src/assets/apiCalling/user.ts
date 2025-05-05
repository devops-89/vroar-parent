import { useDispatch } from "react-redux";
import { UserController } from "../api/UserController";
import { setUserDetails } from "@/redux/reducers/User";

export const getUserDetails = ({ dispatch }: any) => {
  UserController.getUser()
    .then((res) => {
      const response = res.data.data;

      dispatch(setUserDetails({ ...response, isLoading: false }));
    })
    .catch((err) => {
      console.log("err in get user details", err);
    });
};
