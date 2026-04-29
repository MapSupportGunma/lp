import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col bg-bg">
      <header className="border-b border-line/70 bg-bg/85 backdrop-blur-md">
        <div className="container-mod flex items-center justify-between py-4">
          <Link href="/" className="flex items-baseline gap-2.5">
            <span className="font-display text-[22px] font-medium leading-none tracking-tight text-fg">
              マップサポート群馬
            </span>
            <span className="text-[13px] font-medium text-fg-mute">群馬</span>
          </Link>
          <Link
            href="/"
            className="text-[13px] text-fg-soft transition hover:text-fg"
          >
            ← トップへ戻る
          </Link>
        </div>
      </header>
      <article className="container-mod max-w-3xl flex-1 py-16 md:py-24">
        {children}
      </article>
      <footer className="border-t border-line/70 py-8 text-center text-[11px] uppercase tracking-[0.18em] text-fg-mute">
        © 2026 マップサポート群馬
      </footer>
    </main>
  );
}
