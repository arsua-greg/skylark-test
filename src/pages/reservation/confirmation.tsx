import Steps from "@/components/ui/Steps";
import { useRouter } from "next/router";
import Link from "next/link";
import ConfirmEmailModal from "@/components/ui/ConfirmEmailModal";

const ConfirmPage = () => {
  const formSubmitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="mt-16">
      <Steps />
      <form
        onSubmit={formSubmitHandler}
        className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5 md:pb-16 pb-6"
      >
        <div className="md:flex border-b-2 gap-14 md:pb-12 pb-7">
          <div className="md:w-1/2 w-full flex justify-between">
            <div className="w-1/2">
              <p className="font-bold">ご予約内容</p>
              <p className="text-base mt-[19px]">ご来店日</p>
              <p className="text-base mt-2">ご来店時間</p>
              <p className="text-base mt-2">人数</p>
            </div>
            <div className="w-1/2 text-right">
              <Link
                className="text-[#04512A] underline underline-offset-4"
                href={"/"}
              >
                変更する
              </Link>
              <p className="text-base mt-[19px]">2023年03月17日(金)</p>
              <p className="text-base mt-2">11:00</p>
              <p className="text-base mt-2">3名</p>
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
            <div className="w-full">
              <p className="text-base -indent-2">
                【記念日のお祝いに】 アニバーサリーケーキ ＋330円(税込)
              </p>
              <div className="flex justify-between md:mt-2 mt-6">
                <div className="text-left">
                  <p className="text-sm">個数</p>
                  <p className="text-sm md:mt-[11px]">提供方法</p>
                  <p className="text-sm md:mt-[11px]">提供タイミング</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">1個</p>
                  <p className="text-sm md:mt-[11px]">ネコロボ</p>
                  <p className="text-sm md:mt-[11px]">その他</p>
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
          className="btn flex mx-auto rounded-md bg-[#04512A] border-none text-white text-xl sm:max-w-[612px] max-w-[280px] w-full font-normal md:py-5 h-auto"
        >
          この内容で確定する
        </label>
        <ConfirmEmailModal />
        <p className="mt-10 md:mt-16 text-center">
          このページはSSL暗号モードで表示されています。
        </p>
      </form>
    </div>
  );
};

export default ConfirmPage;
