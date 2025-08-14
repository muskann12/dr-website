import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TopHeader from "./components/top";

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

// SEO Metadata export
export const metadata: Metadata = {
  title: "Dr. Yousuf Memon – Interventional Radiologist in Pakistan",
  description:
    "Dr. Yousuf Memon offers advanced interventional radiology treatments including embolizations, ozone therapy, and minimally invasive procedures across Pakistan.",
  keywords: [
    "Dr. Yousuf Memon",
    "Interventional Radiologist Pakistan",
    "Uterine Fibroid Embolization",
    "Liver Cancer Embolization",
    "Hemorrhoid Embolization",
    "Hemoptysis Treatment",
    "Anal Bleeding Embolization",
    "Brain Tumor Embolization",
    "Diabetic Foot Angioplasty",
    "IVC Filter Placement DVT",
    "PTC PTBD CBD Stenting",
    "Permacath Placement Dialysis",
    "Ozone Therapy Pakistan",
    "Ozone Treatment for Disc Herniation",
    "Ozone Treatment for Joint Pain",
    "Back Pain Ozone Therapy",
    "Ozone for Dry Eyes & Face Wrinkles",
    "Uterine Fibroids Treatment",
    "Varicocele Treatment",
    "Varicose Veins Embolization",
    "Disc Herniation Non-surgical Treatment",
    "Hemorrhoids Non-surgical Treatment",
    "Venous Leak Treatment",
    "Vascular Specialist Pakistan",
    "Minimally Invasive Procedures",
    "Pain Management Without Surgery",
  ],
  openGraph: {
    title: "Dr. Muhammad Yousuf Memon – Interventional Radiologist in Pakistan",
    description:
      "Trusted for 20+ years, Dr. Yousuf Memon offers cutting-edge interventional radiology treatments without surgery. Clinics in Karachi, Lahore, Hyderabad & Rahim Yar Khan.",
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
    title: "Dr. Muhammad Yousuf Memon – Interventional Radiologist in Pakistan",
    description:
      "Non-surgical solutions for vascular issues, fibroids, disc herniation & more. Clinics in major cities. Trusted by thousands of patients.",
    images: ["https://dryousufmemon.pk/images/doctor1.png"],
    site: "@dryousufmemon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TopHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
