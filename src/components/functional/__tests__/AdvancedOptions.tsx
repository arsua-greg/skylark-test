import NekeroboModal from "../../ui/NekeroboModal";
import SelectInput from "../../ui/input/SelectInput";
import TextArea from "../../ui/input/TextArea";
import { useState } from "react";

const deliveryOptions = [
  { value: "1個", label: "1個" },
  { value: "2個", label: "2個" },
  { value: "3個", label: "3個" },
  { value: "4個", label: "4個" },
];

const offerOptions = [
  { value: "15分後", label: "15分後" },
  { value: "30分後", label: "30分後" },
  { value: "45分後", label: "45分後" },
  { value: "60分後", label: "60分後" },
  { value: "その他", label: "その他" },
];

const offerTimeOptions = [
  { value: "ネコロボ", label: "ネコロボ" },
  { value: "従業員", label: "従業員" },
];

export default function AdvancedOptions() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="lg:px-0 px-5">
      <p className="md:text-lg text-sm">
        このオプションは以下の詳細設定が可能です。
      </p>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">提供方法</p>
          <SelectInput
            options={deliveryOptions}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:ml-3">
          <p className="text-lg">提供時間</p>
          <SelectInput
            options={offerTimeOptions}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
      </div>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">提供タイミング</p>
          <SelectInput
            options={offerOptions}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
        <div className="md:w-1/2 flex items-center md:p-5 justify-between md:ml-3 md:pl-0">
          <div className="md:leading-[18px] leading-[18px] text-[13px] md:text-xs">
            ※ネコロボについての詳細は
            <label
              htmlFor="my-modal-4"
              className="text-[#008EFF] bg-white hover:bg-white px-0 border-none text-[13px] underline hover:cursor-pointer"
            >
              こちら
            </label>
            <NekeroboModal />
            <br />
            ※提供タイミングはコース注文からの経過時間での設定となります。
          </div>
        </div>
      </div>
      <p className="text-[13px] md:text-xs md:mt-5 mt-0">
        ※「その他」を選択、またはご要望などがある場合には下記のご要望欄に詳細を記載してください。（最大200文字）
      </p>
      <TextArea placeholder="オプションに関するご要望は、こちらに記載してください。" />
    </div>
  );
}
