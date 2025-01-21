import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";

const GeneralSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Semibold.woff",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Rapport de stage - Noé",
  description: "Voici mon rapport de stage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeneralSans.className} antialiased`}>
        <SmoothScroll root>{children}</SmoothScroll>
      </body>
    </html>
  );
}
