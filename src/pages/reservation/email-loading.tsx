import React, { useState, useEffect } from "react";
import styles from "../../styles/LoadingSpinner.module.css";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";

const EmailLoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const goBackReservation = (e: any) => {
    e.preventDefault();

    router.push({
      pathname: "/",
    });
  };

  const errorConfirmingEmail = () => {
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

  return (
    <div>
      {isLoading ? (
        <div className="md:mt-16 mt-8">
          <h1 className="md:text-xl text-sm font-bold text-center">
            予約受付中
            <br />
            しばらくお待ちください。
          </h1>
          <div className={`${styles.loading_spinner} md:mt-14 mt-9 mb-[45vh]`}>
            <div className={`${styles.spinner}`}></div>
          </div>
        </div>
      ) : (
        errorConfirmingEmail()
      )}
    </div>
  );
};

export default EmailLoadingPage;
