import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import { StickyTop, SiteFooter } from "./components/SiteChrome";

export default function Home() {
  return (
    <>
      <StickyTop />
      <Hero />
      <PainPoints />
      <CauseSection />
      <Services />
      <WhyUs />
      <WorkSamples />
      <FoundingOffer />
      <Plans />
      <Process />
      <FAQ />
      <BottomCTA />
      <Contact />
      <SiteFooter />
    </>
  );
}

const industries = [
  { label: "美容サロン", image: "/lp/ind-beauty.png" },
  { label: "ネイル", image: "/lp/ind-nail.png" },
  { label: "整体・治療院", image: "/lp/ind-massage.png" },
  { label: "エステ", image: "/lp/ind-esthetic.png" },
  { label: "飲食店", image: "/lp/ind-restaurant.png" },
  { label: "教室・スクール", image: "/lp/ind-school.png" },
  { label: "士業・コンサル", image: "/lp/ind-shigyo.png" },
];

const pains = [
  {
    iconImage: "/lp/icon-problem-sns.png",
    title: "Instagramは更新しているのに",
    body: "予約や問い合わせにつながらない",
  },
  {
    iconImage: "/lp/icon-problem-lp.png",
    title: "HPやLPが古く見えて",
    body: "信頼感や申込みに結びつかない",
  },
  {
    iconImage: "/lp/icon-problem-flow.png",
    title: "Googleマップの情報が",
    body: "整っておらず見つけられにくい",
  },
  {
    iconImage: "/lp/icon-problem-design.png",
    title: "制作会社に頼むには",
    body: "費用が高くて踏み出せない",
  },
  {
    iconImage: "/lp/icon-problem-all.png",
    title: "何か始めたいけれど",
    body: "何から始めるべきか分からない",
  },
];

const servicePillars = [
  {
    icon: "lightbulb",
    iconImage: "/lp/icon-service-strategy.png",
    title: "戦略設計",
    body: "ビジネス理解を深め、最適な戦略と導線を設計します。",
    image: "/lp/work-sample-rich-v2.png",
  },
  {
    icon: "monitor",
    iconImage: "/lp/icon-service-lp.png",
    title: "LP制作",
    body: "成果につながるデザインとコピーで訴求力の高いLPを制作。",
    href: "/services/lp",
    image: "/lp/service-lp-rich-v2.png",
  },
  {
    icon: "map-pin",
    iconImage: "/lp/icon-service-map.png",
    title: "Googleマップ整備",
    body: "地図検索で見つけてもらいやすい状態を整えます。",
    href: "/services/meo",
    image: "/lp/service-meo-rich-v2.png",
  },
  {
    icon: "edit",
    iconImage: "/lp/icon-service-sns.png",
    title: "SNS運用",
    body: "投稿企画・画像制作でブランドの見え方を整えます。",
    href: "/services/sns",
    image: "/lp/service-sns-rich-v2.png",
  },
  {
    icon: "message",
    iconImage: "/lp/icon-service-line.png",
    title: "LINE構築・運用",
    body: "リピート導線を整備し、売上を安定させます。",
    href: "/services/line",
    image: "/lp/service-line-rich-v2.png",
  },
  {
    icon: "chart",
    iconImage: "/lp/icon-service-analysis.png",
    title: "広告・分析改善",
    body: "少額広告の設計や導線改善まで、反応を見ながら整えます。",
    image: "/lp/hero-rich-v2.png",
  },
];

const causeCards = [
  {
    title: "見つけてもらう入口",
    body: "SNS・Googleマップ・広告など、最初に知ってもらう場所が整っていない。",
  },
  {
    title: "信頼してもらうページ",
    body: "LPやHPで魅力・料金・予約方法が伝わらず、比較で離脱されている。",
  },
  {
    title: "予約につなげる導線",
    body: "LINEやフォームへの流れが弱く、見た人が次に何をすればいいか迷っている。",
  },
];

const serviceScopes = [
  {
    area: "LP制作",
    detail: "構成設計、文章作成、デザイン、実装、スマホ対応、問い合わせフォーム",
    caseText: "商品・サービスの申込みを増やしたい",
  },
  {
    area: "SNS運用",
    detail: "投稿設計、画像制作、投稿文作成、見せ方の改善",
    caseText: "Instagramを予約や来店につなげたい",
  },
  {
    area: "Googleマップ整備",
    detail: "店舗情報の整備、写真・投稿提案、口コミ導線、地図検索の見え方改善",
    caseText: "近くで探している人に選ばれたい",
  },
  {
    area: "少額広告・改善",
    detail: "出稿前の整理、広告文・LP改善、反応確認、次の打ち手の提案",
    caseText: "小さく広告を試して反応を見たい",
  },
  {
    area: "LINE導線",
    detail: "予約・問い合わせ導線、リッチメニュー、配信設計、再来店の仕組み化",
    caseText: "一度来たお客さまとつながり続けたい",
  },
  {
    area: "分析・改善",
    detail: "アクセスや反応の確認、導線見直し、改善メモ、次月施策の整理",
    caseText: "作って終わりではなく改善したい",
  },
];

const processSteps = [
  { number: "01", title: "相談", body: "現状のページ・SNS・課題をヒアリングします。" },
  { number: "02", title: "提案", body: "必要な施策と優先順位、料金を明確にします。" },
  { number: "03", title: "制作", body: "デザイン・文章・実装を丁寧に進めます。" },
  { number: "04", title: "改善", body: "公開後の反応を見て、次の打ち手を整理します。" },
];

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
  included: string[];
  bestFor: string;
  href: string;
};

