import AdminNav from "@/components/admin/AdminNav";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className=" bg-gray-700 text-gray-200">
        <AdminNav />
        {children}
      </body>
    </html>
  );
}
