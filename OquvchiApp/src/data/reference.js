// Formulas stored as readable math text (works fully offline, no WebView needed).
// f = formula, n = name { uz, ru }

export const SUBJECTS = [
  { id: 'math', uz: 'Matematika', ru: 'Математика' },
  { id: 'geo', uz: 'Geometriya', ru: 'Геометрия' },
  { id: 'phys', uz: 'Fizika', ru: 'Физика' },
  { id: 'chem', uz: 'Kimyo', ru: 'Химия' },
  { id: 'hist', uz: 'Tarix', ru: 'История' },
  { id: 'bio', uz: 'Biologiya', ru: 'Биология' },
  { id: 'inf', uz: 'Informatika', ru: 'Информатика' },
];

export const FORMULAS = {
  math: [
    // 1. Qisqa ko'paytirish va darajalar
    { n: { uz: 'Kvadratlar ayirmasi', ru: 'Разность квадратов' }, f: 'a² − b² = (a − b)(a + b)' },
    { n: { uz: 'Yig\'indining kvadrati', ru: 'Квадрат суммы' }, f: '(a + b)² = a² + 2ab + b²' },
    { n: { uz: 'Ayirmaning kvadrati', ru: 'Квадрат разности' }, f: '(a − b)² = a² − 2ab + b²' },
    { n: { uz: 'Yig\'indining kubi', ru: 'Куб суммы' }, f: '(a + b)³ = a³ + 3a²b + 3ab² + b³' },
    { n: { uz: 'Ayirmaning kubi', ru: 'Куб разности' }, f: '(a − b)³ = a³ − 3a²b + 3ab² − b³' },
    { n: { uz: 'Kublar yig\'indisi', ru: 'Сумма кубов' }, f: 'a³ + b³ = (a + b)(a² − ab + b²)' },
    { n: { uz: 'Kublar ayirmasi', ru: 'Разность кубов' }, f: 'a³ − b³ = (a − b)(a² + ab + b²)' },
    { n: { uz: 'Uchhadning kvadrati', ru: 'Квадрат трехчлена' }, f: '(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca' },

    // 2. Daraja va ildizlar
    { n: { uz: 'Darajalar ko\'paytmasi', ru: 'Свойства степеней: умножение' }, f: 'aᵐ · aⁿ = aᵐ⁺ⁿ' },
    { n: { uz: 'Darajalar bo\'linmasi', ru: 'Свойства степеней: деление' }, f: 'aᵐ / aⁿ = aᵐ⁻ⁿ' },
    { n: { uz: 'Darajani darajaga ko\'tarish', ru: 'Степень степени' }, f: '(aᵐ)ⁿ = aᵐⁿ' },
    { n: { uz: 'Ko\'paytmaning darajasi', ru: 'Степень произведения' }, f: '(a · b)ⁿ = aⁿ · bⁿ' },
    { n: { uz: 'Manfiy ko\'rsatkichli daraja', ru: 'Отрицательный показатель' }, f: 'a⁻ⁿ = 1 / aⁿ' },
    { n: { uz: 'Kasr ko\'rsatkichli daraja', ru: 'Дробный показатель' }, f: 'aᵐ/ⁿ = ⁿ√aᵐ' },
    { n: { uz: 'Ko\'paytmaning ildizi', ru: 'Корень из произведения' }, f: 'ⁿ√(a · b) = ⁿ√a · ⁿ√b' },
    { n: { uz: 'Bo\'linmaning ildizi', ru: 'Корень из частного' }, f: 'ⁿ√(a / b) = ⁿ√a / ⁿ√b' },
    { n: { uz: 'Ildizdan ildiz chiqarish', ru: 'Корень из корня' }, f: 'ᵐ√(ⁿ√a) = ᵐⁿ√a' },

    // 3. Tenglamalar va kvadrat uchhad
    { n: { uz: 'Kvadrat tenglama ildizlari', ru: 'Корни квадратного уравнения' }, f: 'x = (−b ± √D) / 2a, D = b² − 4ac' },
    { n: { uz: 'Juft koeffitsientli diskriminant', ru: 'Дискриминант D₁ (b = 2k)' }, f: 'x = (−k ± √D₁) / a, D₁ = k² − ac' },
    { n: { uz: 'Viyet teoremasi', ru: 'Теорема Виета' }, f: 'x₁ + x₂ = −b/a, x₁ · x₂ = c/a' },
    { n: { uz: 'Kvadrat uchhadni ko\'paytuvchilarga ajratish', ru: 'Разложение квадратного трехчлена' }, f: 'ax² + bx + c = a(x − x₁)(x − x₂)' },
    { n: { uz: 'Parabola uchining koordinatalari', ru: 'Вершина параболы' }, f: 'x₀ = −b / (2a), y₀ = f(x₀)' },

    // 4. Progressiyalar
    { n: { uz: 'Arifmetik progressiya n-hadi', ru: 'n-й член арифм. прогрессии' }, f: 'aₙ = a₁ + (n − 1)d' },
    { n: { uz: 'Arifmetik progressiya xossasi', ru: 'Свойство арифм. прогрессии' }, f: 'aₙ = (aₙ₋₁ + aₙ₊₁) / 2' },
    { n: { uz: 'Arifmetik progressiya yig\'indisi (1)', ru: 'Сумма арифм. прогрессии (1)' }, f: 'Sₙ = (a₁ + aₙ) · n / 2' },
    { n: { uz: 'Arifmetik progressiya yig\'indisi (2)', ru: 'Сумма арифм. прогрессии (2)' }, f: 'Sₙ = (2a₁ + (n − 1)d) · n / 2' },
    { n: { uz: 'Geometrik progressiya n-hadi', ru: 'n-й член геом. прогрессии' }, f: 'bₙ = b₁ · qⁿ⁻¹' },
    { n: { uz: 'Geometrik progressiya xossasi', ru: 'Свойство геом. прогрессии' }, f: 'bₙ² = bₙ₋₁ · bₙ₊₁' },
    { n: { uz: 'Geometrik progressiya yig\'indisi', ru: 'Сумма геом. прогрессии' }, f: 'Sₙ = b₁(qⁿ − 1) / (q − 1)  (q ≠ 1)' },
    { n: { uz: 'Cheksiz kamayuvchi GP yig\'indisi', ru: 'Сумма бесконечно убывающей ГП' }, f: 'S = b₁ / (1 − q)  (|q| < 1)' },

    // 5. Logarifmlar
    { n: { uz: 'Asosiy logarifmik ayniyat', ru: 'Основное лог. тождество' }, f: 'a^(logₐb) = b' },
    { n: { uz: 'Ko\'paytmaning logarifmi', ru: 'Логарифм произведения' }, f: 'logₐ(xy) = logₐx + logₐy' },
    { n: { uz: 'Bo\'linmaning logarifmi', ru: 'Логарифм частного' }, f: 'logₐ(x/y) = logₐx − logₐy' },
    { n: { uz: 'Darajaning logarifmi', ru: 'Степень под логарифмом' }, f: 'logₐ(xⁿ) = n · logₐx' },
    { n: { uz: 'Logarifm asosining darajasi', ru: 'Степень основания логарифма' }, f: 'log_(aⁿ) x = (1/n) · logₐx' },
    { n: { uz: 'Yangi asosga o\'tish', ru: 'Переход к новому основанию' }, f: 'logₐb = log_c b / log_c a' },
    { n: { uz: 'Teskari logarifm', ru: 'Инверсия основания' }, f: 'logₐb = 1 / log_b a' },

    // 6. Trigonometriya
    { n: { uz: 'Asosiy trigonometrik ayniyat', ru: 'Основное тригонометрическое тождество' }, f: 'sin²α + cos²α = 1' },
    { n: { uz: 'Tangens', ru: 'Тангенс' }, f: 'tg α = sin α / cos α' },
    { n: { uz: 'Kotangens', ru: 'Котангенс' }, f: 'ctg α = cos α / sin α' },
    { n: { uz: 'Tangens va kotangens ko\'paytmasi', ru: 'Произведение тангенса и котангенса' }, f: 'tg α · ctg α = 1' },
    { n: { uz: 'Tangens va kosinus bog\'liqligi', ru: 'Связь tg и cos' }, f: '1 + tg²α = 1 / cos²α' },
    { n: { uz: 'Kotangens va sinus bog\'liqligi', ru: 'Связь ctg и sin' }, f: '1 + ctg²α = 1 / sin²α' },
    { n: { uz: 'Yig\'indining sinusi', ru: 'Синус суммы' }, f: 'sin(α + β) = sin α cos β + cos α sin β' },
    { n: { uz: 'Ayirmaning sinusi', ru: 'Синус разности' }, f: 'sin(α − β) = sin α cos β − cos α sin β' },
    { n: { uz: 'Yig\'indining kosinusi', ru: 'Косинус суммы' }, f: 'cos(α + β) = cos α cos β − sin α sin β' },
    { n: { uz: 'Ayirmaning kosinusi', ru: 'Косинус разности' }, f: 'cos(α − β) = cos α cos β + sin α sin β' },
    { n: { uz: 'Yig\'indining tangensi', ru: 'Тангенс суммы' }, f: 'tg(α + β) = (tg α + tg β) / (1 − tg α tg β)' },
    { n: { uz: 'Qo\'sh burchak sinusi', ru: 'Синус двойного угла' }, f: 'sin 2α = 2 sin α cos α' },
    { n: { uz: 'Qo\'sh burchak kosinusi', ru: 'Косинус двойного угла' }, f: 'cos 2α = cos²α − sin²α' },
    { n: { uz: 'Qo\'sh burchak tangensi', ru: 'Тангенс двойного угла' }, f: 'tg 2α = (2 tg α) / (1 − tg²α)' },
    { n: { uz: 'Sinus darajasini pasaytirish', ru: 'Понижение степени sin²α' }, f: 'sin²α = (1 − cos 2α) / 2' },
    { n: { uz: 'Kosinus darajasini pasaytirish', ru: 'Понижение степени cos²α' }, f: 'cos²α = (1 + cos 2α) / 2' },
    { n: { uz: 'Sinuslar yig\'indisi', ru: 'Сумма синусов' }, f: 'sin α + sin β = 2 sin((α + β)/2) cos((α − β)/2)' },
    { n: { uz: 'Sinuslar ayirmasi', ru: 'Разность синусов' }, f: 'sin α − sin β = 2 sin((α − β)/2) cos((α + β)/2)' },
    { n: { uz: 'Kosinuslar yig\'indisi', ru: 'Сумма косинусов' }, f: 'cos α + cos β = 2 cos((α + β)/2) cos((α − β)/2)' },
    { n: { uz: 'Kosinuslar ayirmasi', ru: 'Разность косинусов' }, f: 'cos α − cos β = −2 sin((α + β)/2) sin((α − β)/2)' },
    { n: { uz: 'sin x = a tenglamaning yechimi', ru: 'Уравнение sin x = a' }, f: 'x = (−1)ᵏ arcsin a + πk, k ∈ ℤ' },
    { n: { uz: 'cos x = a tenglamaning yechimi', ru: 'Уравнение cos x = a' }, f: 'x = ±arccos a + 2πk, k ∈ ℤ' },
    { n: { uz: 'tg x = a tenglamaning yechimi', ru: 'Уравнение tg x = a' }, f: 'x = arctg a + πk, k ∈ ℤ' },

    // 7. Hosilalar va integrallar
    { n: { uz: 'O\'zgarmas funksiya hosilasi', ru: 'Производная константы' }, f: '(C)′ = 0' },
    { n: { uz: 'Darajali funksiya hosilasi', ru: 'Производная степени' }, f: '(xⁿ)′ = n · xⁿ⁻¹' },
    { n: { uz: 'Ko\'rsatkichli funksiya hosilasi', ru: 'Производная aˣ' }, f: '(aˣ)′ = aˣ ln a' },
    { n: { uz: 'Eksponenta hosilasi', ru: 'Производная eˣ' }, f: '(eˣ)′ = eˣ' },
    { n: { uz: 'Logarifmik funksiya hosilasi', ru: 'Производная ln x' }, f: '(ln x)′ = 1 / x' },
    { n: { uz: 'Sinus hosilasi', ru: 'Производная sin x' }, f: '(sin x)′ = cos x' },
    { n: { uz: 'Kosinus hosilasi', ru: 'Производная cos x' }, f: '(cos x)′ = −sin x' },
    { n: { uz: 'Tangens hosilasi', ru: 'Производная tg x' }, f: '(tg x)′ = 1 / cos²x' },
    { n: { uz: 'Yig\'indining hosilasi', ru: 'Производная суммы' }, f: '(u + v)′ = u′ + v′' },
    { n: { uz: 'Ko\'paytmaning hosilasi', ru: 'Производная произведения' }, f: '(uv)′ = u′v + uv′' },
    { n: { uz: 'Bo\'linmaning hosilasi', ru: 'Производная частного' }, f: '(u/v)′ = (u′v − uv′) / v²' },
    { n: { uz: 'Urinma tenglamasi', ru: 'Уравнение касательной' }, f: 'y = f(x₀) + f′(x₀)(x − x₀)' },
    { n: { uz: 'Darajali funksiyaning boshlang\'ich funksiyasi', ru: 'Первообразная степени' }, f: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C  (n ≠ −1)' },
    { n: { uz: '1/x ning boshlang\'ich funksiyasi', ru: 'Первообразная 1/x' }, f: '∫(1/x) dx = ln|x| + C' },
    { n: { uz: 'Eksponentaning boshlang\'ich funksiyasi', ru: 'Первообразная eˣ' }, f: '∫eˣ dx = eˣ + C' },
    { n: { uz: 'Sinusning boshlang\'ich funksiyasi', ru: 'Первообразная sin x' }, f: '∫sin x dx = −cos x + C' },
    { n: { uz: 'Kosinusning boshlang\'ich funksiyasi', ru: 'Первообразная cos x' }, f: '∫cos x dx = sin x + C' },
    { n: { uz: 'Nyuton-Leybnits formulasi', ru: 'Формула Ньютона-Лейбница' }, f: '∫ₐᵇ f(x) dx = F(b) − F(a)' },

    // 8. Kombinatorika va ehtimollar nazariyasi
    { n: { uz: 'O\'rin almashtirishlar', ru: 'Перестановки' }, f: 'Pₙ = n!' },
    { n: { uz: 'O\'rinlashtirishlar', ru: 'Размещения' }, f: 'Aₙᵏ = n! / (n − k)!' },
    { n: { uz: 'Guruhlashlar (Kombinatsiyalar)', ru: 'Сочетания' }, f: 'Cₙᵏ = n! / (k!(n − k)!)' },
    { n: { uz: 'Klassik ehtimollik', ru: 'Классическая вероятность' }, f: 'P(A) = m / n' },
    { n: { uz: 'Qarama-qarshi hodisa ehtimolligi', ru: 'Противоположное событие' }, f: 'P(Ā) = 1 − P(A)' },
    { n: { uz: 'Ehtimolliklarni qo\'shish teoremasi', ru: 'Сложение вероятностей' }, f: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)' },
    { n: { uz: 'Bernulli formulasi', ru: 'Формула Бернулли' }, f: 'Pₙ(k) = Cₙᵏ · pᵏ · qⁿ⁻ᵏ' },

    // 9. Foizlar va moliyaviy matematika
    { n: { uz: 'Sonning foizi', ru: 'Процент числа' }, f: 'p% от N = N · p / 100' },
    { n: { uz: 'Oddiy foizlar', ru: 'Простые проценты' }, f: 'S = S₀(1 + p · n / 100)' },
    { n: { uz: 'Murakkab foizlar', ru: 'Сложные проценты' }, f: 'S = S₀(1 + p / 100)ⁿ' }
  ],
  geo: [
    // 1. Углы, прямые и треугольники
    { n: { uz: 'Pifagor teoremasi', ru: 'Теорема Пифагора' }, f: 'c² = a² + b²' },
    { n: { uz: 'Uchburchak yuzi (asos va balandlik)', ru: 'Площадь треугольника через основание' }, f: 'S = ½ · a · h' },
    { n: { uz: 'Uchburchak yuzi (ikki tomon va burchak)', ru: 'Площадь треугольника по двум сторонам и углу' }, f: 'S = ½ · a · b · sin C' },
    { n: { uz: 'Geron formulasi', ru: 'Формула Герона' }, f: 'S = √(p(p − a)(p − b)(p − c)), p = (a + b + c)/2' },
    { n: { uz: 'Ichki chizilgan aylana radiusi orqali yuz', ru: 'Площадь через радиус вписанной окружности' }, f: 'S = p · r' },
    { n: { uz: 'Tashqi chizilgan aylana radiusi orqali yuz', ru: 'Площадь через радиус описанной окружности' }, f: 'S = (a · b · c) / (4R)' },
    { n: { uz: 'Sinuslar teoremasi', ru: 'Теорема синусов' }, f: 'a / sin A = b / sin B = c / sin C = 2R' },
    { n: { uz: 'Kosinuslar teoremasi', ru: 'Теорема косинусов' }, f: 'c² = a² + b² − 2ab · cos C' },
    { n: { uz: 'Muntazam uchburchak balandligi', ru: 'Высота правильного треугольника' }, f: 'h = (a · √3) / 2' },
    { n: { uz: 'Muntazam uchburchak yuzi', ru: 'Площадь правильного треугольника' }, f: 'S = (a² · √3) / 4' },
    { n: { uz: 'To\'g\'ri burchakli uchburchakning balandligi', ru: 'Высота прямоугольного треугольника из вершины прямого угла' }, f: 'h_c = √(a_c · b_c)' },
    { n: { uz: 'Bissektrisa xossasi', ru: 'Свойство биссектрисы треугольника' }, f: 'a / b = x / y' },

    // 4х угодники и многоугольники
    { n: { uz: 'Kvadrat yuzi', ru: 'Площадь квадрата' }, f: 'S = a²' },
    { n: { uz: 'Kvadrat diagonali', ru: 'Диагональ квадрата' }, f: 'd = a · √2' },
    { n: { uz: 'To\'g\'ri to\'rtburchak yuzi', ru: 'Площадь прямоугольника' }, f: 'S = a · b' },
    { n: { uz: 'Parallelogramm yuzi', ru: 'Площадь параллелограмма' }, f: 'S = a · h' },
    { n: { uz: 'Trapetsiya yuzi', ru: 'Площадь трапеции' }, f: 'S = ((a + b) / 2) · h' },
    { n: { uz: 'Romb yuzi (tomon va balandlik)', ru: 'Площадь ромба (через сторону и высоту)' }, f: 'S = a · h' },
    { n: { uz: 'Romb yuzi (diagonallar orqali)', ru: 'Площадь ромба через диагонали' }, f: 'S = (d₁ · d₂) / 2' },
    { n: { uz: 'Ixtiyoriy qavariq to\'rtburchak yuzi', ru: 'Площадь произвольного выпуклого четырёхугольника' }, f: 'S = ½ · d₁ · d₂ · sin α' },
    { n: { uz: 'Muntazam ko\'pburchak burchaklar yig\'indisi', ru: 'Сумма углов многоугольника' }, f: 'Σ = (n − 2) · 180°' },
    { n: { uz: 'Muntazam ko\'pburchak diagonallar soni', ru: 'Количество диагоналей многоугольника' }, f: 'N = n(n − 3) / 2' },
    { n: { uz: 'Muntazam ko\'pburchak yuzi', ru: 'Площадь правильного многоугольника' }, f: 'S = p · r' },

    // Окружность и круг
    { n: { uz: 'Doira yuzi', ru: 'Площадь круга' }, f: 'S = πR²' },
    { n: { uz: 'Aylana uzunligi', ru: 'Длина окружности' }, f: 'L = 2πR' },
    { n: { uz: 'Sektor yuzi', ru: 'Площадь секторов круга' }, f: 'S = (πR² · α) / 360°' },
    { n: { uz: 'Yoy uzunligi', ru: 'Длина дуги окружности' }, f: 'L = (πR · α) / 180°' },
    { n: { uz: 'Ichki chizilgan burchak', ru: 'Вписанный угол' }, f: 'α = ½ · ∪AB' },
    { n: { uz: 'Markaziy burchak', ru: 'Центральный угол' }, f: 'α = ∪AB' },
    { n: { uz: 'Uchrashuvchi vatarlar xossasi', ru: 'Свойство пересекающихся хорд' }, f: 'a · b = c · d' },

    // Стереометрия (объёмы и поверхности)
    { n: { uz: 'Prizma hajmi', ru: 'Объём призмы' }, f: 'V = S_asos · h' },
    { n: { uz: 'Prizma to\'la sirti', ru: 'Площадь полной поверхности призмы' }, f: 'S_full = S_lat + 2 · S_asos' },
    { n: { uz: 'Piramida hajmi', ru: 'Объём пирамиды' }, f: 'V = ⅓ · S_asos · h' },
    { n: { uz: 'Muntazam piramida yon sirti', ru: 'Площадь боковой поверхности правильной пирамиды' }, f: 'S_lat = ½ · P_asos · l' },
    { n: { uz: 'Kubsimon jism hajmi', ru: 'Объём куба' }, f: 'V = a³' },
    { n: { uz: 'Kub sirti', ru: 'Площадь поверхности куба' }, f: 'S = 6a²' },
    { n: { uz: 'Parallelepiped hajmi', ru: 'Объём прямоугольного параллелепипеда' }, f: 'V = a · b · c' },
    { n: { uz: 'Silindr hajmi', ru: 'Объём цилиндра' }, f: 'V = πR²h' },
    { n: { uz: 'Silindr yon sirti', ru: 'Площадь боковой поверхности цилиндра' }, f: 'S_lat = 2πRh' },
    { n: { uz: 'Konus hajmi', ru: 'Объём конуса' }, f: 'V = ⅓ · πR²h' },
    { n: { uz: 'Konus yon sirti', ru: 'Площадь боковой поверхности конуса' }, f: 'S_lat = πRl' },
    { n: { uz: 'Kerosin/kesik konus hajmi', ru: 'Объём усечённого конуса' }, f: 'V = ⅓ · πh · (R² + Rr + r²)' },
    { n: { uz: 'Shar hajmi', ru: 'Объём шара' }, f: 'V = 4/3 · πR³' },
    { n: { uz: 'Shar sirti (Sfera)', ru: 'Площадь сферы' }, f: 'S = 4πR²' },
    { n: { uz: 'Sfera sektori hajmi', ru: 'Объём шарового сегмента' }, f: 'V = πh²(3R − h) / 3' },

    // Векторы и аналитическая геометрия
    { n: { uz: 'Ikki nuqta orasidagi masofa', ru: 'Расстояние между точками' }, f: 'd = √((x₂ − x₁)² + (y₂ − y₁)²)' },
    { n: { uz: 'Kesma o\'rtasi koordinatalari', ru: 'Координаты середины отрезка' }, f: 'x = (x₁ + x₂)/2, y = (y₁ + y₂)/2' },
    { n: { uz: 'Vektor uzunligi', ru: 'Длина вектора' }, f: '|a| = √(x² + y² + z²)' },
    { n: { uz: 'Vektorlar scalar ko\'paytmasi', ru: 'Скалярное произведение векторов' }, f: '(a · b) = x₁x₂ + y₁y₂ + z₁z₂ = |a||b|cos α' },
    { n: { uz: 'Vektorlar perpendikulyarlik sharti', ru: 'Условие перпендикулярности векторов' }, f: 'x₁x₂ + y₁y₂ + z₁z₂ = 0' },
    { n: { uz: 'Vektorlar parallellik sharti', ru: 'Условие параллельности векторов' }, f: 'x₁/x₂ = y₁/y₂ = z₁/z₂' },
    { n: { uz: 'Tekislik tenglamasi', ru: 'Общее уравнение плоскости' }, f: 'Ax + By + Cz + D = 0' }
  ],
  phys: [
    // 1. Механика ва кинематиka (Механика и кинематика)
    { n: { uz: 'Tezlik', ru: 'Скорость' }, f: 'v = s / t' },
    { n: { uz: 'O\'rtacha tezlik', ru: 'Средняя скорость' }, f: 'v_avg = s_total / t_total' },
    { n: { uz: 'Tekis tezlanuvchan harakat tezligi', ru: 'Скорость при равноускоренном движении' }, f: 'v = v₀ + at' },
    { n: { uz: 'Tekis tezlanuvchan harakat yo\'li', ru: 'Путь при равноускоренном движении' }, f: 's = v₀t + at² / 2' },
    { n: { uz: 'Tezlanishsiz o\'tish formulasi (Torricelli)', ru: 'Формула Торричелли (без времени)' }, f: 'v² − v₀² = 2as' },
    { n: { uz: 'Erkin tushish tezligi', ru: 'Скорость при свободном падении' }, f: 'v = gt' },
    { n: { uz: 'Erkin tushish balandligi', ru: 'Высота свободного падения' }, f: 'h = gt² / 2' },
    { n: { uz: 'Burchak ostida otilgan jism uchrashish masofasi (Uzoqlik)', ru: 'Дальность полёта тела под углом к горизонту' }, f: 'L = (v₀² · sin 2α) / g' },
    { n: { uz: 'Aylana bo\'ylab chiziqli tezlik', ru: 'Линейная скорость при вращении' }, f: 'v = ω · R' },
    { n: { uz: 'Markazga intilma tezlanish', ru: 'Центростремительное ускорение' }, f: 'a_n = v² / R = ω² · R' },
    { n: { uz: 'Aylanish davri va chastota', ru: 'Период и частота вращения' }, f: 'T = 1 / ν (или T = 2π / ω)' },

    // 2. Dinamika va saqlanish qonunlari (Динамика и законы сохранения)
    { n: { uz: 'Nyutonning 2-qonuni', ru: 'Второй закон Ньютона' }, f: 'F = m · a' },
    { n: { uz: 'Og\'irlik kuchi', ru: 'Сила тяжести' }, f: 'F = m · g, g ≈ 9.8 м/с²' },
    { n: { uz: 'Butun olam tortishish qonuni', ru: 'Закон всемирного тяготения' }, f: 'F = G · (m₁m₂) / r²' },
    { n: { uz: 'Ishqalanish kuchi', ru: 'Сила трения' }, f: 'F = μ · N' },
    { n: { uz: 'Guk qonuni', ru: 'Закон Гука' }, f: 'F = k · Δx' },
    { n: { uz: 'Butun olam tortishish kuchi bo\'yicha birinchi kosmik tezlik', ru: 'Первая космическая скорость' }, f: 'v₁ = √(G · M / R)' },
    { n: { uz: 'Impuls (Harakat miqdori)', ru: 'Импульс тела' }, f: 'p = m · v' },
    { n: { uz: 'Impuls o\'zgarishi (Kuch impulsi)', ru: 'Импульс силы' }, f: 'F · Δt = Δp' },
    { n: { uz: 'Mexanik ish', ru: 'Механическая работа' }, f: 'A = F · s · cos α' },
    { n: { uz: 'Quvvat', ru: 'Мощность' }, f: 'P = A / t (или P = F · v)' },
    { n: { uz: 'Kinetik energiya', ru: 'Кинетическая энергия' }, f: 'Eₖ = mv² / 2' },
    { n: { uz: 'Potensial energiya (og\'irlik)', ru: 'Потенциальная энергия в поле тяжести' }, f: 'Eₚ = m · g · h' },
    { n: { uz: 'Deformatsiyalangan pruzina potensial energiyasi', ru: 'Потенциальная энергия упругой деформации' }, f: 'Eₚ = k · (Δx)² / 2' },
    { n: { uz: 'Mexanik energiyaning saqlanish qonuni', ru: 'Закон сохранения механической энергии' }, f: 'Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂' },

    // 3. Statika, gidrostatika va aerostatika (Статика и гидростатика)
    { n: { uz: 'Bosim', ru: 'Давление' }, f: 'p = F / S' },
    { n: { uz: 'Suyuqlik ustunining gidrostatik bosimi', ru: 'Гидростатическое давление' }, f: 'p = ρ · g · h' },
    { n: { uz: 'Arximed kuchi', ru: 'Сила Архимеда' }, f: 'F_A = ρ_suyuqlik · g · V_botgan' },
    { n: { uz: 'Zichlik', ru: 'Плотность' }, f: 'ρ = m / V' },
    { n: { uz: 'Moment qoidasi (Muvozanat sharti)', ru: 'Правило моментов' }, f: 'F₁ · l₁ = F₂ · l₂' },
    { n: { uz: 'Paskal qonuni / Gidravlik press', ru: 'Гидравлический пресс' }, f: 'F₁ / S₁ = F₂ / S₂' },

    // 4. Termodinamika va molekulyar fizika (Термодинамика и МКТ)
    { n: { uz: 'Konsentratsiya', ru: 'Концентрация молекул' }, f: 'n = N / V' },
    { n: { uz: 'Modda miqdori', ru: 'Количество вещества' }, f: 'ν = N / N_A = m / M' },
    { n: { uz: 'Ideal gaz bosimi (MKT asosiy tenglamasi)', ru: 'Основное уравнение МКТ идеального газа' }, f: 'p = ⅓ · m₀ · n · v² (или p = n · k · T)' },
    { n: { uz: 'Mendeleyev-Klapeyron tenglamasi', ru: 'Уравнение Менделеева-Клапейрона' }, f: 'p · V = (m / M) · R · T' },
    { n: { uz: 'Klapeyron qonuni (Boyle-Mariotte, Gay-Lussac, Charles umumiy holat)', ru: 'Объединенный газовый закон' }, f: '(p₁V₁) / T₁ = (p₂V₂) / T₂' },
    { n: { uz: 'Absolyut temperatura', ru: 'Абсолютная температура' }, f: 'T = t°C + 273' },
    { n: { uz: 'Bir atomli ideal gaz ichki energiyasi', ru: 'Внутренняя энергия одноатомного газа' }, f: 'U = (3 / 2) · (m / M) · R · T' },
    { n: { uz: 'Issiqlik miqdori (qizish/sovish)', ru: 'Количество теплоты при нагревании/охлаждении' }, f: 'Q = c · m · Δt' },
    { n: { uz: 'Solishtirma yonish issiqligi', ru: 'Количество теплоты при сгорании топлива' }, f: 'Q = q · m' },
    { n: { uz: 'Solishtirma erish issiqligi', ru: 'Количество теплоты при плавлении' }, f: 'Q = λ · m' },
    { n: { uz: 'Bug\'lanish va kondensatsiyalanish issiqligi', ru: 'Количество теплоты при парообразовании' }, f: 'Q = L · m' },
    { n: { uz: 'Termodinamikaning 1-qonuni', ru: 'Первый закон термодинамиki' }, f: 'Q = ΔU + A' },
    { n: { uz: 'Gazning kengayish ishi', ru: 'Работа газа при изобарном процессе' }, f: 'A = p · ΔV' },
    { n: { uz: 'Issiqlik dvigatelining foydali ish koeffitsiyenti (FIK)', ru: 'КПД теплового двигателя' }, f: 'η = ((Q₁ − Q₂) / Q₁) · 100% = ((T₁ − T₂) / T₁) · 100%' },

    // 5. Elektrodinamika (Электродинамика)
    { n: { uz: 'Kulon qonuni', ru: 'Закон Кулона' }, f: 'F = k · (|q₁ · q₂|) / r²' },
    { n: { uz: 'Elektr maydon kuchlanganligi', ru: 'Напряженность электрического поля' }, f: 'E = F / q (punkt uchun: E = k · |q| / r²)' },
    { n: { uz: 'Elektr maydon potensiali', ru: 'Потенциал электростатического поля' }, f: 'φ = W / q' },
    { n: { uz: 'Potensiallar farqi (Kuchlanish)', ru: 'Напряжение между точками' }, f: 'U = A / q' },
    { n: { uz: 'Elektr sig\'imi (Kondensator)', ru: 'Электроемкость конденсатора' }, f: 'C = q / U' },
    { n: { uz: 'Yassi kondensator sig\'imi', ru: 'Емкость плоского конденсатора' }, f: 'C = (ε₀ · ε · S) / d' },
    { n: { uz: 'Kondensator energiyasi', ru: 'Энергия заряженного конденсатора' }, f: 'W = CU² / 2 = q² / (2C) = qU / 2' },
    { n: { uz: 'Tok kuchi', ru: 'Сила тока' }, f: 'I = q / t (shuningdek: I = e · n · S · v)' },
    { n: { uz: 'Om qonuni (zanjir qismi)', ru: 'Закон Ома для участка цепи' }, f: 'I = U / R' },
    { n: { uz: 'O\'tkazgich qarshiligi', ru: 'Сопротивление проводника' }, f: 'R = ρ_qarshilik · (l / S)' },
    { n: { uz: 'Qarshilikning temperaturaga bog\'liqligi', ru: 'Зависимость сопротивления от температуры' }, f: 'R = R₀ · (1 + α · Δt)' },
    { n: { uz: 'Ketma-ket ulanish', ru: 'Последовательное соединение проводников' }, f: 'I = I₁ = I₂, U = U₁ + U₂, R = R₁ + R₂' },
    { n: { uz: 'Parallel ulanish', ru: 'Параллельное соединение проводников' }, f: 'U = U₁ = U₂, I = I₁ + I₂, 1/R = 1/R₁ + 1/R₂' },
    { n: { uz: 'Om qonuni (to\'liq zanjir)', ru: 'Закон Ома для полной цепи' }, f: 'I = ε / (R + r)' },
    { n: { uz: 'Joul-Lens qonuni', ru: 'Закон Джоуля-Ленца' }, f: 'Q = I² · R · t' },
    { n: { uz: 'Elektr toki quvvati', ru: 'Электрическая мощность' }, f: 'P = U · I' },
    { n: { uz: 'Faradeyning elektroliz qonuni', ru: 'Первый закон Фарадея для электролиза' }, f: 'm = k · I · t' },
    { n: { uz: 'Amper kuchi', ru: 'Сила Ампера' }, f: 'F_A = I · B · l · sin α' },
    { n: { uz: 'Lorens kuchi', ru: 'Сила Лоренца' }, f: 'F_L = q · v · B · sin α' },
    { n: { uz: 'Magnit oqimi', ru: 'Магнитный поток' }, f: 'Φ = B · S · cos α' },
    { n: { uz: 'Elektromagnit induksiya qonuni (Faradey)', ru: 'Закон электромагнитной индукции' }, f: 'εᵢ = −(ΔΦ / Δt)' },
    { n: { uz: 'To\'g\'ri o\'tkazgichda induksion y.u.k. / Harakatlanuvchi o\'tkazgich u.k.', ru: 'ЭДС индукции в движущемся проводнике' }, f: 'ε = B · l · v · sin α' },
    { n: { uz: 'O\'zi induksion y.u.k.', ru: 'ЭДС самоиндукции' }, f: 'ε_s = −L · (ΔI / Δt)' },
    { n: { uz: 'G‘altakning magnit maydoni energiyasi', ru: 'Энергия магнитного поля катушки' }, f: 'W = L · I² / 2' },

    // 6. Tebranishlar va to'lqinlar (Колебания и волны)
    { n: { uz: 'Matematik mayatnik davri', ru: 'Период математического маятника' }, f: 'T = 2π · √(l / g)' },
    { n: { uz: 'Prujinali mayatnik davri', ru: 'Период пружинного маятника' }, f: 'T = 2π · √(m / k)' },
    { n: { uz: 'Tomson formulasi (Tebranish konturi)', ru: 'Формула Томсона' }, f: 'T = 2π · √(L · C)' },
    { n: { uz: 'To\'lqin tezligi', ru: 'Скорость волны' }, f: 'v = λ · ν = λ / T' },

    // 7. Oптика (Оптика)
    { n: { uz: 'Yorug\'likning sinish qonuni ( Snellius )', ru: 'Закон Снеллиуса (преломления света)' }, f: '(sin α) / (sin β) = v₁ / v₂ = n₂₁ = n₂ / n₁' },
    { n: { uz: 'Mutlaq sinish ko\'rsatkichi', ru: 'Абсолютный показатель преломления' }, f: 'n = c / v' },
    { n: { uz: 'Linza formulasi', ru: 'Формула тонкой линзы' }, f: '1 / F = 1 / d + 1 / f' },
    { n: { uz: 'Linza optik kuchi', ru: 'Оптическая сила линзы' }, f: 'D = 1 / F' },
    { n: { uz: 'Diffraksiya panjarasi sharti', ru: 'Формула дифракционной решетки' }, f: 'd · sin α = k · λ' },

    // 8. Kvant fizikasi va atom fizikasi (Квантовая и ядерная физика)
    { n: { uz: 'Foton energiyasi', ru: 'Энергия фотона' }, f: 'E = h · ν = (h · c) / λ' },
    { n: { uz: 'Eynshteynning fotoeffekt tenglamasi', ru: 'Уравнение Эйнштейна для фотоэффекта' }, f: 'h · ν = A_chiqish + (mv² / 2)' },
    { n: { uz: 'Qizil chegara chastotasi / to\'lqin uzunligi', ru: 'Красная граница фотоэффекта' }, f: 'h · ν_min = A_chiqish (yoki λ_max = (h · c) / A_chiqish)' },
    { n: { uz: 'Foton impulsi', ru: 'Импульс фотона' }, f: 'p = h / λ = E / c' },
    { n: { uz: 'Eynshteynning massa va energiya bog\'liqligi', ru: 'Связь массы и энергии' }, f: 'E = m · c²' },
    { n: { uz: 'Radioaktiv yemirilish qonuni', ru: 'Закон радиоактивного распада' }, f: 'N = N₀ · 2^(−t / T)' }
  ],
  chem: [
    // 1. Стехиометрия, молярные расчеты и газлар (Стехиометрия и газы)
    { n: { uz: 'Modda miqdori (massa orqali)', ru: 'Количество вещества через массу' }, f: 'n = m / M' },
    { n: { uz: 'Gazning molyar hajmi (n.sh.)', ru: 'Молярный объём газа (н.у.)' }, f: 'V = n · Vₘ  (Vₘ = 22,4 л/моль)' },
    { n: { uz: 'Avogadro soni orqali zarrachalar soni', ru: 'Число структурных единиц (Авогадро)' }, f: 'N = n · Nₐ,  Nₐ = 6,02 · 10²³ моль⁻¹' },
    { n: { uz: 'Zichlik bo\'yicha nisbiy zichlik', ru: 'Относительная плотность газа' }, f: 'D₁₂ = M₁ / M₂' },
    { n: { uz: 'Ideal gaz holat tenglamasi (Clapeyron-Mendeleev)', ru: 'Уравнение Менделеева-Клапейрона' }, f: 'p · V = n · R · T' },
    { n: { uz: 'Gaz aralashmasining o\'rtacha molyar massasi', ru: 'Средняя молярная масса смеси газов' }, f: 'M_avg = M₁φ₁ + M₂φ₂ (yoki M_avg = m_total / n_total)' },

    // 2. Растворы ва концентрациялар (Растворы)
    { n: { uz: 'Erigan modda massa ulushi', ru: 'Массовая доля растворенного вещества' }, f: 'ω = (m(в-ва) / m(р-ра)) · 100%' },
    { n: { uz: 'Molyar konsentratsiya', ru: 'Молярная концентрация' }, f: 'C = n / V' },
    { n: { uz: 'Molyal konsentratsiya', ru: 'Моляльная концентрация' }, f: 'Cₘ = n / m(растворителя в кг)' },
    { n: { uz: 'Erishish / Eritma tayyorlash qoidasi (Xoch qoidasi / Aralashma)', ru: 'Правило креста (смешение растворов)' }, f: 'm₁ / m₂ = (ω₂ − ω_target) / (ω_target − ω₁)' },
    { n: { uz: 'Eruvchanlik koeffitsiyenti', ru: 'Коэффициент растворимости' }, f: 'S = (m(в-ва) / m(растворителя)) · 1000 г' },

    // 3. Термохимия ва химиik kinetika (Термохимия и кинетика)
    { n: { uz: 'Reaksiya thermal effekti (Entalpiya o\'zgarishi)', ru: 'Тепловой эффект химической реакции' }, f: 'ΔH = ΣH(محصولات / mahsulotlar) − ΣH(реагенты / dastlabki moddalar)' },
    { n: { uz: 'Gess qonuni oqibati', ru: 'Следствие закона Гесса' }, f: 'ΔH_rxn = ΣΔH°_f(prod) − ΣΔH°_f(react)' },
    { n: { uz: 'Reaksiya tezligi', ru: 'Скорость химической реакции' }, f: 'v = ± (ΔC / Δt)' },
    { n: { uz: 'Guldberg-Waage qonuni (Harakat massasi qonuni)', ru: 'Закон действующих масс (кинетика)' }, f: 'v = k · [A]ᵃ · [B]ᵇ' },
    { n: { uz: 'Van \'t Hoff qoidasi (Temperatura koeffitsiyenti)', ru: 'Правило Вант-Гоффа' }, f: 'v₂ = v₁ · γ^((T₂ − T₁)/10)' },
    { n: { uz: 'Kimyoviy muvozanat konstantasi', ru: 'Константа химического равновесия' }, f: 'K_c = ([C]ᶜ · [D]ᵈ) / ([A]ᵃ · [B]ْب)' },

    // 4. Elektrolitik dissotsiatsiya, pH va ion muvozanat (Электролиты и pH)
    { n: { uz: 'Ionlanish (dissotsiatsiya) darajasi', ru: 'Степень диссоциации' }, f: 'α = (n_dissociated / n_total) · 100%' },
    { n: { uz: 'Ostwald suyulish qonuni', ru: 'Закон разбавления Оствальда' }, f: 'K_d = (α² · C) / (1 − α)' },
    { n: { uz: 'Suvning ion ko\'paytmasi', ru: 'Ионное произведение воды' }, f: 'K_w = [H⁺] · [OH⁻] = 10⁻¹⁴' },
    { n: { uz: 'Vodorod ko\'rsatkichi (pH)', ru: 'Водородный показатель (pH)' }, f: 'pH = −lg[H⁺]' },
    { n: { uz: 'Gidroksid ko\'rsatkichi (pOH)', ru: 'Гидроксильный показатель (pOH)' }, f: 'pOH = −lg[OH⁻],  pH + pOH = 14' },
    { n: { uz: 'Hidroliz konstantasi', ru: 'Константа гидролиза' }, f: 'K_h = K_w / K_a (yoki K_w / K_b)' },

    // 5. Электрохимия (Электрохимия)
    { n: { uz: 'Faradeyning elektroliz qonuni', ru: 'Закон Фарадея для электролиза' }, f: 'm = (M · I · t) / (n · F),  F = 96500 Кл/моль' },
    { n: { uz: 'Elektrod potensiali (Nernst tenglamasi)', ru: 'Уравнение Нернста для электродного потенциала' }, f: 'E = E° + ((R · T) / (n · F)) · ln([Ox] / [Red])' },

    // 6. Stehiometrik hisob-kitoblar va unum (Выход продукта)
    { n: { uz: 'Reaksiya unumi (amaliy massa nisbati)', ru: 'Практический выход продукта' }, f: 'η = (m_practical / m_theoretical) · 100%' },
    { n: { uz: 'Hajmiy ulush orqali unum', ru: 'Выход продукта через объемы' }, f: 'η = (V_practical / V_theoretical) · 100%' },
    { n: { uz: 'Aralashmadagi qo\'shimcha ulushi (toza modda massasi)', ru: 'Массовая доля чистящего вещества / чистого компонента' }, f: 'm(в-ва) = m(смеси) · (100% − ω_impurity) / 100%' }
  ]
};

export const TERMS = {
  hist: [
    // Древний мир и Средние века в Средней Азии
    { t: { uz: 'Amir Temur', ru: 'Амир Темур' }, d: { uz: 'Temuriylar davlatining asoschisi (1370-1405), poytaxti Samarqand.', ru: 'Основатель государства Тимуридов (1370-1405), столица Самарканд.' } },
    { t: { uz: 'Mirzo Ulug\'bek', ru: 'Мирзо Улугбек' }, d: { uz: 'Temuriy hukmdor va astronom, Samarqand rasadxonasi asoschisi.', ru: 'Правитель-тимурид и астроном, основатель обсерватории в Самарканде.' } },
    { t: { uz: 'Alisher Navoiy', ru: 'Алишер Навои' }, d: { uz: 'Buyuk shoir, mutafakkir va davlat arbobi, o\'zbek adabiyoti asoschisi.', ru: 'Великий поэт, мыслитель и государственный деятель, основоположник узбекской литературы.' } },
    { t: { uz: 'Zahiriddin Muhammad Bobur', ru: 'Захириддин Мухаммад Бабур' }, d: { uz: 'Boburiylar imperiyasi asoschisi, shoir, "Boburnoma" muallifi.', ru: 'Основатель Империи Великих Моголов, поэт, автор «Бабур-наме».' } },
    { t: { uz: 'Abu Ali ibn Sino', ru: 'Абу Али ибн Сино (Авиценна)' }, d: { uz: 'Buyuk alloma, tabib va faylasuf, "Tib qonunlari" muallifi.', ru: 'Великий ученый, врач и философ, автор «Канона врачебной науки».' } },
    { t: { uz: 'Abu Rayhon Beruniy', ru: 'Абу Райхан Беруни' }, d: { uz: 'Qomusiy olim, astronom, matematik va tarixchi.', ru: 'Энциклопедист, астроном, математик и историк.' } },
    { t: { uz: 'Imom al-Buxoriy', ru: 'Имам аль-Бухари' }, d: { uz: 'Buyuk muhaddis, islom olamida eng to\'g\'ri hadislar to\'plami — "Al-Jome\' as-sahih" muallifi.', ru: 'Великий хадисовед, автор авторитетного сборника хадисов «Аль-Джами ас-сахих».' } },
    { t: { uz: 'Buyuk Ipak yo\'li', ru: 'Великий шёлковый путь' }, d: { uz: 'Sharq va G\'arbni bog\'lagan qadimgi savdo yo\'llari tizimi.', ru: 'Система древних торговых путей, соединявших Восток и Запад.' } },
    { t: { uz: 'Somoniylar davlati', ru: 'Государство Саманидов' }, d: { uz: 'IX-X asrlarda Movarounnahrda hukmronlik qilgan markazlashgan davlat, "Ilm-fan uyg\'onish davri".', ru: 'Централизованное государство в Мавераннахре (IX-X вв.), эпоха культурного расцвета.' } },
    { t: { uz: 'Avesto', ru: 'Авеста' }, d: { uz: 'Zardushtiylik dinining muqaddas kitobi, qadimgi ajdodlarimiz yozma yodgorligi.', ru: 'Священная книга зороастризма, древнейший письменный памятник.' } },

    // Новая и новейшая история, государственность
    { t: { uz: 'Jadidchilik', ru: 'Джадидизм' }, d: { uz: 'XIX asr oxiri - XX asr boshida Turkistonda ma\'rifatparvarlik va milliy uyg\'onish harakati.', ru: 'Просветительское и национально-освободительное движение в Туркестане (конец XIX — начало XX в.).' } },
    { t: { uz: 'Xiva xonligi', ru: 'Хивинское ханство' }, d: { uz: 'XVI-XX asr boshlarida Xorazm hududida mavjud bo\'lgan davlat.', ru: 'Государство в Хорезме, существовавшее с XVI по начало XX века.' } },
    { t: { uz: 'Buxoro amirligi', ru: 'Бухарский эмират' }, d: { uz: '1785-1920-yillarda Movarounnahrda mavjud bo\'lgan monarxiya davlati.', ru: 'Монархическое государство в Мавераннахре (1785–1920 гг.).' } },
    { t: { uz: 'Qo\'qon xonligi', ru: 'Кокандское ханство' }, d: { uz: '1709-1876-yillarda Farg\'ona vodiysi va unga tutash hududlarda mavjud bo\'lgan yirik davlat.', ru: 'Крупное государство в Ферганской долине и прилегающих землях (1709–1876 гг.).' } },
    { t: { uz: 'Mustaqillik', ru: 'Независимость' }, d: { uz: 'O\'zbekiston 1991-yil 1-sentabrda o\'z davlat mustaqilligini e\'lon qildi.', ru: 'Узбекистан провозгласил государственную независимость 1 сентября 1991 года.' } },
    { t: { uz: 'Konstitutsiya', ru: 'Конституция' }, d: { uz: 'Davlatning asosiy qonuni; O\'zbekiston Respublikasi Konstitutsiyasi 1992-yil 8-dekabrda qabul qilingan.', ru: 'Основной закон государства; Конституция Узбекистана принята 8 декабря 1992 года.' } }
  ],

  bio: [
    // Цитология и генетика
    { t: { uz: 'Hujayra', ru: 'Клетка' }, d: { uz: 'Barcha tirik organizmlarning tuzilish, funksiya va ko\'payish birligi.', ru: 'Структурная, функциональная единица и единица размножения всех живых организмов.' } },
    { t: { uz: 'Fotosintez', ru: 'Фотосинтез' }, d: { uz: 'Yorug\'lik energiyasi ishtirokida noorganik moddalardan organik moddalar hosil bo\'lish jarayoni.', ru: 'Процесс образования органических веществ из неорганических за счёт энергии света.' } },
    { t: { uz: 'DNK', ru: 'ДНК' }, d: { uz: 'Irsiy axborotni saqlovchi va avloddan-avlodga uzatuvchi ikki zanjirli nuklein kislota.', ru: 'Двухцепочечная нуклеиновая кислота, хранящая и передающая наследственную информацию.' } },
    { t: { uz: 'RNK', ru: 'РНК' }, d: { uz: 'Oqsil sintezida bevosita qatnashuvchi bir zanjirli nuklein kislota turi.', ru: 'Одноцепочечная нуклеиновая кислота, участвующая в синтезе белка.' } },
    { t: { uz: 'Gen', ru: 'Ген' }, d: { uz: 'DNK molekulasining bitta irsiy belgi haqidagi axborotni saqlovchi qismi.', ru: 'Участок молекулы ДНК, определяющий наследственные признаки.' } },
    { t: { uz: 'Xromosoma', ru: 'Хромосома' }, d: { uz: 'Hujayra yadrosida joylashgan, irsiy axborotni tashiydigan tuzilma.', ru: 'Структурный элемент ядра клетки, содержащий ДНК и несущий наследственную информацию.' } },
    { t: { uz: 'Mitoz', ru: 'Митоз' }, d: { uz: 'Eukariot hujayralarning bo\'linish usuli bo\'lib, xromosomalar soni saqlanib qoladi.', ru: 'Непрямое деление соматических клеток с сохранением набора хромосом.' } },
    { t: { uz: 'Meyoz', ru: 'Мейоз' }, d: { uz: 'Jinsiy hujayralar hosil bo\'lishida xromosomalar soni ikki marta kamayadigan bo\'linish turi.', ru: 'Деление клеток, приводящее к уменьшению числа хромосом вдвое (образование гамет).' } },

    // Эволюция и общая биология
    { t: { uz: 'Evolyutsiya', ru: 'Эволюция' }, d: { uz: 'Tirik tabiatning bosqichma-bosqich va qaytarilmas tarixiy taraqqiyot jarayoni.', ru: 'Необратимый процесс исторического развития живой природы.' } },
    { t: { uz: 'Metabolizm (Moddalar almashinuvi)', ru: 'Метаболиizm (Обмен веществ)' }, d: { uz: 'Organizmdagi hayot faoliyatini ta\'minlovchi kimyoviy jarayonlar yig\'indisi (assimilyatsiya va dissimilyatsiya).', ru: 'Совокупность химических реакций, обеспечивающих жизнедеятельность организма.' } },
    { t: { uz: 'Gomeostaz', ru: 'Гомеостаз' }, d: { uz: 'Tirik organizm ichki muhitining barqarorligini saqlash qobiliyati.', ru: 'Способность организма поддерживать постоянство внутренней среды.' } },
    { t: { uz: 'Ekosistema', ru: 'Экосистема' }, d: { uz: 'Tirik organizmlar va ularning yashash muhiti majmui.', ru: 'Сообщество живых организмов и среды их обитания.' } },
    { t: { uz: 'Biosfera', ru: 'Биосфера' }, d: { uz: 'Yerdagi barcha tirik organizmlar yashaydigan va ular ta\'sirida bo\'lgan qobiq.', ru: 'Глобальная оболочка Земли, заселенная живыми организмами.' } },
    { t: { uz: 'Mutatsiya', ru: 'Мутация' }, d: { uz: 'Genetik materialning to\'satdan va turg\'un o\'zgarishi.', ru: 'Внезапное и стойкое изменение генетического материала.' } }
  ],

  inf: [
    // Базовые понятия и архитектура
    { t: { uz: 'Algoritm', ru: 'Алгоритм' }, d: { uz: 'Masalani hal etishga qaratilgan aniq buyruqlar va qadamlar ketma-ketligi.', ru: 'Конечная последовательность точных шагов для решения задачи.' } },
    { t: { uz: 'Bit va Bayt', ru: 'Бит и Байт' }, d: { uz: 'Axborotning eng kichik o\'lchov birligi (1 bayt = 8 bit).', ru: 'Наименьшая единица измерения информации (1 байт = 8 бит).' } },
    { t: { uz: 'Ikkilik sanoq tizimi', ru: 'Двоичная система счисления' }, d: { uz: 'Faqat 0 va 1 raqamlariga asoslangan, kompyuter tushunadigan sanoq tizimi.', ru: 'Система счисления на основе цифр 0 и 1, используемая в компьютерах.' } },
    { t: { uz: 'Operatsion tizim', ru: 'Операционная система' }, d: { uz: 'Kompyuter qurilmalari va dasturlarini boshqaruvchi asosiy tizim (Windows, Linux, macOS, Android).', ru: 'Базовый комплекс программ для управления аппаратным обеспечением (Windows, Linux, iOS и др).' } },
    { t: { uz: 'Protsessor (CPU)', ru: 'Процессор (CPU)' }, d: { uz: 'Kompyuterning barcha hisob-kitoblarini bajaruvchi "miya" qismi.', ru: 'Главный вычислительный элемент компьютера, выполняющий инструкции программ.' } },
    { t: { uz: 'Operativ xotira (RAM)', ru: 'Оперативная память (RAM)' }, d: { uz: 'Kompyuter o\'chganda ma\'lumotlar o\'chib ketadigan tezkor vaqtinchalik xotira.', ru: 'Энергозависимая память для временного хранения обрабатываемых данных.' } },

    // Сети, интернет и безопасность
    { t: { uz: 'IP-manzil', ru: 'IP-адрес' }, d: { uz: 'Kompyuter tarmog\'idagi har bir qurilmaning o\'ziga xos raqamli manzili.', ru: 'Уникальный сетевой адрес узла в компьютерной сети.' } },
    { t: { uz: 'Domen nomi (DNS)', ru: 'Доменное имя (DNS)' }, d: { uz: 'IP-manzillarni tushunarli matnli nomlarga o\'giruvchi tizim (masalan, google.com).', ru: 'Система преобразования IP-адресов в удобочитаемые текстовые имена.' } },
    { t: { uz: 'Ma\'lumotlar bazasi (MB)', ru: 'База данных (БД)' }, d: { uz: 'Maxsus tuzilmaga ega bo\'lgan tartiblangan ma\'lumotlar to\'plami (SQL, NoSQL).', ru: 'Структурированная совокупность данных, хранящихся в электронном виде.' } },
    { t: { uz: 'Kiberxavfsizlik', ru: 'Кибербезопасность' }, d: { uz: 'Tizimlar, tarmoqlar va ma\'lumotlarni raqamli hujumlardan himoya qilish sohasi.', ru: 'Защита систем, сетей и данных от цифровых угроз и кибератак.' } },
    { t: { uz: 'Kompilator va Interpretator', ru: 'Компилятор и Интерпретатор' }, d: { uz: 'Dasturlash tilidagi kodni mashina tiliga o\'giruvchi maxsus tarjimon dasturlar.', ru: 'Программы-переводчики исходного кода программы в машинный код.' } },
    { t: { uz: 'API', ru: 'API (Интерфейс программирования)' }, d: { uz: 'Turli dasturlarning o\'zaro axborot almashishi va ulanishi uchun xizmat qiluvchi qoida.', ru: 'Набор правил для взаимодействия и обмена данными между различными программами.' } }
  ]
};
