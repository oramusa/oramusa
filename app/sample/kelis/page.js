import Link from "next/link";

export const metadata = {
  title: "Kelis Aponte Photography | Private Website Concept",
  description: "Private photography website concept prepared by Oramusa.",
  robots: { index: false, follow: false },
};

const css = `
.ka{background:#f6f2eb;color:#1d1b19;font-family:Arial,sans-serif}.ka *{box-sizing:border-box}.concept{background:#1b1917;color:#eee7dc;text-align:center;padding:9px;font-size:10px;letter-spacing:1.5px}.nav{height:78px;padding:0 6vw;display:flex;align-items:center;justify-content:space-between;background:#f6f2eb}.brand{font:italic 32px Georgia,serif;color:#1d1b19;text-decoration:none;letter-spacing:-1px;line-height:.9}.brand .first{font-size:1.06em}.brand .last{font-size:1.18em;margin-left:4px}.brand span.photo{display:block;font:9px Arial,sans-serif;font-style:normal;letter-spacing:5px;margin-top:10px;text-align:center}.footer .brand{font-size:38px}.nav nav{display:flex;gap:28px}.nav a{color:#3d3934;text-decoration:none;font-size:12px}.hero{min-height:78vh;position:relative;display:flex;align-items:flex-end;background:url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=88') center/cover}.veil{position:absolute;inset:0;background:linear-gradient(0deg,rgba(20,15,12,.72),rgba(20,15,12,.08) 65%)}.heroCopy{position:relative;color:white;padding:0 7vw 7vw;max-width:900px}.eyebrow{font-size:10px;letter-spacing:2.6px;font-weight:bold}.hero h1{font:64px/1 Georgia;margin:15px 0}.hero h1 em{font-weight:normal}.hero p{max-width:570px;line-height:1.7}.button{display:inline-block;margin-top:16px;padding:14px 22px;background:#f1e8dc;color:#201c19;text-decoration:none;font-size:12px;font-weight:bold}.section{padding:90px 7vw}.intro{max-width:800px}.intro h2,.contact h2{font:48px/1.08 Georgia;margin:12px 0}.intro p{line-height:1.8;color:#655f58}.portfolio{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:12px;margin-top:42px;height:520px}.portfolio img{width:100%;height:100%;object-fit:cover}.services{background:#201d1a;color:#f5efe7}.servicesGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#5b544d;margin-top:40px}.service{background:#201d1a;padding:38px}.service h3{font:28px Georgia;margin:0 0 12px}.service p{color:#cfc5bb;line-height:1.7;font-size:14px}.about{display:grid;grid-template-columns:1fr 1fr;min-height:560px}.about img{width:100%;height:100%;object-fit:cover}.about div{padding:8vw;align-self:center}.about h2{font:48px Georgia;margin:10px 0}.about p{line-height:1.8;color:#655f58}.contact{background:#ddd1c4;padding:90px 7vw;display:grid;grid-template-columns:1fr 1fr;gap:8vw}.form{display:grid;gap:11px}.form input,.form select,.form textarea{padding:15px;border:1px solid #aaa096;background:#f6f2eb}.form textarea{min-height:110px}.fake{padding:15px;background:#211e1b;color:white;text-align:center;font-size:12px;font-weight:bold}.footer{background:#181614;color:#cfc6bc;padding:45px 7vw;text-align:center}.footer .brand{color:white}.note{font-size:11px;color:#756e67}.mobile{display:none}@media(max-width:800px){.nav nav{display:none}.nav{padding:0 22px}.hero{min-height:680px}.heroCopy{padding:0 24px 70px}.hero h1{font-size:45px}.section{padding:65px 22px}.intro h2,.contact h2,.about h2{font-size:38px}.portfolio{grid-template-columns:1fr;height:auto}.portfolio img{height:330px}.servicesGrid,.about,.contact{grid-template-columns:1fr}.about img{height:440px}.about div{padding:60px 24px}.contact{padding:65px 22px}.mobile{display:block;position:fixed;z-index:20;bottom:14px;left:14px;right:14px;background:#211e1b;color:white;text-align:center;padding:15px;text-decoration:none;font-size:12px}}
`;

