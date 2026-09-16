// Curated Thematic Vocabulary for Daily Life, Travel, Food & Family
export const VOCAB_CATEGORIES = [
  { id: 'greetings', icon: '👋', nameFr: 'Salutations & Politesse', nameEn: 'Greetings & Politeness' },
  { id: 'numbers', icon: '🔢', nameFr: 'Chiffres & Prix', nameEn: 'Numbers & Prices' },
  { id: 'food', icon: '🍜', nameFr: 'Nourriture & Restaurant', nameEn: 'Food & Dining' },
  { id: 'travel', icon: '🚅', nameFr: 'Voyage & Transports', nameEn: 'Travel & Transport' },
  { id: 'daily', icon: '🏠', nameFr: 'Vie Quotidienne & Famille', nameEn: 'Daily Life & Family' },
  { id: 'phrases', icon: '💬', nameFr: 'Phrases Indispensables', nameEn: 'Essential Survival Phrases' }
];

export const VOCAB_DATA = [
  // --- Greetings & Politeness ---
  {
    id: 'v_konnichiwa',
    category: 'greetings',
    japanese: 'こんにちは',
    furigana: 'こんにちは',
    romaji: 'konnichiwa',
    fr: 'Bonjour (la journée)',
    en: 'Hello / Good afternoon',
    notes: 'S\'utilise en journée, de midi jusqu\'au soir.'
  },
  {
    id: 'v_ohayou',
    category: 'greetings',
    japanese: 'おはようございます',
    furigana: 'おはようございます',
    romaji: 'ohayou gozaimasu',
    fr: 'Bonjour (le matin)',
    en: 'Good morning (polite)',
    notes: 'Forme polie. Entre proches ou en famille, on dit simplement "Ohayou".'
  },
  {
    id: 'v_konbanwa',
    category: 'greetings',
    japanese: 'こんばんは',
    furigana: 'こんばんは',
    romaji: 'konbanwa',
    fr: 'Bonsoir',
    en: 'Good evening',
    notes: 'S\'écrit avec は (ha) prononcé "wa" à la fin.'
  },
  {
    id: 'v_arigatou',
    category: 'greetings',
    japanese: 'ありがとうございます',
    furigana: 'ありがとうございます',
    romaji: 'arigatou gozaimasu',
    fr: 'Merci beaucoup',
    en: 'Thank you very much',
    notes: '"Arigatou" pour les amis, forme complète avec "gozaimasu" pour la politesse.'
  },
  {
    id: 'v_sumimasen',
    category: 'greetings',
    japanese: 'すみません',
    furigana: 'すみません',
    romaji: 'sumimasen',
    fr: 'Pardon / Excusez-moi / S\'il vous plaît',
    en: 'Excuse me / Sorry / Pardon',
    notes: 'Le mot magique au Japon ! Pour appeler le serveur, s\'excuser ou remercier.'
  },
  {
    id: 'v_sayounara',
    category: 'greetings',
    japanese: 'さようなら',
    furigana: 'さようなら',
    romaji: 'sayounara',
    fr: 'Au revoir (définitif/formel)',
    en: 'Goodbye / Farewell',
    notes: 'Pour un usage quotidien entre amis, préférez "Mata ne" (À bientôt).'
  },
  {
    id: 'v_matane',
    category: 'greetings',
    japanese: 'またね',
    furigana: 'またね',
    romaji: 'mata ne',
    fr: 'À plus tard / À bientôt',
    en: 'See you later / Bye',
    notes: 'Très naturel en famille ou avec des amis.'
  },
  {
    id: 'v_onegaishimasu',
    category: 'greetings',
    japanese: 'お願いします',
    furigana: 'おねがいします',
    romaji: 'onegaishimasu',
    fr: 'S\'il vous plaît (quand on demande un service)',
    en: 'Please (requesting service)',
    notes: 'Ex: "Kore, onegaishimasu" = "Ceci, s\'il vous plaît".'
  },
  {
    id: 'v_douzo',
    category: 'greetings',
    japanese: 'どうぞ',
    furigana: 'どうぞ',
    romaji: 'douzo',
    fr: 'Je vous en prie / Après vous / Servez-vous',
    en: 'Here you go / After you / Please go ahead',
    notes: 'En tendant quelque chose ou en laissant passer quelqu\'un.'
  },
  {
    id: 'v_gomennasai',
    category: 'greetings',
    japanese: 'ごめんなさい',
    furigana: 'ごめんなさい',
    romaji: 'gomennasai',
    fr: 'Désolé(e) / Pardon',
    en: 'I am sorry',
    notes: 'Excuse personnelle et sincère.'
  },
  {
    id: 'v_hai',
    category: 'greetings',
    japanese: 'はい',
    furigana: 'はい',
    romaji: 'hai',
    fr: 'Oui / D\'accord / Présent',
    en: 'Yes / Understood',
    notes: 'Sert aussi à signaler qu\'on écoute attentivement son interlocuteur.'
  },
  {
    id: 'v_iie',
    category: 'greetings',
    japanese: 'いいえ',
    furigana: 'いいえ',
    romaji: 'iie',
    fr: 'Non / De rien',
    en: 'No / Not at all',
    notes: 'Peut aussi vouloir dire "de rien" après un remerciement.'
  },

  // --- Numbers & Prices ---
  { id: 'v_num1', category: 'numbers', japanese: '一', furigana: 'いち', romaji: 'ichi', fr: 'Un (1)', en: 'One (1)' },
  { id: 'v_num2', category: 'numbers', japanese: '二', furigana: 'に', romaji: 'ni', fr: 'Deux (2)', en: 'Two (2)' },
  { id: 'v_num3', category: 'numbers', japanese: '三', furigana: 'さん', romaji: 'san', fr: 'Trois (3)', en: 'Three (3)' },
  { id: 'v_num4', category: 'numbers', japanese: '四', furigana: 'よん / し', romaji: 'yon / shi', fr: 'Quatre (4)', en: 'Four (4)', notes: '"Yon" est plus commun car "shi" ressemble au mot mort.' },
  { id: 'v_num5', category: 'numbers', japanese: '五', furigana: 'ご', romaji: 'go', fr: 'Cinq (5)', en: 'Five (5)' },
  { id: 'v_num6', category: 'numbers', japanese: '六', furigana: 'ろく', romaji: 'roku', fr: 'Six (6)', en: 'Six (6)' },
  { id: 'v_num7', category: 'numbers', japanese: '七', furigana: 'なな / しち', romaji: 'nana / shichi', fr: 'Sept (7)', en: 'Seven (7)' },
  { id: 'v_num8', category: 'numbers', japanese: '八', furigana: 'はち', romaji: 'hachi', fr: 'Huit (8)', en: 'Eight (8)' },
  { id: 'v_num9', category: 'numbers', japanese: '九', furigana: 'きゅう / く', romaji: 'kyuu / ku', fr: 'Neuf (9)', en: 'Nine (9)' },
  { id: 'v_num10', category: 'numbers', japanese: '十', furigana: 'じゅう', romaji: 'juu', fr: 'Dix (10)', en: 'Ten (10)' },
  { id: 'v_num100', category: 'numbers', japanese: '百', furigana: 'ひゃく', romaji: 'hyaku', fr: 'Cent (100)', en: 'Hundred (100)' },
  { id: 'v_num1000', category: 'numbers', japanese: '千', furigana: 'せん', romaji: 'sen', fr: 'Mille (1 000)', en: 'Thousand (1,000)' },
  { id: 'v_num10000', category: 'numbers', japanese: '一万', furigana: 'いちまん', romaji: 'ichiman', fr: 'Dix mille (10 000)', en: 'Ten thousand (10,000)', notes: 'En japonais, on compte par tranches de 10 000 (man).' },
  { id: 'v_en', category: 'numbers', japanese: '円', furigana: 'えん', romaji: 'en', fr: 'Yen (monnaie japonaise)', en: 'Yen (currency)', notes: 'Prononcé "en" sans le Y en japonais.' },
  { id: 'v_ikura', category: 'numbers', japanese: 'いくらですか', furigana: 'いくらですか', romaji: 'ikura desu ka', fr: 'Combien ça coûte ?', en: 'How much is this?', notes: 'Essentiel pour faire des achats !' },

  // --- Food & Dining ---
  {
    id: 'v_itadakimasu',
    category: 'food',
    japanese: 'いただきます',
    furigana: 'いただきます',
    romaji: 'itadakimasu',
    fr: 'Bon appétit (dit avant de manger)',
    en: 'Bon appétit / Thank you for the meal',
    notes: 'Exprime le respect pour les ingrédients et cuisiniers.'
  },
  {
    id: 'v_gochisousama',
    category: 'food',
    japanese: 'ごちそうさまでした',
    furigana: 'ごちそうさまでした',
    romaji: 'gochisousama deshita',
    fr: 'Merci pour ce délicieux repas (dit après manger)',
    en: 'Thank you for the wonderful meal',
    notes: 'À dire en quittant la table ou le restaurant.'
  },
  { id: 'v_oishii', category: 'food', japanese: '美味しい', furigana: 'おいしい', romaji: 'oishii', fr: 'Délicieux / Bon', en: 'Delicious / Tasty' },
  { id: 'v_mizu', category: 'food', japanese: '水', furigana: 'みず', romaji: 'mizu', fr: 'Eau', en: 'Water', notes: 'Au restaurant, demandez "o-mizu kudasai" (de l\'eau s\'il vous plaît).' },
  { id: 'v_ocha', category: 'food', japanese: 'お茶', furigana: 'おちゃ', romaji: 'ocha', fr: 'Thé vert japonais', en: 'Green tea' },
  { id: 'v_gohan', category: 'food', japanese: 'ご飯', furigana: 'ごはん', romaji: 'gohan', fr: 'Riz cuit / Repas', en: 'Cooked rice / Meal' },
  { id: 'v_ramen', category: 'food', japanese: 'ラーメン', furigana: 'ラーメン', romaji: 'raamen', fr: 'Ramen', en: 'Ramen noodle soup' },
  { id: 'v_sushi', category: 'food', japanese: '寿司', furigana: 'すし', romaji: 'sushi', fr: 'Sushi', en: 'Sushi' },
  { id: 'v_kudasai', category: 'food', japanese: '〜をください', furigana: '〜をください', romaji: '... o kudasai', fr: '... s\'il vous plaît (donnez-moi)', en: 'Please give me ...', notes: 'Ex: "Kore o kudasai" = Donnez-moi ceci s\'il vous plaît.' },
  { id: 'v_okaikei', category: 'food', japanese: 'お会計をお願いします', furigana: 'おかいけいをおねがいします', romaji: 'okaikei o onegaishimasu', fr: 'L\'addition s\'il vous plaît', en: 'The check / bill please' },
  { id: 'v_kanpai', category: 'food', japanese: '乾杯', furigana: 'かんぱい', romaji: 'kanpai', fr: 'Santé ! (trinquer)', en: 'Cheers!' },

  // --- Travel & Transport ---
  { id: 'v_eki', category: 'travel', japanese: '駅', furigana: 'えき', romaji: 'eki', fr: 'Gare / Station', en: 'Train station' },
  { id: 'v_densha', category: 'travel', japanese: '電車', furigana: 'でんしゃ', romaji: 'densha', fr: 'Train électrique', en: 'Electric train' },
  { id: 'v_shinkansen', category: 'travel', japanese: '新幹線', furigana: 'しんかんせん', romaji: 'shinkansen', fr: 'Shinkansen (TGV japonais)', en: 'Bullet train' },
  { id: 'v_chikatetsu', category: 'travel', japanese: '地下鉄', furigana: 'ちかてつ', romaji: 'chikatetsu', fr: 'Métro', en: 'Subway / Metro' },
  { id: 'v_kippu', category: 'travel', japanese: '切符', furigana: 'きっぷ', romaji: 'kippu', fr: 'Billet de transport / Ticket', en: 'Ticket' },
  { id: 'v_doko', category: 'travel', japanese: 'どこですか', furigana: 'どこですか', romaji: 'doko desu ka', fr: 'Où est-ce ?', en: 'Where is it?', notes: 'Ex: "Toire wa doko desu ka?" = Où sont les toilettes ?' },
  { id: 'v_toire', category: 'travel', japanese: 'トイレ', furigana: 'トイレ', romaji: 'toire', fr: 'Toilettes', en: 'Restroom / Toilet', notes: 'Aussi appelé "Otearai" (お手洗い - lieu pour se laver les mains).' },
  { id: 'v_hoteru', category: 'travel', japanese: 'ホテル', furigana: 'ホテル', romaji: 'hoteru', fr: 'Hôtel', en: 'Hotel' },
  { id: 'v_migi', category: 'travel', japanese: '右', furigana: 'みぎ', romaji: 'migi', fr: 'Droite', en: 'Right' },
  { id: 'v_hidari', category: 'travel', japanese: '左', furigana: 'ひだり', romaji: 'hidari', fr: 'Gauche', en: 'Left' },
  { id: 'v_massugu', category: 'travel', japanese: '真っ直ぐ', furigana: 'まっすぐ', romaji: 'massugu', fr: 'Tout droit', en: 'Straight ahead' },
  { id: 'v_tasukete', category: 'travel', japanese: '助けてください', furigana: 'たすけてください', romaji: 'tasukete kudasai', fr: 'Aidez-moi s\'il vous plaît !', en: 'Help me please!' },

  // --- Daily Life & Family ---
  { id: 'v_watashi', category: 'daily', japanese: '私', furigana: 'わたし', romaji: 'watashi', fr: 'Moi / Je', en: 'I / Me' },
  { id: 'v_kazoku', category: 'daily', japanese: '家族', furigana: 'かぞく', romaji: 'kazoku', fr: 'Famille', en: 'Family' },
  { id: 'v_otousan', category: 'daily', japanese: 'お父さん', furigana: 'おとうさん', romaji: 'otousan', fr: 'Père / Papa', en: 'Father / Dad' },
  { id: 'v_okaasan', category: 'daily', japanese: 'お母さん', furigana: 'おかあさん', romaji: 'okaasan', fr: 'Mère / Maman', en: 'Mother / Mom' },
  { id: 'v_kodomo', category: 'daily', japanese: '子供', furigana: 'こども', romaji: 'kodomo', fr: 'Enfant(s)', en: 'Child / Children' },
  { id: 'v_tomodachi', category: 'daily', japanese: '友達', furigana: 'ともだち', romaji: 'tomodachi', fr: 'Ami(e)', en: 'Friend' },
  { id: 'v_ie', category: 'daily', japanese: '家', furigana: 'いえ / うち', romaji: 'ie / uchi', fr: 'Maison / Chez-soi', en: 'House / Home' },
  { id: 'v_kyou', category: 'daily', japanese: '今日', furigana: 'きょう', romaji: 'kyou', fr: 'Aujourd\'hui', en: 'Today' },
  { id: 'v_ashita', category: 'daily', japanese: '明日', furigana: 'あした', romaji: 'ashita', fr: 'Demain', en: 'Tomorrow' },
  { id: 'v_kinou', category: 'daily', japanese: '昨日', furigana: 'きのう', romaji: 'kinou', fr: 'Hier', en: 'Yesterday' },
  { id: 'v_ima', category: 'daily', japanese: '今', furigana: 'いま', romaji: 'ima', fr: 'Maintenant', en: 'Now' },
  { id: 'v_nihon', category: 'daily', japanese: '日本', furigana: 'にほん', romaji: 'nihon', fr: 'Japon', en: 'Japan' },
  { id: 'v_nihongo', category: 'daily', japanese: '日本語', furigana: 'にほんご', romaji: 'nihongo', fr: 'Langue japonaise', en: 'Japanese language' },

  // --- Essential Survival Phrases ---
  {
    id: 'v_wakarimasen',
    category: 'phrases',
    japanese: '分かりません',
    furigana: 'わかりません',
    romaji: 'wakarimasen',
    fr: 'Je ne comprends pas',
    en: 'I don\'t understand'
  },
  {
    id: 'v_eigo',
    category: 'phrases',
    japanese: '英語が話せますか',
    furigana: 'えいごがはなせますか',
    romaji: 'eigo ga hanasemasu ka',
    fr: 'Parlez-vous anglais ?',
    en: 'Do you speak English?'
  },
  {
    id: 'v_daijoubu',
    category: 'phrases',
    japanese: '大丈夫です',
    furigana: 'だいじょうぶです',
    romaji: 'daijoubu desu',
    fr: 'Tout va bien / C\'est bon / Pas de problème',
    en: 'It\'s okay / No problem / I\'m fine'
  },
  {
    id: 'v_korewanan',
    category: 'phrases',
    japanese: 'これは何ですか',
    furigana: 'これはなんですか',
    romaji: 'kore wa nan desu ka',
    fr: 'Qu\'est-ce que c\'est ?',
    en: 'What is this?'
  },
  {
    id: 'v_ganbatte',
    category: 'phrases',
    japanese: '頑張って！',
    furigana: 'がんばって！',
    romaji: 'ganbatte!',
    fr: 'Bon courage ! / Fais de ton mieux !',
    en: 'Good luck! / Do your best!'
  },
  {
    id: 'v_hajimemashite',
    category: 'phrases',
    japanese: 'はじめまして',
    furigana: 'はじめまして',
    romaji: 'hajimemashite',
    fr: 'Enchanté(e) (de vous rencontrer)',
    en: 'Nice to meet you'
  }
];
