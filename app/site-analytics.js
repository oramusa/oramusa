"use client";

import { Analytics } from "@vercel/analytics/next";

const OWNER_FLAG = "oramusa_owner";

function isOwnerBrowser() {
  if (typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);

  // One-time activation: visit any Oramusa page with ?owner=1.
  // The flag persists only in this browser via localStorage.
  if (params.get("owner") === "1") {
    window.localStorage.setItem(OWNER_FLAG, "1");
    params.delete("owner");

    const cleanQuery = params.toString();
    const cleanUrl =
      window.location.pathname +
      (cleanQuery ? `?${cleanQuery}` : "") +
      window.location.hash;

    window.history.replaceState({}, "", cleanUrl);
  }

  return window.localStorage.getItem(OWNER_FLAG) === "1";
}

export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        if (isOwnerBrowser()) return null;
        return event;
      }}
    />
  );
}
