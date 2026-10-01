export const metadata = { title: "Page Not Found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main>
      <section className="shell" style={{ padding: "120px 24px", minHeight: "70vh" }}>
        <p className="kicker darkKicker">404 · PAGE NOT FOUND</p>
        <h1>We could not find that page.</h1>
        <p>The page may have moved or the address may be incorrect.</p>
        <p><a href="/">Return home</a> · <a href="/templates">Browse templates</a></p>
      </section>
    </main>
  );
}
