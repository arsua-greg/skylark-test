import { Fragment, useState, ChangeEvent, KeyboardEvent, useRef } from "react";
import Button from "../../components/ui/Button";
import Steps from "../../components/ui/Steps";
import Link from "next/dist/client/link";
import ReservationDetails from "../../components/page/Reservation/ReservationDetails";
import { useRouter } from "next/router";

const ReservationPage = () => {
  const router = useRouter();
  const selectedTime = router.query.selectedTime?.toString() || "";
  const counterValue = router.query.counterValue?.toString() || "";
  const selectedDate = router.query.selectedDate?.toString() || "";
  const selectedQuantity = router.query.selectedQuantity?.toString() || "";
  const selectedOfferTime = router.query.selectedOfferTime?.toString() || "";
  const selectedOfferTiming =
    router.query.selectedOfferTiming?.toString() || "";

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [value, setValue] = useState("");
  const [validateError, setValidateError] = useState({
    name: false,
    phoneNumber: false,
    email: false,
    value: false,
  });

  const errorRef = useRef<any>(null);
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      phoneNumber.trim() === "" ||
      email.trim() === "" ||
      value.trim() === ""
    ) {
      setValidateError({
        name: name.trim() === "",
        phoneNumber: phoneNumber.trim() === "",
        email: email.trim() === "",
        value: value.trim() === "",
      });
      errorRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setValidateError({
      name: false,
      phoneNumber: false,
      email: false,
      value: false,
    });

    console.log("Form submitted successfully!");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.slice(0, 200);

    inputValue = sanitizeInput(inputValue);

    const lineBreaks = (inputValue.match(/\n/g) || []).length;
    if (lineBreaks > 10) return;

    setValue(inputValue);
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

  return (
    <Fragment>
      <Steps />
      <form
        onSubmit={submitHandler}
        className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5 pb-24"
      >
        <ReservationDetails
          selectedTime={selectedTime}
          counterValue={counterValue}
          selectedDate={selectedDate}
          selectedQuantity={selectedQuantity}
          selectedOfferTime={selectedOfferTime}
          selectedOfferTiming={selectedOfferTiming}
        />
        <div
          className={`border py-3 mt-7 md:mt-10 bg-[#F71B1B1A] ${
            validateError.name ||
            validateError.phoneNumber ||
            validateError.email ||
            validateError.value
              ? "block"
              : "hidden"
          }`}
        >
          <h5 className="text-center font-semibold text-[#F71B1BB2] mb-2">
            入力を完了させてください
          </h5>
          <div className="flex justify-center">
            <p className="text-left font-normal text-[13px]">
              次へ進むには下記の入力内容を確認し、
              <br className="sm:hidden"></br>修正してください。
            </p>
          </div>
        </div>
        <p ref={errorRef} className="font-bold text-lg mt-6">
          ご来店者情報
        </p>
        <div className="md:flex mt-5 mb-[3px]">
          <div className="md:w-2/6 md:mr-[25px] mb-3 md:mb-0 md:bg-[#EDEDED] flex items-center">
            <label className="block leading-[19px] md:px-5" htmlFor="name">
              お名前
              <span className="text-xs text-white bg-[#FE4D4D] font-bold rounded p-1 ml-4 leading-none inline-block">
                必須
              </span>
            </label>
          </div>
          <div className="md:w-8/12 py-2">
            <input
              className="input input-md input-bordered bg-white border-[#757575] w-full sm:max-w-[510px] text-base leading-[19px] max-h-10 rounded"
              type="text"
              name="name"
              placeholder="予約　太郎"
              minLength={3}
              maxLength={50}
            />
            <p
              className={`text-[13px] text-[#F71B1B] leading-tight pt-1 ${
                validateError.name ? "block" : "hidden"
              } `}
            >
              ！ お名前を正しく入力してください
            </p>
          </div>
        </div>
        <div className="md:flex md:mb-[3px] md:mt-0 mt-[23px]">
          <div className="md:w-2/6 md:mr-[25px] mb-3 md:mb-0 md:bg-[#EDEDED] flex items-center">
            <label
              className="block md:px-5 leading-[19px] w-full"
              htmlFor="phonenumber"
            >
              電話番号（半角数字）
              <span className="text-xs text-white bg-[#FE4D4D] font-bold rounded p-1 ml-4 leading-none inline-block">
                必須
              </span>
            </label>
          </div>
          <div className="md:w-8/12 py-2">
            <input
              className="input input-md bg-white border-[#757575] w-full sm:max-w-xs text-base leading-[19px] max-h-10 rounded"
              type="tel"
              name="phone_number"
              placeholder="1234567890"
              minLength={8}
              maxLength={15}
            />
            <p
              className={`text-[13px] text-[#F71B1B] leading-tight pt-1 ${
                validateError.phoneNumber ? "block" : "hidden"
              } `}
            >
              ！ 電話番号を正しく入力してください
            </p>
            <span className="text-[11px] block mt-1">
              ※お店から連絡を差し上げることもございますので、携帯電話・スマートフォンなど連絡の取りやすい番号を入力してください。
            </span>
          </div>
        </div>
        <div className="md:flex md:mt-0 mt-[23px]">
          <div className="md:w-2/6 md:mr-[25px] mb-3 md:mb-0 flex items-center md:bg-[#EDEDED]">
            <label
              className="block md:px-5 leading-[19px] w-full"
              htmlFor="email"
            >
              メールアドレス（半角英数字）
              <span className="text-xs text-white bg-[#FE4D4D] font-bold rounded p-1 ml-4 leading-none inline-block">
                必須
              </span>
            </label>
          </div>
          <div className="md:w-8/12 py-3">
            <input
              className="input input-md bg-white border-[#757575] w-full sm:max-w-xs text-base leading-[19px] max-h-10 rounded"
              type="email"
              name="email"
              placeholder="abc@xxx.co.jp"
              minLength={5}
              maxLength={150}
            />
            <p
              className={`text-[13px] text-[#F71B1B] leading-tight pt-1 ${
                validateError.email ? "block" : "hidden"
              } `}
            >
              ！ メールアドレスを正しく入力してください
            </p>
            <span className="text-[11px] text-[#F71B1B] block mt-2">
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
            className="bg-white rounded border border-[#757575] p-3 max-w-[634px] w-full h-full text-sm"
            placeholder=""
            name={name}
            rows={7}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></textarea>
          <p
            className={`text-[13px] text-[#F71B1B] leading-tight pt-1 ${
              validateError.value
            } ${validateError.value ? "block" : "hidden"} `}
          >
            ！ ご要望は500文字以内で入力してください
          </p>
        </div>
        <p className="text-xs md:text-sm mt-2">
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
        <div className="mt-16">
          <p className="text-center md:mb-5 mb-9">
            <Link
              className="text-[#04512A] underline underline-offset-4"
              href={"/privacy"}
              target="_blank"
              rel="noopener noreferrer"
            >
              利用規約
            </Link>
            、キャンセル規定及び
            <br className="md:hidden" />
            <Link
              className="text-[#04512A] underline underline-offset-4"
              href={
                "https://corp.skylark.co.jp/privacy/web_privacy_policy.html"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              プライバシーポリシーに
            </Link>
          </p>
          <Button text="同意して次に進む" />
        </div>
        <div className=" mt-14">
          <p className="text-center md:text-base text-sm">
            このページはSSL暗号モードで表示されています。
          </p>
        </div>
      </form>
    </Fragment>
  );
};

export default ReservationPage;
