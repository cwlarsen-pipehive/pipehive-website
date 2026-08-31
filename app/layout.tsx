import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PipeHive | Field operations for pipeline construction",
  description: "Field operations software for pipeline construction by PIPEHIVE TECH LTD.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
