import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit',  // ADD THIS
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-ovo',  // ADD THIS
});

export const metadata = {
  title: "Portfolio - Rutvij Mavani",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${ovo.variable}`}>
      <body className="font-outfit antialiased leading-8 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}