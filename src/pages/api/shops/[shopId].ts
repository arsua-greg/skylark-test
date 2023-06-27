import { NextApiRequest, NextApiResponse } from "next";
import {
  generateInteractionId,
  generateUserId,
} from "../../../../helper/api-utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const interactionId = generateInteractionId();
      const userId = generateUserId(req);
      const apiKey = "text/plain";
      const { shopId } = req.query;

      const shopData = await fetch(
        `https://yoyaku-api-tdxnqxuzba-an.a.run.app/shops/${shopId}/setting`,
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
