// { s: section/subject, t: topic, q: question, o: options, a: index of correct option }
export const SAT_RW = [
  // Advanced Grammar & Conventions of Standard English
  { s: 'rw', t: 'Advanced Grammar', q: 'Despite the committee’s rigorous scrutiny, neither the proposed budget nor the accompanying policy revisions ___ sufficient to mitigate the looming financial deficit.', o: ['is', 'are', 'were', 'have been'], a: 0 },
  { s: 'rw', t: 'Punctuation & Clauses', q: 'The marine biologist spent years studying the elusive giant squid ___ her findings eventually challenged the long-held consensus regarding deep-sea predator behavior.', o: ['and,', ';', '; and', ', and'], a: 3 },
  { s: 'rw', t: 'Syntax and Modifier Placement', q: 'Scanning the horizon with high-powered binoculars, ___', o: ['a sudden flash of light caught the astronomer’s eye.', 'the telescope revealed an unexpected nebula.', 'the astronomer spotted an elusive comet streaking past.', 'several stars twinkled with unusual brilliance.'], a: 2 },
  { s: 'rw', t: 'Subject-Verb Agreement', q: 'A comprehensive collection of rare 17th-century manuscripts, alongside several personal letters written by the author, ___ on display at the national archive.', o: ['is', 'are', 'were', 'have been'], a: 0 },
  { s: 'rw', t: 'Pronoun Antecedent', q: 'Each of the research assistants must submit ___ final laboratory report prior to the department deadline.', o: ['their', 'his or her', 'there', 'its'], a: 1 },

  // Rhetorical Synthesis & Transitions
  { s: 'rw', t: 'Rhetorical Synthesis', q: 'Which choice most effectively combines the sentences to highlight the paradox of the discovery?', o: ['Although the artifact appeared crude, it revolutionized ancient metallurgy.', 'The artifact, which seemed crude at first glance, completely revolutionized ancient metallurgy despite its humble appearance.', 'Appearing crude, the artifact nonetheless revolutionized ancient metallurgy.', 'Because the artifact looked crude, it revolutionized ancient metallurgy unexpectedly.'], a: 2 },
  { s: 'rw', t: 'Transitions', q: 'The quantum computer demonstrated unprecedented processing speeds during initial testing. ___, its requirement for near-absolute-zero cooling limits its immediate practical applicability.', o: ['Furthermore', 'However', 'Consequently', 'In fact'], a: 1 },
  { s: 'rw', t: 'Transitions', q: 'The economic model accounts for global trade fluctuations; ___, it incorporates localized microeconomic indicators to improve forecasting accuracy.', o: ['moreover', 'nevertheless', 'otherwise', 'instead'], a: 0 },

  // Vocabulary in Context
  { s: 'rw', t: 'Vocabulary in Context', q: 'The statesman’s ___ response to the hostile accusations deflected public outrage and restored confidence.', o: ['pernicious', 'phlegmatic', 'recalcitrant', 'truculent'], a: 1 },
  { s: 'rw', t: 'Vocabulary in Context', q: 'Her argument was strengthened by her ___ analysis of the historical data, leaving no room for counter-interpretation.', o: ['fastidious', 'cursory', 'equivocal', 'superficial'], a: 0 },
  { s: 'rw', t: 'Vocabulary in Context', q: 'The director’s artistic style is known for being ___, seamlessly blending classical motifs with futuristic aesthetic elements.', o: ['eclectic', 'dogmatic', 'trite', 'pedantic'], a: 0 },

  // Command of Evidence & Inference
  { s: 'rw', t: 'Command of Evidence', q: 'Which quotation from the text best illustrates the author’s claim regarding bureaucratic inertia?', o: ['"The wheels of administration grind exceedingly slow."', '"Change was met not with hostility, but with a profound, suffocating indifference."', '"Files accumulated in dusty corridors for decades."', '"Every directive was systematically re-filed under review."'], a: 1 },
  { s: 'rw', t: 'Advanced Inference', q: '"While the data initially suggested a correlation, subsequent controls invalidated the hypothesis, rendering the phenomenon an anomaly of instrumentation." The passage implies that:', o: ['the instruments were fundamentally flawed beyond repair.', 'the observed effect was caused by measurement artifact rather than a true biological process.', 'future experiments will confirm the original correlation.', 'control groups are unnecessary in modern analytics.'], a: 1 },
  { s: 'rw', t: 'Central Idea & Detail', q: 'A passage details how urban green spaces lower city temperatures. The main function of paragraph 3 is to:', o: ['propose a budget for urban forestry.', 'explain the physical mechanism of evapotranspiration in trees.', 'criticize city planners for ignoring environmental data.', 'compare tropical forests with temperate urban parks.'], a: 1 },
];

