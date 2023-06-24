import { atom } from "recoil";
import {
  quantityOptions,
  offerTimeOptions,
  offerTimingOptions,
} from "@/utils/optionSelection";

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

export const selectedQuantityAtom = atom({
  key: "selectedQuantity",
  default: quantityOptions[0].value,
});

export const selectedOfferTimeAtom = atom({
  key: "selectedOfferTime",
  default: offerTimeOptions[0].value,
});

export const selectedOfferTimingAtom = atom({
  key: "selectedOfferTiming",
  default: offerTimingOptions[0].value,
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
