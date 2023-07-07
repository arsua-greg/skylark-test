const userEmailTemplateBody = (
  email: string | undefined,
  name: string | undefined,
  numberOfPeople: number | undefined,
  bookingDate: Date | undefined,
  bookingTime: string | undefined,
  selectedQuantity: number | undefined,
  selectedOfferTime: string | undefined,
  selectedOfferTiming: string | undefined,
  optionNote: string | undefined,
  phone: string | undefined,
  note: string | undefined,
  productNameValue: string | undefined,
  bookingCode: any
) => {
  const formattedDate = () => {
    const dateObj = new Date(bookingDate ? bookingDate : "");
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][
      dateObj.getDay()
    ];
    return `${year}年${month}月${day}日(${dayOfWeek})`;
  };

  return `
ご予約いただき誠にありがとうございます。<br/>
「しゃぶ葉 渋谷駅前店」での予約受付が完了しましたので、ご予約いただいた内容をお知らせします。<br/>
<br/>
来店時に本メールに添付しましたQRコードを店頭の端末にかざして、入店手続きを行ってください。<br/>
※このメールの内容に覚えがない方は、お手数ですが直接店舗までお問い合わせください。<br/>
<br/>
【ご予約内容】<br/>
■予約受付日時：${formattedDate()}${bookingTime}<br/>
■ご予約店名：しゃぶ葉 渋谷駅前店<br/>
■店舗電話番号：03-5428-6350<br/>
<br/>
------------------------------
<br/>
ご来店日時：${formattedDate()}${bookingTime}<br/>
ご予約人数：${numberOfPeople} 名<br/>
お名前：${name}<br/>
電話番号：${phone}<br/>
メールアドレス：${email}<br/>
<br/>
オプション選択：${productNameValue}<br/>
個数：${selectedQuantity}<br/>
提供方法：${selectedOfferTiming}<br/>
提供タイミング：${selectedOfferTime}<br/>
${optionNote}<br/>
<br/>
ご要望：${note}<br/>
<br/>
------------------------------
<br/>
【予約キャンセル・お問い合わせ】<br/>
お申込みいただいたご予約のキャンセル、ご予約に関するお問い合わせはお電話にて各店舗ごとに承っております。<br/>
下記の番号にお問い合わせください。<br/>
03-5428-6350（予約キャンセル・お問い合わせ）<br/>
<br/>
また、下記のよくある質問ページもご参照ください。<br/>
https://reservation.skylark.co.jp/faq/<br/>
<br/>
【ご注意】<br/>
※変更・キャンセル期限はご来店予約時間までです。<br/>
※予約完了後に内容に変更があった場合には、お早めに店舗までご連絡ください。<br/>
※予約完了後にご連絡なくキャンセルされた場合は、キャンセル料が発生する場合があります。<br/>
※ご連絡なしのキャンセルや度重なるキャンセルなどがあった場合には、ご利用を停止させていただくことがございます。<br/>
<br/>
<br/>
本メールは自動送信されています。<br/>
本メールにご返信されても、お答えできませんのでご了承ください。<br/>
<br/>
配信元：株式会社すかいらーくホールディングス<br/>
https://corp.skylark.co.jp/<br/>
<br/>
${bookingCode}`;
};

export default userEmailTemplateBody;
