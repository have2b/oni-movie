import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

const be_vietnam_pro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oni Movie",
  description: "Oni Movie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={be_vietnam_pro.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
