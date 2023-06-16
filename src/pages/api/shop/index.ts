import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const filePath = path.join(process.cwd(), "data", "shops.json");
      const shopsData = fs.readFileSync(filePath, "utf-8");
      const shops = JSON.parse(shopsData);

      res.status(200).json({ shops });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
