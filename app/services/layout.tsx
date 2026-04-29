import { StickyTop, SiteFooter } from "../components/SiteChrome";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyTop />
      {children}
      <SiteFooter />
    </>
  );
}
