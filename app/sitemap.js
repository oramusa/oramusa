export default function sitemap() {
  const base = "https://www.oramusa.com";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/templates`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/templates/evergreen`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/templates/velocity`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/templates/elan`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/templates/aurea`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
