// Kana Dataset: Hiragana & Katakana (Basic, Dakuten, Yoon) with Romaji and mnemonics
export const KANA_ROWS = [
  { id: 'vowels', name: 'A-I-U-E-O', labelFr: 'Voyelles', labelEn: 'Vowels' },
  { id: 'k', name: 'K (ka, ki...)', labelFr: 'Ligne K', labelEn: 'K-Row' },
  { id: 's', name: 'S (sa, shi...)', labelFr: 'Ligne S', labelEn: 'S-Row' },
  { id: 't', name: 'T (ta, chi...)', labelFr: 'Ligne T', labelEn: 'T-Row' },
  { id: 'n', name: 'N (na, ni...)', labelFr: 'Ligne N', labelEn: 'N-Row' },
  { id: 'h', name: 'H (ha, hi...)', labelFr: 'Ligne H', labelEn: 'H-Row' },
  { id: 'm', name: 'M (ma, mi...)', labelFr: 'Ligne M', labelEn: 'M-Row' },
  { id: 'y', name: 'Y (ya, yu, yo)', labelFr: 'Ligne Y', labelEn: 'Y-Row' },
  { id: 'r', name: 'R (ra, ri...)', labelFr: 'Ligne R', labelEn: 'R-Row' },
  { id: 'w_n', name: 'W & N (wa, wo, n)', labelFr: 'Ligne W & N', labelEn: 'W & N Row' },
  { id: 'dakuten', name: 'Dakuon (G, Z, D, B, P)', labelFr: 'Sons voisés (G, Z, D, B, P)', labelEn: 'Voiced (G, Z, D, B, P)' },
  { id: 'yoon', name: 'Yōon (Combinaisons)', labelFr: 'Combinaisons (Yōon)', labelEn: 'Combos (Yōon)' }
];

