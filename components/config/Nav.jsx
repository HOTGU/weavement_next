"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="fixed w-full flex justify-center items-center gap-4 h-12 top-0 bg-accent-color text-white font-bold z-50">
      <Link
        className={`${
          pathname === "/" && "bg-white text-accent-color px-2 py-1 rounded-lg"
        } `}
        href="/"
      >
        홈
      </Link>
      <Link
        className={`${
          pathname === "/contact" &&
          "bg-white text-accent-color px-2 py-1 rounded-lg"
        } `}
        href="/contact"
      >
        문의하기
      </Link>
      <Link
        className={`${
          pathname === "/portfolio" &&
          "bg-white text-accent-color px-2 py-1 rounded-lg"
        } `}
        href="/portfolio"
      >
        포트폴리오
      </Link>
      <Link href="https://blog.naver.com/weavement" target="_blank">
        블로그
      </Link>
    </nav>
  );
}

export default Nav;
