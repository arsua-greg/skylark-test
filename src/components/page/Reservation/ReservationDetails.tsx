import Link from "next/dist/client/link";

const ReservationDetails = () => {
  return (
    <div className="md:flex border-b-2 gap-14">
      <div className="md:w-1/2 w-full flex justify-between pb-6">
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
      <div className="md:w-1/2 w-full flex justify-between">
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
        </div>
      </div>
    </div>
  );
};

export default ReservationDetails;