export const SAT_MATH = [
  // Advanced Algebra & Equations
  { s: 'math', t: 'Advanced Algebra', q: 'If 4^(x+1) + 4^x = 320, what is the value of x?', o: ['3', '4', '5', '6'], a: 1 },
  { s: 'math', t: 'Systems of Equations', q: 'If 2x + 3y = 12 and 5x − 2y = 11, what is the value of x + y?', o: ['3', '4', '5', '6'], a: 2 },
  { s: 'math', t: 'Exponents & Logarithms', q: 'If log₃ x + log₉ x + log₂₇ x = 11/2, what is the value of x?', o: ['9', '27', '81', '243'], a: 1 },
  { s: 'math', t: 'Absolute Value', q: 'What is the sum of all solutions to |2x − 7| = 13?', o: ['7', '0', '13', '-3'], a: 0 },

  // Functions & Quadratics
  { s: 'math', t: 'Complex Functions', q: 'If f(x) = x³ − 3x² + 4x − 2 and g(x) = f(x − 1), what is the sum of the coefficients of g(x)?', o: ['0', '1', '2', '4'], a: 0 },
  { s: 'math', t: 'Quadratics & Discriminants', q: 'For what value of k does the quadratic equation 3x² − kx + 12 = 0 have exactly one real solution?', o: ['±6', '±12', '±144', '±24'], a: 1 },
  { s: 'math', t: 'Function Transformations', q: 'The graph of y = g(x) is shifted 3 units left and 2 units up. What is the equation of the transformed function?', o: ['y = g(x − 3) + 2', 'y = g(x + 3) + 2', 'y = g(x + 3) − 2', 'y = g(x − 3) − 2'], a: 1 },

  // Geometry & Trigonometry
  { s: 'math', t: 'Coordinate Geometry', q: 'A circle in the xy-plane has the equation x² + y² − 6x + 8y = 0. What is the length of its diameter?', o: ['5', '8', '10', '20'], a: 2 },
  { s: 'math', t: 'Trigonometry & Identities', q: 'If sin θ + cos θ = 1.2 and 0 < θ < π/2, what is the value of sin 2θ?', o: ['0.24', '0.44', '0.56', '0.84'], a: 1 },
  { s: 'math', t: 'Polygons & Angles', q: 'An arc of a circle with radius 12 cm has a length of 4π cm. What is the central angle of the arc in degrees?', o: ['30°', '45°', '60°', '90°'], a: 2 },

  // Word Problems & Data Analysis
  { s: 'math', t: 'Word Problems & Systems', q: 'A container holds a mixture of 20 liters of acid and water with a 30% acid concentration. How many liters of pure acid must be added to raise the concentration to 50%?', o: ['4', '6', '8', '10'], a: 2 },
  { s: 'math', t: 'Probability', q: 'A bag contains 5 red, 4 blue, and 3 green marbles. If two marbles are drawn without replacement, what is the probability that both are blue?', o: ['1/11', '1/9', '4/33', '2/11'], a: 0 },
  { s: 'math', t: 'Statistics', q: 'The mean of 5 numbers is 18. If one number is removed, the mean of the remaining numbers becomes 20. What was the removed number?', o: ['10', '12', '14', '16'], a: 0 },
];

