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

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Dr. Muhammad Yousuf Memon – Interventional Radiologist in Pakistan",
  description:
    "Trusted Interventional Radiologist in Pakistan. Dr. Yousuf Memon provides non-surgical treatments including embolization, angioplasty, ozone therapy, and minimally invasive procedures in Karachi, Lahore, Hyderabad & Rahim Yar Khan.",
  keywords: [
    "Dr. Yousuf Memon",
    "Interventional Radiologist Pakistan",
    "Ozone Therapy Pakistan",
    "Uterine Fibroid Embolization",
    "Disc Herniation Non-surgical Treatment",
    "Varicocele & Varicose Veins Treatment",
    "Diabetic Foot Angioplasty",
    "Minimally Invasive Procedures",
    "Pain Management Without Surgery",
  ],
  openGraph: {
    title: "Dr. Yousuf Memon – Interventional Radiologist in Pakistan",
    description:
      "Non-surgical solutions for vascular diseases, fibroids, disc herniation & more. 20+ years of experience. Clinics in Karachi, Lahore, Hyderabad & Rahim Yar Khan.",
    url: "https://dryousufmemon.pk",
    siteName: "Dr. Yousuf Memon",
    images: [
      {
        url: "https://dryousufmemon.pk/images/doctor1.png",
        width: 1200,
        height: 630,
        alt: "Dr. Muhammad Yousuf Memon – Interventional Radiologist",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Yousuf Memon – Interventional Radiologist in Pakistan",
    description:
      "Expert in minimally invasive treatments & ozone therapy. Book your appointment in Karachi, Lahore, Hyderabad & Rahim Yar Khan.",
    images: ["https://dryousufmemon.pk/images/doctor1.png"],
    site: "@dryousufmemon",
  },
  metadataBase: new URL("https://dryousufmemon.pk"),
  alternates: {
    canonical: "https://dryousufmemon.pk",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Global JSON-LD Schema (Physician + Website)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dr. Muhammad Yousuf Memon",
    url: "https://dryousufmemon.pk",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dryousufmemon.pk/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Muhammad Yousuf Memon",
    image: "https://dryousufmemon.pk/images/doctor1.png",
    description:
      "Interventional Radiologist in Pakistan specializing in embolization, angioplasty, and ozone therapy. Clinics in Karachi, Hyderabad, Lahore & Rahim Yar Khan.",
    telephone: ["+923367889143", "+923199246838"],
    email: "info@dryousufmemon.pk",
    url: "https://dryousufmemon.pk",
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* ✅ Mobile-friendly viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLd, physicianSchema]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader />
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
