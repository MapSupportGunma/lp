import Link from "next/link";

/* ──────────────────────────────────────────────
 * Sticky Top — Founding banner + Header (Bridge-style)
 * ────────────────────────────────────────────── */
export function StickyTop() {
  return (
    <>
      {/* Fixed top — always visible regardless of scroll */}
      <div className="fixed inset-x-0 top-0 z-50">
        <FoundingBanner />
        <Header />
      </div>
      {/* Spacer to compensate for fixed header height */}
      <div aria-hidden className="h-[105px] md:h-[112px]" />
    </>
  );
}

function FoundingBanner() {
  return (
    <a
      href="/#offer"
      className="block bg-primary text-bg transition hover:bg-primary-hover"
    >
      <div className="container-mod flex flex-col items-center justify-between gap-1 py-2 text-center md:flex-row md:py-2.5 md:text-left">
        <p className="flex flex-wrap items-center justify-center gap-2 text-[11.5px] font-medium md:text-[13px]">
          <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-bg" />
          <span className="font-semibold">Founding Partners</span>
          <span className="text-bg/85">
            / 立ち上げ期につき<span className="whitespace-nowrap">先着3軒</span>、通常価格の <span className="whitespace-nowrap">40% OFF</span>
          </span>
        </p>
        <p className="hidden text-[11px] font-medium text-bg/85 md:block">
          詳しく →
        </p>
      </div>
    </a>
  );
}

function Header() {
  return (
    <header className="border-b border-line bg-bg/95 backdrop-blur-md">
      <div className="container-mod flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-[20px] font-bold tracking-tight text-fg md:text-[22px]">
            マップサポート群馬
          </span>
          <span className="hidden text-[11px] text-fg-mute md:inline md:text-[12px]">
            | マーケティング一気通貫支援
          </span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-7">
          {/* Services with dropdown — bridge area to prevent gap-hover loss */}
          <div className="relative hidden md:block group">
            <a
              href="/#services"
              className="flex items-center gap-1 py-2 text-[13px] font-medium text-fg-soft transition hover:text-primary"
            >
              <span>サービス</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3 w-3 transition group-hover:rotate-180"
                aria-hidden
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
            {/* Dropdown wrapper — pt-3 creates invisible bridge so cursor doesn't lose hover */}
            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition delay-75 duration-150 group-hover:visible group-hover:opacity-100 group-hover:delay-0">
              <div className="rounded-md border border-line bg-bg p-2 shadow-[0_8px_32px_hsl(var(--fg)/0.08)]">
                <Link
                  href="/#services"
                  className="block rounded-sm px-3 py-2 text-[12px] font-medium text-fg-mute transition hover:bg-bg-alt hover:text-primary"
                >
                  サービス一覧
                </Link>
                <div className="my-1 border-t border-line" />
                <Link
                  href="/services/lp"
                  className="block rounded-sm px-3 py-2 text-[13px] font-medium text-fg-soft transition hover:bg-bg-alt hover:text-primary"
                >
                  LP 制作
                </Link>
                <Link
                  href="/services/line"
                  className="block rounded-sm px-3 py-2 text-[13px] font-medium text-fg-soft transition hover:bg-bg-alt hover:text-primary"
                >
                  LINE 公式 構築・運用
                </Link>
                <Link
                  href="/services/meo"
                  className="block rounded-sm px-3 py-2 text-[13px] font-medium text-fg-soft transition hover:bg-bg-alt hover:text-primary"
                >
                  MEO 代行
                </Link>
                <Link
                  href="/services/sns"
                  className="block rounded-sm px-3 py-2 text-[13px] font-medium text-fg-soft transition hover:bg-bg-alt hover:text-primary"
                >
                  SNS 運用
                </Link>
              </div>
            </div>
          </div>

          <a
            href="/#process"
            className="hidden text-[13px] font-medium text-fg-soft transition hover:text-primary md:inline"
          >
            進め方
          </a>
          <a
            href="/#plans"
            className="hidden text-[13px] font-medium text-fg-soft transition hover:text-primary md:inline"
          >
            料金プラン
          </a>
          <a
            href="/#faq"
            className="hidden text-[13px] font-medium text-fg-soft transition hover:text-primary md:inline"
          >
            よくある質問
          </a>
          <Link href="/#contact" className="btn-primary text-[13px] md:text-[14px]">
            <span>無料相談する</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ──────────────────────────────────────────────
 * Footer — 3 columns + brand
 * ────────────────────────────────────────────── */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg py-12 md:py-16">
      <div className="container-mod max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="text-[18px] font-bold tracking-tight text-fg">
              マップサポート群馬
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-fg-soft">
              マーケティングで、地域事業者の成長に伴走します。
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-fg">メニュー</p>
            <ul className="mt-4 space-y-2.5 text-[12px] text-fg-soft md:text-[13px]">
              <li><a href="/#services" className="transition hover:text-primary">サービス</a></li>
              <li><a href="/#process" className="transition hover:text-primary">進め方</a></li>
              <li><a href="/#plans" className="transition hover:text-primary">料金プラン</a></li>
              <li><a href="/#faq" className="transition hover:text-primary">よくある質問</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-fg">サポート</p>
            <ul className="mt-4 space-y-2.5 text-[12px] text-fg-soft md:text-[13px]">
              <li><a href="/#contact" className="transition hover:text-primary">無料相談</a></li>
              <li>
                <a
                  href="mailto:info@gunma-meo.com?subject=マップサポート群馬%20資料請求"
                  className="transition hover:text-primary"
                >
                  資料ダウンロード
                </a>
              </li>
              <li><a href="/#faq" className="transition hover:text-primary">よくあるご質問</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-fg">会社情報</p>
            <ul className="mt-4 space-y-2.5 text-[12px] text-fg-soft md:text-[13px]">
              <li>屋号: <span className="text-fg">マップサポート群馬</span></li>
              <li>所在地: 群馬県(請求時開示)</li>
              <li>設立: 2026年</li>
              <li><Link href="/legal/tokushoho" className="transition hover:text-primary">特定商取引法に基づく表記</Link></li>
              <li><Link href="/legal/privacy" className="transition hover:text-primary">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center text-[11px] text-fg-mute md:text-left">
          © 2026 マップサポート群馬. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
