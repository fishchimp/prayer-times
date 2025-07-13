import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canberra Prayer Times",
  description: "Daily salah times for Canberra, Australia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
