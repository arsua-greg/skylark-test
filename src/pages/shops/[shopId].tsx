import styles from "../../styles/ReservationForm.module.css";

import React, {
  Fragment,
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import SelectInput from "@/components/ui/input/SelectInput";
import ProductList from "@/components/functional/__tests__/ProductList";
import CalendarDisplay from "@/components/functional/__tests__/CalendarDisplay";
import Button from "@/components/ui/Button";
import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import {
  countAtom,
  bookingTimeAtom,
  bookingDateAtom,
  selectedQuantityAtom,
  selectedOfferTimeAtom,
  selectedOfferTimingAtom,
  optionNoteAtom,
} from "@/globalState/globalState";

import {
  quantityOptions,
  offerTimeOptions,
  offerTimingOptions,
} from "@/utils/optionSelection";

const HomePage = () => {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isCheckedBox, setCheckBox] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useRecoilState(countAtom);
  const [bookingTime, setBookingTime] = useRecoilState(bookingTimeAtom);
  const [bookingDate, setBookingDate] = useRecoilState(bookingDateAtom);
  const [selectedQuantity, setSelectedQuantity] =
    useRecoilState(selectedQuantityAtom);
  const [selectedOfferTime, setSelectedOfferTime] = useRecoilState(
    selectedOfferTimeAtom
  );
  const [selectedOfferTiming, setSelectedOfferTiming] = useRecoilState(
    selectedOfferTimingAtom
  );
  const [optionNote, setOptionNote] = useRecoilState(optionNoteAtom);
  const [shopData, setShopData] = useState<any>([]);
  const [loading] = useState<boolean>(true);

  const [holidayDates, setHolidayDates] = useState([]);
  const [offDayList, setOffDayList] = useState([]);
  const [, setDefaultBookingSlot] = useState<Array<{ tableSlot: number }>>([]);

  const { shopId } = router.query;

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/shops/${shopId}`);
      const data = await res.json();
      setShopData(data);
      setHolidayDates(data.holidayList || []);
      setOffDayList(data.offDaysList || []);
      setDefaultBookingSlot(data.defaultBookingSlot);
      console.log(holidayDates);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading, shopId]);

  const handleDecrement = (e: any) => {
    e.preventDefault();
    setNumberOfPeople((prevCount) => prevCount - 1);
  };

  const handleIncrement = (e: any) => {
    e.preventDefault();
    setNumberOfPeople((prevCount) => prevCount + 1);
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

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.slice(0, 200);
    inputValue = sanitizeInput(inputValue);
    const lineBreaks = (inputValue.match(/\n/g) || []).length;
    if (lineBreaks > 10) return;

    setOptionNote(inputValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const lineBreaks =
      (event.target as HTMLTextAreaElement).value.match(/\n/g)?.length || 0;
    if (lineBreaks >= 10 && event.key !== "Backspace") event.preventDefault();
  };

  const sanitizeInput = (input: string): string => {
    const restrictedChars = /[><"/;:{}=-]/g;
    return input.replace(restrictedChars, "");
  };

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    router.push({
      pathname: "/reservation",
    });
  };

  const timeOptions = [
    { value: "選択してください", label: "選択してください" },
    { value: "11:00", label: "11:00" },
    { value: "11:15", label: "11:15" },
    { value: "11:30", label: "11:30" },
    { value: "11:45", label: "11:45" },
    { value: "12:00", label: "12:00" },
    { value: "12:15", label: "12:15" },
    { value: "12:30", label: "12:30" },
    { value: "12:45", label: "12:45" },
    { value: "13:00", label: "13:00" },
    { value: "13:15", label: "13:15" },
    { value: "13:30", label: "13:30" },
    { value: "13:45", label: "13:45" },
    { value: "14:00", label: "14:00" },
  ];

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
                      disabled={numberOfPeople <= 1}
                    >
                      <p className="text-white text-xl leading-none">-</p>
                    </button>
                    <p className="bg-transparent text-center text-lg w-[94px] appearance-none outline-none">{`${numberOfPeople} 名`}</p>
                    <button
                      className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
                      onClick={handleIncrement}
                      disabled={numberOfPeople >= 16}
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
                holidayDates={holidayDates}
                offDayList={offDayList}
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
              optionNote={optionNote}
              optionOnChange={handleChange}
              optionOnKeyDown={handleKeyDown}
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