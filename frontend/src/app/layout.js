import RootLayoutClient from "@/components/RootLayoutClient";
import { Providers } from "./Providers";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Social Networking Site",
  description: "Social networking site in NextJs, MERN STACK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen m-0 bg-[#F5F6FA]">
        <NextTopLoader
          color="#8b5cf6"
          showSpinner={false}
        />
        <Providers>
          <RootLayoutClient>{children}</RootLayoutClient>
        </Providers>
      </body>
    </html>
  );
}
