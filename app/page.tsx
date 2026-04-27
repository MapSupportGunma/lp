import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <StickyTop />
      <Hero />
      <FoundingOffer />
      <Catalog />
      <Comparison />
      <Flow />
      <Plans />
      <Notes />
      <Address />
      <Footer />
    </>
  );
}

/* ──────────────────────────────────────────────
 * StickyTop — Founding banner + Header (always visible)
 * ────────────────────────────────────────────── */
function StickyTop() {
  return (
    <div className="sticky top-0 z-50">
      <FoundingBanner />
      <Header />
    </div>
  );
}

function FoundingBanner() {
  return (
    <a
      href="#offer"
      className="block border-b border-fg/20 bg-accent text-bg transition hover:bg-fg"
    >
      <div className="container-mod flex flex-col items-center justify-between gap-1 py-2 text-center md:flex-row md:py-2.5 md:text-left">
        <p className="flex flex-wrap items-center justify-center gap-2 text-[11.5px] font-medium md:text-[13px]">
          <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-bg" />
          <span className="font-display tracking-wide">Founding Partners</span>
          <span className="text-bg/85">
            / 立ち上げ期につき<span className="whitespace-nowrap">先着3軒</span>、通常価格の <span className="whitespace-nowrap">40% OFF</span>
          </span>
        </p>
        <p className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-bg/90 md:block">
          詳しく → Offer
        </p>
      </div>
    </a>
  );
}

/* ──────────────────────────────────────────────
 * Header — minimal catalog mark
 * ────────────────────────────────────────────── */
