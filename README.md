# ShijimiWORKs | Freelance Frontend Engineer

小さく、速く、伝わるWebサイトをつくる、フリーランスWebフロントエンドエンジニアのポートフォリオ／集客用サイトです。

- **管理番号：** 003
- **サイト種別：** フリーランス用HP
- **屋号：** ShijimiWORKs

---

## サイト概要

ShijimiWORKsは、個人・小規模事業者・制作会社向けに、Webサイト制作やフロントエンド実装を行う個人制作スタジオという設定の、架空ポートフォリオサイトです。

Web制作・LP制作・フロントエンド実装・既存サイト改善などの相談を受け、問い合わせ（コンタクト獲得）につなげることを目的とした、1ページ完結型のランディングページとして制作しています。

> 本サイトはポートフォリオ掲載用のサンプルです。会社概要・実績・料金・プロフィールはすべて架空の内容です。

---

## 使用技術

| 分類 | 内容 |
| --- | --- |
| フレームワーク | Next.js 15 (App Router) |
| ライブラリ | React 19 |
| 言語 | TypeScript |
| スタイル | globals.css（CSS変数によるデザイントークン設計） |
| アイコン／イラスト | すべて自作のインラインSVG |
| デプロイ想定 | Node.js 環境 / 静的ホスティング |

---

## セクション構成

1ページ完結のLP構成で、グローバルナビはページ内アンカーリンクです。

| セクション | 内容 |
| --- | --- |
| Hero | サイトの第一印象・キャッチコピー・CTA（制作を相談する／実績を見る） |
| About | ShijimiWORKsの紹介 |
| Service | 提供サービス6種（Webサイト制作／LP制作／フロントエンド実装／既存サイト改善／CMS整備／AI活用） |
| Works | 架空の制作実績6件（タイトル・種別・担当範囲・説明・技術タグ） |
| Strength | 大切にしていること6項目 |
| Flow | ご依頼から納品までの7ステップ |
| Price | 料金の目安（架空） |
| FAQ | よくあるご質問6件（アコーディオン） |
| Contact | 相談用フォーム（フロントエンドUIのみ・ダミー完了表示） |
| Footer | 屋号・ナビ・コピーライト |

### ナビゲーション

`About / Service / Works / Strength / Flow / Price / FAQ / Contact`

---

## 画像・イラスト素材について

本サイトで使用しているイラスト・アイコン・ロゴ・OGP画像は、**すべて制作者が新規に作成したインラインSVG**です。外部サイトの画像・イラストは一切ダウンロード・流用していません。

| 素材 | 出典 | 商用利用可否 |
| --- | --- | --- |
| ブランドロゴ（BrandMark） | 自作SVG（`components/BrandMark.tsx`） | 可（自作のためライセンス制約なし） |
| Heroイラスト | 自作SVG（`components/illustrations/HeroIllustration.tsx`） | 可（自作） |
| Aboutイラスト | 自作SVG（`components/illustrations/AboutIllustration.tsx`） | 可（自作） |
| Worksサムネイル | 自作SVG（`components/illustrations/WorkThumb.tsx`） | 可（自作） |
| UIアイコン一式 | 自作SVG（`components/Icons.tsx`） | 可（自作） |
| favicon | 自作SVG（`public/favicon.svg`） | 可（自作） |
| OGP画像 | 自作SVG（`public/og-image.svg`） | 可（自作） |

### 商用利用可否の確認結果

- すべての視覚素材は制作者による自作のため、**商用利用可**です。第三者の著作物・ライセンス対象素材は含まれていません。
- 参考サイト（デザインの方向性のみを参考にしたもの）の文章・画像・ロゴ・プロフィール・実績は一切使用していません。

### 参考にした無料素材サービス（今回は未使用・ライセンス確認先の参考）

自作SVGで代替したため実際の利用はありませんが、同種の素材が必要な場合の商用利用可能サービスとライセンス確認先は以下のとおりです。

- Unsplash — <https://unsplash.com/license>
- Pexels — <https://www.pexels.com/license/>
- Pixabay — <https://pixabay.com/service/license-summary/>
- unDraw — <https://undraw.co/license>
- Storyset (Freepik) — <https://storyset.com/terms>
- Open Doodles — <https://www.opendoodles.com/>
- Lucide Icons — <https://lucide.dev/license>
- Font Awesome Free — <https://fontawesome.com/license/free>
- Iconoir — <https://iconoir.com/>

---

## SEO / OGP

- **title：** `ShijimiWORKs | Freelance Frontend Engineer`
- **description：** ShijimiWORKsは、Webサイト制作、LP制作、フロントエンド実装、既存サイト改善を行うフリーランスWebフロントエンジニアのポートフォリオサイトです。
- **OGP画像：** `public/og-image.svg`（自作・商用利用可）

メタデータは `app/layout.tsx` の `metadata` / `viewport` で設定しています。

---

## ディレクトリ構成

```text
003/
├─ app/
│  ├─ globals.css      # デザイントークン & 全体スタイル
│  ├─ layout.tsx       # メタデータ / OGP / html骨格
│  └─ page.tsx         # セクションの組み立て
├─ components/
│  ├─ Header.tsx / Hero.tsx / About.tsx / ServiceCards.tsx
│  ├─ WorksGrid.tsx / Strength.tsx / Flow.tsx / Price.tsx
│  ├─ FAQ.tsx / Contact.tsx / Footer.tsx
│  ├─ BrandMark.tsx / Icons.tsx
│  └─ illustrations/   # 自作SVGイラスト
├─ lib/
│  └─ content.ts       # サービス・実績・FAQ等のコンテンツデータ
├─ public/
│  ├─ favicon.svg
│  └─ og-image.svg
├─ next.config.mjs
├─ tsconfig.json
├─ package.json
└─ README.md
```

---

## 起動方法

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev
```

Windows環境（PowerShell 等）で必要な場合は `npm.cmd` を利用してください。

```bash
npm.cmd install
npm.cmd run dev
```

## ビルド方法

```bash
# 型チェック
npm run typecheck

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start
```

---

## レスポンシブ対応

- PC / タブレット / スマートフォン（375px）に対応
- 375px幅で横スクロールが発生しないことを確認
- スマホではグローバルナビをハンバーガーメニュー化
- カードは画面幅に応じて自然に縦並びへ切り替え

---

## GitHubリポジトリ

<https://github.com/ShijimiWORKs-sudo/shijimiworks-yokai-steak-site_ProtforioHP003>

---

## ライセンス / 注意事項

- 本リポジトリはポートフォリオ用のサンプル制作物です。
- 掲載している会社概要・実績・料金・FAQ・プロフィールはすべて架空です。
- 視覚素材はすべて自作のため、商用利用可能です。
