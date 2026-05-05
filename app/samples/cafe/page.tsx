import Image from "next/image";
import {
  Cormorant_Garamond,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import type { Metadata } from "next";

const cafeDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-cafe-display",
});

const cafeSerif = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cafe-serif",
});

const cafeSans = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-cafe-sans",
});

export const metadata: Metadata = {
  title: "Cafe Komorebi | 前橋の窓辺カフェ",
  description:
    "前橋の架空カフェ Cafe Komorebi のホームページサンプル。メニュー、店内、営業情報、お知らせを掲載しています。",
};

const shop = {
  name: "Cafe Komorebi",
  address: "群馬県前橋市日吉町 2-11-4",
  station: "中央前橋駅から徒歩9分",
  phone: "027-000-0000",
  phoneDial: "0270000000",
  open: "8:30-18:30",
  closed: "火曜",
  seats: "18席",
  parking: "店舗前3台",
};

const drinks = [
  ["ハンドドリップコーヒー", "650"],
  ["カフェラテ", "700"],
  ["自家製レモネード", "680"],
  ["季節のブレンドティー", "720"],
];

const foods = [
  ["季節のフルーツタルト", "780"],
  ["たまごサンド", "980"],
  ["キッシュプレート", "1,250"],
  ["バター香るスコーン", "420"],
];

const seasonal = [
  ["いちごとピスタチオのタルト", "850"],
  ["さくらラテ", "720"],
];

const news = [
  {
    date: "2026.05.10",
    tag: "New",
    title: "季節の新作タルト",
    body: "いちごとピスタチオのタルトを始めました。",
    image: "/samples/cafe/tart.png",
  },
  {
    date: "2026.05.02",
    tag: "Workshop",
    title: "5月のワークショップ",
    body: "ハンドドリップ講座を店内で開催します。",
    image: "/samples/cafe/pour.png",
  },
  {
    date: "2026.04.28",
    tag: "Info",
    title: "営業時間について",
    body: "5/6は10:00-18:00の営業です。",
    image: null,
  },
  {
    date: "2026.04.25",
    tag: "Daily",
    title: "今日のカフェの景色",
    body: "窓際席に新しい花を飾りました。",
    image: "/samples/cafe/hero-cup.png",
  },
];

const infoRows = [
  ["営業時間", shop.open],
  ["定休日", shop.closed],
  ["住所", shop.address],
  ["アクセス", shop.station],
];

export default function CafeSamplePage() {
  return (
    <main
      id="top"
      className={`${cafeDisplay.variable} ${cafeSerif.variable} ${cafeSans.variable} cafe-page`}
    >
      <CafeStyles />
      <Header />
      <Hero />
      <Concept />
      <Menu />
      <Space />
      <ShopInfo />
      <News />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="cafe-header" aria-label="サイト内ナビゲーション">
      <nav className="cafe-nav">
        <a href="#concept">コンセプト</a>
        <a href="#menu">メニュー</a>
        <a href="#space">店内のご紹介</a>
        <a href="#info">店舗情報</a>
        <a href="#news">お知らせ</a>
      </nav>
      <a className="header-reserve" href={`tel:${shop.phoneDial}`}>
        席を予約する
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <aside className="hero-rail">
        <a className="brand-logo" href="#top" aria-label="Cafe Komorebi トップへ">
          <span>Cafe</span>
          <span>Komorebi</span>
          <i aria-hidden="true" />
        </a>
        <div className="rail-line" aria-hidden="true" />
        <p className="rail-copy">Komorebi / Maebashi / morning cafe</p>
      </aside>

      <div className="hero-visual">
        <Image
          src="/samples/cafe/hero-cup.png"
          alt="窓際の木のテーブルに置かれた温かいコーヒー"
          fill
          priority
          sizes="(min-width: 900px) calc(100vw - 240px), 100vw"
          className="hero-image"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-kicker">Coffee / Baked sweets / Brunch</p>
          <h1 id="hero-title">
            木漏れ日に、
            <br />
            香りがほどける。
          </h1>
          <p>
            前橋市日吉町の小さなカフェ。ハンドドリップコーヒーと焼き菓子、
            軽い食事をご用意しています。
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#menu">
              メニューを見る
              <span aria-hidden="true">→</span>
            </a>
            <a className="button button-rust" href={`tel:${shop.phoneDial}`}>
              席を予約する
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <p className="hero-side-title" aria-hidden="true">
          Cafe Komorebi
        </p>
        <div className="scroll-badge" aria-hidden="true">
          <span>scroll</span>
          <span>fade</span>
        </div>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section id="concept" className="paper-section concept-section" aria-labelledby="concept-title">
      <div className="concept-wrap">
        <div className="concept-photo">
          <Image
            src="/samples/cafe/pour.png"
            alt="ハンドドリップでコーヒーを淹れている様子"
            fill
            sizes="(min-width: 900px) 36vw, 88vw"
            className="object-cover"
          />
        </div>

        <article className="paper-note concept-note">
          <span className="tape tape-top" aria-hidden="true" />
          <h2 id="concept-title">
            日常に、
            <br />
            そっと寄り添う
            <br />
            カフェです。
          </h2>
          <div className="note-rule" aria-hidden="true" />
          <p>
            豆を挽く音、ハンドドリップの香り、焼き菓子の甘い香り。
            朝の一杯、昼の休憩、待ち合わせに使いやすい店を目指しています。
          </p>
          <div className="leaf-line" aria-hidden="true" />
        </article>

        <aside className="brand-panel" aria-label="Cafe Komorebi ブランド">
          <div className="brand-emblem">
            <span>Cafe Komorebi</span>
            <i aria-hidden="true" />
            <strong>komorebi</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="paper-section menu-section" aria-labelledby="menu-title">
      <div className="menu-wrap">
        <div className="menu-side">
          <p id="menu-title">MENU</p>
          <span>DRINK &amp; FOOD</span>
        </div>

        <div className="menu-paper">
          <MenuBlock title="DRINK" rows={drinks} />
          <MenuBlock title="FOOD" rows={foods} />
          <div className="seasonal-box">
            <h3>季節限定</h3>
            <MenuRows rows={seasonal} />
          </div>
          <p className="menu-small">店内利用・テイクアウトに対応しています。</p>
        </div>

        <div className="menu-visual">
          <span className="season-stamp">季節限定</span>
          <div className="tart-photo">
            <Image
              src="/samples/cafe/tart.png"
              alt="いちごとピスタチオのタルト"
              fill
              sizes="(min-width: 900px) 48vw, 92vw"
              className="object-cover"
            />
          </div>
          <figure className="mini-photo">
            <Image
              src="/samples/cafe/menu.png"
              alt="カフェのフードとドリンク"
              fill
              sizes="220px"
              className="object-cover"
            />
          </figure>
          <p className="menu-hand">スコーンは温めて提供できます。</p>
        </div>
      </div>
    </section>
  );
}

