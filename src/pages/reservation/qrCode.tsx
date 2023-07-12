import { useRouter } from "next/router";
import QRCode, { QRCodeSVG } from "qrcode.react";
import React from "react";

function qrCode() {
  const router = useRouter();
  const bookingCode = router.query.bookingCode;

  const qrCodeValue = Array.isArray(bookingCode)
    ? bookingCode[0]
    : bookingCode || "";

  return (
    <div className="text-center flex items-center mx-auto flex-col justify-center h-96">
      <QRCode
        value={qrCodeValue}
        size={221}
        className="mx-auto h-full"
      ></QRCode>
    </div>
  );
}

export default qrCode;
