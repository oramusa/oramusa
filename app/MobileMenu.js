export default function MobileMenu() {
  return <details className="mobileMenu">
    <summary aria-label="Open navigation menu"><span/><span/><span/></summary>
    <nav>
      <a href="/">Home</a>
      <a href="/#products">Products</a>
      <a href="/templates">Templates</a>
      <a href="/templates#pricing">Pricing</a>
      <a href="/#about">About</a>
      <a href="mailto:hello@oramusa.com">Contact</a>
    </nav>
  </details>;
}
