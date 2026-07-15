# ⚓ 水交社（suikosha） ⚓

### 海ヲ愛スル紳士淑女ノ社交場

明治九年（1876年）創立、帝國海軍將校ノ社交倶樂部「**水交社**」ノ假想ウェブサイトデゴザイマス。
社名ハ莊子ノ一節「君子之交淡若水」ニ由來イタシマス。

**官報掛載所（公開サイト）**: https://imperial-navy.github.io/suikosha/

軍人ノミナラズ廣ク一般ノ皆樣ニ御覽イタダク趣向ニテ、意匠ハ**昭和モダン**（アール・デコ）ヲ旨トシテ居リマス。

## 普請ノ仕樣

| 項目 | 仕樣 |
|---|---|
| 意匠 | 昭和モダン（紺・朱・金・象牙ノ配色、放射光線・鋸齒・二重枠ノ裝飾） |
| 頁面組立 | [TypeScript](https://www.typescriptlang.org)（`src/data.ts` ニ御品書・催事・社告ヲ型定義ノ下ニ管理シ、`src/build.ts` ガ骨格 `src/template.html` ニ流シ込ミテ `index.html` ヲ生成ス） |
| 樣式帖 | [Tailwind CSS v4](https://tailwindcss.com)（`src/style.css` ニ @theme 竝ニ裝飾 components ヲ定義） |
| 公示 | GitHub Pages（營繕掛 `eizen.yaml` ガ組立・掛載ヲ執行） |

## 營繕（ビルド）

```bash
npm install
npm run build       # tsc → build.js（index.html 生成）→ Tailwind CLI（style.css 生成）
npm run typecheck   # 型檢査ノミ（strict: true）
npm run watch       # 樣式帖ノ監視組立
```

`index.html` ト `style.css` ハ生成物ニ付キ git 管理外。
內容（御品書・催事曆・社告・支社ダヨリ）ノ更新ハ `src/data.ts` ヲ、骨格ノ變更ハ `src/template.html` ヲ編輯サレタシ。
`master` ヘノ push ニテ營繕掛ガ自動組立・公示イタシマス。

## 關聯

- [大日本帝國海軍 廣報部](https://imperial-navy.github.io/kaigun/) — 記錄本體（[imperial-navy/kaigun](https://github.com/imperial-navy/kaigun)）
- [帝國陸軍 記錄本體](https://imperial-army.github.io/rikugun/) ・ [偕行社](https://imperial-army.github.io/kaikosha/) — 陸軍方面
- [@imperial-navy](https://github.com/imperial-navy) — 帝國海軍 Organization

---

<sub>水交社 發行 ・ 1936年（昭和十一年）</sub>

<sub>**Disclaimer:** 本 Repository ハ風刺的創作物（satirical / educational project）ナリ。掲載ノ料金・催事ハ全テ架空デゴザイマス。</sub>
