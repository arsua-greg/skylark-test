import { atom } from "recoil";

export const reservationFormState = atom({
  key: "reservationFormState",
  default: {
    counterValue: "",
    selectedTimeValue: "",
    selectedDateValue: "",
    selectedQuantityValue: "",
    selectedOfferTime: "",
    selectedOfferTiming: "",
  },
});