const planServices: ServiceOption[] = [
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
    included: ["構成設計", "ライティング", "デザイン・実装", "問い合わせフォーム", "公開後1ヶ月の軽微な調整"],
    bestFor: "まずは申込みを受けるページを整えたい方",
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
    highlights: ["アカウント設計", "リッチメニュー", "月4本の配信代行"],
    included: ["アカウント初期設計", "リッチメニュー", "配信文作成", "月4本の配信代行", "予約・問い合わせ導線"],
    bestFor: "再来店やリピート導線を作りたい方",
    href: "/services/line",
  },
  {
    slug: "meo",
    number: "03",
    title: "Googleマップ整備",
    tagline: "地図検索の見え方を整える",
    pricing: {
      kind: "subscription",
      originalInitial: "¥20,000",
      originalMonthly: "¥15,000",
      currentInitial: "¥12,000",
      currentMonthly: "¥9,000",
    },
    highlights: ["プロフィール最適化", "口コミ返信代行", "月2本の投稿運用"],
    included: ["店舗情報の整備", "写真・説明文の見直し", "口コミ導線設計", "月2本の投稿運用", "改善メモ"],
    bestFor: "地図検索からの来店を増やしたい方",
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
    highlights: ["月4本の投稿企画・制作", "ストーリーズ週1-2本", "リールはオプション"],
    included: ["投稿企画", "画像制作", "投稿文作成", "ストーリーズ週1-2本", "月次の改善提案"],
    bestFor: "SNSの見せ方を整えて問い合わせにつなげたい方",
    href: "/services/sns",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf2] text-fg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_88%,#fff0bd_0_6%,transparent_7%),linear-gradient(135deg,#fffaf2_0%,#f8fff8_52%,#fff7ea_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,hsl(var(--bg-alt)))]" />

      <div className="container-mod relative grid min-h-[680px] grid-cols-12 items-center gap-8 py-10 md:min-h-[640px] md:py-12 lg:gap-10">
        <div className="col-span-12 min-w-0 max-w-full lg:col-span-6">
          <p className="animate-rise inline-flex max-w-full items-center gap-3 rounded-full border border-[#d8cab8] bg-white/88 px-4 py-2 text-[11px] font-black tracking-[0.12em] text-[#247c69] shadow-[0_14px_40px_rgba(54,40,24,0.06)] md:text-[12px]">
            <span className="h-px w-8 bg-[#ff7a59]" />
            小さなお店・個人事業主向け
          </p>
          <h1 className="animate-rise-1 mt-7 text-[38px] font-black leading-[1.22] text-fg sm:text-[52px] md:text-[58px] lg:text-[56px]">
            <span className="block">小さなお店の集客を、</span>
            <span className="block text-[#247c69]">学生チームが</span>
            <span className="block">まるごと支援。</span>
          </h1>
          <p className="animate-rise-2 mt-6 max-w-xl text-[15px] font-bold leading-[2] text-fg-soft md:text-[18px]">
            LP制作からSNS運用・MEO・LINE導線・広告改善まで。
            <br />
            相談しやすく、低コストで、成果につながる施策を一緒につくります。
          </p>

          <HeroCampaignBadges />

          <div className="animate-rise-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#contact" className="inline-flex w-[calc(100vw-3rem)] max-w-full items-center justify-center gap-2 rounded-full bg-[#ff7a59] px-7 py-4 text-[14px] font-black text-white shadow-[0_18px_44px_rgba(255,122,89,0.26)] transition hover:bg-[#e76242] sm:w-auto">
              <span>無料で課題を相談する</span>
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#plans"
              className="inline-flex w-[calc(100vw-3rem)] max-w-full items-center justify-center gap-2 rounded-full border border-[#77c7ac]/45 bg-white px-7 py-4 text-[14px] font-black text-[#247c69] shadow-[0_18px_44px_rgba(36,124,105,0.10)] transition hover:bg-[#f4fff9] sm:w-auto"
            >
              <span>料金プランを見る</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="animate-rise-4 mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-bold text-fg-soft">
            <Link href="#works" className="text-[#247c69] underline decoration-[#77c7ac]/50 underline-offset-4 transition hover:text-[#155d4e]">
              制作サンプルを見る
            </Link>
            <span>相談無料・無理な営業なし</span>
          </div>

          <HeroQuickFacts />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <FriendlyHeroBoard />
        </div>
      </div>

      <IndustryStrip />
    </section>
  );
}

