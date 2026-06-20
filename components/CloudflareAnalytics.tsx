import Script from "next/script";

export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON;
  if (!token) return null;
  return (
    <Script
      strategy="afterInteractive"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={`{"token": "${token}"}`}
    />
  );
}
