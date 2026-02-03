import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coinangel | Frontend Developer Portfolio",
  description:
    "안녕하세요, 프론트엔드 개발자 Coinangel입니다. 모던 웹 기술과 세련된 인터랙션으로 기억에 남는 디지털 경험을 만들어갑니다.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "Coinangel",
  ],
  authors: [{ name: "Coinangel" }],
  creator: "Coinangel",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://coinangel-portfolio.vercel.app",
    title: "Coinangel | Frontend Developer Portfolio",
    description:
      "프론트엔드 개발자 Coinangel의 포트폴리오 웹사이트입니다.",
    siteName: "Coinangel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coinangel | Frontend Developer Portfolio",
    description:
      "프론트엔드 개발자 Coinangel의 포트폴리오 웹사이트입니다.",
    creator: "@coinangel",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${syne.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
