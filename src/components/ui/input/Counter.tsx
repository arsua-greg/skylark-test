import styles from "../../../styles/ReservationForm.module.css";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(2);

  const handleDecrement = (e: any) => {
    e.preventDefault();
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = (e: any) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex items-center md:w-1/2 md:bg-[#EDEDED] justify-between md:p-5 p-0 md:mr-3">
      <div className="w-1/2">
        <p className="font-xl">人数</p>
      </div>
      <div
        className={`${styles.psuedo} text-center relative flex items-center`}
      >
        <button
          className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
          onClick={handleDecrement}
          disabled={count <= 1}
        >
          <p className="text-white text-xl leading-none">-</p>
        </button>
        <p className="bg-transparent text-center text-lg w-[94px] appearance-none outline-none">{`${count} 名`}</p>
        <button
          className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
          onClick={handleIncrement}
          disabled={count >= 16}
        >
          <p className="text-white text-xl leading-none">+</p>
        </button>
      </div>
    </div>
  );
}

export default Counter;
