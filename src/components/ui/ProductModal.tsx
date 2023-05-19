import Image from "next/image";
import { Fragment } from "react";

export default function ProductModal() {
  return (
    <Fragment>
      <label
        htmlFor="my-modal-3"
        className="text-[#04512A] md:text-lg text-base underline underline-offset-2 self-center btn bg-white border-none font-normal hover:bg-white px-0"
      >
        詳細
      </label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-[#0000008A] drop-shadow-sm">
        <div className="modal-box relative max-w-[832px] mx-auto md:p-14 px-5 py-16 rounded-lg">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#04512A] text-"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            【記念日のお祝いに】アニバーサリーケーキ ＋330円(税込)
          </h3>
          <div className="md:flex justify-center my-10">
            <div className="md:w-1/2 md:mb-0 mb-10">
              <Image
                src="/assets/modal_product_image.png"
                alt=""
                width={213}
                height={236}
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-base">
                記念日ケーキはかわいい猫型ロボットが音楽を奏でながらお席までお届けにあがります♪
                <br />
                大切な方へのサプライズなどできる限り対応いたしますので直接店舗までご連絡ください！
              </p>
              <p className="text-base mt-6">
                1個（約4人前）
                <br /> 利用人数：
                <br />
                2名～ 予約締切：
                <br />
                来店日の2日前21時まで
              </p>
            </div>
          </div>
          <p className="text-lg mb-2">注意事項</p>
          <ul className="md:text-base text-sm">
            <li>
              ※この内容は仕入れ状況等により変更になる場合がございます。予めご了承ください。
            </li>
            <li>※ケーキをご希望のお客様は２日前までにご予約ください。</li>
            <li>※サプライズ演出などは店舗まで直接ご連絡ください。</li>
            <li>
              ※ケーキに関しては１グループに対して１個となります。複数個ご注文される場合のみ、お手数ですがお電話でご連絡をお願い致します。
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
