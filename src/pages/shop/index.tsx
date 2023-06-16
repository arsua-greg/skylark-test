import Link from "next/link";
import { GetStaticProps } from "next";
import React from "react";
import path from "path";
import fs from "fs";

export default function ShopPage({ shops }: { shops: any }) {
  return (
    <div className="p-5">
      <h1 className="text-lg font-bold">List of Shops</h1>
      <ul className="mt-5">
        {shops.map((shop: { id: number; shopName: string }) => (
          <li key={shop.id}>
            <Link href={`/shop/shopname=${shop.shopName}`}>
              {shop.shopName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "shops.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const shops = JSON.parse(data);

  return {
    props: { shops },
  };
};