function HeroCampaignBadges() {
  const badges = ["LP制作", "SNS運用", "少額広告", "LINE/MEO", "改善提案"];
  return (
    <div className="animate-rise-3 mt-6 flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-[#77c7ac]/30 bg-white px-3.5 py-2 text-[12px] font-black text-[#247c69] shadow-[0_10px_28px_rgba(36,124,105,0.10)]"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

function HeroQuickFacts() {
  const facts = [
    { label: "LP制作", value: "構成から公開まで" },
    { label: "立ち上げ期", value: "40%OFF" },
    { label: "相談方法", value: "オンラインOK" },
  ];

  return (
    <div className="animate-rise-4 mt-7 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-3">
      {facts.map((fact) => (
        <div key={fact.label} className="rounded-[1rem] border border-[#77c7ac]/28 bg-white/86 px-4 py-3 shadow-[0_12px_30px_rgba(36,124,105,0.08)]">
          <p className="text-[11px] font-bold text-fg-mute">{fact.label}</p>
          <p className="mt-1 text-[15px] font-black text-fg">{fact.value}</p>
        </div>
      ))}
    </div>
  );
}

function FriendlyHeroBoard() {
  return (
    <div className="animate-rise-4 relative mx-auto max-w-3xl">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_30px_95px_rgba(54,40,24,0.10)]">
        <Image
          src="/lp/handdrawn-team-gpt2.png"
          alt="学生チームが集客まわりを一緒に考える手書き風イラスト"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 54vw"
          className="object-contain"
        />
        <div className="absolute right-5 top-7 hidden -rotate-6 rounded-[1rem] border-2 border-[#f4c95d] bg-white/92 px-4 py-3 shadow-[0_14px_34px_rgba(54,40,24,0.08)] md:block">
          <p className="text-[14px] font-black leading-[1.6] text-[#247c69]">
            一緒に
            <br />
            考えます！
          </p>
        </div>
      </div>
    </div>
  );
}

function FriendlyMemo({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: "green" | "yellow" | "coral";
}) {
  const colors = {
    green: "border-[#77c7ac] bg-[#f4fff9]",
    yellow: "border-[#f4c95d] bg-[#fff9df]",
    coral: "border-[#ff9b7e] bg-[#fff4ef]",
  };

  return (
    <div className={`rounded-[1.15rem] border bg-white/92 p-4 shadow-[0_12px_34px_rgba(54,40,24,0.08)] backdrop-blur ${colors[accent]}`}>
      <p className="text-[15px] font-black text-fg">{title}</p>
      <p className="mt-2 text-[12px] font-semibold leading-[1.7] text-fg-soft">
        {body}
      </p>
    </div>
  );
}

function IndustryStrip() {
  return (
    <div className="relative border-y border-line/80 bg-bg-alt/95 text-fg backdrop-blur">
      <div className="container-mod py-6 md:py-7">
        <p className="text-center text-[12px] font-bold text-fg-mute md:text-[13px]">
          得意領域 / 対応可能な業種
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
          {industries.map((it) => (
            <li
              key={it.label}
              className="rounded-full border border-line bg-white px-4 py-2 text-[12px] font-bold text-fg-soft shadow-[0_10px_24px_rgba(54,40,24,0.04)] md:text-[13px]"
            >
              {it.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PainPoints() {
  return (
    <section id="problem" className="relative overflow-hidden bg-[#fffdf8] py-16 md:py-22">
      <div className="absolute left-0 top-0 h-28 w-28 rounded-br-full bg-[#fff0bd]" />
      <div className="container-mod max-w-6xl">
        <div className="relative">
          <SectionTitle
            eyebrow="Problem"
            title={<>こんなお悩み、<br className="md:hidden" />ありませんか？</>}
            body="ひとつでも当てはまるなら、ページ・SNS・導線のどこかで機会損失が起きているかもしれません。"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pains.map((p) => (
            <article
              key={p.title}
              className="group rounded-[1.35rem] border border-line bg-white p-5 text-center shadow-[0_18px_55px_rgba(54,40,24,0.07)] transition hover:-translate-y-1 hover:border-[#77c7ac]/55 md:p-6"
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-[#fbf2dd] p-1.5 shadow-[inset_0_0_0_1px_rgba(216,202,184,0.55)] md:h-24 md:w-24">
                <Image
                  src={p.iconImage}
                  alt=""
                  width={512}
                  height={512}
                  sizes="96px"
                  className="h-full w-full scale-[1.18] rounded-full object-cover contrast-[1.04] saturate-[1.08]"
                />
              </span>
              <h3 className="mt-5 text-[14px] font-black leading-[1.55] text-fg md:text-[15px]">
                {p.title}<br />{p.body}
              </h3>
            </article>
          ))}
        </div>

        <SectionCTA
          className="mt-10"
          text="自分のお店に当てはまる課題を整理する"
          href="#contact"
        />
      </div>
    </section>
  );
}

function CauseSection() {
  return (
    <section className="bg-bg-alt py-16 md:py-22">
      <div className="container-mod max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="eyebrow">Why it happens</p>
            <h2 className="mt-3 text-[30px] font-black leading-[1.28] text-fg md:text-[46px]">
              集客は、作るだけでは
              <br />
              なかなか増えません。
            </h2>
            <p className="mt-5 text-[15px] font-semibold leading-[2] text-fg-soft md:text-[17px]">
              SNS、LP、Googleマップ、LINE、広告が別々に動いていると、見つけてもらっても予約や問い合わせまで届きにくくなります。
              必要なのは「見つける → 信頼する → 相談する」までの流れを整えることです。
            </p>
          </div>

          <div className="grid gap-3">
            {causeCards.map((card, index) => (
              <article key={card.title} className="flex gap-4 rounded-[1.35rem] border border-line bg-white p-5 shadow-[0_16px_50px_rgba(54,40,24,0.06)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff7a59] font-display text-[20px] font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[16px] font-black text-fg md:text-[18px]">{card.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-[1.8] text-fg-soft md:text-[14px]">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCallout({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-[1.25rem] border-2 border-[#77c7ac]/70 bg-white p-4 shadow-[0_16px_44px_rgba(36,124,105,0.08)]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff7a59] font-display text-[22px] font-semibold text-white">
        {number}
      </span>
      <p className="text-[14px] font-black leading-[1.65] text-fg md:text-[16px]">
        {text}
      </p>
    </div>
  );
}

function FriendlyProblemVisual() {
  const memos = [
    {
      title: "今のお悩み",
      body: "問い合わせが少ない理由を、専門用語なしで一緒に整理。",
      className: "border-[#f4c95d] bg-[#fff9df]",
    },
    {
      title: "できそうなこと",
      body: "LP・LINE・地図検索・SNSから、今必要なものだけ選ぶ。",
      className: "border-[#77c7ac] bg-[#f4fff9]",
    },
    {
      title: "次の一歩",
      body: "小さく試して、反応を見ながら少しずつ改善。",
      className: "border-[#ff9b7e] bg-[#fff4ef]",
    },
  ];
  const channels = ["LP", "LINE", "地図検索", "SNS"];

  return (
    <div className="rounded-[2rem] border-[6px] border-white bg-white p-4 shadow-[0_30px_110px_rgba(36,124,105,0.12)] md:p-5">
      <div className="rounded-[1.5rem] bg-[#fffaf2] p-5 md:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.14em] text-[#247c69]">
              Counseling Memo
            </p>
            <h3 className="mt-2 text-[28px] font-black leading-[1.25] text-fg md:text-[38px]">
              いま必要なことを
              <br />
              いっしょに整理。
            </h3>
          </div>
          <p className="rounded-[1rem] border border-[#77c7ac]/40 bg-white px-4 py-3 text-[12px] font-bold leading-[1.65] text-fg-soft shadow-[0_12px_34px_rgba(36,124,105,0.08)]">
            相談だけでもOK
            <br />
            無理な提案はしません
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {memos.map((memo) => (
            <article key={memo.title} className={`rounded-[1.15rem] border-2 p-4 ${memo.className}`}>
              <p className="text-[15px] font-black text-fg">{memo.title}</p>
              <p className="mt-2 text-[12px] font-semibold leading-[1.7] text-fg-soft">
                {memo.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {channels.map((channel) => (
            <span
              key={channel}
              className="rounded-full border border-[#77c7ac]/30 bg-white px-3 py-2 text-center text-[12px] font-black text-[#247c69]"
            >
              {channel}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg py-18 md:py-24">
      <div className="container-mod max-w-6xl">
        <SectionTitle
          eyebrow="Service"
          title={<>一気通貫で<br className="md:hidden" />支援できること</>}
          body="LPだけ、SNSだけではなく、認知から問い合わせまでの導線をまとめて整えます。必要な範囲だけ選べます。"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {servicePillars.map((service, index) => {
            const content = (
              <>
                <span className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-[#fbf2dd] p-1.5 shadow-[inset_0_0_0_1px_rgba(216,202,184,0.55)] md:h-24 md:w-24">
                  <Image
                    src={service.iconImage}
                    alt=""
                    width={512}
                    height={512}
                    sizes="96px"
                    className="h-full w-full scale-[1.18] rounded-full object-cover contrast-[1.04] saturate-[1.08]"
                  />
                </span>
                <h3 className="mt-5 text-center text-[14px] font-black leading-snug text-fg">
                  {service.title}
                </h3>
                <p className="mt-3 text-center text-[12px] font-semibold leading-[1.7] text-fg-soft">
                  {service.body}
                </p>
              </>
            );

            return service.href ? (
              <Link
                key={service.title}
                href={service.href}
                className="group relative rounded-[1.35rem] border border-line bg-white p-4 shadow-[0_16px_45px_rgba(54,40,24,0.06)] transition hover:-translate-y-1 hover:border-[#77c7ac]/60"
              >
                {content}
                {index < servicePillars.length - 1 && (
                  <span className="pointer-events-none absolute -right-4 top-12 hidden text-[20px] font-black text-[#ff8a6a] lg:block">
                    →
                  </span>
                )}
              </Link>
            ) : (
              <article
                key={service.title}
                className="group relative rounded-[1.35rem] border border-line bg-white p-4 shadow-[0_16px_45px_rgba(54,40,24,0.06)]"
              >
                {content}
                {index < servicePillars.length - 1 && (
                  <span className="pointer-events-none absolute -right-4 top-12 hidden text-[20px] font-black text-[#ff8a6a] lg:block">
                    →
                  </span>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.8rem] border border-line bg-white shadow-[0_24px_80px_rgba(54,40,24,0.07)]">
          <div className="grid border-b border-line bg-[#fffaf2] px-5 py-4 text-[12px] font-black text-fg-mute md:grid-cols-[0.8fr_1.5fr_1fr] md:px-6">
            <span>対応領域</span>
            <span className="hidden md:block">具体的にやること</span>
            <span className="hidden md:block">こんな時に</span>
          </div>
          <div className="divide-y divide-line">
            {serviceScopes.map((scope) => (
              <article key={scope.area} className="grid gap-2 px-5 py-5 md:grid-cols-[0.8fr_1.5fr_1fr] md:gap-5 md:px-6">
                <h3 className="text-[16px] font-black text-[#247c69] md:text-[17px]">{scope.area}</h3>
                <p className="text-[13px] font-semibold leading-[1.75] text-fg-soft md:text-[14px]">
                  {scope.detail}
                </p>
                <p className="rounded-[0.9rem] bg-[#f4fff9] px-3 py-2 text-[12px] font-bold leading-[1.65] text-fg-soft md:text-[13px]">
                  {scope.caseText}
                </p>
              </article>
            ))}
          </div>
        </div>

        <SectionCTA
          className="mt-10"
          text="必要な支援範囲を一緒に整理する"
          href="#contact"
          subText="LPだけ・SNSだけのご相談も大丈夫です"
        />
      </div>
    </section>
  );
}

function ServiceMiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-[#77c7ac]/28 bg-white p-4 shadow-[0_10px_30px_rgba(36,124,105,0.08)]">
      <p className="text-[11px] font-bold text-fg-mute">{label}</p>
      <p className="mt-1 text-[22px] font-black leading-none text-[#247c69] md:text-[26px]">
        {value}
      </p>
    </div>
  );
}

function FriendlyServiceTile({ image, label }: { image: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-line bg-white shadow-[0_14px_42px_rgba(36,124,105,0.08)]">
      <div className="relative aspect-[4/3] bg-bg-sunken">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, 22vw"
          className="object-cover"
        />
      </div>
      <p className="p-4 text-[14px] font-black text-fg">{label}</p>
    </div>
  );
}

function WhyUs() {
  const strengths = [
    {
      title: "柔軟・スピーディな対応",
      body: "小さな修正や相談にも動きやすく、必要なタイミングでこまめに進めます。",
    },
    {
      title: "SNS世代ならではの感覚",
      body: "見る人の印象やスマホでの見え方を大切に、自然に伝わる表現へ整えます。",
    },
    {
      title: "小規模事業者向けの低コスト設計",
      body: "最初から大きく作り込みすぎず、必要な施策から小さく始められます。",
    },
    {
      title: "制作後も改善まで伴走",
      body: "作って終わりではなく、反応を見ながら次の一手を一緒に考えます。",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fffaf2] py-18 text-fg md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_12%,#fff0bd_0_8%,transparent_9%),linear-gradient(135deg,#fffaf2_0%,#f7fff8_58%,#fff7ea_100%)]" />
      <div className="container-mod max-w-6xl">
        <div className="relative grid grid-cols-12 items-center gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/lp/handdrawn-team-gpt2.png"
                alt="マップサポート群馬の学生チームを表す手書き風イラスト"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-contain drop-shadow-[0_24px_70px_rgba(54,40,24,0.10)]"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow">Why choose us?</p>
            <h2 className="mt-3 text-[34px] font-black leading-[1.3] text-fg md:text-[52px]">
              学生チームだからこそ、
              <br />
              柔軟で、相談しやすい。
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] font-semibold leading-[2] text-fg-soft md:text-[18px]">
              「学生だから安い」ではなく、学生だからこそフットワーク軽く、わかりやすく、丁寧に。
              小規模事業者さまが無理なく始められるよう、必要な施策から一緒に整えます。
            </p>
          </div>
        </div>

        <div className="relative mt-10 grid gap-4 md:grid-cols-4">
          {strengths.map((strength) => (
            <article key={strength.title} className="rounded-[1.35rem] border border-line bg-white p-5 shadow-[0_18px_55px_rgba(54,40,24,0.07)]">
              <h3 className="text-[16px] font-black leading-snug text-fg">{strength.title}</h3>
              <p className="mt-3 text-[13px] font-semibold leading-[1.8] text-fg-soft">
                {strength.body}
              </p>
            </article>
          ))}
        </div>

        <div className="relative mt-8 grid overflow-hidden rounded-[1.4rem] border border-line bg-white/85 text-center shadow-[0_18px_55px_rgba(54,40,24,0.06)] md:grid-cols-3">
          <TrustStripItem title="初回相談無料" body="まずはお気軽にご相談ください。" />
          <TrustStripItem title="無理な営業なし" body="ご納得いただけるまでご提案します。" />
          <TrustStripItem title="小規模事業者向け" body="個人店・サロン・教室にも対応します。" />
        </div>
      </div>
    </section>
  );
}

function TrustStripItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-b border-line px-6 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <p className="text-[15px] font-black text-[#247c69]">{title}</p>
      <p className="mt-2 text-[12px] font-semibold leading-[1.7] text-fg-soft">{body}</p>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="bg-bg-alt py-18 md:py-24">
      <div className="container-mod max-w-6xl">
        <SectionTitle
          eyebrow="Process"
          title="ご支援の流れ"
          body="相談から公開・改善まで、やることを見える化しながら進めます。"
        />

        <div className="mt-10 rounded-[2rem] border border-line bg-white p-5 shadow-[0_24px_80px_rgba(54,40,24,0.07)] md:p-7">
          <ol className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.number} className="relative rounded-[1.35rem] bg-[#fffaf2] p-5 text-center">
                {index < processSteps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[22px] font-black text-[#77c7ac] md:block">
                    →
                  </span>
                )}
                <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white font-display text-[24px] font-semibold text-accent shadow-[0_12px_30px_rgba(54,40,24,0.06)]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-[16px] font-black text-fg md:text-[18px]">{step.title}</h3>
                <p className="mt-2 text-[13px] font-semibold leading-[1.75] text-fg-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <SectionCTA
          className="mt-10"
          text="まずは無料で課題を整理する"
          href="#contact"
        />
      </div>
    </section>
  );
}

function FoundingOffer() {
  const notes = [
    { label: "対象", value: "先着3軒", body: "実績づくりにご協力いただける事業者さま限定" },
    { label: "特典", value: "40% OFF", body: "通常価格から割引した立ち上げ期価格でご提供" },
    { label: "期限", value: "6月末まで", body: "2026年6月末、または枠が埋まり次第終了" },
  ];

  return (
    <section id="offer" className="relative overflow-hidden bg-[#fffdf8] py-18 text-fg md:py-24">
      <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-[#fff0bd]" />
      <div className="pointer-events-none absolute bottom-[-4.5rem] left-[-4.5rem] h-52 w-52 rounded-full bg-[#dff5e9]" />

      <div className="container-mod relative max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white p-6 shadow-[0_28px_90px_rgba(54,40,24,0.08)] md:p-10">
          <div className="pointer-events-none absolute right-8 top-8 hidden text-[54px] font-black leading-none text-[#fff0bd] md:block">
            40%
          </div>

          <div className="grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:items-center">
            <div>
              <p className="eyebrow">Founding Offer</p>
              <h2 className="mt-3 text-[32px] font-black leading-[1.28] text-fg md:text-[48px]">
                立ち上げ期だけの
                <br />
                特別オファー。
              </h2>
              <p className="mt-5 text-[14px] font-semibold leading-[2] text-fg-soft md:text-[15px]">
                マップサポート群馬の立ち上げにあたり、実績づくりにご協力いただける事業者さまを先着3軒だけ募集しています。
                <br className="hidden md:block" />
                通常価格から40%OFFで、小さく始めやすい形にしています。
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff7a59] px-6 py-3.5 text-[13px] font-black text-white shadow-[0_16px_42px_rgba(255,122,89,0.24)] transition hover:bg-[#e76242]"
                >
                  <span>立ち上げ期価格で相談する</span>
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="#plans"
                  className="inline-flex items-center justify-center rounded-full border border-[#77c7ac]/45 bg-[#f4fff9] px-6 py-3.5 text-[13px] font-black text-[#247c69] transition hover:bg-white"
                >
                  料金を見る
                </Link>
              </div>
            </div>

            <div className="rounded-[1.7rem] border-2 border-dashed border-[#f4c95d] bg-[#fffaf2] p-4 md:p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {notes.map((note) => (
                  <article
                    key={note.label}
                    className="rounded-[1.25rem] border border-[#eadfce] bg-white p-4 text-center shadow-[0_14px_40px_rgba(54,40,24,0.06)]"
                  >
                    <p className="text-[11px] font-black text-[#ff7a59]">{note.label}</p>
                    <p className="mt-2 text-[22px] font-black leading-tight text-[#247c69] md:text-[26px]">
                      {note.value}
                    </p>
                    <p className="mt-3 text-[11px] font-semibold leading-[1.65] text-fg-soft">
                      {note.body}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-4 rounded-[1.25rem] border border-[#ff9b7e]/35 bg-[#fff4ef] px-4 py-3">
                <p className="text-[12px] font-bold leading-[1.8] text-fg-soft">
                  ご契約いただいた方には、立ち上げ期価格の永年同価格保証をお付けします。
                  まずは相談だけでも大丈夫です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const bundles = [
    {
      mark: "ライト",
      label: "LP + LINE",
      detail: "まず1枚と再来店の仕組みを",
      saving: "計 ¥48,000(初期) + ¥9,000 / 月",
    },
    {
      mark: "おすすめ",
      label: "LP + LINE + 地図検索",
      detail: "新規獲得と再来店を両輪で",
      saving: "計 ¥60,000(初期) + ¥18,000 / 月",
      featured: true,
    },
    {
      mark: "フル",
      label: "LP + LINE + 地図検索 + SNS",
      detail: "集客導線をまとめて整備",
      saving: "計 ¥60,000(初期) + ¥36,000 / 月",
    },
  ];

  return (
    <section id="plans" className="relative overflow-hidden bg-[#f7fbf6] py-18 text-fg md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f7fbf6_0%,#fff8ee_100%)]" />
      <div className="container-mod relative max-w-6xl">
        <div className="text-center">
          <p className="eyebrow">Price</p>
          <h2 className="mt-3 text-[34px] font-black leading-[1.24] text-fg md:text-[50px]">
            料金プラン
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] font-semibold leading-[1.9] text-fg-soft md:text-[17px]">
            目的やご予算に合わせて、必要なサービスを1つから選べます。
            迷う場合は、初回相談で最適な組み合わせを整理します。
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {planServices.map((service) => (
            <ServiceOptionCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-center text-[22px] font-black text-fg md:text-[28px]">
            組み合わせ例
          </h3>
          <p className="mt-2 text-center text-[13px] font-semibold text-fg-soft">
            予算や運用体制に合わせて、必要な分だけ組み合わせできます。
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {bundles.map((bundle) => (
            <article
              key={bundle.label}
              className={`relative rounded-3xl border p-6 ${
                bundle.featured
                  ? "border-accent bg-white text-fg shadow-[0_22px_80px_hsl(var(--accent)/0.14)]"
                  : "border-line bg-white/76 text-fg shadow-[0_18px_70px_rgba(36,124,105,0.07)] backdrop-blur"
              }`}
            >
              <p className="text-[11px] font-black text-accent">{bundle.mark}</p>
              <h3 className="mt-3 text-[18px] font-black text-fg">{bundle.label}</h3>
              <p className="mt-2 text-[13px] leading-[1.75] text-fg-soft">{bundle.detail}</p>
              <p className="mt-5 text-[13px] font-bold text-primary">{bundle.saving}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] leading-relaxed text-fg-mute md:text-[12px]">
          ※ 料金はすべて税抜表示。立ち上げ期価格は先着3軒限定です。
          <br className="hidden md:block" />
          サーバー・ドメイン取得費用、写真撮影、動画制作は必要に応じて別途実費またはお見積りです。
        </p>

        <SectionCTA
          className="mt-10"
          text="料金について相談する"
          href="#contact"
          subText="ご予算に合わせて無理のない構成をご提案します"
        />
      </div>
    </section>
  );
}

function ServiceOptionCard({ service }: { service: ServiceOption }) {
  const { pricing } = service;
  const isRecommended = service.slug === "line";

  return (
    <article
      className={`group relative rounded-3xl border bg-bg-elev p-6 shadow-[0_18px_70px_hsl(var(--fg)/0.05)] transition hover:-translate-y-1 md:p-7 ${
        isRecommended
          ? "border-[#ff7a59] ring-2 ring-[#ff7a59]/15"
          : "border-line hover:border-line-strong"
      }`}
    >
      {isRecommended && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7a59] px-5 py-1.5 text-[11px] font-black text-white shadow-[0_12px_26px_rgba(255,122,89,0.24)]">
          おすすめ
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-black text-accent">OPTION {service.number}</p>
          <h3 className="mt-2 text-[21px] font-black text-fg md:text-[24px]">
            {service.title}
          </h3>
          <p className="mt-2 text-[13px] leading-[1.7] text-fg-soft">{service.tagline}</p>
        </div>
        <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-black text-bg">
          40% OFF
        </span>
      </div>

      <p className="mt-4 rounded-[1rem] bg-[#f4fff9] px-4 py-3 text-[13px] font-bold leading-[1.7] text-fg-soft">
        {service.bestFor}
      </p>

      <div className="mt-6 border-y border-line py-5">
        {pricing.kind === "oneTime" ? (
          <div>
            <p className="text-[11px] font-bold text-fg-mute">一括(税抜)</p>
            <p className="mt-1 text-[12px] text-fg-mute line-through">
              通常 {pricing.originalInitial}
            </p>
            <p className="mt-1 font-display text-[38px] font-semibold leading-none text-fg">
              {pricing.currentInitial}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 divide-x divide-line">
            <div className="pr-4">
              <p className="text-[11px] font-bold text-fg-mute">初期費用</p>
              {pricing.currentInitial ? (
                <>
                  {pricing.originalInitial && (
                    <p className="mt-1 text-[11px] text-fg-mute line-through">
                      {pricing.originalInitial}
                    </p>
                  )}
                  <p className="mt-1 font-display text-[30px] font-semibold leading-none text-fg">
                    {pricing.currentInitial}
                  </p>
                </>
              ) : (
                <p className="mt-4 text-[17px] font-bold text-fg-soft">なし</p>
              )}
            </div>
            <div className="pl-4">
              <p className="text-[11px] font-bold text-fg-mute">月額</p>
              <p className="mt-1 text-[11px] text-fg-mute line-through">
                {pricing.originalMonthly}
              </p>
              <p className="mt-1 font-display text-[30px] font-semibold leading-none text-fg">
                {pricing.currentMonthly}
              </p>
            </div>
          </div>
        )}
      </div>

      <ul className="mt-5 space-y-2 text-[13px] text-fg-soft">
        {service.included.map((item) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
      </ul>

      <Link
        href={service.href}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-line bg-bg px-5 py-3 text-[13px] font-bold text-fg transition hover:border-primary hover:bg-primary hover:text-bg"
      >
        サービス詳細を見る
      </Link>
    </article>
  );
}

function WorkSamples() {
  const samples = [
    { title: "カフェのLP制作", tag: "飲食店", body: "季節メニューの魅力を伝え、予約導線を整理。", image: "/lp/work-sample-rich-v2.png", href: "/samples/cafe" },
    { title: "サロンのWEBサイト制作", tag: "サロン", body: "メニューや雰囲気を整え、問い合わせしやすく。", image: "/lp/service-line-rich-v2.png" },
    { title: "教室のLP制作", tag: "教室", body: "体験申込までの流れをわかりやすく設計。", image: "/lp/service-lp-rich-v2.png" },
  ];

  return (
    <section id="works" className="bg-bg py-18 md:py-24">
      <div className="container-mod max-w-6xl">
        <div className="text-center">
          <div>
            <p className="eyebrow">Works</p>
            <h2 className="mt-3 text-[32px] font-black leading-[1.25] text-fg md:text-[46px]">
              制作サンプル
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] font-semibold leading-[1.9] text-fg-soft">
              小さなお店でも成果につながるよう、見た目だけでなく申込みまでの導線を設計します。
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {samples.map((sample) =>
            sample.href ? (
              <Link
                key={sample.title}
                href={sample.href}
                className="rounded-[1.45rem] border border-line bg-white p-3 shadow-[0_20px_65px_rgba(54,40,24,0.08)] transition hover:-translate-y-1 hover:border-[#77c7ac]/60"
              >
                <WorkSampleCard sample={sample} />
              </Link>
            ) : (
              <article
                key={sample.title}
                className="rounded-[1.45rem] border border-line bg-white p-3 shadow-[0_20px_65px_rgba(54,40,24,0.08)]"
              >
                <WorkSampleCard sample={sample} />
              </article>
            )
          )}
        </div>

        <SectionCTA
          className="mt-10"
          text="サンプルを見て相談する"
          href="#contact"
          subText="業種や目的に合わせて構成からご提案します"
        />
      </div>
    </section>
  );
}

function WorkSampleCard({
  sample,
}: {
  sample: {
    title: string;
    tag: string;
    body: string;
    image: string;
    href?: string;
  };
}) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-bg-elev shadow-[0_18px_70px_hsl(var(--fg)/0.05)]">
        <Image
          src={sample.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <span className="rounded-full bg-[#f4fff9] px-3 py-1 text-[11px] font-black text-[#247c69]">
          {sample.tag}
        </span>
        <h3 className="mt-3 text-[17px] font-black text-fg">{sample.title}</h3>
        <p className="mt-2 text-[13px] font-semibold leading-[1.75] text-fg-soft">
          {sample.body}
        </p>
        {sample.href && (
          <p className="mt-3 text-[13px] font-black text-[#247c69]">
            サンプルを見る →
          </p>
        )}
      </div>
    </>
  );
}

function BottomCTA() {
  const trusts = [
    { icon: "message", label: "相談無料" },
    { icon: "shield-check", label: "無理な営業なし" },
    { icon: "monitor", label: "最短即日返信" },
  ];
  return (
    <section className="relative overflow-hidden bg-bg-alt py-16 md:py-20">
      <Image
        src="/lp/texture-vellum.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-25"
      />
      <div className="container-mod relative max-w-6xl">
        <div className="grid grid-cols-12 items-center gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-[30px] font-black leading-[1.35] text-fg md:text-[42px]">
              まずは無料で、
              <br />
              集客の課題を整理しませんか？
            </h2>
            <p className="mt-4 max-w-xl text-[15px] font-semibold leading-[1.9] text-fg-soft md:text-[17px]">
              今すぐ依頼する前提でなくても大丈夫です。
              LP・SNS・LINE・広告のどこから整えるべきか、一緒に見ていきます。
            </p>
            <Link
              href="#contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff7a59] px-7 py-4 text-[14px] font-black text-white shadow-[0_18px_44px_rgba(255,122,89,0.24)] transition hover:bg-[#e76242]"
            >
              <span>無料相談を申し込む</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <ul className="col-span-12 grid grid-cols-3 gap-4 md:col-span-5">
            {trusts.map((trust) => (
              <li key={trust.label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-bg-elev text-accent shadow-[0_14px_38px_hsl(var(--fg)/0.06)]">
                  <Icon name={trust.icon} />
                </span>
                <span className="text-[11px] font-bold leading-tight text-fg-soft md:text-[12px]">
                  {trust.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-bg py-18 md:py-24">
      <div className="container-mod max-w-6xl">
        <div className="grid grid-cols-12 gap-10 md:items-start md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-[30px] font-black leading-[1.32] text-fg md:text-[44px]">
              まずは無料相談から、
              <br />
              お気軽にご連絡ください。
            </h2>
            <p className="mt-5 text-[15px] font-semibold leading-[1.9] text-fg-soft md:text-[17px]">
              Zoom等のオンラインで30分。
              <br />
              現状のページ・SNS・導線を確認し、必要な施策を一緒に整理します。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["相談無料", "無理な営業なし", "オンライン対応"].map((label) => (
                <span key={label} className="rounded-full border border-[#77c7ac]/35 bg-[#f4fff9] px-3.5 py-2 text-[12px] font-black text-[#247c69]">
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

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
      a: "お持ちの素材があれば最大限活かします。スマホ撮影でも充分なクオリティのことが多いです。撮影のコツや構図のご案内、コピー案のご提案もこちらで行いますので、何もない状態からでもご相談いただけます。",
    },
    {
      q: "広告運用も依頼できますか?",
      a: "大規模な広告代理店のような運用ではなく、少額から試すための設計・広告文・LP改善・振り返りを中心に対応します。まずはLPやSNSの状態を見て、広告を出す前に整えるべき点もご提案します。",
    },
    {
      q: "制作後の修正や運用サポートはありますか?",
      a: "LP制作の場合、料金内で2回まで修正を承ります。3回目以降は1回 ¥10,000(税抜)。月額のLINE運用・Googleマップ整備・SNS運用をご契約いただければ、継続的なサポート・改善提案も可能です。",
    },
    {
      q: "サーバー代やドメイン代は含まれますか?",
      a: "サーバー・ドメインの取得費用は別途実費です。設定サポートや公開作業はLP制作の範囲内で対応します。既存サイトや既存ドメインがある場合は、状況を確認して最適な方法をご案内します。",
    },
    {
      q: "立ち上げ期価格(40% OFF)はいつまで適用されますか?",
      a: "2026年6月末日まで、または先着3軒に達した時点までの、いずれか早いほうです。期間または軒数到達後は通常価格に戻ります。立ち上げ期価格でご契約いただいた方には永年同価格保証をお付けします。",
    },
  ];

  return (
    <section id="faq" className="bg-bg-alt py-18 md:py-24">
      <div className="container-mod max-w-4xl">
        <SectionTitle eyebrow="FAQ" title="よくあるご質問" />
        <dl className="mt-10 space-y-3">
          {qas.map(({ q, a }, i) => (
            <details key={q} className="card p-5 md:p-6" open={i === 0}>
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
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
}) {
  return (
    <div className="text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-[32px] font-black leading-[1.25] text-fg md:text-[46px]">
        {title}
      </h2>
      {body && (
        <p className="mx-auto mt-4 max-w-3xl text-[15px] font-semibold leading-[1.9] text-fg-soft md:text-[17px] md:[word-break:keep-all]">
          {body}
        </p>
      )}
    </div>
  );
}

function SectionCTA({
  text,
  href,
  subText,
  className = "",
}: {
  text: string;
  href: string;
  subText?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 rounded-[1.4rem] border border-[#eadfce] bg-[#fffaf2] px-5 py-5 text-center shadow-[0_16px_50px_rgba(54,40,24,0.06)] md:flex-row md:gap-5 md:text-left ${className}`}>
      {subText && (
        <p className="text-[13px] font-bold leading-[1.7] text-fg-soft md:text-[14px]">
          {subText}
        </p>
      )}
      <Link
        href={href}
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

function Icon({ name }: { name: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  switch (name) {
    case "lightbulb":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12c1 1 2 2 2 4h4c0-2 1-3 2-4a7 7 0 0 0-4-12z" />
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
          <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
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
    case "shield-check":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "download":
      return (
        <svg {...common} className="h-4 w-4">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    default:
      return <span aria-hidden>•</span>;
  }
}
