"use client";
import MobileMenu from "./MobileMenu";

const products = [
  {
    name: "QRTurnover",
    eyebrow: "TURNOVER OPERATIONS",
    description: "Cleaner verification, room by room. QR-powered workflows for short-term rental hosts.",
    href: "https://www.qrturnover.com",
    badge: "Live"
  },
  {
    name: "UWAYS",
    eyebrow: "GLOBAL DRIVER NETWORK",
    description: "Connects professional drivers, fleets, and affiliates worldwide to find backup support, assign rides, and coordinate trips in real time.",
    href: "https://uways.com",
    badge: "Live"
  },
  {
    name: "AppraisalIQ",
    eyebrow: "APPRAISAL INTELLIGENCE",
    description: "AI-assisted analysis for FNMA 1004 appraisal reports, risk review, and Fair Housing language checks.",
    href: "#",
    badge: "In development"
  }
];

const services = [
  ["Websites", "$0-upfront professional websites with hosting, maintenance, and support.", "/templates"],
  ["Custom Software", "Purpose-built web applications for businesses with specific operational needs."],
  ["AI & Automation", "Practical automations and AI integrations that save time and reduce manual work."],
  ["Ongoing Support", "Long-term technology support after launch, not just a handoff."]
];

function scrollToSection(e, id) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Oramusa home" onClick={(e) => scrollToSection(e, "top")}>
          <span>Oram</span><em>usa</em>
        </a>
        <nav className="navLinks">
          <a href="#products" onClick={(e) => scrollToSection(e, "products")}>Products</a>
          <a href="#services" onClick={(e) => scrollToSection(e, "services")}>Services</a>
          <a href="/templates">Templates</a>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
          <a href="#roadmap" onClick={(e) => scrollToSection(e, "roadmap")}>Roadmap</a>
        </nav>
        <MobileMenu />
        <a className="navCta" href="mailto:hello@oramusa.com">Get in touch</a>
      </header>

      <section className="hero" id="top">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="kicker">ORAMUSA · SOFTWARE STUDIO</p>
            <h1>Built for the <span>real world,</span><br />not the demo.</h1>
            <p className="lead">
              We build focused software for real businesses — solving problems that are overlooked,
              inefficient, and genuinely painful to work around every day.
            </p>
            <div className="actions">
              <a className="primary" href="#products" onClick={(e) => scrollToSection(e, "products")}>See our products <b>→</b></a>
              <a className="secondary" href="#about" onClick={(e) => scrollToSection(e, "about")}>About the studio</a>
            </div>
          </div>
          <div className="heroArt" aria-hidden="true">
            <div className="goldLine"></div>
            <div className="artWords">
              <span>IDEAS</span>
              <span>SOFTWARE</span>
              <span>REAL IMPACT</span>
            </div>
            <div className="device">
              <div className="deviceScreen">
                <span>ORAMUSA</span>
                <strong>Build what<br/>matters.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products shell" id="products">
        <div className="sectionHeading">
          <div>
            <p className="kicker darkKicker">OUR PRODUCTS</p>
            <h2>Real tools for real businesses.</h2>
          </div>
          <p>Focused products built around operational problems, not trends.</p>
        </div>

        <div className="productGrid">
          {products.map((product, i) => (
            <article className={`productCard ${i === 0 ? "featured" : ""}`} key={product.name}>
              <div className="cardTop">
                <span className="productEyebrow">{product.eyebrow}</span>
                <span className="badge">{product.badge}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href={product.href} target={product.href.startsWith("http") ? "_blank" : undefined}>
                Explore product <span>→</span>
              </a>
            </article>
          ))}
          <article className="productCard coming">
            <div className="plus">+</div>
            <h3>More to come.</h3>
            <p>New tools for overlooked business problems.</p>
          </article>
        </div>
      </section>

      <section className="services" id="services">
        <div className="shell">
          <div className="sectionHeading inverse">
            <div>
              <p className="kicker">SERVICES</p>
              <h2>More than products.</h2>
            </div>
            <p>Oramusa also helps businesses build and improve the technology they rely on.</p>
          </div>
          <div className="serviceGrid">
            {services.map(([title, desc, href], i) => (
              <div className={`serviceItem ${href ? "linkedService" : ""}`} style={{ paddingBottom: "40px", display: "flex", flexDirection: "column" }} key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                {href && <a href={href} style={{ marginTop: "auto", paddingTop: "24px" }}>Browse templates →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="aboutLabel">
          <p className="kicker darkKicker">ABOUT ORAMUSA</p>
        </div>
        <div className="aboutText">
          <h2>Technology should remove friction, not create more of it.</h2>
          <p>
            Oramusa is an independent software studio building practical digital products and
            business systems. We care about simple interfaces, useful automation, and software
            that earns its place in everyday work.
          </p>
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="shell roadmapInner">
          <p className="kicker">WHAT'S NEXT</p>
          <h2>Websites. Software. AI.<br/><span>One studio.</span></h2>
          <p>
            We are building Oramusa into a long-term technology partner for businesses — from
            subscription websites to custom applications and intelligent automation.
          </p>
          <a className="primary lightBtn" href="mailto:hello@oramusa.com">Start a conversation →</a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand footerBrand" href="#top" onClick={(e) => scrollToSection(e, "top")}><span>Oram</span><em>usa</em></a>
        <p>Built for the real world.</p>
        <div>
          <a href="mailto:hello@oramusa.com">hello@oramusa.com</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <span>© {new Date().getFullYear()} Oramusa</span>
        </div>
      </footer>
    </main>
  );
}
