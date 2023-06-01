import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const FaqPage = () => {
  const breadCrumbSp = "<戻る";
  const router = useRouter();
  const [activeServiceItems, setServiceActiveItems] = useState<number[]>([]);
  const [activeApplicationItems, setApplicationActiveItems] = useState<
    number[]
  >([]);

  const handleServiceAccordionClick = (index: number) => {
    const isActive = activeServiceItems.includes(index);

    if (isActive) {
      setServiceActiveItems(
        activeServiceItems.filter((item) => item !== index)
      );
    } else {
      setServiceActiveItems([...activeServiceItems, index]);
    }
  };

  const handleApplicaitonAccordionClick = (index: number) => {
    const isActive = activeApplicationItems.includes(index);

    if (isActive) {
      setApplicationActiveItems(
        activeApplicationItems.filter((item) => item !== index)
      );
    } else {
      setApplicationActiveItems([...activeApplicationItems, index]);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const serviceContents = [
    {
      q: "どのようなサービスですか？",
      a: "スマートフォンやパソコンから、⽇時を指定して来店予約ができるサービスです。",
    },
    {
      q: "予約できる⼈数は何⼈までですか？",
      a: "ご予約可能な⼈数は最⼤16名までとなっております。16名以上での予約をご希望の⽅は直接店舗へお電話にてお問合せください。",
    },
    {
      q: "⼦供は⼈数にカウントされますか？",
      a: "⼩学⽣以上のお⼦様は、⼈数にカウントしてご予約ください。",
    },
    {
      q: "希望条件（⽇時・⼈数・オプション選択など）で予約ができません。どうすればいいですか？",
      a: "条件によってはご希望の内容で予約ができないことがあります。直接店舗へお電話にてお問合せください。",
    },
    {
      q: "希望の⼈数で予約ができません。",
      a: "空席数は店舗や時間帯によって異なります。ご希望の⼈数が空席数より多かった場合は予約することができません。⽇時や時間帯を変更いただくか、直接店舗へお電話にてお問合せください。",
    },
    {
      q: "予約したい時間が選択できません。",
      a: "店舗では各時間帯ごとのご予約数の上限を設けております。上限に達した時間は選択できませんので、あらかじめご了承ください。",
    },
    {
      q: "エラーが表⽰され、予約ができません。",
      a: "ご⼊⼒項⽬に、⼊⼒漏れや誤りがないか確認ください。",
    },
    {
      q: "予約した時間に間に合わなかった場合はどうなりますか？",
      a: "予約時間を15分過ぎてもお集まりいただけない場合キャンセル扱いとさせていただきますので、あらかじめご了承ください。",
    },
    {
      q: "座席を指定して予約できますか？",
      a: "座席の場所を指定してのご予約は受け付けておりません。あらかじめご了承ください。",
    },
    {
      q: "⼀度に複数の予約を⾏うことができますか？",
      a: "⼀度の予約申し込みではひとつの来店予約しか受け付けておりません。複数の予約を⾏いたい場合は、予約申し込み完了後に再度、予約サイトより別⽇程をお申込みください。",
    },
  ];

  const applicationContents = [
    {
      q: "認証メール、予約完了メールが届きません。",
      a: "各種メールが届かない場合は、以下の可能性があります。\n・迷惑メールフォルダやゴミ箱など、メール受信フォルダ以外に振り分けられている。\n・メールの受信設定にてパソコンからのメールの拒否やドメイン指定受信設定をしている。\n\n設定の変更方法については、ご利用のメールサービス、携帯電話の機種などにより異なります。サービス提供元やメーカー等にお問合せください。また、メールが受け取れなかった場合、再送はできませんのでご了承ください。\n\nなお、メールが届かなかった場合、処理が正しく完了していない可能性がございます。お手数ですが、直接店舗へお電話にてごお問い合わせいただくか、改めて予約サイトよりお申込みください。",
    },
    {
      q: "メール認証のURLにアクセスするとエラーになります。",
      a: "URLの読み込みが⼀時的にうまくいかなかった、もしくは、ご利⽤のメールソフトによってはURLが途中で改⾏されてしまう場合があります。URLをコピーし、ブラウザのアドレスバーへ貼り付けて再度アクセスしてください。\n\nまた、メール認証⽤URLの有効期限は30分となっております。30分を越えてしまうと無効となりますので、改めて予約サイトよりお申込みください",
    },
    {
      q: "お店へキャンセルの連絡をしましたが、予約キャンセル完了のメールが届きませんでした。予約はキャンセルされていますか？",
      a: "予約のキャンセルが完了していない可能性がございます。直接店舗へお電話にてお問合せください。",
    },
    {
      q: "認証メール、予約完了メール、予約キャンセルメールへの返信について",
      a: "各種メールは⾃動送信されるため、メールに返信いただいてもお答えできません。",
    },
    {
      q: "予約内容（⽇時・⼈数・オプション詳細）を確認したいです。",
      a: "予約内容は予約完了画⾯のほか、予約完了時にメールアドレス宛にお送りした予約完了メールでもご確認いただけます。",
    },
    {
      q: "予約申し込み時に情報を間違えて⼊⼒してしまった。",
      a: "お名前、電話番号を間違えてしまった場合は、店舗までお電話にてご連絡ください。",
    },
    {
      q: "予約した店舗に電話が繋がりません。",
      a: "お電話をかけた時間が営業時間内かご確認ください。また、営業時間内であっても時間帯や状況によってはお電話が繋がりにくい場合がございます。時間帯を変えてお掛け直しをお願いします。",
    },
    {
      q: "予約の際に店舗に伝わる情報には何がありますか？",
      a: "予約時に店舗へ伝わるお客様の情報は「お名前」と「電話番号」のみです。メールアドレスは店舗へ伝わりません。",
    },
    {
      q: "予約内容（⽇時・⼈数・オプション選択など）を変更したい。",
      a: "予約申し込み内容の変更は、来店予約時間までに直接店舗へお電話にてご連絡ください。※Webから予約変更はできません。",
    },
    {
      q: "予約申し込み時に登録したメールアドレスを変更できますか？",
      a: "予約申し込み時に登録されたメールアドレスは変更できません。\n別のメールアドレスでメールを受信したい場合は、お⼿数ですが現在のお申し込みをキャンセルの上、再度予約申し込みを⾏ってください。",
    },
    {
      q: "予約をキャンセルしたい場合はどうすればいいですか？",
      a: "お電話にて予約キャンセルのお⼿続きを受け付けております。ご予約いただいた店舗へ直接お電話にてご連絡ください。",
    },
    {
      q: "予約をキャンセルしてしまったが、元に戻したい。",
      a: "⼀度キャンセルされた予約は、元に戻すことはできません。\n再度予約をご希望の場合は、改めて予約フォームよりお⼿続きをお願いします。また状況によっては、同じ条件で予約できないこともございますのでご了承ください。",
    },
    {
      q: "キャンセル料がかかるか確認したい。",
      a: "キャンセル料については直接店舗へお電話にてお問合せください。",
    },
    {
      q: "キャンセルした覚えがないのに予約キャンセル完了のメールが届いた。",
      a: "誤ってキャンセル操作が⾏われた可能性がございます。ご予約いただいた店舗へ直接お電話にてお問い合わせください。",
    },
  ];

  return (
    <div className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5 md:pb-24 pb-6">
      <Link
        href="/"
        className="text-[#04512A] text-lg mb-5 block"
        onClick={handleGoBack}
      >
        <p className="md:hidden block">{breadCrumbSp}</p>
        <p className="text-xl md:block hidden text-black">
          <span className="text-[#04512A]">来店予約</span>　/　よくある質問
        </p>
      </Link>
      <h1 className="md:text-3xl text-lg font-bold text-center">
        よくある質問
      </h1>
      <p className="md:text-base text-[13px] md:mt-8 mt-6">
        予約サイトについてよくある質問をまとめました
      </p>
      <div className="md:my-[51px] mt-5 ml-3">
        <Link
          className="text-[#04512A] md:text-base text-[15px] underline underline-offset-2"
          href="faq/#service-contents"
        >
          サービス内容について
        </Link>
        <br />
        <Link
          className="text-[#04512A] md:text-base text-[15px] underline underline-offset-2"
          href="faq/#application"
        >
          申し込み・変更・キャンセルについて
        </Link>
      </div>
      <div className="pt-10" id="service-contents">
        <h2 className="text-lg md:text-3xl font-bold border-l-[#04512A] md:border-l-8 border-l-4 pl-[15px] md:mb-11 mb-2">
          サービス内容について
        </h2>
        {serviceContents.map((item, index) => (
          <div
            className="collapse bg-base-100 border-b border-[#D9D9D9] pt-7 pb-6 md:px-2 md:pr-4 pr-4 cursor-pointer"
            key={index}
            onClick={() => handleServiceAccordionClick(index)}
          >
            <div className="collapse-title p-0 flex items-center justify-between">
              <p className="md:text-xl text-base font-bold pr-6">{item.q}</p>
              <Image
                src="/assets/accord_arrow.png"
                width={11}
                height={11}
                alt=""
                className={`transition-transform ${
                  activeServiceItems.includes(index) ? "-rotate-180" : ""
                }`}
              />
            </div>
            {activeServiceItems.includes(index) && (
              <div className="collapse-content p-0 pb-0">
                <p className="pt-3 md:text-base text-[15px] whitespace-break-spaces">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pt-[51px]" id="application">
        <h2 className="text-lg md:text-3xl font-bold border-l-[#04512A] md:border-l-8 border-l-4 pl-[15px] md:mb-11 mb-1">
          申し込み・変更・キャンセルについて
        </h2>
        {applicationContents.map((item, index) => (
          <div
            className="collapse bg-base-100 border-b border-[#D9D9D9] pt-7 pb-6 md:px-2 md:pr-4 pr-4 cursor-pointer"
            key={index}
            onClick={() => handleApplicaitonAccordionClick(index)}
          >
            <div className="collapse-title p-0 flex items-center justify-between">
              <p className="md:text-xl text-base font-bold pr-6">{item.q}</p>
              <Image
                src="/assets/accord_arrow.png"
                width={11}
                height={11}
                alt=""
                className={`transition-transform ${
                  activeApplicationItems.includes(index) ? "-rotate-180" : ""
                }`}
              />
            </div>
            {activeApplicationItems.includes(index) && (
              <div className="collapse-content p-0 pb-0">
                <p className="pt-3 md:text-base text-[15px] whitespace-break-spaces">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
