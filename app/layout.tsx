import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LoadingProgress from "./_loading/loading-progress";
import localFont from "next/font/local"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial"],
  style: "normal",
});

const okine = localFont({
  src:[
    {
      path:"./font/MADEOkineSans-Regular.otf",
      weight:"400",
      style:"normal"
    },
    {
      path:"./font/MADEOkineSans-Medium.otf",
      weight:"500",
      style:"normal",
    },
    {
      path:"./font/MADEOkineSans-Bold.otf",
      weight:"700",
      style:"normal",
    },    
  ],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Theo",
  description: "portfolio of Theo - version 4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className='h-full antialiased'
    >
      <body className={`${okine.className} min-h-full flex flex-col bg-[#131313]`}>
        <>
        <LoadingProgress />
        {children}
        </>
      </body>
    </html>
  );
}
