import Link from "next/link";

export const metadata = { title: "Privacy Policy", description: "How Oramusa collects, uses, and protects information.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <main className="legalPage">
    <header className="legalNav shell"><Link className="brand" href="/"><span>Oram</span><em>usa</em></Link><Link href="/templates">View templates</Link></header>
    <section className="legalHero"><div className="shell"><p className="kicker">LEGAL · ORAMUSA</p><h1>Privacy Policy</h1><p>Effective September 14, 2026</p></div></section>
    <article className="legalContent shell">
      <p className="legalIntro">This Privacy Policy explains how Oramusa collects, uses, and shares information when you visit Oramusa.com, submit a website request, communicate with us, or purchase our services.</p>
      <h2>1. Information we collect</h2><p>When you submit our website request form or contact us, we may collect your name, business name, industry, email address, phone number, domain, selected template, project notes, and any materials you later provide. If you become a customer, we may also maintain project communications, service records, agreements, and billing-related records. Payment card details, when payments are enabled, will be processed by a payment provider rather than stored directly by Oramusa.</p>
      <h2>2. Information collected automatically</h2><p>Our hosting and security providers may automatically process limited technical information such as IP address, browser and device type, requested pages, timestamps, referring pages, and diagnostic or security logs. This information helps operate, secure, and improve the website.</p>
      <h2>3. How we use information</h2><p>We use information to respond to inquiries; prepare, customize, launch, and support websites; communicate about projects and accounts; send service-related messages; process payments; prevent abuse; maintain security; improve our services; and comply with legal obligations.</p>
      <h2>4. How we share information</h2><p>We may share information with service providers that help us operate the business, such as Vercel for website hosting and Resend for transactional email. We may also share information when required by law, to protect rights or security, in connection with a business transfer, or when you direct or authorize us to do so. We do not sell or rent your personal information.</p>
      <h2>5. Data retention</h2><p>We retain information only for as long as reasonably needed for the purposes described here, including providing services, maintaining business and tax records, resolving disputes, enforcing agreements, and meeting legal obligations. Retention periods may vary by record type.</p>
      <h2>6. Security</h2><p>We use reasonable administrative and technical measures designed to protect information. No online service or transmission method is completely secure, so we cannot guarantee absolute security. Please do not submit Social Security numbers, payment card details, health information, or other sensitive personal information through the website request form.</p>
      <h2>7. Your choices</h2><p>You may ask to access, correct, or delete personal information you have provided, subject to legal and operational retention requirements. You may also opt out of nonessential marketing messages. To make a request, email <a href="mailto:hello@oramusa.com">hello@oramusa.com</a>. We may need to verify your identity before completing a request.</p>
      <h2>8. Cookies and analytics</h2><p>Oramusa may use essential technologies required for site operation and security. If we later add optional analytics, advertising cookies, or similar tracking, this policy and any required consent controls will be updated.</p>
      <h2>9. Children’s privacy</h2><p>Our services are intended for businesses and adults. They are not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
      <h2>10. External links</h2><p>Our website may link to third-party websites or customer projects. Their privacy practices are governed by their own policies, not this Privacy Policy.</p>
      <h2>11. Policy changes and contact</h2><p>We may update this Privacy Policy as our practices or services change. The effective date above identifies the latest version. Questions or privacy requests may be sent to <a href="mailto:hello@oramusa.com">hello@oramusa.com</a>.</p>
    </article>
    <footer className="legalFooter shell"><span>© {new Date().getFullYear()} Oramusa</span><Link href="/terms">Terms of Service</Link></footer>
  </main>;
}
