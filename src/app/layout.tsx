import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({
  weight: ["400", "600", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Denilson e Giovanna",
  description: "Eternizando o nosso namoro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        id="__next"
        className={`${DMSans.className} ${DMSans.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
