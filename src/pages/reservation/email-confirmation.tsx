import Steps from "@/components/ui/Steps";

const EmailConfirmationPage = () => {
  return (
    <div>
      <Steps />
      <div className="md:max-w-[1150px] mx-auto">
        <div className="px-4">
          <p className="text-center text-[14px] md:text-[16px] leading-[16.94px] md:leading-[25px] my-7 md:my-10">
            まだ予約は確定しておりません。
            <br />
            認証メールを確認し、予約を確定させてください。
          </p>
          <div className="alert border border-[#FFCD29] bg-[#FFCD291A] max-w-[787px] mx-auto rounded-none">
            <div className="w-full">
              <div className="text-center w-full py-3">
                <h5 className="font-bold mb-5">skylark@skylark.co.jp</h5>
                <p className="text-left text-[14px] font-normal md:text-center">
                  上記のメールアドレスに認証URLを送信しました。
                  <br />
                  <span className="text-[#F71B1B]">
                    ただいまより３０分以内に認証URLをクリックし、
                  </span>
                  予約を完了させてください。
                </p>
              </div>
            </div>
          </div>
          <p className="pt-5 md:pt-10 pb-8 md:pb-12 md:px-5 text-[13px] md:text-[16px] leading-[17px] md:leading-[19.36px]">
            ※30分以内にメールに記載されているURLにアクセスされなかった場合、予約は無効となります。
          </p>
          <hr />
          <div className="w-full md:px-5 mt-5">
            <ul>
              <li className="mb-8 md:mb-12">
                <h5 className="text-[18px] font-bold mb-4">注意事項</h5>
                <ul>
                  <li>
                    <p className="text-[13px] md:text-[14px] leading-[18px]">
                      ※予約確定処理が行われなかった場合、ご登録いただいた予約は無効となりますのでご注意ください。
                    </p>
                  </li>
                  <li>
                    <p className="text-[13px] md:text-[14px] leading-[18px]">
                      ※予約希望日を予約締切間近にしている場合、ご希望日での登録ができなくなる場合もありますので、迅速に予約確定処理をしていただくことをおすすめします。
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5 className="text-[18px] font-bold mb-4">
                  メールアドレス認証時の注意点
                </h5>
                <ul className="mb-5">
                  <li>
                    <p className="text-[13px] md:text-[14px] leading-[18px]">
                      現段階ではまだ予約は確定しておりません。ご入力いただいたメールアドレス宛にお送りした「メールアドレス認証メール」に記載されているURLにアクセスし、予約を確定させてください。
                    </p>
                  </li>
                </ul>
                <div className="mb-5">
                  <h6 className="font-bold text-[13px] mb-2">
                    ＜メールが届かない場合＞
                  </h6>
                  <ul>
                    <li>
                      <p className="font-normal text-[13px] leading-[18px]">
                        ・入力いただいたメールアドレスに間違いがないかご確認ください。
                      </p>
                    </li>
                    <li>
                      <p className="font-normal text-[13px] leading-[18px]">
                        ・フリーメールを利用されている場合や通信状況などによっては「メールアドレス認証メール」を受信するまでに時間がかかることがあります。30分以上経過してもメールが届かなかった場合には、お手数ですが別のメールアドレスにて再度予約申し込みを行ってください。
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-bold text-[13px] mb-2">
                    ＜URLにアクセスできない場合＞
                  </h6>
                  <ul>
                    <li>
                      <p className="font-normal text-[13px] leading-[18px]">
                        ・URLの途中で改行が入り、正しいページが表示されていない場合があります。URLをコピーし、ブラウザのアドレスバーへ直接ペーストしてアクセスしてください。
                      </p>
                    </li>
                    <li>
                      <p className="font-normal text-[13px] leading-[18px]">
                        ・URLをクリックして「予約申し込み完了」画面が表示されれば、予約申し込みが確定となります。
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-12 pb-10 md:pt-20 md:pb-20">
            <p className="text-[14px] leading-[17px] text-center">
              このページはSSL暗号モードで表示されています
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationPage;
