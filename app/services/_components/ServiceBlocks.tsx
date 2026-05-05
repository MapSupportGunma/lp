import Image from "next/image";
import Link from "next/link";

export function ServiceHero({
  title,
  headline,
  tagline,
  image,
  price,
  originalPrice,
  duration,
  badges = [],
  outcomes = [],
}: {
  title: string;
  headline?: React.ReactNode;
  tagline: string;
  image: string;
  price: string;
  originalPrice: string;
  duration: string;
  badges?: string[];
  outcomes?: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#fffaf2] text-fg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_9%_86%,#fff0bd_0_8%,transparent_9%),linear-gradient(135deg,#fffaf2_0%,#f8fff8_56%,#fff7ea_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,hsl(var(--bg-alt)))]" />

      <div className="container-mod relative py-10 md:py-14 lg:py-18">
        <nav className="flex max-w-full items-center gap-2 overflow-hidden text-[12px] font-bold text-fg-mute">
          <Link href="/" className="shrink-0 transition hover:text-primary">Home</Link>
          <span className="text-fg-faint">/</span>
          <span className="truncate text-fg-soft">{title}</span>
        </nav>

        <div className="mt-8 grid grid-cols-12 items-center gap-8 lg:gap-12">
          <div className="col-span-12 min-w-0 lg:col-span-6">
            <p className="inline-flex max-w-full items-center gap-3 rounded-full border border-[#d8cab8] bg-white/90 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-[#247c69] shadow-[0_12px_34px_rgba(54,40,24,0.06)]">
              <span className="h-px w-8 bg-accent" />
              Service Detail
            </p>
            <h1 className="mt-6 text-[36px] font-black leading-[1.22] text-fg sm:text-[48px] md:text-[56px]">
              {headline ?? title}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] font-bold leading-[2] text-fg-soft md:text-[18px]">
              {tagline}
            </p>

            {badges.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#77c7ac]/35 bg-white px-3.5 py-2 text-[12px] font-black text-[#247c69] shadow-[0_10px_26px_rgba(36,124,105,0.08)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 grid w-[calc(100vw-3rem)] max-w-full gap-3 sm:w-full sm:max-w-xl sm:grid-cols-2">
              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff7a59] px-7 py-4 text-[14px] font-black text-white shadow-[0_18px_44px_rgba(255,122,89,0.24)] transition hover:bg-[#e76242]"
              >
                <span>この内容で無料相談する</span>
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/#plans"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#77c7ac]/40 bg-white px-7 py-4 text-[14px] font-black text-primary shadow-[0_12px_34px_rgba(36,124,105,0.08)] transition hover:bg-primary-soft"
              >
                料金を見る
              </Link>
            </div>

            {outcomes.length > 0 && (
              <div className="mt-7 grid gap-2 sm:grid-cols-3">
                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-[1rem] border border-[#77c7ac]/28 bg-white/86 px-4 py-3 shadow-[0_12px_30px_rgba(36,124,105,0.08)]"
                  >
                    <p className="text-[13px] font-black leading-[1.55] text-fg">{outcome}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-span-12 min-w-0 lg:col-span-6">
            <div className="relative w-[calc(100vw-3rem)] max-w-full overflow-hidden rounded-[2rem] border-[6px] border-white bg-white p-2 shadow-[0_30px_100px_rgba(54,40,24,0.10)] lg:w-auto">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.55rem] bg-bg-sunken">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-5 top-5 rounded-full bg-[#ff7a59] px-4 py-2 text-[12px] font-black text-white shadow-[0_12px_30px_rgba(255,122,89,0.24)]">
                立ち上げ期 40%OFF
              </div>
              <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
                <div className="border-b border-line p-5 sm:border-b-0 sm:border-r">
                  <p className="text-[11px] font-black text-fg-mute">
                    料金目安
                  </p>
                  <p className="mt-2 text-[11px] text-fg-mute line-through">
                    通常 {originalPrice}
                  </p>
                  <PriceText value={price} className="mt-1 text-[24px] md:text-[32px]" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-black text-fg-mute">
                    開始目安
                  </p>
                  <p className="mt-3 text-[20px] font-black text-fg sm:mt-7 md:text-[24px]">
                    {duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid w-[calc(100vw-3rem)] max-w-full overflow-hidden rounded-[1.5rem] border border-line bg-white/86 shadow-[0_18px_70px_rgba(36,124,105,0.09)] backdrop-blur md:w-full md:grid-cols-3">
          <HeroPoint label="初回相談" value="無料" />
          <HeroPoint label="契約前" value="見積明確" />
          <Link
            href="/#contact"
            className="flex items-center justify-center gap-2 bg-[#247c69] px-8 py-5 text-[14px] font-black text-white transition hover:bg-[#155d4e]"
          >
            <span>このサービスで相談する</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroPoint({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-line px-6 py-5 text-center md:border-b-0 md:border-r">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-fg-mute">
        {label}
      </p>
      <p className="mt-2 text-[22px] font-black text-fg md:text-[26px]">{value}</p>
    </div>
  );
}

function PriceText({ value, className = "" }: { value: string; className?: string }) {
  const parts = value.split(" + ");

  return (
    <p className={`break-words font-display font-semibold leading-tight text-fg ${className}`}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className="block">
          {index > 0 ? `+ ${part}` : part}
        </span>
      ))}
    </p>
  );
}

export type Feature = { image: string; title: string; body: string };

export function FeaturesSection({
  title,
  body,
  features,
}: {
  title: React.ReactNode;
  body?: string;
  features: Feature[];
}) {
  return (
    <section className="bg-bg-alt py-18 md:py-24">
      <div className="container-mod max-w-6xl">
        <SectionHeading eyebrow="Feature" title={title} body={body} />

        <div className={`mt-10 grid gap-5 md:gap-6 ${features.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-[1.45rem] border border-line bg-bg-elev p-5 shadow-[0_18px_60px_rgba(54,40,24,0.06)] transition hover:-translate-y-1 hover:border-[#77c7ac]/60 md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#fffaf2] shadow-[inset_0_0_0_1px_rgba(216,202,184,0.55)]">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <p className="font-display text-[28px] font-semibold leading-none text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <h3 className="mt-6 text-[18px] font-black leading-snug text-fg md:text-[20px]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[13px] font-semibold leading-[1.85] text-fg-soft md:text-[14px]">
                {feature.body}
              </p>
            </article>
          ))}
        </div>

        <ServiceCTA className="mt-10" text="この内容で相談する" />
      </div>
    </section>
  );
}

export type FlowStep = { title: string; body: string };

export function FlowSection({
  title,
  body,
  steps,
}: {
  title: React.ReactNode;
  body?: string;
  steps: FlowStep[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#f7fbf6] py-18 text-fg md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f7fbf6_0%,#fff8ee_100%)]" />
      <Image
        src="/lp/texture-vellum.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.14]"
      />
      <div className="container-mod relative max-w-6xl">
        <SectionHeading eyebrow="Flow" title={title} body={body} />

        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-[1.45rem] border border-line bg-white/86 p-6 text-center shadow-[0_18px_60px_rgba(36,124,105,0.07)] backdrop-blur md:p-7"
            >
              {index < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-fg-faint md:block">
                  →
                </span>
              )}
              <p className="font-display text-[34px] font-semibold leading-none text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-[16px] font-black text-fg md:text-[18px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[13px] font-semibold leading-[1.8] text-fg-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PricingBlock({
  current,
  original,
  unit,
  includes,
  recommendedFor,
  addOns,
  notIncluded,
}: {
  current: string;
  original: string;
  unit: string;
  includes: string[];
  recommendedFor?: string;
  addOns?: { label: string; price: string }[];
  notIncluded?: string[];
}) {
  return (
    <section className="bg-bg py-18 md:py-24">
      <div className="container-mod max-w-6xl">
        <SectionHeading
          eyebrow="Price"
          title="料金"
          body="立ち上げ期につき、先着3軒限定の特別価格です。含まれる内容を明確にしてから進めます。"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#ff9b7e]/55 bg-white p-7 shadow-[0_28px_90px_rgba(255,122,89,0.10)] md:p-9">
            <div className="absolute right-[-2rem] top-[-2rem] h-32 w-32 rounded-full bg-[#fff0bd]" />
            <p className="relative inline-flex rounded-full bg-[#ff7a59] px-4 py-2 text-[11px] font-black text-white">
              立ち上げ期価格
            </p>
            {recommendedFor && (
              <p className="relative mt-5 rounded-[1rem] bg-[#f4fff9] px-4 py-3 text-[13px] font-black leading-[1.7] text-[#247c69]">
                {recommendedFor}
              </p>
            )}
            <p className="relative mt-5 text-[13px] text-fg-mute line-through">
              通常 {original}
            </p>
            <p className="relative mt-2 font-display text-[40px] font-semibold leading-[1.08] text-fg md:text-[54px]">
              {current}
            </p>
            <p className="relative mt-4 text-[13px] font-bold leading-relaxed text-fg-mute md:text-[14px]">
              {unit}
            </p>
            <Link
              href="/#contact"
              className="relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff7a59] px-7 py-4 text-[14px] font-black text-white shadow-[0_16px_38px_rgba(255,122,89,0.22)] transition hover:bg-[#e76242]"
            >
              <span>料金について相談する</span>
              <span aria-hidden>→</span>
            </Link>
            <p className="relative mt-4 text-center text-[12px] font-semibold leading-relaxed text-fg-mute">
              ご予算に合わせた組み合わせ相談も可能です。
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-line bg-bg-elev p-7 shadow-[0_24px_80px_rgba(54,40,24,0.06)] md:p-9">
            <p className="text-[13px] font-black text-fg">
              料金に含まれること
            </p>
            <ul className="mt-5 grid gap-3 text-[14px] font-semibold text-fg-soft md:grid-cols-2">
              {includes.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>

            {addOns && addOns.length > 0 && (
              <div className="mt-8 rounded-[1.25rem] border border-accent/40 bg-accent/5 p-5">
                <p className="text-[12px] font-black text-accent">
                  オプション
                </p>
                <ul className="mt-4 space-y-3 text-[13px] text-fg md:text-[14px]">
                  {addOns.map((item) => (
                    <li key={item.label} className="flex items-start justify-between gap-4">
                      <span>{item.label}</span>
                      <span className="shrink-0 font-black text-accent">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {notIncluded && notIncluded.length > 0 && (
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-[12px] font-black text-fg-mute">
                  別途費用・対象外
                </p>
                <ul className="mt-4 space-y-2 text-[13px] font-semibold leading-relaxed text-fg-mute">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export type FAQItem = { q: string; a: string };

export function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  return (
    <section className="bg-bg-alt py-18 md:py-24">
      <div className="container-mod max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="よくあるご質問" />

        <dl className="mt-10 space-y-3">
          {faqs.map(({ q, a }, index) => (
            <details
              key={q}
              className="rounded-[1.35rem] border border-line bg-bg-elev p-5 shadow-[0_18px_60px_hsl(var(--fg)/0.04)] md:p-6"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="flex items-start gap-4 text-[14px] font-black leading-snug text-fg md:text-[16px]">
                  <span className="text-accent">Q.</span>
                  {q}
                </span>
                <span className="faq-icon mt-1 select-none text-[20px] font-black text-accent">
                  +
                </span>
              </summary>
              <p className="mt-4 pl-6 text-[14px] font-semibold leading-[1.9] text-fg-soft md:text-[15px]">
                {a}
              </p>
            </details>
          ))}
        </dl>

        <ServiceCTA className="mt-10" text="不安な点を相談する" />
      </div>
    </section>
  );
}

type OtherService = {
  slug: "lp" | "line" | "meo" | "sns";
  title: string;
  body: string;
  image: string;
};

export function NextStepSection({
  current,
}: {
  current: "lp" | "line" | "meo" | "sns";
}) {
  const services: Record<OtherService["slug"], OtherService> = {
    lp: {
      slug: "lp",
      title: "LP 制作",
      body: "申し込みを生む販売ページを整えます。",
      image: "/lp/service-lp-rich-v2.png",
    },
    line: {
      slug: "line",
      title: "LINE 公式構築",
      body: "再来店と配信の導線を仕組み化します。",
      image: "/lp/service-line-rich-v2.png",
    },
    meo: {
      slug: "meo",
      title: "Googleマップ整備",
      body: "地図検索で見つけてもらいやすい状態を整えます。",
      image: "/lp/service-meo-rich-v2.png",
    },
    sns: {
      slug: "sns",
      title: "SNS 運用",
      body: "ブランドの見え方を継続的に整えます。",
      image: "/lp/service-sns-rich-v2.png",
    },
  };
  const others = Object.values(services).filter((service) => service.slug !== current);

  return (
    <section className="bg-bg py-18 md:py-24">
      <div className="container-mod max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#fff8ee] p-7 text-fg shadow-[0_30px_100px_rgba(36,124,105,0.12)] md:p-11">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#fff8ee_0%,#f4fff9_56%,#fff4ef_100%)]" />
          <Image
            src="/lp/texture-vellum.png"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none object-cover opacity-[0.16]"
          />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 text-[28px] font-black leading-[1.35] text-fg md:text-[42px]">
                このサービスが合うか、
                <br />
                まずは無料で確認できます。
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] font-semibold leading-[1.9] text-fg-soft">
                いきなり申し込みでなくて大丈夫です。今の状態を見ながら、必要な施策と優先順位を一緒に整理します。
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff7a59] px-8 py-4 text-[14px] font-black text-white shadow-[0_18px_44px_rgba(255,122,89,0.22)] transition hover:bg-[#e76242]"
            >
              <span>無料相談する</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-center text-[12px] font-black uppercase tracking-[0.18em] text-fg-mute">
            Other Services
          </p>
          <h2 className="mt-3 text-center text-[28px] font-black text-fg md:text-[38px]">
            ほかの支援も組み合わせできます
          </h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {others.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block overflow-hidden rounded-[1.35rem] border border-line bg-bg-elev p-2 shadow-[0_18px_64px_hsl(var(--fg)/0.05)] transition hover:-translate-y-1 hover:border-line-strong"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-bg-sunken">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[16px] font-black text-fg">{service.title}</h3>
                    <p className="mt-2 text-[13px] font-semibold leading-[1.75] text-fg-soft">
                      {service.body}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-[32px] font-black leading-[1.25] md:text-[46px] ${dark ? "text-bg" : "text-fg"}`}>
        {title}
      </h2>
      {body && (
        <p className={`mx-auto mt-4 max-w-3xl text-[15px] font-semibold leading-[1.9] md:text-[17px] ${dark ? "text-bg/78" : "text-fg-soft"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

function ServiceCTA({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 rounded-[1.35rem] border border-[#eadfce] bg-[#fffaf2] px-5 py-5 text-center shadow-[0_16px_50px_rgba(54,40,24,0.06)] md:flex-row ${className}`}>
      <p className="text-[13px] font-bold leading-[1.7] text-fg-soft md:text-[14px]">
        まずは今の状況を見ながら、必要な範囲だけ整理します。
      </p>
      <Link
        href="/#contact"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff7a59] px-6 py-3.5 text-[14px] font-black text-white shadow-[0_16px_38px_rgba(255,122,89,0.22)] transition hover:bg-[#e76242] sm:w-auto"
      >
        <span>{text}</span>
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-accent">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
