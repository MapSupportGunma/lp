import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import { StickyTop, SiteFooter } from "./components/SiteChrome";

export default function Home() {
  return (
    <>
      <StickyTop />
      <Hero />
      <IndustryStrip />
      <PainPoints />
      <Services />
      <Process />
      <FoundingOffer />
      <Plans />
      <BottomCTA />
      <Contact />
      <FAQ />
      <SiteFooter />
    </>
  );
}

/* ──────────────────────────────────────────────
 * Hero — Bridge-style: bold sans, photo right, 2 CTAs
 * ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-bg">
      <div className="container-mod py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-12 items-center gap-10 lg:gap-12">
          <div className="col-span-12 min-w-0 lg:col-span-6 xl:col-span-7">
            <h1 className="animate-rise text-[44px] font-bold leading-[1.1] tracking-tight text-fg sm:text-[60px] md:text-[72px] lg:text-[80px]">
              あなたの店を、
              <br />
              選ばれる
              <span className="text-primary">場所</span>
              へ。
            </h1>

            <p className="animate-rise-1 mt-7 text-[18px] font-semibold tracking-tight text-fg md:text-[22px]">
              マーケティング一気通貫支援サービス
            </p>

            <p className="animate-rise-2 mt-5 max-w-xl text-[14px] leading-[1.85] text-fg-soft md:text-[15px]">
              LP制作 / LINE構築 / MEO対策 / SNS運用 まで、
              すべてお任せください。
            </p>

            <div className="animate-rise-3 mt-8 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="btn-primary">
                <span>無料で相談してみる</span>
                <span aria-hidden>→</span>
              </Link>
              <a
                href="mailto:info@gunma-meo.com?subject=マップサポート群馬%20資料請求&body=以下の項目をご記入のうえ、ご送信ください。%0D%0A%0D%0A・お店の名前(ある場合):%0D%0A・業種:%0D%0A・所在地:%0D%0A・ご担当者様お名前:"
                className="btn-secondary"
              >
                <span>資料をダウンロード</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </a>
            </div>

            <p className="animate-rise-4 mt-6 flex items-center gap-2 text-[12px] text-fg-mute md:text-[13px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-primary/70"
                aria-hidden
              >
                <path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z" />
              </svg>
              <span>無理な営業は一切しません。お気軽にご相談ください。</span>
            </p>
          </div>

          <div className="animate-rise-2 col-span-12 min-w-0 lg:col-span-6 xl:col-span-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-md">
              <Image
                src="/lp/hero-workspace.png"
                alt="マップサポート群馬"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Industry Strip — wide audience
 * ────────────────────────────────────────────── */
