import Link from "next/link";
import React from "react";

const AdminNav = () => {
  return (
    <div className="h-12 px-2 border-b-2 border-gray-500">
      <ul className="h-full flex justify-center items-center gap-3">
        <Link href="/">
          <li className="">Admin</li>
        </Link>
        <Link href="/admin/contact">
          <li>문의</li>
        </Link>
        <Link href="/admin/portfolio">
          <li>포트폴리오</li>
        </Link>
        <Link href="/api/auth/logout">
          <li>로그아웃</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminNav;
