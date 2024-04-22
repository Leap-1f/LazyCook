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
  return (
    <html lang="en">

      <body>
        {/* <Header /> */}
        {children}
      </body>

      <UserProvider>
        <body>
          <Header />
          {children}
        </body>
      </UserProvider>

    </html>
  );
}
