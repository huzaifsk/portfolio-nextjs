import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { personalData } from "@/data/personal";

export const alt = `${personalData.name}, ${personalData.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
/** Needs filesystem access to read the photo, so this can't run on the edge runtime. */
export const runtime = "nodejs";

/**
 * Social share card. Renders at a real 1200x630, replacing the previous setup
 * where a 588x586 profile photo was declared directly as the 1200x630
 * og:image, which cropped or letterboxed badly on every platform that
 * unfurled a link to this site (WhatsApp, LinkedIn, X, Slack, iMessage).
 *
 * The same photo is embedded here as a circular avatar instead, alongside the
 * name, so the card still carries a recognizable face rather than a bare
 * monogram. Matches the site's own black/white palette rather than
 * introducing a new accent.
 */
export default async function OpengraphImage() {
  const photo = readFileSync(join(process.cwd(), "public/profile.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(255,255,255,0.08), transparent 45%)",
          color: "#ffffff",
          padding: "76px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img
            src={photoSrc}
            width={48}
            height={48}
            style={{
              width: 48,
              height: 48,
              borderRadius: "9999px",
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
          <div
            style={{
              fontSize: 24,
              color: "#9a9a9a",
              letterSpacing: "-0.01em",
            }}
          >
            {personalData.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            {personalData.role}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#a3a3a3",
              maxWidth: 820,
            }}
          >
            {personalData.valueStatement.trim()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            color: "#737373",
          }}
        >
          <div style={{ display: "flex" }}>React</div>
          <div style={{ display: "flex", color: "#333333" }}>/</div>
          <div style={{ display: "flex" }}>Next.js</div>
          <div style={{ display: "flex", color: "#333333" }}>/</div>
          <div style={{ display: "flex" }}>TypeScript</div>
          <div style={{ display: "flex", marginLeft: "auto", color: "#525252" }}>
            {personalData.location}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
