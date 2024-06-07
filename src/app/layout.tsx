import type { Metadata } from "next";
import ChooseYourSide from "./components/ui/ChooseYourSide/ChooseYourSide";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Drouillard's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout( {children} : Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body className="wrapper">
        <ChooseYourSide />
      </body>
    </html>
  );
}
