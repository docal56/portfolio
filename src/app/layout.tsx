import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dave O'Callaghan - Product Designer",
  description:
    "Portfolio of Dave O'Callaghan, a product designer helping start-ups figure out what to build and ship fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
