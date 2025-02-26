import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Share/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next Tutorial with Chae & Code",
    template: "%s | Chae & Code",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{ background: "lightblue", padding: "1rem" }}>
          <Header />
        </header>
        {children}
        <footer style={{ background: "ghostwhite", padding: "1rem" }}>
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}
