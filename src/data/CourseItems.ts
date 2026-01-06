export interface Lectures {
  title: string;
  preview: boolean;
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
  price: number;
  alt: string;
  url: string;
  youtube: string;
  sections: Sections[];
  categories: string[];
}

export const coursePosts: CoursePost[] = [
  {
    slug: "tradingview-for-intermediate",
    publishedDate: "June 20, 2025",
    title: "TradingView【実践攻略】",
    excerpt:
      "無料機能に制限せず、本来の実力を最大限に引き出し、実践力を磨きます",
    benefit: [
      "マルチタイムフレーム分析の実践ノウハウを学びます",
      "為替変動を考慮した株価チャート表示のノウハウを学びます",
      "有料機能ならではの便利機能を学びます",
    ],
    image: "/img/project5.jpg",
    price: 19800,
    alt: "TradingView【実践攻略】",
    url: "https://hama-juku.thinkific.com/enroll/3615334",
    youtube: "https://www.youtube.com/embed/MFHEU2aj5S8",
    sections: [
      {
        title: "イントロダクション",
        lectures: [
          {
            title: "コースPV",
            preview: true,
          },
          {
            title: "（スキップOK）ハマ塾基本操作",
            preview: true,
          },
        ],
      },
      {
        title: "有料版レイアウト機能の使い方",
        lectures: [
          {
            title: "イントロ",
            preview: true,
          },
          {
            title: "料金プランの違い",
            preview: true,
          },
          {
            title: "複数のチャートを同時表示できるメリット",
            preview: true,
          },
          {
            title: "複数の時間足で表示するメリット",
            preview: true,
          },
          {
            title: "レイアウトのコピー方法",
            preview: true,
          },
          {
            title: "レイアウトを複数作る方法",
            preview: true,
          },
          {
            title: "時間足の同期方法",
            preview: true,
          },
          {
            title: "日付範囲の同期方法",
            preview: false,
          },
          {
            title: "日時の同期方法",
            preview: false,
          },
          {
            title: "シンボルの同期方法",
            preview: false,
          },
          {
            title: "レイアウトのお気に入り登録と削除方法",
            preview: false,
          },
          {
            title: "レイアウトを削除する方法",
            preview: false,
          },
          {
            title: "気に入り追加したレイアウトにアイコンを設定する方法",
            preview: false,
          },
          {
            title: "描画の同期方法",
            preview: false,
          },
        ],
      },
      {
        title: "インジゲーターの活用方法",
        lectures: [
          {
            title: "イントロ",
            preview: false,
          },
          {
            title: "複数のインジケーターを組み合わせる威力について",
            preview: false,
          },
          {
            title: "インジケーターテンプレートの作り方",
            preview: false,
          },
          {
            title: "インジケーターテンプレートを開く際に時間軸を指定する方法",
            preview: false,
          },
          {
            title: "インジケーターテンプレートを開く際にシンボルを指定する方法",
            preview: false,
          },
          {
            title: "インジケーターまとめ",
            preview: false,
          },
        ],
      },
      {
        title: "有料版リプレイ機能の活用方法",
        lectures: [
          {
            title: "バーリプレイの使い方",
            preview: false,
          },
          {
            title: "日足より短い時間足でバーリプレイできる",
            preview: false,
          },
          {
            title: "複数時間足でバーリプレイを行う方法",
            preview: false,
          },
        ],
      },
      {
        title: "アラート機能の活用方法",
        lectures: [
          {
            title: "価格アラートの使い方",
            preview: false,
          },
          {
            title: "テクニカルアラートの使い方",
            preview: false,
          },
          {
            title: "ウォッチリストアラートの使い方",
            preview: false,
          },
        ],
      },
      {
        title: "カスタム計算式の活用方法",
        lectures: [
          {
            title: "カスタム計算式の使い方",
            preview: false,
          },
        ],
      },
      {
        title: "次のステップへ向けて",
        lectures: [
          {
            title: "次のステップへ向けて",
            preview: false,
          },
        ],
      },
    ],
    categories: ["実践編"],
  },
  {
    slug: "moving-average",
    publishedDate: "June 20, 2025",
    title: "移動平均線【完全攻略】",
    excerpt:
      "ハマ塾「黄金インジ」を入手し、移動平均線を基礎から実践で使える技術まで学びます。",
    benefit: [
      "プロが使う独自の「ハマ塾 黄金インジゲーター」が手に入る",
      "移動平均線についての理解が深まり、実践で使えるようになる",
      "複数のMAを使ったエントリー / 利確手法が学べる",
    ],
    image: "/img/project6.jpg",
    price: 19800,
    alt: "移動平均線【完全攻略】",
    url: "https://hama-juku.thinkific.com/enroll/3513057",
    youtube: "https://www.youtube.com/embed/CwmVN6pdko0",
    sections: [
      {
        title: "イントロダクション",
        lectures: [
          {
            title: "なぜ移動平均線を学ぶのか？",
            preview: true,
          },
          {
            title: "ハマ塾 基本操作",
            preview: true,
          },
        ],
      },
      {
        title: "「SMA」（Simple Moving Average）単純移動平均線とは？",
        lectures: [
          {
            title: "使いこなしている人が実は少ない移動平均線とは？",
            preview: true,
          },
          {
            title: "移動平均線の主な役割５選",
            preview: true,
          },
          {
            title: "移動平均線の「期間」とは？",
            preview: true,
          },
          {
            title:
              "（課題）いろんな期間の移動平均線が表示できることを確認しよう",
            preview: true,
          },
          {
            title: "SMA（Simple Moving Average）単純移動平均線とは？",
            preview: true,
          },
          {
            title: "「ノイズを減らせる」とは？",
            preview: true,
          },
          {
            title: "「トレンドを把握できる」とは？",
            preview: true,
          },
          {
            title: "「トレンド転換がわかる」とは？",
            preview: true,
          },
          {
            title: "「サポート/レジスタンスとしての機能がある」とは？",
            preview: true,
          },
          {
            title: "「長期トレンド/短期トレンドがわかる」とは？",
            preview: true,
          },
          {
            title: "「20期間」または「21期間」移動平均線とは？",
            preview: true,
          },
          {
            title: "複数の移動平均線を組み合わせるメリットについて",
            preview: true,
          },
          {
            title:
              "21SMAの傾きからエントリーする方法は有効なのかを検証してみよう",
            preview: false,
          },
          {
            title: "（課題）リプレイ機能で検証してみよう",
            preview: false,
          },
          {
            title: "（応用）ボリンジャーバンドとバンドウォークについて",
            preview: false,
          },
          {
            title:
              "トレンド発生中の移動平均線はレジスタンス・サポートとして機能する",
            preview: false,
          },
          {
            title:
              "（クイズ）単純移動平均線（SMA）の役割として「誤っている」ものはどれか？",
            preview: false,
          },
        ],
      },
      {
        title: "初心者が知らない200期間移動平均線とは？",
        lectures: [
          {
            title: "初心者が知らない200期間移動平均線とは？",
            preview: false,
          },
          {
            title: "50MAや100MAはなぜ機能するのか？",
            preview: false,
          },
          {
            title: "75期間移動平均線が効きやすい銘柄と効きにくい銘柄",
            preview: false,
          },
          {
            title: "トレンドを把握するための200MAの使い方",
            preview: false,
          },
          {
            title: "フラクタル構造とマルチタイムフレーム分析について",
            preview: false,
          },
          {
            title:
              "（クイズ）長期トレンドの把握方法として「正しい説明」はどれか？",
            preview: false,
          },
        ],
      },
      {
        title:
          "押し目買いに役立つEMA（Exponential Moving Average）指数移動平均線とは？",
        lectures: [
          {
            title: "イントロ",
            preview: false,
          },
          {
            title: "EMA（Exponential Moving Average）指数移動平均線とは？",
            preview: false,
          },
          {
            title: "複数時間足でそれぞれEMAを追加する方法",
            preview: false,
          },
        ],
      },
      {
        title: "プロも実践する ハマ塾式「黄金トレード」手法紹介",
        lectures: [
          {
            title: "マル秘トレード手法（ハマ塾式 黄金トレード）とは？",
            preview: false,
          },
          {
            title: "今の実力を可視化しよう",
            preview: false,
          },
          {
            title: "（課題）今の実力を可視化しよう",
            preview: false,
          },
          {
            title: "ハマ塾式「黄金インジ」とは？",
            preview: false,
          },
          {
            title: "【受講特典】ハマ塾式「黄金インジ」セットアップ手順",
            preview: false,
          },
          {
            title: "ハマ塾式「黄金インジ」の使い方",
            preview: false,
          },
          {
            title: "ハマ塾生限定ノウハウ",
            preview: false,
          },
          {
            title: "ハマ塾式「黄金インジ」を上手に使いこなすコツ",
            preview: false,
          },
          {
            title: "（課題）今の実力を可視化しよう",
            preview: false,
          },
        ],
      },
      {
        title: "実践で成果を出す",
        lectures: [
          {
            title:
              "ハマ塾式「黄金インジ」とRSIを使ったリプレイトレードの始め方",
            preview: false,
          },
          {
            title: "プロも実践するハマ塾式「黄金トレード」実演",
            preview: false,
          },
          {
            title: "（課題）ハマ塾式「黄金トレード」を習得しよう",
            preview: false,
          },
        ],
      },
      {
        title: "次のステップへ向けて",
        lectures: [
          {
            title: "学んだことの振り返り",
            preview: false,
          },
        ],
      },
    ],
    categories: ["実践編"],
  },
  {
    slug: "price-action-complete-guide",
    publishedDate: "June 20, 2025",
    title: "プライスアクション【完全攻略】",
    excerpt:
      "ハマ塾「梅と緑茶インジ」を入手し、PAの基礎から実践まで一気に習得します",
    benefit: [
      "プロが使う独自の「ハマ塾 梅と緑茶インジゲーター」が手に入る",
      "プライスアクションについての理解が深まる",
      "SMC（スマートマネーコンセプト）を理解できる",
      "「梅と緑茶インジ」とSMCをフル活用した実践トレードが学べる",
    ],
    image: "/img/project7.jpg",
    price: 29800,
    alt: "プライスアクション【完全攻略】",
    url: "https://hama-juku.thinkific.com/enroll/3513135",
    youtube: "https://www.youtube.com/embed/bG-cEP19ZIY",
    sections: [
      {
        title: "イントロダクション",
        lectures: [
          { title: "なぜプライスアクションを学ぶのか？", preview: true },
          { title: "ハマ塾 基本操作", preview: true },
        ],
      },
      {
        title: "プライスアクション基礎編",
        lectures: [
          { title: "プライスアクション基礎編", preview: true },
          { title: "プライスアクションとは？", preview: true },
          { title: "（復習）ローソク足とは？", preview: true },
          { title: "ハンマー（トンカチ・ピンバー）とは？", preview: true },
          { title: "「ひげ」の解像度を高めよう", preview: true },
          { title: "同時線(Doji、十時線、コマ)とは？", preview: true },
          { title: "丸坊主(Marubozu)とは？", preview: false },
          { title: "（演習）丸坊主を見つけてみよう", preview: false },
          { title: "演習答え合わせ", preview: false },
          { title: "インサイドバー（はらみ足）とは？", preview: false },
          { title: "インサイドバーの深掘り", preview: false },
          { title: "アウトサイドバーとは？", preview: false },
          { title: "アウトサイドバーの深掘り", preview: false },
          { title: "エンゴルフィンバー（包み足）とは？", preview: false },
          { title: "どの時間足でトレードするのが良いのか？", preview: false },
        ],
      },
      {
        title: "サイクル理論とリテストを学ぼう",
        lectures: [
          {
            title: "トレンドにはサイクルがある（サイクル理論）",
            preview: true,
          },
          {
            title:
              "（Q&A）上昇トレンド中にエントリーしたい場合はどうしたら良いか",
            preview: false,
          },
          {
            title:
              "プライスアクションを注視すべきタイミングとは？（スイングハイ・スイングロー）",
            preview: false,
          },
          { title: "長い下髭プライスアクション", preview: false },
          { title: "リテスト（再確認）とトレンドの強さの関係", preview: false },
        ],
      },
      {
        title: "トレンドラインにおけるプライスアクション",
        lectures: [
          {
            title: "トレンドラインにおけるプライスアクションとは？",
            preview: false,
          },
          { title: "改めてトレンドラインの理解を深めよう", preview: false },
          {
            title: "加速するサポートラインと減速するサポートライン",
            preview: false,
          },
          {
            title: "加速するレジスタンスラインと減速するレジスタンスライン",
            preview: false,
          },
        ],
      },
      {
        title: "出来高（Volume）にも注力しよう",
        lectures: [
          { title: "出来高（Volume）とは？", preview: false },
          { title: "出来高の表示方法", preview: false },
          { title: "出来高はどういった時に増えるのか", preview: false },
          { title: "出来高からバブルを察知するコツ", preview: false },
          { title: "出来高から機関投資家の動きを察知する方法", preview: false },
          {
            title: "駆け込み売り・買い（Selling・Buyingクライマックス）",
            preview: false,
          },
        ],
      },
      {
        title: "スマートマネーコンセプト(SMC)を理解しよう",
        lectures: [
          { title: "スマートマネーコンセプト(SMC)とは？", preview: false },
          { title: "（復習）ダウ理論の復習", preview: false },
          { title: "フェイクブレイクアウトとは？", preview: false },
          { title: "フェイクブレイクアウトの理解を深めよう", preview: false },
          {
            title:
              "機関投資家は上がりきったところで売り、下がり切ったところで買う",
            preview: false,
          },
          { title: "機関投資家の売買形跡を見る方法", preview: false },
          {
            title: "【受講特典】ハマ塾式「梅と緑茶インジ」セットアップ手順",
            preview: false,
          },
          { title: "押し目買いのコツ", preview: false },
          { title: "フェアバリューギャップ（FVG）とは？", preview: false },
          { title: "（演習）押し目買いにチャレンジしよう", preview: false },
          { title: "演習答え合わせ", preview: false },
        ],
      },
      {
        title: "今までの学びの集大成を確認しよう",
        lectures: [
          {
            title:
              "（演習）ハマ塾式「黄金インジ」「梅と緑茶インジ」を用いてリプレイトレードしよう",
            preview: false,
          },
        ],
      },
      {
        title: "次のステップへ向けて",
        lectures: [{ title: "次のステップ", preview: false }],
      },
    ],
    categories: ["実践編"],
  },
];
