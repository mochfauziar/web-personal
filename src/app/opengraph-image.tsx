import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Gambar OG yang di-generate saat build. Dipakai untuk preview saat link
// dibagikan (WhatsApp, X, LinkedIn). Next.js otomatis memetakan file ini
// ke tag <meta property="og:image">.
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#171412",
          color: "#f0e9e2",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#f08a54" }}>
          {site.url.replace("https://", "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div
            style={{ display: "flex", fontSize: 32, color: "#a89d93", marginTop: 20 }}
          >
            {site.description}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
