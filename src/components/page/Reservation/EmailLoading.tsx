import React from "react";
import styles from "@/styles/LoadingSpinner.module.css";

const EmailLoadingPage = () => {
  return (
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
  );
};

export default EmailLoadingPage;
