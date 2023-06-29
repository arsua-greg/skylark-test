import React from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";

const EmailError = () => {
  const router = useRouter();

  const goBackReservation = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: "/",
    });
  };

  return (
    <div className="max-w-[1120px] mx-auto md:mt-16 mt-0 md:pb-16 pb-6">
      <div className="md:my-20 mt-8 text-center px-5 md:px-0">
        <h1 className="md:text-xl text-sm font-bold text-[#F71B1B]">
          メールアドレスが
          <br className="block md:hidden" /> 正しく認証されませんでした
        </h1>
        <p className="md:text-lg text-[13px] md:mt-20 mt-[68px] md:mb-16 mb-8 text-left md:text-center">
          下記のボタンから再度、予約申し込みを行ってください。
        </p>
        <Button
          text="予約申し込み"
          className="text-xl"
          onClick={goBackReservation}
        />
      </div>
    </div>
  );
};

export default EmailError;
