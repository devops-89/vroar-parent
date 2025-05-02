import {
  RESEND_OTP,
  USER_INVITE,
  USER_REGISTER,
  VERIFY_DATA,
} from "@/utils/types";
import { publicApi, securedApi } from "./config";

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
};
