import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-neutral-950 text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
