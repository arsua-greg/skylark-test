import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const interactionId = generateInteractionId(req);
      const userId = generateUserId(req);
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

  if (req.method === "POST") {
  }
}

//function to auto generate headers for API
function generateInteractionId(req: NextApiRequest): string {
  const deviceId = "";
  const screenId = "";
  const timestamp = new Date().toISOString().replace(/\D/g, "");
  return `${deviceId}-${screenId}-${timestamp}`;
}

function generateUserId(req: NextApiRequest): string {
  const basicAuth = req.headers.authorization;
  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = Buffer.from(authValue, "base64").toString().split(":");
    if (user === "skyuser" && pwd === "sky0530") {
      return "authenticated-user-id";
    }
  }
  return "no-authen";
}
