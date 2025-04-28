import { MEDIA_UPLOAD } from "@/utils/types";
import { publicApi, securedApi, userPublicApi } from "./config";

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
};
