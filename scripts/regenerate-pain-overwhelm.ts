/**
 * regenerate-pain-overwhelm.ts
 *
 * Regenerate ONLY pain-overwhelm.png with a subject that matches the
 * title "何から手をつければいいのか分からず時間だけが過ぎていく",
 * and NO rectangular frame around the composition.
 */
import { writeFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

const ROOT = resolve(__dirname, "..");
const OUT_PATH = resolve(ROOT, "public/lp/pain-overwhelm.png");

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

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY");
  process.exit(1);
}

const MODEL = "gemini-3-pro-image-preview";

const STYLE =
  "Professional vector line-art illustration in the style of Storyset Premium / Linkedfin / Iconscout. Deep navy blue (#1A2F5E) outlines, generous white/cream fills, subtle light blue (#A8C5E5) accent fills on key shapes. Clean even line weight (medium thickness). Friendly, approachable Japanese business style. Pure white background. Square 1:1 composition with centered isolated subject and generous negative space. NO text, NO emoji, NO realistic photography, NO gradient meshes. Smooth shapes, slightly rounded, modern.";

const PROMPT = `${STYLE}

CRITICAL CONSTRAINTS — DO NOT VIOLATE:
- DO NOT draw any rectangle, square, frame, border, outline, or boundary box around the illustration.
- DO NOT draw any enclosing shape that surrounds the subject.
- DO NOT draw a card, panel, picture-frame, or photo-frame containing the illustration.
- DO NOT draw a desk surface, table edge, ground line, floor, wall, or background panel.
- The subject MUST float in pure unbounded white space with absolutely NOTHING around it except small floating accent icons.
- The four edges of the canvas must be plain empty white pixels — no line, no stroke, no shadow, no fill near the edges.

Subject: A young Japanese woman shown from the chest up, facing forward. She has medium-length black hair and wears a simple pale blue blouse. Her expression is troubled and overwhelmed — eyebrows slightly raised in confusion, mouth in a small uncertain line, one hand raised near her temple as if thinking "where do I even start?". Around her head, three small floating question-mark icons (one upper-left, one upper-right, one slightly above her head) drawn as simple line-art "?" marks in navy. A tiny floating clock icon near one shoulder to suggest "time is passing". She floats freely with empty white space all around her — NO frame, NO border, NO desk, NO surroundings of any kind. Convey: "she doesn't know what to tackle first and time keeps slipping by". Navy outlines, soft light-blue accent on her blouse, clean Storyset-style premium illustration.`;

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
    console.error(`HTTP ${res.status}: ${text.slice(0, 400)}`);
    return null;
  }
  const data: any = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  for (const p of parts) {
    if (p?.inlineData?.data) return Buffer.from(p.inlineData.data, "base64");
  }
  console.error("no image part in response");
  return null;
}

async function main() {
  console.log(`▸ regenerating pain-overwhelm.png with model ${MODEL}`);
  const buf = await generateImage();
  if (!buf) {
    console.error("✗ generation failed");
    process.exit(1);
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, buf);
  console.log(`✓ saved ${OUT_PATH} (${(buf.length / 1024).toFixed(0)} KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
