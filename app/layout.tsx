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

const SITE_TITLE =
  "マップサポート群馬 — あなたの店を、選ばれる場所へ。";
const SITE_DESCRIPTION =
  "個人サロン・地域事業者のための集客まわりの相談・制作・運用支援。LP制作、LINE公式、Googleマップ整備、SNS運用まで、必要なサービスを1つから自由に組み合わせ可能。群馬発・全国対応。";

export const metadata: Metadata = {
  metadataBase: new URL("https://mapsupportgunma.com"),
  title: {
    default: SITE_TITLE,
    template: "%s — マップサポート群馬",
  },
  description: SITE_DESCRIPTION,
  applicationName: "マップサポート群馬",
  authors: [{ name: "マップサポート群馬" }],
  keywords: [
    "マップサポート群馬",
    "群馬 マーケティング",
    "個人サロン マーケティング",
    "LP制作 群馬",
    "LINE公式 構築",
    "Googleマップ整備",
    "SNS運用代行",
    "Instagram 運用代行",
    "AI マーケティング",
    "前橋",
    "高崎",
    "美容サロン",
    "ネイルサロン",
    "整体院",
    "エステサロン",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mapsupportgunma.com/",
    siteName: "マップサポート群馬",
    title: SITE_TITLE,
    description:
      "LP制作、LINE公式、Googleマップ整備、SNSまで。個人サロン・地域事業者の集客まわりを、相談しながら必要な分だけ整えます。",
    images: [
      {
        url: "/lp/handdrawn-hero-gpt2.png",
        width: 1448,
        height: 1086,
        alt: "マップサポート群馬 — 手書き風の親しみやすいマーケティング支援",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "LP・LINE・Googleマップ・SNSを1つから自由に組み合わせ。群馬発の相談しやすい集客支援。",
    images: ["/lp/handdrawn-hero-gpt2.png"],
  },
  alternates: {
    canonical: "https://mapsupportgunma.com/",
  },
  verification: {
    google: "ExMXpCoHajN6GjZQDNaR6mk2zoy31Y8Q2oYmT3jxPmw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
