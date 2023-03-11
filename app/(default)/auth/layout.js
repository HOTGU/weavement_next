import { getServerSession } from "@/lib/ironSession/withSession";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  const user = await getServerSession(cookies());

  if (user) return redirect("/");

  return <div lang="en">{children}</div>;
}
