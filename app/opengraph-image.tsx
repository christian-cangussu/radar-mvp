import { ImageResponse } from "next/og";

export const alt = "NEXLIC — Inteligencia de contratación pública";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f1eb",
          color: "#151713",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 999,
              background: "#151713",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                border: "4px solid #dfff38",
                display: "flex",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "0.14em",
            }}
          >
            NEXLIC
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#6d6f67",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Inteligencia de contratación pública
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
              maxWidth: 980,
            }}
          >
            <div style={{ display: "flex" }}>El contrato ya está publicado.</div>
            <div style={{ display: "flex", color: "#777a72" }}>
              La pregunta es si lo vas a ver a tiempo.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>Menos portales. Más decisiones.</div>
          <div
            style={{
              display: "flex",
              background: "#dfff38",
              padding: "12px 18px",
              borderRadius: 8,
              fontWeight: 700,
            }}
          >
            nexlic.netlify.app
          </div>
        </div>
      </div>
    ),
    size
  );
}
