import "@/styles/globals.css";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Jonas dos Santos | Senior FullStack Engineer",
    template: "%s | Jonas dos Santos",
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "A resourceful FullStack Engineer passionate about creating innovative and efficient web applications using cutting-edge technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          property="og:image"
          content="https://jonascsantos.com/ogTagImage.png"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:url" content="https://www.jonascsantos.com" />
        <meta property="og:site_name" content="jonascsantos" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Jonascsantos, Jonas Cassiano, Jonas dos Santos, jonascsantos.com, Developer, React, React Native, React.JS"
        />
      </head>
      <body className="bg-[#F8F9FF] text-[#324B50]">
        <h1 className={"font-bold text-3xl"}></h1>
        {children}
      </body>
    </html>
  );
}
