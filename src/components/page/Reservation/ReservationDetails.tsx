import Image from "next/image";
import styles from "../../../styles/ReservationForm.module.css";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { optionCheckboxAtom } from "@/globalState/globalState";

type ReservationDetailProps = {
  numberOfPeople?: number;
  bookingTime?: string;
  bookingDate: any;
  selectedQuantity?: string;
  selectedOfferTime?: string;
  selectedOfferTiming?: string;
  optionNote?: string;
  productNameValue: string;
};

const ReservationDetails = (props: ReservationDetailProps) => {
  const [, setCheckCheckbox] = useRecoilState(optionCheckboxAtom);
  const router = useRouter();
  const { shopId } = router.query;
  const formattedDate = () => {
    const dateObj = new Date(props.bookingDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][
      dateObj.getDay()
    ];
    return `${year}年${month}月${day}日(${dayOfWeek})`;
  };

  const handleGoBack = () => {
    router.back();
  };

  const goToAdvanced = (e: any) => {
    router.push(`/shops/${shopId}/?scrollTo=advanced`);
    setCheckCheckbox(true);
  };

  return (
    <div className="md:flex border-b-2 gap-14 md:pb-12 pb-7">
      <div className="md:w-1/2 w-full flex justify-between">
        <div className="w-1/2">
          <p className="font-bold">ご予約内容</p>
          <p className="text-base mt-4">ご来店日</p>
          <p className="text-base mt-1">ご来店時間</p>
          <p className="text-base mt-1">人数</p>
        </div>
        <div className="w-1/2 text-right">
          <label
            className="text-[#04512A] underline underline-offset-4 hover:cursor-pointer"
            onClick={handleGoBack}
          >
            変更する
          </label>
          <p className="text-base mt-4">{formattedDate()}</p>
          <p className="text-base mt-1">{props.bookingTime}</p>
          <p className="text-base mt-1">{`${props.numberOfPeople} 名`}</p>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-between flex-wrap md:mt-0 mt-9">
        <div className="w-1/2">
          <p className="text-lg font-bold">オプション選択</p>
        </div>
        <div className="w-1/2 text-right">
          <label
            className="text-[#04512A] underline underline-offset-4 hover:cursor-pointer"
            onClick={goToAdvanced}
          >
            変更する
          </label>
        </div>
        <div className="md:flex w-full gap-6 md:mt-3 mt-4">
          <div className="md:w-7/12 w-full flex">
            <div className={`${styles.img} mr-6`}>
              <Image
                src="/assets/product_image.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                alt=""
              />
            </div>
            <p className="font-bold text-base">
              【記念日のお祝いに】
              <br className="block md:hidden" />
              アニバーサリーケーキ ＋330円(税込)
            </p>
          </div>
          <div className="md:w-1/2 flex justify-between md:mt-0 mt-6">
            <div className="text-left">
              <p className="text-base">個数</p>
              <p className="text-base">提供方法</p>
              <p className="text-base">提供タイミング</p>
            </div>
            <div className="text-right">
              <p className="text-base">{props.selectedQuantity}</p>
              <p className="text-base">{props.selectedOfferTime}</p>
              <p className="text-base">{props.selectedOfferTiming}</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <p className="text-base">{props.optionNote}</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetails;
