import styles from "../../styles/ReservationForm.module.css";

import React, { Fragment, useState } from "react";
import Button from "@/components/ui/Button";
import SelectInput from "@/components/ui/input/SelectInput";
import ProductList from "@/components/functional/__tests__/ProductList";
import CalendarDisplay from "@/components/functional/__tests__/CalendarDisplay";
import { useRouter } from "next/dist/client/router";

const ShopDetailPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isCheckedBox, setCheckBox] = useState(false);
  const [count, setCount] = useState(2);
  const [selectedTime, setSelectedTime] = useState("選択してください");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [selectedOfferTime, setSelectedOfferTime] = useState("");
  const [selectedOfferTiming, setSelectedOfferTiming] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [optionNote, setOptionNote] = useState("");
  const router = useRouter();

  const handleDecrement = (e: any) => {
    e.preventDefault();
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = (e: any) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedTime(selectedValue);
    updateButtonState(selectedValue, isCheckedBox);
  };

  const setCheckboxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckboxState = e.target.checked;
    setCheckBox(newCheckboxState);
    updateButtonState(selectedTime, newCheckboxState);
  };

  const updateButtonState = (option: string, checked: boolean) => {
    if (option !== "選択してください") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSelectedQuantityChange = (quantity: string) => {
    setSelectedQuantity(quantity);
  };

  const handleSelectedOfferChange = (offer: string) => {
    setSelectedOfferTime(offer);
  };

  const handleOfferTiming = (offertiming: string) => {
    setSelectedOfferTiming(offertiming);
  };

  const handleOptionNote = (note: string) => {
    setOptionNote(note);
  };

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    const formData = {
      counterValue: count,
      selectedTime: selectedTime,
      selectedDate: selectedDate?.toString(),
      selectedQuantity: selectedQuantity,
      selectedOfferTime: selectedOfferTime,
      selectedOfferTiming: selectedOfferTiming,
      optionNote: optionNote,
    };
    console.log(formData);

    router.push({
      pathname: "/reservation",
      query: formData,
    });
  };

  return (
    <Fragment>
      <form onSubmit={submitFormHandler} className="md:pb-44 pb-8">
        <div className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-0">
          <div className="border-b border-[#D9D9D9] md:pb-10 pb-6">
            <div className="md:px-0 lg:px-0 px-5">
              <h1 className="font-bold md:text-3xl text-xl">
                しゃぶ葉 渋谷駅前店
              </h1>
              {/* <h1 className="font-bold md:text-3xl text-xl">
                {Array.isArray(shopname)
                  ? shopname[0]?.split("=")[1]
                  : shopname?.split("=")[1]}
              </h1> */}
              <div className="md:flex md:mt-12 mt-6">
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
                <div className="md:flex hidden items-center md:w-1/2 md:bg-[#EDEDED] justify-between md:p-5 p-0 md:ml-3 mt-5 md:mt-0">
                  <p className="font-xl">時間</p>
                  {selectedDate ? (
                    <SelectInput
                      options={timeOptions}
                      value={selectedTime}
                      onChange={handleTimeChange}
                    />
                  ) : (
                    <p className="text-[15px] md:max-w-[350px] md:w-full w-[175px] text-right">
                      日付を指定すると時間を 選択することができます
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="md:px-5 px-0">
              <CalendarDisplay onChange={handleDateChange} />
              <p className="md:mt-6 mt-2 md:text-sm text-[13px] md:ml-0 ml-2">
                ◎：予約可　△：残りわずか　 ×：予約不可
              </p>
            </div>
            <div className="md:hidden flex items-center md:w-1/2 md:bg-[#EDEDED] justify-between md:px-0 px-5 md:ml-3 mt-5 md:mt-0">
              <p className="font-xl">時間</p>
              {selectedDate ? (
                <SelectInput
                  options={timeOptions}
                  value={selectedTime}
                  onChange={handleTimeChange}
                />
              ) : (
                <p className="text-[15px] md:max-w-[350px] md:w-full w-[175px] text-right">
                  日付を指定すると時間を 選択することができます
                </p>
              )}
            </div>
            <p className="md:text-lg text-sm md:mt-14 mt-9 md:px-0 px-5">
              席のみのご予約となります。コースの選択については店舗にご来店後、各テーブルにてお伝えください。
            </p>
          </div>
          <div id="advanced">
            <ProductList
              setIsCheckBox={setCheckboxValue}
              onSelectedQuantityChange={handleSelectedQuantityChange}
              onSelectedOfferChange={handleSelectedOfferChange}
              onSelectedOfferTiming={handleOfferTiming}
              isCheckedBox={isCheckedBox}
              optionNote={handleOptionNote}
            />
          </div>
        </div>
        <Button
          text="入力・確認画面に進む"
          disabled={isButtonDisabled}
          className="text-xl"
        />
      </form>
    </Fragment>
  );
};

const timeOptions = [
  { value: "選択してください", label: "選択してください" },
  { value: "11:00", label: "11:00" },
  { value: "11:15", label: "11:15" },
  { value: "11:30", label: "11:30" },
  { value: "11:45", label: "11:45" },
  { value: "12:00", label: "12:00" },
];

export default ShopDetailPage;
