import Image from "next/image";
import { Fragment } from "react";

export default function NekeroboModal() {
  return (
    <Fragment>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal bg-[#0000008A] drop-shadow-sm">
        <div className="modal-box relative max-w-[832px] mx-auto md:p-14 px-5 py-16 rounded-lg">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#04512A] text-"
          >
            ✕
          </label>
          <div className="md:flex justify-center my-10">
            <div className="md:w-1/2 md:mb-0 mb-10">
              <Image
                src="/assets/nekerobo.png"
                alt=""
                width={186}
                height={186}
                className="mx-auto"
              />
            </div>
            <div className="md:w-10/12">
              <p className="text-base font-bold">ネコロボとは…</p>
              <p className="text-base">
                中国Pudu Roboticsが開発した猫のような見た目が特徴の配膳ロボット
                <br />
                <br />
                センサーで取得した周囲の状況を基に障害物を避けながら自走できるほか、機体正面に搭載したモニターに表情のアニメーションを映し出したりして、客とコミュニケーションできる機能も搭載しています。
                <br />
                <br />
                店員と客の接触を減らすことで感染症にへの対策や、配膳を自動化しスタッフの作業を削減することができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
