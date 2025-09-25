import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseURL = "https://auth.gohighlevel.com/oauth/authorize";
  const params = new URLSearchParams({
    client_id: process.env.HIGHLEVEL_CLIENT_ID!,
    redirect_uri: process.env.HIGHLEVEL_REDIRECT_URI!,
    response_type: "code",
    scope:
      "contacts.readonly,contacts.write,appointments.readonly,appointments.write",
  });

  res.status(200).json({ url: `${baseURL}?${params.toString()}` });
}
