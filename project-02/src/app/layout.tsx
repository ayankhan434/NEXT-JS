import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "My First Full-Stack Project using NEXT.JS",
  description: "this is my first full stack project in next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
   
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