export const MS = {
  math: {
    uz: 'Matematika (Milliy sertifikat)', ru: 'Математика (Национальный сертификат)',
    qs: [
      { t: 'Limits', q: 'lim (x → 3) (x² − 9) / (x² − 5x + 6) = ?', o: ['3', '6', 'undefined', '0'], a: 1 },
      { t: 'Integrals', q: '∫ (3x² + 2x) dx on [0, 2] equals:', o: ['8', '10', '12', '16'], a: 2 },
      { t: 'Complex Numbers', q: 'What is the modulus of the complex number z = 3 − 4i?', o: ['3', '4', '5', '7'], a: 2 },
      { t: 'Matrices', q: 'Find the determinant of matrix A = [[2, 5], [1, 3]].', o: ['1', '6', '11', '0'], a: 0 },
      { t: 'Combinatorics', q: 'How many 4-digit numbers can be formed using digits {1, 2, 3, 4, 5} without repetition?', o: ['60', '120', '24', '720'], a: 1 },
      { t: 'Sequences', q: 'Find the sum of the infinite geometric series: 8 + 4 + 2 + 1 + ...', o: ['12', '16', '24', 'Infinity'], a: 1 },
      { t: 'Derivatives', q: 'Find the derivative of f(x) = x · ln(x) at x = e.', o: ['1', '2', 'e', 'e + 1'], a: 1 },
      { t: 'Trigonometric Equations', q: 'Find the number of solutions to sin(2x) = 1/2 in the interval [0, 2π].', o: ['2', '4', '6', '8'], a: 1 },
      { t: 'Vectors', q: 'Find the dot product of vectors a = (2, -3, 1) and b = (4, 1, -2).', o: ['3', '5', '11', '-3'], a: 0 },
      { t: 'Logarithmic Equations', q: 'Solve for x: log₂(x) + log₂(x − 2) = 3.', o: ['4', '-2', '4 and -2', '8'], a: 0 },
    ],
  },
  phys: {
    uz: 'Fizika (Milliy sertifikat)', ru: 'Физика (Национальный сертификат)',
    qs: [
      { t: 'Electrodynamics', q: 'A capacitor of capacitance C is charged to voltage U and then connected to an identical uncharged capacitor. What fraction of the initial energy is lost as heat?', o: ['0%', '25%', '50%', '75%'], a: 2 },
      { t: 'Mechanics', q: 'A body of mass 2 kg slides down a 30° inclined plane without friction. What is its acceleration? (g = 10 m/s²)', o: ['2.5 m/s²', '5 m/s²', '8.66 m/s²', '10 m/s²'], a: 1 },
      { t: 'Thermodynamics', q: 'During an isobaric expansion, an ideal monatomic gas performs 300 J of work. What is the heat supplied to the gas?', o: ['300 J', '500 J', '750 J', '1050 J'], a: 2 },
      { t: 'Optics', q: 'A light ray passes from glass (n = 1.5) into water (n = 1.33). What is the critical angle of total internal reflection approximately?', o: ['41.8°', '48.6°', '62.5°', 'Not possible'], a: 1 },
      { t: 'Quantum Physics', q: 'The work function of a metal is 2 eV. If photons with energy 4 eV strike the surface, what is the maximum kinetic energy of emitted photoelectrons?', o: ['2 eV', '4 eV', '6 eV', '0 eV'], a: 0 },
      { t: 'Kinematics', q: 'A body is thrown vertically upward with initial velocity 20 m/s. What is its maximum height? (g = 10 m/s²)', o: ['10 m', '20 m', '40 m', '15 m'], a: 1 },
      { t: 'Magnetism', q: 'A proton moves at speed v perpendicular to a magnetic field B. What is the radius of its circular trajectory?', o: ['r = qB / (mv)', 'r = mv / (qB)', 'r = mB / (qv)', 'r = qv / (mB)'], a: 1 },
      { t: 'Oscillations', q: 'If the length of a mathematical pendulum is quadrupled, its period of oscillation changes by a factor of:', o: ['2', '4', '1/2', '1/4'], a: 0 },
    ],
  },
  chem: {
    uz: 'Kimyo (Milliy sertifikat)', ru: 'Химия (Национальный сертификат)',
    qs: [
      { t: 'Equilibrium', q: 'For the exothermic equilibrium reaction N₂ + 3H₂ ⇄ 2NH₃, which action shifts the equilibrium to the right?', o: ['Increasing temperature', 'Decreasing pressure', 'Removing ammonia continuously', 'Adding a catalyst'], a: 2 },
      { t: 'Stoichiometry', q: 'What volume of CO₂ (at n.sh.) is produced when 100 g of CaCO₃ undergoes complete thermal decomposition?', o: ['11.2 L', '22.4 L', '44.8 L', '10.0 L'], a: 1 },
      { t: 'Solutions & pH', q: 'Calculate the pH of a 0.005 M solution of H₂SO₄ (assuming complete dissociation of both protons).', o: ['2.0', '2.3', '3.0', '1.7'], a: 0 },
      { t: 'Electrochemistry', q: 'During the electrolysis of an aqueous CuSO₄ solution using inert electrodes, what substance is liberated at the anode?', o: ['Copper (Cu)', 'Hydrogen (H₂)', 'Oxygen (O₂)', 'Sulfur dioxide (SO₂)'], a: 2 },
      { t: 'Kinetics', q: 'If the concentration of a reactant in a second-order reaction is doubled, the initial reaction rate increases by a factor of:', o: ['2', '3', '4', '8'], a: 2 },
      { t: 'Organic Chemistry', q: 'What main organic product is formed from the dehydration of ethanol at temperatures above 140°C in the presence of H₂SO₄?', o: ['Diethyl ether', 'Ethene (ethylene)', 'Ethanal', 'Ethanoic acid'], a: 1 },
      { t: 'Thermochemistry', q: 'Which reaction has a negative enthalpy change (ΔH < 0)?', o: ['Combustion of methane', 'Thermal decomposition of CaCO₃', 'Photosynthesis', 'Melting of ice'], a: 0 },
    ],
  },
  eng: {
    uz: 'Ingliz tili (Milliy sertifikat)', ru: 'Английский язык (Национальный сертификат)',
    qs: [
      { t: 'Advanced Grammar', q: 'Had the government anticipated the economic crisis earlier, the inflation rate ___ significantly lower today.', o: ['would be', 'will be', 'would have been', 'had been'], a: 0 },
      { t: 'Inversion', q: 'Not only ___ late, but he also forgot to bring the required documents.', o: ['did he arrive', 'he arrived', 'arrived he', 'does he arrive'], a: 0 },
      { t: 'Idioms & Collocations', q: 'Despite facing numerous obstacles, she decided to ___ the bullet and finish the project.', o: ['bite', 'swallow', 'chew', 'shoot'], a: 0 },
      { t: 'Advanced Subjunctive', q: 'It is imperative that every candidate ___ the safety protocol before entering the laboratory.', o: ['must review', 'reviews', 'review', 'reviewed'], a: 2 },
      { t: 'Cleft Sentences', q: 'It was only after the meeting had ended ___ realized the mistake in the financial spreadsheet.', o: ['when he', 'that he', 'which he', 'then he'], a: 1 },
      { t: 'Participle Clauses', q: '___ by the overwhelming support from the audience, the speaker broke down in tears.', o: ['Moved', 'Moving', 'Having moved', 'To move'], a: 0 },
      { t: 'Phrasal Verbs', q: 'The negotiation fell through because neither side was willing to ___ to the other’s demands.', o: ['give in', 'take over', 'put off', 'carry out'], a: 0 },
    ],
  },
};

export const msLevel = (score) =>
  score >= 70 ? 'A+' : score >= 65 ? 'A' : score >= 60 ? 'B+' : score >= 55 ? 'B' : score >= 50 ? 'C+' : score >= 46 ? 'C' : null;