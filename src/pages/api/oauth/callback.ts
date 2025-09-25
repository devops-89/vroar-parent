import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  if (!code) return res.status(400).send("Authorization code missing");

  try {
    const params = new URLSearchParams({
      client_id: process.env.HIGHLEVEL_CLIENT_ID!,
      client_secret: process.env.HIGHLEVEL_CLIENT_SECRET!,
      code: code as string,
      grant_type: "authorization_code",
      redirect_uri: process.env.HIGHLEVEL_REDIRECT_URI!,
    });

    const response = await fetch("https://auth.gohighlevel.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    const data = await response.json();
    console.log("data", data);
    res.status(200).json(data);
  } catch (error) {
    console.log("errr", error);
    res.status(500).json({ error: "Token exchange failed" });
  }
}
