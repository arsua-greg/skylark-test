import React from "react";
import styles from "../../styles/HorizontalScrollMenu.module.css";

interface StepProps{
  active?: number
}

const Steps: React.FC<StepProps> = ({active}) => {
  return (
    <div className="mt-5 flex items-center text-center md:max-w-[1120px] mx-auto overflow-hidden">
      <div
        className={`w-1/3 bg-[#D9D9D9] py-3  relative ${active === 1 ? 'isActive' : ''} stepArrow`}
      >
        {active === 1 ? <div className="stepArrow01"></div> : ''}
        <p className="md:text-lg text-[13px] leading-[22px] relative z-20">入力・確認</p>
      </div>
      <div
        className={`w-1/3 bg-[#D9D9D9] py-3 relative ${active === 2 ? 'isActive' : ''} stepArrow`}
      >
        {active === 2 ? <div className="stepArrow02"></div> : ''}
        <p className="md:text-lg text-[13px] leading-[22px] relative z-20">認証メール</p>
      </div>
      <div
        className={`w-1/3 bg-[#D9D9D9] py-3 relative ${active === 3 ? 'isActive' : ''}`}
      >
        {active === 3 ? <div className="stepArrow03"></div> : ''}
        <p className="md:text-lg text-[13px] leading-[22px] relative z-20">完了</p>
      </div>
    </div>
  );
}

export default Steps;