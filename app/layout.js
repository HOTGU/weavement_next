import "./globals.css";
import localFont from "@next/font/local";
import { Racing_Sans_One } from "@next/font/google";
import Nav from "../components/config/Nav";
import Footer from "@/components/config/Footer";

const pretendard = localFont({
  src: "../public/fonts/Pretendard-Regular.woff2",
  variable: "--font-pretendard",
});

const racingSans = Racing_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-racingSans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`text-gray-800 ${pretendard.variable} ${racingSans.variable} font-pretendard`}
      >
        <Nav />
        <div className="pt-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
