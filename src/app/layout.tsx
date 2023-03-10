import "./styles/globals.css";

import Link from "next/link";
import { Logo } from "../components/Navbar/Logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <h1 className={"font-bold text-3xl"}>nav</h1>
        {children}
      </body>
    </html>
  );
}
