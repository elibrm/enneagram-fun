import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enneagram Explorer",
  description: "Explore the nine Enneagram personality types",
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
