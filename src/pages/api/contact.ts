import { FORM_TYPE } from "@/utils/enum";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.HIGHLEVEL_API_KEY;
const LOCATION_ID = process.env.HIGHLEVEL_LOCATION_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log("Contact API called with method:", req.method);
  // console.log("Request body:", req.body);
  // console.log("apikey", API_KEY);

  // console.log("re.header", req.headers);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { type, fields } = req.body;

  if (!API_KEY) {
    console.log("API_KEY missing from environment variables");
    return res.status(401).json({ error: "API key missing" });
  }
  if (!LOCATION_ID) {
    console.log("Location ID missing from environment variables");
    return res.status(401).json({ error: "Location ID missing" });
  }
  if (!type || !fields) {
    return res.status(400).json({ error: "Missing type or fields" });
  }

  // Name split into first/last
  const [firstName, ...rest] = (fields.fullName || "").split(" ");
  const lastName = rest.join(" ") || "";

  // Base body
  let body: Record<string, any> = {
    firstName,
    lastName,
    email: fields.email,
    phone: fields.phone,
    locationId: LOCATION_ID,
    tags: [],
    customFields: [],
  };

  switch (type) {
    case FORM_TYPE.DEMO:
      body.tags.push("Demo Call");
      if (fields.appointmentDate) {
        body.customFields.push({
          // id: process.env.CUSTOM_FIELD_APPOINTMENT_DATE, // GHL field ID
          value: fields.appointmentDate,
        });
      }
      if (fields.message) {
        body.customFields.push({
          value: fields.message,
        });
      }
      break;

    case FORM_TYPE.SPEAKER:
      body.tags.push("Speaker");
      if (fields.topics) {
        body.customFields.push({
          id: process.env.CUSTOM_FIELD_TOPICS,
          value: fields.topics,
        });
      }
      if (fields.linkedIn) {
        body.customFields.push({
          id: process.env.CUSTOM_FIELD_LINKEDIN,
          value: fields.linkedIn,
        });
      }
      if (fields.videoLink) {
        body.customFields.push({
          id: process.env.CUSTOM_FIELD_VIDEO_LINK,
          value: fields.videoLink,
        });
      }
      break;

    case FORM_TYPE.MENTOR:
      body.tags.push("Mentor");
      if (fields.role) {
        body.customFields.push({
          id: process.env.CUSTOM_FIELD_ROLE,
          value: fields.role,
        });
      }
      if (fields.message) {
        body.customFields.push({
          id: process.env.CUSTOM_FIELD_MESSAGE,
          value: fields.message,
        });
      }
      if (fields.linkedIn) {
        body.customFields.push({
          id: process.env.CUSTOM_FIELD_LINKEDIN,
          value: fields.linkedIn,
        });
      }
      break;

    case "contact":
      body.tags.push("Contact Form");
      if (fields.message) {
        body.customFields.push({
          id: process.env.CUSTOM_FIELD_MESSAGE,
          value: fields.message,
        });
      }
      break;

    default:
      body.tags.push("Other");
      Object.keys(fields).forEach((key) => {
        body.customFields.push({
          id: process.env[`CUSTOM_FIELD_${key.toUpperCase()}`],
          value: fields[key],
        });
      });
  }

  try {
    const response = await axios.post(
      "https://services.leadconnectorhq.com/contacts/",
      body,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
      }
    );

    res.status(200).json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("new error", error);
    res
      .status(error.response?.status || 500)
      .json({ error: error.response?.data || "API call failed" });
  }
}
