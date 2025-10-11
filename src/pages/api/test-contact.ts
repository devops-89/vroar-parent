import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Test contact API called with method:", req.method);
  console.log("Request body:", req.body);
  
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { type, fields } = req.body;
  
  res.status(200).json({ 
    success: true, 
    message: "Test API working",
    received: { type, fields }
  });
}
