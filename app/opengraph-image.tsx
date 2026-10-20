import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Sam Shih - You have the idea. I'll turn it into a product.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview for LinkedIn, iMessage, Slack, etc. Mirrors the hero.
export default async function OpengraphImage() {
  const root = process.cwd();
  const [serif, serifItalic, sans, headshot] = await Promise.all([
    readFile(join(root, "app/fonts/InstrumentSerif-Regular.ttf")),
    readFile(join(root, "app/fonts/InstrumentSerif-Italic.ttf")),
    readFile(join(root, "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf")),
    readFile(join(root, "public/assets/sam-headshot-blue.jpg")),
  ]);
  const headshotSrc = `data:image/jpeg;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 88px",
          background: "#fafaf7",
          color: "#0b1b33",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ fontSize: 30, color: "#4b5565" }}>Sam Shih · Product engineer for founders</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontFamily: "Instrument Serif", fontSize: 76, lineHeight: 1.05 }}>
            <span>You have the idea.</span>
            <span style={{ display: "flex" }}>
              <span>I&apos;ll turn it into a</span>
              <span style={{ marginLeft: 18, fontStyle: "italic", color: "#1d4ed8" }}>product</span>
              <span>.</span>
            </span>
          </div>
          <div style={{ marginTop: 40, fontSize: 28, color: "#4b5565" }}>samjshih.com</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={headshotSrc}
          width={320}
          height={320}
          style={{ borderRadius: 9999, border: "10px solid #ffffff", boxShadow: "0 24px 64px rgba(11,27,51,0.16)" }}
          alt=""
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
        { name: "Geist", data: sans, style: "normal", weight: 400 },
      ],
    },
  );
}
