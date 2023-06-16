import { useEffect, useState } from "react";
import Link from "next/link";

interface Shop {
  id: number;
  shopName: string;
}

const ShopPage = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch("/api/shop");
        const data = await response.json();
        setShops(data.shops);
      } catch (error) {
        console.error("Error fetching shop data:", error);
      }
    };
    fetchShops();
  }, []);

  return (
    <div>
      <h1>List of Shops</h1>
      <ul>
        {shops.map((shop) => (
          <li key={shop.id}>
            <Link href={`/shop/shopname=${shop.shopName}`}>
              {shop.shopName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopPage;
