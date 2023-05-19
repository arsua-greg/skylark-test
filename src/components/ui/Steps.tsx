import styles from "../../styles/HorizontalScrollMenu.module.css";

export default function Steps() {
  return (
    <div className="mt-5 flex items-center text-center md:max-w-[1120px] mx-auto">
      <div
        className={`w-1/3 bg-[#04512A] text-white text-lg py-3 leading-[22px] mr-[0.3rem] relative ${styles.steps}`}
      >
        入力・確認
      </div>
      <div
        className={`w-1/3 bg-[#D9D9D9] py-3 leading-[22px] mr-1 relative ${styles.steps}`}
      >
        認証メール
      </div>
      <div
        className={`w-1/3 bg-[#D9D9D9] py-3 leading-[22px] relative ${styles.steps}`}
      >
        完了
      </div>
    </div>
  );
}
