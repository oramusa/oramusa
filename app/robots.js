export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://www.oramusa.com/sitemap.xml",
    host: "https://www.oramusa.com",
  };
}
