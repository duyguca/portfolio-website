import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/themeSwitch";
import ThemeContextProvider from "@/components/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Duygu Koksal | Portfolio",
  description: "Duygu is a Front-End Developer, based in Vancouver.",
  icons: {
    icon: "https://duygukoksal.com/favicon.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth ">
      <body
        className={`${inter.className} relative snap-x  dark:bg-white dark:text-gray-950`}
      >
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
