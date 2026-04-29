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
  title: "LP制作 — マップサポート群馬",
  description:
    "個人サロン・地域事業者のためのLP制作。立ち上げ期 ¥30,000・最短3日納品。AI支援で従来の1/3期間で。",
};

export default function LpPage() {
  return (
    <>
      <ServiceHero
        title="LP 制作"
        tagline="新規のお客さまに最初に渡す、24時間365日働く「営業マン」。お店の魅力を1ページに凝縮してお届けします。"
        image="/lp/service-lp.png"
        price="¥30,000"
        originalPrice="¥50,000"
        duration="最短 3日"
      />

      <FeaturesSection
        title={<>このサービスでできること</>}
        features={[
          {
            image: "/lp/process-01-listen.png",
            title: "ヒアリング & 構成設計",
            body: "お店の世界観・お客さま像を伺い、心理段階に沿った導線設計を行います。",
          },
          {
            image: "/lp/process-02-design.png",
            title: "コピー & デザイン",
            body: "1秒で「自分のための店」と感じていただけるコピーとデザインに仕上げます。",
          },
          {
            image: "/lp/process-03-build.png",
            title: "スマホ最適化",
            body: "お客さまの8割以上を占めるスマホ閲覧を前提に、PC・タブレットも対応。",
          },
          {
            image: "/lp/process-04-analyze.png",
            title: "公開・基本SEO",
            body: "ドメイン設定から公開まで一括対応。基本的なSEO設定もこちらで。",
          },
        ]}
      />

      <FlowSection
        title={<>ご相談から納品まで</>}
        steps={[
          { title: "ヒアリング", body: "Zoom等で30分。お店の世界観や目的を伺います。" },
          { title: "ご契約", body: "ご納得いただいてからのご契約。お見積後の追加費用なし。" },
          { title: "制作", body: "AI支援の開発環境で構成 → 実装を一気に。" },
          { title: "納品", body: "ご確認 → 修正(2回まで料金内) → 納品。" },
        ]}
      />

      <PricingBlock
        current="¥30,000"
        original="¥50,000"
        unit="/ 一括 / 最短3日納品(税抜)"
        includes={[
          "1ページLP(レスポンシブ対応)",
          "ドメイン設定サポート",
          "お問い合わせフォーム1つ",
          "修正2回まで料金内",
          "公開後の軽微な調整1ヶ月無料",
        ]}
        notIncluded={[
          "ロゴ制作・写真撮影(ご紹介可能)",
          "本格的な動画制作",
          "サーバー・ドメイン取得費用(別途実費)",
        ]}
      />

      <FAQSection
        faqs={[
          {
            q: "本当に3日で完成しますか?",
            a: "AI支援の最新開発環境を活用し、最短3日で納品しています。混雑時はお見積時にご案内します。",
          },
          {
            q: "既存HPがある場合の差し替えは?",
            a: "ドメインそのままで中身を新しいLPに差し替える形で対応します。既存サーバーの構成によっては移管手続きをご案内します。",
          },
          {
            q: "写真がない場合は?",
            a: "ロイヤリティフリー素材をご提案するか、撮影業者をご紹介します。お持ちの素材(スマホ撮影でも可)を最大限活かす方向でも対応可能です。",
          },
          {
            q: "修正は何回までできますか?",
            a: "料金内で2回まで。3回目以降は1回 ¥10,000(税抜)で承ります。事前のすり合わせを丁寧に行い、修正回数自体を減らせるよう努めています。",
          },
        ]}
      />

      <NextStepSection current="lp" />
    </>
  );
}
