import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
/** Needs filesystem access to read the photo, so this can't run on the edge runtime. */
export const runtime = "nodejs";

/**
 * Favicon: the actual profile photo, cropped into a circle.
 *
 * Read from disk and embedded as a data URI rather than referenced by public
 * URL, since ImageResponse renders through Satori, which needs the image
 * bytes available synchronously at render time.
 */
export default function Icon() {
  const photo = readFileSync(join(process.cwd(), "public/profile.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <img
          src={photoSrc}
          width={32}
          height={32}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "9999px",
          }}
        />
      </div>
    ),
    size,
  );
}
