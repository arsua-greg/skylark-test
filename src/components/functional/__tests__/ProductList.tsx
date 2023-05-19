import { Fragment, useState, useEffect } from "react";
import AdvancedOptions from "./AdvancedOptions";
import ProductItem from "./ProductItem";

type CheckboxProps = {
  onChangeCheckbox?: (e: any) => void;
  setIsCheckBox: any;
  selectedOption: string;
  isCheckedBox: boolean;
};

const ProductList: React.FC<CheckboxProps> = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(props.isCheckedBox);
  }, [props.isCheckedBox]);

  const advancedOptions = isChecked ? <AdvancedOptions /> : null;

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