function Header() {
  return (
    <header className="border-b border-line/70 bg-bg/90 backdrop-blur-md">
      <div className="container-mod flex items-center justify-between py-4">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="font-display text-[20px] font-medium leading-none tracking-tight text-fg">
            Mapsupport
          </span>
          <span className="text-[12px] font-medium text-fg-mute">群馬</span>
        </Link>
        <nav className="flex items-center gap-6">
          <a
            href="#offer"
            className="hidden text-[13px] font-medium text-accent transition hover:text-fg md:inline"
          >
            Offer
          </a>
          <a
            href="#catalog"
            className="hidden text-[13px] text-fg-soft transition hover:text-fg md:inline"
          >
            Catalog
          </a>
          <a
            href="#compare"
            className="hidden text-[13px] text-fg-soft transition hover:text-fg md:inline"
          >
            Compare
          </a>
          <a
            href="#flow"
            className="hidden text-[13px] text-fg-soft transition hover:text-fg md:inline"
          >
            Flow
          </a>
          <a
            href="#plans"
            className="hidden text-[13px] text-fg-soft transition hover:text-fg md:inline"
          >
            Plans
          </a>
          <a
            href="#notes"
            className="hidden text-[13px] text-fg-soft transition hover:text-fg md:inline"
          >
            Notes
          </a>
          <Link href="#address" className="btn-primary">
            <span>無料相談</span>
            <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ──────────────────────────────────────────────
 * Hero — masthead + ToC
 * ────────────────────────────────────────────── */
function Hero() {
  const toc = [
    { num: "No. 01", label: "LP 制作", price: "¥30,000", original: "¥50,000" },
    { num: "No. 02", label: "LINE 公式構築", price: "¥18,000", original: "¥30,000" },
    { num: "No. 03", label: "MEO 代行", price: "¥12,000~", original: "¥20,000~" },
    { num: "No. 04", label: "SNS 運用", price: "月 ¥18,000~", original: "月 ¥30,000~" },
  ];
  return (
    <section className="relative border-b border-line/70">
      <div className="container-mod py-12 md:py-16 lg:py-20">
        {/* Masthead row */}
        <div className="grid grid-cols-12 items-baseline gap-6 border-b border-line/70 pb-8 md:pb-10">
          <p className="col-span-6 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-4">
            Issue 001 · Spring 2026
          </p>
          <p className="col-span-6 text-right text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-4 md:text-center">
            For local businesses
          </p>
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-4 md:text-right">
            群馬発 · 全国対応
          </p>
        </div>

        {/* Title + image grid */}
        <div className="mt-10 grid grid-cols-12 items-end gap-8 md:mt-14 md:gap-10">
          <div className="col-span-12 min-w-0 md:col-span-7 lg:col-span-8">
            <h1 className="animate-rise font-display text-[44px] font-medium leading-[0.98] tracking-tight text-fg sm:text-[60px] md:text-[76px] lg:text-[88px]">
              <span className="whitespace-nowrap">
                <span>あなたの店</span>
                <span className="font-display-italic text-fg-soft">への、</span>
              </span>
              <br />
              <span className="whitespace-nowrap">
                <span>道しるべ</span>
                <span className="font-display-italic text-accent">を。</span>
              </span>
            </h1>
            <p className="animate-rise-1 mt-7 max-w-xl text-pretty text-[15px] leading-[1.7] text-fg-soft md:text-[17px]">
              個人サロン・地域事業者のマーケティング支援。
              <br className="md:hidden" />
              <span className="whitespace-nowrap">LP・LINE・MEO・SNS</span>
              {" "}をひとつの窓口で。
            </p>
          </div>

          <div className="animate-rise-1 col-span-12 min-w-0 md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/lp/hero-main.png"
                alt="作業風景"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Inside / ToC */}
        <div className="mt-12 grid grid-cols-12 gap-6 border-t border-line/70 pt-8 md:mt-16 md:gap-10 md:pt-10">
          <div className="col-span-12 md:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute">
              Inside this issue
            </p>
            <p className="mt-3 font-display text-[15px] italic text-fg-soft">
              4つのサービスと、3つの料金プラン。
            </p>
          </div>
          <ul className="col-span-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line/80 bg-line md:col-span-9 md:grid-cols-2">
            {toc.map((t) => (
              <li key={t.num}>
                <a
                  href={`#${t.num.toLowerCase().replace(/\W+/g, "-")}`}
                  className="flex items-baseline justify-between bg-bg-elev px-5 py-4 transition hover:bg-bg"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="section-num text-[12px] text-fg-mute">
                      {t.num}
                    </span>
                    <span className="text-[14px] font-medium text-fg md:text-[15px]">
                      {t.label}
                    </span>
                  </span>
                  <span className="flex items-baseline gap-2">
                    <span className="text-[11px] text-fg-faint line-through">
                      {t.original}
                    </span>
                    <span className="font-display text-[14px] tracking-tight text-accent md:text-[15px]">
                      {t.price}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Primary CTA row */}
        <div className="animate-rise-2 mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-line/70 pt-8 md:mt-14">
          <p className="text-[13px] text-fg-mute">
            初回は <span className="text-fg">30分の無料相談</span> から。
          </p>
          <div className="flex items-center gap-3">
            <Link href="#address" className="btn-primary">
              <span>無料相談を申し込む</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Founding Offer — limited-time launch pricing
 * ────────────────────────────────────────────── */
function FoundingOffer() {
  return (
    <section
      id="offer"
      className="relative border-b border-line/70 bg-fg py-20 text-bg md:py-28"
    >
      <div className="container-mod max-w-6xl">
        <div className="grid grid-cols-12 items-baseline gap-6 border-b border-bg/15 pb-6">
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-bg/60 md:col-span-3">
            01 / Founding Offer
          </p>
          <h2 className="col-span-12 font-display text-[32px] font-medium leading-[1.1] tracking-tight md:col-span-9 md:text-[44px] lg:text-[56px]">
            立ち上げ期につき、
            <br className="md:hidden" />
            <span className="text-bg/70">特別価格でお迎えしています。</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 py-10 md:gap-10 md:py-14">
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-[20px] leading-[1.7] tracking-tight md:text-[22px]">
              2026年4月、群馬大学医学部の学生事業として立ち上げました。
              <span className="text-bg/65">
                公開できる事例はまだありません。
              </span>
              だからこそ、第一歩を一緒に踏み出してくださる
              <span className="font-display-italic text-accent">
                初期パートナー
              </span>
              さまを、通常価格の <span className="text-accent">40% OFF</span>{" "}
              でお迎えしています。
            </p>

            <ul className="mt-8 space-y-3 border-t border-bg/15 pt-6 text-[14px] leading-[1.85] text-bg/85 md:text-[15px]">
              <li className="flex gap-3">
                <span className="font-display text-accent">·</span>
                <span>
                  全サービス・全パッケージで{" "}
                  <span className="font-medium text-bg">通常価格の 40% OFF</span>。
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-accent">·</span>
                <span>
                  <span className="font-medium text-bg">
                    永年同価格保証
                  </span>
                  。ご契約継続中、価格を引き上げません。
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-accent">·</span>
                <span>
                  納品後、当社LP内に事例として掲載させていただいた場合、
                  <span className="font-medium text-bg">追加で10% OFF</span>。
                </span>
              </li>
            </ul>

            <p className="mt-8 max-w-xl text-[13px] leading-[1.85] text-bg/55">
              実績のあるベテランをお求めの方には、本サービスはお勧めしません。
              立ち上げ期の若い事業と、共に育てていただける方を募集しています。
            </p>
          </div>

          <aside className="col-span-12 md:col-span-5">
            <div className="rounded-sm border border-bg/20 p-6 md:p-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bg/60">
                Limited slots
              </p>
              <p className="mt-3 font-display text-[64px] font-medium leading-none tracking-tight md:text-[88px]">
                3<span className="text-[28px] text-bg/60 md:text-[36px]">軒</span>
              </p>
              <p className="mt-3 text-[13px] text-bg/75">
                先着・お申込み順
              </p>

              <div className="mt-6 border-t border-bg/15 pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bg/60">
                  Application deadline
                </p>
                <p className="mt-3 font-display text-[28px] font-medium leading-tight tracking-tight md:text-[36px]">
                  2026年6月末日
                </p>
                <p className="mt-2 text-[13px] text-bg/75">
                  または 3軒に達し次第
                </p>
              </div>

              <a
                href="#address"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-3 text-[14px] font-medium text-bg transition hover:bg-bg hover:text-fg"
              >
                <span>初期パートナーに応募する</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </aside>
        </div>

        <p className="border-t border-bg/15 pt-6 text-[12px] text-bg/55">
          ※ 立ち上げ期価格は本サイト掲載中のみ有効。期間または軒数到達後は通常価格に戻ります。
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Catalog — service entries
 * ────────────────────────────────────────────── */
function Catalog() {
  const items = [
    {
      num: "No. 01",
      heading: "LP 制作",
      caption: "新規のお客さまに渡す入口",
      image: "/lp/service-lp.png",
      body: "1ページ完結の高品質LP を 3日 で。レスポンシブ対応・お問い合わせフォーム1つ・修正2回まで含む。",
      specs: [
        ["納期", "3日"],
        ["立ち上げ期価格", "¥30,000(通常 ¥50,000)"],
        ["含む", "LP / フォーム / ドメイン設定"],
        ["対応", "PC + スマホ"],
      ],
    },
    {
      num: "No. 02",
      heading: "LINE 公式構築",
      caption: "再来店の道を、滑らかに",
      image: "/lp/service-line.png",
      body: "LINE 公式アカウントの基本設定・リッチメニュー設計・あいさつメッセージ・友だち追加導線まで一括で。",
      specs: [
        ["納期", "1週間"],
        ["立ち上げ期価格", "¥18,000(通常 ¥30,000)"],
        ["含む", "アカウント設定 / リッチメニュー / 自動化"],
        ["運用", "月¥9,000 から(別契約)"],
      ],
    },
    {
      num: "No. 03",
      heading: "MEO 代行",
      caption: "Googleマップから、店までの最短ルート",
      image: "/lp/service-meo.png",
      body: "Googleビジネスプロフィール整備・口コミ返信・週次の投稿運用までを継続代行。",
      specs: [
        ["着手", "¥12,000(通常 ¥20,000)"],
        ["月額", "¥9,000 から(通常 ¥15,000)"],
        ["含む", "口コミ返信 / 週次投稿 / 月次レポート"],
        ["想定効果", "Googleマップ経由の流入"],
      ],
    },
    {
      num: "No. 04",
      heading: "SNS 運用",
      caption: "事業の世界観を、毎週、編む",
      image: "/lp/service-sns.png",
      body: "Instagram を中心に、事業の世界観に合わせた投稿企画・画像作成・キャプション執筆を継続代行。",
      specs: [
        ["月額", "¥18,000 から(通常 ¥30,000)"],
        ["内容", "投稿企画 / 画像 / キャプション"],
        ["リール", "30秒以内 / 月数本まで"],
        ["対象", "Instagram メイン"],
      ],
    },
  ];
  return (
    <section id="catalog" className="border-b border-line/70 py-20 md:py-28">
      <div className="container-mod">
        <div className="grid grid-cols-12 items-baseline gap-6 border-b border-line/70 pb-6">
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-3">
            02 / Catalog
          </p>
          <h2 className="col-span-12 font-display text-[28px] font-medium tracking-tight text-fg md:col-span-9 md:text-[36px]">
            4つのサービス。
            <br className="md:hidden" />
            <span className="text-fg-soft">単品でも、組み合わせても。</span>
          </h2>
        </div>

        <div className="space-y-0">
          {items.map((it, i) => {
            const id = it.num.toLowerCase().replace(/\W+/g, "-");
            const reversed = i % 2 === 1;
            return (
              <article
                key={it.num}
                id={id}
                className="grid grid-cols-12 gap-6 border-b border-line/70 py-12 md:gap-10 md:py-16"
              >
                <div className={`col-span-12 md:col-span-5 ${reversed ? "md:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line/70">
                    <Image
                      src={it.image}
                      alt={it.heading}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="flex items-baseline gap-4">
                    <span className="section-num text-[13px] font-medium text-accent">
                      {it.num}
                    </span>
                    <span className="font-display text-[12px] italic uppercase tracking-[0.2em] text-fg-mute">
                      {it.caption}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-[36px] font-medium leading-[1.05] tracking-tight text-fg md:text-[48px]">
                    {it.heading}
                  </h3>
                  <p className="mt-5 max-w-xl text-[15px] leading-[1.85] text-fg-soft md:text-[16px]">
                    {it.body}
                  </p>
                  <dl className="mt-7 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                    {it.specs.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-4 border-b border-line/70 py-2.5 text-[13px] md:text-[14px]"
                      >
                        <dt className="text-fg-mute">{k}</dt>
                        <dd className="text-right font-medium text-fg">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Comparison — vs other options
 * ────────────────────────────────────────────── */
function Comparison() {
  const cols = [
    { mark: "大手代理店", note: "総合代理店・大手制作会社" },
    { mark: "HP制作会社", note: "地場の Web 制作会社" },
    { mark: "フリーランス", note: "個人受注の制作者" },
    { mark: "Mapsupport", note: "当社・立ち上げ期", featured: true },
  ];
  const rows: Array<[string, string[]]> = [
    [
      "LP制作費用",
      ["¥500,000〜", "¥200,000〜", "¥50,000〜150,000", "¥30,000(立上期)"],
    ],
    [
      "納期(LP)",
      ["1〜2ヶ月", "1〜2ヶ月", "2〜4週間", "最短3日"],
    ],
    [
      "LP以外の対応",
      ["◎ 全領域", "△ 別業者連携", "△ 別契約", "◎ 1窓口で全部"],
    ],
    [
      "個人・小規模対応",
      ["× 対応外", "△ 案件次第", "○ 可", "◎ 専門"],
    ],
    [
      "連絡対応",
      ["△ 担当経由", "○ 営業窓口", "△ 途絶リスク", "◎ 直通"],
    ],
  ];
  return (
    <section id="compare" className="border-b border-line/70 py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="grid grid-cols-12 items-baseline gap-6 border-b border-line/70 pb-6">
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-3">
            03 / Comparison
          </p>
          <h2 className="col-span-12 font-display text-[28px] font-medium tracking-tight text-fg md:col-span-9 md:text-[36px]">
            他の選択肢との違い。
            <br className="md:hidden" />
            <span className="text-fg-soft">客観的にお比べください。</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden rounded-sm border border-line">
            {/* Header row */}
            <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] divide-x divide-line border-b border-line bg-bg-sunken/60">
              <div className="px-5 py-4 text-[11px] uppercase tracking-[0.2em] text-fg-mute">
                項目
              </div>
              {cols.map((c) => (
                <div
                  key={c.mark}
                  className={`px-3 py-4 text-center md:px-5 ${
                    c.featured ? "bg-accent text-bg" : "text-fg"
                  }`}
                >
                  <p className="font-display text-[15px] font-medium tracking-tight md:text-[17px]">
                    {c.mark}
                  </p>
                  <p
                    className={`mt-1 text-[10px] tracking-wide md:text-[11px] ${
                      c.featured ? "text-bg/80" : "text-fg-mute"
                    }`}
                  >
                    {c.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Body rows */}
            {rows.map(([label, vals]) => (
              <div
                key={label}
                className="grid grid-cols-[1.4fr_repeat(4,1fr)] divide-x divide-line border-b border-line bg-bg-elev last:border-b-0"
              >
                <div className="px-5 py-4 text-[13px] text-fg md:text-[14px]">
                  {label}
                </div>
                {vals.map((v, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center px-3 py-4 text-center text-[12px] md:px-5 md:text-[13px] ${
                      cols[i].featured
                        ? "font-medium text-accent"
                        : "text-fg-soft"
                    }`}
                  >
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-6 space-y-1 text-[12px] text-fg-mute">
          <li>※ 他社の価格・納期は、各業界の公開情報をもとにした一般的な目安です。実際の見積もりは個別に異なります。</li>
          <li>※ 当社「立上期価格」は先着3軒・2026年6月末日まで(早期到達次第終了)。</li>
        </ul>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Flow — 5 steps from consultation to delivery
 * ────────────────────────────────────────────── */
function Flow() {
  const steps = [
    {
      no: "01",
      title: "無料相談",
      duration: "最短当日〜",
      body: "Zoom等のオンラインで30分。事業の状況・お悩み・目指したい方向を伺います。この時点では費用は一切かかりません。",
    },
    {
      no: "02",
      title: "お見積・ご契約",
      duration: "最短1日〜",
      body: "ご相談内容をもとに、お見積書とご提案書をお送りします。ご納得いただいてからのご契約となります。",
    },
    {
      no: "03",
      title: "ヒアリング",
      duration: "最短1日〜",
      body: "Googleフォームと打合せで、事業の世界観・お客さま像・盛り込みたい要素を細部まで詰めていきます。",
    },
    {
      no: "04",
      title: "制作",
      duration: "最短3日〜",
      body: "AI支援の開発環境を活用し、構成案 → 実装を一気に進めます。LP制作の場合、最短 3日 で初稿が完成します。",
    },
    {
      no: "05",
      title: "ご確認・納品",
      duration: "最短2日〜",
      body: "ご確認 → 修正(2回まで料金内)→ 納品。ドメイン設定や公開作業もこちらでサポートいたします。",
    },
  ];
  return (
    <section id="flow" className="border-b border-line/70 py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="grid grid-cols-12 items-baseline gap-6 border-b border-line/70 pb-6">
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-3">
            04 / Flow
          </p>
          <h2 className="col-span-12 font-display text-[28px] font-medium tracking-tight text-fg md:col-span-9 md:text-[36px]">
            ご相談から納品まで。
            <br className="md:hidden" />
            <span className="text-fg-soft">LP制作なら最短 8日 で運用開始。</span>
          </h2>
        </div>

        <ol className="space-y-0">
          {steps.map((s) => (
            <li
              key={s.no}
              className="grid grid-cols-12 items-start gap-4 border-b border-line/70 py-7 md:gap-8 md:py-8"
            >
              <div className="col-span-2 md:col-span-1">
                <p className="font-display text-[28px] font-medium leading-none tracking-tight text-accent md:text-[40px]">
                  {s.no}
                </p>
              </div>
              <div className="col-span-10 md:col-span-3">
                <p className="font-display text-[18px] font-medium tracking-tight text-fg md:text-[22px]">
                  {s.title}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute">
                  {s.duration}
                </p>
              </div>
              <p className="col-span-12 text-[14px] leading-[1.85] text-fg-soft md:col-span-8 md:text-[15px]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-[12px] text-fg-mute">
          ※ 「最短」は制作キャパシティに余裕がある場合の目安です。混雑時はお見積時にご案内いたします。LINE構築・MEO・SNS の納期は別途ご案内。
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Plans — comparison matrix
 * ────────────────────────────────────────────── */
function Plans() {
  const plans = [
    {
      mark: "Lite",
      initial: "¥48,000",
      initialOriginal: "¥80,000",
      monthly: "—",
      monthlyOriginal: null,
      note: "まずは入り口",
    },
    {
      mark: "Standard",
      initial: "¥60,000",
      initialOriginal: "¥100,000",
      monthly: "¥18,000",
      monthlyOriginal: "¥30,000",
      note: "新規 × リピート × Google",
      featured: true,
    },
    {
      mark: "Full",
      initial: "¥60,000",
      initialOriginal: "¥100,000",
      monthly: "¥36,000",
      monthlyOriginal: "¥60,000",
      note: "全方位、まるごと",
    },
  ];
  const matrix: Array<[string, boolean[]]> = [
    ["LP 制作", [true, true, true]],
    ["LINE 公式構築", [true, true, true]],
    ["MEO 代行", [false, true, true]],
    ["SNS 運用", [false, false, true]],
  ];
  return (
    <section id="plans" className="border-b border-line/70 py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <div className="grid grid-cols-12 items-baseline gap-6 border-b border-line/70 pb-6">
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-3">
            05 / Plans
          </p>
          <h2 className="col-span-12 font-display text-[28px] font-medium tracking-tight text-fg md:col-span-9 md:text-[36px]">
            3つの料金プラン。
            <br className="md:hidden" />
            <span className="text-fg-soft">単品でのご依頼も承ります。</span>
          </h2>
        </div>

        {/* Matrix table */}
        <div className="mt-10 overflow-hidden rounded-sm border border-line">
          {/* Header row */}
          <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] divide-x divide-line border-b border-line bg-bg-sunken/60 text-[12px]">
            <div className="px-5 py-4 text-[11px] uppercase tracking-[0.2em] text-fg-mute">
              Plan
            </div>
            {plans.map((p) => (
              <div
                key={p.mark}
                className={`px-5 py-4 text-center ${
                  p.featured ? "bg-accent text-bg" : "text-fg"
                }`}
              >
                <p className="font-display text-[18px] font-medium tracking-tight">
                  {p.mark}
                </p>
                <p
                  className={`mt-1 font-display text-[11px] italic ${
                    p.featured ? "text-bg/80" : "text-fg-mute"
                  }`}
                >
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          {/* Service rows */}
          {matrix.map(([label, vals]) => (
            <div
              key={label}
              className="grid grid-cols-[1.4fr_repeat(3,1fr)] divide-x divide-line border-b border-line bg-bg-elev"
            >
              <div className="px-5 py-4 text-[14px] text-fg">{label}</div>
              {vals.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-5 py-4 text-[18px]"
                >
                  {v ? (
                    <span className="font-display text-fg">●</span>
                  ) : (
                    <span className="text-fg-faint">—</span>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Initial cost row */}
          <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] divide-x divide-line border-b border-line bg-bg-elev">
            <div className="px-5 py-4 text-[12px] uppercase tracking-[0.2em] text-fg-mute">
              Initial
              <span className="ml-1 text-fg-faint">(立上期)</span>
            </div>
            {plans.map((p) => (
              <div key={p.mark} className="px-5 py-4 text-center">
                {p.initialOriginal && (
                  <p className="text-[11px] text-fg-faint line-through">
                    {p.initialOriginal}
                  </p>
                )}
                <p className="font-display text-[18px] font-medium tracking-tight text-accent md:text-[20px]">
                  {p.initial}
                </p>
              </div>
            ))}
          </div>

          {/* Monthly cost row */}
          <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] divide-x divide-line border-b border-line bg-bg-elev">
            <div className="px-5 py-4 text-[12px] uppercase tracking-[0.2em] text-fg-mute">
              Monthly
              <span className="ml-1 text-fg-faint">(立上期)</span>
            </div>
            {plans.map((p) => (
              <div key={p.mark} className="px-5 py-4 text-center">
                {p.monthlyOriginal && (
                  <p className="text-[11px] text-fg-faint line-through">
                    {p.monthlyOriginal}
                  </p>
                )}
                <p className="font-display text-[18px] font-medium tracking-tight text-accent md:text-[20px]">
                  {p.monthly}
                </p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] divide-x divide-line bg-bg-sunken/40">
            <div className="px-5 py-4 text-[11px] uppercase tracking-[0.2em] text-fg-mute">
              Apply
            </div>
            {plans.map((p) => (
              <div key={p.mark} className="px-3 py-3 text-center">
                <Link
                  href="#address"
                  className={`inline-flex items-center justify-center gap-1 rounded-sm px-3 py-2 text-[12px] transition ${
                    p.featured
                      ? "bg-accent text-bg hover:bg-fg"
                      : "border border-line-strong text-fg hover:bg-fg hover:text-bg"
                  }`}
                >
                  相談する <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Notes about pricing */}
        <ul className="mt-6 space-y-1 text-[12px] text-fg-mute">
          <li>
            <span className="text-accent">※</span>{" "}
            <span className="text-fg">立ち上げ期価格(40% OFF)</span>{" "}
            は先着3軒・2026年6月末日まで。詳細は
            <a href="#offer" className="ml-1 underline-offset-4 hover:underline">
              Founding Offer
            </a>
            。
          </li>
          <li>※ 価格はすべて税抜表示。法人さまの場合は個別見積もり。</li>
          <li>※ Standard / Full は最低契約期間 3ヶ月。</li>
        </ul>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Notes — FAQ + brief about, compact
 * ────────────────────────────────────────────── */
function Notes() {
  const qas = [
    {
      q: "立ち上げ期価格(40% OFF)はいつまで適用されますか?",
      a: "2026年6月末日まで、または先着3軒に達した時点までの、いずれか早いほうです。本サイト掲載中のみ有効で、期間または軒数到達後は通常価格に戻ります。お申込み時点で適用判定いたしますので、お早めにご相談ください。なお、立ち上げ期価格でご契約いただいた方には永年同価格保証(契約継続中の値上げなし)もお付けいたします。",
    },
    {
      q: "サロン以外の業種でも依頼できますか?",
      a: "はい、地域の個人事業者・小規模事業者であれば業種を問わずご相談承ります。具体的には、飲食店・小売・教室・整体・治療院・士業・工房など、お客さまとの接点が必要な事業全般が対象です。「うちの業種でも合うか?」とご不安な場合も、無料相談でお話しいただければご判断材料をお出しします。",
    },
    {
      q: "群馬県外でも依頼できますか?",
      a: "はい、全国対応しております。打合せはZoom等のオンラインで完結しますので、所在地は問いません。屋号に「群馬」と入れているのは、群馬発・群馬大学から始めた事業という意味合いです。",
    },
    {
      q: "なぜこの価格でできるのですか?",
      a: "AI支援の最新開発環境を活用し、従来 3週間 ほどかかった作業を 3日 に短縮しているためです。安さの理由は品質の妥協ではなく、技術で効率化できた分を、価格にそのまま反映しています。",
    },
    {
      q: "契約期間や途中解約はどうなりますか?",
      a: "単品ご依頼(LP制作 / LINE構築)は1回完結のため契約期間はありません。月額契約(MEO / SNS / LINE運用)は最低3ヶ月から、それ以降は月単位で解約可能です(日割り返金なし)。最低期間内でも、特別な事情がある場合はご相談ください。",
    },
    {
      q: "初期費用以外にかかる費用はありますか?",
      a: "原則ありません。ドメイン取得料・サーバー代・LINE公式アカウント有料プラン等の外部サービス費用は別途お客さま負担となりますが、ご契約前にすべてご案内いたします。「あとから追加費用」が出ないよう、ご見積で全体像をお示しします。",
    },
    {
      q: "成果(集客数や売上UP)は保証されますか?",
      a: "申し訳ございませんが、成果保証はいたしかねます。集客や売上は、お客さまの業種・立地・既存の顧客基盤など多くの要素に依存するためです。私どもはお店の世界観を整え、お客さまに見つけていただく動線を整える「土台づくり」を担当します。継続的な改善のお手伝いも可能ですので、長期視点でご一緒できれば幸いです。",
    },
    {
      q: "ロゴや写真撮影はお願いできますか?",
      a: "対応外です。お持ちの素材を活かす方向でご提案するか、必要に応じて撮影できる業者さまをご紹介します。",
    },
    {
      q: "修正は何回までできますか?",
      a: "LP制作の場合、料金内で 2回 まで。3回目以降は1回 ¥10,000(税抜)で承ります。",
    },
    {
      q: "個人事業主との契約に不安があります",
      a: "ご請求書発行・特定商取引法に基づく表記・契約書取り交わしを標準で行っております。ご希望であれば、適格請求書(インボイス)対応もご相談ください。",
    },
  ];
  return (
    <section id="notes" className="border-b border-line/70 py-20 md:py-28">
      <div className="container-mod max-w-5xl">
        <div className="grid grid-cols-12 items-baseline gap-6 border-b border-line/70 pb-6">
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-3">
            06 / Notes
          </p>
          <h2 className="col-span-12 font-display text-[28px] font-medium tracking-tight text-fg md:col-span-9 md:text-[36px]">
            よくあるご質問
          </h2>
        </div>

        <dl className="divide-y divide-line/70">
          {qas.map(({ q, a }, i) => (
            <details key={q} className="group py-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <div className="flex items-start gap-5">
                  <span className="section-num pt-0.5 text-[12px] font-medium text-fg-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-fg md:text-[17px]">
                    {q}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="faq-icon mt-0.5 select-none font-display text-[20px] text-fg-mute"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl pl-11 text-[14px] leading-[1.85] text-fg-soft md:text-[15px]">
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
 * Address — contact, compact
 * ────────────────────────────────────────────── */
function Address() {
  return (
    <section id="address" className="py-20 md:py-28">
      <div className="container-mod max-w-5xl">
        <div className="grid grid-cols-12 items-baseline gap-6 border-b border-line/70 pb-6">
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-mute md:col-span-3">
            07 / Address
          </p>
          <h2 className="col-span-12 font-display text-[28px] font-medium tracking-tight text-fg md:col-span-9 md:text-[36px]">
            ご相談はこちらから。
            <br className="md:hidden" />
            <span className="text-fg-soft">30分のオンライン無料相談。</span>
          </h2>
        </div>

        <ContactForm />

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line/70 pt-6 text-[13px] md:grid-cols-4">
          <div>
            <p className="eyebrow">Origin</p>
            <p className="mt-1 text-fg">群馬県(前橋・高崎)</p>
          </div>
          <div>
            <p className="eyebrow">Service area</p>
            <p className="mt-1 text-fg">群馬全域・全国対応</p>
          </div>
          <div>
            <p className="eyebrow">Hours</p>
            <p className="mt-1 text-fg">24h 受付(メール)</p>
          </div>
          <div>
            <p className="eyebrow">Established</p>
            <p className="mt-1 text-fg">2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * Footer
 * ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="mt-auto border-t border-line/70 py-8">
      <div className="container-mod flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-[16px] font-medium tracking-tight text-fg">
            Mapsupport · 群馬
          </p>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-fg-mute">
            Marketing for local businesses / 群馬発・全国対応
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-fg-mute">
          <Link href="/legal/tokushoho" className="transition hover:text-fg">
            特定商取引法に基づく表記
          </Link>
          <span className="text-fg-faint">·</span>
          <Link href="/legal/privacy" className="transition hover:text-fg">
            プライバシーポリシー
          </Link>
          <span className="text-fg-faint">·</span>
          <span>© 2026 マップサポート群馬</span>
        </div>
      </div>
    </footer>
  );
}
