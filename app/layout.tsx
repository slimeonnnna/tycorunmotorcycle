import "./css/style.css";
import "aos/dist/aos.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/global/ui/header";
import AOSInit from "@/components/global/aos-init";
import LenisInit from "@/components/global/lenis-init";
import { getBaseUrl } from "@/lib/site-url";

const siteUrl = getBaseUrl();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "TYCORUN - Electric Motorcycle OEM/ODM Manufacturer",
  description:
    "Factory-direct electric motorcycle OEM/ODM supply with SKD/CKD programs, compliance support, and global distribution.",
  icons: {
    icon: "/TYCORUN-Favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "TYCORUN",
    title: "TYCORUN - Electric Motorcycle OEM/ODM Manufacturer",
    description:
      "Factory-direct electric motorcycle OEM/ODM supply with SKD/CKD programs, compliance support, and global distribution.",
    url: "/",
    images: [
      {
        url: "/tycorun-logo.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TYCORUN - Electric Motorcycle OEM/ODM Manufacturer",
    description:
      "Factory-direct electric motorcycle OEM/ODM supply with SKD/CKD programs, compliance support, and global distribution.",
    images: ["/tycorun-logo.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712", // Matches bg-gray-950
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <AOSInit />
          <LenisInit />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
