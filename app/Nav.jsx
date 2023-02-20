import Link from "next/link";
import React from "react";

function Nav() {
  return (
    // <nav className="sm:container flex justify-center items-center ">
    <nav className="container flex justify-center items-center gap-4 h-12 bg-white border-b border-b-slate-100">
      <Link href="/contact">문의하기</Link>
      <Link href="/portfolio">포트폴리오</Link>
      <Link href="https://blog.naver.com/weavement" target="_blank">
        블로그
      </Link>
    </nav>
  );
}

export default Nav;
