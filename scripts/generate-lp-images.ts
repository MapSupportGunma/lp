/**
 * generate-lp-images.ts
 *
 * Generate editorial imagery for マップサポート群馬 LP using
 * Nano Banana Pro (gemini-3-pro-image-preview) via direct REST API.
 *
 * Run: npm run gen:images
 */
import { writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";

const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "public/lp");

// Load .env.local manually
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

const MODELS = [
  "gemini-3-pro-image-preview",
  "gemini-2.5-flash-image-preview",
  "gemini-2.5-flash-image",
];

type Asset = { filename: string; prompt: string };

const COMMON =
  "Editorial photography, magazine quality, soft natural daylight, slight film grain, warm but neutral color grading, no text or logos, no AI-generated sheen, museum-quality composition.";

const ASSETS: Asset[] = [
  {
    filename: "hero-main.png",
    prompt: `A modern boutique marketing studio's workspace, photographed from a slight overhead angle. On a warm wooden desk: an open notebook with hand-drawn marketing diagrams (funnel, customer journey arrows, simple sketches), a fountain pen, a small ceramic mug of black coffee, a few client paperclips, a smartphone face-down, a small potted plant in the corner, scattered swatch cards in muted earth tones (cream, terracotta, sage). Soft natural window light from left, casting gentle shadows. The composition feels intentional, considered — like a strategist mid-thought. ${COMMON} 16:9 horizontal, contemporary editorial style reminiscent of Kinfolk magazine.`,
  },
  {
    filename: "service-lp.png",
    prompt: `A laptop on a clean desk, screen displaying a beautiful minimalist landing page for a hair salon (visible: serif headline, soft cream background, single small photo of a salon interior, clean call-to-action button — no readable Japanese text). Around the laptop: open notebook with quick layout sketches, a coffee cup, soft natural light. Photographed from above-front angle. ${COMMON} 4:3 horizontal.`,
  },
  {
    filename: "service-line.png",
    prompt: `A smartphone in soft natural light on a wooden surface, screen showing a stylized LINE chat interface mockup with a salon's official account — friendly green chat bubbles, simple welcome message visible at top (no readable Japanese text, just shapes suggesting a conversation flow). Beside the phone: a small notepad and a tiny terracotta plant. Editorial composition, clean. ${COMMON} 4:3 horizontal.`,
  },
  {
    filename: "service-meo.png",
    prompt: `A smartphone screen displaying a stylized Google Maps view from above, with a single highlighted location pin (a soft red pin) marking a salon, and a small information card overlay showing 5 stars and a tiny photo. Surrounding context: real-world wooden desk, a paper city map underneath suggesting layered navigation. ${COMMON} 4:3 horizontal.`,
  },
  {
    filename: "service-sns.png",
    prompt: `A smartphone displayed flat on a soft cream surface, showing a stylized Instagram grid (3x3) for a small beauty salon — earth-toned squares with soft compositions of hands, plants, products, a candle flame, neutral textures (no people's faces, no readable text). Beside the phone: a small notepad with content calendar grid sketches. Editorial photography. ${COMMON} 4:3 horizontal.`,
  },
  {
    filename: "process-diagram.png",
    prompt: `A hand-drawn marketing process diagram on cream-colored grid paper, photographed from directly above. Three stages connected by elegant arrows, drawn with a black ink pen — circles labeled with abstract symbols (a small ear shape for listening, a pencil shape for designing, a gift package shape for delivery). Around the paper: a fountain pen, a small ruler, a coffee ring stain. Looks like a strategist's working sketch, not polished. ${COMMON} 16:9 horizontal.`,
  },
  {
    filename: "portrait-spot.png",
    prompt: `A minimalist still-life composition representing a young Japanese entrepreneur's identity — a stack of three books (one on marketing strategy, one a medical anatomy textbook, one a sleek laptop closed on top), beside a fountain pen and a small notebook. Soft natural light, warm wood surface. No people visible — purely tactile objects telling a story of a medical student turned marketing strategist. ${COMMON} 1:1 square, museum still-life quality.`,
  },
  {
    filename: "work-sample-1.png",
    prompt: `A polished mockup display: an iPad and a smartphone leaning side by side on a soft cream surface, both showing different views of the same elegant salon website (iPad shows the homepage with a soft photographic header; smartphone shows the booking page). Soft natural shadow, warm lighting. The website design feels like a high-end Tokyo beauty salon — refined, minimalist, photographic. No readable Japanese text. ${COMMON} 4:3 horizontal.`,
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
  if (!res.ok) {
    const text = await res.text();
    console.error(`  [${model}] HTTP ${res.status}: ${text.slice(0, 200)}`);
    return null;
  }
  const data: any = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  for (const p of parts) {
    if (p?.inlineData?.data) return Buffer.from(p.inlineData.data, "base64");
  }
  console.error(`  [${model}] no image part`);
  return null;
}

async function generateAsset(asset: Asset): Promise<void> {
  const outPath = resolve(OUT_DIR, asset.filename);
  console.log(`▸ ${asset.filename}`);
  for (const model of MODELS) {
    console.log(`  trying ${model}…`);
    const buffer = await generateImage(model, asset.prompt);
    if (buffer) {
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, buffer);
      console.log(`  ✓ saved (${(buffer.length / 1024).toFixed(0)} KB)\n`);
      return;
    }
  }
  console.error(`  ✗ all models failed\n`);
}

async function main() {
  console.log(`Generating ${ASSETS.length} image(s) → ${OUT_DIR}\n`);
  // Run in parallel batches of 3 to speed up
  const BATCH_SIZE = 3;
  for (let i = 0; i < ASSETS.length; i += BATCH_SIZE) {
    const batch = ASSETS.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(generateAsset));
  }
  console.log("done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
