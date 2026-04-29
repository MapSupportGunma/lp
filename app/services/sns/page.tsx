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
  title: "SNS運用 — マップサポート群馬",
  description:
    "個人サロン・地域事業者のためのInstagram運用代行。月4本投稿+ストーリーズ+月次レポート、立ち上げ期 月¥18,000~。リール制作はオプション +¥10,000/月。",
};

export default function SnsPage() {
  return (
    <>
      <ServiceHero
        title="SNS 運用"
        tagline="お店の世界観を毎週積み上げる、ブランド構築のパートナー。Instagram を中心に資産を育てます。"
        image="/lp/service-sns.png"
        price="月 ¥18,000~"
        originalPrice="月 ¥30,000~"
        duration="最短 即週"
      />

      <FeaturesSection
        title={<>このサービスでできること</>}
        features={[
          {
            image: "/lp/process-01-listen.png",
            title: "コンテンツ企画",
            body: "月次テーマと週次投稿の設計。お店のシーズン感や伝えたい価値から最適な切り口を選びます。",
          },
          {
            image: "/lp/process-02-design.png",
            title: "画像制作",
            body: "お店の世界観に合わせた画像構成・配色・トーン統一。月4本のフィード投稿を仕上げます。",
          },
          {
            image: "/lp/process-03-build.png",
            title: "キャプション執筆",
            body: "共感を呼ぶ文章 + 戦略的なハッシュタグ + 行動を促す結びの一文を設計します。",
          },
          {
            image: "/lp/process-04-analyze.png",
            title: "分析・改善",
            body: "エンゲージメント率・保存数・プロフィールタップを月次レポート化。翌月に反映します。",
          },
        ]}
      />

      <FlowSection
        title={<>ご相談から運用開始まで</>}
        steps={[
          { title: "ヒアリング", body: "Zoom等で30分。お店の世界観と方向性を伺います。" },
          { title: "ご契約", body: "ご納得いただいてからのご契約。" },
          { title: "初回企画", body: "月次テーマと初月の投稿カレンダーを作成・ご確認。" },
          { title: "運用開始", body: "毎週の投稿+月次レポートで継続的に改善。" },
        ]}
      />

      <PricingBlock
        current="月 ¥18,000~"
        original="月 ¥30,000~"
        unit="/ 月額(税抜) / Instagram メイン"
        includes={[
          "月4本の投稿企画・画像作成・キャプション執筆",
          "ストーリーズ制作 週1-2本",
          "ハッシュタグ戦略の月次見直し",
          "月次分析レポート",
        ]}
        addOns={[
          { label: "リール制作(30秒以内・月2本まで)", price: "+ ¥10,000 / 月" },
        ]}
        notIncluded={[
          "プロカメラマンによる撮影(必要に応じてご紹介)",
          "本格的な動画編集(5分以上の長尺コンテンツ)",
          "TikTok・YouTube等のInstagram外プラットフォーム",
          "広告運用代行(別途ご相談)",
        ]}
      />

      <FAQSection
        faqs={[
          {
            q: "投稿頻度はどのくらいですか?",
            a: "月4本のフィード投稿+週1-2本のストーリーズを標準としています。お店の状況に合わせて調整可能です。投稿本数の追加は別途ご相談ください。",
          },
          {
            q: "写真撮影は誰がするのですか?",
            a: "撮影自体はお客さま側でお願いしております(スマホ撮影で充分なクオリティのことが多いです)。撮影のコツや構図のご案内はこちらで行います。",
          },
          {
            q: "リールは作ってもらえますか?",
            a: "オプションとして +¥10,000/月 で、30秒以内のリールを月2本まで制作します。素材(動画クリップ・写真)は構成からこちらでご提案します。フィード投稿よりも工数がかかるため別料金とさせていただいています。",
          },
          {
            q: "既存アカウントの改善依頼もできますか?",
            a: "はい、対応可能です。アカウント診断+運用引継ぎを行い、現状のフォロワーを活かしながら世界観を磨き直します。",
          },
        ]}
      />

      <NextStepSection current="sns" />
    </>
  );
}
