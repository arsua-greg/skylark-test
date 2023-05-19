import Image from "next/image";
import ProductModal from "@/components/ui/ProductModal";

interface ProductItemProps {
  onChangeCheckbox: (e: any) => void;
}

export default function ProductItem({ onChangeCheckbox }: ProductItemProps) {
  return (
    <div className="rounded-lg shadow-[2px_2px_4px_3px_rgba(0,0,0,0.1)] mt-7 bg-white md:p-6 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox rounded border border-[#8E8E8E] w-6 h-6"
          onChange={(e: any) => onChangeCheckbox(e)}
        />
        <div className="flex items-center md:px-6 px-4">
          <div className="md:mr-7 mr-4 w-[78px]">
            <Image
              src="/assets/product_image.png"
              alt=""
              width={78}
              height={86}
            />
          </div>
          <div className="w-[calc(100%-78px)]">
            <p className="md:text-lg text-[13px] font-bold">
              【記念日のお祝いに】アニバーサリーケーキ　＋330円(税込)
            </p>
            <p className="md:text-sm text-[10px]">
              利用人数：2名～　予約締切：来店日の2日前21時まで
            </p>
          </div>
        </div>
      </div>
      <ProductModal />
    </div>
  );
}
