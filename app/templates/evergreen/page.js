import Link from "next/link";

export const metadata = { title: "Evergreen Landscaping Website Template", description: "A premium landscaping and home-services website template designed to generate calls and quote requests.", alternates: { canonical: "/templates/evergreen" } };

const services = [
  ["01", "Landscape design", "Thoughtful outdoor plans shaped around your home, lifestyle, and Florida climate."],
  ["02", "Installation", "Planting, sod, stonework, lighting, and irrigation—managed from start to finish."],
  ["03", "Property care", "Reliable recurring maintenance that keeps every detail looking intentional."],
];

export default function EvergreenPage() {
  return <main className="gPage" id="top">
    <header className="gNav"><Link className="gLogo" href="#top">EVERGREEN<span>OUTDOOR CO.</span></Link><nav><a href="#services">Services</a><a href="#work">Our work</a><a href="#about">About</a></nav><a className="gQuote" href="/templates#start">Get a free quote</a></header>
    <section className="gHero"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=88" alt="Beautifully landscaped modern home"/><div className="gShade"/><div className="gHeroCopy"><p>LANDSCAPING · ORLANDO, FLORIDA</p><h1>Outdoor spaces,<br/><em>beautifully</em> considered.</h1><p className="gLead">Design, installation, and care for landscapes that feel as good as they look.</p><div><a className="gPrimary" href="/templates#start">Request your free quote →</a><a className="gText" href="#work">Explore our work ↓</a></div></div><div className="gHeroFoot"><span>LICENSED · INSURED · LOCALLY OWNED</span><span>★★★★★ 4.9 GOOGLE RATING</span></div></section>
    <section className="gIntro" id="about"><p>YOUR HOME, GROUNDED</p><h2>Landscapes made<br/>for <i>living.</i></h2><div><p>We create refined, low-stress outdoor spaces built for real life. From the first sketch to ongoing care, one experienced team handles every detail.</p><a href="/templates#start">Meet your local team →</a></div></section>
    <section className="gServices" id="services"><div className="gSectionHead"><p>WHAT WE DO</p><h2>Complete outdoor care.</h2></div>{services.map(([n,title,copy])=><article key={n}><b>{n}</b><h3>{title}</h3><p>{copy}</p><a href="/templates#start">Learn more →</a></article>)}</section>
    <section className="gWork" id="work"><div><p>RECENT PROJECT</p><h2>A calmer way<br/>to come home.</h2><p>Native planting, layered lighting, and clean architectural lines transformed this Winter Park property into an everyday retreat.</p><a className="gPrimary" href="/templates#start">Plan your project →</a></div><img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=88" alt="Professional garden and landscaping project"/></section>
    <section className="gReview"><p>“Evergreen understood exactly what we wanted. The process was clear, the crew was exceptional, and our yard finally feels like part of our home.”</p><span>— SARAH &amp; MICHAEL · WINTER PARK</span></section>
    <section className="gCta"><p>LET’S CREATE SOMETHING LASTING</p><h2>Your best outdoor<br/>space starts <i>here.</i></h2><a className="gPrimary" href="/templates#start">Get your free quote →</a></section>
    <footer className="gFooter"><Link className="gLogo" href="#top">EVERGREEN<span>OUTDOOR CO.</span></Link><p>Landscaping designed for life.<br/>Orlando, Florida</p><div><a href="tel:+14075550165">(407) 555-0165</a><a href="mailto:hello@evergreenoutdoor.co">hello@evergreenoutdoor.co</a></div><small>© 2026 Evergreen Outdoor Co. · Website template by Oramusa</small></footer>
  </main>;
}
