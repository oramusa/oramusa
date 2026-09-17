import Link from "next/link";

export const metadata = {
  title: "Kimber Landscapes | Private Website Concept",
  description: "Private website concept prepared by Oramusa for Kimber Landscapes.",
  robots: { index: false, follow: false },
};

const services = [
  ["01", "Lawn maintenance", "Reliable recurring lawn care designed to keep Central Florida properties clean, healthy, and consistently maintained."],
  ["02", "Landscaping & sod", "Landscape improvements, mulch, sod replacement, and property cleanups for residential and commercial properties."],
  ["03", "Irrigation & property care", "Irrigation repairs and ongoing property care for homeowners, commercial properties, and HOA communities."],
];

export default function KimberLandscapesPreview() {
  return <main className="gPage" id="top">
    <div style={{background:"#0d2d25",color:"#f7f4eb",padding:"9px 18px",textAlign:"center",fontSize:"11px",letterSpacing:"1.4px"}}>PRIVATE WEBSITE CONCEPT · PREPARED BY ORAMUSA · NOT THE OFFICIAL KIMBER LANDSCAPES WEBSITE</div>
    <header className="gNav"><Link className="gLogo" href="#top">KIMBER<span>LANDSCAPES</span></Link><nav><a href="#services">Services</a><a href="#work">Our work</a><a href="#about">About</a></nav><a className="gQuote" href="tel:+14074845997">Call for an estimate</a></header>
    <section className="gHero"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=88" alt="Beautifully landscaped Central Florida home"/><div className="gShade"/><div className="gHeroCopy"><p>LANDSCAPING · OVIEDO, FLORIDA</p><h1>Your lawn should<br/>look good. <em>Every week.</em></h1><p className="gLead">Professional lawn care and landscaping for Oviedo and surrounding Central Florida communities.</p><div><a className="gPrimary" href="tel:+14074845997">Call for a free estimate →</a><a className="gText" href="#services">Explore services ↓</a></div></div><div className="gHeroFoot"><span>SERVING CENTRAL FLORIDA SINCE 2003</span><span>RESIDENTIAL · COMMERCIAL · HOA</span></div></section>
    <section className="gIntro" id="about"><p>LOCAL LANDSCAPE CARE</p><h2>A better-looking property,<br/>without the <i>hassle.</i></h2><div><p>Kimber Landscapes provides lawn maintenance and landscaping services for homes and commercial properties throughout the Oviedo area and Central Florida.</p><a href="tel:+14074845997">Call 407-484-5997 →</a></div></section>
    <section className="gServices" id="services"><div className="gSectionHead"><p>WHAT WE DO</p><h2>Complete outdoor care.</h2></div>{services.map(([n,title,copy])=><article key={n}><b>{n}</b><h3>{title}</h3><p>{copy}</p><a href="tel:+14074845997">Request an estimate →</a></article>)}</section>
    <section className="gWork" id="work"><div><p>LOCAL EXPERIENCE</p><h2>Serving Central Florida<br/>since 2003.</h2><p>From recurring lawn maintenance to landscaping, sod, irrigation repairs, and property cleanups, Kimber Landscapes helps local properties stay cared for throughout the year.</p><a className="gPrimary" href="tel:+14074845997">Call 407-484-5997 →</a></div><img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=88" alt="Professional lawn and landscaping work"/></section>
    <section className="gReview"><p>Local lawn care and landscaping built around dependable service and a property you can feel good about.</p><span>OVIEDO · CENTRAL FLORIDA</span></section>
    <section className="gCta"><p>READY FOR A BETTER-LOOKING PROPERTY?</p><h2>Let’s take care of<br/>your landscape <i>together.</i></h2><a className="gPrimary" href="tel:+14074845997">Call for an estimate →</a></section>
    <footer className="gFooter"><Link className="gLogo" href="#top">KIMBER<span>LANDSCAPES</span></Link><p>Professional lawn care & landscaping.<br/>Oviedo, Florida</p><div><a href="tel:+14074845997">407-484-5997</a><a href="https://kimberlandscapes.net" target="_blank" rel="noreferrer">Current business website</a></div><small>Private concept prepared by Oramusa · For demonstration only · © 2026</small></footer>
  </main>;
}
