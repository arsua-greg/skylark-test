import { atom } from "recoil";

export const formDataState = atom({
  key: "formDataState",
  default: {
    counterValue: 2,
    selectedTimeValue: "選択してください",
    selectedDateValue: null as Date | null,
    selectedQuantityValue: "",
    selectedOfferTime: "",
    selectedOfferTiming: "",
    optionValue: "",
  },
});
