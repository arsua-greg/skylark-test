import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <ul>
      <li>
        <Link href="/shops/610">Shop 610</Link>
      </li>
      <li>
        <Link href="/shops/620">Shop 620</Link>
      </li>
      <li>
        <Link href="/shops/630">Shop 630</Link>
      </li>
      <li>
        <Link href="/shops/199942">Shop 199942</Link>
      </li>
    </ul>
  );
};

export default HomePage;
