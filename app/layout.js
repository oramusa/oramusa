export const metadata = {
  title: "Oramusa — Software Studio",
  description: "Focused software for real businesses. Websites, software, and AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}