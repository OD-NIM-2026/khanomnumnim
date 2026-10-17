import type { Metadata, Viewport } from "next";
import { Mali, Prompt } from "next/font/google";
import "./globals.css";

const heading = Mali({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["600", "700"],
});

const body = Prompt({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
});

const title = "ขนมนุ่มนิ่ม | ขนมขบเคี้ยวสีสดใส สำหรับเด็ก ชิ้นละ 5 บาท";
const description =
  "ขนมนุ่มนิ่ม ขนมขบเคี้ยวสีสันสดใส เคี้ยวง่าย หอมอร่อย เหมาะกับเด็ก 2-12 ขวบ ชิ้นละ 5 บาท ทักไลน์สั่งได้เลย";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "ขนมนุ่มนิ่ม",
    locale: "th_TH",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#f472a6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
