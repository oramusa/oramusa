import Link from "next/link";

export const metadata = {
  title: "Website Service Agreement",
  description: "Oramusa Managed Website Service Agreement for the $99 monthly plan.",
  alternates: { canonical: "/service-agreement" },
};

export default function ServiceAgreementPage() {
  return <main className="legalPage">
    <header className="legalNav shell"><Link className="brand" href="/"><span>Oram</span><em>usa</em></Link><Link href="/templates">View templates</Link></header>
    <section className="legalHero"><div className="shell"><p className="kicker">LEGAL · ORAMUSA</p><h1>Website Service Agreement</h1><p>Standard $99 Managed Website Plan · Effective September 15, 2026</p></div></section>
    <article className="legalContent shell">
      <p className="legalIntro">This Website Service Agreement explains the service Oramusa provides, what the customer receives, and the limits that keep the $99 monthly plan predictable for both parties.</p>

      <h2>1. Agreement and project order</h2><p>This Agreement is between Oramusa (“Oramusa,” “we,” or “us”) and the person or business purchasing the managed website service (“Customer” or “you”). Your selected template, business name, website domain, approved pages, and any special requirements will be documented in a written project order, proposal, email confirmation, or checkout record. This Agreement, that project record, and the Oramusa Terms of Service form the complete service agreement. If a specifically negotiated project order conflicts with this Agreement, the project order controls for that project.</p>

      <h2>2. Standard service</h2><p>For $99 per month, Oramusa will customize one Oramusa template for the Customer’s brand and provide up to five essential website pages, mobile and tablet optimization, managed hosting, SSL, routine software maintenance, one standard contact or quote-request form, and basic on-page SEO setup. The plan is a managed service; it is not a sale of the template, source code, or hosting infrastructure.</p>

      <h2>3. Initial customization and approval</h2><p>The Customer will provide the logo, business information, services, contact details, and properly licensed photos and content needed for the website. The initial customization includes up to two reasonable revision rounds within the selected template and approved scope. A revision round means one consolidated written list of changes. The Customer must review the private preview and provide consolidated feedback. Launch approval may be given by email or another written electronic method.</p>

      <h2>4. Timing and customer delays</h2><p>Most standard projects are targeted for completion within seven to ten business days after Oramusa receives all required content and access. This is a target, not a guarantee. Missing materials, delayed feedback, third-party outages, or work outside the standard scope may extend delivery. Customer delays do not pause subscription billing or extend the initial term.</p>

      <h2>5. Monthly updates</h2><p>The plan includes one consolidated update request per calendar month requiring up to 30 minutes of work. Included updates are limited to existing text, Customer-supplied photos, services, business hours, and contact details on existing pages. Unused time does not roll over, accumulate, transfer, or convert to a credit. Standard requests are normally completed within three to five business days after all required materials are received.</p>

      <h2>6. Work not included</h2><p>The monthly plan does not include new pages or layouts, extra revision rounds, major redesigns, custom code or applications, e-commerce, membership systems, booking or payment systems, CRM or API integrations, advanced SEO campaigns, advertising, copywriting, photography, video production, logo or branding projects, accessibility certification, legal or regulatory review, emergency work, or same-day requests.</p>

      <h2>7. Additional work</h2><p>Work outside the included scope is billed at $100 per hour with a one-hour minimum or at a fixed project price quoted by Oramusa. Oramusa will describe the additional work and obtain the Customer’s written approval before beginning it. A request alone does not make additional work part of the monthly plan, and Oramusa is not required to begin out-of-scope work before approval and payment arrangements are complete.</p>

      <h2>8. Subscription term and payment</h2><p>The service has no website setup fee and requires a 12-month initial commitment. Recurring billing begins after the project scope is approved and before the website launches. Payments are due monthly through the designated payment processor. After the initial 12-month term, service continues month-to-month until canceled according to this Agreement. Taxes, chargebacks, third-party fees, and approved additional work may be charged separately.</p>

      <h2>9. Cancellation and nonpayment</h2><p>The Customer remains responsible for payments due during the initial 12-month commitment unless Oramusa agrees otherwise in writing. After the initial term, either party may end month-to-month service by giving 30 days’ written notice. Oramusa may suspend work or take the managed website offline for overdue payment, unlawful use, security risk, or material breach. Ending service does not erase charges already due.</p>

      <h2>10. Ownership and license</h2><p>The Customer owns its domain name and original logos, photos, trademarks, and business content. Oramusa owns its templates, source code, design system, reusable components, processes, tools, and underlying technology. While the subscription is active and paid, the Customer receives a limited, non-exclusive, non-transferable license to use the completed website for its business. The website code and design are not transferred when service ends unless both parties sign a separate buyout agreement.</p>

      <h2>11. Domain, content, and third-party services</h2><p>The Customer should register and control its domain and must provide accurate content and materials it has the right to use. Domain registration, business email, paid fonts, stock media, plugins, advertising, and other third-party charges are the Customer’s responsibility unless specifically included in writing. Oramusa is not responsible for a third party’s outage, policy change, account suspension, or service discontinuation.</p>

      <h2>12. Results, warranties, and liability</h2><p>Oramusa will perform the service with reasonable professional care but does not guarantee search rankings, traffic, leads, sales, uninterrupted availability, legal compliance, or a particular business result. The warranty disclaimers and limitations of liability in the Oramusa Terms of Service apply to this Agreement.</p>

      <h2>13. Electronic acceptance</h2><p>By checking the agreement box, completing checkout, signing electronically, or otherwise confirming acceptance in writing, the Customer acknowledges that it has read and agrees to this Website Service Agreement and the <Link href="/terms">Terms of Service</Link>. The person accepting represents that they are authorized to bind the Customer.</p>

      <h2>14. Governing law and contact</h2><p>This Agreement is governed by Florida law. The parties will first attempt in good faith to resolve disputes informally. Notices and questions may be sent to <a href="mailto:hello@oramusa.com">hello@oramusa.com</a>.</p>

      <p className="legalNotice"><strong>Important:</strong> This is Oramusa’s standard service agreement draft and is not legal advice. Oramusa should have Florida counsel review it before accepting paid subscriptions.</p>
    </article>
    <footer className="legalFooter shell"><span>© {new Date().getFullYear()} Oramusa</span><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link></footer>
  </main>;
}
