import { NextResponse } from "next/server";

const clean = (value, max = 500) => String(value || "").trim().slice(0, max);
const escapeHtml = (value) => clean(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
const resendEmail = (message) => fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify(message),
});

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
  const body = await request.json().catch(() => null);
  if (!body || body.website) return NextResponse.json({ ok: true });
  const required = ["template", "business", "industry", "name", "email", "phone"];
  if (required.some((field) => !clean(body[field], 120))) return NextResponse.json({ error: "Please complete all required fields" }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(body.email, 160))) return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 });
  const from = process.env.LEADS_FROM_EMAIL || "Oramusa <hello@oramusa.com>";
  const inbox = process.env.LEADS_TO_EMAIL || "hello@oramusa.com";
  const template = clean(body.template, 50);
  const business = clean(body.business, 100);
  const firstName = clean(body.name, 120).split(/\s+/)[0];
  const leadResponse = await resendEmail({
      from,
      to: [process.env.LEADS_TO_EMAIL || "hello@oramusa.com"], reply_to: clean(body.email, 160),
      subject: `New ${template} website request — ${business}`,
      html: `<h2>New Oramusa website request</h2><p><strong>Template:</strong> ${escapeHtml(body.template)}</p><p><strong>Business:</strong> ${escapeHtml(body.business)}</p><p><strong>Industry:</strong> ${escapeHtml(body.industry)}</p><p><strong>Name:</strong> ${escapeHtml(body.name)}</p><p><strong>Email:</strong> ${escapeHtml(body.email)}</p><p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p><p><strong>Domain:</strong> ${escapeHtml(body.domain || "None")}</p><p><strong>Notes:</strong><br>${escapeHtml(body.notes || "None")}</p>`
  });
  if (!leadResponse.ok) return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });

  const confirmationResponse = await resendEmail({
    from,
    to: [clean(body.email, 160)],
    reply_to: inbox,
    subject: `We received your ${template} website request`,
    html: `<div style="margin:0;background:#f4f1ea;padding:36px 16px;font-family:Arial,sans-serif;color:#171714"><div style="max-width:600px;margin:auto;background:#ffffff;border:1px solid #ded8cc"><div style="background:#173f3b;padding:28px 34px;color:#ffffff"><div style="font-family:Georgia,serif;font-size:28px;font-style:italic">Oramusa</div><div style="margin-top:8px;font-size:11px;letter-spacing:2px;color:#d5cba7">BEAUTIFUL WEBSITES · ZERO UPFRONT</div></div><div style="padding:38px 34px"><p style="margin:0 0 12px;color:#7c724f;font-size:12px;font-weight:bold;letter-spacing:1.5px">REQUEST RECEIVED</p><h1 style="margin:0 0 22px;font-family:Georgia,serif;font-size:34px;line-height:1.15;font-weight:normal">Thank you, ${escapeHtml(firstName)}.</h1><p style="font-size:16px;line-height:1.7;color:#55514b">We received the website request for <strong>${escapeHtml(business)}</strong> using the <strong>${escapeHtml(template)}</strong> template.</p><div style="margin:28px 0;padding:22px;background:#f7f5f0;border-left:4px solid #c7b86e"><strong style="display:block;margin-bottom:12px">What happens next?</strong><p style="margin:0;color:#625d55;line-height:1.7">We’ll review your business details and contact you within one business day. We’ll confirm the content we need, customize your selected design, and send you a private preview before launch.</p></div><p style="font-size:15px;line-height:1.7;color:#55514b">There is no payment today. If you have photos, a logo, or questions ready, simply reply to this email.</p><a href="https://www.oramusa.com/templates" style="display:inline-block;margin-top:16px;background:#173f3b;color:#ffffff;text-decoration:none;padding:15px 20px;font-size:12px;font-weight:bold;letter-spacing:1px">VIEW YOUR TEMPLATE →</a></div><div style="padding:22px 34px;border-top:1px solid #e7e2d8;color:#817b72;font-size:12px;line-height:1.7">Oramusa · Orlando, Florida<br><a href="mailto:hello@oramusa.com" style="color:#173f3b">hello@oramusa.com</a></div></div></div>`,
  });
  if (!confirmationResponse.ok) console.error("[api/leads] customer confirmation failed", { status: confirmationResponse.status });
  return NextResponse.json({ ok: true, confirmationSent: confirmationResponse.ok });
}
