import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
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
  const here = false;
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {Header(here)}
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
