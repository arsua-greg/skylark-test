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
      const interactionId = generateInteractionId();
      const userId = generateUserId(req);
      const apiKey = "text/plain";

      const requestBody = req.body;

      const bookingData = await fetch(
        "https://yoyaku-api-tdxnqxuzba-an.a.run.app/bookings/create",
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

      if (bookingData.ok) {
        const resData = await bookingData.json();
        const bookingCode = resData.bookingCode;
        console.log("Successfully Added Data", bookingData.status);
        res.status(200).json({ message: "Success", bookingCode });
      } else {
        console.log("Error", bookingData.status);
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
