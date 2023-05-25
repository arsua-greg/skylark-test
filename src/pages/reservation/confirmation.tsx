import ReservationDetails from "@/components/page/Reservation/ReservationDetails";
import Steps from "@/components/ui/Steps";
import { useRouter } from "next/router";
import Link from "next/link";
import ConfirmEmailModal from "@/components/ui/ConfirmEmailModal";

const ConfirmPage = () => {
  const router = useRouter();

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
  };

  const selectedDate = router.query.selectedDate?.toString() || "";

  return (
    <div className="mt-16">
      <Steps />
      <form
        onSubmit={formSubmitHandler}
        className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5 md:pb-24 pb-6"
      >
        <ReservationDetails selectedDate={selectedDate} />
        <div className="flex justify-between items-center mt-6">
          <p className="font-bold text-lg">ご来店者情報</p>
          <Link
            href={"/"}
            className="underline underline-offset-4 text-[#04512A]"
          >
            変更する
          </Link>
        </div>
        <div className="md:flex mt-5 mb-[3px]">
          <div className="md:w-2/6 md:mr-[25px] mb-3 md:mb-0 flex items-center">
            <p className="block leading-[19px] md:px-5">お名前</p>
          </div>
          <div className="md:w-8/12 py-2">
            <p>予約　太郎</p>
          </div>
        </div>
        <div className="md:flex md:mb-[3px] md:mt-0 mt-[23px]">
          <div className="md:w-2/6 md:mr-[25px] mb-3 md:mb-0 flex items-center">
            <p className="block md:px-5 leading-[19px] w-full">電話番号</p>
          </div>
          <div className="md:w-8/12 py-2">
            <p>08012345678</p>
          </div>
        </div>
        <div className="md:flex md:mt-0 mt-[23px]">
          <div className="md:w-2/6 md:mr-[25px] mb-3 md:mb-0 flex items-center">
            <p className="block md:px-5 leading-[19px] w-full">
              メールアドレス
            </p>
          </div>
          <div className="md:w-8/12 py-3">
            <p>skylark@skylark.co.jp</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="block font-bold text-lg">ご要望</p>
            <Link
              href={"/"}
              className="underline underline-offset-4 text-[#04512A]"
            >
              変更する
            </Link>
          </div>
          <p className="mt-5 ml-6">
            アニバーサリーケーキを持ってくるタイミングはこちらが合図した時でお願いしたいのですが、可能でしょうか。
          </p>
        </div>
        <div className="alert border border-[#FFCD29] bg-[#FFCD291A] max-w-[787px] mx-auto rounded-none justify-center mb-12 mt-20">
          <p className="text-base text-center">
            メールアドレスの入力間違い防止の為、次の画面でメールアドレス認証を行います。
          </p>
        </div>
        <label
          htmlFor="my-modal-4"
          className="btn flex mx-auto rounded-md bg-[#04512A] border-none text-white text-xl sm:max-w-[612px] max-w-[280px] w-full font-normal"
        >
          認証メールを送信する
        </label>
        <ConfirmEmailModal />
      </form>
    </div>
  );
};

export default ConfirmPage;
