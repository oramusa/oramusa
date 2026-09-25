import "./globals.css";
import "./templates/templates.css";
import "./templates/velocity/velocity.css";
import "./templates/elan/elan.css";
import "./templates/aurea/aurea.css";
import "./templates/evergreen/evergreen.css";
import "./onboarding/onboarding.css";
import SiteAnalytics from "./site-analytics";

export const metadata = {
  metadataBase: new URL("https://www.oramusa.com"),
  title: {
    default: "Affordable Small-Business Websites in Orlando | Oramusa",
    template: "%s | Oramusa",
  },
  description: "Oramusa builds and manages professional small-business websites in Orlando with $0 upfront and simple monthly pricing.",
  keywords: ["Orlando web design", "small business website", "monthly website plan", "zero upfront website", "restaurant website design", "landscaping website design"],
  authors: [{ name: "Oramusa", url: "https://www.oramusa.com" }],
  creator: "Oramusa",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.oramusa.com",
    siteName: "Oramusa",
    title: "Affordable Small-Business Websites in Orlando | Oramusa",
    description: "Professional small-business websites with $0 upfront, managed hosting, maintenance, and support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Small-Business Websites | Oramusa",
    description: "Professional small-business websites with $0 upfront, hosting, maintenance, and support.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.oramusa.com/#organization",
  name: "Oramusa",
  url: "https://www.oramusa.com",
  email: "hello@oramusa.com",
  description: "Orlando-based website design and technology studio serving small businesses.",
  areaServed: [{ "@type": "City", name: "Orlando" }, { "@type": "Country", name: "United States" }],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.oramusa.com/#website",
  url: "https://www.oramusa.com",
  name: "Oramusa",
  publisher: { "@id": "https://www.oramusa.com/#organization" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#171715" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}/><SiteAnalytics /></body>
    </html>
  );
}
