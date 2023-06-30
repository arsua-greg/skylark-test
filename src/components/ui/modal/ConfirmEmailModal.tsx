import Button from "../Button";

import { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  bookingDateAtom,
  bookingTimeAtom,
  countAtom,
  optionNoteAtom,
  selectedOfferTimeAtom,
  selectedOfferTimingAtom,
  selectedQuantityAtom,
  userEmail,
  userName,
  userNote,
  userPhoneNumber,
} from "@/globalState/globalState";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const ConfirmEmailModal = () => {
  const router = useRouter();
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
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailConfirm = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
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
        })
      );

      const emailBody = {
        to: email,
        subject: "Skylark Reservation",
        body: "Skylark Reservation Test Email",
        name: name,
      };

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailBody),
      });

      if (response.ok) {
        // router.push("/reservation/email-confirmation");
        router.push("/api/auth/login");
        console.log("Email sent", response.status);
      } else {
        console.log("Error", response.status);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal bg-[#0000008A] drop-shadow-sm">
        <div className="modal-box relative max-w-[823px] md:max-h-[500px] mx-auto md:p-14 px-4 md:pt-16 pt-16 md:pb-16 pb-10 rounded-lg">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#04512A]"
          >
            ✕
          </label>
          <div className="md:max-w-[486px] mx-auto">
            <div className="md:px-3">
              <div className="mb-7 text-center">
                <p className="md:mb-10 mb-7 md:text-base text-sm">
                  下記メールアドレスに認証メールを送信します。
                </p>
                <p className="md:text-xl">{email}</p>
              </div>
              <Button
                text="認証メールを送信する"
                className="md:py-5 h-auto md:text-xl text-lg"
                onClick={handleEmailConfirm}
              />
            </div>
            <p className="text-[13px] md:text-sm md:mt-12 mt-8 md:leading-[25px]">
              ※まだ予約は完了しておりません。
              <br className="md:block hidden" />
              認証メール受信後の申し込み処理が行われなかった場合、ご登録いただいた
              <br className="md:block hidden" />
              内容は無効となりますのでご注意ください。
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmEmailModal;
