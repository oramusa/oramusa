export default function sitemap() {
  const lastModified = new Date("2026-09-15");
  const base = "https://www.oramusa.com";
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/templates`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/templates/evergreen`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/templates/velocity`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/templates/elan`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/templates/aurea`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/templates/ember`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
