import { atom } from "recoil";

export const countAtom = atom({
  key: "numberOfPeople",
  default: 2,
});

export const bookingTimeAtom = atom({
  key: "bookingTime",
  default: "選択してください",
});

export const bookingDateAtom = atom<Date | null>({
  key: "bookingDate",
  default: null,
});

export const optionCheckboxAtom = atom({
  key: "optionCheckboxAtom",
  default: false,
});

export const selectedQuantityAtom = atom({
  key: "selectedQuantity",
  default: "",
});

export const selectedOfferTimeAtom = atom({
  key: "selectedOfferTime",
  default: "",
});

export const selectedOfferTimingAtom = atom({
  key: "selectedOfferTiming",
  default: "",
});

export const optionNoteAtom = atom({
  key: "optionNote",
  default: "",
});

export const userName = atom({
  key: "name",
  default: "",
});

export const userPhoneNumber = atom({
  key: "phoneNumber",
  default: "",
});

export const userEmail = atom({
  key: "email",
  default: "",
});

export const userNote = atom({
  key: "note",
  default: "",
});

export const productNameRefState = atom<string>({
  key: "productNameRefState",
  default: "",
});

export const isButtonDisabledAtom = atom({
  key: "isButtonDisabledAtom",
  default: true,
});
