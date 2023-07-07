import React, {
  Fragment,
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  useRef,
} from "react";

import styles from "../../styles/ReservationForm.module.css";
import SelectInput from "@/components/ui/input/SelectInput";
import ProductList from "@/components/functional/__tests__/ProductList";
import CalendarDisplay from "@/components/functional/__tests__/CalendarDisplay";
import Button from "@/components/ui/Button";

import { useRouter } from "next/dist/client/router";
import { addMonths, startOfMonth } from "date-fns";
import { useRecoilState, useRecoilValue } from "recoil";
import { generateInteractionId } from "../../../helper/api-utils";
import {
  countAtom,
  bookingTimeAtom,
  bookingDateAtom,
  selectedQuantityAtom,
  selectedOfferTimeAtom,
  selectedOfferTimingAtom,
  optionNoteAtom,
  productNameRefState,
  optionCheckboxAtom,
  isButtonDisabledAtom,
} from "@/globalState/globalState";
import {
  quantityOptions,
  offerTimeOptions,
  offerTimingOptions,
} from "@/utils/optionSelection";

interface InitialBookedTableSlot {
  total: number;
  dataList: {
    bookingDate: string;
    blockTimeList: {
      blockTime: string;
      tableSlot: number;
      externameTableSlot: number;
    }[];
  }[];
}

type MyPageProps = {
  initialBookedTableSlot: InitialBookedTableSlot;
};

