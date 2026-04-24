// 坂の上珈琲 - 共通デフォルトデータ
// localStorage key: 'sakanoueCafe'

const DEFAULT_DATA = {
  shop: {
    name_jp: '坂の上珈琲',
    name_en: 'Saka no Ue Coffee',
    since: '2020',
    address: '〒852-8521\n長崎県長崎市文教町1-14\n長崎大学文教キャンパス前',
    tel: '095-000-0000',
    hours_weekday: '8:00 – 20:00',
    hours_saturday: '9:00 – 18:00',
    closed: '日祝',
    access: '長崎電気軌道「長大前」電停より徒歩1分\n長崎バス「文教町」停留所より徒歩2分',
    parking_note: '※駐車場はございません。公共交通機関をご利用ください。',
    instagram: '@sakanouecoffee',
    twitter: '@sakanouecoffee'
  },
  hero: {
    eyebrow: 'Nagasaki University · Since 2020',
    title_jp: '坂の上珈琲',
    title_en: 'Coffee & the Hill',
    description: '長崎大学のそばで、ゆっくり流れる時間を。\n丘の風と、本物の一杯をあなたへ。',
    bg_image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80'
  },
  about: {
    eyebrow: 'Our Story',
    title: '長崎の丘で出会う、\n小さな日常の豊かさ',
    p1: '長崎大学のキャンパスに隣接する「坂の上珈琲」は、学生や教職員、地域の方々が気軽に立ち寄れる小さなカフェです。',
    p2: '丘の上から長崎の街並みが望めるこの場所で、スペシャルティコーヒーと手作りのスイーツをご用意してお待ちしています。',
    p3: '勉強の合間に、散歩の休憩に、大切な人との時間に。どんな瞬間にも寄り添う一杯を、心を込めてお届けします。',
    tags: 'スペシャルティコーヒー,手作りスイーツ,長崎大学前,居心地の良い空間',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80'
  },
  concepts: [
    {
      title: '本物の珈琲',
      text: '世界各地から厳選したスペシャルティコーヒー豆を、その日の気候に合わせてハンドドリップ。一杯一杯に丁寧さを込めます。'
    },
    {
      title: '居場所としての空間',
      text: '木のぬくもりと自然光が差し込む店内は、読書も勉強も、ただぼんやりするのも歓迎します。あなたの「ひだまり」へ。'
    },
    {
      title: '地域とのつながり',
      text: '長崎の農家と直接繋がり、地元の旬の食材をスイーツや軽食に活かします。この街で生まれ、この街へ還る味を。'
    }
  ],
  menu: {
    extraCategories: [],
    drinks: [
      { name: 'ハンドドリップコーヒー', desc: '本日の豆を丁寧にドリップ。豆の産地・焙煎度はお好みでお選びいただけます。', price: '¥550〜', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80' },
      { name: 'カフェラテ', desc: 'なめらかなスチームミルクとエスプレッソのコントラスト。ホット・アイス選択可。', price: '¥620', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80' },
      { name: '長崎ほうじ茶ラテ', desc: '長崎産のほうじ茶を濃く抽出し、ミルクと合わせた香ばしい一杯。', price: '¥650', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80' }
    ],
    food: [
      { name: '厚切りトースト', desc: '地元パン屋から直送の食パンを厚切りに。バター・あんバター・はちみつからお選びを。', price: '¥480〜', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80' },
      { name: 'フレンチトースト', desc: '一晩漬け込んだふわふわのフレンチトースト。季節のフルーツを添えて。', price: '¥780', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80' },
      { name: '日替わりサンドイッチ', desc: 'その日の仕入れで変わる、旬の具材のサンドイッチ。ドリンクセットがお得。', price: '¥720〜', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80' }
    ],
    sweets: [
      { name: '長崎バスクチーズケーキ', desc: '表面を高温で焼き上げた濃厚なバスクチーズケーキ。長崎のクリームチーズ使用。', price: '¥580', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
      { name: '季節のシフォンケーキ', desc: 'ふわふわ軽やかな食感のシフォンケーキ。季節の素材を使った限定フレーバーが人気。', price: '¥520', image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=600&q=80' },
      { name: 'くず餅パフェ', desc: '和素材を組み合わせた坂の上オリジナルパフェ。抹茶・黒蜜・きなこが層になって。', price: '¥820', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80' }
    ]
  },
  gallery: [
    { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80', alt: 'カフェ外観' },
    { url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80', alt: 'コーヒー' },
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', alt: '店内' },
    { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', alt: 'ドリンク' },
    { url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&q=80', alt: 'テーブル席' }
  ],
  map: {
    customUrl: ''
  },
  chat: {
    welcome: 'こんにちは！坂の上珈琲へようこそ☕\nご質問があればお気軽にどうぞ。\n\n以下のボタンからよくある質問を選べます👇',
    fallback: 'ご質問ありがとうございます😊\n申し訳ありませんが、その内容はスタッフに直接確認させてください。\n\nお電話：095-000-0000\nInstagram DM：@sakanouecoffee\n\nお気軽にご連絡ください！',
    faq: [
      { label: '場所・アクセス', keywords: '場所,住所,どこ,アクセス,行き方,最寄り,電停,バス', answer: '📍 当店は長崎電気軌道「長大前」電停より徒歩1分です。\n\n〒852-8521\n長崎県長崎市文教町1-14\n長崎大学文教キャンパス前\n\n長崎バス「文教町」停留所からも徒歩2分です。' },
      { label: '営業時間', keywords: '営業,時間,何時,閉店,開店,open,close,定休', answer: '🕘 営業時間はこちらです。\n\n🟢 平日：8:00 〜 20:00\n🟢 土曜：9:00 〜 18:00\n🔴 日曜・祝日：定休日\n\n※臨時休業はInstagram（@sakanouecoffee）でお知らせします。' },
      { label: '人気メニュー', keywords: 'メニュー,おすすめ,人気,注文,名物,おいしい,コーヒー,珈琲', answer: '⭐ 人気メニューをご紹介します！\n\n1位 ☕ ハンドドリップコーヒー ¥550〜\n2位 🍮 長崎バスクチーズケーキ ¥580\n3位 🥛 カフェラテ ¥620\n4位 🍵 長崎ほうじ茶ラテ ¥650\n5位 🧇 フレンチトースト ¥780\n\nバスクチーズケーキは数量限定！お早めにどうぞ。' },
      { label: '混雑時間帯', keywords: '混む,混雑,空いてる,待つ,待ち時間,ピーク,時間帯', answer: '🕐 混雑しやすい時間帯です。\n\n🔴 混雑：8:30〜9:30（朝の通学時間帯）\n🔴 混雑：12:00〜13:30（ランチタイム）\n🟡 やや混：15:00〜17:00（ティータイム）\n\n🟢 比較的空いているのは：\n・平日 10:00〜12:00\n・平日 17:00〜閉店前' },
      { label: 'テイクアウト', keywords: 'テイクアウト,持ち帰り,to go,takeout', answer: '🛍 全メニューのテイクアウトに対応しています！\n\nドリンクはテイクアウト用カップで、スイーツは専用ボックスでお渡しします。\n\n事前にお電話（095-000-0000）でご予約いただくとスムーズです。' },
      { label: 'Wi-Fi・電源', keywords: 'wifi,wi-fi,ワイファイ,インターネット,電源,コンセント,勉強,作業', answer: '💻 勉強・お仕事でのご利用大歓迎です！\n\n✅ 無料Wi-Fi完備\n✅ 電源コンセント席あり（窓際カウンター席）\n\n混雑時はお席の回転にご協力をお願いする場合があります。' },
      { label: 'お支払い方法', keywords: '支払い,支払,クレジット,カード,電子マネー,キャッシュレス,paypay,suica,現金', answer: '💳 各種お支払い方法に対応しています。\n\n✅ 現金\n✅ クレジットカード（VISA / Master / JCB）\n✅ PayPay / LINE Pay\n✅ Suica / PASMO などの交通系IC\n\nどうぞお気軽にご利用ください。' },
      { label: 'ご予約', keywords: '予約,席,電話,席数,グループ', answer: '📞 ご予約はお電話にて承っています。\nTEL：095-000-0000（営業時間内）\n\n全席数：約20席\n・カウンター席：6席\n・テーブル席：12席\n・テラス席：4席\n\n4名様以上のグループはご予約をおすすめします。' }
    ]
  },
  contact: {
    lead: 'ご不明な点はチャットでお気軽にどうぞ。\nよくある質問をボタン一つで確認できます。\n\nお電話やSNSのDMでもお気軽にご連絡ください。'
  }
};

function loadData() {
  try {
    const saved = localStorage.getItem('sakanoueCafe');
    if (!saved) return JSON.parse(JSON.stringify(DEFAULT_DATA));
    const parsed = JSON.parse(saved);
    // deep merge with defaults for safety
    return deepMerge(JSON.parse(JSON.stringify(DEFAULT_DATA)), parsed);
  } catch(e) {
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function saveData(data) {
  localStorage.setItem('sakanoueCafe', JSON.stringify(data));
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
