import { USER_REGISTER, VERIFY_DATA } from "@/utils/types";
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
};
