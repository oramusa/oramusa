import Link from "next/link";

export const metadata = { title: "ÉLAN Salon Website Template", description: "An editorial luxury website template for salons, stylists, colorists, bridal artists, and beauty studios.", alternates: { canonical: "/templates/elan" } };

const services = [
  ["01", "Cut & Finish", "Shape, movement, and a finish designed around the way you live.", "From $85"],
  ["02", "Dimensional Color", "Luminous, natural-looking color with depth in every light.", "From $180"],
  ["03", "Signature Blowout", "Polished volume, smooth texture, and effortless longevity.", "From $65"],
  ["04", "Bridal Atelier", "Personalized trials and event styling for your most photographed day.", "By consultation"],
];

export default function ElanTemplate() {
  return <main className="elan">
    <header className="eNav"><Link className="eLogo" href="#top">ÉLAN<span>HAIR ATELIER</span></Link><nav><a href="#services">Services</a><a href="#story">Our story</a><a href="#artists">Artists</a></nav><a className="eBook" href="/templates#start">Book an appointment</a></header>
    <section className="eHero" id="top"><img src="/elan-salon-hero.jpg" alt="Elegant guest inside a dark luxury hair salon"/><div className="eHeroShade"/><div className="eHeroCopy"><p>HAIR, ELEVATED</p><h1>Your best<br/>hair feels<br/><em>effortless.</em></h1><p className="eLead">Considered cuts, luminous color, and an experience designed entirely around you.</p><div><a className="ePrimary" href="/templates#start">Reserve your visit</a><a className="eText" href="#services">Explore services</a></div></div><div className="eLocation"><span>ORLANDO · FLORIDA</span><span>TUE–SAT · 9–7</span></div></section>
    <section className="eIntro" id="story"><p className="eEyebrow">THE ÉLAN APPROACH</p><h2>Quiet luxury.<br/><i>Remarkable</i> hair.</h2><div><p>We believe your salon visit should feel unhurried, personal, and transformative. Every appointment begins with listening and ends with hair that still feels like you—only elevated.</p><span>Thoughtful consultation · Expert technique · Lasting results</span></div></section>
    <section className="eServices" id="services"><div className="eSectionHead"><p className="eEyebrow">OUR SERVICES</p><h2>Made for your<br/>next chapter.</h2></div><div className="eServiceList">{services.map(([n,t,d,p])=><article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div><span>{p}</span><i>↗</i></article>)}</div></section>
    <section className="eExperience"><div className="ePortrait"><img src="/elan-salon-hero.jpg" alt="Editorial portrait showing glossy professionally styled hair"/></div><div className="eExperienceCopy"><p className="eEyebrow">THE EXPERIENCE</p><h2>Beauty begins<br/>with being <i>seen.</i></h2><p>Your texture, routine, and vision guide every choice. We create a tailored plan, explain each step, and teach you how to recreate the finish at home.</p><ul><li>Private consultation</li><li>Personalized service plan</li><li>Premium professional products</li><li>At-home care guidance</li></ul><a href="/templates#start">Meet your stylist →</a></div></section>
    <section className="eArtists" id="artists"><p className="eEyebrow">MEET THE ATELIER</p><h2>Artists with an eye<br/>for the <i>individual.</i></h2><div><article><span>COLOR DIRECTOR</span><h3>Sofia Laurent</h3><p>Dimensional color · Balayage</p></article><article><span>MASTER STYLIST</span><h3>Maya Ellis</h3><p>Precision cuts · Texture</p></article><article><span>STYLE DIRECTOR</span><h3>Camille Rose</h3><p>Editorial · Bridal styling</p></article></div></section>
    <section className="eReview"><p>“</p><blockquote>From the consultation to the final mirror reveal, every detail felt intentional. This is the first cut that truly works with my natural texture.</blockquote><span>— AMELIA R. · ORLANDO</span></section>
    <section className="eCta"><p className="eEyebrow">YOUR APPOINTMENT AWAITS</p><h2>Ready for hair<br/>that feels like <i>you?</i></h2><a className="ePrimary" href="/templates#start">Reserve your visit</a></section>
    <footer className="eFooter"><Link className="eLogo" href="#top">ÉLAN<span>HAIR ATELIER</span></Link><p>Modern hair, considered beautifully.<br/>Orlando, Florida</p><div><a href="tel:+14075550178">(407) 555-0178</a><a href="mailto:hello@elanhair.com">hello@elanhair.com</a></div><small>© 2026 ÉLAN Hair Atelier · Website template by Oramusa</small></footer>
  </main>;
}
