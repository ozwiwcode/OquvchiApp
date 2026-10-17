// Complete Morse code mapping (Latin, Cyrillic, Numbers, Punctuation)
export const MORSE = {
  // Latin alphabet
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....',
  I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.',
  Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..',

  // Cyrillic alphabet
  А: '.-', Б: '-...', В: '.--', Г: '--.', Д: '-..', Е: '.', Ё: '.', Ж: '...-',
  З: '--..', И: '..', Й: '.---', К: '-.-', Л: '.-..', М: '--', Н: '-.', О: '---',
  П: '.--.', Р: '.-.', С: '...', Т: '-', У: '..-', Ф: '..-.', Х: '....', Ц: '-.-.',
  Ч: '---.', Ш: '----', Щ: '--.-', Ъ: '--.--', Ы: '-.--', Ь: '-..-', Э: '..-..',
  Ю: '..--', Я: '.-.-',

  // Digits
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',

  // Punctuation & Symbols
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
  '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
  ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
  '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
};

// Reverse dictionary for decoding Morse code
export const REV = Object.fromEntries(
  Object.entries(MORSE).map(([char, code]) => [code, char])
);

// Expanded language lessons with 3-language translations (Phrase, Uzbek, Russian, English)
export const LESSONS = [
  {
    id: 'uz',
    name: "O'zbekcha (Uzbek)",
    phrases: [
      { text: 'Salom', uz: 'Salom', ru: 'Привет / Здравствуйте', en: 'Hello' },
      { text: 'Rahmat', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Iltimos', uz: 'Iltimos', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Xayr', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Ismim ...', uz: 'Ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Qalaysiz?', uz: 'Qalaysiz?', ru: 'Как дела?', en: 'How are you?' },
      { text: 'Uzr / Kechirasiz', uz: 'Uzr / Kechirasiz', ru: 'Извините', en: 'Excuse me / Sorry' },
      { text: 'Ha', uz: 'Ha', ru: 'Да', en: 'Yes' },
      { text: 'Yo\'q', uz: 'Yo\'q', ru: 'Нет', en: 'No' },
      { text: 'Bu qancha turadi?', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is this?' },
      { text: 'Yordam bering!', uz: 'Yordam bering!', ru: 'Помогите!', en: 'Help!' },
      { text: 'Tushunmadim', uz: 'Tushunmadim', ru: 'Я не понял', en: 'I don\'t understand' }
    ]
  },
  {
    id: 'ru',
    name: 'Русский (Russian)',
    phrases: [
      { text: 'Привет', uz: 'Salom', ru: 'Привет', en: 'Hi / Hello' },
      { text: 'Здравствуйте', uz: 'Assalomu alaykum', ru: 'Здравствуйте', en: 'Hello (formal)' },
      { text: 'Спасибо', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Пожалуйста', uz: 'Iltimos / Arzimaydi', ru: 'Пожалуйста', en: 'Please / You\'re welcome' },
      { text: 'До свидания', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Меня зовут ...', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Как дела?', uz: 'Ishlar qanday?', ru: 'Как дела?', en: 'How are you?' },
      { text: 'Извините', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me' },
      { text: 'Сколько это стоит?', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much does it cost?' },
      { text: 'Где находится ...?', uz: '... qayerda joylashgan?', ru: 'Где находится ...?', en: 'Where is ...?' },
      { text: 'Приятно познакомиться', uz: 'Tanishganimdan xursandman', ru: 'Приятно познакомиться', en: 'Nice to meet you' }
    ]
  },
  {
    id: 'en',
    name: 'English',
    phrases: [
      { text: 'Hello', uz: 'Salom', ru: 'Здравствуйте', en: 'Hello' },
      { text: 'Thank you', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Please', uz: 'Iltimos', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Goodbye', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'My name is ...', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'How are you?', uz: 'Qalaysiz?', ru: 'Как дела?', en: 'How are you?' },
      { text: 'Nice to meet you', uz: 'Tanishganimdan xursandman', ru: 'Приятно познакомиться', en: 'Nice to meet you' },
      { text: 'Excuse me', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me' },
      { text: 'How much is it?', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is it?' },
      { text: 'Where is the bathroom?', uz: 'Hojatxona qayerda?', ru: 'Где находится туалет?', en: 'Where is the bathroom?' },
      { text: 'Have a nice day', uz: 'Kuningiz xayrli o\'tsin', ru: 'Хорошего дня', en: 'Have a nice day' }
    ]
  },
  {
    id: 'de',
    name: 'Deutsch (German)',
    phrases: [
      { text: 'Hallo', uz: 'Salom', ru: 'Привет', en: 'Hello' },
      { text: 'Guten Tag', uz: 'Xayrli kun', ru: 'Добрый день', en: 'Good day' },
      { text: 'Danke', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Bitte', uz: 'Iltimos / Arzimaydi', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Auf Wiedersehen', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Ich heiße ...', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Wie geht es Ihnen?', uz: 'Qalaysiz?', ru: 'Как ваши дела?', en: 'How are you?' },
      { text: 'Entschuldigung', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me' },
      { text: 'Was kostet das?', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is this?' },
      { text: 'Sprechen Sie Englisch?', uz: 'Inglizcha gapirasizmi?', ru: 'Вы говорите по-английски?', en: 'Do you speak English?' }
    ]
  },
  {
    id: 'fr',
    name: 'Français (French)',
    phrases: [
      { text: 'Bonjour', uz: 'Salom / Xayrli kun', ru: 'Здравствуйте / Добрый день', en: 'Hello / Good morning' },
      { text: 'Merci', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'S\'il vous plaît', uz: 'Iltimos', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Au revoir', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Je m\'appelle ...', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Comment ça va ?', uz: 'Qalaysiz?', ru: 'Как дела?', en: 'How are you?' },
      { text: 'Pardon / Excusez-moi', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me' },
      { text: 'Combien ça coûte ?', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is it?' },
      { text: 'Enchanté(e)', uz: 'Tanishganimdan xursandman', ru: 'Приятно познакомиться', en: 'Nice to meet you' }
    ]
  },
  {
    id: 'es',
    name: 'Español (Spanish)',
    phrases: [
      { text: 'Hola', uz: 'Salom', ru: 'Привет', en: 'Hello' },
      { text: 'Gracias', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Por favor', uz: 'Iltimos', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Adiós', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Me llamo ...', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: '¿Cómo estás?', uz: 'Qalaysiz?', ru: 'Как дела?', en: 'How are you?' },
      { text: 'Mucho gusto', uz: 'Tanishganimdan xursandman', ru: 'Приятно познакомиться', en: 'Nice to meet you' },
      { text: 'Perdón / Disculpe', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me' },
      { text: '¿Cuánto cuesta?', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much does it cost?' }
    ]
  },
  {
    id: 'ja',
    name: '日本語 (Japanese)',
    phrases: [
      { text: 'Konnichiwa (こんにちは)', uz: 'Salom', ru: 'Здравствуйте', en: 'Hello' },
      { text: 'Arigatou gozaimasu (ありがとうございます)', uz: 'Katta rahmat', ru: 'Большое спасибо', en: 'Thank you very much' },
      { text: 'Onegaishimasu (お願いします)', uz: 'Iltimos', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Sayounara (さようなら)', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Watashi no namae wa ... desu (私の名前は...です)', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'O-genki desu ka? (お元気ですか？)', uz: 'Qalaysiz?', ru: 'Как ваши дела?', en: 'How are you?' },
      { text: 'Sumimasen (すみません)', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me / Sorry' },
      { text: 'Kore wa ikura desu ka? (これはいくらですか？)', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is this?' },
      { text: 'Hajimemashite (初めまして)', uz: 'Tanishganimdan xursandman', ru: 'Приятно познакомиться', en: 'Nice to meet you' }
    ]
  },
  {
    id: 'zh',
    name: '中文 (Chinese)',
    phrases: [
      { text: 'Nǐ hǎo (你好)', uz: 'Salom', ru: 'Привет / Здравствуйте', en: 'Hello' },
      { text: 'Xiè xie (谢谢)', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Bú kèqi (不客气)', uz: 'Arzimaydi', ru: 'Не за что', en: 'You\'re welcome' },
      { text: 'Zài jiàn (再见)', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Wǒ jiào ... (我叫...)', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Nǐ hǎo ma? (你好吗？)', uz: 'Qalaysiz?', ru: 'Как дела?', en: 'How are you?' },
      { text: 'Duìbuqǐ (对不起)', uz: 'Kechirasiz', ru: 'Извините', en: 'Sorry' },
      { text: 'Zhè gè duō shao qián? (这个多少钱？)', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is this?' }
    ]
  },
  {
    id: 'tr',
    name: 'Türkçe (Turkish)',
    phrases: [
      { text: 'Merhaba', uz: 'Salom', ru: 'Здравствуйте', en: 'Hello' },
      { text: 'Teşekkür ederim', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Rica ederim', uz: 'Arzimaydi', ru: 'Пожалуйста', en: 'You\'re welcome' },
      { text: 'Lütfen', uz: 'Iltimos', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Hoşça kalın', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Benim adım ...', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Nasılsınız?', uz: 'Qalaysiz?', ru: 'Как ваши дела?', en: 'How are you?' },
      { text: 'Affedersiniz', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me' },
      { text: 'Bu ne kadar?', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is this?' },
      { text: 'Memnun oldum', uz: 'Tanishganimdan xursandman', ru: 'Приятно познакомиться', en: 'Nice to meet you' }
    ]
  },
  {
    id: 'ar',
    name: 'العربية (Arabic)',
    phrases: [
      { text: 'Marhaban (مرحبا)', uz: 'Salom', ru: 'Здравствуйте', en: 'Hello' },
      { text: 'Shukran (شكرا)', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Min fadlik (من فضلك)', uz: 'Iltimos', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Maa salama (مع السلامة)', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Ismi ... (اسمي...)', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Kayfa haluk? (كيف حالك؟)', uz: 'Qalaysiz?', ru: 'Как дела?', en: 'How are you?' },
      { text: 'Afwan (عفوا)', uz: 'Kechirasiz / Arzimaydi', ru: 'Извините / Пожалуйста', en: 'Excuse me / You\'re welcome' },
      { text: 'Kam hatha? (كم هذا؟)', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is this?' }
    ]
  },
  {
    id: 'kk',
    name: 'Qazaqsha (Kazakh)',
    phrases: [
      { text: 'Salemetsiz be', uz: 'Assalomu alaykum', ru: 'Здравствуйте', en: 'Hello' },
      { text: 'Rahmet', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Otınemın', uz: 'Iltimos', ru: 'Пожалуйста', en: 'Please' },
      { text: 'Sau bolynyz', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Menın atym ...', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Qalyńyz qalay?', uz: 'Qalaysiz?', ru: 'Как ваши дела?', en: 'How are you?' },
      { text: 'Gashyqtar kunınyzben', uz: 'Tanishganimdan xursandman', ru: 'Приятно познакомиться', en: 'Nice to meet you' },
      { text: 'Keshırıńiz', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me' },
      { text: 'Bul qansha turady?', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much does it cost?' }
    ]
  },
  {
    id: 'ko',
    name: '한국어 (Korean)',
    phrases: [
      { text: 'Annyeonghaseyo (안녕하세요)', uz: 'Salom / Assalomu alaykum', ru: 'Здравствуйте', en: 'Hello' },
      { text: 'Kamsahamnida (감사합니다)', uz: 'Rahmat', ru: 'Спасибо', en: 'Thank you' },
      { text: 'Cheonman-eyo (천만에요)', uz: 'Arzimaydi', ru: 'Не за что', en: 'You\'re welcome' },
      { text: 'Annyeonghi gaseyo (안녕히 가세요)', uz: 'Xayr', ru: 'До свидания', en: 'Goodbye' },
      { text: 'Jeo-neun ... imnida (저는 ... 입니다)', uz: 'Mening ismim ...', ru: 'Меня зовут ...', en: 'My name is ...' },
      { text: 'Eotohke jinaeseyo? (어떻게 지내세요?)', uz: 'Qalaysiz?', ru: 'Как дела?', en: 'How are you?' },
      { text: 'Sillyehamnida (실례합니다)', uz: 'Kechirasiz', ru: 'Извините', en: 'Excuse me' },
      { text: 'Igeo eolma-eyo? (이거 얼마예요?)', uz: 'Bu qancha turadi?', ru: 'Сколько это стоит?', en: 'How much is this?' },
      { text: 'Bangawoyo (반가워요)', uz: 'Tanishganimdan xursandman', ru: 'Приятно познакомиться', en: 'Nice to meet you' }
    ]
  }
];