export const KANA_DATA = [
  // --- Vowels ---
  { id: 'a', hiragana: 'あ', katakana: 'ア', romaji: 'a', row: 'vowels', type: 'basic', mnemonicFr: 'Comme une pomme avec sa tige', mnemonicEn: 'Looks like an apple with a stem' },
  { id: 'i', hiragana: 'い', katakana: 'イ', romaji: 'i', row: 'vowels', type: 'basic', mnemonicFr: 'Deux aiguilles parallèles', mnemonicEn: 'Two parallel needles' },
  { id: 'u', hiragana: 'う', katakana: 'ウ', romaji: 'u', row: 'vowels', type: 'basic', mnemonicFr: 'Un dos courbé sous un fardeau', mnemonicEn: 'An arched back making "ooh!"' },
  { id: 'e', hiragana: 'え', katakana: 'エ', romaji: 'e', row: 'vowels', type: 'basic', mnemonicFr: 'Un oiseau exotique perché', mnemonicEn: 'An energetic exotic bird' },
  { id: 'o', hiragana: 'お', katakana: 'オ', romaji: 'o', row: 'vowels', type: 'basic', mnemonicFr: 'Une balle de golf sur un tee', mnemonicEn: 'A golf ball on the green' },

  // --- K Row ---
  { id: 'ka', hiragana: 'か', katakana: 'カ', romaji: 'ka', row: 'k', type: 'basic', mnemonicFr: 'Un cerf-volant avec sa traînée', mnemonicEn: 'A kite flying with ribbon' },
  { id: 'ki', hiragana: 'き', katakana: 'キ', romaji: 'ki', row: 'k', type: 'basic', mnemonicFr: 'Une clé ancienne (key)', mnemonicEn: 'Looks like a key' },
  { id: 'ku', hiragana: 'く', katakana: 'ク', romaji: 'ku', row: 'k', type: 'basic', mnemonicFr: 'Le bec d\'un coucou ouvert', mnemonicEn: 'Open beak of a bird' },
  { id: 'ke', hiragana: 'け', katakana: 'ケ', romaji: 'ke', row: 'k', type: 'basic', mnemonicFr: 'Un fût de bière (keg)', mnemonicEn: 'A keg of beer' },
  { id: 'ko', hiragana: 'こ', katakana: 'コ', romaji: 'ko', row: 'k', type: 'basic', mnemonicFr: 'Deux vers de terre face à face', mnemonicEn: 'A pair of swimming koi' },

  // --- S Row ---
  { id: 'sa', hiragana: 'さ', katakana: 'サ', romaji: 'sa', row: 's', type: 'basic', mnemonicFr: 'Une aiguille à coudre (sadly)', mnemonicEn: 'A dancer doing salsa' },
  { id: 'shi', hiragana: 'し', katakana: 'シ', romaji: 'shi', row: 's', type: 'basic', mnemonicFr: 'Un hameçon de pêcheur', mnemonicEn: 'A fishing hook' },
  { id: 'su', hiragana: 'す', katakana: 'ス', romaji: 'su', row: 's', type: 'basic', mnemonicFr: 'Une boucle de paille à sushi', mnemonicEn: 'A curly straw sipping soup' },
  { id: 'se', hiragana: 'せ', katakana: 'セ', romaji: 'se', row: 's', type: 'basic', mnemonicFr: 'Deux personnes dos à dos', mnemonicEn: 'Sunset over a mountain' },
  { id: 'so', hiragana: 'そ', katakana: 'ソ', romaji: 'so', row: 's', type: 'basic', mnemonicFr: 'Une aiguille en zigzag (sewing)', mnemonicEn: 'A zigzag sewing stitch' },

  // --- T Row ---
  { id: 'ta', hiragana: 'た', katakana: 'タ', romaji: 'ta', row: 't', type: 'basic', mnemonicFr: 'Les lettres t et a stylisées', mnemonicEn: 'Spells out "ta"' },
  { id: 'chi', hiragana: 'ち', katakana: 'チ', romaji: 'chi', row: 't', type: 'basic', mnemonicFr: 'Le chiffre 5 (cheerleader)', mnemonicEn: 'Looks like a cheerleader' },
  { id: 'tsu', hiragana: 'つ', katakana: 'ツ', romaji: 'tsu', row: 't', type: 'basic', mnemonicFr: 'Une vague de tsunami déferlante', mnemonicEn: 'A curling tsunami wave' },
  { id: 'te', hiragana: 'て', katakana: 'テ', romaji: 'te', row: 't', type: 'basic', mnemonicFr: 'Une trompe d\'éléphant', mnemonicEn: 'An elephant trunk' },
  { id: 'to', hiragana: 'と', katakana: 'ト', romaji: 'to', row: 't', type: 'basic', mnemonicFr: 'Une épine plantée dans un orteil (toe)', mnemonicEn: 'A thorn in a toe' },

  // --- N Row ---
  { id: 'na', hiragana: 'な', katakana: 'ナ', romaji: 'na', row: 'n', type: 'basic', mnemonicFr: 'Une religieuse (nun) en prière', mnemonicEn: 'A nun praying before a cross' },
  { id: 'ni', hiragana: 'に', katakana: 'ニ', romaji: 'ni', row: 'n', type: 'basic', mnemonicFr: 'Une aiguille et son fil (needle)', mnemonicEn: 'A needle and stitch' },
  { id: 'nu', hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu', row: 'n', type: 'basic', mnemonicFr: 'Des nouilles enroulées avec baguette', mnemonicEn: 'Chopsticks grabbing noodles' },
  { id: 'ne', hiragana: 'ね', katakana: 'ネ', romaji: 'ne', row: 'n', type: 'basic', mnemonicFr: 'Un chat avec sa queue enroulée (neko)', mnemonicEn: 'A cat curling its tail' },
  { id: 'no', hiragana: 'の', katakana: 'ノ', romaji: 'no', row: 'n', type: 'basic', mnemonicFr: 'Panneau sens interdit circulaire', mnemonicEn: 'A round "No entry" sign' },

  // --- H Row ---
  { id: 'ha', hiragana: 'は', katakana: 'ハ', romaji: 'ha', row: 'h', type: 'basic', mnemonicFr: 'Un bonhomme qui rit (ha ha!)', mnemonicEn: 'The letter H with a belly' },
  { id: 'hi', hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi', row: 'h', type: 'basic', mnemonicFr: 'Un grand sourire joyeux (hee hee)', mnemonicEn: 'A cheerful smiling mouth' },
  { id: 'fu', hiragana: 'ふ', katakana: 'フ', romaji: 'fu', row: 'h', type: 'basic', mnemonicFr: 'Le Mont Fuji enneigé', mnemonicEn: 'Mount Fuji slopes' },
  { id: 'he', hiragana: 'へ', katakana: 'ヘ', romaji: 'he', row: 'h', type: 'basic', mnemonicFr: 'Le sommet d\'une colline (haystack)', mnemonicEn: 'A steep mountain hill' },
  { id: 'ho', hiragana: 'ほ', katakana: 'ホ', romaji: 'ho', row: 'h', type: 'basic', mnemonicFr: 'Un ange avec son auréole', mnemonicEn: 'A person wearing a sun hat' },

  // --- M Row ---
  { id: 'ma', hiragana: 'ま', katakana: 'マ', romaji: 'ma', row: 'm', type: 'basic', mnemonicFr: 'Un masque décoratif avec deux barres', mnemonicEn: 'A mask with a chin' },
  { id: 'mi', hiragana: 'み', katakana: 'ミ', romaji: 'mi', row: 'm', type: 'basic', mnemonicFr: 'Le chiffre 21 porte-bonheur', mnemonicEn: 'Lucky number 21' },
  { id: 'mu', hiragana: 'む', katakana: 'ム', romaji: 'mu', row: 'm', type: 'basic', mnemonicFr: 'Une tête de vache qui meugle (moo)', mnemonicEn: 'A cow face saying "moo"' },
  { id: 'me', hiragana: 'め', katakana: 'メ', romaji: 'me', row: 'm', type: 'basic', mnemonicFr: 'Un œil expressif (me = œil en jp)', mnemonicEn: 'An eye (me means eye in JP)' },
  { id: 'mo', hiragana: 'も', katakana: 'モ', romaji: 'mo', row: 'm', type: 'basic', mnemonicFr: 'Un hameçon pour attraper plus de poissons', mnemonicEn: 'Fishhook catching more fish' },

  // --- Y Row ---
  { id: 'ya', hiragana: 'や', katakana: 'ヤ', romaji: 'ya', row: 'y', type: 'basic', mnemonicFr: 'Une corne de yack robuste', mnemonicEn: 'A yak head with horns' },
  { id: 'yu', hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu', row: 'y', type: 'basic', mnemonicFr: 'Un poisson rouge qui nage', mnemonicEn: 'A graceful fish swimming' },
  { id: 'yo', hiragana: 'よ', katakana: 'ヨ', romaji: 'yo', row: 'y', type: 'basic', mnemonicFr: 'Un joueur de yoyo', mnemonicEn: 'A yo-yo suspended on string' },

  // --- R Row ---
  { id: 'ra', hiragana: 'ら', katakana: 'ラ', romaji: 'ra', row: 'r', type: 'basic', mnemonicFr: 'Un lapin assis sur ses pattes', mnemonicEn: 'A rabbit sitting alert' },
  { id: 'ri', hiragana: 'り', katakana: 'リ', romaji: 'ri', row: 'r', type: 'basic', mnemonicFr: 'Deux tiges de roseau (reed)', mnemonicEn: 'Two reeds in a river' },
  { id: 'ru', hiragana: 'る', katakana: 'ル', romaji: 'ru', row: 'r', type: 'basic', mnemonicFr: 'Un rubis au creux d\'une boucle', mnemonicEn: 'A loop holding a ruby' },
  { id: 're', hiragana: 'れ', katakana: 'レ', romaji: 're', row: 'r', type: 'basic', mnemonicFr: 'Un renne qui s\'élance', mnemonicEn: 'A racing reindeer' },
  { id: 'ro', hiragana: 'ろ', katakana: 'ロ', romaji: 'ro', row: 'r', type: 'basic', mnemonicFr: 'Une route qui tourne (sans boucle)', mnemonicEn: 'A winding road' },

  // --- W & N Row ---
  { id: 'wa', hiragana: 'わ', katakana: 'ワ', romaji: 'wa', row: 'w_n', type: 'basic', mnemonicFr: 'Un cygne blanc sur l\'eau', mnemonicEn: 'A graceful swan' },
  { id: 'wo', hiragana: 'を', katakana: 'ヲ', romaji: 'wo', row: 'w_n', type: 'basic', mnemonicFr: 'Un acrobate qui crie "woah!"', mnemonicEn: 'An acrobat doing flips' },
  { id: 'n', hiragana: 'ん', katakana: 'ン', romaji: 'n', row: 'w_n', type: 'basic', mnemonicFr: 'La lettre cursive n', mnemonicEn: 'A cursive letter "n"' },

  // --- Dakuten / Handakuten ---
  { id: 'ga', hiragana: 'が', katakana: 'ガ', romaji: 'ga', row: 'dakuten', type: 'dakuten' },
  { id: 'gi', hiragana: 'ぎ', katakana: 'ギ', romaji: 'gi', row: 'dakuten', type: 'dakuten' },
  { id: 'gu', hiragana: 'ぐ', katakana: 'グ', romaji: 'gu', row: 'dakuten', type: 'dakuten' },
  { id: 'ge', hiragana: 'げ', katakana: 'ゲ', romaji: 'ge', row: 'dakuten', type: 'dakuten' },
  { id: 'go', hiragana: 'ご', katakana: 'ゴ', romaji: 'go', row: 'dakuten', type: 'dakuten' },

  { id: 'za', hiragana: 'ざ', katakana: 'ザ', romaji: 'za', row: 'dakuten', type: 'dakuten' },
  { id: 'ji_z', hiragana: 'じ', katakana: 'ジ', romaji: 'ji', row: 'dakuten', type: 'dakuten' },
  { id: 'zu', hiragana: 'ず', katakana: 'ズ', romaji: 'zu', row: 'dakuten', type: 'dakuten' },
  { id: 'ze', hiragana: 'ぜ', katakana: 'ゼ', romaji: 'ze', row: 'dakuten', type: 'dakuten' },
  { id: 'zo', hiragana: 'ぞ', katakana: 'ゾ', romaji: 'zo', row: 'dakuten', type: 'dakuten' },

  { id: 'da', hiragana: 'だ', katakana: 'ダ', romaji: 'da', row: 'dakuten', type: 'dakuten' },
  { id: 'ji_d', hiragana: 'ぢ', katakana: 'ヂ', romaji: 'ji', row: 'dakuten', type: 'dakuten' },
  { id: 'zu_d', hiragana: 'づ', katakana: 'ヅ', romaji: 'zu', row: 'dakuten', type: 'dakuten' },
  { id: 'de', hiragana: 'で', katakana: 'デ', romaji: 'de', row: 'dakuten', type: 'dakuten' },
  { id: 'do', hiragana: 'ど', katakana: 'ド', romaji: 'do', row: 'dakuten', type: 'dakuten' },

  { id: 'ba', hiragana: 'ば', katakana: 'バ', romaji: 'ba', row: 'dakuten', type: 'dakuten' },
  { id: 'bi', hiragana: 'び', katakana: 'ビ', romaji: 'bi', row: 'dakuten', type: 'dakuten' },
  { id: 'bu', hiragana: 'ぶ', katakana: 'ブ', romaji: 'bu', row: 'dakuten', type: 'dakuten' },
  { id: 'be', hiragana: 'べ', katakana: 'ベ', romaji: 'be', row: 'dakuten', type: 'dakuten' },
  { id: 'bo', hiragana: 'ぼ', katakana: 'ボ', romaji: 'bo', row: 'dakuten', type: 'dakuten' },

  { id: 'pa', hiragana: 'ぱ', katakana: 'パ', romaji: 'pa', row: 'dakuten', type: 'dakuten' },
  { id: 'pi', hiragana: 'ぴ', katakana: 'ピ', romaji: 'pi', row: 'dakuten', type: 'dakuten' },
  { id: 'pu', hiragana: 'ぷ', katakana: 'プ', romaji: 'pu', row: 'dakuten', type: 'dakuten' },
  { id: 'pe', hiragana: 'ぺ', katakana: 'ペ', romaji: 'pe', row: 'dakuten', type: 'dakuten' },
  { id: 'po', hiragana: 'ぽ', katakana: 'ポ', romaji: 'po', row: 'dakuten', type: 'dakuten' },

  // --- Yōon Combinations ---
  { id: 'kya', hiragana: 'きゃ', katakana: 'キャ', romaji: 'kya', row: 'yoon', type: 'yoon' },
  { id: 'kyu', hiragana: 'きゅ', katakana: 'キュ', romaji: 'kyu', row: 'yoon', type: 'yoon' },
  { id: 'kyo', hiragana: 'きょ', katakana: 'キョ', romaji: 'kyo', row: 'yoon', type: 'yoon' },

  { id: 'sha', hiragana: 'しゃ', katakana: 'シャ', romaji: 'sha', row: 'yoon', type: 'yoon' },
  { id: 'shu', hiragana: 'しゅ', katakana: 'シュ', romaji: 'shu', row: 'yoon', type: 'yoon' },
  { id: 'sho', hiragana: 'しょ', katakana: 'ショ', romaji: 'sho', row: 'yoon', type: 'yoon' },

  { id: 'cha', hiragana: 'ちゃ', katakana: 'チャ', romaji: 'cha', row: 'yoon', type: 'yoon' },
  { id: 'chu', hiragana: 'ちゅ', katakana: 'チュ', romaji: 'chu', row: 'yoon', type: 'yoon' },
  { id: 'cho', hiragana: 'ちょ', katakana: 'チョ', romaji: 'cho', row: 'yoon', type: 'yoon' },

  { id: 'nya', hiragana: 'にゃ', katakana: 'ニャ', romaji: 'nya', row: 'yoon', type: 'yoon' },
  { id: 'nyu', hiragana: 'にゅ', katakana: 'ニュ', romaji: 'nyu', row: 'yoon', type: 'yoon' },
  { id: 'nyo', hiragana: 'にょ', katakana: 'ニョ', romaji: 'nyo', row: 'yoon', type: 'yoon' },

  { id: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ', romaji: 'hya', row: 'yoon', type: 'yoon' },
  { id: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ', romaji: 'hyu', row: 'yoon', type: 'yoon' },
  { id: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ', romaji: 'hyo', row: 'yoon', type: 'yoon' },

  { id: 'mya', hiragana: 'みゃ', katakana: 'ミャ', romaji: 'mya', row: 'yoon', type: 'yoon' },
  { id: 'myu', hiragana: 'みゅ', katakana: 'ミュ', romaji: 'myu', row: 'yoon', type: 'yoon' },
  { id: 'myo', hiragana: 'みょ', katakana: 'ミョ', romaji: 'myo', row: 'yoon', type: 'yoon' },

  { id: 'rya', hiragana: 'りゃ', katakana: 'リャ', romaji: 'rya', row: 'yoon', type: 'yoon' },
  { id: 'ryu', hiragana: 'りゅ', katakana: 'リュ', romaji: 'ryu', row: 'yoon', type: 'yoon' },
  { id: 'ryo', hiragana: 'りょ', katakana: 'リョ', romaji: 'ryo', row: 'yoon', type: 'yoon' },

  { id: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ', romaji: 'gya', row: 'yoon', type: 'yoon' },
  { id: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ', romaji: 'gyu', row: 'yoon', type: 'yoon' },
  { id: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ', romaji: 'gyo', row: 'yoon', type: 'yoon' },

  { id: 'ja', hiragana: 'じゃ', katakana: 'ジャ', romaji: 'ja', row: 'yoon', type: 'yoon' },
  { id: 'ju', hiragana: 'じゅ', katakana: 'ジュ', romaji: 'ju', row: 'yoon', type: 'yoon' },
  { id: 'jo', hiragana: 'じょ', katakana: 'ジョ', romaji: 'jo', row: 'yoon', type: 'yoon' },

  { id: 'bya', hiragana: 'びゃ', katakana: 'ビャ', romaji: 'bya', row: 'yoon', type: 'yoon' },
  { id: 'byu', hiragana: 'びゅ', katakana: 'ビュ', romaji: 'byu', row: 'yoon', type: 'yoon' },
  { id: 'byo', hiragana: 'びょ', katakana: 'ビョ', romaji: 'byo', row: 'yoon', type: 'yoon' },

  { id: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ', romaji: 'pya', row: 'yoon', type: 'yoon' },
  { id: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ', romaji: 'pyu', row: 'yoon', type: 'yoon' },
  { id: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ', romaji: 'pyo', row: 'yoon', type: 'yoon' }
];
