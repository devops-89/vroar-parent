import { MEDIA_UPLOAD } from "@/utils/types";
import { publicApi, securedApi, userPublicApi, userSecuredApi } from "./config";

export const UserController = {
  mediaUpload: async (data: MEDIA_UPLOAD) => {
    try {
      const result = await userPublicApi.post("/media/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
  updateProfile: async (data: any) => {
    try {
      const result = await userSecuredApi.put("/profile/updateProfile", data);
      return result;
    } catch (error) {
      throw error;
    }
  },
  getUser: async () => {
    try {
      const result = await userSecuredApi.get("/user/getUserById");
      return result;
    } catch (error) {
      throw error;
    }
  },
};
