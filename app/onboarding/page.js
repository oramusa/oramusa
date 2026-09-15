"use client";
import Link from "next/link";
import { useState } from "react";

export default function OnboardingPage() {
  const [status, setStatus] = useState("idle");
  async function submitOnboarding(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/onboarding", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
      if (!response.ok) throw new Error("Request failed");
      form.reset(); setStatus("success"); window.scrollTo({ top:0, behavior:"smooth" });
    } catch { setStatus("error"); }
  }

  return <main className="onboardingPage">
    <header className="onboardNav shell"><Link className="brand" href="/"><span>Oram</span><em>usa</em></Link><span>Customer onboarding</span></header>
    <section className="onboardHero"><div className="shell"><p className="kicker">YOUR WEBSITE · YOUR BUSINESS</p><h1>Let’s make it<br/><i>yours.</i></h1><p>This information gives our team everything needed to prepare your first customized website preview.</p><div><span>About 10–15 minutes</span><span>Save your answers before closing</span><span>No passwords needed</span></div></div></section>
    {status === "success" ? <section className="onboardSuccess shell"><b>✓</b><p className="kicker darkKicker">DETAILS RECEIVED</p><h2>Thank you—your website<br/>is ready for the next step.</h2><p>We sent a confirmation to your email. Oramusa will review your information and contact you if anything else is needed before your first preview.</p><Link className="primary" href="/templates">View templates →</Link></section> :
    <form className="onboardForm shell" onSubmit={submitOnboarding}>
      <input className="onboardTrap" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true"/>
      <section><div className="onboardSectionTitle"><b>01</b><div><p>PROJECT</p><h2>Start with the basics.</h2></div></div><div className="onboardFields"><label>Project code <span>Provided by Oramusa</span><input name="projectCode" placeholder="Example: ORA-1001" required/></label><label>Selected template<select name="template" required defaultValue=""><option value="" disabled>Choose your template</option><option>Evergreen</option><option>Velocity</option><option>ÉLAN</option><option>AUREA</option></select></label></div></section>
      <section><div className="onboardSectionTitle"><b>02</b><div><p>BUSINESS</p><h2>Tell us who you are.</h2></div></div><div className="onboardFields"><label>Business name<input name="business" required/></label><label>Your full name<input name="name" required/></label><label>Email<input name="email" type="email" required/></label><label>Phone<input name="phone" type="tel" required/></label><label>Business address<input name="address" placeholder="Street, city, state, ZIP"/></label><label>Service area<input name="serviceArea" placeholder="Orlando, Winter Park…"/></label><label className="wide">Short business description<textarea name="description" placeholder="What do you do, who do you serve, and what makes your business different?" required/></label></div></section>
      <section><div className="onboardSectionTitle"><b>03</b><div><p>CONTENT</p><h2>Services and details.</h2></div></div><div className="onboardFields"><label className="wide">Main services or products<textarea name="services" placeholder="List each service and a short description. Include prices only if you want them displayed." required/></label><label>Business hours<input name="hours" placeholder="Mon–Fri 8–5, Sat 9–2"/></label><label>Primary call to action<input name="callToAction" placeholder="Call now, Get a quote, Book online…"/></label><label className="wide">Customer reviews<textarea name="reviews" placeholder="Paste 2–4 reviews with customer first names, if available."/></label></div></section>
      <section><div className="onboardSectionTitle"><b>04</b><div><p>BRAND</p><h2>Choose the feeling.</h2></div></div><div className="onboardFields"><label>Preferred colors<input name="colors" placeholder="Navy and gold, or use my logo"/></label><label>Style direction<select name="style" defaultValue=""><option value="">Let Oramusa recommend</option><option>Clean and modern</option><option>Warm and welcoming</option><option>Bold and energetic</option><option>Luxury and refined</option><option>Natural and organic</option></select></label><label className="wide">Logo and photo sharing link <span>Google Drive, Dropbox, OneDrive, etc.</span><input name="assetLink" type="url" placeholder="https://…"/></label><p className="onboardTip wide"><strong>Please do not send passwords.</strong> Set the shared folder so anyone with the link can view it. Include your logo, team photos, work examples, location photos, and any images you want considered.</p></div></section>
      <section><div className="onboardSectionTitle"><b>05</b><div><p>ONLINE</p><h2>Connect everything.</h2></div></div><div className="onboardFields"><label>Current domain<input name="domain" placeholder="yourbusiness.com"/></label><label>Domain provider<input name="domainProvider" placeholder="GoDaddy, Squarespace…"/></label><label>Facebook URL<input name="facebook" type="url" placeholder="https://…"/></label><label>Instagram URL<input name="instagram" type="url" placeholder="https://…"/></label><label>Google Business Profile<input name="googleBusiness" type="url" placeholder="https://…"/></label><label>Booking or external link<input name="bookingLink" type="url" placeholder="https://…"/></label><label className="wide">Additional requests<textarea name="notes" placeholder="Pages, features, examples you like, or anything else we should know."/></label></div></section>
      <section className="onboardApproval"><label><input name="rightsConfirmed" type="checkbox" value="yes" required/><span>I confirm that my business has permission to use the text, logos, photos, reviews, and other materials provided to Oramusa.</span></label><button className="primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending your details…" : "Send onboarding details →"}</button>{status === "error" && <p>We couldn’t send your details. Please try again or email hello@oramusa.com.</p>}</section>
    </form>}
    <footer className="onboardFooter shell"><span>© {new Date().getFullYear()} Oramusa</span><a href="mailto:hello@oramusa.com">Need help? hello@oramusa.com</a><Link href="/privacy">Privacy</Link></footer>
  </main>;
}
