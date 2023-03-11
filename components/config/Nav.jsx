import React from "react";
import NavList from "./NavList";
import { cookies } from "next/headers";
import Link from "next/link";
import { getServerSession } from "@/lib/ironSession/withSession";

async function Nav() {
  const user = await getServerSession(cookies());
  return (
    <nav className="fixed w-full flex justify-center items-center gap-4 h-12 top-0 bg-accent-color text-white font-bold z-50">
      <NavList />
      {user?.isAdmin && <Link href="/admin">Admin</Link>}
    </nav>
  );
}

export default Nav;