function IndustryStrip() {
  const industries = [
    { label: "美容サロン", image: "/lp/ind-beauty.png" },
    { label: "ネイル", image: "/lp/ind-nail.png" },
    { label: "整体・治療院", image: "/lp/ind-massage.png" },
    { label: "エステ", image: "/lp/ind-esthetic.png" },
    { label: "飲食店", image: "/lp/ind-restaurant.png" },
    { label: "教室・スクール", image: "/lp/ind-school.png" },
    { label: "士業・コンサル", image: "/lp/ind-shigyo.png" },
  ];
  return (
    <section className="border-t border-line bg-bg-alt py-10 md:py-14">
      <div className="container-mod max-w-6xl">
        <p className="text-center text-[12px] font-medium text-fg-mute md:text-[13px]">
          得意領域 / 対応可能な業種
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-10">
          {industries.map((it) => (
            <li
              key={it.label}
              className="flex flex-col items-center gap-2.5 text-center"
            >
              <div className="relative h-14 w-14 overflow-hidden md:h-16 md:w-16">
                <Image
                  src={it.image}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <span className="text-[12px] font-medium text-fg-soft md:text-[13px]">
                {it.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* SVG icon set (monoline) */
function Icon({ name }: { name: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
  };
  switch (name) {
    case "scissors":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
          <path d="M19 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      );
    case "shield-check":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "utensils":
      return (
        <svg {...common}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" />
          <path d="M21 22v-7" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12c1 1 2 2 2 4h4c0-2 1-3 2-4a7 7 0 0 0-4-12z" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
          <line x1="3" y1="20" x2="21" y2="20" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "message":
      return (
        <svg {...common}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "edit":
      return (
        <svg {...common}>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    default:
      return <span>•</span>;
  }
}

/* ──────────────────────────────────────────────
 * Pain Points — 5 cards
 * ────────────────────────────────────────────── */
function PainPoints() {
  const pains = [
    { image: "/lp/pain-sns.png", title: "SNSを頑張っているのに集客や売上につながらない" },
    { image: "/lp/pain-overwhelm.png", title: "何から手をつければいいのか分からず時間だけが過ぎていく" },
    { image: "/lp/pain-website.png", title: "広告を出してみたけど効果がよく分からない・費用対効果が不安" },
    { image: "/lp/pain-line.png", title: "LPを作ったけど問い合わせや購入につながらない" },
    { image: "/lp/pain-map.png", title: "分析や改善の方法が分からず、いつも場当たり的になってしまう" },
  ];
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="text-center">
          <h2 className="title-underline text-[26px] font-bold leading-[1.3] tracking-tight text-fg md:text-[36px] lg:text-[40px]">
            こんなお悩み、ありませんか?
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {pains.map((p) => (
            <article
              key={p.title}
              className="card flex flex-col items-center gap-4 p-5 text-center md:p-6"
            >
              <div className="relative aspect-square w-full max-w-[180px] overflow-hidden">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
              <p className="text-[13px] font-medium leading-[1.7] text-fg md:text-[14px]">
                {p.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Process — 5 steps in dark navy section
 * ────────────────────────────────────────────── */
function Process() {
  const steps = [
    { image: "/lp/process-01-listen.png", title: "ヒアリング・戦略設計", body: "事業の強みや課題を整理し、最適な戦略を設計します" },
    { image: "/lp/process-02-design.png", title: "集客導線設計", body: "ユーザーの行動を設計し、成果につながる導線を構築" },
    { image: "/lp/process-03-build.png", title: "制作・運用", body: "LP制作 / SNS運用 / LINE構築 / MEO対策などを実行" },
    { image: "/lp/process-04-analyze.png", title: "分析・改善", body: "データをもとに効果を分析し、改善施策を継続的に実施" },
    { image: "/lp/process-05-grow.png", title: "成果の最大化", body: "継続的な改善で売上・集客の最大化を目指します" },
  ];
  return (
    <section id="process" className="bg-bg-deep py-20 text-bg md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.3] tracking-tight md:text-[36px] lg:text-[40px]">
            マップサポート群馬の一気通貫支援
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-[1.85] text-bg/75 md:text-[15px]">
            戦略設計から実行・改善まで、すべてワンストップでサポートします。
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-8 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative flex flex-col items-center text-center"
            >
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-1.5rem] top-12 hidden text-[24px] text-bg/30 lg:block"
                >
                  →
                </span>
              )}
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-bg p-3 md:h-32 md:w-32 md:p-4">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-contain p-2"
                />
              </div>
              <h3 className="mt-5 text-[15px] font-bold leading-snug md:text-[17px]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[200px] text-[12px] leading-[1.7] text-bg/70 md:text-[13px]">
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
 * Services — 4 services in 2x2 + About-us card on right
 * ────────────────────────────────────────────── */
function Services() {
  const services = [
    {
      slug: "lp",
      icon: "monitor",
      title: "LP 制作",
      body: "成果につながるLPを、デザインから構成・コピーライティングまで一貫して制作します。",
    },
    {
      slug: "line",
      icon: "message",
      title: "LINE 公式構築・運用",
      body: "アカウント設計から月次の配信代行まで、再来店を仕組み化する継続支援。",
    },
    {
      slug: "meo",
      icon: "map-pin",
      title: "MEO 代行",
      body: "Googleビジネスプロフィール整備・口コミ返信・隔週投稿で地域検索を強化します。",
    },
    {
      slug: "sns",
      icon: "edit",
      title: "SNS 運用",
      body: "Instagram を中心とした投稿企画・画像制作・キャプション執筆を継続代行します。",
    },
  ];

  return (
    <section id="services" className="border-t border-line py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.3] tracking-tight text-fg md:text-[36px] lg:text-[40px]">
            支援サービス一覧
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-6 md:gap-8">
          {/* 4 services 2x2 left */}
          <div className="col-span-12 grid grid-cols-1 gap-5 md:col-span-7 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card group flex flex-col gap-4 p-6 transition md:p-7"
              >
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-soft text-primary"
                >
                  <Icon name={s.icon} />
                </span>
                <h3 className="text-[16px] font-bold tracking-tight text-fg md:text-[17px]">
                  {s.title}
                </h3>
                <p className="text-[12px] leading-[1.75] text-fg-soft md:text-[13px]">
                  {s.body}
                </p>
                <div
                  aria-hidden
                  className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-full border-[1.5px] border-primary px-5 py-2 text-[12px] font-semibold text-primary transition group-hover:bg-primary group-hover:text-bg md:text-[13px]"
                >
                  <span>詳しく見る</span>
                  <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* About-us card right */}
          <aside className="col-span-12 md:col-span-5">
            <div className="card flex h-full flex-col p-6 md:p-7">
              <h3 className="text-[16px] font-bold tracking-tight text-fg md:text-[17px]">
                私たちについて
              </h3>
              <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src="/lp/portrait-spot.png"
                  alt="運営者の机"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-[14px] font-semibold leading-relaxed text-fg md:text-[15px]">
                私たちは、現役の学生事業主です。
              </p>
              <p className="mt-4 text-[12px] leading-[1.85] text-fg-soft md:text-[13px]">
                群馬大学医学部に在籍する学生が、AI支援の最新開発環境を武器に運営しています。「若さ」×「行動力」×「本気」で、お店の成長にコミットします。
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Founding Offer — light section
 * ────────────────────────────────────────────── */
function FoundingOffer() {
  return (
    <section
      id="offer"
      className="border-t border-line bg-bg-alt py-16 md:py-20"
    >
      <div className="container-mod max-w-6xl">
        <div className="card grid grid-cols-12 gap-8 p-8 md:gap-12 md:p-12">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              Founding Partners
            </p>
            <h2 className="mt-4 text-[24px] font-bold leading-[1.3] tracking-tight text-fg md:text-[32px]">
              立ち上げ期につき、
              <br className="md:hidden" />
              特別価格でお迎えしています。
            </h2>

            <ul className="mt-7 space-y-3 text-[13px] leading-[1.7] text-fg-soft md:text-[14px]">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-bg"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span><span className="font-semibold text-fg">先着 3軒限定</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-bg"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>通常価格の <span className="font-semibold text-fg">40% OFF</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-bg"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>制作後も <span className="font-semibold text-fg">永年同価格</span> でサポート</span>
              </li>
            </ul>
          </div>

          <aside className="col-span-12 flex flex-col justify-center border-t border-line pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-[64px] font-bold leading-none tracking-tight text-fg md:text-[88px]">
              3<span className="text-[24px] text-fg-mute md:text-[32px]">軒</span>
            </p>
            <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-fg-mute">
              2026年6月末日まで
            </p>
            <p className="mt-5 inline-block self-start border-b-2 border-accent pb-1 text-[14px] font-semibold text-fg md:text-[15px]">
              永年同価格保証
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Plans — option-style menu (pick any service, combine freely)
 * ────────────────────────────────────────────── */
type ServicePricing =
  | {
      kind: "oneTime";
      originalInitial: string;
      currentInitial: string;
    }
  | {
      kind: "subscription";
      originalInitial?: string;
      originalMonthly: string;
      currentInitial?: string;
      currentMonthly: string;
    };

type ServiceOption = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  pricing: ServicePricing;
  highlights: string[];
  href: string;
};

function Plans() {
  const services: ServiceOption[] = [
    {
      slug: "lp",
      number: "01",
      title: "LP 制作",
      tagline: "申し込みを生む 1枚の販売ページ",
      pricing: {
        kind: "oneTime",
        originalInitial: "¥50,000",
        currentInitial: "¥30,000",
      },
      highlights: ["最短3日納品", "修正2回まで込み", "スマホ最適化"],
      href: "/services/lp",
    },
    {
      slug: "line",
      number: "02",
      title: "LINE 公式 構築・運用",
      tagline: "再来店を仕組み化する継続支援",
      pricing: {
        kind: "subscription",
        originalInitial: "¥30,000",
        originalMonthly: "¥15,000",
        currentInitial: "¥18,000",
        currentMonthly: "¥9,000",
      },
      highlights: ["アカウント設計+リッチメニュー", "月4本の配信代行", "開封率レポート"],
      href: "/services/line",
    },
    {
      slug: "meo",
      number: "03",
      title: "MEO 代行",
      tagline: "Googleマップ「業種+地域」上位を継続",
      pricing: {
        kind: "subscription",
        originalInitial: "¥20,000",
        originalMonthly: "¥15,000",
        currentInitial: "¥12,000",
        currentMonthly: "¥9,000",
      },
      highlights: ["プロフィール最適化", "口コミ返信代行", "月2本の投稿運用"],
      href: "/services/meo",
    },
    {
      slug: "sns",
      number: "04",
      title: "SNS 運用",
      tagline: "Instagram でブランドを育てる",
      pricing: {
        kind: "subscription",
        originalMonthly: "¥30,000",
        currentMonthly: "¥18,000",
      },
      highlights: ["月4本の投稿企画・制作", "リール 月2本", "月次分析レポート"],
      href: "/services/sns",
    },
  ];

  const bundles = [
    {
      mark: "ライト",
      label: "LP + LINE",
      detail: "まず1枚と再来店の仕組みを",
      saving: "立ち上げ期 計 ¥48,000(初期) + ¥9,000 / 月",
    },
    {
      mark: "スタンダード",
      label: "LP + LINE + MEO",
      detail: "新規獲得と再来店を両輪で",
      saving: "立ち上げ期 計 ¥60,000(初期) + ¥18,000 / 月",
      featured: true,
    },
    {
      mark: "フル",
      label: "LP + LINE + MEO + SNS",
      detail: "集客のすべてを一気通貫で",
      saving: "立ち上げ期 計 ¥60,000(初期) + ¥36,000 / 月",
    },
  ];

  return (
    <section id="plans" className="border-t border-line py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.3] tracking-tight text-fg md:text-[36px] lg:text-[40px]">
            料金プラン
          </h2>
          <p className="mt-5 text-[14px] leading-[1.85] text-fg-soft md:text-[15px]">
            必要なサービスを<span className="font-bold text-fg">1つから</span>選べます。
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <span className="font-bold text-fg">組み合わせは自由</span>です。
          </p>
          <p className="mt-4 inline-flex items-center bg-accent px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-bg md:text-[12px]">
            FOUNDING PARTNERS / 立ち上げ期 先着3軒 限定 40% OFF
          </p>
        </div>

        {/* Service options grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((s) => (
            <ServiceOptionCard key={s.slug} service={s} />
          ))}
        </div>

        {/* Recommended bundles */}
        <div className="mt-16 border-t border-line pt-12">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-fg-mute md:text-[12px]">
              よく組み合わされるプラン例
            </p>
            <h3 className="mt-3 text-[18px] font-bold tracking-tight text-fg md:text-[22px]">
              迷ったら、この組み合わせから
            </h3>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {bundles.map((b) => (
              <div
                key={b.mark}
                className={`relative flex flex-col gap-3 rounded-md border p-6 ${
                  b.featured
                    ? "border-primary bg-bg-elev shadow-[0_8px_28px_hsl(var(--primary)/0.10)]"
                    : "border-line bg-bg-elev"
                }`}
              >
                {b.featured && (
                  <p className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-bg">
                    おすすめ
                  </p>
                )}
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-fg-mute">
                  {b.mark}
                </p>
                <p className="text-[16px] font-bold tracking-tight text-fg md:text-[17px]">
                  {b.label}
                </p>
                <p className="text-[12px] leading-[1.7] text-fg-soft md:text-[13px]">
                  {b.detail}
                </p>
                <p className="mt-auto text-[12px] font-medium text-primary md:text-[13px]">
                  {b.saving}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-[11px] text-fg-mute md:text-[12px]">
          ※ 料金はすべて税抜表示。立ち上げ期価格は先着3軒限定。ご予算・ご希望に合わせて自由に組み合わせ可能です。
        </p>
      </div>
    </section>
  );
}

function ServiceOptionCard({ service }: { service: ServiceOption }) {
  const { pricing } = service;
  return (
    <article className="group relative flex flex-col gap-5 rounded-md border border-line bg-bg-elev p-6 transition hover:border-primary md:p-7">
      {/* Header: number + title */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-bold tracking-[0.18em] text-primary">
            OPTION {service.number}
          </p>
          <h3 className="mt-1.5 text-[18px] font-bold tracking-tight text-fg md:text-[20px]">
            {service.title}
          </h3>
          <p className="mt-1 text-[12px] leading-[1.7] text-fg-soft md:text-[13px]">
            {service.tagline}
          </p>
        </div>
        <span className="inline-flex items-center bg-accent/15 px-2 py-1 text-[10px] font-bold tracking-[0.08em] text-accent">
          40% OFF
        </span>
      </div>

      {/* Pricing */}
      <div className="border-y border-line py-4">
        {pricing.kind === "oneTime" ? (
          <div className="text-center">
            <p className="text-[10px] font-medium tracking-[0.08em] text-fg-mute">一括(税抜)</p>
            <p className="mt-1 text-[11px] line-through text-fg-mute">
              通常 {pricing.originalInitial}
            </p>
            <p className="mt-0.5 text-[30px] font-bold leading-none tracking-tight text-fg md:text-[34px]">
              {pricing.currentInitial}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 divide-x divide-line">
            <div className="px-2 text-center">
              <p className="text-[10px] font-medium tracking-[0.08em] text-fg-mute">初期費用</p>
              {pricing.currentInitial ? (
                <>
                  {pricing.originalInitial && (
                    <p className="mt-1 text-[10px] line-through text-fg-mute">
                      {pricing.originalInitial}
                    </p>
                  )}
                  <p className="mt-0.5 text-[22px] font-bold leading-none tracking-tight text-fg md:text-[24px]">
                    {pricing.currentInitial}
                  </p>
                </>
              ) : (
                <p className="mt-2 text-[16px] font-medium text-fg-mute md:text-[17px]">なし</p>
              )}
            </div>
            <div className="px-2 text-center">
              <p className="text-[10px] font-medium tracking-[0.08em] text-fg-mute">月額</p>
              <p className="mt-1 text-[10px] line-through text-fg-mute">
                {pricing.originalMonthly}
              </p>
              <p className="mt-0.5 text-[22px] font-bold leading-none tracking-tight text-fg md:text-[24px]">
                {pricing.currentMonthly}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Highlights */}
      <ul className="flex-1 space-y-2 text-[12px] md:text-[13px]">
        {service.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-fg-soft">
            <span aria-hidden className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line bg-bg px-5 py-2 text-[12px] font-medium text-fg-soft transition hover:border-primary hover:text-primary md:text-[13px]"
      >
        <span>このサービスを詳しく</span>
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

/* ──────────────────────────────────────────────
 * Bottom CTA — light section with 3 trust signals
 * ────────────────────────────────────────────── */
function BottomCTA() {
  const trusts = [
    { icon: "message", label: "相談無料" },
    { icon: "shield-check", label: "無理な営業なし" },
    { icon: "monitor", label: "オンライン対応可能" },
  ];
  return (
    <section className="border-t border-line bg-bg-alt py-16 md:py-20">
      <div className="container-mod max-w-6xl">
        <div className="grid grid-cols-12 items-center gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-[24px] font-bold leading-[1.3] tracking-tight text-fg md:text-[32px] lg:text-[36px]">
              まずは無料相談から始めてみませんか?
            </h2>
            <p className="mt-4 text-[13px] leading-[1.85] text-fg-soft md:text-[14px]">
              現状の課題整理から、最適な解決策をご提案します。
            </p>
            <Link
              href="#contact"
              className="btn-primary mt-7"
            >
              <span>無料で相談してみる</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <ul className="col-span-12 grid grid-cols-3 gap-4 md:col-span-5">
            {trusts.map((t) => (
              <li key={t.label} className="flex flex-col items-center gap-3 text-center">
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-bg text-primary md:h-14 md:w-14"
                >
                  <Icon name={t.icon} />
                </span>
                <span className="text-[11px] font-medium leading-tight text-fg-soft md:text-[12px]">
                  {t.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Contact — left invitation + right form
 * ────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.3] tracking-tight text-fg md:text-[36px] lg:text-[40px]">
            無料相談はこちら
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-[1.85] text-fg-soft md:text-[14px]">
            Zoom 等のオンラインで30分。お気軽にお話を伺います。
          </p>
        </div>
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * FAQ — clean, centered
 * ────────────────────────────────────────────── */
function FAQ() {
  const qas = [
    {
      q: "本当に3日でLPは完成しますか?",
      a: "AI支援の最新開発環境を活用し、従来3週間かかっていた作業を最短3日に短縮しています。ヒアリング後、構成 → 実装 → ご確認 → 修正 までを通常3-5日でお届けします。混雑時はお見積時にご案内します。",
    },
    {
      q: "群馬県外の事業者でも依頼できますか?",
      a: "はい、全国対応しております。打合せはZoom等のオンラインで完結しますので、所在地は問いません。屋号に「群馬」と入れているのは、群馬発・群馬大学から始めた事業という意味合いです。",
    },
    {
      q: "写真や文章の準備は必要ですか?",
      a: "お持ちの素材があれば最大限活かします(スマホ撮影でも充分なクオリティのことが多いです)。撮影のコツや構図のご案内、コピー案のご提案もこちらで行いますので、何もない状態からでもご相談いただけます。",
    },
    {
      q: "制作後の修正や運用サポートはありますか?",
      a: "LP制作の場合、料金内で 2回 まで修正を承ります。3回目以降は1回 ¥10,000(税抜)。月額のLINE運用・MEO代行・SNS運用 をご契約いただければ、継続的なサポート・改善提案も可能です。",
    },
    {
      q: "立ち上げ期価格(40% OFF)はいつまで適用されますか?",
      a: "2026年6月末日まで、または先着3軒に達した時点までの、いずれか早いほうです。期間または軒数到達後は通常価格に戻ります。立ち上げ期価格でご契約いただいた方には永年同価格保証(契約継続中の値上げなし)をお付けします。",
    },
    {
      q: "個人事業主との契約に不安があります",
      a: "ご請求書発行・特定商取引法に基づく表記・契約書取り交わしを標準で行っております。ご希望であれば、適格請求書(インボイス)対応もご相談ください。",
    },
  ];
  return (
    <section id="faq" className="border-t border-line bg-bg-alt py-20 md:py-28">
      <div className="container-mod max-w-4xl">
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.3] tracking-tight text-fg md:text-[36px] lg:text-[40px]">
            よくあるご質問
          </h2>
        </div>

        <dl className="mt-12 space-y-3">
          {qas.map(({ q, a }, i) => (
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