const ShopIdPage: React.FC<MyPageProps> = ({ initialBookedTableSlot }) => {
  const router = useRouter();
  const { shopId } = router.query;
  const [isButtonDisabled, setIsButtonDisabled] =
    useRecoilState(isButtonDisabledAtom);
  const [isCheckedBox, setCheckBox] = useRecoilState(optionCheckboxAtom);
  const [numberOfPeople, setNumberOfPeople] = useRecoilState(countAtom);
  const [bookingTime, setBookingTime] = useRecoilState(bookingTimeAtom);
  const bookingDate = useRecoilValue(bookingDateAtom);
  const [selectedQuantity, setSelectedQuantity] =
    useRecoilState(selectedQuantityAtom);
  const [selectedOfferTime, setSelectedOfferTime] = useRecoilState(
    selectedOfferTimeAtom
  );
  const [selectedOfferTiming, setSelectedOfferTiming] = useRecoilState(
    selectedOfferTimingAtom
  );
  const [optionNote, setOptionNote] = useRecoilState(optionNoteAtom);
  const [, setShopData] = useState<any>([]);
  const [holidayDates, setHolidayDates] = useState([]);
  const [offDayList, setOffDayList] = useState([]);
  const [bookedTableSlots] = useState(initialBookedTableSlot);
  const [defaultBookingSlot, setDefaultBookingSlot] = useState(0);
  const [lunchFrom, setLunchFrom] = useState("");
  const [lunchTo, setLunchTo] = useState("");
  const productNameValue = useRecoilValue(productNameRefState);
  const targetSectionRef = useRef<HTMLDivElement>(null);

  //fetch bookingblocklist
  const fetchData = async () => {
    try {
      const res = await fetch(`/api/shops/${shopId}`);
      const data = await res.json();
      const holidays = data?.holidayList;
      const offdays = data?.offDaysList;
      const lunchFrom = data?.lunchFrom;
      const lunchTo = data?.lunchTo;
      const { defaultBookingSlot } = data;
      const totalTableSlot = defaultBookingSlot.reduce(
        (total: number, slot: any) => total + slot.tableSlot,
        0
      );
      setShopData(data);
      setLunchFrom(lunchFrom);
      setLunchTo(lunchTo);
      setDefaultBookingSlot(totalTableSlot);
      setHolidayDates(holidays);
      setOffDayList(offdays);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [shopId]);

  //set the default value if checkbox is checked
  useEffect(() => {
    if (isCheckedBox) {
      setSelectedQuantity(quantityOptions[0].value);
      setSelectedOfferTime(offerTimeOptions[0].value);
      setSelectedOfferTiming(offerTimingOptions[0].value);
    }
  }, [isCheckedBox]);
  //end

  //scroll into details & comments section
  useEffect(() => {
    const scrollTo = router.query.scrollTo;
    if (scrollTo === "advanced" && targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [router.query.scrollTo]);
  //end

  const updateButtonState = (option: string) => {
    setIsButtonDisabled(option === "選択してください" && bookingDate === null);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setBookingTime(selectedValue);
    updateButtonState(selectedValue);
  };

  const setCheckboxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckboxState = e.target.checked;
    setCheckBox(newCheckboxState);
    updateButtonState(bookingTime);
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
    router.push(`/reservation/?shopId=${shopId}`);
  };

  const timeOptions = [
    { value: "選択してください", label: "選択してください" },
  ];
  const startTime = new Date(`2000-01-01T${lunchFrom}`);
  const endTime = new Date(`2000-01-01T${lunchTo}`);
  const timeIncrement = 15;

  let currentTime = startTime;
  while (currentTime <= endTime) {
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const timeValue = `${hours}:${minutes}`;

    timeOptions.push({ value: timeValue, label: timeValue });
    currentTime.setMinutes(currentTime.getMinutes() + timeIncrement);
  }

  return (
    <Fragment>
      <form onSubmit={submitFormHandler} className="md:pb-44 pb-8">
        <div className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-0">
          <div className="border-b border-[#D9D9D9] md:pb-10 pb-6">
            <div className="md:px-0 lg:px-0 px-5">
              <h1 className="font-bold md:text-3xl text-xl">
                しゃぶ葉 渋谷駅前店
              </h1>
              <div className="md:flex md:mt-12 mt-6">
                <div className="flex items-center md:w-1/2 md:bg-[#EDEDED] justify-between md:p-5 p-0 md:mr-3">
                  <div className="w-1/2">
                    <p className="font-xl">人数</p>
                  </div>
                  <div
                    className={`${styles.psuedo} text-center relative flex items-center`}
                  >
                    <button
                      type="button"
                      className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
                      onClick={() => {
                        setNumberOfPeople((prevCount) => prevCount - 1);
                      }}
                      disabled={numberOfPeople <= 1}
                    >
                      <p className="text-white text-xl leading-none">-</p>
                    </button>
                    <p className="bg-transparent text-center text-lg w-[94px] appearance-none outline-none">{`${numberOfPeople} 名`}</p>
                    <button
                      type="button"
                      className="btn bg-[#04512A] border-0 p-0 text-sm min-h-0 h-6 w-6 rounded-[4px] items-start"
                      onClick={() => {
                        setNumberOfPeople((prevCount) => prevCount + 1);
                      }}
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
                holidayDates={holidayDates}
                offDayList={offDayList}
                defaultBookingSlot={defaultBookingSlot}
                bookedTableSlot={bookedTableSlots}
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
          <div id="advanced" ref={targetSectionRef}>
            <ProductList
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
              setIsCheckBox={setCheckboxValue}
              productNameValue={productNameValue}
            />
          </div>
        </div>
        <Button
          type="submit"
          text="入力・確認画面に進む"
          disabled={isButtonDisabled}
          className="text-xl"
        />
      </form>
    </Fragment>
  );
};

export default ShopIdPage;

export const getServerSideProps = async (context: any) => {
  const { shopId } = context.query;

  try {
    const today: Date = new Date();
    const startDate = startOfMonth(today);
    const endDate = addMonths(startDate, 2);
    const startDateISOString = startDate.toISOString().split("T")[0];
    const endDateISOString = endDate.toISOString().split("T")[0];
    const interactionId = generateInteractionId();
    const userId = "no-authen";
    const apiKey = "x-api-key";
    const apiEndpoint = `https://yoyaku-api-tdxnqxuzba-an.a.run.app/bookings/${shopId}/table-slot`;

    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "X-Interaction-Id": interactionId,
        "X-User-Id": userId,
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: startDateISOString,
        endDate: endDateISOString,
      }),
    });

    if (response.ok) {
      const initialBookedTableSlot = await response.json();
      return {
        props: {
          initialBookedTableSlot,
        },
      };
    } else {
      console.error("Request Failed", response.status);
      return {
        props: {
          initialBookedTableSlot: null,
        },
      };
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        initialBookedTableSlot: null,
      },
    };
  }
};
