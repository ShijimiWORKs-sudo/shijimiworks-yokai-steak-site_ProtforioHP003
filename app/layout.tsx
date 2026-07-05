import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://shijimiworks.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ShijimiWORKs | Freelance Frontend Engineer",
  description:
    "ShijimiWORKsは、Webサイト制作、LP制作、フロントエンド実装、既存サイト改善を行うフリーランスWebフロントエンジニアのポートフォリオサイトです。",
  keywords: [
    "フリーランス",
    "Webフロントエンド",
    "Web制作",
    "LP制作",
    "フロントエンド実装",
    "サイト改善",
    "ポートフォリオ",
    "ShijimiWORKs",
  ],
  authors: [{ name: "ShijimiWORKs" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "ShijimiWORKs",
    title: "ShijimiWORKs | Freelance Frontend Engineer",
    description:
      "小さく、速く、伝わるWebサイトをつくります。Web制作・LP制作・フロントエンド実装・サイト改善をプロジェクト単位でお手伝いするフリーランスのポートフォリオサイト。",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ShijimiWORKs | Freelance Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs | Freelance Frontend Engineer",
    description:
      "Web制作・LP制作・フロントエンド実装・サイト改善をプロジェクト単位でお手伝いするフリーランスのポートフォリオサイト。",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
