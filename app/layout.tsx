import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mapsupportgunma.com"),
  title: "マップサポート群馬 — あなたの店への、道しるべを。",
  description:
    "群馬発、全国の個人サロン・地域事業者向けマーケティング支援。AIで一気通貫の集客支援。LP制作¥30,000・最短3日納品から、LINE・MEO・SNSまでひとつの窓口で。",
  keywords: [
    "群馬",
    "個人サロン",
    "LP制作",
    "LINE構築",
    "MEO代行",
    "SNS運用",
    "AI",
    "前橋",
    "高崎",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mapsupportgunma.com/",
    siteName: "マップサポート群馬",
    title: "マップサポート群馬 — あなたの店への、道しるべを。",
    description:
      "群馬発、全国の個人サロンに、AIで一気通貫の集客支援。LP・LINE・MEO・SNSをひとつに。",
    images: [
      {
        url: "/lp/hero-main.png",
        width: 1280,
        height: 720,
        alt: "マップサポート群馬",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "マップサポート群馬 — あなたの店への、道しるべを。",
    description: "群馬発、全国の個人サロン・地域事業者に、AIで一気通貫のマーケティング支援を。",
    images: ["/lp/hero-main.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${fraunces.variable} ${geistSans.variable}`}
    >
      <body
        className="antialiased min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
