import "./css/style.css";
import "aos/dist/aos.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import Script from "next/script";
import AOSInit from "@/components/aos-init";
import LenisInit from "@/components/lenis-init";

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

const siteUrl = resolveSiteUrl();

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
        <Script id="fa-stylesheet-loader" strategy="afterInteractive">
          {`(function(){var load=function(){var link=document.createElement('link');link.rel='stylesheet';link.href='/fontawesome/css/all.min.css';document.head.appendChild(link);};if(document.readyState==='complete'){load();}else{window.addEventListener('load',load,{once:true});}})();`}
        </Script>
        <noscript>
          <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        </noscript>
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
