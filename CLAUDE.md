# CLAUDE.md — 水交社（suikosha）AIエージェント向けガイドライン

> 本書は AI Coding Agent（Claude）が本リポジトリ（`imperial-navy/suikosha`）において作業を行う際の心得である。

---

## リポジトリ概要

- **名称**: 水交社 假想ウェブサイト v1876.10.1
- **組織**: `@Imperial-navy`（帝國海軍）
- **URL**: https://imperial-navy.github.io/suikosha/
- **GitHub**: https://github.com/imperial-navy/suikosha
- **性質**: 帝國海軍將校の社交倶樂部「水交社」の假想サイト。時代設定は1936年（昭和十一年）。軍人のみならず一般人も閲覧する想定の、昭和モダン（アール・デコ）意匠の風刺プロジェクト。

---

## プロジェクト構成

```
imperial-navy/suikosha/
├── src/
│   ├── data.ts                  # 📋 データ層（御品書・催事曆・社告・支社ダヨリ。型定義付き）
│   ├── build.ts                 # 🔨 組立係（template.html に data.ts を流し込み index.html を生成）
│   ├── template.html            # 🏛 本館の骨格（Tailwind ユーティリティ + プレースホルダ）
│   └── style.css                # 樣式帖の原本（@theme トークン + 裝飾 components）
├── .github/workflows/
│   └── eizen.yaml               # 🏛 營繕掛 — Tailwind 組立 + Pages 公示（Deploy）
├── tsconfig.json                # TypeScript 設定（strict: true）
├── package.json                 # npm 設定（private: true）
├── .gitignore                   # node_modules / style.css（生成物）/ dist
├── README.md                    # 普請の仕樣
└── CLAUDE.md                    # 本書
```

- `index.html` と `style.css`（ルート）は **生成物**。`npm run build`（tsc → node build/build.js → Tailwind CLI）で生成される。手動編輯禁止。内容の更新は `src/data.ts`、骨格の変更は `src/template.html` を編輯すること。
- 色・書体トークンは `src/style.css` の `@theme` に定義（`--color-kon` 紺 / `--color-shu` 朱 / `--color-kin` 金 / `--color-zou` 象牙 等）。放射光線・斜め縞・二重枠等のアール・デコ裝飾は `@layer components` に定義。

## ビルド・デプロイ

```bash
npm run build       # tsc → build.js（index.html 生成）→ Tailwind CLI（style.css 生成）
npm run typecheck   # 型檢査のみ（strict: true）
npm run watch       # 樣式帖の監視ビルド
```

`master` への push で `eizen.yaml`（營繕掛）が Tailwind を組立て `dist/`（index.html + style.css）を GitHub Pages にデプロイする。

## 文体・世界観

- **本サイトは一般公開向け**。文体は**旧字体 + カタカナの丁寧語**（「〜デゴザイマス」調。昭和初期の百貨店広告風）。**平仮名は使用禁止**（固有名詞等の已むを得ぬ場合を除く）。
- README・ワークフロー等の管理文書は組織共通の旧字体+カタカナ助詞文語でよい。
- 年号は西暦と和暦を併記する（例: 1936年（昭和十一年））。
- 「天皇」単体表記の禁止等、組織共通の命名規則は [kaigun の CLAUDE.md](https://github.com/imperial-navy/kaigun/blob/master/CLAUDE.md) に従う。
- 統帥權の獨立により、内務省・内閣等の海軍外機關をワークフロー・文書に登場させないこと。

## Git 運用

組織共通（kaigun と同一）: `master` のみ・単一 root commit を `--amend` で更新・`git push --force-with-lease origin master`・GPG署名。

---

> _「君子之交淡若水」— 水交社_
