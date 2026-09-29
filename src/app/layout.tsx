import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noveltra Technologies",
  description:
    "Premium software delivery, product strategy, and digital product design for modern teams.",
  verification: {
    other: {
      "volgachat-verification": "volgachat-verify-8krmnwfavsh85g4754s6",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          src="https://volgachat.com/v1/widget.js"
          data-bot-id="g2zv4a3ddgdq"
          data-accent="#4F46E5"
          data-logo="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Ctext%20x%3D%2232%22%20y%3D%2232%22%20font-size%3D%2260%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22central%22%3E%F0%9F%91%A9%3C%2Ftext%3E%3C%2Fsvg%3E"
          defer
        ></script>
      </body>
    </html>
  );
}
