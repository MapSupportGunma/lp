import type { Metadata } from "next";
import {
  ServiceHero,
  FeaturesSection,
  FlowSection,
  PricingBlock,
  FAQSection,
  NextStepSection,
} from "../_components/ServiceBlocks";

export const metadata: Metadata = {
  title: "Googleマップ整備 — マップサポート群馬",
  description:
    "個人サロン・地域事業者のためのGoogleマップ整備。立ち上げ期 初期¥12,000+月¥9,000。",
};

export default function MeoPage() {
  return (
    <>
      <ServiceHero
        title="Googleマップ整備"
        headline={<>Googleマップで、<br className="hidden md:block" />見つけられやすい状態へ。</>}
        tagline="営業時間・写真・説明文・口コミ返信・投稿を整えて、近くで探している人に安心して選ばれる状態をつくります。"
        image="/lp/service-meo-rich-v2.png"
        price="¥12,000 + 月¥9,000"
        originalPrice="¥20,000 + 月¥15,000"
        duration="即日着手"
        badges={["店舗情報整備", "口コミ返信", "月2本投稿", "月次レポート"]}
        outcomes={["情報の抜け漏れを整備", "口コミ対応を丁寧に", "行動数を見て改善"]}
      />

      <FeaturesSection
        title={<>このサービスでできること</>}
        body="地図検索で見つけてもらった後、写真・情報・口コミで不安なく来店を検討できる状態に整えます。"
        features={[
          {
            image: "/lp/process-01-listen.png",
            title: "プロフィール整備",
            body: "カテゴリ・営業時間・写真など、見た人が安心して来店を考えられる情報に整えます。",
          },
          {
            image: "/lp/process-02-design.png",
            title: "口コミ返信代行",
            body: "全口コミに、お店のトーンを保ちつつ丁寧に返信。低評価には誠実な対応を。",
          },
          {
            image: "/lp/process-03-build.png",
            title: "隔週の投稿運用",
            body: "お知らせ・新メニュー・季節情報を月2本発信。営業している雰囲気が自然に伝わる状態を作ります。",
          },
          {
            image: "/lp/process-04-analyze.png",
            title: "月次レポート",
            body: "閲覧数や行動数を月次で確認し、次に直すところをわかりやすくお伝えします。",
          },
        ]}
      />

      <FlowSection
        title={<>ご相談から運用開始まで</>}
        body="既存プロフィールの状態を確認し、まず直すべき箇所から整えていきます。"
        steps={[
          { title: "ヒアリング", body: "Zoom等で30分。現状と困っていることを伺います。" },
          { title: "ご契約", body: "ご納得いただいてからのご契約。" },
          { title: "プロフィール整備", body: "ビジネスプロフィールを見直し、必要な情報を整えます。" },
          { title: "月次運用開始", body: "投稿・口コミ返信・レポート提出を継続。" },
        ]}
      />

      <PricingBlock
        current="¥12,000 + 月 ¥9,000"
        original="¥20,000 + 月 ¥15,000"
        unit="/ 初期費用 + 月額(税抜)"
        recommendedFor="地図検索からの来店を増やしたい方"
        includes={[
          "Googleビジネスプロフィール 初期整備",
          "全口コミへの返信代行(月10件まで)",
          "投稿運用(月2本)",
          "月次レポート(閲覧数・行動数など)",
          "営業時間・臨時休業の即時反映",
        ]}
        notIncluded={[
          "プロフィール写真の撮影(別途撮影業者をご紹介)",
          "悪意のある口コミに対する法的対応",
          "検索順位や表示回数の保証",
        ]}
      />

      <FAQSection
        faqs={[
          {
            q: "既にビジネスプロフィールを持っていますが大丈夫?",
            a: "問題ありません。既存プロフィールの権限をいただければ、現状診断 → 改善 → 運用代行に移行します。",
          },
          {
            q: "投稿内容はどう決まりますか?",
            a: "初回打合せでお店の世界観・季節イベントを伺い、月次の投稿カレンダーを作成。配信前にご確認いただける仕組みです。",
          },
          {
            q: "悪意のあるコメントが来た場合は?",
            a: "明らかな誹謗中傷・虚偽の場合はGoogleへ削除申請を代行。事実に基づく低評価は丁寧な返信で対応します。",
          },
          {
            q: "順位が上がる保証はありますか?",
            a: "保証はいたしかねます。表示のされ方はさまざまな要因で変わるためです。ただし閲覧数・行動数を確認しながら、改善できるところは継続して整えます。",
          },
        ]}
      />

      <NextStepSection current="meo" />
    </>
  );
}
