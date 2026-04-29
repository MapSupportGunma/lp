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
  title: "MEO代行 — マップサポート群馬",
  description:
    "個人サロン・地域事業者のためのMEO代行。立ち上げ期 初期¥12,000+月¥9,000。",
};

export default function MeoPage() {
  return (
    <>
      <ServiceHero
        title="MEO 代行"
        tagline="Googleマップから、店までの最短ルート。『業種+地域』検索の上位3件を継続的に守ります。"
        image="/lp/service-meo.png"
        price="¥12,000 + 月¥9,000"
        originalPrice="¥20,000 + 月¥15,000"
        duration="即日着手"
      />

      <FeaturesSection
        title={<>このサービスでできること</>}
        features={[
          {
            image: "/lp/process-01-listen.png",
            title: "プロフィール最適化",
            body: "カテゴリ・属性・営業時間・写真を網羅整備。検索アルゴリズムの初期スコアを最大化します。",
          },
          {
            image: "/lp/process-02-design.png",
            title: "口コミ返信代行",
            body: "全口コミに、お店のトーンを保ちつつ丁寧に返信。低評価には誠実な対応を。",
          },
          {
            image: "/lp/process-03-build.png",
            title: "隔週の投稿運用",
            body: "お知らせ・新メニュー・季節情報を月2本発信。アクティブな店として評価されます。",
          },
          {
            image: "/lp/process-04-analyze.png",
            title: "順位レポート月次報告",
            body: "主要キーワードの順位推移・閲覧数・行動数を月次で可視化。改善案を提示します。",
          },
        ]}
      />

      <FlowSection
        title={<>ご相談から運用開始まで</>}
        steps={[
          { title: "ヒアリング", body: "Zoom等で30分。現状とターゲットキーワードを伺います。" },
          { title: "ご契約", body: "ご納得いただいてからのご契約。" },
          { title: "プロフィール最適化", body: "ビジネスプロフィールを徹底整備。即日〜数日で完了。" },
          { title: "月次運用開始", body: "投稿・口コミ返信・レポート提出を継続。" },
        ]}
      />

      <PricingBlock
        current="¥12,000 + 月 ¥9,000"
        original="¥20,000 + 月 ¥15,000"
        unit="/ 初期費用 + 月額(税抜)"
        includes={[
          "Googleビジネスプロフィール 初期最適化",
          "全口コミへの返信代行(月10件まで)",
          "投稿運用(月2本)",
          "月次レポート(順位・閲覧数・行動数)",
          "営業時間・臨時休業の即時反映",
        ]}
        notIncluded={[
          "プロフィール写真の撮影(別途撮影業者をご紹介)",
          "悪意のある口コミに対する法的対応",
          "Googleアルゴリズム変更による順位変動の保証",
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
            a: "保証はいたしかねます。Googleのアルゴリズムは公開されていないためです。ただし主要指標(閲覧数・行動数)の改善は高い確度でご提供できます。",
          },
        ]}
      />

      <NextStepSection current="meo" />
    </>
  );
}
