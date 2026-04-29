/**
 * Generate new Bridge-style hero photo + 7 industry illustrations
 */
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
const MODELS = ["gemini-3-pro-image-preview", "gemini-2.5-flash-image-preview"];

type Asset = { filename: string; prompt: string };

const ICON_STYLE =
  "Professional vector line-art illustration, deep navy blue (#1A2F5E) outlines on pure white background. Subtle light blue (#A8C5E5) accent fills on key shapes. Clean medium line weight. Modern Japanese business marketing style (similar to Bridge/Storyset Premium). Centered isolated subject, generous negative space. Square 1:1 composition. NO text, NO emoji, NO realistic photography. Single coherent subject only.";

const ASSETS: Asset[] = [
  /* New hero image — laptop on warm wooden desk, real photo style */
  {
    filename: "hero-laptop.png",
    prompt: `A high-end editorial photograph of a modern silver laptop placed on a warm natural wooden desk, photographed from a slight 3/4 angle from the right side. The laptop screen is partially visible showing what appears to be a clean modern Japanese website mockup with text and a beauty-related product image (no readable text needed, just abstract layout shapes suggesting a salon LP). Around the laptop on the desk: a cream ceramic mug of black coffee (steam visible), a small green potted plant in the upper left corner partially out of frame, a thin closed notebook, a silver pen. Soft natural daylight from the right, casting gentle long shadows to the left. Slight depth-of-field blur on background. Warm color tone. Editorial / corporate marketing agency aesthetic, similar to a Stripe or Notion landing page hero photo. NOT illustration. NOT cartoon. Real photographic style. 16:10 horizontal composition.`,
  },
  /* 7 industry icons — match each industry semantically */
  {
    filename: "ind-beauty.png",
    prompt: `${ICON_STYLE} Subject: a stylized hand mirror / vanity mirror with a small bottle of beauty product beside it. Suggesting beauty salon / 美容サロン.`,
  },
  {
    filename: "ind-nail.png",
    prompt: `${ICON_STYLE} Subject: a stylized hand showing fingernails with elegant nail art / a small bottle of nail polish nearby. Suggesting nail salon / ネイルサロン.`,
  },
  {
    filename: "ind-massage.png",
    prompt: `${ICON_STYLE} Subject: a simple stylized human silhouette receiving relaxing care, or a pair of hands placed gently on a person's shoulder/back. Suggesting massage, body care, 整体・治療院.`,
  },
  {
    filename: "ind-esthetic.png",
    prompt: `${ICON_STYLE} Subject: a stylized leaf or floral element combined with a softly glowing skincare bottle and a candle. Suggesting esthetic / 美容エステ.`,
  },
  {
    filename: "ind-restaurant.png",
    prompt: `${ICON_STYLE} Subject: a stylized dinner plate with chopsticks and rising steam suggesting a warm meal, or a small bowl with utensils. Suggesting restaurant / 飲食店.`,
  },
  {
    filename: "ind-school.png",
    prompt: `${ICON_STYLE} Subject: a stylized open book with a small floating pencil and an apple. Suggesting school / 教室・スクール.`,
  },
  {
    filename: "ind-shigyo.png",
    prompt: `${ICON_STYLE} Subject: a stylized leather briefcase with a small document file and a fountain pen. Suggesting professional services / 士業・コンサル.`,
  },
];

async function generateImage(model: string, prompt: string): Promise<Buffer | null> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ["IMAGE"] },
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) return null;
  const data: any = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  for (const p of parts) {
    if (p?.inlineData?.data) return Buffer.from(p.inlineData.data, "base64");
  }
  return null;
}

async function generateAsset(asset: Asset): Promise<void> {
  const outPath = resolve(OUT_DIR, asset.filename);
  console.log(`▸ ${asset.filename}`);
  for (const model of MODELS) {
    const buffer = await generateImage(model, asset.prompt);
    if (buffer) {
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, buffer);
      console.log(`  ✓ saved (${(buffer.length / 1024).toFixed(0)} KB)`);
      return;
    }
  }
  console.error(`  ✗ failed`);
}

async function main() {
  console.log(`Generating ${ASSETS.length} image(s)…\n`);
  for (let i = 0; i < ASSETS.length; i += 4) {
    await Promise.all(ASSETS.slice(i, i + 4).map(generateAsset));
  }
  console.log("done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
