import { NextResponse } from "next/server";

const clean = (value, max = 1000) => String(value || "").trim().slice(0, max);
const escapeHtml = (value, max) => clean(value, max).replace(/[&<>"']/g, (char) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[char]);
const row = (label, value) => `<tr><td style="padding:9px 14px;color:#777;border-bottom:1px solid #eee;vertical-align:top;width:190px">${label}</td><td style="padding:9px 14px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value || "Not provided", 4000)}</td></tr>`;
const sendEmail = (message) => fetch("https://api.resend.com/emails", { method:"POST", headers:{ Authorization:`Bearer ${process.env.RESEND_API_KEY}`, "Content-Type":"application/json" }, body:JSON.stringify(message) });

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error:"Email service is not configured" }, { status:503 });
  const body = await request.json().catch(() => null);
  if (!body || body.website) return NextResponse.json({ ok:true });
  const required = ["projectCode","template","business","name","email","phone","description","services","rightsConfirmed"];
  if (required.some((field) => !clean(body[field], 200))) return NextResponse.json({ error:"Please complete all required fields" }, { status:400 });
  const email = clean(body.email, 160);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error:"Please enter a valid email" }, { status:400 });
  const from = process.env.LEADS_FROM_EMAIL || "Oramusa <hello@oramusa.com>";
  const inbox = process.env.LEADS_TO_EMAIL || "hello@oramusa.com";
  const fields = [["Project code",body.projectCode],["Template",body.template],["Business",body.business],["Customer",body.name],["Email",body.email],["Phone",body.phone],["Address",body.address],["Service area",body.serviceArea],["Business description",body.description],["Services / products",body.services],["Business hours",body.hours],["Primary call to action",body.callToAction],["Customer reviews",body.reviews],["Preferred colors",body.colors],["Style direction",body.style],["Asset sharing link",body.assetLink],["Domain",body.domain],["Domain provider",body.domainProvider],["Facebook",body.facebook],["Instagram",body.instagram],["Google Business Profile",body.googleBusiness],["Booking link",body.bookingLink],["Additional requests",body.notes],["Content rights confirmed",body.rightsConfirmed]];
  const internal = await sendEmail({ from, to:[inbox], reply_to:email, subject:`Onboarding received — ${clean(body.business,100)} · ${clean(body.projectCode,50)}`, html:`<div style="font-family:Arial,sans-serif;color:#222"><h1>New customer onboarding</h1><table style="border-collapse:collapse;width:100%;max-width:850px">${fields.map(([label,value])=>row(label,value)).join("")}</table></div>` });
  if (!internal.ok) return NextResponse.json({ error:"Email delivery failed" }, { status:502 });
  const firstName = clean(body.name,120).split(/\s+/)[0];
  const confirmation = await sendEmail({ from, to:[email], reply_to:inbox, subject:`Your Oramusa onboarding details were received`, html:`<div style="margin:0;background:#f4f1ea;padding:36px 16px;font-family:Arial,sans-serif;color:#171714"><div style="max-width:600px;margin:auto;background:#fff;border:1px solid #ded8cc"><div style="background:#173f3b;padding:28px 34px;color:#fff"><div style="font-family:Georgia,serif;font-size:28px;font-style:italic">Oramusa</div><div style="margin-top:8px;font-size:11px;letter-spacing:2px;color:#d5cba7">CUSTOMER ONBOARDING</div></div><div style="padding:38px 34px"><p style="color:#7c724f;font-size:12px;font-weight:bold;letter-spacing:1.5px">DETAILS RECEIVED</p><h1 style="font-family:Georgia,serif;font-size:34px;font-weight:normal">Thank you, ${escapeHtml(firstName,120)}.</h1><p style="font-size:16px;line-height:1.7;color:#55514b">We received the onboarding information for <strong>${escapeHtml(body.business,100)}</strong> and project <strong>${escapeHtml(body.projectCode,50)}</strong>.</p><div style="margin:28px 0;padding:22px;background:#f7f5f0;border-left:4px solid #c7b86e"><strong>What happens next?</strong><p style="margin:10px 0 0;color:#625d55;line-height:1.7">We’ll review your content and contact you if anything is missing. Then we’ll begin customizing your selected template and prepare your first private preview.</p></div><p style="color:#55514b;line-height:1.7">You can reply to this email with corrections or additional information.</p></div><div style="padding:22px 34px;border-top:1px solid #e7e2d8;color:#817b72;font-size:12px">Oramusa · Orlando, Florida<br><a href="mailto:hello@oramusa.com" style="color:#173f3b">hello@oramusa.com</a></div></div></div>` });
  if (!confirmation.ok) console.error("[api/onboarding] confirmation failed", { status:confirmation.status });
  return NextResponse.json({ ok:true, confirmationSent:confirmation.ok });
}
