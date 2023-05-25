import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 50);
  };

  const scrollToTop = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="container mx-auto max-w-[1120px] px-5 text-center pt-6 md:pb-8 pb-5 relative">
      <div className="logo flex justify-center mb-2">
        <Image
          src="/assets/logo_skylark_gloup.png"
          alt=""
          width={228}
          height={38}
          className="md:w-full w-[115px]"
        />
      </div>
      <p className="text-xs md:text-base">
        Copyright &#169; SKYLARK GROUP All rights reserved.
      </p>
      <div
        className={`${
          isVisible ? "opacity-1" : "hidden"
        } md:bottom-10 bottom-4 md:right-36 right-5 fixed transition-opacity duration-500`}
      >
        <Link href={"/"} onClick={scrollToTop}>
          <Image src="/assets/back_to_top.svg" alt="" width={30} height={30} />
        </Link>
      </div>
    </footer>
  );
}
