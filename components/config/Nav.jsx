import Link from "next/link";
import React from "react";

function Nav() {
  return (
    // <nav className="sm:container flex justify-center items-center ">
    <nav className="fixed w-full flex justify-center items-center gap-4 h-12 top-0 border-b border-b-gray-200 bg-white z-50">
      <Link href="/">홈</Link>
      <Link href="/contact">문의하기</Link>
      <Link href="/portfolio">포트폴리오</Link>
      <Link href="https://blog.naver.com/weavement" target="_blank">
        블로그
      </Link>
    </nav>
  );
}

export default Nav;
