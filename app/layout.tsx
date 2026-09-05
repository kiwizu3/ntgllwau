import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Nightingale Lawyers | We can figure it out together",
    template: "%s | Nightingale Lawyers",
  },
  description: "Our philosophy is to act for you as if we were acting for ourselves. Nightingale Lawyers is founded on teamwork, mastery and heart. If you have a legal problem or objective, we can figure it out together. ",
  metadataBase: new URL("https://www.nightingalelawyers.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Nightingale Lawyers",
    title: "Nightingale Lawyers | We can figure it out together",
    description: "Our philosophy is to act for you as if we were acting for ourselves. Nightingale Lawyers is founded on teamwork, mastery and heart. If you have a legal problem or objective, we can figure it out together. ",
  },
  twitter: {
    card: "summary",
    title: "Nightingale Lawyers",
    description: "Our philosophy is to act for you as if we were acting for ourselves. Nightingale Lawyers is founded on teamwork, mastery and heart. If you have a legal problem or objective, we can figure it out together. ",
  },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nightingale Lawyers",
  url: "https://www.nightingalelawyers.com",
  telephone: "+61 407 000 007",
  email: "hanna@nightingalelawyers.com",
  areaServed: "New South Wales, Australia",
  slogan: "We can figure it out together.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fcfe",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
