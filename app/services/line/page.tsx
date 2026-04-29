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
  title: "LINE公式構築 — マップサポート群馬",
  description:
    "個人サロン・地域事業者のためのLINE公式構築。立ち上げ期 ¥18,000・最短1週間納品。",
};

export default function LinePage() {
  return (
    <>
      <ServiceHero
        title="LINE 公式構築"
        tagline="お客さまとの『関係構築・再来店』を自動化する基盤を、最初の1週間で組み立てます。"
        image="/lp/service-line.png"
        price="¥18,000"
        originalPrice="¥30,000"
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
            title: "リッチメニュー設置",
            body: "1タップで予約・メニュー・アクセスに飛べる導線を設計します。",
          },
          {
            image: "/lp/process-03-build.png",
            title: "あいさつ自動化",
            body: "友だち追加直後の重要な瞬間を自動化。クーポン配布まで含めて整えます。",
          },
          {
            image: "/lp/process-04-analyze.png",
            title: "友だち追加導線",
            body: "QRコード・店内POP・SNS埋め込みなど、多経路の導線を整備。",
          },
        ]}
      />

      <FlowSection
        title={<>ご相談から納品まで</>}
        steps={[
          { title: "ヒアリング", body: "Zoom等で30分。配信したい内容や活用法を伺います。" },
          { title: "ご契約", body: "ご納得いただいてからのご契約。" },
          { title: "構築", body: "アカウント設定・リッチメニュー・自動化を一括構築。" },
          { title: "納品", body: "QRコード等の運用キット一式とともに納品。" },
        ]}
      />

      <PricingBlock
        current="¥18,000"
        original="¥30,000"
        unit="/ 構築一式 / 最短1週間納品(税抜)"
        includes={[
          "LINE公式アカウント基本設定",
          "リッチメニュー設計・設置(2階層まで)",
          "あいさつメッセージ自動化(クーポン付与含む)",
          "友だち追加QRコード一式(店頭・SNS・名刺用)",
          "公開後の軽微な調整1ヶ月無料",
        ]}
        notIncluded={[
          "LINE公式アカウントの月額利用料(別途、無料プランあり)",
          "高度なAPI連携(Lステップ等のMA連携)",
          "月次の配信代行(別契約 月¥9,000〜)",
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
            a: "LINE社の利用料は別途必要です。月1,000通までは無料プランで対応可能。多くの個人事業者さまは無料プランで充分です。",
          },
          {
            q: "メッセージ作成も任せられますか?",
            a: "構築時の自動メッセージはこちらで作成します。月次の配信代行(月¥9,000〜)をお申込みいただければ、毎月の配信メッセージも作成・配信代行します。",
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
