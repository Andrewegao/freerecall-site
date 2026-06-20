import { ImageResponse } from "next/og";

export const alt = "FreeRecall: Recalls that pay you back.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#070708",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(34,197,94,0.18), transparent 70%)",
          color: "#F5F5F7",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#22C55E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              color: "#000",
            }}
          >
            $
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>
            FreeRecall
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: -3.5,
              lineHeight: 1,
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Recalls quietly expire.</span>
            <span style={{ color: "#22C55E" }}>Claim what's yours.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(245,245,247,0.5)",
            fontSize: 20,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>iOS &middot; Android</span>
          <span>freerecall</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
