import { useRouter } from "next/router";
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

async function ReservationConfirmed() {
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
  const { shopId } = router.query;

  const formatDateReqBody = () => {
    const dateObj = new Date(bookingDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  try {
    const bookingInfo = {
      numberOfPeople: numberOfPeople,
      bookingDate: formatDateReqBody(),
      bookingTime: bookingTime,
      fullName: name,
      telNum: phone,
      email: email,
      optionList: [
        {
          optionName:
            "【記念日のお祝いに】アニバーサリーケーキ＋３３０円(税込)",
          quantity: selectedQuantity,
          methodOfProvision: selectedOfferTiming,
          offerTime: selectedOfferTime,
          optionNote: optionNote,
        },
      ],
      shopId: shopId,
      bookingType: 1,
    };

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    });

    if (response.ok) {
      console.log("Successfully Added Data", response.status);
    } else {
      console.log("Error", response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

export default ReservationConfirmed;
