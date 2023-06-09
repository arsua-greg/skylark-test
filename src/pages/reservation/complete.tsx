import Image from "next/image";
import Steps from "@/components/ui/Steps";

const CompletePage = () => {
  return (
    <div>
      <Steps />
      <div className=" md:max-w-[1150px] mx-auto">
        <div className="px-4">
          <div className="mt-5 md:mt-10">
            <h5 className="text-center font-bold text-[14px] md:text-[20px] leading-[20px] md:leading-[30px] mb-7">
              以下の内容でご予約が確定いたしました。
              <br />
              ご来店お待ちしております。
            </h5>
            <p className="font-normal text-[14px] md:text-[18px] leading-[19px] md:leading-[25px]">
              お客様のメールアドレス宛に予約確認メールを送信しました。来店時に下記の
              <b>QRコード</b>
              を店頭の端末にかざして、入店手続きを行ってください。
            </p>
          </div>
          <div className="my-5 md:hidden">
            <figure>
              <Image
                className="mx-auto"
                src="/assets/qr_code.png"
                alt=""
                width={221}
                height={221}
              />
            </figure>
          </div>
          <div className="md:px-5 md:mt-14">
            <div className="md:w-1/2 mb-5 md:mb-7 lg:pr-5">
              <h5 className="font-bold text-[18px] mb-4">ご予約内容</h5>
              <ul>
                <li className="flex flex-wrap mb-3">
                  <div className="w-2/5">
                    <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                      ご予約店名
                    </p>
                  </div>
                  <div className="w-3/5">
                    <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                      しゃぶ葉 渋谷駅前店
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap">
                  <div className="w-2/5">
                    <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                      店舗電話番号
                    </p>
                  </div>
                  <div className="w-3/5">
                    <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                      03-5428-6350
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-[#EDEDED] p-3 md:p-7">
              <ul className="flex flex-wrap">
                <li className="w-full lg:w-1/2 mb-7 md:mb-1 lg:pr-10">
                  <ul>
                    <li className="flex flex-wrap mb-3 md:mb-5">
                      <div className="w-2/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          ご来店日
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          2023年03月17日(金)
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap mb-3 md:mb-5">
                      <div className="w-2/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          ご来店時間
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          11:00
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap mb-3 md:mb-5">
                      <div className="w-2/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          人数
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          3名
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap mb-3 md:mb-5">
                      <div className="w-2/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          お名前
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          予約　太郎
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap mb-3 md:mb-5">
                      <div className="w-2/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          電話番号　
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          080-1234-5678
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap">
                      <div className="w-2/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          メールアドレス　
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          skylark@skylark.co.jp
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="w-full lg:w-1/2 mb-7 md:mb-1 lg:pl-10">
                  <ul>
                    <li className="flex flex-wrap mb-3 md:mb-5">
                      <div className="w-full mb-3 md:mb-5">
                        <p className="font-bold text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          オプション選択
                        </p>
                      </div>
                      <div className="w-full pl-3 md:pl-0">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          【記念日のお祝いに】
                          <br className="md:hidden" />
                          アニバーサリーケーキ　＋330円(税込)
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap mb-4 md:mb-5">
                      <div className="w-2/5 pl-3 md:pl-0">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          個数
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          1個
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap mb-4 md:mb-5">
                      <div className="w-2/5 pl-3 md:pl-0">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          提供方法
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          ネコロボ
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap mb-4 md:mb-5">
                      <div className="w-2/5 pl-3 md:pl-0">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          提供タイミング
                        </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] text-right">
                          その他
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-wrap md:mb-5 pl-3 md:pl-0">
                      <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                        アニバーサリーケーキを持ってくるタイミングはこちらが合図した時でお願いしたいのですが、可能でしょうか。
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="">
                      <div className="mb-3">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          ご要望
                        </p>
                      </div>
                      <div className="pl-3 md:pl-0">
                        <p className="font-normal text-[14px] md:text-[16px] leading-[17px] md:leading-[19px]">
                          アニバーサリーケーキを持ってくるタイミングはこちらが合図した時でお願いしたいのですが、可能でしょうか。
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-7 md:mt-1 md:p-5">
            <ul>
              <li className="mb-5 md:mb-10">
                <h5 className="text-[18px] font-bold mb-2">ご注意</h5>
                <ul className="pl-2">
                  <li>
                    <p className="text-[13px] md:text-[14px] leading-[17px] md:leading-[18px]">
                      ※予約完了メールが届かなかった場合は、お手数ですが直接店舗にお問い合わせください。
                    </p>
                  </li>
                  <li>
                    <p className="text-[13px] md:text-[14px] leading-[17px] md:leading-[18px]">
                      ※変更・キャンセル期限は2023年4月8日00時00分です。
                    </p>
                  </li>
                  <li>
                    <p className="text-[13px] md:text-[14px] leading-[17px] md:leading-[18px]">
                      ※予約完了後に内容に変更があった場合には、お早めに店舗までご連絡ください。
                    </p>
                  </li>
                  <li>
                    <p className="text-[13px] md:text-[14px] leading-[17px] md:leading-[18px]">
                      ※予約完了後にご連絡なくキャンセルされた場合は、キャンセル料が発生する可能性があります。
                    </p>
                  </li>
                  <li>
                    <p className="text-[13px] md:text-[14px] leading-[17px] md:leading-[18px]">
                      ※ご連絡なしでのキャンセルや度重なるキャンセルなどがあった場合には、ご利用を停止させていただくことがございます。
                    </p>
                  </li>
                </ul>
              </li>
              <li className="mb-5 md:mb-10">
                <h5 className="text-[18px] font-bold mb-2">
                  予約キャンセル・お問い合わせ
                </h5>
                <ul className="pl-2">
                  <li className="mb-5">
                    <p className="text-[14px] leading-[19px]">
                      お申込みいただいたご予約のキャンセル、お問い合わせはお電話にて各店舗ごとに承っております。下記の番号にお問い合わせください。
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[19px]">
                      <a
                        href="tel:01-1234-6789"
                        className="c text-[#0085FF] underline"
                      >
                        01-1234-6789
                      </a>
                      （予約キャンセル・お問い合わせ）
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5 className="text-[18px] font-bold mb-2">よくある質問</h5>
                <ul className="pl-2">
                  <li className="mb-5">
                    <p className="text-[14px] leading-[19px]">
                      予約サイトに関する質問は下記のページをご参照ください。
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[19px]">
                      <a
                        href="https://reservation.skylark.co.jp/faq/"
                        target="_blank"
                        className="c text-[#0085FF] underline"
                      >
                        https://reservation.skylark.co.jp/faq/
                      </a>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="text-[14px] text-center mb-10 mt-16 md:mt-10">
            このページはSSL暗号モードで表示されています
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;
