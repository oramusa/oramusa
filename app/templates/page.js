"use client";

import Link from "next/link";
import { useState } from "react";

const previewUrl = "https://evergreen-outdoor-template.oramusa.chatgpt.site";

export default function TemplatesPage() {
  const [status, setStatus] = useState("idle");
  async function submitInterest(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return <main className="templatesPage">
    <header className="nav shell templatesNav"><Link className="brand" href="/"><span>Oram</span><em>usa</em></Link><nav className="navLinks"><Link href="/">Home</Link><a href="#templates">Templates</a><a href="#how">How it works</a></nav><a className="navCta" href="#start">Start my website</a></header>
    <section className="templateHero"><div className="shell"><p className="kicker">ORAMUSA WEBSITE COLLECTION</p><h1>Choose your website.<br/><span>We make it yours.</span></h1><p>Professional websites for local businesses—with no large upfront bill. Pick a design, send us your details, and we handle the rest.</p><div className="pricePill"><strong>$0</strong><span>upfront</span><i></i><strong>$99</strong><span>/ month</span></div></div></section>
    <section className="templateCatalog shell" id="templates"><div className="catalogHeading"><div><p className="kicker darkKicker">TEMPLATES 01–02</p><h2>Built to turn visitors<br/>into local customers.</h2></div><p>Choose a polished design for your industry. We customize the colors, content, services, photos, and contact details for your business.</p></div><article className="templateCard"><div className="templateVisual"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" alt="Modern home surrounded by professional landscaping"/><span className="liveTag">Live template</span></div><div className="templateInfo"><div><span className="templateType">HOME SERVICES</span><span className="templateNumber">01 / 02</span></div><h3>Evergreen</h3><p>A confident, premium design for businesses whose work deserves to be seen. Built around calls and quote requests.</p><ul><li>Mobile-first design</li><li>Services and project showcase</li><li>Customer reviews</li><li>Quote request form</li><li>Hosting, security, and updates</li></ul><div className="templateActions"><a className="primary" href={previewUrl} target="_blank" rel="noreferrer">View live preview ↗</a><a className="outlineDark" href="#start">Choose this template</a></div></div></article><article className="templateCard templateCardSecond"><div className="templateVisual velocityPreview"><img src="/velocity-hero.jpg" alt="Black performance coupe in a premium detailing studio"/><span className="liveTag blueTag">Live template</span></div><div className="templateInfo"><div><span className="templateType">AUTOMOTIVE</span><span className="templateNumber">02 / 02</span></div><h3>Velocity</h3><p>A sharp, premium design for detailers, tint shops, ceramic coating specialists, and automotive businesses.</p><ul><li>Bold mobile-first design</li><li>Services and results showcase</li><li>Customer testimonial</li><li>Quote-focused calls to action</li><li>Hosting, security, and updates</li></ul><div className="templateActions"><Link className="primary velocityButton" href="/templates/velocity">View live preview ↗</Link><a className="outlineDark" href="#start">Choose this template</a></div></div></article></section>
    <section className="howSection" id="how"><div className="shell"><p className="kicker">HOW IT WORKS</p><h2>From template to your website.</h2><div className="howGrid">{[["01","Choose","Pick the design that fits your business."],["02","Personalize","Send your logo, services, photos, and contact details."],["03","Approve","Review your customized website and request changes."],["04","Launch","We connect your domain and keep everything running."]].map(([n,t,p])=><div key={n}><b>{n}</b><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>
    <section className="startSection shell" id="start"><div className="startCopy"><p className="kicker darkKicker">START YOUR WEBSITE</p><h2>Tell us about<br/>your business.</h2><p>No payment today. We’ll review your details and contact you to confirm the right fit before anything begins.</p><div className="included"><strong>$99/month includes</strong><span>Custom setup · Hosting · SSL security · Mobile optimization · Maintenance · Content updates</span></div></div><form className="startForm" onSubmit={submitInterest}><label className="honeypot" aria-hidden="true">Company URL<input name="website" tabIndex="-1" autoComplete="off"/></label><label>Business name<input name="business" placeholder="Your business" required/></label><label>Industry<input name="industry" placeholder="Landscaping, roofing…" required/></label><label>Your name<input name="name" placeholder="First and last name" required/></label><label>Email<input name="email" type="email" placeholder="you@business.com" required/></label><label>Phone<input name="phone" type="tel" placeholder="(407) 555-0000" required/></label><label>Current website or domain<input name="domain" placeholder="Optional"/></label><label className="formFull">Anything else we should know?<textarea name="notes" placeholder="Services, goals, or questions"/></label><button className="primary formFull" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send my website request →"}</button>{status === "success" && <p className="formNote formFull">Thank you! Your request has been sent. We’ll contact you within one business day.</p>}{status === "error" && <p className="formNote formError formFull">We couldn’t send it right now. Please email hello@oramusa.com.</p>}</form></section>
    <footer className="footer shell"><Link className="brand footerBrand" href="/"><span>Oram</span><em>usa</em></Link><p>Beautiful websites. Zero upfront.</p><div><a href="mailto:hello@oramusa.com">hello@oramusa.com</a><span>© {new Date().getFullYear()} Oramusa</span></div></footer>
  </main>;
}
