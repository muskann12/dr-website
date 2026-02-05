import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TopHeader from "./components/top";
import WhatsappButton from "./components/WhatsappButton";
import Chatbot from "./components/chatbot";


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
  title: "Dr. Yousuf Memon | Interventional Radiologist Pakistan",
  description:
    "Dr. Yousuf Memon is a leading interventional radiologist in Pakistan offering non-surgical treatments in Karachi, Lahore, Hyderabad & Rahim Yar Khan.",
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
        "Expert in minimally invasive treatments & ozone therapy. Book your appointment in Karachi, Lahore, Hyderabad & Rahim Yar Khan.",
      url: "https://www.dryousufmemon.com",
      siteName: "Dr. Yousuf Memon",
      images: [
        {
          url: "https://www.dryousufmemon.com/gallery/images/doctor1.png",
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
      images: ["https://www.dryousufmemon.com/gallery/images/doctor1.png"],
      site: "@dryousufmemon",
  },
    metadataBase: new URL("https://www.dryousufmemon.com"),
    alternates: {
      canonical: "https://dryousufmemon.com/",
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
      url: "https://www.dryousufmemon.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.dryousufmemon.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
  };

  const physicianSchema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: "Dr. Muhammad Yousuf Memon",
      image: "https://www.dryousufmemon.com/gallery/images/doctor1.png",
      description:
        "Interventional Radiologist in Pakistan specializing in embolization, angioplasty, and ozone therapy. Clinics in Karachi, Hyderabad, Lahore & Rahim Yar Khan.",
      telephone: ["+923367889143", "+923199246838"],
      email: "info@dryousufmemon.com",
      url: "https://www.dryousufmemon.com",
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* ✅ Single mobile-friendly viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ✅ Apple Touch Icon for iOS devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
        <Chatbot/>
        <WhatsappButton />
      </body>
    </html>
  );
}
