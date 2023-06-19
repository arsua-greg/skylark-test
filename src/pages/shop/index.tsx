import Link from "next/link";
import React from "react";

import { GetStaticProps } from "next";
import { getAllShops } from "../api/shop";

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
  const shops = await getAllShops();

  return {
    props: { shops: shops },
    revalidate: 10,
  };
};
