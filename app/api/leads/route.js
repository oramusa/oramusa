import { NextResponse } from "next/server";

const clean = (value, max = 500) => String(value || "").trim().slice(0, max);
const escapeHtml = (value) => clean(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
  const body = await request.json().catch(() => null);
  if (!body || body.website) return NextResponse.json({ ok: true });
  const required = ["business", "industry", "name", "email", "phone"];
  if (required.some((field) => !clean(body[field], 120))) return NextResponse.json({ error: "Please complete all required fields" }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(body.email, 160))) return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 });
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEADS_FROM_EMAIL || "Oramusa Leads <hello@oramusa.com>",
      to: [process.env.LEADS_TO_EMAIL || "hello@oramusa.com"], reply_to: clean(body.email, 160),
      subject: `New website request — ${clean(body.business, 100)}`,
      html: `<h2>New Oramusa website request</h2><p><strong>Business:</strong> ${escapeHtml(body.business)}</p><p><strong>Industry:</strong> ${escapeHtml(body.industry)}</p><p><strong>Name:</strong> ${escapeHtml(body.name)}</p><p><strong>Email:</strong> ${escapeHtml(body.email)}</p><p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p><p><strong>Domain:</strong> ${escapeHtml(body.domain || "None")}</p><p><strong>Notes:</strong><br>${escapeHtml(body.notes || "None")}</p>`
    })
  });
  if (!response.ok) return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
