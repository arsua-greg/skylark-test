import React, { useState } from "react";
import Link from "next/link";

const FaqPage = () => {
  const breadCrumbSp = "<戻る";

  return (
    <div className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5 md:pb-24 pb-6">
      <Link href="/" className="text-[#04512A] text-lg mb-5 block">
        <p className="md:hidden block">{breadCrumbSp}</p>
        <p className="text-xl md:block hidden text-black">
          <span className="text-[#04512A]">来店予約</span>　/　よくある質問
        </p>
      </Link>
      <h1 className="md:text-3xl text-lg font-bold text-center">
        よくある質問
      </h1>
      <p className="md:text-base text-[13px] md:mt-8 mt-6">
        予約サイトについてよくある質問をまとめました
      </p>
    </div>
  );
};

export default FaqPage;
