import { FORM_TYPE } from "@/utils/enum";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.HIGHLEVEL_API_KEY;
console.log("API_KEY:", API_KEY ? "Found" : "Missing");
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Contact API called with method:", req.method);
  console.log("Request body:", req.body);

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { type, fields } = req.body;
  const token = req.headers.authorization?.split(" ")[1];

  console.log("Type:", type, "Fields:", fields);

  if (!API_KEY) {
    console.log("API_KEY missing from environment variables");
    return res.status(401).json({ error: "Access token missing" });
  }
  if (!type || !fields)
    return res.status(400).json({ error: "Missing type or fields" });

  let body: Record<string, any> = {
    fullName: fields.fullName,
    email: fields.email,
    phone: fields.phone,
    tags: [],
    customField: {},
  };

  switch (type) {
    case FORM_TYPE.DEMO:
      body.tags.push("Demo Call");
      if (fields.appointmentDate)
        body.customField.appointmentDate = fields.appointmentDate;
      if (fields.message) body.customField.message = fields.message;
      break;
    case FORM_TYPE.SPEAKER:
      body.tags.push("Speaker");

      body.topics = fields.topics;
      if (fields.linkedIn) body.linkedIn = fields.linkedIn;
      if (fields.videoLink) body.videoLink = fields.videoLink;
      break;
    case FORM_TYPE.MENTOR:
      body.tags.push("Mentor");
      body.role = fields.role;
      body.message = fields.message;
      if (fields.linkedIn) body.linkedIn = fields.linkedIn;

      break;
    case "contact":
      body.tags.push("Contact Form");
      body.message = fields.message;
      break;
    default:
      body.tags.push("Other");
      body.customField = fields;
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
    console.error(error.response?.data || error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: error.response?.data || "API call failed" });
  }
}
