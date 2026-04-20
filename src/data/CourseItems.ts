export interface Lectures {
  _id: string;
  title: string;
  preview: boolean;
  url: string;
  memo: string;
}

export interface Sections {
  title: string;
  lectures: Lectures[];
}

export interface CoursePost {
  slug: string;
  publishedDate: string;
  title: string;
  excerpt: string;
  benefit: string[];
  image: string;
  salePrice: number;
  price: number;
  alt: string;
  url: string;
  youtube: string;
  sections: Sections[];
  categories: string[];
}

export const coursePosts: CoursePost[] = [
  {
    slug: "ma",
    publishedDate: "June 20, 2025",
    title: "【本質を理解する】移動平均線（SMA／EMA）完全攻略",
    excerpt:
      "ハマ塾「波インジ」を入手し、移動平均線を基礎→実践で使える技術まで学びます",
    benefit: [
      "プロが使う独自の「ハマ塾 波インジゲーター」が手に入る",
      "移動平均線についての理解が深まり、実践で使えるようになる",
      "複数のMAを使ったエントリー / 利確手法が学べる",
    ],
    image: "/img/project6.jpg",
    salePrice: 29800,
    price: 49800,
    alt: "【本質を理解する】移動平均線（SMA／EMA）完全攻略",
    url: "https://www.paypal.com/ncp/payment/FEB8GSZYNBPTY",
    youtube: "https://www.youtube.com/embed/CwmVN6pdko0",
    sections: [
      {
        title: "イントロダクション",
        lectures: [
          {
            _id: "ma-1",
            title: "なぜ移動平均線を学ぶのか？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-2",
            title: "ハマ塾 基本操作",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "「SMA」（Simple Moving Average）単純移動平均線とは？",
        lectures: [
          {
            _id: "ma-3",
            title: "使いこなしている人が実は少ない移動平均線とは？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-4",
            title: "移動平均線の主な役割５選",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-5",
            title: "移動平均線の「期間」とは？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-6",
            title:
              "（課題）いろんな期間の移動平均線が表示できることを確認しよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-7",
            title: "SMA（Simple Moving Average）単純移動平均線とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-8",
            title: "「ノイズを減らせる」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-9",
            title: "「トレンドを把握できる」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-10",
            title: "「トレンド転換がわかる」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-11",
            title: "「サポート/レジスタンスとしての機能がある」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-12",
            title: "「長期トレンド/短期トレンドがわかる」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-13",
            title: "「20期間」または「21期間」移動平均線とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-14",
            title: "複数の移動平均線を組み合わせるメリットについて",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-15",
            title:
              "21SMAの傾きからエントリーする方法は有効なのかを検証してみよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-16",
            title: "（課題）リプレイ機能で検証してみよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-17",
            title: "（応用）ボリンジャーバンドとバンドウォークについて",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-18",
            title:
              "トレンド発生中の移動平均線はレジスタンス・サポートとして機能する",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-19",
            title:
              "（クイズ）単純移動平均線（SMA）の役割として「誤っている」ものはどれか？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "初心者が知らない200期間移動平均線とは？",
        lectures: [
          {
            _id: "ma-20",
            title: "初心者が知らない200期間移動平均線とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-21",
            title: "50MAや100MAはなぜ機能するのか？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-22",
            title: "75期間移動平均線が効きやすい銘柄と効きにくい銘柄",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-23",
            title: "トレンドを把握するための200MAの使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-24",
            title: "フラクタル構造とマルチタイムフレーム分析について",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-25",
            title:
              "（クイズ）長期トレンドの把握方法として「正しい説明」はどれか？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title:
          "押し目買いに役立つEMA（Exponential Moving Average）指数移動平均線とは？",
        lectures: [
          {
            _id: "ma-26",
            title: "イントロ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-27",
            title: "EMA（Exponential Moving Average）指数移動平均線とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-28",
            title: "複数時間足でそれぞれEMAを追加する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "プロも実践する ハマ塾式「波トレード」手法紹介",
        lectures: [
          {
            _id: "ma-29",
            title: "マル秘トレード手法（ハマ塾式 波トレード）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-30",
            title: "今の実力を可視化しよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-31",
            title: "（課題）今の実力を可視化しよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-32",
            title: "ハマ塾式「波インジ」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-33",
            title: "【受講特典】ハマ塾式「波インジ」セットアップ手順",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-34",
            title: "ハマ塾式「波インジ」の使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-35",
            title: "ハマ塾生限定ノウハウ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-36",
            title: "ハマ塾式「波インジ」を上手に使いこなすコツ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-37",
            title: "（課題）今の実力を可視化しよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "実践で成果を出す",
        lectures: [
          {
            _id: "ma-38",
            title: "ハマ塾式「波インジ」とRSIを使ったリプレイトレードの始め方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-39",
            title: "プロも実践するハマ塾式「波トレード」実演",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "ma-40",
            title: "（課題）ハマ塾式「波トレード」を習得しよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "次のステップへ向けて",
        lectures: [
          {
            _id: "ma-41",
            title: "学んだことの振り返り",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
    ],
    categories: ["実践編"],
  },
  {
    slug: "va",
    publishedDate: "April 20, 2026",
    title: "出来高を学び、極める。VPA (Volume Price Analysis)完全攻略",
    excerpt:
      "出来高・価格帯別出来高・出来高加重平均を学び、エントリー/利確精度を高めましょう",
    benefit: [
      "出来高とは何かを理解し、正しく読み取れるようになる",
      "出来高分析（VPA）を実践トレードに活かす方法を学べる",
      "価格帯別出来高を学び、実践トレードに活かす方法を学べる",
      "出来高加重平均価格（VWAP）が学べる",
      "ハマ塾限定「出来高加重ローソク足」インジも手に入る",
    ],
    image: "/img/project4.png",
    salePrice: 29800,
    price: 49800,
    alt: "出来高を学び、極める。VPA (Volume Price Analysis)完全攻略",
    url: "https://www.paypal.com/ncp/payment/3ZLUXE7XXRNEG",
    youtube: "https://www.youtube.com/embed/r4y7lKHlGko",
    sections: [
      {
        title: "イントロダクション",
        lectures: [
          {
            _id: "va-1",
            title: "なぜ「出来高」を学ぶのか？",
            preview: true,
            url: "https://www.youtube.com/embed/r4y7lKHlGko",
            memo: "",
          },
          {
            _id: "va-2",
            title: "ハマ塾「基本操作ガイド」",
            preview: true,
            url: "https://www.youtube.com/embed/fzihvhXPHSs",
            memo: "",
          },
          {
            _id: "va-3",
            title: "限定特典「出来高加重ローソク足」インジとは？",
            preview: true,
            url: "https://www.youtube.com/embed/Wjy2Yqny9FI",
            memo: "",
          },
        ],
      },
      {
        title: "「出来高（Volume）」とは？",
        lectures: [
          {
            _id: "ypy8DxPI7Uc",
            title: "「出来高（Volume）」とは？",
            preview: true,
            url: "https://www.youtube.com/embed/ypy8DxPI7Uc",
            memo: "",
          },
          {
            _id: "EUybqUWboW4",
            title: "押し目買い・戻り売りのタイミングを見極める方法",
            preview: true,
            url: "https://www.youtube.com/embed/EUybqUWboW4",
            memo: "",
          },
        ],
      },
      {
        title: "出来高から利確タイミングを見極める方法",
        lectures: [
          {
            _id: "vq8BCqdvkxU",
            title: "出来高から「絶好の」利確タイミングを見極める方法",
            preview: false,
            url: "https://www.youtube.com/embed/vq8BCqdvkxU",
            memo: "",
          },
          {
            _id: "SHlwgMrWDx8",
            title: "出来高の増減から「バブル」に気づく方法",
            preview: false,
            url: "https://www.youtube.com/embed/SHlwgMrWDx8",
            memo: "",
          },
          {
            _id: "zRDtIXDB_7M",
            title: "トレンドの終焉を出来高から予想する方法",
            preview: false,
            url: "https://www.youtube.com/embed/zRDtIXDB_7M",
            memo: "",
          },
          {
            _id: "jCnatYG0ME0",
            title: "高値圏での利確精度の高め方",
            preview: false,
            url: "https://www.youtube.com/embed/jCnatYG0ME0",
            memo: "",
          },
        ],
      },
      {
        title: "出来高を参考に上昇トレンドに上手に乗る方法",
        lectures: [
          {
            _id: "hKpqajWIPWA",
            title: "出来高を参考に上昇トレンドに「上手に」乗る方法",
            preview: false,
            url: "https://www.youtube.com/embed/hKpqajWIPWA",
            memo: "",
          },
          {
            _id: "3WYzyt8L1vg",
            title: "「Buyingクライマックス」に乗って利確する方法",
            preview: false,
            url: "https://www.youtube.com/embed/3WYzyt8L1vg",
            memo: "",
          },
        ],
      },
      {
        title: "出来高からエントリータイミングを見極める方法",
        lectures: [
          {
            _id: "zy9ngsPMr0I",
            title: "出来高からエントリータイミングを見極める方法",
            preview: false,
            url: "https://www.youtube.com/embed/zy9ngsPMr0I",
            memo: "",
          },
          {
            _id: "Nm85RD-gMMs",
            title: "絶好の安値圏でエントリーする方法",
            preview: false,
            url: "https://www.youtube.com/embed/Nm85RD-gMMs",
            memo: "",
          },
          {
            _id: "tWXpZUHUG6E",
            title: "10年に1度の安値圏でエントリーする方法",
            preview: false,
            url: "https://www.youtube.com/embed/tWXpZUHUG6E",
            memo: "",
          },
        ],
      },
      {
        title: "出来高加重平均価格（VWAP）を使いこなそう",
        lectures: [
          {
            _id: "bHFZ8fkN-iQ",
            title: "出来高加重平均価格（VWAP）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/bHFZ8fkN-iQ",
            memo: "",
          },
          {
            _id: "rMXKBj6riSQ",
            title: "ダブルトップ（水平線）が機能する理由",
            preview: false,
            url: "https://www.youtube.com/embed/rMXKBj6riSQ",
            memo: "",
          },
          {
            _id: "BrszwBmhu_U",
            title: "そもそも移動平均線が機能する理由",
            preview: false,
            url: "https://www.youtube.com/embed/BrszwBmhu_U",
            memo: "",
          },
          {
            _id: "4WnfvLX8wXk",
            title: "移動平均線にはないVWAPの強みとは？",
            preview: false,
            url: "https://www.youtube.com/embed/4WnfvLX8wXk",
            memo: "",
          },
          {
            _id: "DMK4vSalWX0",
            title: "VWAPを実際に使ってみよう",
            preview: false,
            url: "https://www.youtube.com/embed/DMK4vSalWX0",
            memo: "",
          },
          {
            _id: "el6sB0O-YdY",
            title: "VWAPの実践的な使い方",
            preview: false,
            url: "https://www.youtube.com/embed/el6sB0O-YdY",
            memo: "",
          },
        ],
      },
      {
        title: "価格帯別出来高（出来高プロファイル）を使いこなす方法",
        lectures: [
          {
            _id: "-ljveicWHe4",
            title: "価格帯別出来高（出来高プロファイル）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/-ljveicWHe4",
            memo: "",
          },
          {
            _id: "jEhxYOubxgI",
            title: "価格帯別出来高(出来高プロファイル)の使い方",
            preview: false,
            url: "https://www.youtube.com/embed/jEhxYOubxgI",
            memo: "",
          },
          {
            _id: "ZikJt2xEeJk",
            title: "固定期間出来高プロファイル(FRVP)の使い方",
            preview: false,
            url: "https://www.youtube.com/embed/ZikJt2xEeJk",
            memo: "",
          },
        ],
      },
      {
        title: "次のステップへ向けて",
        lectures: [
          {
            _id: "Ir5fIYkWSaE",
            title: "限定特典「出来高加重平均ローソク足」セットアップ手順",
            preview: false,
            url: "https://www.youtube.com/embed/Ir5fIYkWSaE",
            memo: "",
          },
          {
            _id: "-IOuhKhcLM0",
            title: "限定特典「出来高加重平均ローソク足」設定方法",
            preview: false,
            url: "https://www.youtube.com/embed/-IOuhKhcLM0",
            memo: "",
          },
        ],
      },
    ],
    categories: ["実践編"],
  },
  {
    slug: "pa",
    publishedDate: "June 20, 2025",
    title: "【ローソク足から学ぶ】プライスアクション完全攻略",
    excerpt:
      "ハマ塾「梅と緑茶インジ」を入手し、PAの基礎から実践まで一気に習得します",
    benefit: [
      "プライスアクションについての理解が深まる",
      "SMC（スマートマネーコンセプト）を理解できる",
      "限定特典「梅と緑茶インジ」が手に入る",
      "「梅と緑茶インジ」とSMCをフル活用した実践トレードが学べる",
    ],
    image: "/img/project7.jpg",
    salePrice: 29800,
    price: 49800,
    alt: "プライスアクション【完全攻略】",
    url: "https://www.paypal.com/ncp/payment/WCXKQXNDYPNAA",
    youtube: "https://www.youtube.com/embed/bG-cEP19ZIY",
    sections: [
      {
        title: "イントロダクション",
        lectures: [
          {
            _id: "pa-1",
            title: "なぜプライスアクションを学ぶのか？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-2",
            title: "ハマ塾 基本操作",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "プライスアクション基礎編",
        lectures: [
          {
            _id: "pa-3",
            title: "プライスアクション基礎編",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-4",
            title: "プライスアクションとは？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-5",
            title: "（復習）ローソク足とは？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-6",
            title: "ハンマー（トンカチ・ピンバー）とは？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-7",
            title: "「ひげ」の解像度を高めよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-8",
            title: "同時線(Doji、十時線、コマ)とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-9",
            title: "丸坊主(Marubozu)とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-10",
            title: "（演習）丸坊主を見つけてみよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-11",
            title: "演習答え合わせ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-12",
            title: "インサイドバー（はらみ足）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-13",
            title: "インサイドバーの深掘り",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-14",
            title: "アウトサイドバーとは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-15",
            title: "アウトサイドバーの深掘り",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-16",
            title: "エンゴルフィンバー（包み足）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-17",
            title: "どの時間足でトレードするのが良いのか？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "サイクル理論とリテストを学ぼう",
        lectures: [
          {
            _id: "pa-18",
            title: "トレンドにはサイクルがある（サイクル理論）",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-19",
            title:
              "（Q&A）上昇トレンド中にエントリーしたい場合はどうしたら良いか",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-20",
            title:
              "プライスアクションを注視すべきタイミングとは？（スイングハイ・スイングロー）",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-21",
            title: "長い下髭プライスアクション",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-22",
            title: "リテスト（再確認）とトレンドの強さの関係",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "トレンドラインにおけるプライスアクション",
        lectures: [
          {
            _id: "pa-23",
            title: "トレンドラインにおけるプライスアクションとは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-24",
            title: "改めてトレンドラインの理解を深めよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-25",
            title: "加速するサポートラインと減速するサポートライン",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-26",
            title: "加速するレジスタンスラインと減速するレジスタンスライン",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "出来高（Volume）にも注力しよう",
        lectures: [
          {
            title: "出来高（Volume）とは？",
            _id: "pa-27",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            title: "出来高の表示方法",
            _id: "pa-28",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-29",
            title: "出来高はどういった時に増えるのか",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-30",
            title: "出来高からバブルを察知するコツ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-31",
            title: "出来高から機関投資家の動きを察知する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-32",
            title: "駆け込み売り・買い（Selling・Buyingクライマックス）",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "スマートマネーコンセプト（SMC）を理解しよう",
        lectures: [
          {
            _id: "pa-33",
            title: "スマートマネーコンセプト（SMC）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-34",
            title: "（復習）ダウ理論の復習",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-35",
            title: "フェイクブレイクアウトとは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-36",
            title: "フェイクブレイクアウトの理解を深めよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-37",
            title:
              "機関投資家は上がりきったところで売り、下がり切ったところで買う",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-38",
            title: "機関投資家の売買形跡を見る方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-39",
            title: "【受講特典】ハマ塾式「梅と緑茶インジ」セットアップ手順",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-40",
            title: "押し目買いのコツ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-41",
            title: "フェアバリューギャップ（FVG）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-42",
            title: "（演習）押し目買いにチャレンジしよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "pa-43",
            title: "演習答え合わせ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "今までの学びの集大成を確認しよう",
        lectures: [
          {
            _id: "pa-44",
            title:
              "（演習）ハマ塾式「波インジ」「梅と緑茶インジ」を用いてリプレイトレードしよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "次のステップへ向けて",
        lectures: [
          {
            _id: "pa-45",
            title: "次のステップ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
    ],
    categories: ["実践編"],
  },
  {
    slug: "tv2",
    publishedDate: "June 20, 2025",
    title: "⑦ TradingView【応用】",
    excerpt:
      "無料機能に制限せず、本来の実力を最大限に引き出し、実践力を磨きます",
    benefit: [
      "マルチタイムフレーム分析の実践ノウハウを学びます",
      "為替変動を考慮した株価チャート表示のノウハウを学びます",
      "有料機能ならではの便利機能を学びます",
    ],
    image: "/img/project5.jpg",
    salePrice: 19800,
    price: 39800,
    alt: "TradingView【応用】",
    url: "https://hama-juku.thinkific.com/enroll/3615334",
    youtube: "https://www.youtube.com/embed/MFHEU2aj5S8",
    sections: [
      {
        title: "イントロダクション",
        lectures: [
          {
            _id: "tv2-1",
            title: "コースPV",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-2",
            title: "（スキップOK）ハマ塾基本操作",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "有料版レイアウト機能の使い方",
        lectures: [
          {
            _id: "tv2-3",
            title: "イントロ",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-4",
            title: "料金プランの違い",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-5",
            title: "複数のチャートを同時表示できるメリット",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-6",
            title: "複数の時間足で表示するメリット",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-7",
            title: "レイアウトのコピー方法",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-8",
            title: "レイアウトを複数作る方法",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-9",
            title: "時間足の同期方法",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-10",
            title: "日付範囲の同期方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-11",
            title: "日時の同期方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-12",
            title: "シンボルの同期方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-13",
            title: "レイアウトのお気に入り登録と削除方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-14",
            title: "レイアウトを削除する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-15",
            title: "気に入り追加したレイアウトにアイコンを設定する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-16",
            title: "描画の同期方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "インジゲーターの活用方法",
        lectures: [
          {
            _id: "tv2-17",
            title: "イントロ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-18",
            title: "複数のインジケーターを組み合わせる威力について",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-19",
            title: "インジケーターテンプレートの作り方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-20",
            title: "インジケーターテンプレートを開く際に時間軸を指定する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-21",
            title: "インジケーターテンプレートを開く際にシンボルを指定する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-22",
            title: "インジケーターまとめ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "有料版リプレイ機能の活用方法",
        lectures: [
          {
            _id: "tv2-23",
            title: "バーリプレイの使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-24",
            title: "日足より短い時間足でバーリプレイできる",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-25",
            title: "複数時間足でバーリプレイを行う方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "アラート機能の活用方法",
        lectures: [
          {
            _id: "tv2-26",
            title: "価格アラートの使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-27",
            title: "テクニカルアラートの使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
          {
            _id: "tv2-28",
            title: "ウォッチリストアラートの使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "カスタム計算式の活用方法",
        lectures: [
          {
            _id: "tv2-29",
            title: "カスタム計算式の使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
      {
        title: "次のステップへ向けて",
        lectures: [
          {
            _id: "tv2-30",
            title: "次のステップへ向けて",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            memo: "",
          },
        ],
      },
    ],
    categories: ["実践編"],
  },
];
