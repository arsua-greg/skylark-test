import styles from "../styles/ReservationForm.module.css";

import React, { Fragment, useState, useEffect } from "react";
import SelectInput from "@/components/ui/input/SelectInput";
import ProductList from "@/components/functional/__tests__/ProductList";
import CalendarDisplay from "@/components/functional/__tests__/CalendarDisplay";
import Button from "@/components/ui/Button";
import { useRouter } from "next/dist/client/router";

const HomePage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isCheckedBox, setCheckBox] = useState(false);
  const [count, setCount] = useState(2);
  const [bookingTime, setBookingTime] = useState("選択してください");
  const [bookingDate, setBookingDate] = useState<Date | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState(
    quantityOptions[0].value
  );
  const [selectedOfferTime, setSelectedOfferTime] = useState(
    offerTimeOptions[0].value
  );
  const [selectedOfferTiming, setSelectedOfferTiming] = useState(
    offerTimingOptions[0].value
  );
  const [optionNote, setOptionNote] = useState("");
  const [shopData, setShopData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const [offDaysList, setOffDaysList] = useState([]);

  const fetchData = async () => {
    fetch("/api/shops")
      .then((res) => res.json())
      .then((data) => {
        setShopData(data);
        setOffDaysList(data.offDaysList || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

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
    setBookingTime(selectedValue);
    updateButtonState(selectedValue, isCheckedBox);
  };

  const setCheckboxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckboxState = e.target.checked;
    setCheckBox(newCheckboxState);
    updateButtonState(bookingTime, newCheckboxState);
  };

  const updateButtonState = (option: string, checked: boolean) => {
    if (option !== "選択してください") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setBookingDate(date);
  };

  const handleOptionNote = (note: string) => {
    setOptionNote(note);
  };

  const quantityMethodsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = e.target.value;
    setSelectedQuantity(quantity);
  };

  const offerTimeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const offer = e.target.value;
    setSelectedOfferTime(offer);
  };

  const offerTimingHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const offertiming = e.target.value;
    setSelectedOfferTiming(offertiming);
  };

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    const formData = {
      numberOfPeople: count,
      bookingDate: bookingDate?.toString(),
      bookingTime: bookingTime,
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
      {(function () {
        if (shopData.length === 0) {
          fetchData();
          return <p className="text-center">Loading...</p>;
        } else {
          return (
            <div className="text-center">
              <p>Advance Booking Time: {shopData.advanceBookingTime}</p>
              <p>Ticket Timeout: {shopData.ticketTimeout}</p>
              <p>
                Booking Block List: {shopData.bookingBlockList[0].blockDate}
              </p>
              <p>
                Booking Block List: {shopData.bookingBlockList[0].blockTime}
              </p>
              <p>
                Booking Block List: {shopData.bookingBlockList[0].tableSlot}
              </p>
            </div>
          );
        }
      })()}
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
                  {bookingDate ? (
                    <SelectInput
                      options={timeOptions}
                      value={bookingTime}
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
              <CalendarDisplay
                onChange={handleDateChange}
                holidayDates={offDaysList}
              />
              <p className="md:mt-6 mt-2 md:text-sm text-[13px] md:ml-0 ml-2">
                ◎：予約可　△：残りわずか　 ×：予約不可
              </p>
            </div>
            <div className="md:hidden flex items-center md:w-1/2 md:bg-[#EDEDED] justify-between md:px-0 px-5 md:ml-3 mt-5 md:mt-0">
              <p className="font-xl">時間</p>
              {bookingDate ? (
                <SelectInput
                  options={timeOptions}
                  value={bookingTime}
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
              quantityOptions={quantityOptions}
              quantityOptionsValue={selectedQuantity}
              quantityOptionsHandler={quantityMethodsHandler}
              offerTimeOptions={offerTimeOptions}
              offerTimeValue={selectedOfferTime}
              offerTimeHandler={offerTimeHandler}
              offerTimingOptions={offerTimingOptions}
              offerTimingValue={selectedOfferTiming}
              offerTimingHandler={offerTimingHandler}
              optionNote={handleOptionNote}
              isCheckedBox={isCheckedBox}
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

export default HomePage;

const timeOptions = [
  { value: "選択してください", label: "選択してください" },
  { value: "11:00", label: "11:00" },
  { value: "11:15", label: "11:15" },
  { value: "11:30", label: "11:30" },
  { value: "11:45", label: "11:45" },
  { value: "12:00", label: "12:00" },
];

const quantityOptions = [
  { value: "1個", label: "1個" },
  { value: "2個", label: "2個" },
  { value: "3個", label: "3個" },
  { value: "4個", label: "4個" },
];

const offerTimeOptions = [
  { value: "15分後", label: "15分後" },
  { value: "30分後", label: "30分後" },
  { value: "45分後", label: "45分後" },
  { value: "60分後", label: "60分後" },
  { value: "その他", label: "その他" },
];

const offerTimingOptions = [
  { value: "ネコロボ", label: "ネコロボ" },
  { value: "従業員", label: "従業員" },
];
