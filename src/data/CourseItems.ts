export interface Lectures {
  _id: string;
  title: string;
  preview: boolean;
  url: string;
  content: string;
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
    excerpt: "移動平均線を基礎から学び、実践で使いこなせる状態を目指します",
    benefit: [
      "SMAやEMAなどの移動平均線の種類や特徴がわかる",
      "効きやすい移動平均線の期間や組み合わせ方がわかる",
      "移動平均線についての理解が深まり、実践で使えるようになる",
      "ハマ塾限定「波インジ」も手に入る",
    ],
    image: "/img/ma.png",
    salePrice: 39800,
    price: 49800,
    alt: "【本質を理解する】移動平均線（SMA／EMA）完全攻略",
    url: "https://www.paypal.com/ncp/payment/FEB8GSZYNBPTY",
    youtube: "https://www.youtube.com/embed/7SDcE7pGPtU",
    sections: [
      {
        title: "イントロダクション",
        lectures: [
          {
            _id: "ma-1",
            title: "なぜ移動平均線を学ぶのか？",
            preview: true,
            url: "https://www.youtube.com/embed/7SDcE7pGPtU",
            content: "",
          },
          {
            _id: "ma-2",
            title: "ハマ塾「基本操作ガイド」",
            preview: true,
            url: "https://www.youtube.com/embed/fzihvhXPHSs",
            content: "",
          },
        ],
      },
      {
        title: "「SMA」（Simple Moving Average）単純移動平均線とは？",
        lectures: [
          {
            _id: "v29RyuWeg1k",
            title: "使いこなしている人が実は少ない移動平均線とは？",
            preview: true,
            url: "https://www.youtube.com/embed/v29RyuWeg1k",
            content: "",
          },
          {
            _id: "czNER-Ygnfk",
            title: "移動平均線の主な役割５選",
            preview: true,
            url: "https://www.youtube.com/embed/czNER-Ygnfk",
            content: "",
          },
          {
            _id: "OpwFkbN6t9c",
            title: "移動平均線の「期間」とは？",
            preview: true,
            url: "https://www.youtube.com/embed/OpwFkbN6t9c",
            content: "",
          },
          {
            _id: "zg0UcdWkQek",
            title:
              "（課題）いろんな期間の移動平均線が表示できることを確認しよう",
            preview: true,
            url: "https://www.youtube.com/embed/zg0UcdWkQek",
            content: "",
          },
          {
            _id: "5K2WfJQzOmA",
            title: "【限定特典】「波インジ」とは？",
            preview: true,
            url: "https://www.youtube.com/embed/5K2WfJQzOmA",
            content: "",
          },
          {
            _id: "48PVCo5NWVQ",
            title: "SMA（Simple Moving Average）単純移動平均線とは？",
            preview: false,
            url: "https://www.youtube.com/embed/48PVCo5NWVQ",
            content: "",
          },
          {
            _id: "oImAQEUFV-o",
            title: "「ノイズを減らせる」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/oImAQEUFV-o",
            content: "",
          },
          {
            _id: "rsQU57uw2Gs",
            title: "「トレンドを把握できる」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/rsQU57uw2Gs",
            content: "",
          },
          {
            _id: "ogQtHUnXLX4",
            title: "「トレンド転換がわかる」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/ogQtHUnXLX4",
            content: "",
          },
          {
            _id: "izcu2Twd7t4",
            title: "「サポート/レジスタンスとしての機能がある」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/izcu2Twd7t4",
            content: "",
          },
          {
            _id: "8MAYQcjRZgY",
            title: "「長期トレンド/短期トレンドがわかる」とは？",
            preview: false,
            url: "https://www.youtube.com/embed/8MAYQcjRZgY",
            content: "",
          },
          {
            _id: "2jxDRPDSNEY",
            title: "「20期間」または「21期間」移動平均線とは？",
            preview: false,
            url: "https://www.youtube.com/embed/2jxDRPDSNEY",
            content: "",
          },
          {
            _id: "OIEWc_jelhw",
            title: "複数の移動平均線を組み合わせるメリットについて",
            preview: false,
            url: "https://www.youtube.com/embed/OIEWc_jelhw",
            content: "",
          },
          {
            _id: "V76n0CtDpk8",
            title:
              "21SMAの傾きからエントリーする方法は有効なのかを検証してみよう",
            preview: false,
            url: "https://www.youtube.com/embed/V76n0CtDpk8",
            content: "",
          },
          {
            _id: "ma-15",
            title: "（課題）リプレイ機能で検証してみよう",
            preview: false,
            url: "",
            content: `
              <h3>演習課題</h3>
              <p>１つ前の授業から、21SMAの傾きからのエントリーや利確の判断を行うのはあまりお勧めできないということを確認できました。</p>
              <p>せっかくなので、手元のTradingView（トレーディングビュー）を使い、好きな銘柄で同じ手順で複数回リプレイトレードを行うことで、感触を確かめてみましょう。</p>
              <p>余力があれば、21期間ではない期間の場合もいろいろ試すことで、信頼性の高い期間があるのかどうかも追加で調査してみましょう。</p>
              <p>ある程度確認できたら、次の授業へ進んでいきましょう。</p>`,
          },
          {
            _id: "ocEi8f_k42s",
            title: "（応用）ボリンジャーバンドとバンドウォークについて",
            preview: false,
            url: "https://www.youtube.com/embed/ocEi8f_k42s",
            content: "",
          },
          {
            _id: "za4c-WTKWBM",
            title:
              "トレンド発生中の移動平均線はレジスタンス・サポートとして機能する",
            preview: false,
            url: "https://www.youtube.com/embed/za4c-WTKWBM",
            content: "",
          },
          {
            _id: "h2Ytt_krfvE",
            title: "（クイズ）演習問題",
            preview: false,
            url: "https://www.youtube.com/embed/h2Ytt_krfvE",
            content: `
              <h3>（クイズ）単純移動平均線（SMA）の役割として「誤っている」ものはどれか？</h3>
              <p>1. トレンドが出ている時は、サポートラインやレジスタンスラインのような役割を果たす。</p>
              <p>2. 移動平均線を注力して見ることで、ローソク足の価格の値動きよりもノイズを減らした値動きを見ることができる。</p>
              <p>3. 移動平均線の傾きが継続しているかどうかで、トレンドが出ているかどうかを判断できる。</p>
              <p>4. 20期間、または21期間のSMAだけで、売買活動を行い資産を増やすことができる。</p>`,
          },
        ],
      },
      {
        title: "初心者が知らない200期間移動平均線とは？",
        lectures: [
          {
            _id: "9Qcpr1W7NPI",
            title: "初心者が知らない200期間移動平均線とは？",
            preview: false,
            url: "https://www.youtube.com/embed/9Qcpr1W7NPI",
            content: "",
          },
          {
            _id: "44vS_5ZqlgA",
            title: "50MAや100MAはなぜ機能するのか？",
            preview: false,
            url: "https://www.youtube.com/embed/44vS_5ZqlgA",
            content: "",
          },
          {
            _id: "nDLq1J4jQ3Y",
            title: "75期間移動平均線が効きやすい銘柄と効きにくい銘柄",
            preview: false,
            url: "https://www.youtube.com/embed/nDLq1J4jQ3Y",
            content: "",
          },
          {
            _id: "LZgsdxoTGnQ",
            title: "トレンドを把握するための200MAの使い方",
            preview: false,
            url: "https://www.youtube.com/embed/LZgsdxoTGnQ",
            content: "",
          },
          {
            _id: "7-hJXrYcR9Q",
            title: "フラクタル構造とマルチタイムフレーム分析について",
            preview: false,
            url: "https://www.youtube.com/embed/7-hJXrYcR9Q",
            content: `
              <h3>姉妹コース案内</h3>
              <p>フラクタル構造やテクニカル分析の基礎については、</p>
              <p>
                <a href="/course/ta" class="font-semibold underline">
                  最初の一歩を踏み出す！テクニカル分析入門
                </a>
              </p>
              <p>で詳しく解説していますので、ぜひあわせて受講してみてください。</p>`,
          },
          {
            _id: "DnpA1i12Ujs",
            title: "（クイズ）演習問題",
            preview: false,
            url: "https://www.youtube.com/embed/DnpA1i12Ujs",
            content: `
              <h3>（クイズ）長期トレンドの把握方法として「正しい説明」はどれか？</h3>
              <p>1. 長期トレンドを把握するために、日足20SMAの傾きから判断した。</p>
              <p>2. 長期トレンドを把握するために、日足200SMAの傾きから判断した。</p>`,
          },
        ],
      },
      {
        title:
          "押し目買いに役立つEMA（Exponential Moving Average）指数移動平均線とは？",
        lectures: [
          {
            _id: "hyU9wWHOS4o",
            title: "イントロ",
            preview: false,
            url: "https://www.youtube.com/embed/hyU9wWHOS4o",
            content: "",
          },
          {
            _id: "sPWcIDs42oA",
            title: "EMA（Exponential Moving Average）指数移動平均線とは？",
            preview: false,
            url: "https://www.youtube.com/embed/sPWcIDs42oA",
            content: "",
          },
          {
            _id: "tEWqPL-bVz8",
            title: "複数時間足でそれぞれEMAを追加する方法",
            preview: false,
            url: "https://www.youtube.com/embed/tEWqPL-bVz8",
            content: `
              <h3>参考情報</h3>
              <p>
                <a href="https://jp.tradingview.com/pricing/?aff_id=139657" target="_blank" rel="noopener noreferrer" class="font-semibold underline">
                  TradingView有料プランの詳細はこちら
                </a>
              </p>`,
          },
        ],
      },
      {
        title: "ハマ塾式「波トレード」手法紹介",
        lectures: [
          {
            _id: "qMcnh1SQST0",
            title: "【限定特典】「波インジ」セットアップ手順",
            preview: false,
            url: "https://www.youtube.com/embed/qMcnh1SQST0",
            content: "",
          },
          {
            _id: "v_DTPBS0a6E",
            title: "【限定特典】「波インジ」設定方法",
            preview: false,
            url: "https://www.youtube.com/embed/v_DTPBS0a6E",
            content: "",
          },
          {
            _id: "fg6qyRYeiF4",
            title: "（課題）今現在の実力を「把握」しよう",
            preview: false,
            url: "https://www.youtube.com/embed/fg6qyRYeiF4",
            content: "",
          },
          {
            _id: "GxoHBDWpueM",
            title: "ハマ塾式「波インジ」の使い方",
            preview: false,
            url: "https://www.youtube.com/embed/GxoHBDWpueM",
            content: "",
          },
          {
            _id: "jcDZvqy3Sr0",
            title: "（課題）今現在の実力を「再確認」しよう",
            preview: false,
            url: "https://www.youtube.com/embed/jcDZvqy3Sr0",
            content: "",
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
            content: "",
          },
          {
            _id: "ma-39",
            title: "【特別実演】ハマアツによる「波トレード」実演",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "ma-40",
            title: "（課題）ハマ塾式「波トレード」を習得しよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
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
      "出来高/価格帯別出来高/出来高加重平均を学び、売買判断の精度を高めましょう",
    benefit: [
      "出来高とは何かを理解し、正しく読み取れるようになる",
      "出来高分析（VPA）を実践トレードに活かす方法を学べる",
      "価格帯別出来高を学び、実践トレードに活かす方法を学べる",
      "出来高加重平均価格（VWAP）が学べる",
      "ハマ塾限定「出来高加重ローソク足」インジも手に入る",
    ],
    image: "/img/va.png",
    salePrice: 39800,
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
            content: "",
          },
          {
            _id: "va-2",
            title: "ハマ塾「基本操作ガイド」",
            preview: true,
            url: "https://www.youtube.com/embed/fzihvhXPHSs",
            content: "",
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
            content: "",
          },
          {
            _id: "EUybqUWboW4",
            title: "押し目買い・戻り売りのタイミングを見極める方法",
            preview: true,
            url: "https://www.youtube.com/embed/EUybqUWboW4",
            content: "",
          },
          {
            _id: "va-3",
            title: "【限定特典】「出来高加重ローソク足」インジとは？",
            preview: true,
            url: "https://www.youtube.com/embed/Wjy2Yqny9FI",
            content: `                          
              <h3>補足説明</h3>
                <p>限定特典のインジケーターは、コースの最後に配布されます。</p>
                <p>まずは本コースを通じて出来高の本質を理解し、その上でコース末尾で案内するインストール手順に従って特典の受け取りとセットアップを行ってください。</p>
            `,
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
            content: "",
          },
          {
            _id: "SHlwgMrWDx8",
            title: "出来高の増減から「バブル」に気づく方法",
            preview: false,
            url: "https://www.youtube.com/embed/SHlwgMrWDx8",
            content: "",
          },
          {
            _id: "zRDtIXDB_7M",
            title: "トレンドの終焉を出来高から予想する方法",
            preview: false,
            url: "https://www.youtube.com/embed/zRDtIXDB_7M",
            content: "",
          },
          {
            _id: "jCnatYG0ME0",
            title: "高値圏での利確精度の高め方",
            preview: false,
            url: "https://www.youtube.com/embed/jCnatYG0ME0",
            content: "",
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
            content: "",
          },
          {
            _id: "3WYzyt8L1vg",
            title: "「Buyingクライマックス」に乗って利確する方法",
            preview: false,
            url: "https://www.youtube.com/embed/3WYzyt8L1vg",
            content: "",
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
            content: "",
          },
          {
            _id: "Nm85RD-gMMs",
            title: "絶好の安値圏でエントリーする方法",
            preview: false,
            url: "https://www.youtube.com/embed/Nm85RD-gMMs",
            content: "",
          },
          {
            _id: "tWXpZUHUG6E",
            title: "10年に1度の安値圏でエントリーする方法",
            preview: false,
            url: "https://www.youtube.com/embed/tWXpZUHUG6E",
            content: "",
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
            content: "",
          },
          {
            _id: "rMXKBj6riSQ",
            title: "ダブルトップ（水平線）が機能する理由",
            preview: false,
            url: "https://www.youtube.com/embed/rMXKBj6riSQ",
            content: "",
          },
          {
            _id: "BrszwBmhu_U",
            title: "そもそも移動平均線が機能する理由",
            preview: false,
            url: "https://www.youtube.com/embed/BrszwBmhu_U",
            content: "",
          },
          {
            _id: "4WnfvLX8wXk",
            title: "移動平均線にはないVWAPの強みとは？",
            preview: false,
            url: "https://www.youtube.com/embed/4WnfvLX8wXk",
            content: "",
          },
          {
            _id: "DMK4vSalWX0",
            title: "VWAPを実際に使ってみよう",
            preview: false,
            url: "https://www.youtube.com/embed/DMK4vSalWX0",
            content: "",
          },
          {
            _id: "el6sB0O-YdY",
            title: "VWAPの実践的な使い方",
            preview: false,
            url: "https://www.youtube.com/embed/el6sB0O-YdY",
            content: "",
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
            content: "",
          },
          {
            _id: "jEhxYOubxgI",
            title: "価格帯別出来高(出来高プロファイル)の使い方",
            preview: false,
            url: "https://www.youtube.com/embed/jEhxYOubxgI",
            content: "",
          },
          {
            _id: "ZikJt2xEeJk",
            title: "固定期間出来高プロファイル(FRVP)の使い方",
            preview: false,
            url: "https://www.youtube.com/embed/ZikJt2xEeJk",
            content: "",
          },
        ],
      },
      {
        title: "次のステップへ向けて",
        lectures: [
          {
            _id: "Ir5fIYkWSaE",
            title: "【限定特典】「出来高加重平均ローソク足」セットアップ手順",
            preview: false,
            url: "https://www.youtube.com/embed/Ir5fIYkWSaE",
            content: `                          
              <h3>限定特典</h3>
              <a href="https://jp.tradingview.com/script/35xVGMu0-%E3%83%8F%E3%83%9E%E5%A1%BE%E5%BC%8F-%E5%87%BA%E6%9D%A5%E9%AB%98%E5%8A%A0%E9%87%8D%E3%83%AD%E3%83%BC%E3%82%BD%E3%82%AF%E8%B6%B3/" target="_blank" rel="noopener noreferrer" class="font-semibold underline">
                ハマ塾式「出来高加重ローソク足」インジはこちら
              </a>
            `,
          },
          {
            _id: "-IOuhKhcLM0",
            title: "【限定特典】「出来高加重平均ローソク足」設定方法",
            preview: false,
            url: "https://www.youtube.com/embed/-IOuhKhcLM0",
            content: "",
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
    image: "/img/pa.png",
    salePrice: 39800,
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
            content: "",
          },
          {
            _id: "pa-2",
            title: "ハマ塾 基本操作",
            preview: true,
            url: "https://www.youtube.com/embed/fzihvhXPHSs",
            content: "",
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
            content: "",
          },
          {
            _id: "pa-4",
            title: "プライスアクションとは？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-5",
            title: "（復習）ローソク足とは？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-6",
            title: "ハンマー（トンカチ・ピンバー）とは？",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-7",
            title: "「ひげ」の解像度を高めよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-8",
            title: "同時線(Doji、十時線、コマ)とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-9",
            title: "丸坊主(Marubozu)とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-10",
            title: "（演習）丸坊主を見つけてみよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-11",
            title: "演習答え合わせ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-12",
            title: "インサイドバー（はらみ足）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-13",
            title: "インサイドバーの深掘り",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-14",
            title: "アウトサイドバーとは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-15",
            title: "アウトサイドバーの深掘り",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-16",
            title: "エンゴルフィンバー（包み足）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-17",
            title: "どの時間足でトレードするのが良いのか？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
          },
          {
            _id: "pa-19",
            title:
              "（Q&A）上昇トレンド中にエントリーしたい場合はどうしたら良いか",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-20",
            title:
              "プライスアクションを注視すべきタイミングとは？（スイングハイ・スイングロー）",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-21",
            title: "長い下髭プライスアクション",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-22",
            title: "リテスト（再確認）とトレンドの強さの関係",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
          },
          {
            _id: "pa-24",
            title: "改めてトレンドラインの理解を深めよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-25",
            title: "加速するサポートラインと減速するサポートライン",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-26",
            title: "加速するレジスタンスラインと減速するレジスタンスライン",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
          },
          {
            title: "出来高の表示方法",
            _id: "pa-28",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-29",
            title: "出来高はどういった時に増えるのか",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-30",
            title: "出来高からバブルを察知するコツ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-31",
            title: "出来高から機関投資家の動きを察知する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-32",
            title: "駆け込み売り・買い（Selling・Buyingクライマックス）",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
          },
          {
            _id: "pa-34",
            title: "（復習）ダウ理論の復習",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-35",
            title: "フェイクブレイクアウトとは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-36",
            title: "フェイクブレイクアウトの理解を深めよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-37",
            title:
              "機関投資家は上がりきったところで売り、下がり切ったところで買う",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-38",
            title: "機関投資家の売買形跡を見る方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-39",
            title: "【受講特典】ハマ塾式「梅と緑茶インジ」セットアップ手順",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-40",
            title: "押し目買いのコツ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-41",
            title: "フェアバリューギャップ（FVG）とは？",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-42",
            title: "（演習）押し目買いにチャレンジしよう",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "pa-43",
            title: "演習答え合わせ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
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
            content: "",
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
            content: "",
          },
          {
            _id: "tv2-2",
            title: "（スキップOK）ハマ塾基本操作",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
          },
          {
            _id: "tv2-4",
            title: "料金プランの違い",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-5",
            title: "複数のチャートを同時表示できるメリット",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-6",
            title: "複数の時間足で表示するメリット",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-7",
            title: "レイアウトのコピー方法",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-8",
            title: "レイアウトを複数作る方法",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-9",
            title: "時間足の同期方法",
            preview: true,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-10",
            title: "日付範囲の同期方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-11",
            title: "日時の同期方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-12",
            title: "シンボルの同期方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-13",
            title: "レイアウトのお気に入り登録と削除方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-14",
            title: "レイアウトを削除する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-15",
            title: "気に入り追加したレイアウトにアイコンを設定する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-16",
            title: "描画の同期方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
          },
          {
            _id: "tv2-18",
            title: "複数のインジケーターを組み合わせる威力について",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-19",
            title: "インジケーターテンプレートの作り方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-20",
            title: "インジケーターテンプレートを開く際に時間軸を指定する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-21",
            title: "インジケーターテンプレートを開く際にシンボルを指定する方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-22",
            title: "インジケーターまとめ",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
          },
          {
            _id: "tv2-24",
            title: "日足より短い時間足でバーリプレイできる",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-25",
            title: "複数時間足でバーリプレイを行う方法",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
          },
          {
            _id: "tv2-27",
            title: "テクニカルアラートの使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
          },
          {
            _id: "tv2-28",
            title: "ウォッチリストアラートの使い方",
            preview: false,
            url: "https://www.youtube.com/embed/CwmVN6pdko0",
            content: "",
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
            content: "",
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
            content: "",
          },
        ],
      },
    ],
    categories: ["実践編"],
  },
];
