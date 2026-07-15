/**
 * 水交社 頁面データ層
 * 御品書・催事曆・社告・支社ダヨリヲ型定義ノ下ニ管理ス。
 * 內容ノ更新ハ本檔ノミヲ編輯スベシ（template.html ハ骨格、build.ts ハ組立係）。
 */

/** 札ノ色 — 朱（特記）・金（御案内） */
export type FudaIro = "shu" | "kin";

/** パーラー御品書ノ一品 */
export interface Shinamono {
  readonly na: string;
  readonly ne: string;
  readonly fuda?: string;
}

/** 催事曆ノ一件 */
export interface Saiji {
  readonly hi: string;
  readonly na: string;
  readonly fuda?: { readonly moji: string; readonly iro: FudaIro };
  readonly annai: string;
}

/** 社告ノ一報 */
export interface Shakoku {
  readonly hi: string;
  readonly fuda?: { readonly moji: string; readonly iro: FudaIro };
  /** 本文（連絡先等ノ繋鎖ヲ含ミ得ルニ付キ HTML 文字列トス） */
  readonly honbun: string;
}

/** 支社ダヨリノ一便 */
export interface ShishaDayori {
  readonly na: string;
  readonly tayori: string;
}

/** 水交パーラー 御品書 */
export const OSHINAGAKI: readonly Shinamono[] = [
  { na: "珈琲（自家焙煎）", ne: "十錢" },
  { na: "紅茶（檸檬又ハミルク）", ne: "十錢" },
  { na: "ココア", ne: "十五錢" },
  { na: "ソーダ水（噴水式）", ne: "十五錢" },
  { na: "クリームソーダ", ne: "二十五錢" },
  { na: "アイスクリーム", ne: "二十錢" },
  { na: "名物「三笠アイス」", ne: "二十五錢", fuda: "名物" },
  { na: "ホットケーキ（麥酒印ノ蜜附）", ne: "二十五錢" },
  { na: "サンドウヰッチ", ne: "三十錢" },
  { na: "ライスカレー（海軍風・福神漬附）", ne: "三十錢" },
];

/** 催事曆（1936年） */
export const SAIJIREKI: readonly Saiji[] = [
  { hi: "1月5日", na: "新年名刺交換會", annai: "會員及ビ御家族。屠蘇・雜煮ノ御振舞ヒガゴザイマス" },
  { hi: "4月上旬", na: "觀櫻園遊會", fuda: { moji: "一般", iro: "kin" }, annai: "庭園ヲ開放シ、野點・餘興・軍樂隊ノ奏樂。雨天順延" },
  { hi: "5月27日", na: "海軍記念日祝賀會", fuda: { moji: "一般", iro: "kin" }, annai: "日本海海戰記念ノ講演ト映畫ノ夕。切符五十錢" },
  { hi: "7月中旬", na: "納涼大夜會", annai: "屋上ビヤガーデン開設。浴衣ニテ御氣輕ニドウゾ" },
  { hi: "隔月第三土曜", na: "管絃樂演奏會", fuda: { moji: "一般", iro: "kin" }, annai: "海軍軍樂隊出演。切符三十錢、學生二十錢" },
  { hi: "9月中秋", na: "觀月茶會", annai: "庭園ニテ。婦人ノ御參加ヲ歡迎イタシマス" },
  { hi: "11月3日", na: "文化講演會", fuda: { moji: "一般", iro: "kin" }, annai: "海外歸朝士官ニヨル「歐米事情」ノ御話。入場無料" },
  { hi: "12月下旬", na: "歳末大舞踏會", fuda: { moji: "盛裝", iro: "shu" }, annai: "一年ヲ締メ括ル華ノ宴。燕尾服又ハ紋付、夜會服ニテ" },
];

/** 社告・最新情報（1936年） */
export const SHAKOKU: readonly Shakoku[] = [
  {
    hi: "十月十五日",
    fuda: { moji: "珍客", iro: "shu" },
    honbun:
      '<a href="https://imperial-army.github.io/rikugun/" class="text-kon underline decoration-kin">陸軍</a>ノ皆樣、演習歸リニ御團體ニテ御來店。「三笠アイス、悔シイガ美味イ」トノ御評デゴザイマス。牛鍋ニハ負ケマセン',
  },
  { hi: "十月一日", fuda: { moji: "新著", iro: "shu" }, honbun: "パーラー秋ノ新味「燒栗入リアイスクリーム」始メマシタ。栗ハ丹波產デゴザイマス" },
  { hi: "九月十五日", honbun: "圖書室ニ倫敦「イラストレイテッド・ロンドン・ニュース」最新號着荷。觀艦式特輯デゴザイマス" },
  { hi: "八月二十日", honbun: "エレヴェーター運轉開始。御年配ノ方モ樂々ト三階大廣間ヘ。運轉手ハ元信號兵、階數ノ告ゲ方ガ妙ニ勇マシイト評判デゴザイマス" },
  { hi: "七月十日", fuda: { moji: "好評", iro: "shu" }, honbun: "冷風扇試運轉開始。「帝都有數ノ涼シサ」ト新聞ニ載リマシタ。避暑ハ輕井澤ヨリ水交社ヘ" },
  { hi: "六月五日", honbun: "パーラーニ噴水式ソーダ水機械ヲ米國ヨリ新調。虹色ノ硝子塔ヨリ迸ルソーダ水ハ一見ノ價値アリ" },
  { hi: "五月二十七日", honbun: "海軍記念日ニ因ミ、パーラーニテ「三笠アイス」發賣開始。初日ニテ二百個賣切レ、艦隊ノ増産（増產）ヲ決定イタシマシタ" },
  { hi: "五月一日", fuda: { moji: "開業", iro: "kin" }, honbun: "水交パーラー愈々開業! 珈琲一杯十錢。御紹介ナシデ何方樣デモドウゾ" },
  { hi: "四月一日", honbun: "談話室ニラヂオ受信機（JOAK）設置。相撲中繼ノ日ハ椅子ノ爭奪戰ニ付キ御早目ニ" },
];

/** 支社ダヨリ */
export const SHISHA_DAYORI: readonly ShishaDayori[] = [
  { na: "横須賀", tayori: "軍港見學ノ御歸リハ支社パーラーヘ。名物「海軍サイダー」好評發賣中デゴザイマス。" },
  { na: "呉", tayori: "大食堂ニテ「艦隊カレー番付」開催中。目下ノ橫綱ハ某戰艦烹炊所直傳ノ一皿デゴザイマス。" },
  { na: "佐世保", tayori: "觀艦式歸リノ御客樣ニテ大賑ヒ。「三笠アイス」九州初上陸デゴザイマス。" },
  { na: "舞鶴", tayori: "冬ノ名物「牡蠣ノグラタン」始メマシタ。日本海ノ荒波ガ育テタ味デゴザイマス。" },
];
