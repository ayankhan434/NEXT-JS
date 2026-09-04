import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const roboto = Roboto({
  subsets:["latinj"],
  weight: ['600',"300"],
  display: 'swap'
})

export const metadata = {
  title: "Travel Guide Website",
  description: "Best Travel Guidance",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className={`${roboto.className} w-screen h-screen bg-amber-600` }>
        
        <Nav/>
        {children}
        </body>
    </html>
  );
}
