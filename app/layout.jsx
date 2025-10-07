import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "চাষী ভাই",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.className} antialiased`}
        style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
      >
        <StoreProvider>
          <Toaster position="top-right" reverseOrder={false}  />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
