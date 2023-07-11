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
      <h1 className="text-3xl font-bold text-center">
        「すかいらーくの予約サイト」
        <br />
        プライバシーポリシー
      </h1>
      <p className="md:text-base text-[13px] mt-5">
        株式会社すかいらーくホールディングス（以下「当社」といいます）は、当社が運営するWebサイト「すかいらーくの予約サイト」（以下「当サイト」といいます）を利用して当社の店舗の来店予約を行うサービス（以下「本サービス」における利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」を定めます。なお、本ポリシーにおける用語の定義は、特段の規定がない限り、「すかいらーくの予約サイト」に定める「利用規約」と同義とします。
      </p>
      <div className="mt-7">
        <p className="text-lg font-bold">第１条（⽤語の定義）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          １．「利⽤者」とは、本サービスを利⽤するすべての者をいいま す。
          <br />
          <span className="block md:-indent-9 md:ml-9">
            ２．「利⽤者情報」とは、個⼈情報（個⼈情報の保護に関する
            法第２条第１項により定義された「個⼈情報」をいい、以下同様と
            します。）、利⽤者の通信サービス上の⾏動履歴その他利⽤者の情
            報端末において⽣成⼜は蓄積された情報であって、本ポリシーに基
            づき当社が収集するものをいいます。
          </span>
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">
          第2条（本サービスで収集す る利⽤者情報）
        </p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          1. 当社は、利⽤者から、本サービスを利⽤するために、⽒名、メー
          ルアドレス、電話番号等の利⽤者情報を⼊⼒フォームへの⼊⼒を通
          じて提供していただきます。
          <br />
          <span className="block md:-indent-4 md:ml-4">
            2.
            当社は、本サービスにおいて、利⽤者のアクセス状況や本サービスの利⽤⽅法に関する情報その他の利⽤端末に蓄積される情報を収集する場合があります。この情報には、以下の情報が含まれます。
            <br />
            <br />
          </span>
          <span>
            ・端末情報（端末ID、IPアドレス等利⽤者属性情報）
            <br />
            ・ログ情報及びタグ情報 ・位置情報 ・クッキー（Cookie）情報
            <br />
            ・その他本サービス利⽤に関する情報
          </span>
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第3条（個⼈情報の利⽤⽬ 的）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          1.当社は、個⼈情報を、利⽤者本⼈の同意がない限り、利⽤⽬的の達成に必要な範囲を超えて利⽤しません。
          <br />
          2. 当社は、個⼈情報を下記の⽬的の範囲内で適正に取り扱います。
          <br />
          <br />
          ・本サービスの提供、維持、保護、および改善のための動作の精度調査のため
          <br />
          ・利⽤者の利⽤状況等をふまえた、将来のマーケティング活動に関する調査およびその他利⽤者の利⽤特性に合わせたサービスの提供
          <br />
          ・機能向上のための開発・研究のため
          <br />
          ・本サービス等に関する利⽤者からのお問合せ等への対応のため
          <br />
          ・本サービスの停⽌・中⽌等、本サービスに関する通知・連絡を⾏うため
          <br />
          ・本サービスの利⽤規約に違反する⾏為に対応するため
          <br />
          ・本サービスの情報告知（当社または第三者の広告、メールマガジン等を含みます）のため
          <br />
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第4条（利⽤⽬的の変更）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社は、前条の利⽤⽬的を、変更前の利⽤⽬的と関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合には、⾃社ホームページ内において、利⽤者に告知します。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第5条（法令の遵守）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社は、個⼈情報保護法その他の法令を遵守して個⼈情報を取り扱 います。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第6条（安全管理）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          1.当社は、利⽤者情報の漏洩、滅失⼜は毀損の防⽌その他の利⽤者情報の安全管理のために必要かつ適切な措置を講じます。
          <br />
          <span className="block md:-indent-3 md:ml-3">
            2.当社は、利⽤者情報の取扱いの全部⼜は⼀部を第三者に委託する場合は、当該第三者との間で本ポリシーに準じる内容の秘密保持契約等をあらかじめ締結し、当該第三者において利⽤者情報の安全管理が図られるよう、必要かつ適切な監督を⾏います。
          </span>
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold"> 第7条（Cookieその他の技術 の利⽤）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          <span className="block md:-indent-3 md:ml-3">
            1.当社は、本サービスのウェブサイトにおいて、「Cookie（クッキー）」と呼ばれる技術を使⽤しているページがあります。Cookieとは、利⽤者の利⽤端末を識別する技術です。Cookieの技術により、表⽰すべき事項を利⽤者の利⽤端末毎に変えたり、利⽤者の⼊⼒事項を保存できたりするため、利⽤者は、カスタマイズされたサービスの提供を受けることができます。当社は、お客様のサービス利便性向上、サービスの改善、適切な広告の提供、及び統計データの取得を⽬的としてcookieを使⽤したお客様の利⽤状況及び属性情報、利⽤端末等の情報の収集を⾏うことがあります。
          </span>
          2.利⽤者は、設定を変更してCookieの機能を無効にすることはできますが、その結果、本サービスの全部⼜は⼀部が利⽤できなくなることがあります。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第8条（情報収集モジュー ル）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          <span className="block md:-indent-3 md:ml-3">
            1.
            本サービスには、利⽤者情報を解析するため、以下の情報収集モジュールが組み込まれています。
            <br />
            (1)情報収集モジュールの名称GoogleAnalytics、Google Tag Manager
            <br />
            (2)情報収集モジュールの提供者Google
          </span>
          <br />
          <span className="block md:-indent-2 md:ml-2">
            2.これに伴い収集された情報は、情報収集モジュールの提供者の定める規定に基づき情報収集モジュールの提供者に送信され管理されます（詳細については、各情報収集モジュール提供者の規定等をご参照ください）。
          </span>
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第9条（第三者提供）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社は、利⽤者情報については、予め利⽤者の同意を得ないで、第三者（⽇本国外の者を含みます。以下同様）に提供しません。ただし、次に掲げる場合は、この限りではありません。
          <br />
          <br />
          （１）当社が利⽤⽬的の達成に必要な範囲内において前条に基づき個⼈情報の取扱いの全部または⼀部を委託する場合
          <br />
          （２）特定の個⼈を識別できないように加⼯された後の情報の場合
          <br />
          （３）合併その他の事由による事業の承継に伴って個⼈情報が提供される場合
          <span className="block md:-indent-10 md:ml-10">
            （４）国の機関もしくは地⽅公共団体またはその委託を受けた者が法令の定める事務を遂⾏することに対して協⼒する必要がある場合であって、利⽤者の同意を得ることによって当該事務の遂⾏に⽀障を及ぼすおそれがあ
            る場合
          </span>
          （５）その他、個⼈情報保護法その他の法令で認められる場 合
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第10条（個⼈情報の開⽰の 請求）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社は、利⽤者から、個⼈情報保護法の定めに基づき個⼈情報の照会等開⽰（以下「開⽰」といいます）を請求されたときは、利⽤者ご本⼈からのご請求であることを確認のうえで、利⽤者に対し、遅滞なく開⽰を⾏います（当該個⼈情報が存在しないときにはその旨を通知いたします）。ただし、個⼈情報保護法その他の法令により、当社が開⽰等の義務を負わない場合は、この限りではありません。なお、個⼈情報の開⽰につきましては、⼿数料を頂戴しておりますので、予めご了承ください。個⼈情報の開⽰を請求する⼿続はこちら
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">
          第11条（個⼈情報の訂正、 消去の請求）
        </p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          <span className="block md:-indent-7 md:ml-7">
            １．個⼈情報の「訂正」「追加」または「削除」の請求について当社は、利⽤者から、利⽤者の個⼈情報について「訂正」「追加」または「削除」（以下「訂正等」といいます）を請求された場合、当社が当該請求に応じる必要があると合理的に判断した場合は、利⽤者ご本⼈からの請求であることを確認のうえで、個⼈情報の消去を⾏い、その旨を利⽤者に通知します。
          </span>
          <span className="block md:-indent-7 md:ml-7">
            ２．個⼈情報の「利⽤停⽌」または「消去」について当社は、利⽤者から、以下の各号の理由により、個⼈情報保護法の定めに基づきその内容の「利⽤の停⽌」または「消去」（以下「利⽤停⽌等」といいます）を請求された場合には、利⽤者ご本⼈からのご請求であることを確認のうえで遅滞なく必要な調査を⾏い、その旨を利⽤者に通知します。なお、合理的な理由に基づいて訂正または利⽤停⽌を⾏わない旨の決定をしたときは、利⽤者に対しその旨を通知いたします。
          </span>
          <span className="block md:ml-5">
            （１）個⼈情報が真実でないという理由
            <br />
            （２）予め公表された利⽤⽬的の範囲を超えて取扱われているという理由または偽りその他不正の⼿段により収集されたものであるという理由
            <br />
          </span>
          <span className="block md:-indent-6 md:ml-6">
            ３．個⼈情報保護法その他の法令により、当社が訂正等または利⽤停⽌等の義務を負わない場合は、前⼆項の規定は適⽤されません。
            個⼈情報の訂正・利⽤停⽌等を請求する⼿続はこちら
          </span>
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第12条（お問い合わせ）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          ご意⾒、ご質問、苦情のお申し出その他本ポリシーに定める情報の取扱いに関するお問合せは、下記の窓⼝までお願い致します。株式会社すかいらーくレストランツお客様相談室・お⼿紙〒１８０−８５８０東京都武蔵野市⻄久保１−２５−８・メールお問合せフォームはこちら
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">
          第13条（個⼈情報の安全管 理措置・体制）
        </p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社は、個⼈情報管理責任者を設置し、個⼈情報保護法および関連法令に基づく社内規程に従って、ご提供いただいた利⽤者情報も含めた個⼈情報を厳重に保管・管理し、第三者の不正なアクセスによる個⼈情報の漏洩・流⽤・改ざん等を防⽌するため、万全のセキュリティ対策を講じるものとします。詳しくは、「個⼈情報の保護に関する法律に基づく公表事項」をお読みください。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第14条（本ポリシーの変 更）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社は、利⽤者情報および本サービスに関する運⽤状況を適宜⾒直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーを変更することがあります。変更した場合には、⾃社ホームページ内での掲載により利⽤者に通知または公表いたします。ただし、法令上利⽤者の同意が必要となるような内容の変更の場合は、当社所定の⽅法で利⽤者の同意を得るものとします。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">
          第15条（リンク先における 個⼈情報の保護）
        </p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          本サービスからリンクするウェブサイトにおける個⼈情報の安全確保については責任を負うことはできません。リンク先の個⼈情報保護につきましては、当該リンク先におけるプライバシーポリシー等を利⽤者ご⾃⾝でご確認いただきますようお願い致します。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-[13px]">
          株式会社すかいらーくホールディングス代表取締役⾦⾕実【制定⽇】2023年7⽉20⽇
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
