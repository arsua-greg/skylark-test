import { Fragment } from "react";
import Button from "../ui/Button";
import Steps from "../ui/Steps";

export default function ReservationForm() {
  function submitHandler(e: any) {
    e.preventDefault();
    console.log("test");
  }

  return (
    <Fragment>
      <Steps />
      <form
        onSubmit={submitHandler}
        className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5"
      >
        <p className="font-bold text-lg">ご来店者情報</p>
        <div className="md:flex md:items-center md:mb-[3px] mt-5">
          <div className="md:w-2/6 md:mr-[25px] md:bg-[#EDEDED] mb-3 md:mb-0">
            <label className="block leading-[19px] md:p-5" htmlFor="name">
              お名前
              <span className="text-xs text-white bg-[#FE4D4D] font-bold rounded p-1 pl-[6px] ml-4">
                必須
              </span>
            </label>
          </div>
          <div className="md:w-8/12">
            <input
              className="input input-md input-bordered bg-white border-[#757575] w-full sm:max-w-[510px] text-base leading-[19px] max-h-10 rounded"
              type="text"
              name="name"
              placeholder="予約　太郎"
            />
          </div>
        </div>
        <div className="md:flex md:items-center md:mb-[3px] md:mt-0 mt-[23px]">
          <div className="md:w-2/6 md:mr-[25px] md:bg-[#EDEDED] mb-3 md:mb-0">
            <label
              className="block md:p-5 md:pt-6 md:pb-[26px] leading-[19px] h-full"
              htmlFor="phonenumber"
            >
              電話番号（半角数字）
              <span className="text-xs text-white bg-[#FE4D4D] font-bold rounded p-1 pl-[6px] ml-4">
                必須
              </span>
            </label>
          </div>
          <div className="md:w-8/12">
            <input
              className="input input-md bg-white border-[#757575] w-full sm:max-w-xs text-base leading-[19px] max-h-10 rounded"
              type="tel"
              name="phone_number"
              placeholder="1234567890"
            />
            <span className="text-[11px] block mt-1">
              ※お店から連絡を差し上げることもございますので、携帯電話・スマートフォンなど連絡の取りやすい番号を入力してください。
            </span>
          </div>
        </div>
        <div className="md:flex md:items-center md:mb-[3px] md:mt-0 mt-[23px]">
          <div className="md:w-2/6 md:mr-[25px] md:bg-[#EDEDED] md:py-9 mb-3 md:mb-0">
            <label className="block md:p-5 leading-[19px]" htmlFor="email">
              メールアドレス（半角英数字）
              <span className="text-xs text-white bg-[#FE4D4D] font-bold rounded p-1 pl-[6px] ml-4">
                必須
              </span>
            </label>
          </div>
          <div className="md:w-8/12">
            <input
              className="input input-md bg-white border-[#757575] w-full sm:max-w-xs text-base leading-[19px] max-h-10 rounded"
              type="email"
              name="email"
              placeholder="abc@xxx.co.jp"
            />
            <span className="text-[11px] text-error block mt-2">
              ※ご予約内容をお送りしますので、必ず連絡が取れるメールアドレスをご入力ください。
            </span>
            <span className="text-[11px] block">
              ※ドメイン指定受信を設定されている場合は@skylark.co.jpを受信するように設定してください。
            </span>
          </div>
        </div>
        <div className="mt-6">
          <label className="block font-bold text-lg mb-4" htmlFor="request">
            ご要望<span className="text-sm font-normal">（500文字）</span>{" "}
            <span className="text-xs text-white bg-[#ABABAB] font-bold rounded p-1 pl-[6px] ml-2">
              必須
            </span>
          </label>
          <textarea
            className="textarea rounded md:max-w-[711px] w-full max-h-[133px] h-full bg-white border border-[#757575]"
            name="request"
            id=""
            rows={7}
          ></textarea>
        </div>
        <p className="text-xs md:text-sm">
          ※メールでの返信を希望される場合であっても店舗によっては電話連絡となることをご了承ください。
          <br className="md:hidden" />
          また、内容によってはご要望に添えない場合がございます。
        </p>
        <div className="mt-6 md:mt-12">
          <p className="mt-5 font-bold text-lg">注意事項</p>
          <p className="md:text-sm text-[13px] mt-3">
            ※ご登録いただいた情報（お名前・電話番号を含む）は、予約申し込みのために店舗に送られます。店舗が保有する個人情報の取り扱いについては、各店舗に直接お問い合わせください。
          </p>
        </div>
        <div className="mt-6">
          <p className="text-lg font-bold">キャンセル規定</p>
          <p className="md:text-sm text-[13px] mt-3">
            ※予約時間を15分過ぎてもお集まりいただけない場合キャンセル扱いとさせていただきます。
            <br />
            ※予約成立後のキャンセルはキャンセル料が発生する場合があるほか、ご利用を制限させていただく場合がございます。
          </p>
        </div>
        <Button text="同意して次に進む" />
      </form>
    </Fragment>
  );
}
