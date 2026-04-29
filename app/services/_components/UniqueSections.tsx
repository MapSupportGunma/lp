import { SectionHead } from "./ServiceBlocks";

/* ──────────────────────────────────────────────
 * LP — Anatomy: 1ページLPの中身を分解
 * ────────────────────────────────────────────── */
export function LpAnatomy({ no }: { no: string }) {
  const blocks = [
    {
      label: "Header",
      role: "店名・ロゴ",
      purpose: "第一印象。お店の雰囲気を3秒で伝える。",
    },
    {
      label: "Hero",
      role: "キャッチコピー + 主要写真",
      purpose: "1秒で関心を掴む。「自分のための店」と感じてもらう。",
      tall: true,
    },
    {
      label: "問題提起",
      role: "お客さまの悩み",
      purpose: "「自分のことだ」と共感してもらうパート。",
    },
    {
      label: "サービス・特徴",
      role: "提供価値",
      purpose: "他店との違い・強みを明確化。",
    },
    {
      label: "料金",
      role: "明朗会計",
      purpose: "「いくら?」の不安を解消。",
    },
    {
      label: "スタッフ",
      role: "人柄・写真",
      purpose: "「誰にやってもらうのか」の安心感。",
    },
    {
      label: "口コミ",
      role: "社会的証明",
      purpose: "「他のお客さまも使っている」 と納得感。",
    },
    {
      label: "予約・アクセス",
      role: "地図 + CTA",
      purpose: "最後の一押し。行動の摩擦を減らす。",
    },
    {
      label: "Footer",
      role: "法務情報",
      purpose: "信頼の最終裏付け。",
    },
  ];
  return (
    <section className="border-b border-line/70 bg-bg-sunken/40 py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <SectionHead
          no={no}
          label="Anatomy"
          title={
            <>
              1ページLPの中身、解剖。
              <br className="md:hidden" />
              <span className="text-fg-soft">9つのパーツが連動する。</span>
            </>
          }
          description="それぞれがお客さまの心理段階に対応。すべてが揃ってはじめて、予約ボタンが押されます。"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-[280px_1fr] md:gap-10 lg:grid-cols-[320px_1fr]">
          {/* Page mockup column (sticky on desktop) */}
          <div className="md:sticky md:top-36 md:h-fit">
            <div className="overflow-hidden rounded-sm border-2 border-fg/80 bg-bg-elev shadow-[0_4px_24px_hsl(var(--fg)/0.06)]">
              <div className="flex items-center gap-1.5 border-b border-line bg-bg-sunken px-3 py-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent/60" />
                <span className="inline-block h-2 w-2 rounded-full bg-fg-faint" />
                <span className="inline-block h-2 w-2 rounded-full bg-fg-faint" />
                <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-fg-mute">
                  LP Layout
                </span>
              </div>
              {blocks.map((b, i) => (
                <div
                  key={b.label}
                  className={`border-b border-line/60 px-3 py-2.5 text-[11px] last:border-b-0 ${
                    b.tall ? "py-5" : ""
                  }`}
                >
                  <p className="font-display text-[9px] uppercase tracking-[0.2em] text-fg-mute">
                    {String(i + 1).padStart(2, "0")} · {b.label}
                  </p>
                  <p className="mt-1 font-medium text-[12px] text-fg">
                    {b.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Annotations column */}
          <ol className="space-y-0">
            {blocks.map((b, i) => (
              <li
                key={b.label}
                className="grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-line/70 py-4 last:border-b-0"
              >
                <span className="font-display text-[18px] font-medium leading-none text-accent md:text-[22px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[15px] font-medium text-fg md:text-[17px]">
                    {b.label}
                    <span className="ml-2 text-[12px] font-normal text-fg-mute">
                      / {b.role}
                    </span>
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.7] text-fg-soft md:text-[14px]">
                    {b.purpose}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * LINE — Daily Messages timeline
 * ────────────────────────────────────────────── */
export function LineDailyMessages({ no }: { no: string }) {
  const messages = [
    {
      time: "Day 0 / 友だち追加直後",
      tag: "自動あいさつ",
      body: "○○ サロンへようこそ。\n初回限定 20% OFF クーポンをお送りします ✨\nお気軽にご利用ください。",
    },
    {
      time: "前日 17:00",
      tag: "予約リマインダー(自動)",
      body: "○○様、明日のご予約 ご確認お願いいたします。\n■ 日時: 14:00\n■ メニュー: ジェルネイル\n変更はこちら → [リンク]",
    },
    {
      time: "来店当日",
      tag: "リッチメニュー",
      body: "[Wi-Fi パスワード] [駐車場のご案内] [次回予約] をタップで即参照",
    },
    {
      time: "来店後 20:00",
      tag: "お礼メッセージ(自動)",
      body: "本日はご来店ありがとうございました 🌸\nお仕上がりはいかがでしたでしょうか?\n次回のご予約はこちらから → [リンク]",
    },
    {
      time: "1週間後",
      tag: "セグメント配信",
      body: "ジェルネイル ご利用のお客さまへ。\n来週、新作デザインのご紹介です。\n気になる方は[こちら]から ✨",
    },
  ];
  return (
    <section className="border-b border-line/70 bg-[hsl(120_30%_97%)] py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <SectionHead
          no={no}
          label="Daily Flow"
          title={
            <>
              お客さまとの一週間、
              <br className="md:hidden" />
              <span className="text-fg-soft">5つの自動メッセージで満たす。</span>
            </>
          }
          description="店主が手を煩わせなくても、お客さまには「丁寧に対応されている」感覚が積み重なります。"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
          {/* Phone frame — populated chat preview */}
          <div className="hidden md:sticky md:top-36 md:block md:h-fit">
            <div className="overflow-hidden rounded-[28px] border-[8px] border-fg bg-[hsl(220_18%_94%)] shadow-[0_8px_32px_hsl(var(--fg)/0.12)]">
              <div className="border-b border-line/40 bg-[hsl(120_30%_42%)] px-3 py-2 text-center">
                <p className="text-[10px] font-medium tracking-wide text-bg/80">
                  ○○ サロン公式
                </p>
                <p className="mt-0.5 text-[8px] text-bg/60">友だち · 124</p>
              </div>
              <div className="space-y-2 p-3">
                <p className="text-center text-[8px] text-fg-mute">— 今日 —</p>
                <div className="text-left">
                  <div className="inline-block max-w-[85%] rounded-2xl rounded-bl-sm bg-bg-elev px-2.5 py-1.5 text-[9px] leading-snug text-fg shadow-sm">
                    ようこそ ○○ サロンへ ✨
                  </div>
                  <p className="mt-0.5 text-[7px] text-fg-mute">07:00</p>
                </div>
                <div className="text-left">
                  <div className="inline-block max-w-[85%] rounded-2xl rounded-bl-sm bg-bg-elev px-2.5 py-1.5 text-[9px] leading-snug text-fg shadow-sm">
                    初回限定 20% OFF クーポン
                    <br />
                    お気軽にご利用ください
                  </div>
                  <p className="mt-0.5 text-[7px] text-fg-mute">07:00</p>
                </div>
                <p className="text-center text-[8px] text-fg-mute">— 前日 —</p>
                <div className="text-left">
                  <div className="inline-block max-w-[85%] rounded-2xl rounded-bl-sm bg-bg-elev px-2.5 py-1.5 text-[9px] leading-snug text-fg shadow-sm">
                    明日 14:00 のご予約を
                    <br />
                    確認させていただきます
                  </div>
                  <p className="mt-0.5 text-[7px] text-fg-mute">17:00</p>
                </div>
                <div className="text-right">
                  <div className="inline-block max-w-[80%] rounded-2xl rounded-br-sm bg-[hsl(120_55%_60%)] px-2.5 py-1.5 text-[9px] leading-snug text-bg shadow-sm">
                    確認しました
                  </div>
                  <p className="mt-0.5 text-[7px] text-fg-mute">17:14</p>
                </div>
                <p className="text-center text-[8px] text-fg-mute">— 来店後 —</p>
                <div className="text-left">
                  <div className="inline-block max-w-[85%] rounded-2xl rounded-bl-sm bg-bg-elev px-2.5 py-1.5 text-[9px] leading-snug text-fg shadow-sm">
                    本日はありがとうございました 🌸
                  </div>
                  <p className="mt-0.5 text-[7px] text-fg-mute">20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <ol className="relative space-y-6">
            {messages.map((m, i) => (
              <li
                key={i}
                className="relative grid grid-cols-[auto_1fr] gap-5 md:gap-6"
              >
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(120_50%_45%)] text-[11px] font-bold text-bg shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < messages.length - 1 && (
                    <span className="my-2 h-full min-h-[40px] w-px bg-[hsl(120_30%_70%)]" />
                  )}
                </div>
                {/* Message card */}
                <div className="pb-2">
                  <p className="font-display text-[11px] uppercase tracking-[0.2em] text-fg-mute">
                    {m.time}
                  </p>
                  <p className="mt-1 text-[12px] font-medium text-[hsl(120_45%_30%)]">
                    {m.tag}
                  </p>
                  <div className="mt-3 inline-block max-w-xl rounded-2xl rounded-tl-sm bg-bg-elev px-4 py-3 text-[13px] leading-[1.7] text-fg shadow-sm border border-line/60 whitespace-pre-wrap md:text-[14px]">
                    {m.body}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * MEO — Search world (stylized Google Maps results)
 * ────────────────────────────────────────────── */
export function MeoSearchWorld({ no }: { no: string }) {
  const results = [
    {
      rank: 1,
      name: "あなたのお店",
      category: "ネイルサロン",
      rating: 4.8,
      reviews: 142,
      distance: "0.4 km",
      isYou: true,
      tag: "上位3件 — タップ率 80%",
    },
    {
      rank: 2,
      name: "Salon B",
      category: "ネイルサロン",
      rating: 4.5,
      reviews: 67,
      distance: "1.2 km",
    },
    {
      rank: 3,
      name: "Salon C",
      category: "ネイルサロン",
      rating: 4.2,
      reviews: 38,
      distance: "1.8 km",
    },
    {
      rank: 4,
      name: "Salon D",
      category: "ネイルサロン",
      rating: 4.0,
      reviews: 21,
      distance: "2.5 km",
      tag: "4件目以下 — タップ率 急減",
    },
  ];
  return (
    <section className="border-b border-line/70 bg-bg-sunken/30 py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <SectionHead
          no={no}
          label="The Map"
          title={
            <>
              「業種 + 地域」検索の世界。
              <br className="md:hidden" />
              <span className="text-fg-soft">上位3件の中に居るかどうかで、すべて決まる。</span>
            </>
          }
          description="お客さまは1ページ目の上位3件しか見ません。あなたのお店がそこにいるかどうかを、私たちが守り続けます。"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_320px] md:gap-10">
          {/* Search results */}
          <div className="overflow-hidden rounded-sm border-2 border-fg/80 bg-bg-elev shadow-[0_4px_24px_hsl(var(--fg)/0.06)]">
            {/* Search bar */}
            <div className="flex items-center gap-3 border-b border-line bg-bg-sunken px-4 py-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fg-faint text-[10px] text-bg">🔍</span>
              <span className="text-[13px] text-fg-soft">前橋 ネイルサロン</span>
              <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-fg-mute">
                Google Maps
              </span>
            </div>
            {/* Result list */}
            <div className="divide-y divide-line/70">
              {results.map((r) => (
                <div
                  key={r.rank}
                  className={`relative px-4 py-4 md:px-6 md:py-5 ${
                    r.isYou
                      ? "bg-accent/8"
                      : r.rank === 4
                        ? "opacity-50"
                        : ""
                  }`}
                >
                  {r.tag && (
                    <span
                      className={`absolute right-3 top-3 rounded-sm px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] ${
                        r.isYou
                          ? "bg-accent text-bg"
                          : "bg-fg-faint text-bg"
                      }`}
                    >
                      {r.tag}
                    </span>
                  )}
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-display text-[28px] font-medium leading-none tracking-tight md:text-[32px] ${
                        r.isYou ? "text-accent" : "text-fg-mute"
                      }`}
                    >
                      {r.rank}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-display text-[15px] font-medium md:text-[17px] ${
                          r.isYou ? "text-fg" : "text-fg-soft"
                        }`}
                      >
                        {r.name}
                      </p>
                      <p className="mt-0.5 text-[12px] text-fg-mute">
                        {r.category} · {r.distance}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[12px]">
                        <span className="font-medium text-fg">
                          ★ {r.rating}
                        </span>
                        <span className="text-fg-faint">·</span>
                        <span className="text-fg-mute">{r.reviews}件</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insight card */}
          <aside className="rounded-sm border border-line bg-bg-elev p-7 md:p-8 md:sticky md:top-36 md:h-fit">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent">
              The Insight
            </p>
            <p className="mt-4 font-display text-[40px] font-medium leading-none tracking-tight text-fg md:text-[52px]">
              80<span className="text-[20px] text-fg-mute md:text-[24px]">%</span>
            </p>
            <p className="mt-3 text-[14px] leading-[1.75] text-fg-soft md:text-[15px]">
              「業種 + 地域」検索でのタップは、上位3件に集中。 4件目以降は急激に注目度が下がります。
            </p>
            <p className="mt-6 border-t border-line pt-5 text-[13px] leading-[1.75] text-fg-soft">
              MEOは登録だけでなく、毎週の運用が順位を守ります。
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
 * SNS — 12 months of worldview gallery
 * ────────────────────────────────────────────── */
export function SnsTwelveMonths({ no }: { no: string }) {
  // Each month has 3 post types: 季節新作 / お客さま事例 / 世界観
  const months = [
    { name: "1月", posts: ["新春デザイン", "初詣お出かけ事例", "今年の抱負"], hue: 350 },
    { name: "2月", posts: ["バレンタイン", "ちょこ色の事例", "店主のひと月"], hue: 340 },
    { name: "3月", posts: ["桜・春色", "卒業ネイル事例", "春の新作素材"], hue: 320 },
    { name: "4月", posts: ["お花見モチーフ", "新生活の予約", "店内の春支度"], hue: 30 },
    { name: "5月", posts: ["GWキャンペーン", "母の日ギフト", "新緑の風景"], hue: 60 },
    { name: "6月", posts: ["紫陽花アート", "雨の日割引", "梅雨の過ごし方"], hue: 200 },
    { name: "7月", posts: ["浴衣・夏祭り", "夏休みの予約", "夏の限定メニュー"], hue: 180 },
    { name: "8月", posts: ["夏の花火デザイン", "お盆休み事例", "暑中見舞い"], hue: 220 },
    { name: "9月", posts: ["秋の新作", "敬老の日企画", "実りのある仕事"], hue: 80 },
    { name: "10月", posts: ["ハロウィン特集", "秋色の口コミ", "店内の衣替え"], hue: 25 },
    { name: "11月", posts: ["紅葉カラー", "感謝の月企画", "年末のご案内"], hue: 15 },
    { name: "12月", posts: ["クリスマス・冬", "年末のお礼", "来年への一歩"], hue: 0 },
  ];
  return (
    <section className="border-b border-line/70 bg-bg-sunken/30 py-20 md:py-28">
      <div className="container-mod max-w-6xl">
        <SectionHead
          no={no}
          label="The Asset"
          title={
            <>
              1年で、こんなブランド資産が積み上がる。
              <br className="md:hidden" />
              <span className="text-fg-soft">毎週の3投稿 × 12ヶ月 = 144のブランド瞬間。</span>
            </>
          }
          description="単発の投稿ではなく、世界観を毎週積み重ねる活動。3年続けば、それは唯一無二の資産です。"
        />

        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
          {months.map((m, i) => (
            <div
              key={m.name}
              className="overflow-hidden rounded-sm border border-line bg-bg-elev"
            >
              <div className="flex items-baseline justify-between border-b border-line/70 bg-bg-sunken/50 px-3 py-2">
                <p className="font-display text-[14px] font-medium tracking-tight text-fg">
                  {m.name}
                </p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-fg-mute">
                  3 posts
                </p>
              </div>
              <div className="grid grid-cols-3 gap-px bg-line">
                {m.posts.map((p, j) => (
                  <div
                    key={j}
                    className="relative aspect-square bg-bg-elev p-2 transition hover:bg-bg-sunken/30"
                    style={{
                      background: `linear-gradient(135deg, hsl(${m.hue} 22% 92%), hsl(${m.hue + 20} 18% 86%))`,
                    }}
                  >
                    <p className="absolute inset-2 flex items-center text-center text-[8px] leading-tight text-fg/70 md:text-[9px]">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <p className="font-display text-[36px] font-medium leading-none tracking-tight text-accent md:text-[44px]">
              12<span className="text-[16px] text-fg-mute md:text-[20px]">ヶ月</span>
            </p>
            <p className="mt-3 text-[13px] leading-[1.7] text-fg-soft">
              季節の移ろい・行事・お客さまの変化を、毎月のテーマとして記録します。
            </p>
          </div>
          <div>
            <p className="font-display text-[36px] font-medium leading-none tracking-tight text-accent md:text-[44px]">
              144<span className="text-[16px] text-fg-mute md:text-[20px]">投稿</span>
            </p>
            <p className="mt-3 text-[13px] leading-[1.7] text-fg-soft">
              週3投稿の積み上げ。フォロワーは「このお店、ずっと続いている」と感じます。
            </p>
          </div>
          <div>
            <p className="font-display text-[36px] font-medium leading-none tracking-tight text-accent md:text-[44px]">
              ∞<span className="text-[16px] text-fg-mute md:text-[20px]"></span>
            </p>
            <p className="mt-3 text-[13px] leading-[1.7] text-fg-soft">
              一度作った資産は消えません。3年続けば、競合が真似できない「あなたの店の世界観」になります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
