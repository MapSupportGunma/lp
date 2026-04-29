/**
 * generate-pain-images.ts
 *
 * Generate Bridge-style line-art illustrations:
 * - 5 pain-point illustrations (people + devices, line-art)
 * - 5 process icons (line-art)
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

const STYLE =
  "Professional vector line-art illustration in the style of Storyset Premium / Linkedfin / Iconscout. Deep navy blue (#1A2F5E) outlines, generous white/cream fills, subtle light blue (#A8C5E5) accent fills on key shapes. Clean even line weight (medium thickness). Friendly, approachable Japanese business style. White background. Square 1:1 composition with centered isolated subject and generous negative space. NO text, NO emoji, NO realistic photography, NO gradient meshes. The illustration should feel curated and intentional, like premium illustrations on a Japanese marketing agency landing page (e.g. Bridge., 才流, baigie). Smooth shapes, slightly rounded, modern.";

const PAIN_ASSETS: Asset[] = [
  {
    filename: "pain-sns.png",
    prompt: `${STYLE} Subject: A young Japanese woman shown from the shoulders up, facing slightly to the right. She is touching her chin with her right index finger and wearing a subtle expression of mild concern (slight frown, eyebrows slightly raised). She has medium-length black hair. She wears a simple pale blue top. The illustration is a clean line drawing with navy outlines. Convey "she's wondering why her social media efforts aren't working" — but no phone or device shown, just her thoughtful pose with a small subtle thought bubble containing a tiny social media bubble icon floating to her right.`,
  },
  {
    filename: "pain-overwhelm.png",
    prompt: `${STYLE} Subject: A clean line drawing of an open laptop on a small desk, viewed at a 3/4 angle. The laptop screen shows simple abstract webpage elements (navigation bar, content blocks, a button). A small floating clock icon and a small question mark hover near the laptop. Convey "their website is up but they don't know what to improve". Navy outlines, white/cream fills, subtle blue accents on the screen content.`,
  },
  {
    filename: "pain-website.png",
    prompt: `${STYLE} Subject: A hand holding a smartphone in vertical orientation, viewed from the side/front. The phone is held by a thin wrist with simple shirt cuff. The phone screen shows a simple chat / messaging interface mockup with a few abstract chat bubbles. To the upper right of the phone, a small floating question mark "?" icon. Navy outlines, light blue accents on the screen, white background. Convey "they have ad/online presence but aren't sure of effectiveness".`,
  },
  {
    filename: "pain-line.png",
    prompt: `${STYLE} Subject: A young Japanese man shown from the shoulders up, with a thoughtful concerned expression (slight frown, looking slightly upward). He has short black hair and wears a simple light blue shirt or sweater. Above his head and to the right, a clean line-art thought bubble containing a small abstract "webpage" icon (suggesting an LP). Convey "they made an LP but it's not converting". Navy outlines, subtle blue accent on the LP icon inside the thought bubble.`,
  },
  {
    filename: "pain-map.png",
    prompt: `${STYLE} Subject: A clean line-art desktop computer monitor on a small stand, viewed from the front. The monitor screen shows a simple analytics dashboard mockup — abstract bar chart with bars of varying heights and a line graph above it. Navy outlines, light blue subtle accents on the chart bars. Convey "they have data but don't know how to interpret or improve it". White background, centered composition.`,
  },
];

const PROCESS_ASSETS: Asset[] = [
  {
    filename: "process-01-listen.png",
    prompt: `${STYLE} Subject: A clean line-art lightbulb shape, with simple radiating lines suggesting "idea" or "insight". Inside or near the bulb, a small graph or chart shape. White background. Convey "hearing, understanding, strategic thinking".`,
  },
  {
    filename: "process-02-design.png",
    prompt: `${STYLE} Subject: A clean line-art funnel shape (wide top, narrow bottom) with small dots or arrows entering from the top, narrowing toward a target dot at the bottom. Convey "designing the customer journey, from awareness to conversion". Navy outlines, light blue accents.`,
  },
  {
    filename: "process-03-build.png",
    prompt: `${STYLE} Subject: A clean line-art laptop with abstract building elements — small geometric blocks/cards floating around or being assembled. A small wrench or tool icon nearby. Convey "building, implementation, production". Navy outlines, light blue accents on the blocks.`,
  },
  {
    filename: "process-04-analyze.png",
    prompt: `${STYLE} Subject: A clean line-art magnifying glass overlapping a small bar chart, with an upward arrow showing improvement. Navy outlines, light blue accent on the arrow and chart bars. Convey "analyzing data, finding insights, continuous improvement".`,
  },
  {
    filename: "process-05-grow.png",
    prompt: `${STYLE} Subject: A clean line-art rocket ship taking off at an angle, with a small trail of smoke/lines underneath. A few small star/dot accents around. Convey "maximizing results, growth, scaling up". Navy outlines, light blue accent on the rocket body and trail.`,
  },
];

const ASSETS = [...PAIN_ASSETS, ...PROCESS_ASSETS];

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
  const BATCH = 4;
  for (let i = 0; i < ASSETS.length; i += BATCH) {
    const batch = ASSETS.slice(i, i + BATCH);
    await Promise.all(batch.map(generateAsset));
  }
  console.log("done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
