// Scores are on the 189-point BMBA/DTM scale and are APPROXIMATE (verify at my.uzbmb.uz).
// Tuition is approximate, in million UZS per year.
// Logos automatically load from the public favicon service by domain.

export const DIRS = {
  it: {
    uz: 'Axborot texnologiyalari, dasturlash va kiberxavfsizlik',
    ru: 'Информационные технологии, программирование и кибербезопасность',
    careers: { uz: 'Dasturchi, data-analitik, kiberxavfsizlik mutaxassisi, IT-menejer, DevOps', ru: 'Программист, аналитик данных, специалист по кибербезопасности, IT-менеджер, DevOps' },
  },
  econ: {
    uz: 'Iqtisodiyot, moliya, biznes va menejment',
    ru: 'Экономика, финансы, бизнес и менеджмент',
    careers: { uz: 'Iqtisodchi, bankir, auditor, marketolog, tadbirkor, moliya tahlilchisi', ru: 'Экономист, банкир, аудитор, маркетолог, предприниматель, финансовый аналитик' },
  },
  law: {
    uz: 'Huquqshunoslik va xalqaro huquq',
    ru: 'Юриспруденция и международное право',
    careers: { uz: 'Yurist, advokat, sudya, prokuror, notarius, tergovchi', ru: 'Юрист, адвокат, судья, прокурор, нотариус, следователь' },
  },
  med: {
    uz: 'Davolash ishi, pediatriya, stomatologiya va xalq tabobati',
    ru: 'Лечебное дело, педиатрия, стоматология и народная медицина',
    careers: { uz: 'Shifokor, jarroh, stomatolog, pediatr, reanimatolog', ru: 'Врач, хирург, стоматолог, педиатр, реаниматолог' },
  },
  pharm: {
    uz: 'Farmatsiya va sanoat farmatsiyasi',
    ru: 'Фармация и промышленная фармация',
    careers: { uz: 'Farmatsevt, dori ishlab chiqarish texnologi, provizor', ru: 'Фармацевт, технолог фармацевтического производства, провизор' },
  },
  edu: {
    uz: 'Pedagogika, maktabgacha va boshlang\'ich ta\'lim',
    ru: 'Педагогика, дошкольное и начальное образование',
    careers: { uz: 'O\'qituvchi, tarbiyachi, metodist, maktab direktori, inklyuziv ta\'lim mutaxassisi', ru: 'Учитель, воспитатель, методист, директор школы, специалист по инклюзивному образованию' },
  },
  philo: {
    uz: 'Filologiya, xorijiy tillar va tarjimashunoslik',
    ru: 'Филология, иностранные языки и переводоведение',
    careers: { uz: 'Tarjimon, filolog, sinxron tarjimon, lingvist, til o\'qituvchisi', ru: 'Переводчик, филолог, синхронный переводчик, лингвист, преподаватель языка' },
  },
  nat: {
    uz: 'Aniq va tabiiy fanlar (Matematika, fizika, kimyo, biologiya)',
    ru: 'Точные и естественные науки (Математика, физика, химия, биология)',
    careers: { uz: 'Olim, tadqiqotchi, laborant, analitik, biofizik, biokimyogar', ru: 'Учёный, исследователь, лаборант, аналитик, биофизик, биохимик' },
  },
  eng: {
    uz: 'Muhandislik, energetika, mashinasozlik va qurilish',
    ru: 'Инженерия, энергетика, машиностроение и строительство',
    careers: { uz: 'Muhandis, konstruktor, qurilish rahbari, energetik, me\'mor', ru: 'Инженер, конструктор, руководитель стройки, энергетик, архитектор' },
  },
  agro: {
    uz: 'Agronomiya, biotexnologiya va qishloq xo\'jaligi',
    ru: 'Агрономия, биотехнология и сельское хозяйство',
    careers: { uz: 'Agronom, fermer, agro-menejer, seleksioner, zootexnik', ru: 'Агроном, фермер, агроменеджер, селекционер, зоотехник' },
  },
  intl: {
    uz: 'Xalqaro munosabatlar, politologiya va jurnalistika',
    ru: 'Международные отношения, политология и журналистика',
    careers: { uz: 'Diplomat, xalqaro tahlilchi, PR-mutaxassis, jurnalist, press-attashe', ru: 'Дипломат, международный аналитик, PR-специалист, журналист, пресс-атташе' },
  },
  tour: {
    uz: 'Turizm, mehmonxona ishi va servis',
    ru: 'Туризм, гостиничное дело и сервис',
    careers: { uz: 'Turizm menejeri, gid-tarjimon, mehmonxona direktori, event-menejer', ru: 'Менеджер по туризму, гид-переводчик, директор отеля, ивент-менеджер' },
  },
  art: {
    uz: 'San\'at, dizayn, va aktyorlik mahorati',
    ru: 'Искусство, дизайн и актёрское мастерство',
    careers: { uz: 'Grafik dizayner, rassom, rejissyor, aktyor, interyer dizayneri', ru: 'Графический дизайнер, художник, режиссёр, актёр, дизайнер интерьера' },
  },
};

