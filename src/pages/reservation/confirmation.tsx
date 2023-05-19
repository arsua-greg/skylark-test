import { Fragment } from "react";
import Button from "../../components/ui/Button";

export default function ConfirmPage() {
  return (
    <Fragment>
      <div className="alert border border-[#FFCD29] bg-[#FFCD291A] max-w-[787px] mx-auto rounded-none justify-center">
        <p className="text-base text-center">
          メールアドレスの入力間違い防止の為、次の画面でメールアドレス認証を行います。
        </p>
      </div>
      <Button text="この内容で確定する" />
    </Fragment>
  );
}
