import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const PrivacyPage = () => {
  const breadCrumbSp = "<戻る";
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mx-auto max-w-[1120px] px-5 mt-16 pb-72">
      <Link
        href="/terms"
        className="text-[#04512A] text-lg mb-5 block"
        onClick={handleGoBack}
      >
        <p className="md:hidden block">{breadCrumbSp}</p>
        <p className="text-xl md:block hidden text-black">
          <span className="text-[#04512A]">来店予約</span>
          　/　プライバシーポリシー
        </p>
      </Link>
      <h1 className="text-3xl font-bold text-center">プライバシーポリシー</h1>
      <p className="md:text-base text-[13px] mt-5">
        株式会社すかいらーくホールディングス（以下「当社」といいます）が運営するウェブサイト（以下「本サイト」といいます）におけるお客様（以下「利用者」といいます）の情報（以下に定める「１．」に定義します）の取扱いについて、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守するとともに、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定め、その厳重なる管理と保護に努めます。なお、本ポリシーにおける用語の定義は、特段の規定がない限り、「すかいらーくの予約」に定める「利用規約」と同義とします。
      </p>
      <div className="mt-7">
        <p className="text-lg font-bold">１．収集・取得する利用者情報</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          このサイト上のすべての著作物、肖像、キャラクター、マーク、その他の情報は当社ないし、その提供者が著作権等の知的財産権、またはその使用権を有しています。これらの著作物につきましては、別段の定めがある場合を除き、私的使用その他著作権法で特に認められている範囲を超えてのご利用（複製、改変、上映、公衆送信、頒布、再使用許諾等を含む）は一切禁止いたします。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">２．利用目的</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          このサイトに掲載されたロゴマーク（図形を含む）は当社の登録商標または商標です。このサイトに掲載された商標はすべて当社の財産です。当社は、ご利用に対してこれらの商標の使用の許諾を行なっておりません。ただし、各ページにおいて別途商標表示（クレジット）がある場合は、これに従ってください。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">３．第三者への提供</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社では、このサイトに情報を掲載する際には細心の注意を払っております。しかしながら、当社は皆様がこれらの情報を使用されたこと、もしくは使用できなかったこと、また、このサイトをご利用になったことにより生じるいかなる損害についても責任を負うものではありません。また、商品等の色彩表現につきましては万全を期していますが、画面上の色彩と実際の色彩が異なる場合もございます。あらかじめご了承ください。尚、当社は理由の如何に関わらず、情報の変更およびこのサイトの運用の中断または中止によって生じるいかなる損害についても責任を負うものではありません。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">４．個人情報の安全管理</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          このサイトへのリンクをご希望される場合は、お問い合わせ窓口からご連絡をお願いいたします。公序良俗に反するサイトからのリンクはお断り致します。事前事後に関わらずリンクをお断りする場合もありますのでご了承ください。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">５．個人情報の開示等の請求</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          このサイトからリンクを張っている、あるいはこのサイトに対してリンクを張っている当社以外の運営するWebサイトについて、当社では内容について一切関与しておりません。当社はこれらのWebサイトに関し、いかなる保証もせず、いかなる責任も負いません。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-[13px]">2023年7月20日　制定</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
