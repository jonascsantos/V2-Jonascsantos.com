import "@/styles/globals.css";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Jonas dos Santos | FullStack Developer",
    template: "%s | Jonas dos Santos",
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "A resourceful FullStack Developer passionate about creating innovative and efficient web applications using cutting-edge technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#F8F9FF] text-[#324B50]">
        <h1 className={"font-bold text-3xl"}></h1>
        {children}
      </body>
    </html>
  );
}
