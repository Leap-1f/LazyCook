import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/header";
export const metadata: Metadata = {
  title: "LazyCook",
  description: "The laziest cookbook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
