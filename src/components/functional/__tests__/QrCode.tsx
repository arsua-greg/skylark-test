import React from "react";
import QRCode from "qrcode.react";

type Prop = {
  bookingCode: string;
};

export default function QrCode({ bookingCode }: Prop) {
  return <QRCode value={bookingCode} size={221}></QRCode>;
}
