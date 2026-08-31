import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Abhay Pareek | Data Analyst",
  description:
    "Portfolio of Abhay Pareek, showcasing data analytics projects, SQL, Python, Excel, Power BI and data visualization.",
  openGraph: {
    title: "Abhay Pareek | Data Analyst",
    description:
      "Portfolio of Abhay Pareek, showcasing data analytics projects, SQL, Python, Excel, Power BI and data visualization.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f6f3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
