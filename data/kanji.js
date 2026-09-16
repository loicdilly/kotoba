// Foundational N5 Kanji with readings, strokes, meanings & examples
export const KANJI_DATA = [
  // Numbers
  { kanji: '一', strokes: 1, onyomi: 'イチ (ichi)', kunyomi: 'ひと-つ (hito-tsu)', meaningFr: 'Un (1)', meaningEn: 'One', examples: [{ word: '一人', reading: 'ひとり', fr: 'Une personne / Seul', en: 'One person / alone' }] },
  { kanji: '二', strokes: 2, onyomi: 'ニ (ni)', kunyomi: 'ふた-つ (futa-tsu)', meaningFr: 'Deux (2)', meaningEn: 'Two', examples: [{ word: '二月', reading: 'にがつ', fr: 'Février', en: 'February' }] },
  { kanji: '三', strokes: 3, onyomi: 'サン (san)', kunyomi: 'みっ-つ (mit-tsu)', meaningFr: 'Trois (3)', meaningEn: 'Three', examples: [{ word: '三人', reading: 'さんにん', fr: 'Trois personnes', en: 'Three people' }] },
  { kanji: '四', strokes: 5, onyomi: 'シ (shi)', kunyomi: 'よん / よっ-つ', meaningFr: 'Quatre (4)', meaningEn: 'Four', examples: [{ word: '四季', reading: 'しき', fr: 'Les quatre saisons', en: 'Four seasons' }] },
  { kanji: '五', strokes: 4, onyomi: 'ゴ (go)', kunyomi: 'いつ-つ (itsu-tsu)', meaningFr: 'Cinq (5)', meaningEn: 'Five', examples: [{ word: '五日', reading: 'いつか', fr: 'Le 5 du mois / 5 jours', en: '5th day / 5 days' }] },
  { kanji: '六', strokes: 4, onyomi: 'ロク (roku)', kunyomi: 'むっ-つ (mut-tsu)', meaningFr: 'Six (6)', meaningEn: 'Six', examples: [{ word: '六月', reading: 'ろくがつ', fr: 'Juin', en: 'June' }] },
  { kanji: '七', strokes: 2, onyomi: 'シチ (shichi)', kunyomi: 'なな-つ (nana-tsu)', meaningFr: 'Sept (7)', meaningEn: 'Seven', examples: [{ word: '七夕', reading: 'たなばた', fr: 'Fête des étoiles (Tanabata)', en: 'Star Festival' }] },
  { kanji: '八', strokes: 2, onyomi: 'ハチ (hachi)', kunyomi: 'やっ-つ (yat-tsu)', meaningFr: 'Huit (8)', meaningEn: 'Eight', examples: [{ word: '八百屋', reading: 'やおや', fr: 'Marchand de légumes', en: 'Greengrocer' }] },
  { kanji: '九', strokes: 2, onyomi: 'キュウ / ク', kunyomi: 'ここの-つ (kokono-tsu)', meaningFr: 'Neuf (9)', meaningEn: 'Nine', examples: [{ word: '九月', reading: 'くがつ', fr: 'Septembre', en: 'September' }] },
  { kanji: '十', strokes: 2, onyomi: 'ジュウ (juu)', kunyomi: 'とお (too)', meaningFr: 'Dix (10)', meaningEn: 'Ten', examples: [{ word: '十分', reading: 'じゅっぷん', fr: '10 minutes', en: '10 minutes' }] },
  { kanji: '百', strokes: 6, onyomi: 'ヒャク (hyaku)', kunyomi: 'もも', meaningFr: 'Cent (100)', meaningEn: 'Hundred', examples: [{ word: '百円', reading: 'ひゃくえん', fr: '100 yens', en: '100 yen' }] },
  { kanji: '千', strokes: 3, onyomi: 'セン (sen)', kunyomi: 'ち (chi)', meaningFr: 'Mille (1000)', meaningEn: 'Thousand', examples: [{ word: '千円', reading: 'せんえん', fr: '1 000 yens', en: '1,000 yen' }] },
  { kanji: '万', strokes: 3, onyomi: 'マン (man)', kunyomi: 'よろず', meaningFr: 'Dix mille (10 000)', meaningEn: 'Ten thousand', examples: [{ word: '一万円', reading: 'いちまんえん', fr: '10 000 yens (~60€)', en: '10,000 yen' }] },
  { kanji: '円', strokes: 4, onyomi: 'エン (en)', kunyomi: 'まる-い (maru-i)', meaningFr: 'Yen / Cercle', meaningEn: 'Yen / Circle', examples: [{ word: '円高', reading: 'えんだか', fr: 'Yen fort', en: 'Strong yen' }] },

  // Nature & Elements (Days of the week)
  { kanji: '日', strokes: 4, onyomi: 'ニチ / ジツ', kunyomi: 'ひ / か / び', meaningFr: 'Soleil / Jour (Dimanche)', meaningEn: 'Sun / Day (Sunday)', examples: [{ word: '日曜日', reading: 'にちようび', fr: 'Dimanche', en: 'Sunday' }, { word: '日本', reading: 'にほん', fr: 'Japon', en: 'Japan' }] },
  { kanji: '月', strokes: 4, onyomi: 'ゲツ / ガツ', kunyomi: 'つき (tsuki)', meaningFr: 'Lune / Mois (Lundi)', meaningEn: 'Moon / Month (Monday)', examples: [{ word: '月曜日', reading: 'げつようび', fr: 'Lundi', en: 'Monday' }, { word: '今月', reading: 'こんげつ', fr: 'Ce mois-ci', en: 'This month' }] },
  { kanji: '火', strokes: 4, onyomi: 'カ (ka)', kunyomi: 'ひ (hi)', meaningFr: 'Feu (Mardi)', meaningEn: 'Fire (Tuesday)', examples: [{ word: '火曜日', reading: 'かようび', fr: 'Mardi', en: 'Tuesday' }, { word: '花火', reading: 'はなび', fr: 'Feu d\'artifice', en: 'Fireworks' }] },
  { kanji: '水', strokes: 4, onyomi: 'スイ (sui)', kunyomi: 'みず (mizu)', meaningFr: 'Eau (Mercredi)', meaningEn: 'Water (Wednesday)', examples: [{ word: '水曜日', reading: 'すいようび', fr: 'Mercredi', en: 'Wednesday' }, { word: '水着', reading: 'みずぎ', fr: 'Maillot de bain', en: 'Swimsuit' }] },
  { kanji: '木', strokes: 4, onyomi: 'モク / ボク', kunyomi: 'き (ki)', meaningFr: 'Arbre / Bois (Jeudi)', meaningEn: 'Tree / Wood (Thursday)', examples: [{ word: '木曜日', reading: 'もくようび', fr: 'Jeudi', en: 'Thursday' }] },
  { kanji: '金', strokes: 8, onyomi: 'キン (kin)', kunyomi: 'かね (kane)', meaningFr: 'Or / Argent (Vendredi)', meaningEn: 'Gold / Money (Friday)', examples: [{ word: '金曜日', reading: 'きんようび', fr: 'Vendredi', en: 'Friday' }, { word: 'お金', reading: 'おかね', fr: 'Argent (monnaie)', en: 'Money' }] },
  { kanji: '土', strokes: 3, onyomi: 'ド / ト', kunyomi: 'つち (tsuchi)', meaningFr: 'Terre / Sol (Samedi)', meaningEn: 'Earth / Soil (Saturday)', examples: [{ word: '土曜日', reading: 'どようび', fr: 'Samedi', en: 'Saturday' }] },
  { kanji: '山', strokes: 3, onyomi: 'サン (san)', kunyomi: 'やま (yama)', meaningFr: 'Montagne', meaningEn: 'Mountain', examples: [{ word: '富士山', reading: 'ふじさん', fr: 'Mont Fuji', en: 'Mt. Fuji' }] },
  { kanji: '川', strokes: 3, onyomi: 'セン (sen)', kunyomi: 'かわ (kawa)', meaningFr: 'Rivière', meaningEn: 'River', examples: [{ word: '小川', reading: 'おがわ', fr: 'Ruisseau', en: 'Stream' }] },

  // People & Basics
  { kanji: '人', strokes: 2, onyomi: 'ジン / ニン', kunyomi: 'ひと (hito)', meaningFr: 'Personne / Humain', meaningEn: 'Person / Human', examples: [{ word: '日本人', reading: 'にほんじん', fr: 'Japonais (nationalité)', en: 'Japanese person' }, { word: 'フランス人', reading: 'ふらんすじん', fr: 'Français (nationalité)', en: 'French person' }] },
  { kanji: '子', strokes: 3, onyomi: 'シ / ス', kunyomi: 'こ (ko)', meaningFr: 'Enfant', meaningEn: 'Child', examples: [{ word: '子供', reading: 'こども', fr: 'Enfants', en: 'Children' }] },
  { kanji: '女', strokes: 3, onyomi: 'ジョ (jo)', kunyomi: 'おんな (onna)', meaningFr: 'Femme / Fille', meaningEn: 'Woman / Female', examples: [{ word: '女の子', reading: 'おんなのこ', fr: 'Petite fille', en: 'Girl' }] },
  { kanji: '男', strokes: 7, onyomi: 'ダン / ナン', kunyomi: 'おとこ (otoko)', meaningFr: 'Homme / Garçon', meaningEn: 'Man / Male', examples: [{ word: '男の子', reading: 'おとこのこ', fr: 'Petit garçon', en: 'Boy' }] },
  { kanji: '目', strokes: 5, onyomi: 'モク (moku)', kunyomi: 'め (me)', meaningFr: 'Œil', meaningEn: 'Eye', examples: [{ word: '目薬', reading: 'めぐすり', fr: 'Gouttes pour les yeux', en: 'Eye drops' }] },
  { kanji: '口', strokes: 3, onyomi: 'コウ / ク', kunyomi: 'くち (kuchi)', meaningFr: 'Bouche / Entrée', meaningEn: 'Mouth / Opening', examples: [{ word: '出口', reading: 'でぐち', fr: 'Sortie', en: 'Exit' }, { word: '入口', reading: 'いりぐち', fr: 'Entrée', en: 'Entrance' }] },

  // Directions & Sizes
  { kanji: '上', strokes: 3, onyomi: 'ジョウ (jou)', kunyomi: 'うえ (ue)', meaningFr: 'Haut / Sur', meaningEn: 'Up / Above', examples: [{ word: '上手', reading: 'じょうず', fr: 'Doué / Habile', en: 'Skillful' }] },
  { kanji: '下', strokes: 3, onyomi: 'カ / ゲ', kunyomi: 'した (shita)', meaningFr: 'Bas / Sous', meaningEn: 'Down / Below', examples: [{ word: '地下鉄', reading: 'ちかてつ', fr: 'Métro (chemin sous-terre)', en: 'Subway' }] },
  { kanji: '中', strokes: 4, onyomi: 'チュウ (chuu)', kunyomi: 'なか (naka)', meaningFr: 'Milieu / Dedans', meaningEn: 'Middle / Inside', examples: [{ word: '一日中', reading: 'いちにちじゅう', fr: 'Toute la journée', en: 'All day long' }] },
  { kanji: '大', strokes: 3, onyomi: 'ダイ / タイ', kunyomi: 'おお-きい (oo-kii)', meaningFr: 'Grand', meaningEn: 'Big / Large', examples: [{ word: '大学', reading: 'だいがく', fr: 'Université', en: 'University' }] },
  { kanji: '小', strokes: 3, onyomi: 'ショウ (shou)', kunyomi: 'ちい-さい (chii-sai)', meaningFr: 'Petit', meaningEn: 'Small / Little', examples: [{ word: '小学校', reading: 'しょうがっこう', fr: 'École primaire', en: 'Elementary school' }] },
  { kanji: '本', strokes: 5, onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', meaningFr: 'Livre / Origine', meaningEn: 'Book / Origin', examples: [{ word: '本屋', reading: 'ほんや', fr: 'Librairie', en: 'Bookstore' }, { word: '日本', reading: 'にほん', fr: 'Japon (origine du soleil)', en: 'Japan' }] }
];
