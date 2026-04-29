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
  title: "LINE公式 構築・運用 — マップサポート群馬",
  description:
    "個人サロン・地域事業者のためのLINE公式 構築+運用代行。立ち上げ期 初期¥18,000 + 月¥9,000。",
};

export default function LinePage() {
  return (
    <>
      <ServiceHero
        title="LINE 公式 構築・運用"
        tagline="お客さまとの「関係構築・再来店」を自動化する基盤を組み立て、月次の配信運用まで一貫してお引き受けします。"
        image="/lp/service-line.png"
        price="初期 ¥18,000 + 月 ¥9,000"
        originalPrice="初期 ¥30,000 + 月 ¥15,000"
        duration="最短 1週間"
      />

      <FeaturesSection
        title={<>このサービスでできること</>}
        features={[
          {
            image: "/lp/process-01-listen.png",
            title: "アカウント基本設計",
            body: "業種・目的に合わせた基本情報・カバー画像・プロフィールメッセージを整えます。",
          },
          {
            image: "/lp/process-02-design.png",
            title: "リッチメニュー & 自動化",
            body: "リッチメニュー設計、あいさつメッセージ自動化、友だち追加QR一式まで。",
          },
          {
            image: "/lp/process-03-build.png",
            title: "月次の配信代行",
            body: "月4本の配信メッセージ作成・スケジュール配信。再来店を促す内容を継続的に。",
          },
          {
            image: "/lp/process-04-analyze.png",
            title: "開封率レポート",
            body: "開封率・クリック率・友だち増減を月次でご報告。次月の改善提案まで。",
          },
        ]}
      />

      <FlowSection
        title={<>ご相談から運用開始まで</>}
        steps={[
          { title: "ヒアリング", body: "Zoom等で30分。配信したい内容や活用法を伺います。" },
          { title: "ご契約", body: "ご納得いただいてからのご契約。" },
          { title: "構築", body: "アカウント設定・リッチメニュー・自動化を一括構築。" },
          { title: "運用開始", body: "月次配信4本・レポート・改善提案を継続。" },
        ]}
      />

      <PricingBlock
        current="初期 ¥18,000 + 月 ¥9,000"
        original="初期 ¥30,000 + 月 ¥15,000"
        unit="/ 初期費用 + 月額(税抜)"
        includes={[
          "LINE公式アカウント基本設定",
          "リッチメニュー設計・設置(2階層まで)",
          "あいさつメッセージ自動化(クーポン付与含む)",
          "友だち追加QRコード一式(店頭・SNS・名刺用)",
          "月次配信代行(月4本)",
          "月次レポート(開封率・クリック率・友だち増減)",
        ]}
        notIncluded={[
          "LINE公式アカウントの月額利用料(別途、無料プランあり)",
          "高度なAPI連携(Lステップ等のMA連携)",
          "1on1チャット対応の代行",
        ]}
      />

      <FAQSection
        faqs={[
          {
            q: "LINE公式アカウントは自分で作る必要がありますか?",
            a: "アカウント開設はお店オーナー名義で行う必要がありますが、開設手順をご案内し、画面共有しながら一緒に進めます。15分程度で完了します。",
          },
          {
            q: "LINE公式の月額利用料はいくらですか?",
            a: "LINE社の利用料は別途必要です。月1,000通までは無料プラン、月15,000通まで月¥5,000のライトプラン等。多くの個人事業者さまは無料プランで充分です。",
          },
          {
            q: "構築だけ・運用なしも可能ですか?",
            a: "はい、構築のみ(初期 ¥18,000 のみ)もご相談承ります。ただし、構築後の運用なしだとせっかくのアカウントが眠ってしまうケースが多いため、初月は運用をお試しいただくことをおすすめしています。",
          },
          {
            q: "既に運用しているLINE公式の改善依頼もできますか?",
            a: "はい、対応可能です。現状のアカウントを拝見した上で、改善提案+実装の見積もりをお出しします。",
          },
        ]}
      />

      <NextStepSection current="line" />
    </>
  );
}