// Data Schema: [id, name, type, city, domain, grantScore, contractScore, tuition (mln UZS), [directories]]
const RAW = [
  // ===================== TASHKENT (UNIVERSITIES & INTERNATIONAL) =====================
  ['nuuz', "O'zbekiston Milliy universiteti (Mirzo Ulug'bek nomidagi NUUz)", 'university', 'Toshkent', 'nuu.uz', 156, 118, 16, ['nat', 'philo', 'econ', 'law', 'it', 'edu']],
  ['tuit', "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti (TATU)", 'university', 'Toshkent', 'tuit.uz', 158, 122, 21, ['it']],
  ['tsue', 'Toshkent davlat iqtisodiyot universiteti (TDIU)', 'university', 'Toshkent', 'tsue.uz', 152, 115, 19, ['econ', 'it']],
  ['tsul', 'Toshkent davlat yuridik universiteti (TDYU)', 'university', 'Toshkent', 'tsul.uz', 168, 138, 28, ['law']],
  ['tma', 'Toshkent tibbiyot akademiyasi (TTA)', 'university', 'Toshkent', 'tma.uz', 165, 134, 30, ['med', 'pharm']],
  ['tdtu', 'Islam Karimov nomidagi Toshkent davlat texnika universiteti (TDTU)', 'university', 'Toshkent', 'tdtu.uz', 138, 98, 17, ['eng', 'it', 'nat']],
  ['uwed', 'Jahon iqtisodiyoti va diplomatiya universiteti (JIDU)', 'university', 'Toshkent', 'uwed.uz', 162, 130, 32, ['intl', 'econ', 'law', 'philo']],
  ['wiut', 'Westminster International University in Tashkent (WIUT)', 'university', 'Toshkent', 'wiut.uz', 0, 135, 88, ['econ', 'it', 'law']],
  ['inha', 'Toshkent shahridagi Inha universiteti', 'university', 'Toshkent', 'inha.uz', 0, 128, 42, ['it', 'eng', 'econ']],
  ['webster', 'Webster University in Tashkent', 'university', 'Toshkent', 'webster.uz', 0, 115, 92, ['it', 'econ', 'intl', 'philo']],
  ['mifi', 'MEPhI Milliy tadqiqot yadro universiteti Toshkent filiali', 'university', 'Toshkent', 'mephi.uz', 140, 105, 22, ['eng', 'nat']],
  ['mgu', 'M.V. Lomonosov nomidagi MDU Toshkent filiali', 'university', 'Toshkent', 'msu.uz', 145, 112, 28, ['nat', 'philo', 'econ', 'it']],
  ['mgiya', 'Toshkent davlat sharqshunoslik universiteti (TDSHU)', 'university', 'Toshkent', 'tsuos.uz', 148, 110, 18, ['philo', 'intl', 'econ']],
  ['uzswlu', "O'zbekiston davlat jahon tillari universiteti (O'zDJTU)", 'university', 'Toshkent', 'uzswlu.uz', 150, 112, 17, ['philo', 'intl', 'edu']],
  ['tdpu', 'Nizomiy nomidagi Toshkent davlat pedagogika universiteti (TDPU)', 'university', 'Toshkent', 'tdpu.uz', 132, 95, 15, ['edu', 'nat', 'philo']],
  ['tdau', 'Toshkent davlat agrar universiteti (TDAU)', 'university', 'Toshkent', 'tdau.uz', 112, 82, 14, ['agro', 'nat']],
  ['tpsu', 'Toshkent farmatsevtika instituti', 'university', 'Toshkent', 'pharmi.uz', 142, 112, 24, ['pharm']],
  ['tashpmi', 'Toshkent pediatriya tibbiyot instituti (ToshPMI)', 'university', 'Toshkent', 'tashpmi.uz', 158, 128, 28, ['med']],
  ['tsdi', 'Toshkent davlat stomatologiya instituti (TDSI)', 'university', 'Toshkent', 'tsdi.uz', 160, 132, 32, ['med']],
  ['ytit', 'Kimyo International University in Tashkent (KIUT / YTIT)', 'university', 'Toshkent', 'kiut.uz', 0, 100, 32, ['it', 'econ', 'eng', 'edu', 'med']],
  ['akfa', 'Central Asian University (sobiq AKFA University)', 'university', 'Toshkent', 'centralasian.uz', 0, 110, 58, ['med', 'it', 'econ', 'eng']],
  ['amity', 'Amity University Tashkent', 'university', 'Toshkent', 'amity.uz', 0, 105, 40, ['it', 'econ']],
  ['titu', 'Toshkent to\'qimachilik va yengil sanoat instituti', 'university', 'Toshkent', 'ttysi.uz', 118, 86, 15, ['eng', 'art']],
  ['tashlit', 'Toshkent davlat transport universiteti (TDTU Transport)', 'university', 'TDTU', 'tstu.uz', 130, 94, 18, ['eng', 'econ', 'it']],
  ['sanat', 'O\'zbekiston davlat san\'at va madaniyat instituti', 'university', 'Toshkent', 'dsmi.uz', 125, 90, 16, ['art', 'philo']],
  ['arch', 'Toshkent arxitektura-qurilish universiteti (TAQU)', 'university', 'Toshkent', 'taqi.uz', 135, 96, 18, ['eng', 'art']],

  // ===================== SAMARKAND REGION =====================
  ['samdu', 'Samarqand davlat universiteti (Sharof Rashidov nomidagi SamDU)', 'university', 'Samarqand', 'samdu.uz', 142, 102, 15, ['nat', 'philo', 'econ', 'edu', 'law']],
  ['sammu', 'Samarqand davlat tibbiyot universiteti (SamDTU)', 'university', 'Samarqand', 'sammu.uz', 158, 128, 26, ['med', 'pharm']],
  ['samsies', 'Samarqand iqtisodiyot va servis instituti (SIESI)', 'university', 'Samarqand', 'sies.uz', 130, 95, 15, ['econ', 'tour']],
  ['samvmi', 'Samarqand davlat veterinariya meditsinasi, chorvachilik va biotexnologiyalar universiteti', 'university', 'Samarqand', 'ssuv.uz', 110, 80, 13, ['agro', 'nat']],
  ['samiat', 'Samarqand davlat chet tillar instituti (SamDCHTI)', 'university', 'Samarqand', 'samdchti.uz', 145, 108, 15, ['philo', 'tour']],
  ['samgar', 'Samarqand davlat arxitektura-qurilish universiteti', 'university', 'Samarqand', 'samdaqu.uz', 122, 88, 15, ['eng', 'art']],
  ['samtuit', 'TATU Samarqand filiali', 'university', 'Samarqand', 'samtuit.uz', 140, 108, 18, ['it']],

  // ===================== FERGANA VALLEY (ANDIJAN, FERGANA, NAMANGAN) =====================
  ['andu', 'Andijon davlat universiteti (ADU)', 'university', 'Andijon', 'adu.uz', 130, 94, 13, ['edu', 'nat', 'philo', 'econ']],
  ['adti', 'Andijon davlat tibbiyot instituti (ADTI)', 'university', 'Andijon', 'adti.uz', 156, 124, 26, ['med', 'pharm']],
  ['andmiz', 'Andijon mashinasozlik instituti', 'university', 'Andijon', 'andmi.uz', 115, 84, 14, ['eng', 'it']],
  ['fdu', "Farg'ona davlat universiteti (FarDU)", 'university', "Farg'ona", 'fdu.uz', 132, 95, 13, ['edu', 'nat', 'philo', 'econ']],
  ['ferpi', "Farg'ona politexnika instituti (FarPI)", 'university', "Farg'ona", 'farpi.uz', 118, 86, 14, ['eng', 'it']],
  ['tatuf', "TATU Farg'ona filiali", 'university', "Farg'ona", 'tatuff.uz', 138, 104, 17, ['it']],
  ['namdu', 'Namangan davlat universiteti (NamDU)', 'university', 'Namangan', 'namdu.uz', 128, 92, 13, ['edu', 'nat', 'philo', 'econ']],
  ['nammqi', 'Namangan muhandislik-qurilish instituti', 'university', 'Namangan', 'nammqi.uz', 112, 82, 14, ['eng']],
  ['nammti', 'Namangan muhandislik-texnologiya instituti', 'university', 'Namangan', 'nammti.uz', 110, 80, 14, ['eng', 'agro']],

  // ===================== BUKHARA & NAVOI =====================
  ['buxdu', 'Buxoro davlat universiteti (BuxDU)', 'university', 'Buxoro', 'buxdu.uz', 134, 98, 14, ['edu', 'philo', 'nat', 'tour', 'econ']],
  ['bsmi', 'Abu Ali ibn Sino nomidagi Buxoro davlat tibbiyot instituti', 'university', 'Buxoro', 'bsmi.uz', 154, 122, 25, ['med', 'pharm']],
  ['buxmti', 'Buxoro muhandislik-texnologiya instituti', 'university', 'Buxoro', 'bmti.uz', 112, 82, 14, ['eng', 'it']],
  ['navdu', 'Navoiy davlat universiteti (NavDU)', 'university', 'Navoiy', 'navdu.uz', 120, 88, 13, ['edu', 'nat', 'philo']],
  ['nmgki', 'Navoiy davlat konchilik va texnologiyalar universiteti', 'university', 'Navoiy', 'nsumt.uz', 125, 90, 16, ['eng', 'nat']],

  // ===================== KHOREZM & KARAKALPAKSTAN =====================
  ['urdu', 'Urganch davlat universiteti (UrDU)', 'university', 'Urganch', 'urdu.uz', 128, 90, 13, ['edu', 'nat', 'philo', 'tour', 'econ']],
  ['urtuit', 'TATU Urganch filiali', 'university', 'Urganch', 'ubtuit.uz', 132, 100, 16, ['it']],
  ['tmaurg', 'TTA Urganch filiali', 'university', 'Urganch', 'urgttaff.uz', 148, 118, 22, ['med']],
  ['karsu', "Berdaq nomidagi Qoraqalpoq davlat universiteti (KSU)", 'university', 'Nukus', 'karsu.uz', 122, 86, 12, ['nat', 'philo', 'edu', 'econ', 'law']],
  ['ndpi', "Ajiniyoz nomidagi Nukus davlat pedagogika instituti", 'university', 'Nukus', 'ndpi.uz', 115, 82, 11, ['edu', 'philo']],
  ['nukusmed', "Toshkent tibbiyot akademiyasi Nukus filiali", 'university', 'Nukus', 'ttanf.uz', 142, 110, 21, ['med']],
  ['nukustuit', "TATU Nukus filiali", 'university', 'Nukus', 'tatunf.uz', 128, 95, 15, ['it']],

  // ===================== SURKHANDARYA & KASHKADARYA =====================
  ['terdu', 'Termiz davlat universiteti (TerDU)', 'university', 'Termiz', 'tersu.uz', 122, 86, 12, ['edu', 'nat', 'philo', 'econ']],
  ['termmed', 'Toshkent tibbiyot akademiyasi Termiz filiali', 'university', 'Termiz', 'ttatf.uz', 145, 112, 22, ['med']],
  ['qarshu', 'Qarshi davlat universiteti (QarDU)', 'university', 'Qarshi', 'qarshu.uz', 125, 88, 13, ['edu', 'nat', 'philo', 'econ']],
  ['qieki', 'Qarshi muhandislik-iqtisodiyot instituti', 'university', 'Qarshi', 'qmii.uz', 114, 82, 14, ['eng', 'econ']],

  // ===================== REAL COLLEGES & TECHNICAL SCHOOLS (TEXNIKUMLAR) =====================
  ['col_tash_it', 'Toshkent radioelektronika va avtomatika texnikumi', 'college', 'Toshkent', 'treat.uz', 88, 62, 8, ['it', 'eng']],
  ['col_tash_bank', 'Toshkent moliya-iqtisodiyot texnikumi', 'college', 'Toshkent', null, 90, 65, 8, ['econ']],
  ['col_tash_law', 'Toshkent shahar yuridik texnikumi', 'college', 'Toshkent', 'toshkent.huquqshunos.uz', 105, 75, 10, ['law']],
  ['col_tash_med', 'Abu Ali ibn Sino nomidagi Toshkent 1-sonli tibbiyot kolleji', 'college', 'Toshkent', null, 98, 70, 7, ['med', 'pharm']],
  ['col_sam_med', 'Samarqand 1-son Abu Ali ibn Sino nomidagi jamoat salomatligi texnikumi', 'college', 'Samarqand', null, 92, 66, 6, ['med']],
  ['col_sam_law', 'Samarqand viloyat yuridik texnikumi', 'college', 'Samarqand', 'samarqand.huquqshunos.uz', 100, 72, 9, ['law']],
  ['col_sam_it', 'Samarqand axborot texnologiyalari texnikumi', 'college', 'Samarqand', null, 85, 60, 7, ['it']],
  ['col_and_med', 'Andijon Abu Ali ibn Sino nomidagi jamoat salomatligi texnikumi', 'college', 'Andijon', null, 90, 64, 6, ['med']],
  ['col_fer_poly', "Farg'ona politexnika texnikumi", 'college', "Farg'ona", null, 78, 58, 6, ['eng']],
  ['col_bux_tour', 'Buxoro turizm va madaniy meros texnikumi', 'college', 'Buxoro', null, 80, 58, 6, ['tour']],
  ['col_nuk_ped', 'Nukus pedagogika kolleji', 'college', 'Nukus', null, 75, 55, 5, ['edu']],
  ['col_nuk_law', 'Qoraqalpog\'iston Respublikasi yuridik texnikumi', 'college', 'Nukus', 'nukus.huquqshunos.uz', 92, 65, 8, ['law']],
];

export const UNIS = RAW.map(([id, name, type, city, domain, grant, contract, tuition, dirs]) => ({
  id, name, type, city, domain, grant, contract, tuition, dirs,
  logo: domain ? 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=128' : null,
  site: domain ? 'https://' + domain : null,
}));

export const CITIES = [...new Set(UNIS.map((u) => u.city))].sort();