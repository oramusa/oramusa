import "./globals.css";
import "./templates/templates.css";
import "./templates/velocity/velocity.css";
import "./templates/elan/elan.css";
import "./templates/aurea/aurea.css";
import "./templates/evergreen/evergreen.css";

export const metadata = {
  metadataBase: new URL("https://www.oramusa.com"),
  title: {
    default: "Oramusa — Websites, Software & AI for Real Businesses",
    template: "%s | Oramusa",
  },
  description: "Oramusa builds professional subscription websites, custom software, and practical AI automation for real businesses.",
  keywords: ["small business websites", "subscription website", "web design Orlando", "custom software", "business automation"],
  authors: [{ name: "Oramusa", url: "https://www.oramusa.com" }],
  creator: "Oramusa",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.oramusa.com",
    siteName: "Oramusa",
    title: "Oramusa — Built for the real world, not the demo.",
    description: "Professional websites with $0 upfront, plus custom software and practical AI automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oramusa — Websites, Software & AI",
    description: "Professional websites with $0 upfront, built and managed for real businesses.",
  },
  robots: { index: true, follow: true },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#171715" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
