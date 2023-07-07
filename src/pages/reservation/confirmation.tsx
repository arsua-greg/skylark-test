import React from "react";
import Steps from "@/components/ui/Steps";
import ConfirmEmailModal from "@/components/ui/modal/ConfirmEmailModal";
import Link from "next/link";
import Cookies from "js-cookie";

import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import {
  bookingDateAtom,
  bookingTimeAtom,
  countAtom,
  optionCheckboxAtom,
  optionNoteAtom,
  productNameRefState,
  selectedOfferTimeAtom,
  selectedOfferTimingAtom,
  selectedQuantityAtom,
  userEmail,
  userName,
  userNote,
  userPhoneNumber,
} from "@/globalState/globalState";

const ConfirmPage = () => {
  const router = useRouter();
  const isChecked = useRecoilValue(optionCheckboxAtom);
  const numberOfPeople = useRecoilValue(countAtom);
  const bookingDate = useRecoilValue(bookingDateAtom) || new Date();
  const bookingTime = useRecoilValue(bookingTimeAtom);
  const selectedQuantity = useRecoilValue(selectedQuantityAtom);
  const selectedOfferTime = useRecoilValue(selectedOfferTimeAtom);
  const selectedOfferTiming = useRecoilValue(selectedOfferTimingAtom);
  const optionNote = useRecoilValue(optionNoteAtom);
  const name = useRecoilValue(userName);
  const phone = useRecoilValue(userPhoneNumber);
  const email = useRecoilValue(userEmail);
  const note = useRecoilValue(userNote);
  const productNameValue = useRecoilValue(productNameRefState);
  const { shopId } = router.query;

  const formattedDate = () => {
    const dateObj = new Date(bookingDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][
      dateObj.getDay()
    ];
    return `${year}年${month}月${day}日(${dayOfWeek})`;
  };

  const handleDetail = () => {
    router.push("/reservation?scrollTo=details");
  };

  const handleComments = () => {
    router.push("/reservation?scrollTo=comments");
  };

  const handleModalClick = () => {
    Cookies.set(
      "confirmData",
      JSON.stringify({
        numberOfPeople,
        bookingDate,
        bookingTime,
        selectedQuantity,
        selectedOfferTime,
        selectedOfferTiming,
        optionNote,
        name,
        email,
        phone,
        note,
        productNameValue,
        shopId,
      })
    );

    router.push("/api/auth/login");
  };

  const goBackReservation = () => {
    router.push(`/shops/${shopId}`);
  };

  const goToAdvanced = (e: any) => {
    router.push(`/shops/${shopId}/?scrollTo=advanced`);
    isChecked;
  };

  return (
    <div className="md:mt-16">
      <Steps active={1} />
      <div className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5 md:pb-16 pb-6">
        <div className="md:flex border-b-2 gap-14 md:pb-12 pb-7">
          <div className="md:w-1/2 w-full flex justify-between">
            <div className="w-1/2">
              <p className="font-bold">ご予約内容</p>
              <p className="md:text-base text-sm mt-[19px]">ご来店日</p>
              <p className="md:text-base text-sm mt-2">ご来店時間</p>
              <p className="md:text-base text-sm mt-2">人数</p>
            </div>
            <div className="w-1/2 text-right">
              <label
                className="text-[#04512A] underline underline-offset-4 cursor-pointer"
                onClick={goBackReservation}
              >
                変更する
              </label>
              <p className="md:text-base text-sm mt-[19px]">
                {formattedDate()}
              </p>
              <p className="md:text-base text-sm mt-2">{bookingTime}</p>
              <p className="md:text-base text-sm mt-2">{`${numberOfPeople} 名`}</p>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-between flex-wrap md:mt-0 mt-9">
            <div className="w-1/2">
              <p className="text-lg font-bold">オプション選択</p>
            </div>
            <div className="w-1/2 text-right">
              <label
                className="text-[#04512A] underline underline-offset-4 cursor-pointer"
                onClick={goToAdvanced}
              >
                変更する
              </label>
              <div className="flex mt-5"></div>
            </div>
            <div className="w-full">
              <p className="text-base -indent-2">{productNameValue}</p>
              <div className="flex justify-between md:mt-3 mt-4">
                <div className="text-left">
                  <p className="text-sm">個数</p>
                  <p className="text-sm md:mt-[11px] mt-2">提供方法</p>
                  <p className="text-sm md:mt-[11px] mt-2">提供タイミング</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{selectedQuantity}</p>
                  <p className="text-sm md:mt-[11px] mt-2">
                    {selectedOfferTiming}
                  </p>
                  <p className="text-sm md:mt-[11px] mt-2">
                    {selectedOfferTime}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mt-5">
              <p className="text-base">{optionNote}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="font-bold text-lg">ご来店者情報</p>
          <button
            className="underline underline-offset-4 text-[#04512A]"
            onClick={handleDetail}
          >
            変更する
          </button>
        </div>
        <div className="md:py-10 pt-4 pb-8">
          <div className="">
            <div className="flex items-center md:justify-normal justify-between md:px-5 w-full">
              <p className="leading-[19px] md:w-2/6">お名前</p>
              <p>{name}</p>
            </div>
          </div>
          <div className="md:flex md:mt-7 mt-3">
            <div className="md:mb-0 flex items-center md:justify-normal justify-between md:px-5 w-full">
              <p className="leading-[19px] md:w-2/6">電話番号</p>
              <p>{phone}</p>
            </div>
          </div>
          <div className="md:flex md:mt-7 mt-3">
            <div className="md:mb-0 flex items-center md:justify-normal justify-between md:px-5 w-full">
              <p className="leading-[19px] md:w-2/6">メールアドレス</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="block font-bold text-lg">ご要望</p>
          <button
            className="underline underline-offset-4 text-[#04512A]"
            onClick={handleComments}
          >
            変更する
          </button>
        </div>
        <p className="mt-5 md:ml-6 md:text-base text-sm">{note}</p>
        <div className="alert border border-[#FFCD29] bg-[#FFCD291A] max-w-[787px] mx-auto rounded-none justify-center md:mb-12 mb-8 md:mt-20 mt-9">
          <p className="md:text-base text-sm text-center">
            メールアドレスの入力間違い防止の為、次の画面でメールアドレス認証を行います。
          </p>
        </div>
        <label
          // htmlFor="my-modal-4"
          className="btn flex mx-auto rounded-md bg-[#04512A] border-none text-white text-xl sm:max-w-[612px] max-w-[280px] w-full font-normal md:py-5 h-auto"
          onClick={handleModalClick}
        >
          この内容で確定する
        </label>
        <ConfirmEmailModal shopId={shopId} />
        <p className="mt-10 md:mt-16 text-center md:text-base text-sm">
          このページはSSL暗号モードで表示されています。
        </p>
      </div>
    </div>
  );
};

export default ConfirmPage;
