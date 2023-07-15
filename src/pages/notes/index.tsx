import { useRouter } from "next/router";
import React from "react";

const NotesPage = () => {
  const breadCrumbSp = "<戻る";
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mx-auto max-w-[1120px] px-5 mt-5 pb-10">
      <label
        className="text-[#04512A] text-lg mb-5 block cursor-pointer"
        onClick={handleGoBack}
      >
        {breadCrumbSp}
      </label>
      <div>
        <div className="mb-10">
          <h1 className="text-[18px] font-bold text-left mb-4">注意事項</h1>
          <p className="text-[13px] leading-[22px]">
            ※予約確定処理が行われなかった場合、ご登録いただいた予約は無効となりますのでご注意ください。{" "}
            <br />
            ※予約希望日を予約締切間近にしている場合、ご希望日での登録ができなくなる場合もありますので、迅速に予約確定処理をしていただくことをおすすめします。
          </p>
        </div>
        <div>
          <h1 className="text-[18px] font-bold text-left mb-4">
            メールアドレス認証時の注意点
          </h1>
          <p className="text-[13px] leading-[22px] mb-4">
            現段階ではまだ予約は確定しておりません。ご入力いただいたメールアドレス宛にお送りした「メールアドレス認証メール」に記載されているURLにアクセスし、予約を確定させてください。
          </p>
          <ul>
            <li className="mb-4">
              <h3 className="text-[13px] font-bold mb-1">
                ＜メールが届かない場合＞
              </h3>
              <p className="text-[13px] leading-[22px]">
                ・入力いただいたメールアドレスに間違いがないかご確認ください。{" "}
                <br />
                ・フリーメールを利用されている場合や通信状況などによっては「メールアドレス認証メール」を受信するまでに時間がかかることがあります。30分以上経過してもメールが届かなかった場合には、お手数ですが別のメールアドレスにて再度予約申し込みを行ってください。
              </p>
            </li>
            <li>
              <h3 className="text-[13px] font-bold">
                ＜URLにアクセスできない場合＞
              </h3>
              <p className="text-[13px] leading-[22px]">
                ・URLの途中で改行が入り、正しいページが表示されていない場合があります。URLをコピーし、ブラウザのアドレスバーへ直接ペーストしてアクセスしてください。
                ・URLをクリックして「予約申し込み完了」画面が表示されれば、予約申し込みが確定となります。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
