"use client";

import { useState, useRef } from "react";

const ACCESS_KEY = "68fb3a41-73f0-4af5-a8fa-d7f61f9d3b9c";
const ENDPOINT = "https://api.web3forms.com/submit";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(formRef.current),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(
          "送信に失敗しました。お手数ですが info@gunma-meo.com まで直接ご連絡ください。"
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "通信エラーが発生しました。お手数ですが info@gunma-meo.com まで直接ご連絡ください。"
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center justify-center gap-4 p-10 text-center md:p-14">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="h-7 w-7"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
        <h3 className="font-display text-[22px] font-medium tracking-tight text-fg md:text-[26px]">
          お問い合わせありがとうございます
        </h3>
        <p className="max-w-md text-[14px] leading-relaxed text-fg-soft md:text-[15px]">
          原則 翌営業日まで にご返信いたします。
          <br />
          しばらくお待ちくださいませ。
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="card grid gap-5 p-7 md:p-9"
    >
      {/* hidden fields */}
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input
        type="hidden"
        name="subject"
        value="マップサポート群馬 お問い合わせ"
      />
      <input type="hidden" name="from_name" value="マップサポート群馬 LP" />
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        aria-hidden
      />

      <div className="flex items-baseline justify-between border-b border-line/70 pb-4">
        <p className="eyebrow">お問い合わせ</p>
        <p className="text-[11px] text-fg-mute">
          <span className="text-accent">*</span> は必須項目
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="お店の名前" name="shop_name" required placeholder="例: ○○ネイルサロン" />
        <Field label="ご担当者様お名前" name="name" required placeholder="例: 山田 花子" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="メールアドレス"
          name="email"
          type="email"
          required
          placeholder="例: hanako@example.com"
        />
        <Field label="お電話番号" name="phone" type="tel" placeholder="(任意) 例: 090-xxxx-xxxx" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="お店の所在地" name="location" placeholder="例: 群馬県前橋市" />
        <SelectField
          label="お問い合わせ種別"
          name="inquiry_type"
          required
          options={[
            "無料相談を希望",
            "サービス内容について",
            "料金について",
            "資料請求",
            "その他",
          ]}
        />
      </div>

      <TextareaField
        label="ご質問・ご要望"
        name="message"
        placeholder="現在のお悩みや、目指したい方向などをご記入ください(任意)"
      />

      {status === "error" && (
        <p className="rounded-sm border border-accent/40 bg-accent/5 px-4 py-3 text-[13px] text-accent">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col gap-3 border-t border-line/70 pt-5 md:flex-row md:items-center md:justify-between">
        <p className="text-[12px] leading-relaxed text-fg-mute md:max-w-md">
          送信内容は{" "}
          <a
            href="/legal/privacy"
            className="underline-offset-4 hover:underline"
          >
            プライバシーポリシー
          </a>{" "}
          に基づき適切に管理いたします。
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary justify-center disabled:opacity-50"
        >
          <span>
            {status === "submitting" ? "送信中..." : "送信する"}
          </span>
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

/* ────────── Field components ────────── */

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] font-medium text-fg-soft">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-fg outline-none transition focus:border-fg"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] font-medium text-fg-soft">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-fg outline-none transition focus:border-fg"
      >
        <option value="" disabled>
          選択してください
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] font-medium text-fg-soft">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="resize-y border border-line bg-bg-elev px-3 py-2.5 text-[14px] text-fg outline-none transition focus:border-fg"
      />
    </label>
  );
}