export default function KelisPhotography(){
  return <main className="ka">
    <style>{css}</style>
    <div className="concept">PRIVATE WEBSITE CONCEPT · PREPARED BY ORAMUSA · NOT AN OFFICIAL KELIS APONTE WEBSITE</div>
    <header className="nav">
      <Link className="brand" href="#top"><span className="first">Kelis</span> <span className="last">Aponte</span><span className="photo">PHOTOGRAPHY</span></Link>
      <nav><a href="#portfolio">Portfolio</a><a href="#sessions">Sessions</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a href="#contact">BOOK A SESSION →</a>
    </header>

    <section className="hero" id="top"><div className="veil"/><div className="heroCopy">
      <p className="eyebrow">PHOTOGRAPHY · WINTER PARK & ORLANDO</p>
      <h1>Stories, <em>beautifully captured.</em></h1>
      <p>A refined, photo-first home for portraits, people and meaningful moments across Central Florida.</p>
      <a className="button" href="#portfolio">Explore the portfolio →</a>
    </div></section>

    <section className="section" id="portfolio"><div className="intro">
      <p className="eyebrow">SELECTED WORK</p><h2>Photographs that feel like you.</h2>
      <p>This concept uses temporary portfolio imagery. Kelis's own photographs would replace every image in the finished website.</p>
    </div><div className="portfolio">
      <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85" alt="Photography concept"/>
      <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85" alt="Photography concept"/>
      <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85" alt="Photography concept"/>
    </div><p className="note">Concept imagery only — final portfolio would feature Kelis Aponte's original photography.</p></section>

    <section className="section services" id="sessions"><div className="intro"><p className="eyebrow">SESSIONS</p><h2>Simple ways to tell your story.</h2><p>Session categories are placeholders until Kelis confirms the photography services she wants to offer.</p></div>
      <div className="servicesGrid"><article className="service"><h3>Portraits</h3><p>Personal portraits, creative sessions, senior photos and individual storytelling.</p></article><article className="service"><h3>Couples & Families</h3><p>Relaxed sessions centered on connection, personality and moments worth keeping.</p></article><article className="service"><h3>Events</h3><p>Natural coverage of celebrations and meaningful gatherings across Central Florida.</p></article></div>
    </section>

    <section className="about" id="about"><img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=85" alt="Photographer concept"/><div><p className="eyebrow">BEHIND THE LENS</p><h2>Hi, I'm Kelis.</h2><p>This space would introduce Kelis in her own words: why she photographs, what inspires her, and what clients can expect when they step in front of her camera.</p><p className="note">About copy is intentionally left as a concept until Kelis provides her story.</p></div></section>

    <section className="contact" id="contact"><div><p className="eyebrow">LET'S CREATE SOMETHING</p><h2>Ready to plan your session?</h2><p>Tell me a little about what you have in mind. This inquiry area can later connect directly to Kelis's preferred email or booking workflow.</p></div><div className="form"><input placeholder="Your name"/><input placeholder="Email"/><select defaultValue=""><option value="" disabled>Session type</option><option>Portrait</option><option>Couples / Family</option><option>Event</option><option>Other</option></select><textarea placeholder="Tell me about the photos you're imagining..."/><div className="fake">SEND INQUIRY →</div><p className="note">Concept form only. No inquiries are submitted from this preview.</p></div></section>

    <footer className="footer"><Link className="brand" href="#top"><span className="first">Kelis</span> <span className="last">Aponte</span><span className="photo">PHOTOGRAPHY</span></Link><p>Winter Park · Orlando · Central Florida</p><p className="note">Private concept prepared by Oramusa · © 2026</p></footer>
    <a className="mobile" href="#contact">BOOK A SESSION →</a>
  </main>
}