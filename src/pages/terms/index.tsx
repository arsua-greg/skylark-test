import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function TermsPage() {
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
          <span className="text-[#04512A]">来店予約</span>　/　サイト利用規約
        </p>
      </Link>
      <h1 className="text-3xl font-bold text-center mt-14">サイト利用規約</h1>
      <p className="md:text-base text-[13px] mt-5">
        すかいらーくグループ（以下「当社」といいます）は、当社が運営するWebサイト「すかいらーくの予約サイト」（以下「当サイト」）といいます）を利用して当社の店舗の来店予約を行うサービス（以下「本サービス」といいます）の利用規約（以下「本規約」といいます）を以下のとおり定めます。
        <br />
        <br />
        本サービスをご利用いただくためには、本規約および「プライバシーポリシー」にご同意いただく必要がございますので、事前によくお読みいただいたうえでご利用いただけますようお願いいたします。本サービスを利用された場合、本規約およびプライバシーポリシーにご同意いただいたと理解し、本サービスの提供をさせていただきます。
      </p>
      <div className="mt-7">
        <p className="text-lg font-bold">第１条（本規約の適⽤範囲）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          本規約は本サービスの提供およびその利⽤に関し、当社および利
          ⽤者（第２条で定義します）に適⽤されるものとします。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第２条（利⽤者）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          利⽤者とは、本サービスを受けるために本規約および「プライバ
          シーポリシー」に同意の上、本サービスを利⽤したすべての者を いいます。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第３条（利⽤環境）</p>
        <div className="md:text-sm text-[13px] md:mt-4 mt-5">
          <p className="md:-indent-6 md:ml-6">
            １．本サービスの利⽤料は無料です。ただし、本サービスの利⽤（サポート対応を含む）に伴い発⽣するパケット料⾦などの通信料または電話料⾦は利⽤者に負担していただきます。また、本サービスの利⽤に必要な通信機器等は、利⽤者の費⽤と責任においてご準備いただきます。
          </p>
          <br />
          <p className="md:-indent-6 md:ml-6">
            ２．当サイトの推奨閲覧環境は、以下の通りとなります。 ・OS環境
            PC：Windows10、Mac OS v10.11以
            降スマートフォン：Android5.0以降、iOS11以降 ・推奨ブラウザ
            PC：GoogleChrome（最新版）、Firefox（最新版）、Safari（最
            新版）、Edge（最新版）スマートフォン：Google Chrome（最
            新版）、Safari（最新版）・Javascriptについて
            当サイトではJavascriptを使⽤しております。ご使⽤のブラウザ設定でJavascriptを無効にされている場合、正しく機能しないまたは正しく表⽰されません。ご利⽤の際にはブラウザ設定でJavascriptを有効にしてください。
            ・クッキーについて
            当サイトではクッキーを利⽤しております。ご利⽤の際にはブラウザ設定でクッキーを受け取れる設定か確認してください。クッキー情報の取扱いについては、別途定める「プライバシーポリシー」をご確認くだ
            さい。
          </p>
        </div>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">
          第４条（来店予約・変 更・キャンセル）
        </p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          <p>１．利⽤者は、当サイトを利⽤して来店予約することができます。</p>
          <br />
          <p>
            ２．利⽤者は、来店予約する場合は、当社が指定する⽅法に従って来店予約を申し込むものとします。
          </p>
          <br />
          <p className="md:-indent-6 md:ml-6">
            ３．利⽤者は、当社が指定する⽅法により、来店予約⼿続きを⾏い、利⽤者の通信機器等に予約完了の旨が表⽰されたときに、利⽤者と当社との間に来店予約が成⽴するものとします。
          </p>
          <br />
          <p className="md:-indent-6 md:ml-6">
            ４．来店予約が成⽴した後の⽇時の変更、キャンセルは、当サイトでは承ることができませんので、利⽤者は、予約完了メールに記載された期間内に、来店予約した店舗に直接電話連絡するものとします。
          </p>
          <br />
          <p>
            なお、上記期間経過後に予約の変更、キャンセルされた場合は、キャンセル料が発⽣することがあります。
          </p>
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第５条（当社による予約 の取り消し）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          １．次の各号の⼀つにあたる事由のあるときは、当社は当該予約を取り消すことができるものとします。
          <br />
          （1）利⽤者が本規約に違反した場合
          <br />
          （2）利⽤者が予約時間を15分過ぎても来店しなかった場合
          <br />
          （3）利⽤者が本サービス利⽤に関して不正確な情報、または虚偽の情報を送信した場合
          <br />
          （4）利⽤者が反社会的勢⼒等に該当すると認めうる事情が判明した場合
          <br />
          ２．予約時に⼊⼒された連絡先に連絡が取れない場合は予約をキャンセルしたものとすることができるものとします。
          <br />
          <p className="md:-indent-6 md:ml-6">
            ３．前⼆項の規定に関わらず、本サービス利⽤に関して不正⾏為または不適切な⾏為があった場合、当社は来店予約を取り消しもしくは解除、その他適切な措置をとることができるものとします。
          </p>
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第６条（禁⽌事項）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          利⽤者は以下の⾏為を⾏ってはならないものとします。
          <br />
          <br />
          （1）本サービス利⽤の際に、不正確な情報または虚偽の情報を⼊⼒して送信する⾏為
          <br />
          （2）本サービスの運営を妨げる⾏為、その他本サービスに⽀障をきたす恐れのある⾏為
          <br />
          （3）他の利⽤者、第三者もしくは当社に迷惑、不利益もしくは損害を与える⾏為、またはそれらの恐れのある⾏為
          <br />
          （4）他の利⽤者、第三者もしくは当社の商標権、著作権、プライバシーその他の権利を侵害する⾏為、またはそれらの恐れのある⾏為
          <br />
          （5）公序良俗に反する⾏為その他法令に違反する⾏為、またはそれらの恐れのある⾏為
          <br />
          （6）その他、当社が不適当と判断する⾏為
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第７条（本サービスの利 ⽤停⽌）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社は、本サービスの稼動状態を良好に保つために、次の各号の⼀つに該当する場合、利⽤者に事前に通知または公表することなく本サービスの提供の全部あるいは⼀部を停⽌することができるものとします。
          <br />
          <br />
          （1）システムの定期保守および緊急保守のために必要な場合
          <br />
          （2）⽕災、停電、第三者による妨害⾏為等によりシステムの運⽤が困難になった場合
          <br />
          （3）その他、⽌むを得ずシステムの停⽌が必要と当社が判断した場合
          <br />
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第８条（免責事項）</p>
        <div className="md:text-sm text-[13px] md:mt-4 mt-5">
          <p className="md:-indent-6 md:ml-6">
            １．当社は、利⽤者に対して通知または公表義務を負う場合は、利⽤者のメールアドレスへ通知を発信すること、または当サイト上で公表することにより、その義務を果たしたものとします。ただし、利⽤者に不利益となる事項については、対象外といたしま
            す。
          </p>
          <br />
          <p className="md:-indent-6 md:ml-6">
            ２．当社は、当社に故意⼜は重過失がない場合や法律上の請求原因等合理的な理由と事実に基づく場合でない限り、本サービスの利⽤および本サービスにおいて提供される予約に関する損害、損失、不利益等に関して責任を負わないものとします。
          </p>
          <br />
          <p className="md:-indent-6 md:ml-6">
            ３．当社は、本サービスの利⽤に関して、当社の故意⼜は重過失に起因する場合でない限り、その⽣じた損害、損失、不利益等に関して責任を負わないものとします。
          </p>
          <br />
          <p className="md:-indent-6 md:ml-6">
            ４．利⽤者が、本サービスをご利⽤になることにより、他の利⽤者または第三者に対して損害等を与えた場合には、当該利⽤者は⾃⼰の責任と費⽤において解決するものとします。
          </p>
        </div>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第９条（権利帰属）</p>
        <div className="md:text-sm text-[13px] md:mt-4 mt-5">
          <p className="md:-indent-4 md:ml-4">
            1.
            本サービスに関する知的財産権は、全て当社または当社にライセンスを許諾している者に帰属しています。本規約に基づく本サービスの利⽤許諾は、本サービスに関する当社または当社にライセンスを許諾している者の知的財産権の使⽤許諾を意味するものではありません。利⽤者は、著作権法で定める利⽤者の私的使⽤の範囲を超えて使⽤することはできません。
          </p>
          <br />
          <p className="md:-indent-4 md:ml-4">
            2.
            本条の規定に違反して権利者あるいは第三者との間で問題が⽣じた場合、利⽤者は⾃⼰の責任と費⽤においてその問題を解決するとともに、当社に何等の迷惑または損害を与えないものとします。
          </p>
        </div>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第１０条（利⽤者情報の 取り扱い）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社による利⽤者情報の取扱いについては、別途定める「プライバシーポリシー」によるものとし、利⽤者は当該個⼈情報の取扱いに関する定めに従って当社が利⽤者情報を取扱うことについて同意するものとします。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第１１条（本規約の変 更）</p>
        <p className="md:text-sm text-[13px] md:mt-4 mt-5">
          当社は、当サイトその他の⽅法により告知または公表することにより、本規約を変更できるものとし、利⽤者の利益に影響する重要な変更の場合、事前に⼗分な告知期間をもって、変更後の本規約を適⽤するものとします。当該変更後の規約を掲⽰後、利⽤者が本サービスを相当期間、利⽤継続した場合には、利⽤者は本規約の変更に同意したものと取り扱わせていただきます。ただし、利⽤者に不利益となる重要な変更の場合は、事前に通知もしくは公表または同意を得るものとします。
        </p>
      </div>
      <div className="mt-7">
        <p className="text-lg font-bold">第１２条（その他）</p>
        <div className="md:text-sm text-[13px] md:mt-4 mt-5">
          <p className="md:-indent-6 md:ml-6">
            １．本サービスに関するお問い合わせその他利⽤者から当社に対する連絡または通知、および当社から利⽤者に対する連絡または通知は、当社の定める⽅法で⾏うものとします。
          </p>
          <br />
          <p className="md:-indent-6 md:ml-6">
            ２．本サービスのご利⽤に関して、本規約により解決できない問題が⽣じた場合には、当社と利⽤者との間で双⽅誠意をもって話し合い、これを解決するものとします。
          </p>
          <br />
          <p className="md:-indent-6 md:ml-6">
            ３．本規約は⽇本法に準拠するものとし、本サービスの利⽤に関して訴訟の必要が発⽣した場合には、東京簡易裁判所または東京地⽅裁判所を第⼀審の専属的管轄裁判所といたします。
          </p>
        </div>
      </div>
      <div className="mt-7">
        <p className="text-[13px]">2023年7月〇日　制定</p>
      </div>
    </div>
  );
}

export default TermsPage;