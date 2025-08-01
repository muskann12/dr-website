import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TopHeader from "./components/top";
import WhatsappButton from "./components/WhatsappButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {

  keywords: [
    "Dr Yousuf",
    "Orthopaedic",
    "Cardiology",
    "Online consultation",
    "Pakistan",
    "Appointments",
  ],
  openGraph: {
    title: "Dr. Yousuf - Official Website",
    description: "Book appointments and consult with Dr. Yousuf online.",
    url: "https://dryousufmemon.pk/",
    siteName: "Dr. Yousuf",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // apni OG image daalo public folder me
        width: 1200,
        height: 630,
        alt: "Dr. Yousuf Official Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dr_yousuf_memon",
    title: "Dr. Yousuf - Official Website",
    description: "Book appointments and consult with Dr. Yousuf online.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://dryousufmemon.pk"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f766e" />

        {/* LocalBusiness Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Yousuf Memon",
              image: "https://dryousufmemon.pk/og-image.jpg",
              telephone: "+923367889143",
              email: "info@dryousufmemon.pk",
              url: "https://dryousufmemon.pk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Depot Lines, Muhammad Ali Jinnah Rd Saddar Karachi",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
              openingHours: [
                "Mo 14:00-16:00",
                "Th 14:00-16:00",
                "Fr 12:00-14:00",
                "Sa 12:00-17:00",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-teal-800 focus:text-white focus:p-2 focus:rounded"
        >
          Skip to main content
        </a>

        <header>
          <TopHeader />
          <Navbar />
        </header>

        <main id="main-content">{children}</main>

        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
