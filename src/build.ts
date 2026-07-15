/**
 * 水交社 頁面組立係（Static Site Generator）
 * src/template.html ノ骨格ニ、data.ts ノ內容ヲ流シ込ミ、index.html ヲ生成ス。
 * 樣式ハ Tailwind CSS（別途 CLI ニテ組立）。
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { OSHINAGAKI, SAIJIREKI, SHAKOKU, SHISHA_DAYORI, FudaIro } from "./data";

const NE_DAI = path.join(__dirname, "..");
const TEMPLATE = path.join(NE_DAI, "src", "template.html");
const DEKIAGARI = path.join(NE_DAI, "index.html");

/** 札（帶ノ小票）ヲ描寫ス */
function fuda(moji: string, iro: FudaIro, sunpo: "px-2" | "px-2.5"): string {
  const irowake =
    iro === "shu" ? "bg-shu text-zou" : "bg-kin text-kon-fukaki";
  return `<span class="ml-2 inline-block ${irowake.split(" ")[0]} ${sunpo} py-0.5 text-xs tracking-[0.2em] ${irowake.split(" ")[1]}">${moji}</span>`;
}

/** 御品書ノ行ヲ描寫ス */
function menuRows(): string {
  return OSHINAGAKI.map((s) => {
    const na = s.fuda ? `${s.na}${fuda(s.fuda, "shu", "px-2")}` : s.na;
    return `            <tr><td>${na}</td><td class="text-right">${s.ne}</td></tr>`;
  }).join("\n");
}

/** 催事曆ノ行ヲ描寫ス */
function saijiRows(): string {
  return SAIJIREKI.map((e) => {
    const na = e.fuda ? `${e.na} ${fuda(e.fuda.moji, e.fuda.iro, "px-2.5")}` : e.na;
    return [
      "          <tr>",
      `            <td>${e.hi}</td>`,
      `            <td>${na}</td>`,
      `            <td>${e.annai}</td>`,
      "          </tr>",
    ].join("\n");
  }).join("\n");
}

/** 社告ノ條ヲ描寫ス */
function shakokuItems(): string {
  return SHAKOKU.map((k) => {
    const gyo = [
      '      <li class="nenpyo-item py-2 pl-8">',
      `        <span class="inline-block min-w-[8em] font-semibold text-kon max-sm:block">${k.hi}</span>`,
    ];
    if (k.fuda) {
      const irowake = k.fuda.iro === "shu" ? "bg-shu text-zou" : "bg-kin text-kon-fukaki";
      gyo.push(
        `        <span class="inline-block ${irowake.split(" ")[0]} px-2 py-0.5 text-xs tracking-[0.2em] ${irowake.split(" ")[1]}">${k.fuda.moji}</span>`
      );
    }
    gyo.push(`        ${k.honbun}`);
    gyo.push("      </li>");
    return gyo.join("\n");
  }).join("\n");
}

/** 支社ダヨリノ札ヲ描寫ス */
function shishaCards(): string {
  return SHISHA_DAYORI.map((s) =>
    [
      '      <div class="frame-uchi border border-kin bg-white px-5 py-5 shadow-kappan">',
      `        <h4 class="mb-2 border-b border-kin pb-1 text-center tracking-[0.3em] text-shu">${s.na}</h4>`,
      `        <p class="text-[0.85rem]">${s.tayori}</p>`,
      "      </div>",
    ].join("\n")
  ).join("\n");
}

function kumitate(): void {
  let honkoku = fs.readFileSync(TEMPLATE, "utf-8");
  const sashikae: ReadonlyArray<readonly [string, string]> = [
    ["<!--%MENU_ROWS%-->", menuRows()],
    ["<!--%SAIJI_ROWS%-->", saijiRows()],
    ["<!--%SHAKOKU_ITEMS%-->", shakokuItems()],
    ["<!--%SHISHA_CARDS%-->", shishaCards()],
  ];
  for (const [shirushi, nakami] of sashikae) {
    if (!honkoku.includes(shirushi)) {
      throw new Error(`組立係報告: 骨格ニ ${shirushi} ノ印ガ見當タリマセン`);
    }
    honkoku = honkoku.replace(shirushi, nakami);
  }
  fs.writeFileSync(DEKIAGARI, honkoku, "utf-8");
  console.log("⚓ 組立完了。index.html ヲ生成セリ。");
}

kumitate();
