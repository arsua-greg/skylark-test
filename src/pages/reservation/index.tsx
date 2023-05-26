import { useState, ChangeEvent, KeyboardEvent, useRef } from "react";
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
  const [emailValid, setEmailValid] = useState(false);

  const [value, setValue] = useState("");
  const [validateError, setValidateError] = useState({
    name: false,
    phoneNumber: false,
    email: false,
  });

  const errorRef = useRef<any>(null);
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      phoneNumber.trim() === "" ||
      email.trim() === ""
    ) {
      setValidateError({
        name: name.trim() === "",
        phoneNumber: phoneNumber.trim() === "",
        email: email.trim() === "",
      });
      errorRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(name)) {
      setEmailValid(true);
      return;
    }

    setValidateError({
      name: false,
      phoneNumber: false,
      email: false,
    });

    console.log("Form submitted successfully!");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.slice(0, 500);

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
    <div className="mt-16">
      <Steps active={1}/>
      <form
        onSubmit={submitHandler}
        className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5 md:pb-24 pb-6"
      >
        {/* <ReservationDetails
          selectedTime={selectedTime}
          counterValue={counterValue}
          selectedDate={selectedDate}
          selectedQuantity={selectedQuantity}
          selectedOfferTime={selectedOfferTime}
          selectedOfferTiming={selectedOfferTiming}
        /> */}
        <div className="md:flex border-b-2 gap-14 md:pb-12 pb-7">
          <div className="md:w-1/2 w-full flex justify-between">
            <div className="w-1/2">
              <p className="font-bold">ご予約内容</p>
              <p className="md:text-base text-sm mt-[19px]">ご来店日</p>
              <p className="md:text-base text-sm mt-2">ご来店時間</p>
              <p className="md:text-base text-sm mt-2">人数</p>
            </div>
            <div className="w-1/2 text-right">
              <Link
                className="text-[#04512A] underline underline-offset-4"
                href={"/#advanced"}
              >
                変更する
              </Link>
              <p className="md:text-base text-sm mt-[19px]">
                2023年03月17日(金)
              </p>
              <p className="md:text-base text-sm mt-2">11:00</p>
              <p className="md:text-base text-sm mt-2">3名</p>
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
                【記念日のお祝いに】
                <br className="md:hidden" />
                アニバーサリーケーキ ＋330円(税込)
              </p>
              <div className="flex justify-between md:mt-3 mt-4">
                <div className="text-left">
                  <p className="text-sm">個数</p>
                  <p className="text-sm md:mt-[11px] mt-2">提供方法</p>
                  <p className="text-sm md:mt-[11px] mt-2">提供タイミング</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">1個</p>
                  <p className="text-sm md:mt-[11px] mt-2">ネコロボ</p>
                  <p className="text-sm md:mt-[11px] mt-2">その他</p>
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
        <div
          className={`border py-3 mt-7 md:mt-10 bg-[#F71B1B1A] ${
            validateError.name ||
            validateError.phoneNumber ||
            validateError.email
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
        <p ref={errorRef} className="font-bold text-lg mt-6" id="#details">
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
              className={`input input-md input-bordered bg-white w-full sm:max-w-[510px] text-base leading-[19px] max-h-10 rounded ${validateError.name ? "border-[#F71B1B]" : "border-[#757575]"}`}
              type="text"
              name="name"
              placeholder="予約　太郎"
              minLength={3}
              maxLength={50}
              value={name}
              onChange={(e) => {
                const regex =  /^[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFFa-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]+$/;
                console.log(e.target.value.length)
                if (regex.test(e.target.value)) {
                  setName(e.target.value);
                }else {
                  setName(e.target.value.slice(0, -1));
                }
              }}
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
              className={`input input-md bg-white w-full sm:max-w-xs text-base leading-[19px] max-h-10 rounded ${validateError.phoneNumber ? "border-[#F71B1B]" : "border-[#757575]"}`}
              type="tel"
              name="phone_number"
              placeholder="1234567890"
              minLength={8}
              maxLength={15}
              value={phoneNumber}
              onChange={(e) => {
                let value = e.target.value;
                // Remove hyphens
                value = value.replace(/-/g, "");
                // Convert double-byte numbers to single-byte
                value = value.replace(/[０-９]/g, (match) => {
                  const code = match.charCodeAt(0) - 0xfee0;
                  return String.fromCharCode(code);
                });
                // Restrict input to numbers 0-9
                value = value.replace(/[^0-9]/g, "");
                setPhoneNumber(value);
              }}
            />
            <p
              className={`text-[13px] text-[#F71B1B] leading-tight pt-1 ${
                validateError.phoneNumber ? "block" : "hidden"
              } `}
            >
              ！ 電話番号を正しく入力してください
            </p>
            <span className="text-[13px] block mt-1">
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
              className={`input input-md bg-white w-full sm:max-w-xs text-base leading-[19px] max-h-10 rounded ${validateError.email ? "border-[#F71B1B]" : "border-[#757575]"}`}
              name="email"
              placeholder="abc@xxx.co.jp"
              minLength={5}
              maxLength={150}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p
              className={`text-[13px] text-[#F71B1B] leading-tight pt-1 ${emailValid} ${
                validateError.email || emailValid ? "block" : "hidden"
              } `}
            >
              ！ メールアドレスを正しく入力してください
            </p>
            <span className="text-[13px] text-[#F71B1B] block mt-2">
              ※ご予約内容をお送りしますので、必ず連絡が取れるメールアドレスをご入力ください。
            </span>
            <span className="text-[13px] block">
              ※ドメイン指定受信を設定されている場合は@skylark.co.jpを受信するように設定してください。
            </span>
          </div>
        </div>
        <div className="mt-6" id="#comments">
          <label className="block font-bold text-lg mb-4" htmlFor="request">
            ご要望<span className="text-sm font-normal">（500文字）</span>{" "}
            <span className="text-xs text-white bg-[#ABABAB] font-bold rounded p-1 pl-[6px] ml-2">
              任意
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
        </div>
        <p className="text-[13px] md:text-sm mt-2">
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
        <div className="md:mt-16 mt-4">
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
          <Button text="同意して次に進む" className="text-xl" />
        </div>
        <div className=" mt-14">
          <p className="text-center md:text-base text-sm">
            このページはSSL暗号モードで表示されています。
          </p>
        </div>
      </form>
    </div>
  );
};

export default ReservationPage;