function MenuBlock({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <section className="menu-block" aria-labelledby={`menu-${title.toLowerCase()}`}>
      <h3 id={`menu-${title.toLowerCase()}`}>{title}</h3>
      <MenuRows rows={rows} />
    </section>
  );
}

function MenuRows({ rows }: { rows: string[][] }) {
  return (
    <dl className="menu-rows">
      {rows.map(([name, price]) => (
        <div className="menu-row" key={name}>
          <dt>{name}</dt>
          <dd>¥{price}</dd>
        </div>
      ))}
    </dl>
  );
}

function Space() {
  return (
    <section id="space" className="space-section" aria-labelledby="space-title">
      <div className="space-wrap">
        <div className="space-heading">
          <p id="space-title">Our Space</p>
          <span>店内のご紹介</span>
        </div>
        <div className="space-note space-note-left">
          <p>大きな窓から自然光が入ります。ひとり席、テーブル席を用意しています。</p>
        </div>
        <div className="space-gallery">
          <SpacePhoto src="/samples/cafe/interior.png" alt="窓に面したカフェの席" />
          <SpacePhoto src="/samples/cafe/hero.png" alt="木のテーブルが並ぶカフェ店内" />
          <SpacePhoto src="/samples/cafe/hero-cup.png" alt="窓辺のコーヒーと花瓶" />
        </div>
        <div className="space-note space-note-right">
          <p>会話しやすい席と、静かに過ごせる席を分けています。</p>
        </div>
      </div>
    </section>
  );
}

function SpacePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="space-photo">
      <Image src={src} alt={alt} fill sizes="(min-width: 900px) 26vw, 90vw" className="object-cover" />
    </figure>
  );
}

