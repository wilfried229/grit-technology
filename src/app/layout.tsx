import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GRIT CONSULTING | Engineering Smart Infrastructure",
  description:
    "GRIT CONSULTING conçoit, intègre et maintient des solutions technologiques pour les infrastructures intelligentes, la mobilité, l'automatisation, les infrastructures électriques et la sûreté électronique en Afrique.",
  keywords: [
    "GRIT CONSULTING",
    "smart infrastructure",
    "ingénierie infrastructure",
    "mobilité intelligente",
    "péage intelligent",
    "Free Flow",
    "ANPR",
    "LPR",
    "PLC SCADA",
    "automatisation industrielle",
    "vidéosurveillance",
    "contrôle d'accès",
    "sécurité incendie",
    "infrastructure électrique",
    "smart city",
    "Afrique",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="11d9a3e4-f285-4f4f-8b92-4220bdd5c60b"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "GRIT CONSULTING", "version": "2.0.0"}'
        />
        <div className="grit-page">
          <a href="#main" className="skip-link">
            Aller au contenu
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </div>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
