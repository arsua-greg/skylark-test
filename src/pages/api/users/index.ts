import { NextApiResponse, NextApiRequest } from "next";
import {
  generateInteractionId,
  generateUserId,
} from "../../../../helper/api-utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const interactionId = generateInteractionId(req);
    const userId = generateUserId(req);
    const apiKey = "text/plain";

    const requestBody = req.body;

    const userInfo = await fetch(
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

    const responseJson = await userInfo.json();

    // Modify the response body structure
    const responseBody = {
      id: responseJson.id,
      fullName: responseJson.fullName,
      email: responseJson.email,
      phone: responseJson.phone,
      note: responseJson.note,
      phone2: "",
      kanaName: "",
      createAt: responseJson.createAt,
      updatedAt: responseJson.updatedAt,
    };

    console.log(responseBody);

    res.status(200).json(responseBody);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
