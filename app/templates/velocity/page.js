import Link from "next/link";

const services = [
  ["01", "Paint correction", "Remove swirls, haze, and imperfections to restore depth and clarity."],
  ["02", "Ceramic coating", "Long-lasting gloss and easier maintenance with professional surface protection."],
  ["03", "Window tint", "Precision-cut film for privacy, heat rejection, and a cleaner profile."],
  ["04", "Paint protection film", "Nearly invisible defense for high-impact areas and complete vehicles."]
];

export const metadata = { title: "Velocity Auto Studio | Premium Detailing", description: "Premium detailing, ceramic coating, tint, and paint protection." };

export default function VelocityTemplate() {
  return <main className="velocity">
    <header className="vNav"><a className="vLogo" href="#top"><span>V</span> VELOCITY<small>AUTO STUDIO</small></a><nav><a href="#services">Services</a><a href="#work">Results</a><a href="#process">Process</a></nav><a className="vBook" href="/templates#start">Book a consultation ↗</a></header>
    <section className="vHero" id="top"><img src="/velocity-hero.jpg" alt="Black performance coupe in a premium detailing studio"/><div className="vShade"></div><div className="vHeroCopy"><p>ORLANDO’S PREMIER AUTO CARE</p><h1>PROTECT<br/>THE <em>FEELING.</em></h1><p className="vLead">Precision detailing and protection for people who notice every reflection.</p><div><a className="vPrimary" href="/templates#start">Get a free quote ↗</a><a className="vText" href="#services">Explore services ↓</a></div></div><div className="vStats"><span><b>08+</b> YEARS OF CRAFT</span><span><b>1,200</b> VEHICLES PROTECTED</span><span><b>4.9</b> ★★★★★</span></div></section>
    <section className="vStatement"><p>OUR STANDARD</p><h2>Not just clean.<br/><span>Dialed in.</span></h2><p>Every surface, edge, and reflection receives deliberate attention. We combine proven technique with premium products to deliver results you can see before you even reach the car.</p></section>
    <section className="vServices" id="services">{services.map(([n,title,desc])=><article key={n}><b>{n}</b><div className="vServiceLine"></div><h3>{title}</h3><p>{desc}</p><a href="/templates#start">Learn more ↗</a></article>)}</section>
    <section className="vResult" id="work"><div className="vResultCopy"><p>THE RESULT</p><h2>Depth you can<br/>see. Protection<br/>you can <em>trust.</em></h2><ul><li>Showroom-level finish</li><li>Hydrophobic protection</li><li>UV and contaminant resistance</li><li>Care guidance included</li></ul></div><div className="vResultVisual"><img src="/velocity-hero.jpg" alt="Mirror-like finish on a professionally detailed black coupe"/><span>Signature ceramic package</span></div></section>
    <section className="vProcess" id="process"><p>OUR PROCESS</p><h2>Simple. Transparent.<br/>Built around your car.</h2><div>{[["01","Inspect","We assess the finish, understand your goals, and recommend only what your car needs."],["02","Perfect","Our controlled process cleans, corrects, and prepares every surface with precision."],["03","Protect","We apply your chosen protection and walk you through caring for the finished result."]].map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="vReview"><span>★★★★★</span><blockquote>“The finish looks deeper than the day I bought it. Every detail was handled perfectly—and the communication was just as good.”</blockquote><p>Marcus T. · Porsche 911 owner</p></section>
    <section className="vCta"><p>YOUR CAR DESERVES BETTER</p><h2>Ready for the<br/><em>reset?</em></h2><a href="/templates#start">Request your free quote ↗</a></section>
    <footer className="vFooter"><a className="vLogo" href="#top"><span>V</span> VELOCITY<small>AUTO STUDIO</small></a><p>Premium detailing &amp; protection<br/>Orlando, Florida</p><div><a href="tel:+14075550192">(407) 555-0192</a><a href="mailto:studio@velocityauto.co">studio@velocityauto.co</a></div><small>© 2026 Velocity Auto Studio · Website template by Oramusa</small></footer>
  </main>;
}
