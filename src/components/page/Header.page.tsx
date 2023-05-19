import Image from "next/image";

export default function Header() {
  return (
    <header className="border-t-4 border-b border-[#04512A]">
      <div className="max-w-[1120px] px-5 flex items-center justify-between mx-auto relative">
        <div className="logo w-16 h-14 absolute left-5">
          <Image src="/assets/logo.png" width={200} height={200} alt="" />
        </div>
        <h1 className="text-center font-bold text-xl py-5 w-full">来店予約</h1>
      </div>
    </header>
  );
}
