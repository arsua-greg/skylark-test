import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const interactionId = "device123-screen456-20230622114030";
      const userId = "no-authen";
      const apiKey = "text/plain";
      const shopData = await fetch(
        `https://yoyaku-api-tdxnqxuzba-an.a.run.app/shops/199942/setting`,
        {
          headers: {
            "X-Interaction-Id": interactionId,
            "X-User-Id": userId,
            "x-api-key": apiKey,
          },
        }
      );
      const shops = await shopData.json();
      res.status(200).json(shops);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
