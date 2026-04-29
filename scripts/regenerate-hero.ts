import { writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";

const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "public/lp");

const envPath = resolve(ROOT, ".env.local");
if (existsSync(envPath)) {
  const content = readFileSync(envPath, "utf8");
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eq = trimmed.indexOf("=");
    if (eq < 0) return;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  });
}

const API_KEY = process.env.GEMINI_API_KEY!;
// Nano Banana Pro ONLY — no fallback to weaker models
const MODEL = "gemini-3-pro-image-preview";

const PROMPT = `A high-end professional editorial photograph of a beautifully composed minimalist workspace, viewed from a slight overhead 3/4 angle.

Composition (no laptop, no devices, no screens):
- Center: a leather-bound A5 notebook (closed, dark brown leather) with a silver fountain pen resting diagonally on top
- Right of notebook: a cream ceramic mug of black coffee with a wisp of steam rising
- Upper-left corner: a small green leafy potted plant (partially in frame, slightly out of focus)
- Surface: a warm honey-toned natural wooden desk with subtle grain visible
- Background: soft window light streaming in from the right (out of frame), slight golden-hour warmth
- Subtle shadows cast by the objects to the left
- Shallow depth of field — notebook and pen in sharp focus, plant softly blurred

Style: Editorial photography in the spirit of Kinfolk magazine, Stripe website hero, or Apple lifestyle marketing. Real photographic style — NOT illustration, NOT 3D render, NOT vector, NOT cartoon.

Strict negative constraints: NO laptop, NO computer, NO phone, NO screen of any kind, NO digital device, NO text on anything, NO labels, NO writing visible, NO branding, NO logo. The notebook cover and mug should be plain.

Aspect ratio: 5:4 horizontal landscape composition. Warm color palette with natural tones.`;

async function generateImage(): Promise<Buffer | null> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: PROMPT }] }],
    generationConfig: { responseModalities: ["IMAGE"] },
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
    return null;
  }
  const data: any = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  for (const p of parts) {
    if (p?.inlineData?.data) return Buffer.from(p.inlineData.data, "base64");
  }
  console.error(`no image part in response`);
  return null;
}

async function main() {
  const outPath = resolve(OUT_DIR, "hero-laptop.png");
  console.log(`Regenerating hero-laptop.png with ${MODEL}`);
  console.log(`Theme: minimalist workspace, NO laptop / NO device — eliminates text-rendering issue`);
  const buffer = await generateImage();
  if (!buffer) {
    console.error(`failed`);
    process.exit(1);
  }
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buffer);
  console.log(`✓ saved (${(buffer.length / 1024).toFixed(0)} KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
