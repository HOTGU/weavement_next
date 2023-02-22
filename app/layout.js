import "./globals.css";
import localFont from "@next/font/local";
import Nav from "../components/config/Nav";

const pretendard = localFont({
  src: "../public/fonts/Pretendard-Regular.woff2",
  variable: "--font-pretendard",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`text-gray-800 ${pretendard.variable} font-pretendard`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
