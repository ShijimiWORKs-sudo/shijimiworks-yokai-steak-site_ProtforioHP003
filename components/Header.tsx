"use client";

import { useState } from "react";
import { navItems } from "@/lib/content";
import { BrandMark } from "./BrandMark";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="ShijimiWORKs ホーム">
          <BrandMark className="brand__mark" />
          ShijimiWORKs
        </a>

        <nav
          className="nav"
          data-open={open}
          id="global-nav"
          aria-label="グローバルナビゲーション"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="nav__link"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-primary nav__cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            制作を相談する
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="global-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
