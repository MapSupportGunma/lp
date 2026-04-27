import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー — マップサポート群馬",
};

export default function PrivacyPage() {
  return (
    <>
      <p className="eyebrow">Privacy Policy</p>
      <h1 className="mt-3 font-display text-[34px] font-medium leading-tight tracking-tight text-fg md:text-[42px]">
        プライバシーポリシー
      </h1>
      <p className="mt-4 text-[13px] text-fg-mute">最終更新日: 2026年4月27日</p>

      <div className="mt-12 max-w-none space-y-10 text-[14px] leading-relaxed text-fg-soft md:text-[15px]">
        <Section title="1. 取得する情報">
          <p>
            マップサポート群馬(以下「本サービス」)は、お客様より以下の情報をお預かりします。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>お問い合わせ内容: お名前、メールアドレス、お店の情報、ご相談内容</li>
            <li>制作物のヒアリング情報: お店の世界観・ターゲット顧客・希望する機能 等</li>
            <li>本サービスの利用ログ(アクセス時刻、操作内容)</li>
          </ul>
          <p className="mt-3 text-[13px] text-fg-mute">
            ※ クレジットカード情報は当社で保持せず、決済代行会社に直接送信されます(導入時)。
          </p>
        </Section>

        <Section title="2. 利用目的">
          <p>取得した情報は以下の目的でのみ利用します。</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>本サービスの提供および改善</li>
            <li>制作物の作成・運用代行</li>
            <li>お客様への重要なお知らせの送信</li>
            <li>ご請求およびサポート対応</li>
          </ul>
        </Section>

        <Section title="3. 第三者への提供">
          <p>
            法令に基づく場合を除き、お客様の同意なく第三者へ個人情報を提供することはありません。
          </p>
          <p className="mt-3">
            ただし以下の業務委託先に、目的達成に必要な範囲で情報を提供する場合があります。これらの委託先には適切な秘密保持義務を課しています。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>OpenAI / Anthropic(AI処理: 構成案生成・コピー作成のため)</li>
            <li>Vercel(ホスティング基盤)</li>
            <li>Google(Workspace、Search Console、Analytics 等)</li>
            <li>LINE株式会社(LINE 公式アカウント関連業務)</li>
          </ul>
        </Section>

        <Section title="4. データの保管・セキュリティ">
          <p>
            すべてのデータは暗号化された通信(TLS)で送受信し、保管時も適切なアクセス制御を適用しています。
          </p>
        </Section>

        <Section title="5. 開示・訂正・削除">
          <p>
            お客様は、ご自身の個人情報の開示・訂正・削除をいつでも当社にご請求いただけます。本サービスの解約時には、全データのエクスポートが可能です。
          </p>
        </Section>

        <Section title="6. Cookie・アクセス解析">
          <p>
            本サービスはサイト改善等の目的でCookieを使用する場合があります。アクセス解析ツール(導入する場合)についても、個人を特定しない形でのみ利用します。
          </p>
        </Section>

        <Section title="7. お問い合わせ">
          <p>
            本ポリシーに関するお問い合わせは、
            <a
              href="mailto:info@gunma-meo.com"
              className="underline-offset-4 hover:underline"
            >
              info@gunma-meo.com
            </a>
            までご連絡ください。
          </p>
        </Section>

        <Section title="8. 改定">
          <p>
            本ポリシーは法令の改正やサービスの変更に伴い、予告なく改定する場合があります。重要な変更がある場合は、本サービス上で通知いたします。
          </p>
        </Section>
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-[18px] font-medium tracking-tight text-fg md:text-[20px]">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
