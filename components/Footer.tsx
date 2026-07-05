import { navItems } from "@/lib/content";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="#top" aria-label="ShijimiWORKs ホーム">
              <BrandMark className="brand__mark" />
              ShijimiWORKs
            </a>
            <p>
              小さく、速く、伝わるWebサイトをつくる、フリーランスのWebフロントエンドエンジニアです。
            </p>
          </div>
          <nav className="footer__nav" aria-label="フッターナビゲーション">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="footer__bottom">
          © {year} ShijimiWORKs — Freelance Frontend Engineer. Portfolio sample
          site.
        </p>
      </div>
    </footer>
  );
}
