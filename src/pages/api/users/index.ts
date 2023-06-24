import { NextApiResponse, NextApiRequest } from "next";
import {
  generateInteractionId,
  generateUserId,
} from "../../../../helper/api-utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const interactionId = generateInteractionId(req);
      const userId = generateUserId(req);
      const apiKey = "text/plain";

      const requestBody = req.body;

      const userInfoResponse = await fetch(
        "https://yoyaku-api-tdxnqxuzba-an.a.run.app/userinfo",
        {
          method: "POST",
          headers: {
            "X-Interaction-Id": interactionId,
            "X-User-Id": userId,
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (userInfoResponse.ok) {
        console.log("Successfully Added Data", userInfoResponse.status);
        res.status(200).json({ message: "Success" });
      } else {
        console.log("Error", userInfoResponse.status);
        res.status(500).json({ error: "Error" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
