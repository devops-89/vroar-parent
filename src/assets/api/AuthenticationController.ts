import {
  LOGIN_SCHEMA,
  PASSWORD_PROPS,
  RESEND_OTP,
  USER_INVITE,
  USER_REGISTER,
  VERIFY_DATA,
} from "@/utils/types";
import { publicApi, securedApi } from "./config";
import { DEVICE_TYPE } from "@/utils/enum";

export const AuthenticationController = {
  emailExists: async (data: { email: string }) => {
    try {
      const result = await publicApi.post("/user/verifyEmail", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  register: async (data: USER_REGISTER) => {
    try {
      const result = await publicApi.post("/user/register", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  verifyOtp: async (data: VERIFY_DATA) => {
    try {
      let result = await publicApi.post("/user/verify", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  resendOtp: async (data: RESEND_OTP) => {
    try {
      let result = await publicApi.post("/user/resendOtp", {
        referenceId: data.referenceId,
      });
      return result;
    } catch (error) {
      throw error;
    }
  },

  inviteUser: async (data: USER_INVITE) => {
    try {
      let result = await securedApi.post("/userInvite/sendInvite", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  login: async (data: LOGIN_SCHEMA) => {
    try {
      let result = await publicApi.post("/user/login", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    try {
      let result = await securedApi.get("/logout/currentSession");
      return result;
    } catch (error) {
      throw error;
    }
  },
  getInviteesDetail: async () => {
    try {
      let result = await securedApi.get("/userInvite/getInvites");
      return result;
    } catch (error) {
      throw error;
    }
  },
  changePassword: async (data: PASSWORD_PROPS) => {
    try {
      let result = await securedApi.post("/user/changePassword", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  googleLogin: async (token: string) => {
    try {
      let result = await publicApi.post(
        `/socialLogin/google/mobile`,
        {
          id_token: token,
        },
        {
          headers: {
            devicetype: DEVICE_TYPE.WEB,
          },
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  },

  googleSocialLogin: async () => {
    try {
      let result = await publicApi.get("/socialLogin/google");
      return result;
    } catch (error) {
      throw error;
    }
  },
  googleCallback: async (code: string) => {
    // console.log("code in api controller", code);
    try {
      let result = await publicApi.get(`socialLogin/google/callback?${code}`);
      return result;
    } catch (error) {
      throw error;
    }
  },
};