function ShopInfo() {
  return (
    <section id="info" className="paper-section info-section" aria-labelledby="info-title">
      <div className="info-wrap">
        <div className="info-list">
          <h2 id="info-title">店舗情報</h2>
          <dl>
            {infoRows.map(([label, value]) => (
              <div className="info-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="map-area" aria-label="店舗周辺地図のイメージ">
          <div className="map-card">
            <span className="map-station">中央前橋駅</span>
            <span className="map-park">前橋公園</span>
            <span className="map-route" />
            <span className="map-pin">Cafe<br />Komorebi</span>
            <span className="road road-one" />
            <span className="road road-two" />
            <span className="road road-three" />
          </div>
          <aside className="access-note">
            <span className="clip" aria-hidden="true" />
            <p>
              中央前橋駅から
              <br />
              歩いて9分。
            </p>
            <div className="leaf-line small" aria-hidden="true" />
          </aside>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="paper-section news-section" aria-labelledby="news-title">
      <div className="news-wrap">
        <div className="section-title-row">
          <h2 id="news-title">お知らせ</h2>
          <span>news</span>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <article className="news-card" key={item.title}>
              <p className="news-tag">{item.tag}</p>
              {item.image ? (
                <div className="news-image">
                  <Image
                    src={item.image}
                    alt={`${item.title}の写真`}
                    fill
                    sizes="(min-width: 900px) 22vw, 90vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="news-sketch" aria-hidden="true">
                  <span />
                </div>
              )}
              <time dateTime={item.date.replaceAll(".", "-")}>{item.date}</time>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="cafe-footer">
      <div className="footer-wrap">
        <div>
          <a className="brand-logo footer-logo" href="#top" aria-label="Cafe Komorebi トップへ">
            <span>Cafe</span>
            <span>Komorebi</span>
            <i aria-hidden="true" />
          </a>
          <p>
            前橋市日吉町のカフェ。コーヒー、焼き菓子、軽い食事をご用意しています。
          </p>
        </div>
        <nav aria-label="フッターナビゲーション">
          <a href="#concept">コンセプト</a>
          <a href="#menu">メニュー</a>
          <a href="#space">店内のご紹介</a>
          <a href="#info">店舗情報</a>
          <a href="#news">お知らせ</a>
        </nav>
        <div className="footer-contact">
          <span>ご予約・お問い合わせ</span>
          <a href={`tel:${shop.phoneDial}`}>TEL {shop.phone}</a>
          <small>({shop.open})</small>
          <a className="button button-rust" href={`tel:${shop.phoneDial}`}>
            席を予約する
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="footer-social">
          <span>FOLLOW US</span>
          <a href="#">Instagram</a>
          <a href="#">X (Twitter)</a>
          <a href="#">Facebook</a>
          <a href="#">LINE</a>
        </div>
      </div>
      <p className="copyright">© Cafe Komorebi</p>
    </footer>
  );
}

function CafeStyles() {
  return (
    <style>{`
      .cafe-page {
        --green: #0b3b2e;
        --green-dark: #073126;
        --green-soft: #365a48;
        --paper: #f7efdf;
        --paper-light: #fffaf0;
        --ink: #213029;
        --muted: #6a5f52;
        --rust: #c45f38;
        --gold: #c2a56d;
        position: relative;
        min-height: 100vh;
        overflow-x: hidden;
        background: var(--paper);
        color: var(--ink);
        font-family: var(--font-cafe-sans), sans-serif;
      }

      .cafe-page * {
        box-sizing: border-box;
      }

      .cafe-page a {
        color: inherit;
        text-decoration: none;
      }

      .paper-section {
        position: relative;
        background:
          radial-gradient(circle at 12% 8%, rgba(11, 59, 46, 0.055) 0 1px, transparent 1px 100%),
          radial-gradient(circle at 74% 42%, rgba(196, 95, 56, 0.06) 0 1px, transparent 1px 100%),
          linear-gradient(90deg, rgba(255,255,255,0.42), rgba(255,255,255,0)),
          var(--paper);
        background-size: 18px 18px, 22px 22px, auto, auto;
      }

      .cafe-header {
        position: absolute;
        top: 0;
        right: 0;
        left: 240px;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 30px;
        min-height: 72px;
        padding: 18px 34px;
        color: var(--paper-light);
      }

      .cafe-nav {
        display: flex;
        align-items: center;
        gap: 28px;
        font-size: 12px;
        font-weight: 900;
      }

      .cafe-nav a {
        text-shadow: 0 1px 16px rgba(0, 0, 0, 0.35);
        transition: color 180ms ease;
      }

      .cafe-nav a:hover {
        color: #f2d6a6;
      }

      .header-reserve,
      .button {
        display: inline-flex;
        min-height: 44px;
        align-items: center;
        justify-content: center;
        gap: 16px;
        border: 1px solid transparent;
        padding: 13px 25px;
        font-size: 13px;
        font-weight: 900;
        line-height: 1;
        transition: transform 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease;
      }

      .header-reserve,
      .button-light {
        background: var(--paper-light);
        color: #0b3b2e !important;
      }

      .header-reserve *,
      .button-light * {
        color: inherit;
      }

      .button-rust {
        background: var(--rust);
        color: #fff6ea;
      }

      .header-reserve:hover,
      .button:hover {
        transform: translateY(-2px);
      }

      .brand-logo {
        position: relative;
        display: inline-grid;
        gap: 0;
        width: max-content;
        font-family: var(--font-cafe-display), serif;
        font-size: 32px;
        font-weight: 700;
        line-height: 0.92;
      }

      .brand-logo i {
        position: absolute;
        top: -3px;
        right: -33px;
        width: 30px;
        height: 44px;
        border-left: 2px solid currentColor;
        border-radius: 50%;
        opacity: 0.7;
        transform: rotate(35deg);
      }

      .brand-logo i::before,
      .brand-logo i::after {
        position: absolute;
        content: "";
        width: 14px;
        height: 8px;
        border: 1.5px solid currentColor;
        border-left: 0;
        border-bottom: 0;
        border-radius: 100% 0;
      }

      .brand-logo i::before {
        left: 1px;
        top: 7px;
        transform: rotate(-18deg);
      }

      .brand-logo i::after {
        left: 6px;
        top: 20px;
        transform: rotate(24deg);
      }

      .hero-section {
        display: grid;
        min-height: 760px;
        grid-template-columns: 240px minmax(0, 1fr);
        background: var(--green);
        color: var(--paper-light);
      }

      .hero-rail {
        position: relative;
        z-index: 5;
        display: flex;
        min-height: 760px;
        flex-direction: column;
        justify-content: space-between;
        padding: 60px 38px 48px;
        background: var(--green-dark);
      }

      .rail-line {
        position: absolute;
        left: 42px;
        top: 252px;
        width: 1px;
        height: 170px;
        background: rgba(247, 239, 223, 0.58);
      }

      .rail-line::before,
      .rail-line::after {
        position: absolute;
        left: -4px;
        content: "";
        width: 9px;
        height: 9px;
        border: 1px solid rgba(247, 239, 223, 0.72);
        border-radius: 50%;
        background: var(--green-dark);
      }

      .rail-line::before {
        top: 0;
      }

      .rail-line::after {
        bottom: 0;
      }

      .rail-copy {
        writing-mode: vertical-rl;
        font-family: var(--font-cafe-display), serif;
        font-size: 13px;
        color: rgba(247, 239, 223, 0.68);
      }

      .hero-visual {
        position: relative;
        min-height: 760px;
        overflow: hidden;
      }

      .hero-image {
        object-fit: cover;
      }

      .hero-shade {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, rgba(7, 49, 38, 0.76) 0%, rgba(7, 49, 38, 0.54) 28%, rgba(7, 49, 38, 0.13) 66%),
          linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.32));
      }

      .hero-copy {
        position: relative;
        z-index: 2;
        display: flex;
        min-height: 760px;
        max-width: 720px;
        flex-direction: column;
        justify-content: center;
        padding: 118px 44px 80px 76px;
      }

      .hero-kicker {
        margin: 0 0 25px;
        font-size: 13px;
        font-weight: 900;
        color: rgba(255, 250, 240, 0.86);
      }

      .hero-copy h1 {
        margin: 0;
        font-family: var(--font-cafe-serif), serif;
        font-size: 62px;
        font-weight: 500;
        line-height: 1.42;
        text-shadow: 0 3px 24px rgba(0, 0, 0, 0.35);
      }

      .hero-copy p:not(.hero-kicker) {
        max-width: 420px;
        margin: 26px 0 0;
        font-size: 15px;
        font-weight: 700;
        line-height: 2.1;
        color: rgba(255, 250, 240, 0.9);
      }

      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 34px;
      }

      .hero-side-title {
        position: absolute;
        right: 32px;
        top: 48%;
        z-index: 2;
        margin: 0;
        transform: translateY(-50%);
        writing-mode: vertical-rl;
        font-family: var(--font-cafe-display), serif;
        font-size: 48px;
        font-weight: 600;
        color: rgba(255, 250, 240, 0.78);
      }

      .scroll-badge {
        position: absolute;
        right: 42px;
        bottom: 52px;
        z-index: 2;
        display: grid;
        width: 104px;
        height: 104px;
        place-items: center;
        border: 1px solid rgba(255, 250, 240, 0.56);
        border-radius: 50%;
        color: rgba(255, 250, 240, 0.82);
        font-family: var(--font-cafe-display), serif;
        font-size: 13px;
        line-height: 1.1;
        text-align: center;
      }

      .concept-section {
        padding: 38px 30px 70px;
      }

      .concept-wrap {
        position: relative;
        display: grid;
        max-width: 1220px;
        min-height: 530px;
        margin: 0 auto;
        grid-template-columns: 36% 31% 33%;
        align-items: center;
      }

      .concept-photo {
        position: relative;
        z-index: 1;
        height: 370px;
        overflow: hidden;
        box-shadow: 0 22px 45px rgba(30, 42, 36, 0.16);
      }

      .paper-note {
        position: relative;
        z-index: 3;
        background:
          radial-gradient(circle at 18% 22%, rgba(33, 48, 41, 0.08) 0 1px, transparent 1px 100%),
          var(--paper-light);
        background-size: 15px 15px, auto;
        box-shadow: 0 18px 44px rgba(30, 42, 36, 0.12);
      }

      .concept-note {
        width: 112%;
        min-height: 370px;
        margin-left: -52px;
        padding: 58px 58px 40px;
      }

      .concept-note h2 {
        margin: 0;
        font-family: var(--font-cafe-serif), serif;
        font-size: 37px;
        font-weight: 500;
        line-height: 1.58;
      }

      .concept-note p {
        margin: 22px 0 0;
        color: var(--muted);
        font-size: 14px;
        font-weight: 700;
        line-height: 2.1;
      }

      .note-rule {
        width: 86px;
        height: 1px;
        margin-top: 20px;
        background: var(--ink);
      }

      .tape {
        position: absolute;
        display: block;
        width: 88px;
        height: 28px;
        background: rgba(196, 95, 56, 0.78);
        mix-blend-mode: multiply;
      }

      .tape-top {
        top: -14px;
        right: 44px;
      }

      .leaf-line {
        position: absolute;
        right: 38px;
        bottom: 24px;
        width: 156px;
        height: 62px;
        border-bottom: 2px solid rgba(33, 48, 41, 0.5);
        border-radius: 0 0 50% 0;
      }

      .leaf-line::before,
      .leaf-line::after {
        position: absolute;
        content: "";
        width: 31px;
        height: 15px;
        border: 1.5px solid rgba(33, 48, 41, 0.5);
        border-left: 0;
        border-bottom: 0;
        border-radius: 100% 0;
      }

      .leaf-line::before {
        right: 24px;
        bottom: 16px;
        transform: rotate(-18deg);
      }

      .leaf-line::after {
        right: 58px;
        bottom: 1px;
        transform: rotate(26deg);
      }

      .brand-panel {
        position: relative;
        min-height: 430px;
        margin-left: -26px;
        background:
          radial-gradient(circle at 16% 18%, rgba(255, 250, 240, 0.12) 0 1px, transparent 1px 100%),
          var(--green);
        background-size: 18px 18px, auto;
        color: #d7c6a3;
      }

      .brand-panel::before {
        position: absolute;
        top: -18px;
        right: 0;
        left: 0;
        height: 34px;
        content: "";
        background: var(--green);
        clip-path: polygon(0 54%, 13% 40%, 22% 55%, 39% 42%, 55% 58%, 76% 42%, 100% 50%, 100% 100%, 0 100%);
      }

      .brand-emblem {
        position: absolute;
        inset: 82px 62px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(215, 198, 163, 0.22);
        text-align: center;
      }

      .brand-emblem span {
        font-family: var(--font-cafe-display), serif;
        font-size: 15px;
        text-transform: uppercase;
      }

      .brand-emblem strong {
        font-family: var(--font-cafe-display), serif;
        font-size: 42px;
        font-weight: 500;
        font-style: italic;
      }

      .brand-emblem i {
        width: 68px;
        height: 68px;
        border: 1px solid rgba(215, 198, 163, 0.7);
        border-radius: 50%;
      }

      .menu-section {
        padding: 34px 30px 76px;
      }

      .menu-wrap {
        position: relative;
        display: grid;
        max-width: 1220px;
        margin: 0 auto;
        grid-template-columns: 130px minmax(340px, 0.92fr) minmax(420px, 1.25fr);
        gap: 26px;
        align-items: center;
      }

      .menu-side {
        display: grid;
        justify-items: center;
        align-self: stretch;
      }

      .menu-side p {
        margin: 0;
        writing-mode: vertical-rl;
        font-family: var(--font-cafe-display), serif;
        font-size: 70px;
        line-height: 1;
        color: var(--green);
      }

      .menu-side span {
        writing-mode: vertical-rl;
        font-size: 12px;
        font-weight: 900;
        color: var(--green);
      }

      .menu-paper {
        position: relative;
        z-index: 3;
        padding: 36px 34px 34px;
        background:
          radial-gradient(circle at 28% 18%, rgba(33, 48, 41, 0.09) 0 1px, transparent 1px 100%),
          #fff8ea;
        background-size: 14px 14px, auto;
        box-shadow: 0 20px 44px rgba(30, 42, 36, 0.12);
      }

      .menu-block + .menu-block {
        margin-top: 34px;
      }

      .menu-block h3,
      .seasonal-box h3 {
        margin: 0 0 15px;
        font-family: var(--font-cafe-display), serif;
        font-size: 28px;
        font-weight: 700;
        color: var(--ink);
      }

      .menu-rows {
        display: grid;
        gap: 12px;
        margin: 0;
      }

      .menu-row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 10px;
        align-items: baseline;
        min-width: 0;
        font-size: 15px;
        font-weight: 900;
      }

      .menu-row::after {
        grid-column: 2;
        grid-row: 1;
        height: 1px;
        min-width: 28px;
        content: "";
        border-bottom: 2px dotted rgba(33, 48, 41, 0.36);
      }

      .menu-row dt {
        min-width: 0;
        margin: 0;
        color: #2d392f;
      }

      .menu-row dd {
        grid-column: 3;
        margin: 0;
        font-family: var(--font-cafe-display), serif;
        font-size: 22px;
        font-weight: 700;
      }

      .seasonal-box {
        margin-top: 30px;
        padding: 20px 22px;
        border: 1px solid rgba(33, 48, 41, 0.42);
      }

      .menu-small {
        margin: 22px 0 0;
        color: var(--muted);
        font-size: 12px;
        font-weight: 700;
      }

      .menu-visual {
        position: relative;
        min-height: 520px;
      }

      .tart-photo {
        position: absolute;
        top: 22px;
        right: 0;
        width: 100%;
        height: 405px;
        overflow: hidden;
        box-shadow: 0 22px 45px rgba(30, 42, 36, 0.16);
      }

      .mini-photo {
        position: absolute;
        left: 46px;
        bottom: 0;
        width: 214px;
        height: 158px;
        margin: 0;
        border: 8px solid #fffaf0;
        background: #fffaf0;
        box-shadow: 0 14px 34px rgba(30, 42, 36, 0.16);
        transform: rotate(-3deg);
      }

      .season-stamp {
        position: absolute;
        left: -24px;
        bottom: 82px;
        z-index: 4;
        display: grid;
        width: 104px;
        height: 104px;
        place-items: center;
        border: 2px solid rgba(196, 95, 56, 0.72);
        border-radius: 50%;
        color: var(--rust);
        font-size: 15px;
        font-weight: 900;
        transform: rotate(-8deg);
      }

      .menu-hand {
        position: absolute;
        right: 64px;
        bottom: 18px;
        width: 190px;
        margin: 0;
        color: var(--muted);
        font-family: var(--font-cafe-serif), serif;
        font-size: 16px;
        line-height: 1.7;
        transform: rotate(-5deg);
      }

      .space-section {
        position: relative;
        padding: 44px 30px 56px;
        background:
          radial-gradient(circle at 20% 30%, rgba(255, 250, 240, 0.1) 0 1px, transparent 1px 100%),
          var(--green);
        background-size: 18px 18px, auto;
        color: var(--paper-light);
      }

      .space-section::before,
      .space-section::after {
        position: absolute;
        left: 0;
        width: 100%;
        height: 24px;
        content: "";
        background: var(--paper);
      }

      .space-section::before {
        top: -1px;
        clip-path: polygon(0 0, 10% 44%, 18% 18%, 31% 56%, 46% 20%, 62% 52%, 78% 18%, 100% 44%, 100% 0);
      }

      .space-section::after {
        bottom: -1px;
        clip-path: polygon(0 100%, 10% 52%, 24% 78%, 39% 46%, 57% 80%, 72% 48%, 90% 70%, 100% 50%, 100% 100%);
      }

      .space-wrap {
        display: grid;
        max-width: 1220px;
        margin: 0 auto;
        grid-template-columns: 210px 1fr 230px;
        gap: 30px;
        align-items: center;
      }

      .space-heading p {
        margin: 0;
        font-family: var(--font-cafe-display), serif;
        font-size: 40px;
        font-style: italic;
        color: #d7c6a3;
      }

      .space-heading span {
        display: block;
        margin-top: 14px;
        font-size: 13px;
        font-weight: 900;
      }

      .space-heading {
        grid-column: 1;
        grid-row: 1;
      }

      .space-note {
        border: 1px solid rgba(255, 250, 240, 0.4);
        padding: 22px;
        color: rgba(255, 250, 240, 0.88);
      }

      .space-note p {
        margin: 0;
        font-size: 14px;
        font-weight: 700;
        line-height: 2;
      }

      .space-note-left {
        grid-column: 1;
        grid-row: 2;
      }

      .space-note-right {
        grid-column: 3;
        grid-row: 1 / span 2;
      }

      .space-gallery {
        grid-column: 2;
        grid-row: 1 / span 2;
        display: grid;
        grid-template-columns: 1.2fr 0.9fr 1fr;
        gap: 12px;
      }

      .space-photo {
        position: relative;
        height: 195px;
        margin: 0;
        overflow: hidden;
      }

      .space-photo:nth-child(2) {
        margin-top: 34px;
      }

      .space-photo:nth-child(3) {
        margin-top: 12px;
      }

      .info-section {
        padding: 64px 30px 58px;
      }

      .info-wrap {
        display: grid;
        max-width: 1220px;
        margin: 0 auto;
        grid-template-columns: 0.9fr 1.45fr;
        gap: 58px;
        align-items: center;
      }

      .info-list h2,
      .section-title-row h2 {
        margin: 0 0 28px;
        font-family: var(--font-cafe-serif), serif;
        font-size: 34px;
        font-weight: 600;
      }

      .info-list dl {
        display: grid;
        gap: 0;
        margin: 0;
      }

      .info-row {
        display: grid;
        grid-template-columns: 104px 1fr;
        gap: 24px;
        align-items: baseline;
        padding: 17px 0;
        border-bottom: 1px solid rgba(33, 48, 41, 0.18);
      }

      .info-row dt {
        margin: 0;
        color: var(--muted);
        font-size: 14px;
        font-weight: 900;
      }

      .info-row dd {
        margin: 0;
        font-size: 19px;
        font-weight: 900;
      }

      .map-area {
        display: grid;
        grid-template-columns: minmax(320px, 1fr) 210px;
        gap: 28px;
        align-items: center;
      }

      .map-card {
        position: relative;
        height: 310px;
        overflow: hidden;
        background:
          linear-gradient(32deg, transparent 0 46%, rgba(33, 48, 41, 0.24) 46% 47%, transparent 47% 100%),
          linear-gradient(145deg, transparent 0 52%, rgba(33, 48, 41, 0.2) 52% 53%, transparent 53% 100%),
          linear-gradient(0deg, rgba(11, 59, 46, 0.13), rgba(11, 59, 46, 0.13)),
          #dfe4d4;
        box-shadow: inset 0 0 0 1px rgba(33, 48, 41, 0.12);
      }

      .map-card::before {
        position: absolute;
        inset: 36px 40px;
        content: "";
        background: rgba(255, 250, 240, 0.32);
        clip-path: polygon(0 0, 68% 0, 100% 62%, 42% 100%, 0 72%);
      }

      .map-station,
      .map-park {
        position: absolute;
        z-index: 2;
        color: rgba(33, 48, 41, 0.68);
        font-size: 13px;
        font-weight: 900;
      }

      .map-station {
        right: 42px;
        bottom: 42px;
      }

      .map-park {
        left: 50px;
        top: 82px;
      }

      .map-route {
        position: absolute;
        left: 44%;
        top: 35%;
        z-index: 3;
        width: 100px;
        height: 118px;
        border-left: 4px dotted var(--rust);
        border-bottom: 4px dotted var(--rust);
        transform: rotate(-12deg);
      }

      .map-pin {
        position: absolute;
        right: 34%;
        top: 32%;
        z-index: 4;
        display: grid;
        width: 106px;
        height: 80px;
        place-items: center;
        background: var(--green);
        color: var(--paper-light);
        font-family: var(--font-cafe-display), serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 0.95;
        text-align: center;
      }

      .road {
        position: absolute;
        z-index: 1;
        height: 8px;
        background: rgba(33, 48, 41, 0.32);
      }

      .road-one {
        right: -40px;
        bottom: 86px;
        width: 72%;
        transform: rotate(-38deg);
      }

      .road-two {
        left: -22px;
        bottom: 92px;
        width: 66%;
        transform: rotate(32deg);
      }

      .road-three {
        left: 22%;
        top: 120px;
        width: 82%;
        transform: rotate(8deg);
      }

      .access-note {
        position: relative;
        min-height: 230px;
        padding: 42px 26px 26px;
        background: var(--paper-light);
        box-shadow: 0 16px 36px rgba(30, 42, 36, 0.12);
      }

      .access-note p {
        margin: 0;
        font-family: var(--font-cafe-serif), serif;
        font-size: 22px;
        font-weight: 600;
        line-height: 1.7;
      }

      .clip {
        position: absolute;
        top: -34px;
        right: 32px;
        width: 28px;
        height: 78px;
        border: 5px solid #a98c5a;
        border-radius: 18px;
        transform: rotate(8deg);
      }

      .leaf-line.small {
        right: 20px;
        bottom: 12px;
        width: 92px;
        height: 42px;
        opacity: 0.72;
      }

      .news-section {
        padding: 48px 30px 72px;
      }

      .news-wrap {
        max-width: 1220px;
        margin: 0 auto;
      }

      .section-title-row {
        display: flex;
        align-items: baseline;
        gap: 12px;
      }

      .section-title-row h2 {
        margin-bottom: 24px;
      }

      .section-title-row span {
        color: var(--rust);
        font-family: var(--font-cafe-display), serif;
        font-size: 26px;
        font-style: italic;
      }

      .news-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;
      }

      .news-card {
        position: relative;
        min-width: 0;
        padding: 16px 16px 22px;
        background: var(--paper-light);
        box-shadow: 0 16px 34px rgba(30, 42, 36, 0.1);
      }

      .news-card::before {
        position: absolute;
        top: -10px;
        left: 36px;
        width: 62px;
        height: 18px;
        content: "";
        background: rgba(215, 190, 147, 0.55);
        transform: rotate(-3deg);
      }

      .news-tag {
        position: absolute;
        top: -27px;
        left: 10px;
        z-index: 2;
        margin: 0;
        color: var(--rust);
        font-family: var(--font-cafe-display), serif;
        font-size: 29px;
        font-style: italic;
      }

      .news-image,
      .news-sketch {
        position: relative;
        height: 178px;
        margin-bottom: 16px;
        overflow: hidden;
        background: var(--green);
      }

      .news-sketch {
        display: grid;
        place-items: center;
      }

      .news-sketch span {
        width: 76px;
        height: 76px;
        border: 2px solid rgba(247, 239, 223, 0.7);
        border-radius: 4px 4px 32px 32px;
      }

      .news-card time {
        display: block;
        color: var(--muted);
        font-size: 12px;
        font-weight: 900;
      }

      .news-card h3 {
        margin: 9px 0 8px;
        font-size: 15px;
        font-weight: 900;
      }

      .news-card p:not(.news-tag) {
        margin: 0;
        color: var(--muted);
        font-size: 13px;
        font-weight: 700;
        line-height: 1.75;
      }

      .cafe-footer {
        background:
          radial-gradient(circle at 24% 28%, rgba(255, 250, 240, 0.08) 0 1px, transparent 1px 100%),
          var(--green-dark);
        background-size: 18px 18px, auto;
        color: var(--paper-light);
        padding: 54px 30px 26px;
      }

      .footer-wrap {
        display: grid;
        max-width: 1220px;
        margin: 0 auto;
        grid-template-columns: 1.3fr 0.8fr 1.1fr 0.8fr;
        gap: 42px;
      }

      .footer-logo {
        color: var(--paper-light);
      }

      .cafe-footer p {
        max-width: 290px;
        margin: 24px 0 0;
        color: rgba(255, 250, 240, 0.72);
        font-size: 13px;
        font-weight: 700;
        line-height: 2;
      }

      .cafe-footer nav,
      .footer-social {
        display: grid;
        gap: 12px;
        align-content: start;
        color: rgba(255, 250, 240, 0.86);
        font-size: 13px;
        font-weight: 900;
      }

      .footer-contact {
        display: grid;
        align-content: start;
        gap: 8px;
        border-left: 1px solid rgba(255, 250, 240, 0.28);
        padding-left: 34px;
      }

      .footer-contact span,
      .footer-social span {
        color: rgba(255, 250, 240, 0.66);
        font-size: 12px;
        font-weight: 900;
      }

      .footer-contact a:not(.button) {
        font-family: var(--font-cafe-display), serif;
        font-size: 29px;
        font-weight: 700;
      }

      .footer-contact small {
        color: rgba(255, 250, 240, 0.66);
        font-size: 12px;
        font-weight: 700;
      }

      .footer-contact .button {
        width: fit-content;
        margin-top: 18px;
      }

      .copyright {
        max-width: 1220px;
        margin: 34px auto 0;
        color: rgba(255, 250, 240, 0.62);
        font-size: 12px;
        font-weight: 700;
      }

      @media (max-width: 1100px) {
        .cafe-header {
          left: 200px;
          gap: 18px;
          padding-inline: 22px;
        }

        .cafe-nav {
          gap: 16px;
        }

        .hero-section {
          grid-template-columns: 200px minmax(0, 1fr);
        }

        .hero-rail {
          padding-inline: 28px;
        }

        .hero-copy {
          padding-left: 50px;
        }

        .hero-copy h1 {
          font-size: 54px;
        }

        .hero-side-title {
          display: none;
        }

        .concept-wrap {
          grid-template-columns: 40% 36% 24%;
        }

        .concept-note {
          width: 118%;
          margin-left: -38px;
          padding: 46px 36px 36px;
        }

        .brand-emblem {
          inset: 70px 28px;
        }

        .menu-wrap {
          grid-template-columns: 86px minmax(320px, 1fr);
        }

        .menu-visual {
          grid-column: 2;
          min-height: 420px;
        }

        .tart-photo {
          height: 330px;
        }

        .space-wrap,
        .info-wrap,
        .footer-wrap {
          grid-template-columns: 1fr;
        }

        .space-gallery,
        .news-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 760px) {
        .cafe-header {
          position: absolute;
          left: 0;
          min-height: 64px;
          padding: 14px 16px;
        }

        .cafe-nav {
          display: none;
        }

        .header-reserve {
          margin-left: auto;
          min-height: 40px;
          padding: 11px 16px;
          font-size: 12px;
        }

        .hero-section {
          display: block;
          min-height: 720px;
        }

        .hero-rail {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          min-height: 86px;
          flex-direction: row;
          align-items: flex-start;
          padding: 22px 20px;
          background: linear-gradient(180deg, rgba(7, 49, 38, 0.95), rgba(7, 49, 38, 0.12));
        }

        .brand-logo {
          font-size: 26px;
        }

        .rail-line,
        .rail-copy {
          display: none;
        }

        .hero-visual {
          min-height: 720px;
        }

        .hero-copy {
          min-height: 720px;
          padding: 126px 20px 60px;
        }

        .hero-copy h1 {
          font-size: 38px;
          line-height: 1.48;
        }

        .hero-copy p:not(.hero-kicker) {
          max-width: 330px;
          font-size: 13px;
          line-height: 1.9;
        }

        .hero-actions {
          flex-direction: column;
          align-items: flex-start;
        }

        .button {
          width: min(100%, 240px);
        }

        .scroll-badge {
          right: 18px;
          bottom: 22px;
          width: 74px;
          height: 74px;
          font-size: 11px;
        }

        .concept-section,
        .menu-section,
        .space-section,
        .info-section,
        .news-section,
        .cafe-footer {
          padding-right: 18px;
          padding-left: 18px;
        }

        .concept-wrap {
          display: grid;
          min-height: 0;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .concept-photo {
          height: 300px;
        }

        .concept-note {
          width: auto;
          min-height: 0;
          margin: 0;
          padding: 36px 24px 78px;
        }

        .concept-note h2 {
          font-size: 30px;
        }

        .brand-panel {
          min-height: 250px;
          margin: 0;
        }

        .brand-emblem {
          inset: 34px;
        }

        .menu-wrap {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .menu-side {
          display: flex;
          align-items: end;
          justify-content: space-between;
        }

        .menu-side p,
        .menu-side span {
          writing-mode: initial;
        }

        .menu-side p {
          font-size: 52px;
        }

        .menu-paper {
          padding: 28px 20px;
        }

        .menu-row {
          grid-template-columns: minmax(0, auto) 1fr auto;
          font-size: 13px;
          gap: 8px;
        }

        .menu-row dd {
          font-size: 18px;
        }

        .menu-visual {
          grid-column: auto;
          min-height: 430px;
        }

        .tart-photo {
          top: 0;
          height: 300px;
        }

        .mini-photo {
          left: 20px;
          width: 174px;
          height: 130px;
        }

        .season-stamp {
          left: auto;
          right: 12px;
          bottom: 92px;
          width: 86px;
          height: 86px;
          font-size: 13px;
        }

        .menu-hand {
          right: 20px;
          bottom: 16px;
          width: 150px;
          font-size: 13px;
        }

        .space-wrap {
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .space-heading,
        .space-note-left,
        .space-note-right,
        .space-gallery {
          grid-column: auto;
          grid-row: auto;
        }

        .space-gallery,
        .news-grid {
          grid-template-columns: 1fr;
        }

        .space-photo,
        .space-photo:nth-child(2),
        .space-photo:nth-child(3) {
          height: 220px;
          margin-top: 0;
        }

        .info-wrap,
        .map-area {
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .info-row {
          grid-template-columns: 82px 1fr;
          gap: 14px;
        }

        .info-row dd {
          font-size: 16px;
        }

        .map-card {
          height: 270px;
        }

        .access-note {
          min-height: 170px;
        }

        .news-card {
          padding: 16px;
        }

        .news-image,
        .news-sketch {
          height: 220px;
        }

        .footer-contact {
          border-left: 0;
          padding-left: 0;
        }
      }
    `}</style>
  );
}
