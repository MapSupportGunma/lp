import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 — マップサポート群馬",
};

export default function TokushohoPage() {
  return (
    <>
      <p className="eyebrow">Legal Disclosure</p>
      <h1 className="mt-3 font-display text-[34px] font-medium leading-tight tracking-tight text-fg md:text-[42px]">
        特定商取引法に基づく表記
      </h1>
      <p className="mt-4 text-[13px] text-fg-mute">最終更新日: 2026年4月27日</p>

      <dl className="mt-12 divide-y divide-line/70">
        <Row label="販売業者">{P.seller}</Row>
        <Row label="運営責任者">{P.owner}</Row>
        <Row label="所在地">{P.address}</Row>
        <Row label="電話番号">
          {P.phone}
          <p className="mt-1 text-[12px] text-fg-mute">
            お問い合わせはメール({P.email})にて承っております。
          </p>
        </Row>
        <Row label="メールアドレス">{P.email}</Row>
        <Row label="販売価格">
          各サービスの公式サイト記載のとおり(税抜)
          <p className="mt-1 text-[12px] text-fg-mute">
            LP制作 ¥50,000、LINE 公式構築 ¥30,000、MEO 代行 初期 ¥20,000 + 月
            ¥15,000、SNS 運用 月 ¥30,000〜 等
          </p>
        </Row>
        <Row label="商品代金以外の必要料金">
          消費税(10%)、銀行振込の場合は振込手数料(お客様負担)
        </Row>
        <Row label="お支払方法">
          銀行振込
          <br />
          (今後、クレジットカード払いを順次導入予定)
        </Row>
        <Row label="お支払時期">
          初期費用: 着手前にご請求書発行、発行日より14日以内にお支払い
          <br />
          月額費用: 月初に翌月分をご請求、発行日より14日以内にお支払い
        </Row>
        <Row label="サービス提供時期">
          ご入金確認後、お打合せにて着手日を決定。LP制作の場合、
          着手から3営業日以内に納品いたします。
        </Row>
        <Row label="返品・キャンセル">
          サービスの性質上、着手後の返金は原則承っておりません。
          <br />
          着手前のキャンセルは無料で承ります。
          <br />
          月額サービスは月単位での解約が可能です(日割り返金なし)。
        </Row>
        <Row label="動作環境">
          推奨ブラウザ: Google Chrome / Safari / Microsoft Edge の最新版
        </Row>
      </dl>

      <p className="mt-12 rounded-sm border border-line bg-bg-elev p-5 text-[13px] leading-relaxed text-fg-soft">
        本表記の各項目について、詳細やご不明点はメールにてお気軽にお尋ねください。
      </p>
    </>
  );
}

/**
 * NOTE: 「請求があった場合に開示」方針を採用。
 * 法人化時 or 番地公開する際にこの値を実情報に置換する。
 */
const P = {
  seller: "マップサポート群馬(個人事業主 屋号)",
  owner: "木村 琉唯",
  address: "ご請求があった場合、遅滞なく開示いたします。",
  phone: "ご請求があった場合、遅滞なく開示いたします。",
  email: "info@gunma-meo.com",
};

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[12rem_1fr] md:gap-6">
      <dt className="font-display text-[14px] font-medium tracking-tight text-fg md:text-[15px]">
        {label}
      </dt>
      <dd className="text-[14px] leading-relaxed text-fg-soft md:text-[15px]">
        {children}
      </dd>
    </div>
  );
}
