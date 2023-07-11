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
      const url = process.env.YUYAKO_SHOP_SETTING_API?.replace(
        ":shopId",
        shopId as string
      );

      if (!url) {
        res
          .status(500)
          .json({ error: "YUYAKO_SHOP_SETTING_API is not defined" });
        return;
      }

      const shopData = await fetch(url, {
        headers: {
          "X-Interaction-Id": interactionId,
          "X-User-Id": userId,
          "x-api-key": apiKey,
        },
      });

      if (!shopData.ok) {
        res.status(500).json({ error: "Failed to fetch shop data" });
        return;
      }

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
