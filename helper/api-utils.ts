import { NextApiRequest } from "next";

//function to auto generate headers for API
export const generateInteractionId = (req: NextApiRequest): string => {
  const deviceId = "";
  const screenId = "";
  const timestamp = new Date().toISOString().replace(/\D/g, "");
  return `${deviceId}-${screenId}-${timestamp}`;
};

export const generateUserId = (req: NextApiRequest): string => {
  const basicAuth = req.headers.authorization;
  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = Buffer.from(authValue, "base64").toString().split(":");
    if (user === "skyuser" && pwd === "sky0530") {
      return "authenticated-user-id";
    }
  }
  return "no-authen";
};
