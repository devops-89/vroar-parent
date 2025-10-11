import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_KEY = process.env.HIGHLEVEL_API_KEY as string;
const LOCATION_ID = process.env.HIGHLEVEL_LOCATION_ID;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `https://services.leadconnectorhq.com/locations/${LOCATION_ID}/customFields`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error("🔥 GHL API Error:", error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({
      error: "Failed to fetch forms",
      details: error.response?.data || error.message,
    });
  }
}
