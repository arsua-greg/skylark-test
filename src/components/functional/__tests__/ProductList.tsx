import { Fragment, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import NekeroboModal from "../../ui/modal/NekeroboModal";
import SelectInput from "../../ui/input/SelectInput";

type CheckboxProps = {
  onChangeCheckbox?: React.ChangeEventHandler<HTMLInputElement>;
  setIsCheckBox: any;
  isCheckedBox: boolean;
  quantityOptions: any;
  quantityOptionsValue: string;
  quantityOptionsHandler: (e: any) => void;
  optionOnChange: (e: any) => void;
  offerTimeHandler: (e: any) => void;
  offerTimingHandler: (e: any) => void;
  optionOnKeyDown: (e: any) => void;
  offerTimeOptions: any;
  offerTimeValue: any;
  offerTimingOptions: any;
  offerTimingValue: any;
  optionNote: string;
};

const ProductList = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(props.isCheckedBox);
  }, [props.isCheckedBox]);

  const advancedOptions = isChecked ? (
    <div id="advanced_options" className="lg:px-0 px-5">
      <p className="md:text-lg text-sm">
        このオプションは以下の詳細設定が可能です。
      </p>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">個数</p>
          <SelectInput
            options={props.quantityOptions}
            value={props.quantityOptionsValue}
            onChange={props.quantityOptionsHandler}
          />
        </div>
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:ml-3">
          <p className="text-lg">提供方法</p>
          <SelectInput
            options={props.offerTimingOptions}
            value={props.offerTimingValue}
            onChange={props.offerTimingHandler}
          />
        </div>
      </div>
      <div className="md:flex mt-4">
        <div className="md:w-1/2 flex items-center md:bg-[#EDEDED] md:p-5 justify-between md:mr-3 md:mb-0 mb-4">
          <p className="text-lg">提供タイミング</p>
          <SelectInput
            options={props.offerTimeOptions}
            value={props.offerTimeValue}
            onChange={props.offerTimeHandler}
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
        onChange={props.optionOnChange}
        onKeyDown={props.optionOnKeyDown}
        value={props.optionNote}
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
