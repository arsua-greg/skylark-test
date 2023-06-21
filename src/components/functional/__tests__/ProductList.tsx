import {
  Fragment,
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import ProductItem from "./ProductItem";
import NekeroboModal from "../../ui/modal/NekeroboModal";
import SelectInput from "../../ui/input/SelectInput";

type CheckboxProps = {
  onChangeCheckbox?: React.ChangeEventHandler<HTMLInputElement>;
  setIsCheckBox: any;
  isCheckedBox: boolean;
  onSelectedQuantityChange: (quantity: string) => void;
  onSelectedOfferChange: (offer: string) => void;
  onSelectedOfferTiming: (offertiming: string) => void;
  optionNote: (note: string) => void;
};

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

const ProductList = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
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

  useEffect(() => {
    setIsChecked(props.isCheckedBox);
  }, [props.isCheckedBox]);

  const quantityMethodsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = e.target.value;
    setSelectedQuantity(quantity);
    props.onSelectedQuantityChange(quantity);
  };

  const offerTimeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const offer = e.target.value;
    setSelectedOfferTime(offer);
    props.onSelectedOfferChange(offer);
  };

  const offerTimingHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const offertiming = e.target.value;
    setSelectedOfferTiming(offertiming);
    props.onSelectedOfferTiming(offertiming);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.slice(0, 200);
    inputValue = sanitizeInput(inputValue);
    const lineBreaks = (inputValue.match(/\n/g) || []).length;
    if (lineBreaks > 10) return;

    setOptionNote(inputValue);
    props.optionNote(inputValue);
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

  const advancedOptions = isChecked ? (
    <div id="advanced_options" className="lg:px-0 px-5">
      <p className="md:text-lg text-sm">
        このオプションは以下の詳細設定が可能です。
      </p>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">個数</p>
          <SelectInput
            options={quantityOptions}
            value={selectedQuantity}
            onChange={quantityMethodsHandler}
          />
        </div>
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:ml-3">
          <p className="text-lg">提供方法</p>
          <SelectInput
            options={offerTimingOptions}
            value={selectedOfferTime}
            onChange={offerTimeHandler}
          />
        </div>
      </div>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">提供タイミング</p>
          <SelectInput
            options={offerTimeOptions}
            value={selectedOfferTiming}
            onChange={offerTimingHandler}
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
      <p className="text-[13px] md:text-xs md:mt-5 mt-0 mb-3">
        ※「その他」を選択、またはご要望などがある場合には下記のご要望欄に詳細を記載してください。（最大200文字）
      </p>
      <textarea
        className="bg-white rounded border border-[#757575] p-3 max-w-[634px] w-full h-full text-sm"
        placeholder="オプションに関するご要望は、こちらに記載してください。"
        rows={10}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={optionNote}
      ></textarea>
    </div>
  ) : null;

  return (
    <Fragment>
      <div className="md:mb-20 mb-10">
        <div className="mt-4 mb-6 lg:px-0 px-5">
          <p className="text-lg leading-[22px]">
            オプション選択
            <span className="text-xs text-white bg-[#ABABAB] font-semibold rounded p-1 ml-2 leading-none inline-block">
              任意
            </span>
          </p>
          <p className="text-xs mt-3">※不要な場合はチェック無し。</p>
          <ProductItem onChangeCheckbox={props.setIsCheckBox} />
        </div>
        {advancedOptions}
      </div>
    </Fragment>
  );
};

export default ProductList;
