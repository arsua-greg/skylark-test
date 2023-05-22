import Link from "next/dist/client/link";
import Image from "next/image";

const ReservationDetails = () => {
  return (
    <div className="md:flex border-b-2 gap-14 pb-14">
      <div className="md:w-1/2 w-full flex justify-between">
        <div className="w-1/2">
          <p className="font-bold">ご予約内容</p>
          <p className="text-base mt-4">ご来店日</p>
          <p className="text-base mt-1">ご来店時間</p>
          <p className="text-base mt-1">人数</p>
        </div>
        <div className="w-1/2 text-right">
          <Link
            className="text-[#04512A] underline underline-offset-4"
            href={"/"}
          >
            変更する
          </Link>
          <p className="text-base mt-4">2023年03月17日(金)</p>
          <p className="text-base mt-1">11:00</p>
          <p className="text-base mt-1">3名</p>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-between flex-wrap md:mt-0 mt-9">
        <div className="w-1/2">
          <p className="text-lg font-bold">オプション選択</p>
        </div>
        <div className="w-1/2 text-right">
          <Link
            className="text-[#04512A] underline underline-offset-4"
            href={"/"}
          >
            変更する
          </Link>
          <div className="flex mt-5"></div>
        </div>
        <div className="md:flex w-full gap-6">
          <div className="md:w-1/2 flex">
            <Image
              src="/assets/product_image.png"
              width={64}
              height={71}
              alt=""
              className=" mr-6"
            />
            <p className="font-bold text-base">
              【記念日のお祝いに】 アニバーサリーケーキ ＋330円(税込)
            </p>
          </div>
          <div className="md:w-1/2 flex justify-between md:mt-0 mt-6">
            <div className="text-left">
              <p className="text-base">個数</p>
              <p className="text-base">提供方法</p>
              <p className="text-base">提供タイミング</p>
            </div>
            <div className="text-right">
              <p className="text-base">1個</p>
              <p className="text-base">ネコロボ</p>
              <p className="text-base">その他</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <p className="text-base">
            アニバーサリーケーキを持ってくるタイミングはこちらが合図した時でお願いしたいのですが、可能でしょうか。
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetails;
