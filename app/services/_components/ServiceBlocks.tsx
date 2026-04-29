import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────────────────
 * Hero — title + tagline + image + price/CTA bar
 * ────────────────────────────────────────────── */
export function ServiceHero({
  title,
  tagline,
  image,
  price,
  originalPrice,
  duration,
}: {
  title: string;
  tagline: string;
  image: string;
  price: string;
  originalPrice: string;
  duration: string;
}) {
  return (
    <section className="relative bg-bg">
      <div className="container-mod py-14 md:py-20 lg:py-24">
        {/* breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-fg-mute">
          <Link href="/" className="transition hover:text-primary">Home</Link>
          <span className="text-fg-faint">/</span>
          <span className="text-fg">{title}</span>
        </nav>

        <div className="mt-10 grid grid-cols-12 items-center gap-10 md:mt-14 lg:gap-12">
          <div className="col-span-12 min-w-0 lg:col-span-6 xl:col-span-7">
            <h1 className="text-[40px] font-bold leading-[1.1] tracking-tight text-fg sm:text-[52px] md:text-[64px] lg:text-[72px]">
              {title}
            </h1>
            <p className="mt-6 text-[16px] leading-[1.75] text-fg-soft md:text-[18px]">
              {tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/#contact" className="btn-primary">
                <span>無料相談する</span>
                <span aria-hidden>→</span>
              </Link>
              <Link href="/#plans" className="btn-secondary">
                <span>料金プランを見る</span>
              </Link>
            </div>
          </div>

          <div className="col-span-12 min-w-0 lg:col-span-6 xl:col-span-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-md">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Price / duration bar */}
        <div className="mt-12 grid grid-cols-1 items-stretch overflow-hidden rounded-md border border-line bg-bg-elev md:mt-14 md:grid-cols-3">
          <div className="border-b border-line px-6 py-5 md:border-b-0 md:border-r">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fg-mute">
              立ち上げ期 価格
            </p>
            <div className="mt-2 flex items-baseline gap-3">
              <p className="text-[12px] text-fg-faint line-through">{originalPrice}</p>
              <p className="text-[24px] font-bold tracking-tight text-primary md:text-[28px]">
                {price}
              </p>
            </div>
          </div>
          <div className="border-b border-line px-6 py-5 md:border-b-0 md:border-r">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fg-mute">
              納期
            </p>
            <p className="mt-2 text-[24px] font-bold tracking-tight text-fg md:text-[28px]">
              {duration}
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex items-center justify-center gap-2 bg-primary px-8 py-5 text-[14px] font-semibold text-bg transition hover:bg-primary-hover"
          >
            <span>このサービスで申し込む</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Features — 3-4 cards with illustration + title + body
 * ────────────────────────────────────────────── */
export type Feature = { image: string; title: string; body: string };

export function FeaturesSection({
  title,
  features,
}: {
  title: React.ReactNode;
  features: Feature[];
}) {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="text-center">
          <h2 className="title-underline text-[24px] font-bold leading-[1.3] tracking-tight text-fg md:text-[34px] lg:text-[38px]">
            {title}
          </h2>
        </div>

        <div className={`mt-12 grid gap-5 md:gap-6 ${features.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
          {features.map((f) => (
            <article
              key={f.title}
              className="card flex flex-col items-center gap-4 p-6 text-center md:p-7"
            >
              <div className="relative aspect-square w-full max-w-[140px] overflow-hidden">
                <Image
                  src={f.image}
                  alt=""
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-[15px] font-bold leading-snug text-fg md:text-[17px]">
                {f.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-fg-soft md:text-[14px]">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Flow — simple numbered steps
 * ────────────────────────────────────────────── */
export type FlowStep = { title: string; body: string };

export function FlowSection({
  title,
  steps,
}: {
  title: React.ReactNode;
  steps: FlowStep[];
}) {
  return (
    <section className="border-t border-line bg-bg-alt py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="text-center">
          <h2 className="title-underline text-[24px] font-bold leading-[1.3] tracking-tight text-fg md:text-[34px] lg:text-[38px]">
            {title}
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative flex flex-col items-center text-center"
            >
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-1rem] top-12 hidden text-[24px] text-fg-faint lg:block"
                >
                  →
                </span>
              )}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-bg text-primary md:h-24 md:w-24">
                <span className="text-[22px] font-bold tracking-tight md:text-[28px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[15px] font-bold leading-snug text-fg md:text-[17px]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[220px] text-[12px] leading-[1.7] text-fg-soft md:text-[13px]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Pricing — single compact pricing block
 * ────────────────────────────────────────────── */
export function PricingBlock({
  current,
  original,
  unit,
  includes,
  notIncluded,
}: {
  current: string;
  original: string;
  unit: string;
  includes: string[];
  notIncluded?: string[];
}) {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-mod max-w-5xl">
        <div className="text-center">
          <h2 className="title-underline text-[24px] font-bold leading-[1.3] tracking-tight text-fg md:text-[34px] lg:text-[38px]">
            料金
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-line bg-bg-elev p-8 md:p-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fg-mute">
              立ち上げ期 価格
            </p>
            <p className="mt-3 text-[12px] text-fg-faint line-through">
              通常 {original}
            </p>
            <p className="text-[44px] font-bold leading-none tracking-tight text-primary md:text-[52px]">
              {current}
            </p>
            <p className="mt-3 text-[12px] text-fg-mute">{unit}</p>
            <Link
              href="/#contact"
              className="btn-primary mt-7 inline-flex w-full justify-center"
            >
              <span>このサービスで申し込む</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="rounded-md border border-line bg-bg-elev p-8 md:p-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fg-mute">
              含まれるもの
            </p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-fg md:text-[14px]">
              {includes.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-bg"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            {notIncluded && notIncluded.length > 0 && (
              <>
                <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.18em] text-fg-mute">
                  含まれないもの
                </p>
                <ul className="mt-3 space-y-1.5 text-[12px] text-fg-mute md:text-[13px]">
                  {notIncluded.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-fg-faint">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * FAQ — compact accordion
 * ────────────────────────────────────────────── */
export type FAQItem = { q: string; a: string };

export function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  return (
    <section className="border-t border-line bg-bg-alt py-20 md:py-28">
      <div className="container-mod max-w-4xl">
        <div className="text-center">
          <h2 className="title-underline text-[24px] font-bold leading-[1.3] tracking-tight text-fg md:text-[34px] lg:text-[38px]">
            よくあるご質問
          </h2>
        </div>

        <dl className="mt-12 space-y-3">
          {faqs.map(({ q, a }, i) => (
            <details
              key={q}
              className="card group p-5 md:p-6"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="flex items-start gap-4 text-[14px] font-semibold leading-snug text-fg md:text-[16px]">
                  <span className="text-primary">Q.</span>
                  {q}
                </span>
                <span
                  aria-hidden
                  className="faq-icon mt-1 select-none text-[20px] font-bold text-primary"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pl-6 text-[13px] leading-[1.85] text-fg-soft md:text-[14px]">
                {a}
              </p>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * NextStep — compact CTA + other services
 * ────────────────────────────────────────────── */
type OtherService = { slug: string; title: string };

export function NextStepSection({
  current,
}: {
  current: "lp" | "line" | "meo" | "sns";
}) {
  const all: Record<string, OtherService> = {
    lp: { slug: "lp", title: "LP 制作" },
    line: { slug: "line", title: "LINE 公式構築" },
    meo: { slug: "meo", title: "MEO 代行" },
    sns: { slug: "sns", title: "SNS 運用" },
  };
  const others = Object.values(all).filter((s) => s.slug !== current);

  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-mod max-w-5xl">
        <div className="rounded-md bg-bg-deep p-10 text-center text-bg md:p-14">
          <h2 className="text-[22px] font-bold leading-[1.3] tracking-tight md:text-[30px] lg:text-[34px]">
            まずは無料相談から始めてみませんか?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-[1.85] text-bg/75 md:text-[14px]">
            「うちにこのサービスは合うのか?」を、フラットにお話しできる場をご用意しています。
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-bg px-8 py-3.5 text-[14px] font-semibold text-primary transition hover:bg-bg/90 md:text-[15px]"
          >
            <span>無料相談する</span>
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-14">
          <p className="text-center text-[12px] font-medium text-fg-mute md:text-[13px]">
            他のサービスも見る
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card flex items-center justify-between p-5 transition md:p-6"
                >
                  <span className="text-[14px] font-bold text-fg md:text-[15px]">
                    {s.title}
                  </span>
                  <span aria-hidden className="text-fg-mute">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
