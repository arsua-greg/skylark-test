import React, { Fragment, useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SelectInput from "@/components/ui/input/SelectInput";
import Counter from "@/components/ui/input/Counter";
import ProductList from "@/components/functional/__tests__/ProductList";
import CalendarDisplay from "@/components/functional/__tests__/CalendarDisplay";
import { useRouter } from "next/dist/client/router";

const timeOptions = [
  { value: "選択してください", label: "選択してください" },
  { value: "11:00", label: "11:00" },
  { value: "11:15", label: "11:15" },
  { value: "11:30", label: "11:30" },
  { value: "11:45", label: "11:45" },
  { value: "12:00", label: "12:00" },
];

const TopPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState("選択してください");
  const [isCheckedBox, setCheckBox] = useState(false);
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const router = useRouter();

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSelectedOption(option);
    updateButtonState(option, isCheckedBox);
  };

  const setCheckboxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckboxState = e.target.checked;
    setCheckBox(newCheckboxState);
    updateButtonState(selectedOption, newCheckboxState);
  };

  const updateButtonState = (option: string, checked: boolean) => {
    if (option !== "選択してください") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectDate(date);
  };

  const submitFormHandler = (e: any) => {
    e.preventDefault();
    router.push("/reservation");
  };

  return (
    <Fragment>
      <form onSubmit={submitFormHandler}>
        <div className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-0">
          <div className="border-b border-[#D9D9D9] md:pb-10 pb-6">
            <div className="md:px-0 lg:px-0 px-5">
              <Link href="shopname" className="font-bold md:text-3xl text-xl">
                しゃぶ葉 渋谷駅前店
              </Link>
              <div className="md:flex md:mt-12 mt-6">
                <Counter />
                <div className="md:flex hidden items-center md:w-1/2 md:bg-[#EDEDED] justify-between md:p-5 p-0 md:ml-3 mt-5 md:mt-0">
                  <p className="font-xl">時間</p>
                  {selectDate ? (
                    <SelectInput
                      options={timeOptions}
                      value={selectedOption}
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
              {selectDate ? (
                <SelectInput
                  options={timeOptions}
                  value={selectedOption}
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
          <ProductList
            setIsCheckBox={setCheckboxValue}
            selectedOption={selectedOption}
            isCheckedBox={isCheckedBox}
          />
        </div>
        <Button text="入力・確認画面に進む" disabled={isButtonDisabled} />
      </form>
    </Fragment>
  );
};

export default TopPage;
