import { LanguageCode } from '../utils/localization';

export interface LocalizedString {
  en: string;
  de: string;
  es: string;
  fr: string;
}

export interface GrammarRule {
  title: LocalizedString;
  explanation: LocalizedString;
  exampleGerman: string;
  exampleTranslation: LocalizedString;
}

export interface QuizQuestion {
  id: string;
  question: string; // The German sentence, e.g. "Wie heißt ___?" or with a gap like "Ich gehe in ___ Supermarkt (m)."
  options: string[]; // Options in German
  correctAnswer: string;
  explanation: LocalizedString;
}

export interface Lesson {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  introduction: LocalizedString;
  rules: GrammarRule[];
  summary: LocalizedString;
  quiz: QuizQuestion[];
}

export interface Level {
  id: string; // A1, A2, B1, B2, C1, C2
  title: string; // e.g. "Beginner"
  color: string; // e.g. "#14b8a6"
  accentColor: string; // e.g. "rgba(20, 184, 166, 0.1)"
  description: LocalizedString;
  lessons: Lesson[];
}

export const curriculum: Level[] = [
  {
    id: 'A1',
    title: 'Beginner (A1)',
    color: '#14b8a6', // Teal
    accentColor: 'rgba(20, 184, 166, 0.1)',
    description: {
      en: 'Learn basic sentences, pronouns, and the most common present tense verbs.',
      de: 'Lernen Sie einfache Sätze, Pronomen und die häufigsten Verben im Präsens.',
      es: 'Aprende oraciones básicas, pronombres y los verbos más comunes en presente.',
      fr: 'Apprenez des phrases de base, des pronoms et les verbes les plus courants au présent.',
    },
    lessons: [
      {
        id: 'A1_pronouns',
        title: {
          en: 'Personal Pronouns',
          de: 'Personalpronomen',
          es: 'Pronombres Personales',
          fr: 'Pronoms Personnels',
        },
        description: {
          en: 'Master "ich", "du", "er", "sie", "es" and understand how to refer to people and things.',
          de: 'Meistern Sie "ich", "du", "er", "sie", "es" und verstehen Sie, wie man auf Personen/Dinge verweist.',
          es: 'Domina "ich", "du", "er", "sie", "es" y comprende cómo referirte a personas y objetos.',
          fr: 'Maîtrisez "ich", "du", "er", "sie", "es" et comprenez comment désigner les personnes et les choses.',
        },
        introduction: {
          en: 'Personal pronouns are the foundation of any language. In German, they change based on the grammatical case (Nominative, Accusative, Dative). Let\'s start with the Nominative case (subject of the sentence).',
          de: 'Personalpronomen sind das Fundament jeder Sprache. Im Deutschen ändern sie sich je nach grammatikalischem Fall. Beginnen wir mit dem Nominativ.',
          es: 'Los pronombres personales son la base de cualquier idioma. En alemán, cambian según el caso gramatical. Comencemos con el caso Nominativo (sujeto de la oración).',
          fr: 'Les pronoms personnels sont la base de toute langue. En allemand, ils changent selon le cas grammatical. Commençons par le cas Nominatif (sujet de la phrase).',
        },
        rules: [
          {
            title: {
              en: 'Singular Pronouns',
              de: 'Singular-Pronomen',
              es: 'Pronombres Singulares',
              fr: 'Pronoms Singuliers',
            },
            explanation: {
              en: 'Use "ich" (I), "du" (you, informal), "er" (he), "sie" (she), "es" (it). Use "Sie" (capitalized) for formal "you".',
              de: 'Verwenden Sie "ich", "du" (informell), "er", "sie", "es". Verwenden Sie "Sie" (großgeschrieben) für das formelle "Sie".',
              es: 'Usa "ich" (yo), "du" (tú, informal), "er" (él), "sie" (ella), "es" (ello). Usa "Sie" (con mayúscula) para el "usted" formal.',
              fr: 'Utilisez "ich" (je), "du" (tu, informel), "er" (il), "sie" (elle), "es" (il/elle neutre). Utilisez "Sie" (majuscule) pour le "vous" formel.',
            },
            exampleGerman: 'Ich bin Paul. Wer bist du?',
            exampleTranslation: {
              en: 'I am Paul. Who are you?',
              de: 'Ich bin Paul. Wer bist du?',
              es: 'Yo soy Paul. ¿Quién eres tú?',
              fr: 'Je suis Paul. Qui es-tu ?',
            },
          },
          {
            title: {
              en: 'Plural Pronouns',
              de: 'Plural-Pronomen',
              es: 'Pronombres Plurales',
              fr: 'Pronoms Pluriels',
            },
            explanation: {
              en: 'Use "wir" (we), "ihr" (you all, informal plural), and "sie" (they, lowercase).',
              de: 'Verwenden Sie "wir" (wir), "ihr" (ihr, informeller Plural) und "sie" (sie, kleingeschrieben).',
              es: 'Usa "wir" (nosotros), "ihr" (vosotros, plural informal) y "sie" (ellos/ellas).',
              fr: 'Utilisez "wir" (nous), "ihr" (vous, pluriel informel) et "sie" (ils/elles).',
            },
            exampleGerman: 'Wir lernen Deutsch und ihr lernt Englisch.',
            exampleTranslation: {
              en: 'We are learning German and you all are learning English.',
              de: 'Wir lernen Deutsch und ihr lernt Englisch.',
              es: 'Nosotros aprendemos alemán y vosotros aprendéis inglés.',
              fr: 'Nous apprenons l\'allemand et vous apprenez l\'anglais.',
            },
          },
        ],
        summary: {
          en: 'Remember: Always capitalize "Sie" when speaking formally to one or more people. "sie" can mean "she" or "they" depending on the verb conjugation!',
          de: 'Denken Sie daran: Schreiben Sie "Sie" immer groß, wenn Sie formell mit einer oder mehreren Personen sprechen. "sie" kann je nach Verbkonjugation "sie" (Singular) oder "sie" (Plural) bedeuten!',
          es: 'Recuerda: Escribe siempre "Sie" con mayúscula al hablar formalmente a una o más personas. ¡"sie" puede significar "ella" o "ellos/ellas" según la conjugación del verbo!',
          fr: 'Rappelez-vous : Mettez toujours une majuscule à "Sie" lorsque vous vous adressez formellement à une ou plusieurs personnes. "sie" peut signifier "elle" ou "ils/elles" selon la conjugaison du verbe !',
        },
        quiz: [
          {
            id: 'A1_pronouns_q1',
            question: 'Hallo! Wer bist ___?',
            options: ['ich', 'du', 'ihr', 'er'],
            correctAnswer: 'du',
            explanation: {
              en: 'The verb is "bist", which corresponds to the second person singular "du".',
              de: 'Das Verb ist "bist", was der zweiten Person Singular "du" entspricht.',
              es: 'El verbo es "bist", que corresponde a la segunda persona del singular "du" (tú).',
              fr: 'Le verbe est "bist", qui correspond à la deuxième personne du singulier "du" (tu).',
            },
          },
          {
            id: 'A1_pronouns_q2',
            question: 'Herr Schmidt, woher kommen ___?',
            options: ['du', 'ihr', 'sie', 'Sie'],
            correctAnswer: 'Sie',
            explanation: {
              en: 'Since you address "Herr Schmidt" formally, you must use the capitalized formal pronoun "Sie".',
              de: 'Da Sie "Herr Schmidt" formell ansprechen, müssen Sie das großgeschriebene formelle Pronomen "Sie" verwenden.',
              es: 'Dado que te diriges a "Herr Schmidt" de manera formal, debes usar el pronombre formal con mayúscula "Sie" (usted).',
              fr: 'Comme vous vous adressez formellement à "Herr Schmidt", vous devez utiliser le pronombre formel majuscule "Sie" (vous).',
            },
          },
          {
            id: 'A1_pronouns_q3',
            question: 'Anna und ich, ___ wohnen in Berlin.',
            options: ['ihr', 'wir', 'sie', 'er'],
            correctAnswer: 'wir',
            explanation: {
              en: '"Anna und ich" represents "we", which is translated as "wir".',
              de: '"Anna und ich" steht für "wir".',
              es: '"Anna und ich" representa a "nosotros", que se traduce como "wir".',
              fr: '"Anna und ich" représente "nous", qui se traduit par "wir".',
            },
          },
        ],
      },
      {
        id: 'A1_present_tense',
        title: {
          en: 'Present Tense (Präsens)',
          de: 'Präsens regelmäßiger Verben',
          es: 'Presente de Verbos Regulares',
          fr: 'Le Présent des Verbes Réguliers',
        },
        description: {
          en: 'Learn regular verb conjugation rules and express actions in the present.',
          de: 'Lernen Sie die Konjugationsregeln für regelmäßige Verben und drücken Sie Handlungen im Präsens aus.',
          es: 'Aprende las reglas de conjugación de verbos regulares y expresa acciones en presente.',
          fr: 'Apprenez les règles de conjugaison des verbes réguliers et exprimez des actions au présent.',
        },
        introduction: {
          en: 'In German, the ending of a verb changes to match the subject pronoun. For regular verbs, we drop the "-en" from the infinitive and add endings: -e, -st, -t, -en, -t, -en.',
          de: 'Im Deutschen ändert sich die Endung des Verbs passend zum Subjektpronomen. Bei regelmäßigen Verben fällt das "-en" des Infinitivs weg, und wir hängen die Endungen an: -e, -st, -t, -en, -t, -en.',
          es: 'En alemán, la terminación del verbo cambia para coincidir con el sujeto. Para los verbos regulares, quitamos "-en" del infinitivo y añadimos las terminaciones: -e, -st, -t, -en, -t, -en.',
          fr: 'En allemand, la terminaison du verbe change pour s\'accorder avec le sujet. Pour les verbes réguliers, on enlève le "-en" de l\'infinitif et on ajoute les terminaisons : -e, -st, -t, -en, -t, -en.',
        },
        rules: [
          {
            title: {
              en: 'Conjugation Pattern',
              de: 'Konjugationsmuster',
              es: 'Patrón de Conjugación',
              fr: 'Modèle de Conjugaison',
            },
            explanation: {
              en: 'Take the verb "lernen" (to learn). Verbstem: "lern-". Endings: ich lern-e, du lern-st, er/sie/es lern-t, wir lern-en, ihr lern-t, sie/Sie lern-en.',
              de: 'Nehmen wir das Verb "lernen". Verbstamm: "lern-". Endungen: ich lern-e, du lern-st, er/sie/es lern-t, wir lern-en, ihr lern-t, sie/Sie lern-en.',
              es: 'Toma el verbo "lernen" (aprender). Raíz: "lern-". Terminaciones: ich lern-e, du lern-st, er/sie/es lern-t, wir lern-en, ihr lern-t, sie/Sie lern-en.',
              fr: 'Prenez le verbe "lernen" (apprendre). Radical : "lern-". Terminaisons : ich lern-e, du lern-st, er/sie/es lern-t, wir lern-en, ihr lern-t, sie/Sie lern-en.',
            },
            exampleGerman: 'Ich lerne Deutsch und du spielst Fußball.',
            exampleTranslation: {
              en: 'I am learning German and you are playing soccer.',
              de: 'Ich lerne Deutsch und du spielst Fußball.',
              es: 'Yo aprendo alemán y tú juegas al fútbol.',
              fr: 'J\'apprends l\'allemand et tu joues au football.',
            },
          },
        ],
        summary: {
          en: 'Most German verbs are regular. Once you memorize the endings (-e, -st, -t, -en, -t, -en), you can conjugate hundreds of verbs!',
          de: 'Die meisten deutschen Verben sind regelmäßig. Wenn Sie die Endungen (-e, -st, -t, -en, -t, -en) gelernt haben, können Sie Hunderte von Verben konjugieren!',
          es: 'La mayoría de los verbos alemanes son regulares. Una vez que memorices las terminaciones (-e, -st, -t, -en, -t, -en), ¡podrás conjugar cientos de verbos!',
          fr: 'La plupart des verbes allemands sont réguliers. Une fois que vous avez mémorisé les terminaisons (-e, -st, -t, -en, -t, -en), vous pouvez conjuguer des centaines de verbes !',
        },
        quiz: [
          {
            id: 'A1_present_tense_q1',
            question: 'Wir ___ in München.',
            options: ['wohne', 'wohnst', 'wohnen', 'wohnt'],
            correctAnswer: 'wohnen',
            explanation: {
              en: '"wir" (we) always takes the infinitive ending "-en".',
              de: '"wir" verlangt immer die Infinitivendung "-en".',
              es: '"wir" (nosotros) siempre toma la terminación de infinitivo "-en".',
              fr: '"wir" (nous) prend toujours la terminaison de l\'infinitif "-en".',
            },
          },
          {
            id: 'A1_present_tense_q2',
            question: 'Was ___ du, Marie?',
            options: ['machst', 'mache', 'macht', 'machen'],
            correctAnswer: 'machst',
            explanation: {
              en: '"du" takes the ending "-st" -> "machst".',
              de: '"du" verlangt die Endung "-st" -> "machst".',
              es: '"du" (tú) toma la terminación "-st" -> "machst".',
              fr: '"du" (tu) prend la terminaison "-st" -> "machst".',
            },
          },
          {
            id: 'A1_present_tense_q3',
            question: 'Er ___ gerne Klavier.',
            options: ['spiele', 'spielst', 'spielen', 'spielt'],
            correctAnswer: 'spielt',
            explanation: {
              en: '"er" (he) takes the ending "-t" -> "spielt".',
              de: '"er" verlangt die Endung "-t" -> "spielt".',
              es: '"er" (él) toma la terminación "-t" -> "spielt".',
              fr: '"er" (il) prend la terminaison "-t" -> "spielt".',
            },
          },
        ],
      },
      {
        id: 'A1_sein_haben',
        title: {
          en: 'Sein & Haben (To Be & To Have)',
          de: 'Sein & Haben',
          es: 'Sein & Haben (Ser/Estar y Tener)',
          fr: 'Sein & Haben (Être et Avoir)',
        },
        description: {
          en: 'Master the irregular but essential auxiliary verbs "sein" and "haben".',
          de: 'Meistern Sie die unregelmäßigen, aber essenziellen Hilfsverben "sein" und "haben".',
          es: 'Domina los verbos auxiliares irregulares pero esenciales "sein" y "haben".',
          fr: 'Maîtrisez les verbes auxiliaires irréguliers mais essentiels "sein" et "haben".',
        },
        introduction: {
          en: '"Sein" (to be) and "haben" (to have) are irregular, meaning they do not follow standard present tense ending patterns. Because they are used in everyday conversations and as helping verbs for past tenses, you must memorize them.',
          de: '"Sein" (zu sein) und "haben" (zu haben) sind unregelmäßig. Da sie in alltäglichen Gesprächen und als Hilfsverben für die Vergangenheit verwendet werden, müssen Sie sie auswendig lernen.',
          es: '"Sein" (ser/estar) y "haben" (tener) son irregulares. Dado que se usan en conversaciones diarias y como verbos auxiliares para el pasado, debes memorizarlos.',
          fr: '"Sein" (être) et "haben" (avoir) sont irréguliers. Comme ils sont utilisés dans les conversations quotidiennes et comme verbes auxiliaires pour le passé, vous devez les mémoriser.',
        },
        rules: [
          {
            title: {
              en: 'Conjugation of "sein"',
              de: 'Konjugation von "sein"',
              es: 'Conjugación de "sein"',
              fr: 'Conjugaison de "sein"',
            },
            explanation: {
              en: 'Conjugation: ich bin (I am), du bist (you are), er/sie/es ist (he/she/it is), wir sind (we are), ihr seid (you all are), sie/Sie sind (they/you formal are).',
              de: 'Konjugation: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.',
              es: 'Conjugación: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.',
              fr: 'Conjugaison : ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.',
            },
            exampleGerman: 'Ich bin glücklich und du bist müde.',
            exampleTranslation: {
              en: 'I am happy and you are tired.',
              de: 'Ich bin glücklich und du bist müde.',
              es: 'Yo estoy feliz y tú estás cansado.',
              fr: 'Je suis heureux et tu es fatigué.',
            },
          },
          {
            title: {
              en: 'Conjugation of "haben"',
              de: 'Konjugation von "haben"',
              es: 'Conjugación of "haben"',
              fr: 'Conjugaison de "haben"',
            },
            explanation: {
              en: 'Conjugation: ich habe (I have), du hast (you have - note no "b"), er/sie/es hat (he/she/it has - note no "b"), wir haben (we have), ihr habt (you all have), sie/Sie haben (they/you formal have).',
              de: 'Konjugation: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.',
              es: 'Conjugación: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.',
              fr: 'Conjugaison : ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.',
            },
            exampleGerman: 'Wir haben ein Auto. Hast du ein Fahrrad?',
            exampleTranslation: {
              en: 'We have a car. Do you have a bicycle?',
              de: 'Wir haben ein Auto. Hast du ein Fahrrad?',
              es: 'Nosotros tenemos un coche. ¿Tienes tú una bicicleta?',
              fr: 'Nous avons une voiture. As-tu un vélo ?',
            },
          },
        ],
        summary: {
          en: '"Sein" and "haben" are the foundations of sentence construction. Memorize them perfectly!',
          de: '"Sein" und "haben" sind das Fundament des Satzbaus. Lernen Sie sie perfekt auswendig!',
          es: '¡"Sein" y "haben" son los fundamentos de la construcción de oraciones. ¡Memorízalos a la perfección!',
          fr: '"Sein" et "haben" sont les fondements de la construction des phrases. Mémorisez-les parfaitement !',
        },
        quiz: [
          {
            id: 'A1_sein_haben_q1',
            question: 'Sie ___ sehr nett, Herr Müller.',
            options: ['seid', 'sind', 'bist', 'ist'],
            correctAnswer: 'sind',
            explanation: {
              en: '"Herr Müller" is addressed formally using "Sie", which requires "sind".',
              de: '"Herr Müller" wird formell mit "Sie" angesprochen, was "sind" erfordert.',
              es: 'A "Herr Müller" se le dirige formalmente usando "Sie" (usted), lo cual requiere "sind".',
              fr: '"Herr Müller" est vouvoyé formellement avec "Sie", ce qui requiert "sind".',
            },
          },
          {
            id: 'A1_sein_haben_q2',
            question: '___ du heute Zeit?',
            options: ['Hast', 'Habt', 'Habe', 'Hat'],
            correctAnswer: 'Hast',
            explanation: {
              en: 'The subject "du" matches the irregular conjugated form "hast".',
              de: 'Das Subjekt "du" passt zur unregelmäßig konjugierten Form "hast".',
              es: 'El sujeto "du" (tú) coincide con la forma conjugada irregular "hast".',
              fr: 'Le sujet "du" correspond à la forme conjuguée irrégulière "hast".',
            },
          },
          {
            id: 'A1_sein_haben_q3',
            question: 'Ihr ___ heute fleißig.',
            options: ['bist', 'seid', 'sind', 'ist'],
            correctAnswer: 'seid',
            explanation: {
              en: 'The plural second person pronoun "ihr" matches "seid" (you all are).',
              de: 'Das Pronomen "ihr" passt zu "seid".',
              es: 'El pronombre plural "ihr" (vosotros) coincide con "seid".',
              fr: 'Le pronombre pluriel "ihr" (vous) correspond à "seid".',
            },
          },
        ],
      },
      {
        id: 'A1_articles',
        title: {
          en: 'Noun Gender & Articles',
          de: 'Substantive & Artikel',
          es: 'Género del Sustantivo y Artículos',
          fr: 'Le Genre des Noms et Articles',
        },
        description: {
          en: 'Understand "der", "die", "das" and indefinite articles like "ein", "eine".',
          de: 'Verstehen Sie "der", "die", "das" und unbestimmte Artikel wie "ein", "eine".',
          es: 'Comprende "der", "die", "das" y los artículos indefinidos como "ein", "eine".',
          fr: 'Comprenez "der", "die", "das" et les articles indéfinis comme "ein", "eine".',
        },
        introduction: {
          en: 'German nouns have three grammatical genders: Masculine (der), Feminine (die), and Neuter (das). In the plural, all nouns use the article "die". Indefinite articles are "ein" (masculine/neuter) and "eine" (feminine).',
          de: 'Deutsche Nomen haben drei grammatikalische Geschlechter: Maskulin (der), Feminin (die) und Neutral (das). Im Plural verwenden alle Nomen den Artikel "die". Unbestimmte Artikel sind "ein" (maskulin/neutral) und "eine" (feminin).',
          es: 'Los sustantivos alemanes tienen tres géneros gramaticales: Masculino (der), Femenino (die) y Neutro (das). En plural, todos los sustantivos usan el artículo "die". Los artículos indefinidos son "ein" (masculino/neutro) y "eine" (femenino).',
          fr: 'Les noms allemands ont trois genres grammaticaux : Masculin (der), Féminin (die) et Neutre (das). Au pluriel, tous les noms utilisent l\'article "die". Les articles indéfinis sont "ein" (masculin/neutre) et "eine" (féminin).',
        },
        rules: [
          {
            title: {
              en: 'Definite & Indefinite Articles',
              de: 'Bestimmte & Unbestimmte Artikel',
              es: 'Artículos Definidos e Indefinidos',
              fr: 'Articles Définis & Indéfinis',
            },
            explanation: {
              en: 'Masculine: der Mann / ein Mann. Feminine: die Frau / eine Frau. Neuter: das Kind / ein Kind. Plural: die Kinder / (no indefinite plural).',
              de: 'Maskulin: der Mann / ein Mann. Feminin: die Frau / eine Frau. Neutral: das Kind / ein Kind. Plural: die Kinder.',
              es: 'Masculino: der Mann / ein Mann. Femenino: die Frau / eine Frau. Neutro: das Kind / ein Kind. Plural: die Kinder.',
              fr: 'Masculin : der Mann / ein Mann. Féminin : die Frau / eine Frau. Neutre : das Kind / ein Kind. Pluriel : die Kinder.',
            },
            exampleGerman: 'Das ist ein Tisch (m) und eine Lampe (f).',
            exampleTranslation: {
              en: 'That is a table and a lamp.',
              de: 'Das ist ein Tisch und eine Lampe.',
              es: 'Eso es una mesa y una lámpara.',
              fr: 'C\'est une table et une lampe.',
            },
          },
        ],
        summary: {
          en: 'Always learn nouns together with their articles! There are few strict rules, but some endings help (e.g. nouns ending in "-ung", "-schaft", or "-heit" are always feminine).',
          de: 'Lernen Sie Nomen immer zusammen mit ihrem Artikel! Es gibt wenige feste Regeln, aber manche Endungen helfen (z. B. sind Nomen auf "-ung", "-schaft" oder "-heit" immer feminin).',
          es: '¡Aprende siempre los sustantivos junto con sus artículos! Hay pocas reglas fijas, pero algunas terminaciones ayudan (p. ej., los sustantivos que terminan en "-ung", "-schaft" o "-heit" son siempre femeninos).',
          fr: 'Apprenez toujours les noms avec leurs articles ! Il y a peu de règles strictes, mais certaines terminaisons aident (ex: les noms se terminant par "-ung", "-schaft" ou "-heit" sont toujours féminins).',
        },
        quiz: [
          {
            id: 'A1_articles_q1',
            question: 'Wie heißt ___ Frau (f) da drüben?',
            options: ['der', 'die', 'das', 'den'],
            correctAnswer: 'die',
            explanation: {
              en: '"Frau" is a feminine noun, so the definite article is "die".',
              de: '"Frau" ist ein feminines Nomen, daher ist der bestimmte Artikel "die".',
              es: '"Frau" (mujer) es un sustantivo femenino, por lo que el artículo definido es "die".',
              fr: '"Frau" (femme) est un nom féminin, donc l\'article défini est "die".',
            },
          },
          {
            id: 'A1_articles_q2',
            question: 'Hier ist ___ Buch (n). Es ist spannend.',
            options: ['ein', 'eine', 'einer', 'einen'],
            correctAnswer: 'ein',
            explanation: {
              en: '"Buch" is a neuter noun. The indefinite article for neuter nouns is "ein".',
              de: '"Buch" ist neutral. Der unbestimmte Artikel für neutrale Nomen ist "ein".',
              es: '"Buch" (libro) es un sustantivo neutro. El artículo indefinido para los sustantivos neutros es "ein".',
              fr: '"Buch" (livre) est un nom neutre. L\'article indéfini pour les noms neutres est "ein".',
            },
          },
          {
            id: 'A1_articles_q3',
            question: '___ Autos (pl) in Deutschland sind oft teuer.',
            options: ['Der', 'Die', 'Das', 'Den'],
            correctAnswer: 'Die',
            explanation: {
              en: 'All nouns in the plural take the definite article "die".',
              de: 'Alle Nomen im Plural erhalten den bestimmten Artikel "die".',
              es: 'Todos los sustantivos en plural toman el artículo definido "die".',
              fr: 'Tous les noms au pluriel prennent l\'article défini "die".',
            },
          },
        ],
      },
      {
        id: 'A1_accusative',
        title: {
          en: 'Accusative Case (Akkusativ)',
          de: 'Der Akkusativ',
          es: 'El Caso Acusativo (Objeto Directo)',
          fr: 'Le Cas Accusatif',
        },
        description: {
          en: 'Learn how to identify direct objects and change masculine articles.',
          de: 'Lernen Sie, direkte Objekte zu erkennen und maskuline Artikel zu verändern.',
          es: 'Aprende a identificar objetos directos y a cambiar los artículos masculinos.',
          fr: 'Apprenez à identifier les objets directs et à modifier les articles masculins.',
        },
        introduction: {
          en: 'The Accusative case is used for the direct object—the person or thing directly receiving the action of the verb. The magic rule is: Only the masculine gender changes! Feminine, neuter, and plural stay exactly the same.',
          de: 'Der Akkusativ wird für das direkte Objekt verwendet. Die goldene Regel lautet: Nur der maskuline Artikel ändert sich! Feminin, neutral und Plural bleiben unverändert.',
          es: 'El caso acusativo se usa para el objeto directo, es decir, la persona u objeto que recibe la acción del verbo. La regla de oro es: ¡Solo cambia el género masculino! Femenino, neutro y plural se quedan exactamente igual.',
          fr: 'Le cas accusatif est utilisé pour l\'objet direct — la personne ou la chose qui subit directement l\'action du verbe. La règle d\'or est : Seul le genre masculin change ! Le féminin, le neutre et le pluriel restent identiques.',
        },
        rules: [
          {
            title: {
              en: 'The Masculine Change',
              de: 'Die maskuline Änderung',
              es: 'El Cambio Masculino',
              fr: 'Le Changement Masculin',
            },
            explanation: {
              en: 'In the accusative: Masculine "der" becomes "den", and "ein" becomes "einen". Feminine "die/eine", Neuter "das/ein", and Plural "die" do not change.',
              de: 'Im Akkusativ wird maskulin "der" zu "den", und "ein" zu "einen". Feminin "die/eine", neutral "das/ein" und Plural "die" ändern sich nicht.',
              es: 'En el acusativo: El masculino "der" cambia a "den", y "ein" cambia a "einen". Femenino "die/eine", Neutro "das/ein" y Plural "die" no cambian.',
              fr: 'À l\'accusatif : Le masculin "der" devient "den" et "ein" devient "einen". Le féminin "die/eine", le neutre "das/ein" et le pluriel "die" ne changent pas.',
            },
            exampleGerman: 'Ich habe einen Hund (m) und eine Katze (f).',
            exampleTranslation: {
              en: 'I have a dog and a cat.',
              de: 'Ich habe einen Hund und eine Katze.',
              es: 'Tengo un perro y un gato.',
              fr: 'J\'ai un chien et un chat.',
            },
          },
        ],
        summary: {
          en: 'Whenever you see transitive verbs like "haben", "brauchen", "sehen", or "kaufen", think Accusative! And remember: only masculine forms modify to -en (den, einen, meinen).',
          de: 'Wenn Sie transitive Verben wie "haben", "brauchen", "sehen" oder "kaufen" sehen, denken Sie an den Akkusativ! Und denken Sie daran: Nur maskuline Formen ändern sich zu -en (den, einen, meinen).',
          es: 'Cuando veas verbos transitivos como "haben" (tener), "brauchen" (necesitar), "sehen" (ver) o "kaufen" (comprar), ¡piensa en el Acusativo! Y recuerda: solo las formas masculinas cambian a -en (den, einen, meinen).',
          fr: 'Chaque fois que vous voyez des verbes transitifs comme "haben", "brauchen", "sehen" ou "kaufen", pensez à l\'Accusatif ! Et rappelez-vous : seules les formes masculines changent en -en (den, einen, meinen).',
        },
        quiz: [
          {
            id: 'A1_accusative_q1',
            question: 'Ich brauche ___ Apfel (m).',
            options: ['ein', 'eine', 'einen', 'einem'],
            correctAnswer: 'einen',
            explanation: {
              en: '"Apfel" is masculine, and "brauchen" takes a direct object in the Accusative, so we need "einen".',
              de: '"Apfel" ist maskulin und "brauchen" verlangt den Akkusativ, daher brauchen wir "einen".',
              es: '"Apfel" (manzana) es masculino, y "brauchen" toma un objeto directo en Acusativo, por lo que necesitamos "einen".',
              fr: '"Apfel" (pomme) est masculin et "brauchen" demande l\'accusatif, nous avons donc besoin de "einen".',
            },
          },
          {
            id: 'A1_accusative_q2',
            question: 'Wir sehen ___ Kind (n).',
            options: ['den', 'das', 'der', 'die'],
            correctAnswer: 'das',
            explanation: {
              en: '"Kind" is neuter. Neuter nouns do not change in the Accusative case, so it remains "das".',
              de: '"Kind" ist neutral. Neutrale Nomen ändern sich im Akkusativ nicht, es bleibt also "das".',
              es: '"Kind" (niño) es neutro. Los sustantivos neutros no cambian en caso Acusativo, por lo que sigue siendo "das".',
              fr: '"Kind" (enfant) est neutre. Les noms neutres ne changent pas à l\'accusatif, il reste donc "das".',
            },
          },
          {
            id: 'A1_accusative_q3',
            question: 'Kennst du ___ Mann (m)?',
            options: ['der', 'das', 'den', 'die'],
            correctAnswer: 'den',
            explanation: {
              en: '"Mann" is masculine and the direct object of "kennen", so "der" changes to "den".',
              de: '"Mann" ist maskulin und das direkte Objekt von "kennen", daher wird "der" zu "den".',
              es: '"Mann" (hombre) es masculino y el objeto directo de "kennen", por lo que "der" cambia a "den".',
              fr: '"Mann" (homme) est masculin et l\'objet direct de "kennen", donc "der" devient "den".',
            },
          },
        ],
      },
      {
        id: 'A1_negation',
        title: {
          en: 'Negation (nicht vs kein)',
          de: 'Negation mit "nicht" und "kein"',
          es: 'Negación (nicht contra kein)',
          fr: 'La Négation (nicht vs kein)',
        },
        description: {
          en: 'Master when to negate nouns with "kein" and everything else with "nicht".',
          de: 'Lernen Sie, wann Sie Nomen mit "kein" verneinen und alles andere mit "nicht".',
          es: 'Domina cuándo negar sustantivos con "kein" y todo lo demás con "nicht".',
          fr: 'Maîtrisez le choix entre nier les noms avec "kein" et tout le reste avec "nicht".',
        },
        introduction: {
          en: 'German has two main words for negation: "kein" and "nicht". Use "kein" to negate nouns that have an indefinite article ("ein/eine") or no article at all. Use "nicht" to negate verbs, adjectives, adverbs, or definite articles.',
          de: 'Im Deutschen gibt es zwei Wörter für die Verneinung: "kein" und "nicht". Verwenden Sie "kein" für Nomen mit unbestimmtem oder ohne Artikel. Verwenden Sie "nicht" für Verben, Adjektive oder Nomen mit bestimmtem Artikel.',
          es: 'El alemán tiene dos palabras principales para la negación: "kein" and "nicht". Usa "kein" para negar sustantivos que tienen artículo indefinido ("ein/eine") o ningún artículo. Usa "nicht" para negar verbos, adjetivos, adverbios o artículos definidos.',
          fr: 'L\'allemand a deux mots principaux pour la négation : "kein" et "nicht". Utilisez "kein" pour nier les noms précédés d\'un article indéfini ("ein/eine") ou sans article. Utilisez "nicht" pour nier les verbes, les adjectifs, les adverbes ou les articles définis.',
        },
        rules: [
          {
            title: {
              en: 'When to use "kein"',
              de: 'Wann verwendet man "kein"',
              es: 'Cuándo usar "kein"',
              fr: 'Quand utiliser "kein"',
            },
            explanation: {
              en: '"kein" acts like "ein" but with a "k". It inflects exactly like "ein" based on case and gender. E.g. Ich habe ein Auto -> Ich habe kein Auto.',
              de: '"kein" verhält sich wie "ein", nur mit einem "k". Es wird genau wie "ein" dekliniert.',
              es: '"kein" actúa como "ein" pero con una "k". Se declina exactamente igual que "ein" según el caso y género.',
              fr: '"kein" fonctionne comme "ein" mais avec un "k". Il se décline exactement comme "ein" selon le cas et le genre.',
            },
            exampleGerman: 'Das ist keine Banane (f). Ich habe kein Geld (n).',
            exampleTranslation: {
              en: 'That is not a banana. I have no money.',
              de: 'Das ist keine Banane. Ich habe kein Geld.',
              es: 'Eso no es un plátano. No tengo dinero.',
              fr: 'Ce n\'est pas une banane. Je n\'ai pas d\'argent.',
            },
          },
          {
            title: {
              en: 'When to use "nicht"',
              de: 'Wann verwendet man "nicht"',
              es: 'Cuándo usar "nicht"',
              fr: 'Quand utiliser "nicht"',
            },
            explanation: {
              en: 'Use "nicht" to negate verbs (usually at the end of the sentence) or adjectives (placed right before the adjective).',
              de: 'Verwenden Sie "nicht", um Verben (meist am Satzende) oder Adjektive (direkt vor dem Adjektiv) zu verneinen.',
              es: 'Usa "nicht" para negar verbos (generalmente al final de la oración) o adjetivos (colocado justo antes del adjetivo).',
              fr: 'Utilisez "nicht" pour nier les verbes (généralement à la fin de la phrase) ou les adjectifs (placé juste avant l\'adjectif).',
            },
            exampleGerman: 'Ich schlafe nicht. Das Auto ist nicht rot.',
            exampleTranslation: {
              en: 'I am not sleeping. The car is not red.',
              de: 'Ich schlafe nicht. Das Auto ist nicht rot.',
              es: 'No estoy dumiendo. El coche no es rojo.',
              fr: 'Je ne dors pas. La voiture n\'est pas rouge.',
            },
          },
        ],
        summary: {
          en: 'Remember: Kein is for nouns without definite articles. Nicht is for verbs, adjectives, and everything else!',
          de: 'Denken Sie daran: Kein steht für Nomen ohne bestimmten Artikel. Nicht steht für Verben, Adjektive und alles andere!',
          es: '¡Recuerda: "Kein" es para sustantivos sin artículo definido. "Nicht" es para verbos, adjetivos y todo lo demás!',
          fr: 'Rappelez-vous : Kein est utilisé pour les noms sans article défini. Nicht est utilisé pour les verbes, les adjectifs et tout le reste !',
        },
        quiz: [
          {
            id: 'A1_negation_q1',
            question: 'Das ist ___ Apfel (m). Das ist eine Birne.',
            options: ['nicht', 'kein', 'keine', 'keinen'],
            correctAnswer: 'kein',
            explanation: {
              en: '"Apfel" is masculine, nominative here ("Das ist..."), and we are negating a noun with no definite article, so we use "kein".',
              de: '"Apfel" ist maskulin im Nominativ und wir verneinen ein Nomen ohne bestimmten Artikel, daher verwenden wir "kein".',
              es: '"Apfel" es masculino, nominativo aquí ("Das ist..."), y estamos negando un sustantivo sin artículo definido, por lo que usamos "kein".',
              fr: '"Apfel" est masculin, ici au nominatif ("Das ist..."), et nous nions un nom sans article défini, nous utilisons donc "kein".',
            },
          },
          {
            id: 'A1_negation_q2',
            question: 'Ich trinke ___ Kaffee (m, Accusative).',
            options: ['nicht', 'kein', 'keinen', 'keine'],
            correctAnswer: 'keinen',
            explanation: {
              en: '"Kaffee" is a masculine direct object in the Accusative. We negate it with "keinen".',
              de: '"Kaffee" ist ein maskulines direktes Objekt im Akkusativ. Wir verneinen es mit "keinen".',
              es: '"Kaffee" es un objeto directo masculino en Acusativo. Lo negamos con "keinen".',
              fr: '"Kaffee" est un objet direct masculin à l\'accusatif. Nous le nions avec "keinen".',
            },
          },
          {
            id: 'A1_negation_q3',
            question: 'Der Kaffee ist ___ warm.',
            options: ['kein', 'keine', 'nicht', 'keinen'],
            correctAnswer: 'nicht',
            explanation: {
              en: '"warm" is an adjective. We negate adjectives using "nicht".',
              de: '"warm" ist ein Adjektiv. Wir verneinen Adjektive mit "nicht".',
              es: '"warm" (caliente) es un adjetivo. Negamos los adjetivos usando "nicht".',
              fr: '"warm" (chaud) est un adjectif. Nous nions les adjectifs avec "nicht".',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'A2',
    title: 'Elementary (A2)',
    color: '#10b981', // Emerald
    accentColor: 'rgba(16, 185, 129, 0.1)',
    description: {
      en: 'Understand expressions, talk about the past, and handle simple prepositions.',
      de: 'Verstehen Sie Ausdrücke, sprechen Sie über die Vergangenheit und beherrschen Sie einfache Präpositionen.',
      es: 'Comprende expresiones, habla sobre el pasado y maneja preposiciones sencillas.',
      fr: 'Comprenez les expressions, parlez du passé et maîtrisez les prépositions simples.',
    },
    lessons: [
      {
        id: 'A2_prepositions',
        title: {
          en: 'Two-Way Prepositions',
          de: 'Wechselpräpositionen',
          es: 'Preposiciones de Doble Vía',
          fr: 'Prépositions Mixtes',
        },
        description: {
          en: 'Learn how "in", "an", "auf" change between Dative (position) and Accusative (movement).',
          de: 'Lernen Sie, wie "in", "an", "auf" zwischen Dativ (Lage) und Akkusativ (Bewegung) wechseln.',
          es: 'Aprende cómo "in", "an", "auf" cambian entre Dativo (posición) y Acusativo (movimiento).',
          fr: 'Apprenez comment "in", "an", "auf" changent entre le Datif (position) et l\'Accusatif (mouvement).',
        },
        introduction: {
          en: 'German has nine "Wechselpräpositionen" that take the Dative case when describing a location or state of rest, and the Accusative case when describing direction or movement towards a destination.',
          de: 'Im Deutschen gibt es neun Wechselpräpositionen, die bei einer Ortsangabe (Wo?) den Dativ und bei einer Richtungsangabe (Wohin?) den Akkusativ verlangen.',
          es: 'El alemán tiene nueve preposiciones de doble vía que toman el caso Dativo cuando describen una ubicación (¿Dónde?) y el caso Acusativo cuando describen una dirección o movimiento (¿A dónde?).',
          fr: 'L\'allemand possède neuf prépositions mixtes qui prennent le Datif pour décrire un lieu (Wo ? / Où ?) et l\'Accusatif pour décrire un mouvement (Wohin ? / Vers où ?).',
        },
        rules: [
          {
            title: {
              en: 'Dative for Location (Wo?)',
              de: 'Dativ für Position (Wo?)',
              es: 'Dativo para Ubicación (Wo?)',
              fr: 'Datif pour la Position (Wo ?)',
            },
            explanation: {
              en: 'When answering "Wo?" (Where?), use the Dative case. Masculine/Neutral articles become "dem", Feminine becomes "der".',
              de: 'Bei der Frage "Wo?" verwenden wir den Dativ. Maskuline/Neutrale Artikel werden zu "dem", feminine zu "der".',
              es: 'Al responder "Wo?" (¿Dónde?), usa el caso Dativo. Los artículos masculinos y neutros cambian a "dem", y el femenino cambia a "der".',
              fr: 'Pour répondre à "Wo ?" (Où ?), utilisez le Datif. Les articles masculins/neutres deviennent "dem", le féminin devient "der".',
            },
            exampleGerman: 'Das Buch liegt auf dem Tisch.',
            exampleTranslation: {
              en: 'The book is lying on the table (static location).',
              de: 'Das Buch liegt auf dem Tisch (statische Position).',
              es: 'El libro está sobre la mesa (ubicación estática).',
              fr: 'Le livre est sur la table (position statique).',
            },
          },
          {
            title: {
              en: 'Accusative for Movement (Wohin?)',
              de: 'Akkusativ für Bewegung (Wohin?)',
              es: 'Acusativo para Movimiento (Wohin?)',
              fr: 'Accusatif pour le Mouvement (Wohin ?)',
            },
            explanation: {
              en: 'When answering "Wohin?" (Where to?), use the Accusative case. Only Masculine articles change ("den"), Feminine ("die") and Neutral ("das") stay the same.',
              de: 'Bei der Frage "Wohin?" verwenden wir den Akkusativ. Nur maskuline Artikel ändern sich ("den"), feminine ("die") und neutrale ("das") bleiben gleich.',
              es: 'Al responder "Wohin?" (¿A dónde?), usa el caso Acusativo. Solo cambian los artículos masculinos ("den"), los femeninos ("die") y neutros ("das") se quedan igual.',
              fr: 'Pour répondre à "Wohin ?" (Vers où ?), utilisez l\'Accusatif. Seul l\'article masculin change ("den"), le féminin ("die") et le neutre ("das") restent inchangés.',
            },
            exampleGerman: 'Ich lege das Buch auf den Tisch.',
            exampleTranslation: {
              en: 'I put the book on the table (action/movement).',
              de: 'Ich lege das Buch auf den Tisch (Bewegung).',
              es: 'Pongo el libro sobre la mesa (acción/movimiento).',
              fr: 'Je pose le livre sur la table (action/mouvement).',
            },
          },
        ],
        summary: {
          en: 'Memorize the nine prepositions: an, auf, hinter, in, neben, über, unter, vor, zwischen. Always ask yourself: Is it a location (Dative) or a destination (Accusative)?',
          de: 'Merken Sie sich die neun Präpositionen: an, auf, hinter, in, neben, über, unter, vor, zwischen. Fragen Sie sich immer: Handelt es sich um eine Position (Dativ) oder eine Richtung (Akkusativ)?',
          es: 'Memoriza las nueve preposiciones: an, auf, hinter, in, neben, über, unter, vor, zwischen. ¡Pregúntate siempre: ¿Es ubicación (Dat) o dirección (Acus)?',
          fr: 'Mémorisez les neuf prépositions : an, auf, hinter, in, neben, über, unter, vor, zwischen. Demandez-vous toujours : S\'agit-il d\'un lieu (Datif) ou d\'une destination (Accusatif) ?',
        },
        quiz: [
          {
            id: 'A2_prepositions_q1',
            question: 'Ich sitze auf ___ Stuhl (m, static).',
            options: ['dem', 'den', 'der', 'das'],
            correctAnswer: 'dem',
            explanation: {
              en: 'It is a static location (Wo? - "Ich sitze"). The noun "Stuhl" is masculine, so Dative masculine is "dem".',
              de: 'Es ist eine statische Position (Wo? - "Ich sitze"). Das Nomen "Stuhl" ist maskulin, daher ist der Dativ maskulin "dem".',
              es: 'Es una ubicación estática (Wo? - "Ich sitze"). El sustantivo "Stuhl" es masculino, por lo que el Dativo masculino es "dem".',
              fr: 'C\'est une position statique (Wo ? - "Ich sitze"). Le nom "Stuhl" est masculin, donc le Datif masculin est "dem".',
            },
          },
          {
            id: 'A2_prepositions_q2',
            question: 'Ich gehe in ___ Schule (f, movement).',
            options: ['dem', 'der', 'die', 'den'],
            correctAnswer: 'die',
            explanation: {
              en: 'It is a movement/destination (Wohin? - "Ich gehe"). The noun "Schule" is feminine, so Accusative feminine is "die".',
              de: 'Es ist eine Richtung/Bewegung (Wohin? - "Ich gehe"). Das Nomen "Schule" ist feminin, daher ist der Akkusativ feminin "die".',
              es: 'Es un movimiento/dirección (Wohin? - "Ich gehe"). El sustantivo "Schule" es femenino, por lo que el Acusativo femenino es "die".',
              fr: 'C\'est un mouvement/destination (Wohin ? - "Ich gehe"). Le nom "Schule" est féminin, donc l\'Accusatif féminin est "die".',
            },
          },
          {
            id: 'A2_prepositions_q3',
            question: 'Wir stellen das Sofa zwischen ___ Fenster (n, plural: die Fenster, movement).',
            options: ['die', 'den', 'der', 'dem'],
            correctAnswer: 'die',
            explanation: {
              en: 'It is movement (Wohin? - "Wir stellen"). In Accusative plural, the article is "die".',
              de: 'Es ist eine Bewegung (Wohin? - "Wir stellen"). Im Akkusativ Plural ist der Artikel "die".',
              es: 'Es movimiento (Wohin? - "Wir stellen"). En Acusativo plural, el artículo es "die".',
              fr: 'C\'est un mouvement (Wohin ? - "Wir stellen"). À l\'Accusatif pluriel, l\'article est "die".',
            },
          },
        ],
      },
      {
        id: 'A2_perfekt',
        title: {
          en: 'Perfect Tense (Perfekt)',
          de: 'Das Perfekt',
          es: 'Pretérito Perfecto (Perfekt)',
          fr: 'Le Parfait (Perfekt)',
        },
        description: {
          en: 'Talk about the past using the conversational perfect tense with "haben" or "sein".',
          de: 'Sprechen Sie über die Vergangenheit mit dem Perfekt mit "haben" oder "sein".',
          es: 'Habla sobre el pasado usando el pretérito perfecto con "haben" o "sein".',
          fr: 'Parlez du passé en utilisant le passé composé (parfait) avec "haben" ou "sein".',
        },
        introduction: {
          en: 'The Perfect tense (Perfekt) is the most common way to talk about the past in spoken German. It is formed with an auxiliary verb ("haben" or "sein" conjugated in the present tense) and the past participle (Partizip II), which goes at the very end of the clause.',
          de: 'Das Perfekt ist die häufigste Form, um im gesprochenen Deutsch über die Vergangenheit zu sprechen. Es wird mit einem Hilfsverb ("haben" oder "sein") und dem Partizip II am Satzende gebildet.',
          es: 'El perfecto es la forma más común de hablar sobre el pasado en el alemán hablado. Se forma con un verbo auxiliar ("haben" o "sein" en presente) y el participio pasado (Partizip II) al final de la oración.',
          fr: 'Le parfait est la forme la plus courante pour parler du passé à l\'oral en allemand. Il se forme avec un verbe auxiliaire ("haben" ou "sein" conjugué au présent) et le participe passé (Partizip II), placé tout à la fin.',
        },
        rules: [
          {
            title: {
              en: 'Perfekt with "haben" vs "sein"',
              de: 'Perfekt mit "haben" oder "sein"',
              es: 'Perfekt con "haben" o "sein"',
              fr: 'Parfait avec "haben" ou "sein"',
            },
            explanation: {
              en: 'Use "sein" for verbs of movement (e.g. gehen, laufen, kommen) and change of state (e.g. aufwachen, einschlafen). Use "haben" for all other verbs (transitive verbs, reflexive verbs, etc.).',
              de: 'Verwenden Sie "sein" bei Verben der Bewegung und der Zustandsänderung. Verwenden Sie "haben" für alle anderen Verben.',
              es: 'Usa "sein" para verbos de movimiento y cambio de estado. Usa "haben" para todos los demás verbos.',
              fr: 'Utilisez "sein" pour les verbes de mouvement et de changement d\'état. Utilisez "haben" pour tous les autres verbes.',
            },
            exampleGerman: 'Ich bin ins Kino gegangen. Ich habe Pizza gegessen.',
            exampleTranslation: {
              en: 'I went to the cinema. I ate pizza.',
              de: 'Ich bin ins Kino gegangen. Ich habe Pizza gegessen.',
              es: 'Fui al cine. Comí pizza.',
              fr: 'Je suis allé au cinéma. J\'ai mangé de la pizza.',
            },
          },
          {
            title: {
              en: 'Past Participle (Partizip II) Formation',
              de: 'Bildung des Partizips II',
              es: 'Formación del Participio Pasado',
              fr: 'Formation du Participe Passé',
            },
            explanation: {
              en: 'Regular verbs: ge- + verb stem + -t (machen -> gemacht). Irregular verbs: ge- + stem change + -en (sehen -> gesehen, gehen -> gegangen).',
              de: 'Regelmäßige Verben: ge- + Stamm + -t. Unregelmäßige Verben: ge- + Stammänderung + -en.',
              es: 'Verbos regulares: ge- + raíz + -t. Verbos irregulares: ge- + cambio de raíz + -en.',
              fr: 'Verbes réguliers : ge- + radical + -t. Verbes irréguliers : ge- + modification du radical + -en.',
            },
            exampleGerman: 'Er hat Deutsch gelernt und Musik gehört.',
            exampleTranslation: {
              en: 'He learned German and listened to music.',
              de: 'Er hat Deutsch gelernt und Musik gehört.',
              es: 'Él aprendió alemán y escuchó música.',
              fr: 'Il a appris l\'allemand et écouté de la musique.',
            },
          },
        ],
        summary: {
          en: 'Remember: The helping verb (haben/sein) is conjugated in position 2, and the past participle is strictly placed at the very end of the sentence!',
          de: 'Denken Sie daran: Das Hilfsverb steht konjugiert auf Position 2, und das Partizip II steht ganz am Ende des Satzes!',
          es: '¡Recuerda: El verbo auxiliar (haben/sein) se conjuga en la posición 2, y el participio pasado se coloca estrictamente al final de la oración!',
          fr: 'Rappelez-vous : Le verbe auxiliaire (haben/sein) est conjugué en position 2, et le participe passé est placé strictement tout à la fin !',
        },
        quiz: [
          {
            id: 'A2_perfekt_q1',
            question: 'Gestern ___ ich nach Berlin gefahren.',
            options: ['habe', 'bin', 'ist', 'hat'],
            correctAnswer: 'bin',
            explanation: {
              en: '"fahren" is a verb of movement, which requires the auxiliary "sein" ("ich bin").',
              de: '"fahren" ist ein Bewegungsverb, das das Hilfsverb "sein" verlangt ("ich bin").',
              es: '"fahren" (conducir/viajar) es un verbo de movimiento, por lo que requiere el auxiliar "sein" ("ich bin").',
              fr: '"fahren" est un verbe de mouvement, qui requiert l\'auxiliaire "sein" ("ich bin").',
            },
          },
          {
            id: 'A2_perfekt_q2',
            question: 'Wir haben ein schönes Haus ___ (kaufen).',
            options: ['gekaufen', 'gekauft', 'kaufen', 'gekauften'],
            correctAnswer: 'gekauft',
            explanation: {
              en: '"kaufen" is regular: ge- + kauf + -t -> "gekauft".',
              de: '"kaufen" ist regelmäßig: ge- + kauf + -t -> "gekauft".',
              es: '"kaufen" (comprar) es regular: ge- + kauf + -t -> "gekauft".',
              fr: '"kaufen" est régulier : ge- + kauf + -t -> "gekauft".',
            },
          },
          {
            id: 'A2_perfekt_q3',
            question: 'Hast du meine E-Mail ___ (lesen)?',
            options: ['gelesen', 'gelesst', 'gelest', 'lesen'],
            correctAnswer: 'gelesen',
            explanation: {
              en: '"lesen" is an irregular verb: ge- + lesen -> "gelesen".',
              de: '"lesen" ist ein unregelmäßiges Verb: ge- + lesen -> "gelesen".',
              es: '"lesen" (leer) es un verbo irregular: ge- + lesen -> "gelesen".',
              fr: '"lesen" est un verbe irrégulier : ge- + lesen -> "gelesen".',
            },
          },
        ],
      },
      {
        id: 'A2_modal_verbs',
        title: {
          en: 'Modal Verbs (Modalverben)',
          de: 'Die Modalverben',
          es: 'Verbos Modales (Modalverben)',
          fr: 'Les Verbes Modaux (Modalverben)',
        },
        description: {
          en: 'Express ability, permission, obligation, and desire using German modal verbs.',
          de: 'Drücken Sie Fähigkeit, Erlaubnis, Pflicht und Wunsch mit Modalverben aus.',
          es: 'Expresa habilidad, permiso, obligación y deseo usando los verbos modales alemanes.',
          fr: 'Exprimez la capacité, la permission, l\'obligation et le désir avec les verbes modaux.',
        },
        introduction: {
          en: 'German has six modal verbs: "können" (can/ability), "müssen" (must/necessity), "dürfen" (may/permission), "sollen" (should/advice), "wollen" (want/strong intention), and "mögen" (to like). In a sentence, the modal verb is conjugated and placed in position 2, while the main verb goes to the very end in its infinitive form.',
          de: 'Es gibt sechs Modalverben: können, müssen, dürfen, sollen, wollen und mögen. Das Modalverb steht konjugiert auf Position 2, das Vollverb im Infinitiv am Satzende.',
          es: 'El alemán tiene seis verbos modales: "können" (poder/habilidad), "müssen" (deber/necesidad), "dürfen" (poder/permiso), "sollen" (deber/consejo), "wollen" (querer) y "mögen" (gustar). El verbo modal se conjuga en la posición 2, y el verbo principal va al final en infinitivo.',
          fr: 'L\'allemand compte six verbes modaux : "können" (pouvoir/capacité), "müssen" (devoir/nécessité), "dürfen" (pouvoir/permission), "sollen" (devoir/conseil), "wollen" (vouloir) et "mögen" (aimer). Le verbe modal est conjugué en position 2, et le verbe principal va tout à la fin à l\'infinitif.',
        },
        rules: [
          {
            title: {
              en: 'Conjugation Patterns & Stem Change',
              de: 'Konjugation & Stammwechsel',
              es: 'Patrones de Conjugación y Cambio de Raíz',
              fr: 'Modèles de Conjugaison & Changement de Radical',
            },
            explanation: {
              en: 'Most modal verbs change their vowel in the singular (e.g., ich kann, du kannst, er kann) and have identical forms for the first (ich) and third person singular (er/sie/es) without any ending.',
              de: 'Die meisten Modalverben wechseln im Singular den Vokal (z. B. ich kann, er kann). Die 1. und 3. Person Singular haben keine Endung und sind identisch.',
              es: 'La mayoría de los verbos modales cambian su vocal en singular (p. ej., ich kann, er kann). La primera y tercera persona del singular son idénticas y no tienen terminación.',
              fr: 'La plupart des verbes modaux changent de voyelle au singulier (ex : ich kann, er kann). La 1ère et la 3e personne du singulier sont identiques et n\'ont pas de terminaison.',
            },
            exampleGerman: 'Ich kann gut Deutsch sprechen, aber ich muss noch lernen.',
            exampleTranslation: {
              en: 'I can speak German well, but I still have to learn.',
              de: 'Ich kann gut Deutsch sprechen, aber ich muss noch lernen.',
              es: 'Puedo hablar alemán bien, pero todavía tengo que estudiar.',
              fr: 'Je peux bien parler allemand, mais je dois encore étudier.',
            },
          },
        ],
        summary: {
          en: 'Remember the word order: Conjugated Modal Verb in Position 2 + Infinitive at the very end!',
          de: 'Denken Sie an die Wortstellung: Konjugiertes Modalverb auf Position 2 + Infinitiv ganz am Ende!',
          es: '¡Recuerda el orden de las palabras: Verbo modal conjugado en Posición 2 + Infinitivo al final!',
          fr: 'Rappelez-vous l\'ordre des mots : Verbe modal conjugué en position 2 + infinitif tout à la fin !',
        },
        quiz: [
          {
            id: 'A2_modal_verbs_q1',
            question: 'Hier ___ man nicht parken. Es ist verboten!',
            options: ['muss', 'darf', 'kann', 'soll'],
            correctAnswer: 'darf',
            explanation: {
              en: '"dürfen" is used for permission or prohibition. "nicht dürfen" means "must not / not allowed to".',
              de: '"dürfen" steht für Erlaubnis oder Verbot. "nicht dürfen" bedeutet "nicht erlaubt sein".',
              es: '"dürfen" se usa para permiso o prohibición. "nicht dürfen" significa "no estar permitido".',
              fr: '"dürfen" est utilisé pour la permission ou l\'interdiction. "nicht dürfen" signifie "ne pas avoir le droit de".',
            },
          },
          {
            id: 'A2_modal_verbs_q2',
            question: 'Ich ___ morgen früh aufstehen, weil ich arbeiten muss.',
            options: ['will', 'kann', 'muss', 'mag'],
            correctAnswer: 'muss',
            explanation: {
              en: 'Since there is a necessity (work), we use "müssen" -> "muss".',
              de: 'Da es eine Notwendigkeit gibt (Arbeit), verwenden wir "müssen" -> "muss".',
              es: 'Como hay una necesidad (trabajo), usamos "müssen" -> "muss".',
              fr: 'Puisqu\'il y a une nécessité (travail), on utilise "müssen" -> "muss".',
            },
          },
          {
            id: 'A2_modal_verbs_q3',
            question: '___ du mir bitte helfen?',
            options: ['Kannst', 'Musst', 'Darfst', 'Sollst'],
            correctAnswer: 'Kannst',
            explanation: {
              en: 'We ask for ability or a polite request using "können" -> "kannst".',
              de: 'Wir fragen nach Hilfe mit "können" -> "kannst".',
              es: 'Pedimos ayuda de forma educada usando "können" -> "kannst".',
              fr: 'On demande de l\'aide poliment avec "können" -> "kannst".',
            },
          },
        ],
      },
      {
        id: 'A2_dative',
        title: {
          en: 'Dative Case (Dativ)',
          de: 'Der Dativ',
          es: 'El Caso Dativo (Objeto Indirecto)',
          fr: 'Le Cas Datif',
        },
        description: {
          en: 'Learn to use the Dative case for indirect objects and after specific verbs/prepositions.',
          de: 'Lernen Sie den Dativ für indirekte Objekte und nach bestimmten Verben/Präpositionen zu nutzen.',
          es: 'Aprende a usar el caso Dativo para objetos indirectos y después de verbos/preposiciones específicos.',
          fr: 'Apprenez à utiliser le Datif pour les objets indirects et après certains verbes/prépositions.',
        },
        introduction: {
          en: 'The Dative case is primarily used for the indirect object—usually the person receiving the direct object. Articles change as follows: Masculine/Neuter "der/das" become "dem", Feminine "die" becomes "der", and Plural "die" becomes "den" (with an "-n" added to the plural noun).',
          de: 'Der Dativ wird meist für das indirekte Objekt verwendet. Maskulin/Neutral wird zu "dem", Feminin zu "der", Plural zu "den" (+ N-Endung am Nomen).',
          es: 'El caso Dativo se usa principalmente para el objeto indirecto. El masculino/neutro cambia a "dem", el femenino a "der" y el plural a "den" (añadiendo "-n" al sustantivo en plural).',
          fr: 'Le Datif est principalement utilisé pour l\'objet indirect. Le masculin/neutre devient "dem", le féminin devient "der" et le pluriel devient "den" (+ terminaison en "-n" sur le nom).',
        },
        rules: [
          {
            title: {
              en: 'Dative Article Changes',
              de: 'Dativ-Artikeländerungen',
              es: 'Cambios de los Artículos en Dativo',
              fr: 'Changements des Articles au Datif',
            },
            explanation: {
              en: 'Nominative -> Dative: der Mann -> dem Mann; die Frau -> der Frau; das Kind -> dem Kind; die Kinder -> den Kindern.',
              de: 'Nominativ -> Dativ: der Mann -> dem Mann; die Frau -> der Frau; das Kind -> dem Kind; die Kinder -> den Kindern.',
              es: 'Nominativo -> Dativo: der Mann -> dem Mann; die Frau -> der Frau; das Kind -> dem Kind; die Kinder -> den Kindern.',
              fr: 'Nominatif -> Datif : der Mann -> dem Mann ; die Frau -> der Frau ; das Kind -> dem Kind ; die Kinder -> den Kindern.',
            },
            exampleGerman: 'Ich gebe dem Mann (m) ein Buch.',
            exampleTranslation: {
              en: 'I give the man a book (the man is the indirect object).',
              de: 'Ich gebe dem Mann ein Buch.',
              es: 'Le doy un libro al hombre.',
              fr: 'Je donne un livre à l\'homme.',
            },
          },
          {
            title: {
              en: 'Dative Verbs',
              de: 'Dativ-Verben',
              es: 'Verbos que Rigen Dativo',
              fr: 'Verbes qui demandent le Datif',
            },
            explanation: {
              en: 'Some common verbs always trigger the Dative case, even if there is only one object. Examples: helfen (to help), danken (to thank), gefallen (to please), gehören (to belong to).',
              de: 'Einige häufige Verben verlangen immer den Dativ, z. B. helfen, danken, gefallen, gehören.',
              es: 'Algunos verbos comunes siempre rigen el caso Dativo, p. ej., helfen, danken, gefallen, gehören.',
              fr: 'Certains verbes courants exigent toujours le Datif, ex : helfen, danken, gefallen, gehören.',
            },
            exampleGerman: 'Ich helfe der Frau (f). Das Auto gehört dem Vater (m).',
            exampleTranslation: {
              en: 'I help the woman. The car belongs to the father.',
              de: 'Ich helfe der Frau. Das Auto gehört dem Vater.',
              es: 'Ayudo a la mujer. El coche pertenece al padre.',
              fr: 'J\'aide la femme. La voiture appartient au père.',
            },
          },
        ],
        summary: {
          en: 'Think Dative when expressing "to whom" something is given or done, and memorize the key Dative-only verbs!',
          de: 'Denken Sie an den Dativ bei der Frage "Wem?" etwas gegeben oder getan wird, und lernen Sie die Dativ-Verben auswendig!',
          es: '¡Piensa en Dativo cuando expreses "a quién" se le da o se le hace algo, y memoriza los verbos de Dativo!',
          fr: 'Pensez au Datif pour répondre à la question "à qui" quelque chose est donné ou fait, et mémorisez les verbes qui demandent le Datif !',
        },
        quiz: [
          {
            id: 'A2_dative_q1',
            question: 'Das schmeckt ___ Kind (n) sehr gut.',
            options: ['dem', 'den', 'das', 'der'],
            correctAnswer: 'dem',
            explanation: {
              en: '"schmecken" is a Dative verb. Neuter "das Kind" becomes "dem Kind" in Dative.',
              de: '"schmecken" verlangt den Dativ. Neutral "das Kind" wird zu "dem Kind" im Dativ.',
              es: '"schmecken" (gustar la comida) rige Dativo. El neutro "das Kind" cambia a "dem Kind" en Dativo.',
              fr: '"schmecken" demande le Datif. Le neutre "das Kind" devient "dem Kind" au Datif.',
            },
          },
          {
            id: 'A2_dative_q2',
            question: 'Ich danke ___ Lehrerin (f).',
            options: ['dem', 'die', 'der', 'den'],
            correctAnswer: 'der',
            explanation: {
              en: '"danken" is a Dative verb. Feminine "die Lehrerin" becomes "der Lehrerin".',
              de: '"danken" verlangt den Dativ. Feminin "die Lehrerin" wird zu "der Lehrerin".',
              es: '"danken" (agradecer) rige Dativo. El femenino "die Lehrerin" cambia a "der Lehrerin" en Dativo.',
              fr: '"danken" demande le Datif. Le féminin "die Lehrerin" devient "der Lehrerin".',
            },
          },
          {
            id: 'A2_dative_q3',
            question: 'Sie hilft ___ Kindern (pl).',
            options: ['die', 'den', 'der', 'dem'],
            correctAnswer: 'den',
            explanation: {
              en: '"helfen" is a Dative verb. Plural "die Kinder" becomes "den Kindern".',
              de: '"helfen" verlangt den Dativ. Plural "die Kinder" wird zu "den Kindern".',
              es: '"helfen" (ayudar) rige Dativo. El plural "die Kinder" cambia a "den Kindern".',
              fr: '"helfen" demande le Datif. Le pluriel "die Kinder" devient "den Kindern".',
            },
          },
        ],
      },
      {
        id: 'A2_comparative',
        title: {
          en: 'Comparative & Superlative',
          de: 'Komparativ & Superlativ',
          es: 'Comparativo y Superlativo',
          fr: 'Comparatif & Superlatif',
        },
        description: {
          en: 'Compare nouns and express the highest degree using endings and irregular forms.',
          de: 'Vergleichen Sie Nomen und drücken Sie den höchsten Grad aus.',
          es: 'Compara sustantivos y expresa el grado máximo usando terminaciones y formas irregulares.',
          fr: 'Comparez les noms et exprimez le degré supérieur à l\'aide des terminaisons et des formes irrégulières.',
        },
        introduction: {
          en: 'To compare things in German, we add "-er" to the adjective for the comparative (e.g. schnell -> schneller) and use "als" (than). For the superlative, we use "am" + adjective + "-sten" (e.g. am schnellsten). Many short adjectives get an umlaut (e.g. groß -> größer -> am größten).',
          de: 'Für den Vergleich hängen wir "-er" an das Adjektiv (Komparativ) und verwenden "als". Für den Superlativ verwenden wir "am" + "-sten". Viele kurze Adjektive bekommen einen Umlaut.',
          es: 'Para comparar en alemán, añadimos "-er" al adjetivo en el comparativo y usamos "als" (que). Para el superlativo, usamos "am" + adjetivo + "-sten". Muchos adjetivos cortos añaden un umlaut.',
          fr: 'Pour comparer en allemand, on ajoute "-er" à l\'adjectif au comparatif et on utilise "als" (que). Pour le superlatif, on utilise "am" + adjectif + "-sten". Beaucoup d\'adjectifs courts prennent un tréma.',
        },
        rules: [
          {
            title: {
              en: 'Comparative with "als"',
              de: 'Komparativ mit "als"',
              es: 'Comparativo con "als"',
              fr: 'Comparatif avec "als"',
            },
            explanation: {
              en: 'Form: Adjective + -er ... als. E.g., Peter ist größer als Paul.',
              de: 'Form: Adjektiv + -er ... als. Z. B., Peter ist größer als Paul.',
              es: 'Forma: Adjetivo + -er ... als. P. ej., Peter ist größer als Paul.',
              fr: 'Forme : Adjectif + -er ... als. Ex : Peter ist größer als Paul.',
            },
            exampleGerman: 'Mein Auto ist schneller als dein Fahrrad.',
            exampleTranslation: {
              en: 'My car is faster than your bicycle.',
              de: 'Mein Auto ist schneller als dein Fahrrad.',
              es: 'Mi coche es más rápido que tu bicicleta.',
              fr: 'Ma voiture est plus rapide que ton vélo.',
            },
          },
          {
            title: {
              en: 'Irregular Comparisons',
              de: 'Unregelmäßige Steigerung',
              es: 'Comparaciones Irregulares',
              fr: 'Comparatifs Irréguliers',
            },
            explanation: {
              en: 'Some adjectives have irregular comparisons: gut -> besser -> am besten (good/better/best); viel -> mehr -> am meisten (much/more/most); gern -> lieber -> am liebsten (gladly/prefer/favorite).',
              de: 'Manche Adjektive sind unregelmäßig: gut -> besser -> am besten; viel -> mehr -> am meisten; gern -> lieber -> am liebsten.',
              es: 'Algunos adjetivos tienen formas irregulares: gut -> besser -> am besten; viel -> mehr -> am meisten; gern -> lieber -> am liebsten.',
              fr: 'Certains adjectifs ont des formes irrégulières : gut -> besser -> am besten ; viel -> mehr -> am meisten ; gern -> lieber -> am liebsten.',
            },
            exampleGerman: 'Ich trinke gern Tee, aber Kaffee trinke ich lieber.',
            exampleTranslation: {
              en: 'I like drinking tea, but I prefer coffee.',
              de: 'Ich trinke gern Tee, aber Kaffee trinke ich lieber.',
              es: 'Me gusta tomar té, pero prefiero tomar café.',
              fr: 'J\'aime boire du thé, mais je préfère le café.',
            },
          },
        ],
        summary: {
          en: 'Use "-er + als" to compare two things, and "am ... -sten" for the superlative. Watch out for stem vowel umlauts on short adjectives!',
          de: 'Verwenden Sie "-er + als" für den Vergleich und "am ... -sten" für den Superlativ. Achten Sie auf Umlaute bei kurzen Adjektiven!',
          es: '¡Usa "-er + als" para comparar dos cosas, y "am ... -sten" para el superlativo. ¡Cuidado con los umlauts en adjetivos cortos!',
          fr: 'Utilisez "-er + als" pour comparer deux choses, et "am ... -sten" pour le superlatif. Attention aux trémas sur les adjectifs courts !',
        },
        quiz: [
          {
            id: 'A2_comparative_q1',
            question: 'Mein Bruder ist älter ___ ich.',
            options: ['wie', 'als', 'so', 'denn'],
            correctAnswer: 'als',
            explanation: {
              en: 'In comparisons of inequality, we always use "als" (than) after the comparative adjective.',
              de: 'Bei ungleichen Vergleichen verwenden wir immer "als" nach dem Komparativ.',
              es: 'En comparativos de desigualdad, siempre usamos "als" (que) después del adjetivo comparativo.',
              fr: 'Dans les comparaisons d\'inégalité, on utilise toujours "als" (que) après l\'adjectif au comparatif.',
            },
          },
          {
            id: 'A2_comparative_q2',
            question: 'Deutsch finde ich gut, aber Spanisch finde ich ___ (favorite).',
            options: ['besser', 'lieber', 'am besten', 'mehr'],
            correctAnswer: 'besser',
            explanation: {
              en: 'The comparative of "gut" (good) is "besser" (better).',
              de: 'Der Komparativ von "gut" ist "besser".',
              es: 'El comparativo de "gut" (bueno) es "besser" (mejor).',
              fr: 'Le comparatif de "gut" (bon) est "besser" (meilleur).',
            },
          },
          {
            id: 'A2_comparative_q3',
            question: 'Dieses Buch gefällt mir am ___ (viel).',
            options: ['meisten', 'mehr', 'besten', 'meiste'],
            correctAnswer: 'meisten',
            explanation: {
              en: 'The superlative of "viel" (much) is "am meisten" (most).',
              de: 'Der Superlativ von "viel" ist "am meisten".',
              es: 'El superlativo de "viel" (mucho) es "am meisten" (lo que más).',
              fr: 'Le superlatif de "viel" (beaucoup) est "am meisten" (le plus).',
            },
          },
        ],
      },
      {
        id: 'A2_reflexive',
        title: {
          en: 'Reflexive Verbs',
          de: 'Reflexivverben',
          es: 'Verbos Reflexivos',
          fr: 'Les Verbes Réfléchis',
        },
        description: {
          en: 'Learn to use reflexive pronouns like "mich", "dich", "sich" with reflexive verbs.',
          de: 'Lernen Sie Reflexivpronomen wie "mich", "dich", "sich" mit Reflexivverben zu verwenden.',
          es: 'Aprende a usar los pronombres reflexivos como "mich", "dich", "sich" con verbos reflexivos.',
          fr: 'Apprenez à utiliser les pronoms réfléchis comme "mich", "dich", "sich" avec les verbes réfléchis.',
        },
        introduction: {
          en: 'Some German verbs require a reflexive pronoun that refers back to the subject (e.g. "sich freuen" - to look forward to / be happy). The pronoun changes depending on the subject: ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich.',
          de: 'Manche Verben benötigen ein Reflexivpronomen, das sich auf das Subjekt bezieht. Die Pronomen sind: ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich.',
          es: 'Algunos verbos en alemán requieren un pronombre reflexivo que se refiere al sujeto. Los pronombres son: ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich.',
          fr: 'Certains verbes allemands nécessitent un pronom réfléchi qui renvoie au sujet. Les pronoms sont : ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich.',
        },
        rules: [
          {
            title: {
              en: 'Reflexive Pronouns (Accusative)',
              de: 'Reflexivpronomen (Akkusativ)',
              es: 'Pronombres Reflexivos (Acusativo)',
              fr: 'Pronoms Réfléchis (Accusatif)',
            },
            explanation: {
              en: 'Most reflexive verbs take the pronoun in the Accusative case: ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich.',
              de: 'Die meisten reflexiven Verben verlangen das Pronomen im Akkusativ: ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich.',
              es: 'La mayoría de los verbos reflexivos toman el pronombre en caso Acusativo: ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich.',
              fr: 'La plupart des verbes réfléchis prennent le pronom à l\'accusatif : ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich.',
            },
            exampleGerman: 'Ich freue mich auf das Wochenende. Wie fühlst du dich?',
            exampleTranslation: {
              en: 'I am looking forward to the weekend. How do you feel?',
              de: 'Ich freue mich auf das Wochenende. Wie fühlst du dich?',
              es: 'Me alegro por el fin de semana. ¿Cómo te sientes?',
              fr: 'Je me réjouis du week-end. Comment te sens-tu ?',
            },
          },
        ],
        summary: {
          en: 'Memorize the reflexive pronoun endings! Note that the 3rd person singular and plural (er/sie/es, sie/Sie) is always "sich".',
          de: 'Lernen Sie die Reflexivpronomen auswendig! Beachten Sie, dass die 3. Person (Singular und Plural) immer "sich" heißt.',
          es: '¡Memoriza los pronombres reflexivos! Ten en cuenta que la tercera persona (singular y plural) siempre es "sich".',
          fr: 'Mémorisez les pronoms réfléchis ! Notez que pour la 3e personne (singulier et pluriel), le pronom est toujours "sich".',
        },
        quiz: [
          {
            id: 'A2_reflexive_q1',
            question: 'Ich wasche ___ die Hände.',
            options: ['mich', 'mir', 'sich', 'uns'],
            correctAnswer: 'mir',
            explanation: {
              en: 'When there is a direct object ("die Hände"), the reflexive pronoun is in the Dative case -> "ich mir".',
              de: 'Wenn ein direktes Objekt vorliegt ("die Hände"), steht das Reflexivpronomen im Dativ -> "ich mir".',
              es: 'Cuando hay un objeto directo ("die Hände"), el pronombre reflexivo va en Dativo -> "ich mir".',
              fr: 'Lorsqu\'il y a un objet direct ("die Hände"), le pronom réfléchi se met au Datif -> "ich mir".',
            },
          },
          {
            id: 'A2_reflexive_q2',
            question: 'Wir freuen ___ auf den Urlaub.',
            options: ['uns', 'euch', 'sich', 'mich'],
            correctAnswer: 'uns',
            explanation: {
              en: 'The subject "wir" matches the reflexive pronoun "uns".',
              de: 'Das Subjekt "wir" passt zum Reflexivpronomen "uns".',
              es: 'El sujeto "wir" (nosotros) coincide con el pronombre reflexivo "uns".',
              fr: 'Le sujet "wir" correspond au pronom réfléchi "uns".',
            },
          },
          {
            id: 'A2_reflexive_q3',
            question: 'Er zieht ___ jeden Morgen schnell an.',
            options: ['sich', 'mich', 'dich', 'uns'],
            correctAnswer: 'sich',
            explanation: {
              en: 'The subject "er" (he) requires the reflexive pronoun "sich" for third-person singular.',
              de: 'Das Subjekt "er" erfordert das Reflexivpronomen "sich" für die dritte Person Singular.',
              es: 'El sujeto "er" (él) requiere el pronombre reflexivo "sich" para la tercera persona singular.',
              fr: 'Le sujet "er" (il) nécessite le pronom réfléchi "sich" pour la troisième personne singulier.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'B1',
    title: 'Intermediate (B1)',
    color: '#4f46e5', // Indigo
    accentColor: 'rgba(79, 70, 229, 0.1)',
    description: {
      en: 'Conjugate subordinate clauses, express relative situations, and talk about conditions.',
      de: 'Verbinden Sie Nebensätze, drücken Sie relative Beziehungen aus und sprechen Sie über Bedingungen.',
      es: 'Conjuga oraciones subordinadas, expresa situaciones relativas y habla de condiciones.',
      fr: 'Conjuguez les propositions subordonnées, exprimez des relations relatives et parlez de conditions.',
    },
    lessons: [
      {
        id: 'B1_subordination',
        title: {
          en: 'Subordinate Clauses ("weil", "dass")',
          de: 'Nebensätze mit "weil", "dass"',
          es: 'Oraciones Subordinadas ("weil", "dass")',
          fr: 'Propositions Subordonnées ("weil", "dass")',
        },
        description: {
          en: 'Master verb kick rules! Understand why verbs move to the very end of subordinate clauses.',
          de: 'Meistern Sie den Verbletztsatz! Verstehen Sie, warum Verben ans Satzende wandern.',
          es: '¡Domina la regla del verbo al final! Entiende por qué los verbos se mueven al final de la subordinada.',
          fr: 'Maîtrisez la règle du verbe à la fin ! Comprenez pourquoi les verbes se déplacent à la toute fin.',
        },
        introduction: {
          en: 'In German subordinate clauses, the conjugated verb is sent to the very end of the sentence. Standard subordinating conjunctions include "weil" (because), "dass" (that), and "wenn" (if/when).',
          de: 'In deutschen Nebensätzen wandert das konjugierte Verb ganz ans Ende des Satzes. Häufige unterordnende Konjunktionen sind "weil" (weil), "dass" (dass) und "wenn" (wenn).',
          es: 'En las oraciones subordinadas alemanas, el verbo conjugado se envía al final de la oración. Las conjunciones subordinantes estándar incluyen "weil" (porque), "dass" (que) y "wenn" (si/cuando).',
          fr: 'Dans les propositions subordonnées allemandes, le verbe conjugué est renvoyé à la toute fin de la phrase. Les conjonctions de subordination courantes incluent "weil" (parce que), "dass" (que) et "wenn" (si/quand).',
        },
        rules: [
          {
            title: {
              en: 'The Verb Kick Rule',
              de: 'Die Verbletzt-Regel',
              es: 'Regla del Verbo al Final',
              fr: 'La Règle du Verbe à la Fin',
            },
            explanation: {
              en: 'In a subordinate clause, the conjugated verb must be the absolute final word, placed immediately before the period or comma.',
              de: 'In einem Nebensatz muss das konjugierte Verb das absolut letzte Wort sein, direkt vor dem Punkt oder Komma.',
              es: 'En una oración subordinada, el verbo conjugado debe ser la última palabra absoluta, inmediatamente antes del punto o la coma.',
              fr: 'Dans une proposition subordonnée, le verbe conjugué doit être le tout dernier mot, placé immédiatement avant le point ou la virgule.',
            },
            exampleGerman: 'Ich bleibe zu Hause, weil ich krank bin.',
            exampleTranslation: {
              en: 'I am staying at home because I am sick (verb "bin" is at the end).',
              de: 'Ich bleibe zu Hause, weil ich krank bin.',
              es: 'Me quedo en casa porque estoy enfermo (el verbo "bin" está al final).',
              fr: 'Je reste à la maison parce que je suis malade (le verbe "bin" est à la fin).',
            },
          },
          {
            title: {
              en: 'Subordinating with "dass"',
              de: 'Nebensätze mit "dass"',
              es: 'Subordinación con "dass"',
              fr: 'Subordination avec "dass"',
            },
            explanation: {
              en: 'Use "dass" to report facts or opinions. Same rule applies: conjugated verb goes to the end.',
              de: 'Verwenden Sie "dass", um Fakten oder Meinungen auszudrücken. Es gilt dieselbe Regel: Das konjugierte Verb steht am Ende.',
              es: 'Usa "dass" (que) para reportar hechos u opiniones. Se aplica la misma regla: el verbo conjugado va al final.',
              fr: 'Utilisez "dass" (que) pour rapporter des faits ou des opinions. La même règle s\'applique : le verbe conjugué va à la fin.',
            },
            exampleGerman: 'Ich weiß, dass du Deutsch lernst.',
            exampleTranslation: {
              en: 'I know that you are learning German (verb "lernst" is at the end).',
              de: 'Ich weiß, dass du Deutsch lernst.',
              es: 'Sé que tú aprendes alemán (el verbo "lernst" está al final).',
              fr: 'Je sais que tu apprends l\'allemand (le verbe "lernst" est à la fin).',
            },
          },
        ],
        summary: {
          en: 'Always separate your main clause and subordinate clause with a comma! The subordinating conjunction acts as a trigger to kick the conjugated verb to the end.',
          de: 'Trennen Sie Haupt- und Nebensatz immer durch ein Komma! Die unterordnende Konjunktion sorgt dafür, dass das konjugierte Verb ans Ende geschoben wird.',
          es: '¡Separa siempre tu oración principal de la subordinada con una coma! La conjunción subordinante actúa como un gatillo para enviar el verbo conjugado al final.',
          fr: 'Séparez toujours votre proposition principale et votre proposition subordonnée par une virgule ! La conjonction de subordination agit comme un déclencheur pour renvoyer le verbe conjugué à la fin.',
        },
        quiz: [
          {
            id: 'B1_subordination_q1',
            question: 'Ich kann nicht kommen, weil ich keine Zeit ___.',
            options: ['habe', 'habe ich', 'bin', 'haben'],
            correctAnswer: 'habe',
            explanation: {
              en: '"weil" triggers the verb kick. "ich" takes the conjugated verb "habe" at the absolute end.',
              de: '"weil" leitet einen Nebensatz ein. "ich" verlangt das konjugierte Verb "habe" am absoluten Ende.',
              es: '"weil" activa el verbo al final. "ich" toma el verbo conjugado "habe" en la posición final absoluta.',
              fr: '"weil" déclenche le verbe à la fin. "ich" prend le verbe conjugué "habe" à la toute fin.',
            },
          },
          {
            id: 'B1_subordination_q2',
            question: 'Sie sagt, dass sie morgen ___ (wird kommen / kommt).',
            options: ['kommt', 'kommt sie', 'wird kommen', 'kommen'],
            correctAnswer: 'kommt',
            explanation: {
              en: 'For simple present, "kommt" goes to the very end of the subordinate clause introduced by "dass".',
              de: 'Für das einfache Präsens steht "kommt" am absoluten Ende des mit "dass" eingeleiteten Nebensatzes.',
              es: 'Para el presente simple, "kommt" va al final de la oración subordinada introducida por "dass".',
              fr: 'Pour le présent simple, "kommt" va à la toute fin de la proposition subordonnée introduite par "dass".',
            },
          },
        ],
      },
      {
        id: 'B1_konjunktiv_ii',
        title: {
          en: 'Subjunctive II (Konjunktiv II)',
          de: 'Der Konjunktiv II',
          es: 'Subjuntivo II (Konjunktiv II)',
          fr: 'Le Subjonctif II (Konjunktiv II)',
        },
        description: {
          en: 'Express dreams, hypothetical wishes, and polite requests.',
          de: 'Drücken Sie Träume, hypothetische Wünsche und höfliche Bitten aus.',
          es: 'Expresa sueños, deseos hipotéticos y peticiones amables.',
          fr: 'Exprimez des rêves, des souhaits hypothétiques et des demandes polies.',
        },
        introduction: {
          en: 'Subjunctive II (Konjunktiv II) is used to describe hypothetical scenarios, dreams, wishes, and polite requests. It is commonly formed using the auxiliary "würde" + infinitive at the end of the clause, or with irregular forms for common verbs like "sein" (wäre) and "haben" (hätte).',
          de: 'Der Konjunktiv II wird für hypothetische Szenarien, Wünsche, Träume und höfliche Bitten verwendet. Meist wird er mit "würde" + Infinitiv am Satzende oder mit den Formen "wäre" und "hätte" gebildet.',
          es: 'El Subjuntivo II se usa para escenarios hipotéticos, deseos, sueños y peticiones amables. Se forma comúnmente con "würde" + infinitivo al final, o con formas irregulares como "wäre" y "hätte".',
          fr: 'Le Subjonctif II est utilisé pour décrire des scénarios hypothétiques, des désirs, des rêves et des demandes polies. Il est généralement formé avec "würde" + infinitif à la fin, ou avec des formes irrégulières comme "wäre" et "hätte".',
        },
        rules: [
          {
            title: {
              en: 'Würde + Infinitive',
              de: 'Würde + Infinitiv',
              es: 'Würde + Infinitivo',
              fr: 'Würde + Infinitif',
            },
            explanation: {
              en: 'For most verbs, combine the conjugated form of "werden" in Konjunktiv II ("würde, würdest, würde, würden, würdet, würden") with the infinitive at the very end.',
              de: 'Für die meisten Verben kombinieren Sie die konjugierte Form von "würde" mit dem Infinitiv ganz am Satzende.',
              es: 'Para la mayoría de los verbos, combina la forma conjugada de "würde" con el infinitivo al final de la oración.',
              fr: 'Pour la plupart des verbes, combinez la forme conjuguée de "würde" avec l\'infinitif tout à la fin.',
            },
            exampleGerman: 'Ich würde ein neues Auto kaufen, wenn ich Geld hätte.',
            exampleTranslation: {
              en: 'I would buy a new car if I had money.',
              de: 'Ich würde ein neues Auto kaufen, wenn ich Geld hätte.',
              es: 'Compraría un coche nuevo si tuviera dinero.',
              fr: 'J\'achèterais une nouvelle voiture si j\'avais de l\'argent.',
            },
          },
          {
            title: {
              en: 'Haben & Sein in Konjunktiv II',
              de: 'Haben & Sein im Konjunktiv II',
              es: 'Haben y Sein en Subjuntivo II',
              fr: 'Avoir & Être au Subjonctif II',
            },
            explanation: {
              en: 'Do not use "würde" with "haben" and "sein". Instead, use their direct Subjunctive forms: "haben" becomes "hätte" (would have) and "sein" becomes "wäre" (would be).',
              de: 'Nutzen Sie "würde" nicht mit "haben" und "sein". Verwenden Sie stattdessen die Formen "hätte" (hätte) und "wäre" (wäre).',
              es: 'No uses "würde" con "haben" y "sein". En su lugar, usa sus formas directas: "haben" cambia a "hätte" (tendría/hubiese) y "sein" cambia a "wäre" (sería/fuese).',
              fr: 'N\'utilisez pas "würde" avec "haben" et "sein". Utilisez plutôt leurs formes directes au subjonctif : "haben" devient "hätte" et "sein" devient "wäre".',
            },
            exampleGerman: 'Ich wäre gern reich und ich hätte gern ein Haus.',
            exampleTranslation: {
              en: 'I would like to be rich and I would like to have a house.',
              de: 'Ich wäre gern reich und ich hätte gern ein Haus.',
              es: 'Me gustaría ser rico y me gustaría tener una casa.',
              fr: 'J\'aimerais être riche et j\'aimerais avoir une maison.',
            },
          },
        ],
        summary: {
          en: 'Use "wäre" and "hätte" directly for being and having. For other verbs, use "würde + infinitive" at the end of the sentence to express hypothetical thoughts or polite requests.',
          de: 'Verwenden Sie "wäre" und "hätte" direkt. Für andere Verben nutzen Sie "würde + Infinitiv" am Satzende für Wünsche und höfliche Bitten.',
          es: 'Usa "wäre" y "hätte" directamente para ser/estar y tener. Para otros verbos, usa "würde + infinitivo" al final de la oración para expresar hipótesis o cortesía.',
          fr: 'Utilisez directement "wäre" et "hätte" pour être et avoir. Pour les autres verbes, utilisez "würde + infinitif" à la fin de la phrase pour exprimer des hypothèses ou de la politesse.',
        },
        quiz: [
          {
            id: 'B1_konjunktiv_ii_q1',
            question: 'Wenn ich Zeit hätte, ___ ich Deutsch lernen.',
            options: ['werde', 'würde', 'wäre', 'hätte'],
            correctAnswer: 'würde',
            explanation: {
              en: '"lernen" is a regular main verb, so we use "würde" combined with the infinitive at the end.',
              de: '"lernen" ist ein normales Vollverb, daher verwenden wir "würde" in Kombination mit dem Infinitiv.',
              es: '"lernen" es un verbo principal regular, por lo que usamos "würde" combinado con el infinitivo al final.',
              fr: '"lernen" est un verbe principal régulier, nous utilisons donc "würde" combiné avec l\'infinitif à la fin.',
            },
          },
          {
            id: 'B1_konjunktiv_ii_q2',
            question: 'Ich ___ gern im Urlaub (from "sein").',
            options: ['wäre', 'hätte', 'würde', 'bin'],
            correctAnswer: 'wäre',
            explanation: {
              en: 'To express "would be", we use the subjunctive form "wäre".',
              de: 'Um "würde sein" auszudrücken, verwenden wir die Konjunktiv-II-Form "wäre".',
              es: 'Para expresar "desearía estar/sería", usamos la forma de subjuntivo "wäre".',
              fr: 'Pour exprimer le fait d\'être (conditionnel), nous utilisons la forme du subjonctif "wäre".',
            },
          },
          {
            id: 'B1_konjunktiv_ii_q3',
            question: '___ Sie mir bitte helfen? (polite request)',
            options: ['Hätten', 'Wären', 'Würden', 'Werden'],
            correctAnswer: 'Würden',
            explanation: {
              en: 'For polite requests, "würden" + subject + infinitive is the standard structure (Würden Sie helfen?).',
              de: 'Für höfliche Bitten ist "würden" + Infinitiv der Standard (Würden Sie helfen?).',
              es: 'Para peticiones amables, "würden" + sujeto + infinitivo es la estructura estándar (¿Podría ayudarme?).',
              fr: 'Pour les demandes polies, "würden" + sujet + infinitif est la structure standard (Voudriez-vous m\'aider ?).',
            },
          },
        ],
      },
      {
        id: 'B1_relative_clauses',
        title: {
          en: 'Relative Clauses (Relativsätze)',
          de: 'Relativsätze',
          es: 'Oraciones Relativas',
          fr: 'Les Propositions Relatives',
        },
        description: {
          en: 'Provide additional information about a noun using relative pronouns.',
          de: 'Geben Sie zusätzliche Informationen über ein Nomen mit Relativpronomen.',
          es: 'Proporciona información adicional sobre un sustantivo usando pronombres relativos.',
          fr: 'Donnez des informations supplémentaires sur un nom à l\'aide de pronoms relatifs.',
        },
        introduction: {
          en: 'Relative clauses are subordinate clauses that describe a noun in the main clause. They start with a relative pronoun (which matches the gender/number of the noun and the case required by the relative clause) and end with the conjugated verb.',
          de: 'Relativsätze beschreiben ein Nomen im Hauptsatz näher. Sie beginnen mit einem Relativpronomen (passend zu Genus und Fall) und enden mit dem konjugierten Verb.',
          es: 'Las oraciones relativas son subordinadas que describen un sustantivo en la oración principal. Comienzan con un pronombre relativo (que coincide en género y número con el sustantivo, y en caso con la función en su propia oración) y terminan con el verbo conjugado.',
          fr: 'Les propositions relatives sont des subordonnées qui décrivent un nom de la proposition principale. Elles commencent par un pronom relatif (accordé en genre/nombre avec le nom et au cas requis par la relative) et se terminent par le verbe conjugué.',
        },
        rules: [
          {
            title: {
              en: 'Relative Pronouns',
              de: 'Relativpronomen',
              es: 'Pronombres Relativos',
              fr: 'Pronoms Relatifs',
            },
            explanation: {
              en: 'In the Nominative/Accusative, relative pronouns look identical to definite articles (der, die, das, die / den, die, das, die). In the Dative, they are: dem (m), der (f), dem (n), denen (pl). Note that plural Dative relative pronoun is "denen".',
              de: 'Im Nominativ/Akkusativ entsprechen die Relativpronomen den bestimmten Artikeln. Im Dativ heißen sie: dem (m), der (f), dem (n), denen (pl).',
              es: 'En Nominativo/Acusativo, los pronombres relativos son idénticos a los artículos definidos. En Dativo, son: dem (m), der (f), dem (n), denen (pl).',
              fr: 'Au nominatif/accusatif, les pronoms relatifs sont identiques aux articles définis. Au datif, ils sont : dem (m), der (f), dem (n), denen (pl).',
            },
            exampleGerman: 'Das ist der Mann, der in Berlin wohnt. Das ist die Frau, der ich helfe.',
            exampleTranslation: {
              en: 'That is the man who lives in Berlin. That is the woman whom I help (helfen + Dative).',
              de: 'Das ist der Mann, der in Berlin wohnt. Das ist die Frau, der ich helfe.',
              es: 'Ese es el hombre que vive en Berlín. Esa es la mujer a la que ayudo.',
              fr: 'C\'est l\'homme qui vit à Berlin. C\'est la femme que j\'aide (aider régit le datif en allemand).',
            },
          },
        ],
        summary: {
          en: 'Relative clauses are separate subordinate clauses. This means the conjugated verb is pushed to the very end of the clause!',
          de: 'Relativsätze sind Nebensätze. Das bedeutet, das konjugierte Verb steht am absoluten Ende des Relativsatzes!',
          es: '¡Las oraciones relativas son oraciones subordinadas. Esto significa que el verbo conjugado se envía al final de la oración!',
          fr: 'Les propositions relatives sont des subordonnées. Cela signifie que le verbe conjugué est renvoyé à la toute fin !',
        },
        quiz: [
          {
            id: 'B1_relative_clauses_q1',
            question: 'Das ist der Hund, ___ gestern laut gebellt hat.',
            options: ['der', 'den', 'dem', 'die'],
            correctAnswer: 'der',
            explanation: {
              en: 'The relative pronoun refers to the masculine "Hund" and is the subject (Nominative) in the relative clause -> "der".',
              de: 'Das Relativpronomen bezieht sich auf den maskulinen "Hund" und ist das Subjekt (Nominativ) im Nebensatz -> "der".',
              es: 'El pronombre relativo se refiere a "Hund" (masculino) y es el sujeto (Nominativo) en la oración relativa -> "der".',
              fr: 'Le pronom relatif se réfère à "Hund" (masculin) et est le sujet (nominatif) dans la relative -> "der".',
            },
          },
          {
            id: 'B1_relative_clauses_q2',
            question: 'Hier ist das Buch, ___ ich gestern gelesen habe.',
            options: ['das', 'der', 'den', 'dem'],
            correctAnswer: 'das',
            explanation: {
              en: '"Buch" is neuter (das Buch) and is the direct object (Accusative) of "lesen" in the relative clause -> "das".',
              de: '"Buch" ist neutral (das Buch) und das direkte Objekt (Akkusativ) von "lesen" im Nebensatz -> "das".',
              es: '"Buch" es neutro (das Buch) y es el objeto directo (Acusativo) de "lesen" en la oración relativa -> "das".',
              fr: '"Buch" est neutre (das Buch) et est l\'objet direct (accusatif) de "lesen" dans la relative -> "das".',
            },
          },
          {
            id: 'B1_relative_clauses_q3',
            question: 'Das sind die Freunde, ___ ich ein Geschenk gebe.',
            options: ['denen', 'die', 'den', 'der'],
            correctAnswer: 'denen',
            explanation: {
              en: 'The relative pronoun refers to plural "die Freunde" and is the indirect object (Dative) of "geben" -> "denen".',
              de: 'Das Relativpronomen bezieht sich auf den Plural "die Freunde" und ist das indirekte Objekt (Dativ) von "geben" -> "denen".',
              es: 'El pronombre relativo se refiere al plural "Freunde" y es el objeto indirecto (Dativo) de "geben" -> "denen".',
              fr: 'Le pronom relatif se réfère au pluriel "die Freunde" et est l\'objet indirect (datif) de "geben" -> "denen".',
            },
          },
        ],
      },
      {
        id: 'B1_praeteritum',
        title: {
          en: 'Simple Past (Präteritum)',
          de: 'Das Präteritum',
          es: 'Pasado Simple (Präteritum)',
          fr: 'Passé Simple (Präteritum)',
        },
        description: {
          en: 'Master the written past tense used in novels, reports, and narration.',
          de: 'Meistern Sie das Präteritum – die Vergangenheitsform für Romane, Berichte und Erzählungen.',
          es: 'Domina el tiempo pasado escrito usado en novelas, reportes y narración.',
          fr: 'Maîtrisez le passé simple utilisé dans les romans, les rapports et la narration.',
        },
        introduction: {
          en: 'The Präteritum (Simple Past) is used mainly in written German – stories, novels, and formal reports. While Perfekt is used in spoken German for past events, the Präteritum is preferred in writing. Modal verbs and "sein/haben" almost always use Präteritum even in speech.',
          de: 'Das Präteritum wird hauptsächlich in der deutschen Schriftsprache verwendet – in Geschichten, Romanen und formellen Berichten. Während das Perfekt in der gesprochenen Sprache bevorzugt wird, ist das Präteritum in der Schriftsprache Standard. Modalverben sowie „sein" und „haben" stehen auch im Gespräch meist im Präteritum.',
          es: 'El Präteritum (Pasado Simple) se usa principalmente en el alemán escrito – cuentos, novelas e informes formales. Aunque en el alemán hablado se prefiere el Perfekt para eventos pasados, en la escritura se usa el Präteritum. Los verbos modales y "sein/haben" casi siempre usan Präteritum incluso al hablar.',
          fr: 'Le Präteritum (passé simple) est utilisé principalement à l\'écrit en allemand – récits, romans et rapports formels. Alors que le Perfekt est préféré à l\'oral pour les événements passés, le Präteritum est la norme à l\'écrit. Les verbes modaux et "sein/haben" utilisent presque toujours le Präteritum même à l\'oral.',
        },
        rules: [
          {
            title: {
              en: 'Regular Verbs: Stem + -te endings',
              de: 'Regelmäßige Verben: Stamm + -te Endungen',
              es: 'Verbos Regulares: Raíz + terminaciones -te',
              fr: 'Verbes Réguliers : Radical + terminaisons -te',
            },
            explanation: {
              en: 'For regular (weak) verbs, add these endings to the verb stem: ich -te, du -test, er/sie/es -te, wir -ten, ihr -tet, sie/Sie -ten. Example: "spielen" → ich spielte, du spieltest, er spielte.',
              de: 'Bei regelmäßigen (schwachen) Verben hängt man folgende Endungen an den Verbstamm: ich -te, du -test, er/sie/es -te, wir -ten, ihr -tet, sie/Sie -ten. Beispiel: „spielen" → ich spielte, du spieltest, er spielte.',
              es: 'Para los verbos regulares (débiles), añade estas terminaciones a la raíz verbal: ich -te, du -test, er/sie/es -te, wir -ten, ihr -tet, sie/Sie -ten. Ejemplo: "spielen" → ich spielte, du spieltest, er spielte.',
              fr: 'Pour les verbes réguliers (faibles), ajoutez ces terminaisons au radical du verbe : ich -te, du -test, er/sie/es -te, wir -ten, ihr -tet, sie/Sie -ten. Exemple : "spielen" → ich spielte, du spieltest, er spielte.',
            },
            exampleGerman: 'Gestern spielte er Fußball und lernte viel.',
            exampleTranslation: {
              en: 'Yesterday he played football and learned a lot.',
              de: 'Gestern spielte er Fußball und lernte viel.',
              es: 'Ayer jugó al fútbol y aprendió mucho.',
              fr: 'Hier, il a joué au football et a beaucoup appris.',
            },
          },
          {
            title: {
              en: 'Irregular Verbs & Sein/Haben',
              de: 'Unregelmäßige Verben & Sein/Haben',
              es: 'Verbos Irregulares & Sein/Haben',
              fr: 'Verbes Irréguliers & Sein/Haben',
            },
            explanation: {
              en: 'Strong (irregular) verbs change their stem vowel and take different endings: ich/er/sie/es = no ending, du = -(e)st, wir/sie/Sie = -en, ihr = -t. Key ones: sein → war, haben → hatte, kommen → kam, gehen → ging, fahren → fuhr, sehen → sah.',
              de: 'Starke (unregelmäßige) Verben ändern ihren Stammvokal und erhalten andere Endungen: ich/er/sie/es = keine Endung, du = -(e)st, wir/sie/Sie = -en, ihr = -t. Wichtige Formen: sein → war, haben → hatte, kommen → kam, gehen → ging, fahren → fuhr, sehen → sah.',
              es: 'Los verbos fuertes (irregulares) cambian la vocal de la raíz y toman diferentes terminaciones: ich/er/sie/es = sin terminación, du = -(e)st, wir/sie/Sie = -en, ihr = -t. Los más importantes: sein → war, haben → hatte, kommen → kam, gehen → ging, fahren → fuhr, sehen → sah.',
              fr: 'Les verbes forts (irréguliers) changent leur voyelle de radical et prennent des terminaisons différentes : ich/er/sie/es = pas de terminaison, du = -(e)st, wir/sie/Sie = -en, ihr = -t. Les principaux : sein → war, haben → hatte, kommen → kam, gehen → ging, fahren → fuhr, sehen → sah.',
            },
            exampleGerman: 'Sie war müde und hatte Hunger. Er kam spät nach Hause.',
            exampleTranslation: {
              en: 'She was tired and was hungry. He came home late.',
              de: 'Sie war müde und hatte Hunger. Er kam spät nach Hause.',
              es: 'Ella estaba cansada y tenía hambre. Él llegó tarde a casa.',
              fr: 'Elle était fatiguée et avait faim. Il est rentré tard à la maison.',
            },
          },
        ],
        summary: {
          en: 'Use Präteritum in written narration. Regular verbs add -te endings. Irregular verbs change their stem vowel. Always use Präteritum for "sein" (war) and "haben" (hatte) even in speech.',
          de: 'Verwenden Sie das Präteritum in schriftlichen Erzählungen. Regelmäßige Verben erhalten -te-Endungen. Unregelmäßige Verben ändern den Stammvokal. „sein" (war) und „haben" (hatte) stehen auch im Gespräch im Präteritum.',
          es: 'Usa el Präteritum en la narración escrita. Los verbos regulares añaden terminaciones -te. Los verbos irregulares cambian su vocal raíz. Siempre usa Präteritum para "sein" (war) y "haben" (hatte) incluso al hablar.',
          fr: 'Utilisez le Präteritum dans la narration écrite. Les verbes réguliers ajoutent des terminaisons -te. Les verbes irréguliers changent leur voyelle de radical. Utilisez toujours le Präteritum pour "sein" (war) et "haben" (hatte) même à l\'oral.',
        },
        quiz: [
          {
            id: 'B1_praeteritum_q1',
            question: 'Er ___ gestern im Park. (sein)',
            options: ['war', 'ist', 'sei', 'hatte'],
            correctAnswer: 'war',
            explanation: {
              en: '"sein" (to be) in Präteritum third-person singular is "war".',
              de: '„sein" im Präteritum 3. Person Singular lautet „war".',
              es: '"sein" (ser/estar) en Präteritum tercera persona singular es "war".',
              fr: '"sein" (être) au Präteritum troisième personne singulier est "war".',
            },
          },
          {
            id: 'B1_praeteritum_q2',
            question: 'Wir ___ das Buch. (lesen – irregular: las)',
            options: ['lasen', 'lesten', 'lasten', 'lesten'],
            correctAnswer: 'lasen',
            explanation: {
              en: '"lesen" is irregular. Its Präteritum stem is "las". Wir-form adds -en → "lasen".',
              de: '„lesen" ist unregelmäßig. Der Präteritumstamm ist „las". Die wir-Form erhält -en → „lasen".',
              es: '"lesen" es irregular. Su raíz en Präteritum es "las". La forma wir añade -en → "lasen".',
              fr: '"lesen" est irrégulier. Son radical au Präteritum est "las". La forme wir ajoute -en → "lasen".',
            },
          },
          {
            id: 'B1_praeteritum_q3',
            question: 'Sie ___ keine Zeit. (haben)',
            options: ['hatte', 'hatten', 'haben', 'hat'],
            correctAnswer: 'hatten',
            explanation: {
              en: '"haben" (to have) Präteritum: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten. "sie" (plural) → "hatten".',
              de: '„haben" im Präteritum: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten. „sie" (Plural) → „hatten".',
              es: '"haben" (tener) Präteritum: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten. "sie" (plural) → "hatten".',
              fr: '"haben" (avoir) Präteritum : ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten. "sie" (pluriel) → "hatten".',
            },
          },
        ],
      },
      {
        id: 'B1_infinitiv',
        title: {
          en: 'Infinitive Constructions (zu + Infinitiv)',
          de: 'Infinitivkonstruktionen (zu + Infinitiv)',
          es: 'Construcciones de Infinitivo (zu + Infinitivo)',
          fr: 'Constructions Infinitives (zu + Infinitif)',
        },
        description: {
          en: 'Express purposes and intentions using "zu" + infinitive structures.',
          de: 'Drücken Sie Absichten und Zwecke mit „zu" + Infinitiv aus.',
          es: 'Expresa propósitos e intenciones usando estructuras de "zu" + infinitivo.',
          fr: 'Exprimez des buts et intentions avec les structures "zu" + infinitif.',
        },
        introduction: {
          en: 'In German, many verbs, adjectives, and nouns can be followed by "zu" + infinitive (at the very end). This is equivalent to the English "to do something". Key verbs: versuchen (to try), anfangen (to start), hoffen (to hope), vorhaben (to plan). With separable verbs, "zu" is inserted between prefix and stem: "aufzuhören".',
          de: 'Im Deutschen können viele Verben, Adjektive und Nomen von „zu" + Infinitiv (ganz am Satzende) gefolgt werden. Dies entspricht dem englischen „to do something". Wichtige Verben: versuchen, anfangen, hoffen, vorhaben. Bei trennbaren Verben wird „zu" zwischen Präfix und Stamm eingefügt: „aufzuhören".',
          es: 'En alemán, muchos verbos, adjetivos y sustantivos pueden ir seguidos de "zu" + infinitivo (al final de la oración). Esto es equivalente al inglés "to do something". Verbos clave: versuchen (intentar), anfangen (empezar), hoffen (esperar), vorhaben (planear). Con verbos separables, "zu" se inserta entre el prefijo y la raíz: "aufzuhören".',
          fr: 'En allemand, de nombreux verbes, adjectifs et noms peuvent être suivis de "zu" + infinitif (tout à la fin). C\'est l\'équivalent du "to do something" anglais. Verbes clés : versuchen (essayer), anfangen (commencer), hoffen (espérer), vorhaben (prévoir). Avec les verbes séparables, "zu" s\'insère entre le préfixe et le radical : "aufzuhören".',
        },
        rules: [
          {
            title: {
              en: 'Basic "zu" + Infinitive',
              de: 'Einfaches „zu" + Infinitiv',
              es: '"zu" + Infinitivo Básico',
              fr: '"zu" + Infinitif de Base',
            },
            explanation: {
              en: 'After certain verbs, add a comma, then a "zu"-clause: verb stem + "zu" + infinitive at the end. The subject of both clauses is usually the same.',
              de: 'Nach bestimmten Verben folgt ein Komma, dann eine „zu"-Konstruktion: Verbstamm + „zu" + Infinitiv am Ende. Das Subjekt beider Teilsätze ist in der Regel identisch.',
              es: 'Después de ciertos verbos, añade una coma, luego una cláusula con "zu": verbo + "zu" + infinitivo al final. El sujeto de ambas cláusulas suele ser el mismo.',
              fr: 'Après certains verbes, ajoutez une virgule, puis une proposition avec "zu" : verbe + "zu" + infinitif à la fin. Le sujet des deux propositions est généralement le même.',
            },
            exampleGerman: 'Ich versuche, jeden Tag Deutsch zu lernen.',
            exampleTranslation: {
              en: 'I try to learn German every day.',
              de: 'Ich versuche, jeden Tag Deutsch zu lernen.',
              es: 'Intento aprender alemán todos los días.',
              fr: 'J\'essaie d\'apprendre l\'allemand chaque jour.',
            },
          },
          {
            title: {
              en: '"zu" with Separable Verbs',
              de: '„zu" bei trennbaren Verben',
              es: '"zu" con Verbos Separables',
              fr: '"zu" avec les Verbes Séparables',
            },
            explanation: {
              en: 'With separable verbs (like "aufhören", "anrufen", "anfangen"), "zu" is inserted between the prefix and the verb stem, written as one word.',
              de: 'Bei trennbaren Verben (wie „aufhören", „anrufen", „anfangen") wird „zu" zwischen Präfix und Verbstamm eingefügt und zusammengeschrieben.',
              es: 'Con verbos separables (como "aufhören", "anrufen", "anfangen"), "zu" se inserta entre el prefijo y la raíz verbal, escrito como una sola palabra.',
              fr: 'Avec les verbes séparables (comme "aufhören", "anrufen", "anfangen"), "zu" s\'insère entre le préfixe et le radical du verbe, en un seul mot.',
            },
            exampleGerman: 'Er hat versprochen, früher aufzuhören.',
            exampleTranslation: {
              en: 'He promised to stop earlier.',
              de: 'Er hat versprochen, früher aufzuhören.',
              es: 'Prometió parar antes.',
              fr: 'Il a promis d\'arrêter plus tôt.',
            },
          },
        ],
        summary: {
          en: '"zu" + infinitive comes at the very end of the clause. Use it after verbs like versuchen, anfangen, hoffen, vorhaben. With separable verbs, "zu" goes between prefix and stem (aufzuhören).',
          de: '„zu" + Infinitiv steht ganz am Ende des Teilsatzes. Verwenden Sie es nach Verben wie versuchen, anfangen, hoffen, vorhaben. Bei trennbaren Verben steht „zu" zwischen Präfix und Stamm (aufzuhören).',
          es: '"zu" + infinitivo va al final de la cláusula. Úsalo después de verbos como versuchen, anfangen, hoffen, vorhaben. Con verbos separables, "zu" va entre el prefijo y la raíz (aufzuhören).',
          fr: '"zu" + infinitif va à la toute fin de la proposition. Utilisez-le après des verbes comme versuchen, anfangen, hoffen, vorhaben. Avec les verbes séparables, "zu" se place entre le préfixe et le radical (aufzuhören).',
        },
        quiz: [
          {
            id: 'B1_infinitiv_q1',
            question: 'Sie hofft, bald Arbeit ___ . (finden)',
            options: ['zu finden', 'finden', 'zu finden.', 'gefunden'],
            correctAnswer: 'zu finden',
            explanation: {
              en: 'After "hoffen", we need "zu" + infinitive at the end. "finden" → "zu finden".',
              de: 'Nach „hoffen" folgt „zu" + Infinitiv am Ende. „finden" → „zu finden".',
              es: 'Después de "hoffen", necesitamos "zu" + infinitivo al final. "finden" → "zu finden".',
              fr: 'Après "hoffen", on utilise "zu" + infinitif à la fin. "finden" → "zu finden".',
            },
          },
          {
            id: 'B1_infinitiv_q2',
            question: 'Er hat vergessen, seine Mutter ___ . (anrufen)',
            options: ['anzurufen', 'zu anrufen', 'anrufen', 'angerufen'],
            correctAnswer: 'anzurufen',
            explanation: {
              en: '"anrufen" is separable (an- + rufen). "zu" is inserted between prefix and stem → "anzurufen".',
              de: '„anrufen" ist trennbar (an- + rufen). „zu" wird zwischen Präfix und Stamm eingefügt → „anzurufen".',
              es: '"anrufen" es separable (an- + rufen). "zu" se inserta entre el prefijo y la raíz → "anzurufen".',
              fr: '"anrufen" est séparable (an- + rufen). "zu" s\'insère entre le préfixe et le radical → "anzurufen".',
            },
          },
          {
            id: 'B1_infinitiv_q3',
            question: 'Es ist wichtig, täglich Sport ___ . (treiben)',
            options: ['zu treiben', 'treiben', 'getrieben', 'zu treiben zu'],
            correctAnswer: 'zu treiben',
            explanation: {
              en: 'After "es ist wichtig", the infinitive clause uses "zu" + infinitive. "treiben" is not separable → "zu treiben".',
              de: 'Nach „es ist wichtig" folgt eine Infinitivkonstruktion mit „zu" + Infinitiv. „treiben" ist nicht trennbar → „zu treiben".',
              es: 'Después de "es ist wichtig", la cláusula infinitiva usa "zu" + infinitivo. "treiben" no es separable → "zu treiben".',
              fr: 'Après "es ist wichtig", la proposition infinitive utilise "zu" + infinitif. "treiben" n\'est pas séparable → "zu treiben".',
            },
          },
        ],
      },
      {
        id: 'B1_futur_i',
        title: {
          en: 'Future Tense (Futur I)',
          de: 'Das Futur I',
          es: 'Tiempo Futuro (Futur I)',
          fr: 'Le Futur (Futur I)',
        },
        description: {
          en: 'Express future plans, predictions, and intentions using "werden".',
          de: 'Drücken Sie Zukunftspläne, Vorhersagen und Absichten mit „werden" aus.',
          es: 'Expresa planes futuros, predicciones e intenciones usando "werden".',
          fr: 'Exprimez des plans futurs, des prédictions et des intentions avec "werden".',
        },
        introduction: {
          en: 'Futur I is formed with the conjugated auxiliary verb "werden" in the second position and the main verb infinitive at the very end. In everyday spoken German, present tense is often used for future events when context is clear (e.g. "Ich komme morgen"). Futur I adds emphasis or expresses uncertainty and predictions.',
          de: 'Das Futur I wird mit der konjugierten Form von „werden" an zweiter Stelle und dem Infinitiv des Hauptverbs ganz am Satzende gebildet. Im Alltag wird oft das Präsens für Zukunftsereignisse verwendet, wenn der Kontext klar ist. Das Futur I betont Absichten oder drückt Unsicherheit und Vorhersagen aus.',
          es: 'Futur I se forma con el verbo auxiliar conjugado "werden" en segunda posición y el infinitivo del verbo principal al final. En el alemán hablado cotidiano, el presente se usa a menudo para eventos futuros cuando el contexto es claro. Futur I añade énfasis o expresa incertidumbre y predicciones.',
          fr: 'Le Futur I se forme avec le verbe auxiliaire conjugué "werden" en deuxième position et l\'infinitif du verbe principal tout à la fin. Dans l\'allemand parlé quotidien, le présent est souvent utilisé pour les événements futurs quand le contexte est clair. Le Futur I ajoute de l\'emphase ou exprime l\'incertitude et les prédictions.',
        },
        rules: [
          {
            title: {
              en: 'Werden Conjugation',
              de: 'Konjugation von werden',
              es: 'Conjugación de werden',
              fr: 'Conjugaison de werden',
            },
            explanation: {
              en: 'Conjugate "werden" to match the subject: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden. The main verb infinitive goes to the very end.',
              de: 'Konjugieren Sie „werden" entsprechend dem Subjekt: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden. Der Infinitiv des Hauptverbs steht ganz am Satzende.',
              es: 'Conjuga "werden" según el sujeto: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden. El infinitivo del verbo principal va al final.',
              fr: 'Conjuguez "werden" selon le sujet : ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden. L\'infinitif du verbe principal va à la toute fin.',
            },
            exampleGerman: 'Wir werden nächstes Jahr nach Berlin reisen.',
            exampleTranslation: {
              en: 'We will travel to Berlin next year.',
              de: 'Wir werden nächstes Jahr nach Berlin reisen.',
              es: 'Viajaremos a Berlín el próximo año.',
              fr: 'Nous voyagerons à Berlin l\'année prochaine.',
            },
          },
          {
            title: {
              en: 'Future vs. Present for Future Events',
              de: 'Futur vs. Präsens für Zukünftiges',
              es: 'Futuro vs. Presente para Eventos Futuros',
              fr: 'Futur vs. Présent pour les Événements Futurs',
            },
            explanation: {
              en: 'In spoken German, present tense + a time adverb is common for future events: "Ich komme morgen" (I\'m coming tomorrow). Use Futur I for predictions about the future or to express determination/certainty: "Es wird regnen" (It will rain).',
              de: 'Im gesprochenen Deutsch ist das Präsens + eine Zeitangabe für Zukünftiges üblich: „Ich komme morgen". Verwenden Sie das Futur I für Vorhersagen oder um Entschlossenheit auszudrücken: „Es wird regnen".',
              es: 'En el alemán hablado, el presente + un adverbio de tiempo es común para eventos futuros: "Ich komme morgen" (Vengo mañana). Usa Futur I para predicciones o para expresar determinación: "Es wird regnen" (Lloverá).',
              fr: 'En allemand parlé, le présent + un adverbe de temps est courant pour les événements futurs : "Ich komme morgen" (Je viens demain). Utilisez le Futur I pour des prédictions ou pour exprimer une certitude : "Es wird regnen" (Il va pleuvoir).',
            },
            exampleGerman: 'Du wirst das schaffen! / Es wird morgen kalt sein.',
            exampleTranslation: {
              en: 'You will manage this! / It will be cold tomorrow.',
              de: 'Du wirst das schaffen! / Es wird morgen kalt sein.',
              es: '¡Lo lograrás! / Mañana hará frío.',
              fr: 'Tu vas y arriver ! / Il fera froid demain.',
            },
          },
        ],
        summary: {
          en: 'Form Futur I with: Subject + werden (conjugated) + ... + infinitive (end). Use it for predictions and emphasis. In everyday speech, present tense with time expressions works for planned future events.',
          de: 'Bilden Sie Futur I mit: Subjekt + werden (konjugiert) + ... + Infinitiv (am Ende). Verwenden Sie es für Vorhersagen und Betonungen. Im Alltag reicht das Präsens mit Zeitangaben für geplante Ereignisse.',
          es: 'Forma Futur I con: Sujeto + werden (conjugado) + ... + infinitivo (al final). Úsalo para predicciones y énfasis. En el habla cotidiana, el presente con expresiones de tiempo funciona para eventos futuros planeados.',
          fr: 'Formez le Futur I avec : Sujet + werden (conjugué) + ... + infinitif (fin). Utilisez-le pour les prédictions et l\'emphase. Dans le langage courant, le présent avec des expressions de temps suffit pour les événements futurs planifiés.',
        },
        quiz: [
          {
            id: 'B1_futur_i_q1',
            question: 'Er ___ nächste Woche kommen. (werden)',
            options: ['wird', 'werde', 'werden', 'wirst'],
            correctAnswer: 'wird',
            explanation: {
              en: '"er" takes the third-person singular form of "werden" → "wird".',
              de: '„er" nimmt die dritte Person Singular von „werden" → „wird".',
              es: '"er" toma la forma de tercera persona singular de "werden" → "wird".',
              fr: '"er" prend la forme troisième personne singulier de "werden" → "wird".',
            },
          },
          {
            id: 'B1_futur_i_q2',
            question: 'Morgen ___ wir das Projekt ___. (fertigstellen)',
            options: ['werden / fertigstellen', 'sind / fertiggestellt', 'haben / fertiggestellt', 'wird / fertigstellen'],
            correctAnswer: 'werden / fertigstellen',
            explanation: {
              en: 'Futur I: "wir werden" (conjugated werden for wir) + infinitive at end → "werden...fertigstellen".',
              de: 'Futur I: „wir werden" (konjugiertes werden für wir) + Infinitiv am Ende → „werden...fertigstellen".',
              es: 'Futur I: "wir werden" (werden conjugado para wir) + infinitivo al final → "werden...fertigstellen".',
              fr: 'Futur I : "wir werden" (werden conjugué pour wir) + infinitif à la fin → "werden...fertigstellen".',
            },
          },
          {
            id: 'B1_futur_i_q3',
            question: 'Das Wetter ___ morgen schön ___. (sein)',
            options: ['wird / sein', 'ist / sein', 'wäre / sein', 'wird / ist'],
            correctAnswer: 'wird / sein',
            explanation: {
              en: '"es wird ... sein" is the Futur I structure. "wird" is conjugated, "sein" goes to the end.',
              de: '„Es wird ... sein" ist die Futur-I-Struktur. „wird" ist konjugiert, „sein" steht am Ende.',
              es: '"es wird ... sein" es la estructura del Futur I. "wird" está conjugado, "sein" va al final.',
              fr: '"es wird ... sein" est la structure du Futur I. "wird" est conjugué, "sein" va à la fin.',
            },
          },
        ],
      },
      {
        id: 'B1_word_order',
        title: {
          en: 'Advanced Word Order (Satzstellung)',
          de: 'Erweiterte Satzstellung',
          es: 'Orden de Palabras Avanzado (Satzstellung)',
          fr: 'Ordre des Mots Avancé (Satzstellung)',
        },
        description: {
          en: 'Master German sentence structure with time, manner, and place adverbs.',
          de: 'Meistern Sie die deutsche Satzstruktur mit Zeit-, Art- und Ortsangaben.',
          es: 'Domina la estructura oracional alemana con adverbios de tiempo, modo y lugar.',
          fr: 'Maîtrisez la structure des phrases allemandes avec les adverbes de temps, de manière et de lieu.',
        },
        introduction: {
          en: 'German word order follows fixed rules. In main clauses the conjugated verb is always in position 2 (V2 rule). Adverbials follow the sequence: Time → Manner → Place (TeKaMoLo: Temporal-Kausal-Modal-Lokal). When a sentence starts with a non-subject element, the subject and verb invert (inversion). In subordinate clauses, the verb moves to the very end.',
          de: 'Die deutsche Wortstellung folgt festen Regeln. Im Hauptsatz steht das konjugierte Verb immer an zweiter Stelle (V2-Regel). Angaben folgen der Reihenfolge: Zeit → Art und Weise → Ort (TeKaMoLo: Temporal-Kausal-Modal-Lokal). Wenn ein Nicht-Subjekt-Element am Satzanfang steht, werden Subjekt und Verb umgestellt (Inversion). Im Nebensatz wandert das Verb ans Ende.',
          es: 'El orden de palabras en alemán sigue reglas fijas. En oraciones principales, el verbo conjugado siempre está en posición 2 (regla V2). Los adverbiales siguen la secuencia: Tiempo → Manera → Lugar (TeKaMoLo). Cuando una oración comienza con un elemento que no es el sujeto, el sujeto y el verbo se invierten. En oraciones subordinadas, el verbo va al final.',
          fr: 'L\'ordre des mots en allemand suit des règles fixes. Dans les propositions principales, le verbe conjugué est toujours en position 2 (règle V2). Les adverbiaux suivent l\'ordre : Temps → Manière → Lieu (TeKaMoLo). Quand une phrase commence par un élément non-sujet, le sujet et le verbe s\'inversent. Dans les propositions subordonnées, le verbe va à la toute fin.',
        },
        rules: [
          {
            title: {
              en: 'The V2 Rule & Inversion',
              de: 'Die V2-Regel & Inversion',
              es: 'La Regla V2 & Inversión',
              fr: 'La Règle V2 & Inversion',
            },
            explanation: {
              en: 'In German main clauses, the conjugated verb is ALWAYS in position 2. If anything other than the subject comes first (e.g. time adverb), the verb still stays in position 2 and the subject moves after the verb (inversion). This is called subject-verb inversion.',
              de: 'Im deutschen Hauptsatz steht das konjugierte Verb IMMER an zweiter Stelle. Steht etwas anderes als das Subjekt am Anfang (z. B. eine Zeitangabe), bleibt das Verb an zweiter Stelle und das Subjekt rückt dahinter (Inversion).',
              es: 'En las oraciones principales en alemán, el verbo conjugado siempre está en POSICIÓN 2. Si algo que no es el sujeto viene primero (p. ej., un adverbio de tiempo), el verbo se mantiene en posición 2 y el sujeto se mueve después del verbo (inversión).',
              fr: 'Dans les propositions principales en allemand, le verbe conjugué est TOUJOURS en position 2. Si quelque chose d\'autre que le sujet vient en premier (par ex. un adverbe de temps), le verbe reste en position 2 et le sujet se déplace après le verbe (inversion).',
            },
            exampleGerman: 'Heute fahre ich nach Berlin. / Ich fahre heute nach Berlin.',
            exampleTranslation: {
              en: 'Today I am going to Berlin. / I am going to Berlin today. (Both correct, verb stays at position 2.)',
              de: 'Heute fahre ich nach Berlin. / Ich fahre heute nach Berlin. (Beide korrekt, Verb immer an Position 2.)',
              es: 'Hoy voy a Berlín. / Voy a Berlín hoy. (Ambas correctas, el verbo siempre en posición 2.)',
              fr: 'Aujourd\'hui, je vais à Berlin. / Je vais à Berlin aujourd\'hui. (Les deux corrects, verbe toujours en position 2.)',
            },
          },
          {
            title: {
              en: 'TeKaMoLo: Time–Cause–Manner–Place',
              de: 'TeKaMoLo: Temporal–Kausal–Modal–Lokal',
              es: 'TeKaMoLo: Tiempo–Causa–Modo–Lugar',
              fr: 'TeKaMoLo : Temps–Cause–Manière–Lieu',
            },
            explanation: {
              en: 'When multiple adverbials are in a sentence, German places them in a fixed order: Time (wann?) → Cause (warum?) → Manner (wie?) → Place (wo?/wohin?). Example: "Ich fahre morgen [T] wegen der Konferenz [K] mit dem Zug [M] nach München [L]."',
              de: 'Bei mehreren Angaben im Satz folgt das Deutsche einer festen Reihenfolge: Temporal (wann?) → Kausal (warum?) → Modal (wie?) → Lokal (wo?/wohin?). Beispiel: „Ich fahre morgen [T] wegen der Konferenz [K] mit dem Zug [M] nach München [L]."',
              es: 'Cuando hay varios adverbiales en una oración, el alemán los coloca en un orden fijo: Tiempo (¿cuándo?) → Causa (¿por qué?) → Modo (¿cómo?) → Lugar (¿dónde?/¿adónde?). Ejemplo: "Ich fahre morgen [T] wegen der Konferenz [K] mit dem Zug [M] nach München [L]."',
              fr: 'Quand plusieurs adverbiaux sont dans une phrase, l\'allemand les place dans un ordre fixe : Temps (quand ?) → Cause (pourquoi ?) → Manière (comment ?) → Lieu (où ?/vers où ?). Exemple : "Ich fahre morgen [T] wegen der Konferenz [K] mit dem Zug [M] nach München [L]."',
            },
            exampleGerman: 'Sie geht jeden Tag [T] gut gelaunt [M] zur Schule [L].',
            exampleTranslation: {
              en: 'She goes to school every day in a good mood.',
              de: 'Sie geht jeden Tag [T] gut gelaunt [M] zur Schule [L].',
              es: 'Ella va a la escuela todos los días de buen humor.',
              fr: 'Elle va à l\'école tous les jours de bonne humeur.',
            },
          },
        ],
        summary: {
          en: 'The V2 rule: conjugated verb always in position 2. When non-subject is first, invert subject and verb. Adverbs follow TeKaMoLo order: Time → Cause → Manner → Place. Subordinate clause verb goes to the very end.',
          de: 'V2-Regel: Das konjugierte Verb steht immer an zweiter Stelle. Beginnt der Satz mit etwas anderem als dem Subjekt, werden Subjekt und Verb umgestellt. Angaben folgen der TeKaMoLo-Reihenfolge: Temporal → Kausal → Modal → Lokal. Im Nebensatz steht das Verb ganz am Ende.',
          es: 'Regla V2: el verbo conjugado siempre en posición 2. Cuando el no-sujeto va primero, invierte sujeto y verbo. Los adverbios siguen el orden TeKaMoLo: Tiempo → Causa → Modo → Lugar. El verbo en la oración subordinada va al final.',
          fr: 'Règle V2 : le verbe conjugué est toujours en position 2. Quand un non-sujet est en premier, inversez sujet et verbe. Les adverbes suivent l\'ordre TeKaMoLo : Temps → Cause → Manière → Lieu. Le verbe en proposition subordonnée va à la toute fin.',
        },
        quiz: [
          {
            id: 'B1_word_order_q1',
            question: 'Which sentence is correct? (V2 rule)',
            options: [
              'Morgen ich fahre nach Hamburg.',
              'Morgen fahre ich nach Hamburg.',
              'Ich morgen fahre nach Hamburg.',
              'Ich fahre morgen Hamburg nach.',
            ],
            correctAnswer: 'Morgen fahre ich nach Hamburg.',
            explanation: {
              en: '"Morgen" (tomorrow) is in position 1, so the verb "fahre" must be in position 2, and the subject "ich" follows after the verb (inversion).',
              de: '„Morgen" steht an erster Stelle, also muss das Verb „fahre" an zweiter Stelle stehen, und das Subjekt „ich" folgt danach (Inversion).',
              es: '"Morgen" (mañana) está en posición 1, por lo que el verbo "fahre" debe estar en posición 2, y el sujeto "ich" sigue después del verbo (inversión).',
              fr: '"Morgen" (demain) est en position 1, donc le verbe "fahre" doit être en position 2, et le sujet "ich" suit après le verbe (inversion).',
            },
          },
          {
            id: 'B1_word_order_q2',
            question: 'Arrange in TeKaMoLo order: [mit dem Auto] [nach Hause] [schnell] [gestern]',
            options: [
              'gestern schnell mit dem Auto nach Hause',
              'schnell gestern nach Hause mit dem Auto',
              'nach Hause gestern schnell mit dem Auto',
              'mit dem Auto gestern schnell nach Hause',
            ],
            correctAnswer: 'gestern schnell mit dem Auto nach Hause',
            explanation: {
              en: 'TeKaMoLo: Time (gestern) → Manner (schnell) → Manner (mit dem Auto) → Place (nach Hause).',
              de: 'TeKaMoLo: Temporal (gestern) → Modal (schnell) → Modal (mit dem Auto) → Lokal (nach Hause).',
              es: 'TeKaMoLo: Tiempo (gestern) → Modo (schnell) → Modo (mit dem Auto) → Lugar (nach Hause).',
              fr: 'TeKaMoLo : Temps (gestern) → Manière (schnell) → Manière (mit dem Auto) → Lieu (nach Hause).',
            },
          },
          {
            id: 'B1_word_order_q3',
            question: 'In a subordinate clause with "weil", where does the verb go?',
            options: ['To the very end', 'In position 2', 'In position 1', 'After the subject'],
            correctAnswer: 'To the very end',
            explanation: {
              en: 'In subordinate clauses introduced by conjunctions like "weil", "dass", "wenn", the conjugated verb is sent to the very end of the clause.',
              de: 'In Nebensätzen mit unterordnenden Konjunktionen wie „weil", „dass", „wenn" wandert das konjugierte Verb ganz ans Ende des Satzes.',
              es: 'En oraciones subordinadas introducidas por conjunciones como "weil", "dass", "wenn", el verbo conjugado va al final de la cláusula.',
              fr: 'Dans les propositions subordonnées introduites par des conjonctions comme "weil", "dass", "wenn", le verbe conjugué est envoyé à la toute fin de la proposition.',
            },
          },
        ],
      },
      {
        id: 'B1_genitive',
        title: {
          en: 'Genitive Case (Genitiv)',
          de: 'Der Genitiv',
          es: 'Caso Genitivo (Genitiv)',
          fr: 'Le Cas Génitif (Genitiv)',
        },
        description: {
          en: 'Express ownership and formal relationships using the German genitive case.',
          de: 'Drücken Sie Besitz und formelle Beziehungen mit dem deutschen Genitiv aus.',
          es: 'Expresa posesión y relaciones formales usando el caso genitivo alemán.',
          fr: 'Exprimez la possession et les relations formelles en utilisant le cas génitif allemand.',
        },
        introduction: {
          en: 'The Genitive case (Genitiv) is used to express possession, belonging, or relationships between nouns — equivalent to "\'s" or "of" in English. It is commonly found in formal writing, printed signs, and literature. In spoken German, "von + Dative" often replaces Genitiv.',
          de: 'Der Genitiv drückt Besitz, Zugehörigkeit oder Beziehungen zwischen Nomen aus – vergleichbar mit dem englischen „\'s" oder „of". Er findet sich häufig in der Schriftsprache, auf Schildern und in der Literatur. Im gesprochenen Deutsch wird er oft durch „von + Dativ" ersetzt.',
          es: 'El caso Genitivo se usa para expresar posesión, pertenencia o relaciones entre sustantivos, equivalente al "\'s" o "of" en inglés. Se encuentra comúnmente en la escritura formal, letreros impresos y literatura. En el alemán hablado, "von + Dativo" a menudo reemplaza al Genitivo.',
          fr: 'Le cas Génitif est utilisé pour exprimer la possession, l\'appartenance ou les relations entre les noms — équivalent au "\'s" ou au "of" en anglais. On le trouve couramment dans l\'écrit formel, les panneaux imprimés et la littérature. En allemand parlé, "von + Datif" remplace souvent le Génitif.',
        },
        rules: [
          {
            title: {
              en: 'Genitive Articles & Noun Endings',
              de: 'Genitiv-Artikel & Nomen-Endungen',
              es: 'Artículos Genitivos y Terminaciones de Sustantivos',
              fr: 'Articles Génitifs et Terminaisons des Noms',
            },
            explanation: {
              en: 'Genitive articles: Masculine → des (+ -s/-es on noun), Feminine → der, Neuter → des (+ -s/-es on noun), Plural → der. Masculine and neuter nouns with one syllable often add -es; longer nouns add -s. Example: "das Buch des Mannes" (the man\'s book).',
              de: 'Genitivartikel: Maskulin → des (+ -s/-es am Nomen), Feminin → der, Neutral → des (+ -s/-es am Nomen), Plural → der. Ein- und zweisilbige maskuline und neutrale Nomen erhalten meist -es; längere Nomen erhalten -s. Beispiel: „das Buch des Mannes" (das Buch des Mannes).',
              es: 'Artículos genitivos: Masculino → des (+ -s/-es en el sustantivo), Femenino → der, Neutro → des (+ -s/-es en el sustantivo), Plural → der. Los sustantivos masculinos y neutros de una sílaba a menudo añaden -es; los sustantivos más largos añaden -s. Ejemplo: "das Buch des Mannes" (el libro del hombre).',
              fr: 'Articles génitifs : Masculin → des (+ -s/-es sur le nom), Féminin → der, Neutre → des (+ -s/-es sur le nom), Pluriel → der. Les noms masculins et neutres d\'une syllabe ajoutent souvent -es ; les noms plus longs ajoutent -s. Exemple : "das Buch des Mannes" (le livre de l\'homme).',
            },
            exampleGerman: 'Das Auto des Vaters ist neu. / Die Tasche der Frau ist rot.',
            exampleTranslation: {
              en: 'The father\'s car is new. / The woman\'s bag is red.',
              de: 'Das Auto des Vaters ist neu. / Die Tasche der Frau ist rot.',
              es: 'El coche del padre es nuevo. / El bolso de la mujer es rojo.',
              fr: 'La voiture du père est neuve. / Le sac de la femme est rouge.',
            },
          },
          {
            title: {
              en: 'Genitive Prepositions',
              de: 'Präpositionen mit Genitiv',
              es: 'Preposiciones con Genitivo',
              fr: 'Prépositions avec le Génitif',
            },
            explanation: {
              en: 'Some prepositions always trigger the Genitive case: wegen (because of), trotz (despite), während (during), statt/anstatt (instead of), innerhalb (within), außerhalb (outside of).',
              de: 'Einige Präpositionen erfordern immer den Genitiv: wegen (wegen), trotz (trotz), während (während), statt/anstatt (statt), innerhalb (innerhalb), außerhalb (außerhalb).',
              es: 'Algunas preposiciones siempre desencadenan el caso Genitivo: wegen (a causa de), trotz (a pesar de), während (durante), statt/anstatt (en lugar de), innerhalb (dentro de), außerhalb (fuera de).',
              fr: 'Certaines prépositions déclenchent toujours le Génitif : wegen (à cause de), trotz (malgré), während (pendant), statt/anstatt (au lieu de), innerhalb (dans), außerhalb (en dehors de).',
            },
            exampleGerman: 'Wegen des schlechten Wetters bleiben wir zu Hause. / Trotz des Regens gingen wir spazieren.',
            exampleTranslation: {
              en: 'Because of the bad weather, we stay at home. / Despite the rain, we went for a walk.',
              de: 'Wegen des schlechten Wetters bleiben wir zu Hause. / Trotz des Regens gingen wir spazieren.',
              es: 'A causa del mal tiempo, nos quedamos en casa. / A pesar de la lluvia, fuimos a dar un paseo.',
              fr: 'À cause du mauvais temps, nous restons à la maison. / Malgré la pluie, nous sommes allés nous promener.',
            },
          },
        ],
        summary: {
          en: 'Genitive shows possession. Articles: des (m/n) + noun -s/-es, der (f/pl). Key prepositions: wegen, trotz, während, statt. In spoken German, "von + Dative" often replaces it.',
          de: 'Der Genitiv zeigt Besitz. Artikel: des (m/n) + Nomen -s/-es, der (f/Pl.). Wichtige Präpositionen: wegen, trotz, während, statt. Im gesprochenen Deutsch wird er oft durch „von + Dativ" ersetzt.',
          es: 'El Genitivo muestra posesión. Artículos: des (m/n) + sustantivo -s/-es, der (f/pl). Preposiciones clave: wegen, trotz, während, statt. En el alemán hablado, "von + Dativo" a menudo lo reemplaza.',
          fr: 'Le Génitif exprime la possession. Articles : des (m/n) + nom -s/-es, der (f/pl). Prépositions clés : wegen, trotz, während, statt. En allemand parlé, "von + Datif" le remplace souvent.',
        },
        quiz: [
          {
            id: 'B1_genitive_q1',
            question: 'Das ist das Haus ___ Lehrers. (masculine, Genitive)',
            options: ['des', 'der', 'dem', 'den'],
            correctAnswer: 'des',
            explanation: {
              en: '"Lehrer" is masculine. The genitive article for masculine nouns is "des" → "des Lehrers".',
              de: '„Lehrer" ist maskulin. Der Genitivartikel für maskuline Nomen ist „des" → „des Lehrers".',
              es: '"Lehrer" es masculino. El artículo genitivo para sustantivos masculinos es "des" → "des Lehrers".',
              fr: '"Lehrer" est masculin. L\'article génitif pour les noms masculins est "des" → "des Lehrers".',
            },
          },
          {
            id: 'B1_genitive_q2',
            question: '___ des Regens spielten die Kinder draußen. (despite)',
            options: ['Trotz', 'Wegen', 'Während', 'Statt'],
            correctAnswer: 'Trotz',
            explanation: {
              en: '"Trotz" means "despite" and takes the Genitive case. "trotz des Regens" = despite the rain.',
              de: '„Trotz" bedeutet „trotz" und erfordert den Genitiv. „trotz des Regens" = trotz des Regens.',
              es: '"Trotz" significa "a pesar de" y requiere el caso Genitivo. "trotz des Regens" = a pesar de la lluvia.',
              fr: '"Trotz" signifie "malgré" et prend le Génitif. "trotz des Regens" = malgré la pluie.',
            },
          },
          {
            id: 'B1_genitive_q3',
            question: 'Die Farbe ___ Autos ist blau. (neutral noun "Auto")',
            options: ['des', 'der', 'dem', 'das'],
            correctAnswer: 'des',
            explanation: {
              en: '"Auto" is neuter. Genitive article for neuter nouns is "des" → "des Autos".',
              de: '„Auto" ist neutral. Der Genitivartikel für neutrale Nomen ist „des" → „des Autos".',
              es: '"Auto" es neutro. El artículo genitivo para sustantivos neutros es "des" → "des Autos".',
              fr: '"Auto" est neutre. L\'article génitif pour les noms neutres est "des" → "des Autos".',
            },
          },
        ],
      },
      {
        id: 'B1_temporal_conjunctions',
        title: {
          en: 'Temporal Conjunctions (als, wenn, während, bevor, nachdem)',
          de: 'Temporale Konjunktionen (als, wenn, während, bevor, nachdem)',
          es: 'Conjunciones Temporales (als, wenn, während, bevor, nachdem)',
          fr: 'Conjonctions Temporelles (als, wenn, während, bevor, nachdem)',
        },
        description: {
          en: 'Link events in time precisely using German temporal conjunctions.',
          de: 'Verknüpfen Sie Ereignisse in der Zeit präzise mit deutschen Temporalkonjunktionen.',
          es: 'Enlaza eventos en el tiempo con precisión usando conjunciones temporales alemanas.',
          fr: 'Reliez les événements dans le temps avec précision grâce aux conjonctions temporelles allemandes.',
        },
        introduction: {
          en: 'Temporal conjunctions connect two events in time. They are subordinating conjunctions, so the verb always goes to the end of their clause. The most important ones: als (when — single past event), wenn (when/whenever — present or repeated events), während (while — simultaneous), bevor (before), nachdem (after — often requires tense shift).',
          de: 'Temporale Konjunktionen verbinden zwei zeitliche Ereignisse. Sie sind unterordnende Konjunktionen, daher steht das Verb immer am Ende ihres Teilsatzes. Die wichtigsten: als (als – einmaliges Ereignis in der Vergangenheit), wenn (wenn/wann – Gegenwart oder Wiederholungen), während (während – gleichzeitig), bevor (bevor), nachdem (nachdem – oft mit Tempuswechsel).',
          es: 'Las conjunciones temporales conectan dos eventos en el tiempo. Son conjunciones subordinantes, por lo que el verbo siempre va al final de su cláusula. Las más importantes: als (cuando – evento pasado único), wenn (cuando/siempre que – presente o eventos repetidos), während (mientras – simultáneo), bevor (antes de), nachdem (después de – a menudo requiere cambio de tiempo).',
          fr: 'Les conjonctions temporelles relient deux événements dans le temps. Ce sont des conjonctions de subordination, donc le verbe va toujours à la fin de leur proposition. Les plus importantes : als (quand – événement passé unique), wenn (quand/chaque fois que – présent ou événements répétés), während (pendant que – simultané), bevor (avant que), nachdem (après que – nécessite souvent un changement de temps).',
        },
        rules: [
          {
            title: {
              en: '"Als" vs. "Wenn" — When to Use Which',
              de: '„Als" vs. „Wenn" – Wann welches?',
              es: '"Als" vs. "Wenn" — ¿Cuándo usar cuál?',
              fr: '"Als" vs. "Wenn" — Lequel utiliser ?',
            },
            explanation: {
              en: 'Use "als" for a single completed event in the past. Use "wenn" for present/future events OR for repeated past events (whenever). Never use "als" for present or future.',
              de: 'Verwenden Sie „als" für ein einmaliges abgeschlossenes Ereignis in der Vergangenheit. Verwenden Sie „wenn" für gegenwärtige oder zukünftige Ereignisse ODER für wiederholte Ereignisse in der Vergangenheit (jedes Mal wenn). „Als" wird nie für Gegenwart oder Zukunft verwendet.',
              es: 'Usa "als" para un evento pasado único y completo. Usa "wenn" para eventos en presente/futuro O para eventos pasados repetidos (siempre que). Nunca uses "als" para el presente o futuro.',
              fr: 'Utilisez "als" pour un événement passé unique et accompli. Utilisez "wenn" pour les événements au présent/futur OU pour les événements passés répétés (chaque fois que). N\'utilisez jamais "als" au présent ou au futur.',
            },
            exampleGerman: 'Als ich Kind war, spielte ich oft Fußball. / Wenn ich Zeit habe, lese ich gern.',
            exampleTranslation: {
              en: 'When I was a child, I often played football. (past, once) / When I have time, I like to read. (present, repeated)',
              de: 'Als ich Kind war, spielte ich oft Fußball. (Vergangenheit, einmalig) / Wenn ich Zeit habe, lese ich gern. (Gegenwart, wiederholt)',
              es: 'Cuando era niño, jugaba al fútbol con frecuencia. (pasado, único) / Cuando tengo tiempo, me gusta leer. (presente, repetido)',
              fr: 'Quand j\'étais enfant, je jouais souvent au football. (passé, unique) / Quand j\'ai le temps, j\'aime lire. (présent, répété)',
            },
          },
          {
            title: {
              en: '"Während", "Bevor" & "Nachdem"',
              de: '„Während", „Bevor" & „Nachdem"',
              es: '"Während", "Bevor" & "Nachdem"',
              fr: '"Während", "Bevor" & "Nachdem"',
            },
            explanation: {
              en: '"Während" (while) = two things happen at the same time. "Bevor" (before) = action in main clause happens before the subordinate clause action. "Nachdem" (after) = the subordinate clause event happened first; "nachdem" usually requires Perfekt or Plusquamperfekt in its clause.',
              de: '„Während" (während) = zwei Dinge passieren gleichzeitig. „Bevor" (bevor) = Handlung im Hauptsatz geschieht vor der Handlung im Nebensatz. „Nachdem" (nachdem) = Ereignis im Nebensatz geschah zuerst; „nachdem" erfordert meist Perfekt oder Plusquamperfekt.',
              es: '"Während" (mientras) = dos cosas ocurren al mismo tiempo. "Bevor" (antes de) = la acción en la cláusula principal ocurre antes que la del subordinado. "Nachdem" (después de) = el evento de la cláusula subordinada ocurrió primero; "nachdem" normalmente requiere Perfekt o Plusquamperfekt.',
              fr: '"Während" (pendant que) = deux choses se passent en même temps. "Bevor" (avant que) = l\'action de la principale se passe avant celle de la subordonnée. "Nachdem" (après que) = l\'événement de la subordonnée s\'est passé en premier ; "nachdem" nécessite généralement le Parfait ou le Plus-que-parfait.',
            },
            exampleGerman: 'Während ich kochte, hörte er Musik. / Nachdem sie gegessen hatte, ging sie spazieren.',
            exampleTranslation: {
              en: 'While I was cooking, he listened to music. / After she had eaten, she went for a walk.',
              de: 'Während ich kochte, hörte er Musik. / Nachdem sie gegessen hatte, ging sie spazieren.',
              es: 'Mientras yo cocinaba, él escuchaba música. / Después de que ella hubo comido, fue a dar un paseo.',
              fr: 'Pendant que je cuisinais, il écoutait de la musique. / Après qu\'elle eut mangé, elle alla se promener.',
            },
          },
        ],
        summary: {
          en: '"Als" = single past event. "Wenn" = present/future/repeated past. "Während" = simultaneous. "Bevor" = before. "Nachdem" = after (requires earlier tense in the clause). All send the verb to the end.',
          de: '„Als" = einmaliges Ereignis in der Vergangenheit. „Wenn" = Gegenwart/Zukunft/wiederholte Vergangenheit. „Während" = gleichzeitig. „Bevor" = davor. „Nachdem" = danach (erfordert eine frühere Zeitform). Alle schieben das Verb ans Ende.',
          es: '"Als" = evento pasado único. "Wenn" = presente/futuro/pasado repetido. "Während" = simultáneo. "Bevor" = antes. "Nachdem" = después (requiere tiempo anterior en la cláusula). Todas envían el verbo al final.',
          fr: '"Als" = événement passé unique. "Wenn" = présent/futur/passé répété. "Während" = simultané. "Bevor" = avant. "Nachdem" = après (requiert un temps antérieur). Toutes envoient le verbe à la fin.',
        },
        quiz: [
          {
            id: 'B1_temporal_q1',
            question: '___ ich jung war, wohnte ich in München. (single past event)',
            options: ['Als', 'Wenn', 'Während', 'Bevor'],
            correctAnswer: 'Als',
            explanation: {
              en: 'A single completed past event uses "als". "Als ich jung war" = When I was young (one time, past).',
              de: 'Ein einmaliges abgeschlossenes Ereignis in der Vergangenheit verwendet „als". „Als ich jung war" = Als ich jung war (einmalig, Vergangenheit).',
              es: 'Un evento pasado único y completo usa "als". "Als ich jung war" = Cuando era joven (una vez, pasado).',
              fr: 'Un événement passé unique et accompli utilise "als". "Als ich jung war" = Quand j\'étais jeune (une fois, passé).',
            },
          },
          {
            id: 'B1_temporal_q2',
            question: '___ er schläft, machen wir kein Lärm. (simultaneous)',
            options: ['Während', 'Als', 'Nachdem', 'Bevor'],
            correctAnswer: 'Während',
            explanation: {
              en: '"Während" (while) expresses two simultaneous events. While he sleeps, we make no noise.',
              de: '„Während" (während) drückt zwei gleichzeitige Ereignisse aus. Während er schläft, machen wir keinen Lärm.',
              es: '"Während" (mientras) expresa dos eventos simultáneos. Mientras él duerme, nosotros no hacemos ruido.',
              fr: '"Während" (pendant que) exprime deux événements simultanés. Pendant qu\'il dort, nous ne faisons pas de bruit.',
            },
          },
          {
            id: 'B1_temporal_q3',
            question: '___ sie das Buch gelesen hatte, schrieb sie einen Bericht. (after)',
            options: ['Nachdem', 'Bevor', 'Als', 'Wenn'],
            correctAnswer: 'Nachdem',
            explanation: {
              en: '"Nachdem" (after) is used because the reading happened first (indicated by "hatte gelesen" = Plusquamperfekt), then she wrote the report.',
              de: '„Nachdem" wird verwendet, weil das Lesen zuerst stattfand (angezeigt durch „hatte gelesen" = Plusquamperfekt), dann schrieb sie den Bericht.',
              es: '"Nachdem" (después de) se usa porque la lectura ocurrió primero (indicado por "hatte gelesen" = Plusquamperfekt), luego escribió el informe.',
              fr: '"Nachdem" (après que) est utilisé parce que la lecture s\'est produite en premier (indiqué par "hatte gelesen" = plus-que-parfait), puis elle a écrit le rapport.',
            },
          },
        ],
      },
      {
        id: 'B1_adjective_declension',
        title: {
          en: 'Adjective Declension (Adjektivdeklination)',
          de: 'Die Adjektivdeklination',
          es: 'Declinación de Adjetivos (Adjektivdeklination)',
          fr: 'La Déclinaison des Adjectifs (Adjektivdeklination)',
        },
        description: {
          en: 'Learn to give adjectives the correct endings before nouns in all cases.',
          de: 'Lernen Sie, Adjektiven vor Nomen in allen Fällen die richtigen Endungen zu geben.',
          es: 'Aprende a dar a los adjetivos las terminaciones correctas antes de los sustantivos en todos los casos.',
          fr: 'Apprenez à donner aux adjectifs les bonnes terminaisons devant les noms dans tous les cas.',
        },
        introduction: {
          en: 'In German, an adjective placed before a noun must take an ending that depends on three factors: (1) the grammatical case (Nominative, Accusative, Dative, Genitive), (2) the gender of the noun (m/f/n), and (3) whether the article is definite (weak), indefinite (mixed), or absent (strong). At B1, focus on weak (after der/die/das) and mixed (after ein/kein) declensions.',
          de: 'Im Deutschen muss ein Adjektiv vor einem Nomen eine Endung erhalten, die von drei Faktoren abhängt: (1) dem grammatischen Fall, (2) dem Genus des Nomens und (3) ob ein bestimmter (schwach), unbestimmter (gemischt) oder kein Artikel (stark) steht. Auf B1-Niveau sollten Sie sich auf die schwache (nach der/die/das) und gemischte (nach ein/kein) Deklination konzentrieren.',
          es: 'En alemán, un adjetivo colocado antes de un sustantivo debe tomar una terminación que depende de tres factores: (1) el caso gramatical, (2) el género del sustantivo (m/f/n), y (3) si el artículo es definido (débil), indefinido (mixto) o ausente (fuerte). En B1, concéntrate en las declinaciones débil (después de der/die/das) y mixta (después de ein/kein).',
          fr: 'En allemand, un adjectif placé avant un nom doit prendre une terminaison qui dépend de trois facteurs : (1) le cas grammatical, (2) le genre du nom (m/f/n), et (3) si l\'article est défini (faible), indéfini (mixte) ou absent (fort). Au niveau B1, concentrez-vous sur les déclinaisons faible (après der/die/das) et mixte (après ein/kein).',
        },
        rules: [
          {
            title: {
              en: 'Weak Declension — After Definite Articles (der/die/das)',
              de: 'Schwache Deklination — Nach bestimmten Artikeln (der/die/das)',
              es: 'Declinación Débil — Después de Artículos Definidos (der/die/das)',
              fr: 'Déclinaison Faible — Après les Articles Définis (der/die/das)',
            },
            explanation: {
              en: 'After definite articles, adjective endings are simple: Nominative singular → -e (all genders). All other cases (Accusative, Dative, Genitive) and all plural forms → -en. Pattern: -e in Nom. singular, -en everywhere else.',
              de: 'Nach bestimmten Artikeln sind die Adjektivendungen einfach: Nominativ Singular → -e (alle Genera). Alle anderen Fälle (Akkusativ, Dativ, Genitiv) und alle Pluralformen → -en. Muster: -e im Nom. Singular, -en überall sonst.',
              es: 'Después de artículos definidos, las terminaciones adjetivas son simples: Nominativo singular → -e (todos los géneros). Todos los demás casos (Acusativo, Dativo, Genitivo) y todas las formas plurales → -en. Patrón: -e en Nom. singular, -en en todo lo demás.',
              fr: 'Après les articles définis, les terminaisons des adjectifs sont simples : Nominatif singulier → -e (tous genres). Tous les autres cas (Accusatif, Datif, Génitif) et toutes les formes plurielles → -en. Modèle : -e au Nom. singulier, -en partout ailleurs.',
            },
            exampleGerman: 'Der alte Mann (Nom.) / Den alten Mann (Acc.) / Mit dem alten Mann (Dat.)',
            exampleTranslation: {
              en: 'The old man (Nominative) / the old man (Accusative) / with the old man (Dative)',
              de: 'Der alte Mann (Nom.) / Den alten Mann (Akk.) / Mit dem alten Mann (Dat.)',
              es: 'El hombre viejo (Nom.) / al hombre viejo (Acus.) / con el hombre viejo (Dat.)',
              fr: 'Le vieil homme (Nom.) / le vieil homme (Acc.) / avec le vieil homme (Dat.)',
            },
          },
          {
            title: {
              en: 'Mixed Declension — After Indefinite Articles (ein/kein)',
              de: 'Gemischte Deklination — Nach unbestimmten Artikeln (ein/kein)',
              es: 'Declinación Mixta — Después de Artículos Indefinidos (ein/kein)',
              fr: 'Déclinaison Mixte — Après les Articles Indéfinis (ein/kein)',
            },
            explanation: {
              en: 'After "ein/kein" or possessive pronouns (mein, dein, etc.), the adjective must show the gender signal in Nominative/Accusative where the article doesn\'t. Endings: Nominative: m=-er, f=-e, n=-es. Accusative: m=-en, f=-e, n=-es. Dative/Genitive: always -en.',
              de: 'Nach „ein/kein" oder Possessivpronomen (mein, dein usw.) muss das Adjektiv im Nominativ/Akkusativ das Genussignal tragen, wo der Artikel es nicht tut. Endungen: Nominativ: m=-er, f=-e, n=-es. Akkusativ: m=-en, f=-e, n=-es. Dativ/Genitiv: immer -en.',
              es: 'Después de "ein/kein" o pronombres posesivos (mein, dein, etc.), el adjetivo debe mostrar la señal de género en Nominativo/Acusativo donde el artículo no lo hace. Terminaciones: Nominativo: m=-er, f=-e, n=-es. Acusativo: m=-en, f=-e, n=-es. Dativo/Genitivo: siempre -en.',
              fr: 'Après "ein/kein" ou les pronoms possessifs (mein, dein, etc.), l\'adjectif doit porter le signal de genre au Nominatif/Accusatif là où l\'article ne le fait pas. Terminaisons : Nominatif : m=-er, f=-e, n=-es. Accusatif : m=-en, f=-e, n=-es. Datif/Génitif : toujours -en.',
            },
            exampleGerman: 'Ein großer Hund (m, Nom.) / eine schöne Frau (f, Nom.) / ein neues Auto (n, Nom.)',
            exampleTranslation: {
              en: 'A big dog / a beautiful woman / a new car',
              de: 'Ein großer Hund / eine schöne Frau / ein neues Auto',
              es: 'Un perro grande / una mujer hermosa / un coche nuevo',
              fr: 'Un grand chien / une belle femme / une nouvelle voiture',
            },
          },
        ],
        summary: {
          en: 'Weak (der/die/das): -e in Nominative singular, -en everywhere else. Mixed (ein/kein): show gender signal (-er/-e/-es) in Nom./Acc. where article is ambiguous, -en in Dative/Genitive.',
          de: 'Schwach (der/die/das): -e im Nominativ Singular, -en überall sonst. Gemischt (ein/kein): Genussignal (-er/-e/-es) im Nom./Akk. wo der Artikel unklar ist, -en im Dativ/Genitiv.',
          es: 'Débil (der/die/das): -e en Nominativo singular, -en en todo lo demás. Mixta (ein/kein): señal de género (-er/-e/-es) en Nom./Acus. donde el artículo es ambiguo, -en en Dativo/Genitivo.',
          fr: 'Faible (der/die/das) : -e au Nominatif singulier, -en partout ailleurs. Mixte (ein/kein) : signal de genre (-er/-e/-es) au Nom./Acc. là où l\'article est ambigu, -en au Datif/Génitif.',
        },
        quiz: [
          {
            id: 'B1_adjdecl_q1',
            question: 'Die ___ Frau spricht Deutsch. (alt, f, Nominative — weak)',
            options: ['alte', 'alten', 'alter', 'altes'],
            correctAnswer: 'alte',
            explanation: {
              en: 'After definite article "die" (feminine Nominative), adjective takes -e → "alte".',
              de: 'Nach dem bestimmten Artikel „die" (Femininum Nominativ) erhält das Adjektiv -e → „alte".',
              es: 'Después del artículo definido "die" (femenino Nominativo), el adjetivo toma -e → "alte".',
              fr: 'Après l\'article défini "die" (féminin Nominatif), l\'adjectif prend -e → "alte".',
            },
          },
          {
            id: 'B1_adjdecl_q2',
            question: 'Ich sehe einen ___ Hund. (groß, m, Accusative — mixed)',
            options: ['großen', 'großer', 'große', 'großes'],
            correctAnswer: 'großen',
            explanation: {
              en: 'After "einen" (masculine Accusative), mixed declension gives -en → "großen".',
              de: 'Nach „einen" (Maskulinum Akkusativ) gibt die gemischte Deklination -en → „großen".',
              es: 'Después de "einen" (masculino Acusativo), la declinación mixta da -en → "großen".',
              fr: 'Après "einen" (masculin Accusatif), la déclinaison mixte donne -en → "großen".',
            },
          },
          {
            id: 'B1_adjdecl_q3',
            question: 'Das ist ein ___ Kind. (klein, n, Nominative — mixed)',
            options: ['kleines', 'kleine', 'kleinen', 'kleiner'],
            correctAnswer: 'kleines',
            explanation: {
              en: 'After "ein" (neuter Nominative), the adjective must carry the gender signal -es → "kleines".',
              de: 'Nach „ein" (Neutrum Nominativ) muss das Adjektiv das Genussignal -es tragen → „kleines".',
              es: 'Después de "ein" (neutro Nominativo), el adjetivo debe llevar la señal de género -es → "kleines".',
              fr: 'Après "ein" (neutre Nominatif), l\'adjectif doit porter le signal de genre -es → "kleines".',
            },
          },
        ],
      },
      {
        id: 'B1_modal_past',
        title: {
          en: 'Modal Verbs in the Past (Modalverben in der Vergangenheit)',
          de: 'Modalverben in der Vergangenheit',
          es: 'Verbos Modales en el Pasado',
          fr: 'Les Verbes Modaux au Passé',
        },
        description: {
          en: 'Say what you had to, could, or were allowed to do in the past.',
          de: 'Sagen Sie, was Sie in der Vergangenheit tun mussten, konnten oder durften.',
          es: 'Di lo que tuviste que hacer, pudiste o se te permitió hacer en el pasado.',
          fr: 'Dites ce que vous avez dû, pu ou été autorisé à faire dans le passé.',
        },
        introduction: {
          en: 'Modal verbs (können, müssen, dürfen, wollen, sollen, mögen) have two ways to express the past: (1) Präteritum forms, which are commonly used even in spoken German — e.g. "konnte, musste, durfte". (2) Perfekt with double infinitive — e.g. "Ich habe arbeiten müssen." The Präteritum forms are strongly preferred for modals in everyday use.',
          de: 'Modalverben (können, müssen, dürfen, wollen, sollen, mögen) haben zwei Möglichkeiten, die Vergangenheit auszudrücken: (1) Präteritumformen, die auch im gesprochenen Deutsch üblich sind — z. B. „konnte, musste, durfte". (2) Perfekt mit doppeltem Infinitiv — z. B. „Ich habe arbeiten müssen." Für Modalverben werden die Präteritumformen im Alltag stark bevorzugt.',
          es: 'Los verbos modales (können, müssen, dürfen, wollen, sollen, mögen) tienen dos formas de expresar el pasado: (1) Formas en Präteritum, comúnmente usadas incluso en el alemán hablado — p. ej. "konnte, musste, durfte". (2) Perfekt con doble infinitivo — p. ej. "Ich habe arbeiten müssen." Las formas en Präteritum son fuertemente preferidas para los verbos modales en uso cotidiano.',
          fr: 'Les verbes modaux (können, müssen, dürfen, wollen, sollen, mögen) ont deux façons d\'exprimer le passé : (1) Les formes au Präteritum, couramment utilisées même en allemand parlé — p. ex. "konnte, musste, durfte". (2) Le Parfait avec double infinitif — p. ex. "Ich habe arbeiten müssen." Les formes au Präteritum sont fortement préférées pour les verbes modaux dans l\'usage quotidien.',
        },
        rules: [
          {
            title: {
              en: 'Präteritum Forms of Modal Verbs',
              de: 'Präteritumformen der Modalverben',
              es: 'Formas en Präteritum de los Verbos Modales',
              fr: 'Formes au Präteritum des Verbes Modaux',
            },
            explanation: {
              en: 'All modal verbs drop their Umlaut in Präteritum and take regular -te endings. Key forms (ich/er/sie/es): können → konnte, müssen → musste, dürfen → durfte, wollen → wollte, sollen → sollte, mögen → mochte. Wir/sie/Sie add -ten.',
              de: 'Alle Modalverben verlieren im Präteritum ihren Umlaut und erhalten die regelmäßigen -te-Endungen. Wichtige Formen (ich/er/sie/es): können → konnte, müssen → musste, dürfen → durfte, wollen → wollte, sollen → sollte, mögen → mochte. Wir/sie/Sie erhalten -ten.',
              es: 'Todos los verbos modales pierden su Umlaut en Präteritum y toman las terminaciones regulares -te. Formas clave (ich/er/sie/es): können → konnte, müssen → musste, dürfen → durfte, wollen → wollte, sollen → sollte, mögen → mochte. Wir/sie/Sie añaden -ten.',
              fr: 'Tous les verbes modaux perdent leur Umlaut au Präteritum et prennent les terminaisons régulières -te. Formes clés (ich/er/sie/es) : können → konnte, müssen → musste, dürfen → durfte, wollen → wollte, sollen → sollte, mögen → mochte. Wir/sie/Sie ajoutent -ten.',
            },
            exampleGerman: 'Gestern musste ich früh aufstehen. / Als Kind konnte er gut schwimmen. / Sie durfte nicht ausgehen.',
            exampleTranslation: {
              en: 'Yesterday I had to get up early. / As a child he could swim well. / She was not allowed to go out.',
              de: 'Gestern musste ich früh aufstehen. / Als Kind konnte er gut schwimmen. / Sie durfte nicht ausgehen.',
              es: 'Ayer tuve que levantarme temprano. / De niño él sabía nadar bien. / Ella no podía/tenía permitido salir.',
              fr: 'Hier, je devais me lever tôt. / Enfant, il savait bien nager. / Elle n\'avait pas le droit de sortir.',
            },
          },
          {
            title: {
              en: 'Perfect with Double Infinitive',
              de: 'Perfekt mit doppeltem Infinitiv',
              es: 'Perfekt con Doble Infinitivo',
              fr: 'Parfait avec Double Infinitif',
            },
            explanation: {
              en: 'In formal or written language, modal verbs in Perfekt use a double infinitive construction: haben + main-verb-infinitive + modal-infinitive (at the very end). The past participle of the modal (e.g. gekonnt, gemusst) is NOT used when paired with another infinitive.',
              de: 'In der formellen oder schriftlichen Sprache werden Modalverben im Perfekt mit einem doppelten Infinitiv gebildet: haben + Vollverb-Infinitiv + Modal-Infinitiv (ganz am Ende). Das Partizip II des Modals (z. B. gekonnt, gemusst) wird NICHT verwendet, wenn es mit einem anderen Infinitiv verbunden ist.',
              es: 'En el lenguaje formal o escrito, los verbos modales en Perfekt usan una construcción de doble infinitivo: haben + infinitivo del verbo principal + infinitivo modal (al final). El Partizip II del modal (p. ej. gekonnt, gemusst) NO se usa cuando está combinado con otro infinitivo.',
              fr: 'Dans le langage formel ou écrit, les verbes modaux au Parfait utilisent une construction à double infinitif : haben + infinitif du verbe principal + infinitif modal (à la toute fin). Le participe passé du modal (p. ex. gekonnt, gemusst) N\'est PAS utilisé quand il est combiné avec un autre infinitif.',
            },
            exampleGerman: 'Ich habe gestern länger arbeiten müssen. (formal) ↔ Ich musste gestern länger arbeiten. (everyday)',
            exampleTranslation: {
              en: 'I had to work longer yesterday. (Both forms are correct; Präteritum form is preferred in speech.)',
              de: 'Ich habe gestern länger arbeiten müssen. (formal) ↔ Ich musste gestern länger arbeiten. (Alltag)',
              es: 'Tuve que trabajar más tiempo ayer. (Ambas formas son correctas; la forma en Präteritum se prefiere en el habla.)',
              fr: 'J\'ai dû travailler plus longtemps hier. (Les deux formes sont correctes ; la forme au Präteritum est préférée à l\'oral.)',
            },
          },
        ],
        summary: {
          en: 'Modal Präteritum (preferred in speech): können→konnte, müssen→musste, dürfen→durfte, wollen→wollte, sollen→sollte. Perfekt of modals uses double infinitive: "haben + infinitive + modal-infinitive".',
          de: 'Modal-Präteritum (im Gespräch bevorzugt): können→konnte, müssen→musste, dürfen→durfte, wollen→wollte, sollen→sollte. Perfekt der Modalverben verwendet den doppelten Infinitiv: „haben + Infinitiv + Modalinfinitiv".',
          es: 'Präteritum modal (preferido en el habla): können→konnte, müssen→musste, dürfen→durfte, wollen→wollte, sollen→sollte. El Perfekt de los modales usa doble infinitivo: "haben + infinitivo + infinitivo modal".',
          fr: 'Präteritum des modaux (préféré à l\'oral) : können→konnte, müssen→musste, dürfen→durfte, wollen→wollte, sollen→sollte. Le Parfait des modaux utilise le double infinitif : "haben + infinitif + infinitif modal".',
        },
        quiz: [
          {
            id: 'B1_modal_past_q1',
            question: 'Gestern ___ ich früh aufstehen. (müssen, Präteritum)',
            options: ['musste', 'muss', 'müsste', 'gemusst'],
            correctAnswer: 'musste',
            explanation: {
              en: '"müssen" in Präteritum (ich form) = "musste". Drop the Umlaut and add -te.',
              de: '„müssen" im Präteritum (ich-Form) = „musste". Umlaut weglassen und -te anhängen.',
              es: '"müssen" en Präteritum (forma ich) = "musste". Eliminar el Umlaut y añadir -te.',
              fr: '"müssen" au Präteritum (forme ich) = "musste". Supprimer l\'Umlaut et ajouter -te.',
            },
          },
          {
            id: 'B1_modal_past_q2',
            question: 'Als Kind ___ sie nicht alleine ausgehen. (dürfen, Präteritum)',
            options: ['durfte', 'dürfte', 'darf', 'gedurft'],
            correctAnswer: 'durfte',
            explanation: {
              en: '"dürfen" → Präteritum (sie, singular) = "durfte". No Umlaut, + -te ending.',
              de: '„dürfen" → Präteritum (sie, Singular) = „durfte". Kein Umlaut, + -te-Endung.',
              es: '"dürfen" → Präteritum (sie, singular) = "durfte". Sin Umlaut, + terminación -te.',
              fr: '"dürfen" → Präteritum (sie, singulier) = "durfte". Pas d\'Umlaut, + terminaison -te.',
            },
          },
          {
            id: 'B1_modal_past_q3',
            question: 'Er hat das Buch lesen ___ . (können — Perfekt double infinitive)',
            options: ['können', 'gekonnt', 'kann', 'könnend'],
            correctAnswer: 'können',
            explanation: {
              en: 'In the Perfekt double infinitive construction, the modal stays as an infinitive at the end: "hat ... lesen können" — NOT "gekonnt".',
              de: 'Bei der Perfektkonstruktion mit doppeltem Infinitiv bleibt das Modal als Infinitiv am Ende: „hat ... lesen können" — NICHT „gekonnt".',
              es: 'En la construcción de Perfekt con doble infinitivo, el modal se mantiene como infinitivo al final: "hat ... lesen können" — NO "gekonnt".',
              fr: 'Dans la construction du Parfait à double infinitif, le modal reste à l\'infinitif à la fin : "hat ... lesen können" — PAS "gekonnt".',
            },
          },
        ],
      },
      {
        id: 'B1_two_part_conjunctions',
        title: {
          en: 'Two-Part Conjunctions (Zweiteilige Konjunktionen)',
          de: 'Zweiteilige Konjunktionen',
          es: 'Conjunciones en Dos Partes (Zweiteilige Konjunktionen)',
          fr: 'Conjonctions en Deux Parties (Zweiteilige Konjunktionen)',
        },
        description: {
          en: 'Express either/or, both/and, not only/but also connections with paired connectors.',
          de: 'Drücken Sie entweder/oder, sowohl/als auch, nicht nur/sondern auch mit gepaarten Konnektoren aus.',
          es: 'Expresa conexiones de o/o, tanto/como, no solo/sino también con conectores emparejados.',
          fr: 'Exprimez des connexions soit/soit, à la fois/et, non seulement/mais aussi avec des connecteurs appariés.',
        },
        introduction: {
          en: 'Two-part conjunctions (korrelative Konjunktionen) work in pairs — one part introduces the first element, and the second part introduces the second element. Unlike subordinating conjunctions, most coordinate the two main clauses without sending verbs to the end. The main pairs to know at B1: entweder...oder (either...or), sowohl...als auch (both...and), nicht nur...sondern auch (not only...but also), weder...noch (neither...nor).',
          de: 'Zweiteilige Konjunktionen (korrelativer Konjunktionen) funktionieren paarweise – ein Teil leitet das erste Element ein, der zweite Teil das zweite Element. Im Gegensatz zu unterordnenden Konjunktionen koordinieren die meisten zwei Hauptsätze, ohne Verben ans Ende zu schicken. Die wichtigsten Paare auf B1-Niveau: entweder...oder (entweder...oder), sowohl...als auch (sowohl...als auch), nicht nur...sondern auch (nicht nur...sondern auch), weder...noch (weder...noch).',
          es: 'Las conjunciones en dos partes (conjunciones correlativas) trabajan en pares — una parte introduce el primer elemento, y la segunda parte introduce el segundo elemento. A diferencia de las conjunciones subordinantes, la mayoría coordinan dos cláusulas principales sin enviar verbos al final. Los principales pares a conocer en B1: entweder...oder (o...o), sowohl...als auch (tanto...como), nicht nur...sondern auch (no solo...sino también), weder...noch (ni...ni).',
          fr: 'Les conjonctions en deux parties (conjonctions corrélatives) fonctionnent par paires — une partie introduit le premier élément, et la seconde partie introduit le second élément. Contrairement aux conjonctions de subordination, la plupart coordonnent deux propositions principales sans envoyer les verbes à la fin. Les principales paires à connaître au niveau B1 : entweder...oder (soit...soit), sowohl...als auch (à la fois...et), nicht nur...sondern auch (non seulement...mais aussi), weder...noch (ni...ni).',
        },
        rules: [
          {
            title: {
              en: 'Entweder...oder & Weder...noch',
              de: 'Entweder...oder & Weder...noch',
              es: 'Entweder...oder & Weder...noch',
              fr: 'Entweder...oder & Weder...noch',
            },
            explanation: {
              en: '"Entweder...oder" (either...or) presents two alternatives. "Weder...noch" (neither...nor) negates both. When "entweder" starts a main clause, verb inversion follows. "Weder...noch" can negate both verb phrases or nouns.',
              de: '„Entweder...oder" (entweder...oder) stellt zwei Alternativen vor. „Weder...noch" (weder...noch) verneint beide. Wenn „entweder" einen Hauptsatz beginnt, folgt Inversion. „Weder...noch" kann beide Verbphrasen oder Nomen verneinen.',
              es: '"Entweder...oder" (o...o) presenta dos alternativas. "Weder...noch" (ni...ni) niega ambas. Cuando "entweder" comienza una cláusula principal, sigue la inversión verbo-sujeto. "Weder...noch" puede negar ambas frases verbales o sustantivos.',
              fr: '"Entweder...oder" (soit...soit) présente deux alternatives. "Weder...noch" (ni...ni) nie les deux. Quand "entweder" commence une proposition principale, une inversion suit. "Weder...noch" peut nier les deux syntagmes verbaux ou les noms.',
            },
            exampleGerman: 'Entweder komme ich morgen, oder ich bleibe zu Hause. / Er spricht weder Spanisch noch Französisch.',
            exampleTranslation: {
              en: 'Either I come tomorrow, or I stay at home. / He speaks neither Spanish nor French.',
              de: 'Entweder komme ich morgen, oder ich bleibe zu Hause. / Er spricht weder Spanisch noch Französisch.',
              es: 'O vengo mañana, o me quedo en casa. / Él no habla ni español ni francés.',
              fr: 'Soit je viens demain, soit je reste à la maison. / Il ne parle ni espagnol ni français.',
            },
          },
          {
            title: {
              en: 'Sowohl...als auch & Nicht nur...sondern auch',
              de: 'Sowohl...als auch & Nicht nur...sondern auch',
              es: 'Sowohl...als auch & Nicht nur...sondern auch',
              fr: 'Sowohl...als auch & Nicht nur...sondern auch',
            },
            explanation: {
              en: '"Sowohl...als auch" (both...and) connects two equally valid elements. "Nicht nur...sondern auch" (not only...but also) adds emphasis to the second element. Both can connect nouns, adjectives, or whole clauses.',
              de: '„Sowohl...als auch" (sowohl...als auch) verbindet zwei gleichwertige Elemente. „Nicht nur...sondern auch" (nicht nur...sondern auch) betont das zweite Element zusätzlich. Beide können Nomen, Adjektive oder ganze Sätze verbinden.',
              es: '"Sowohl...als auch" (tanto...como) conecta dos elementos igualmente válidos. "Nicht nur...sondern auch" (no solo...sino también) añade énfasis al segundo elemento. Ambos pueden conectar sustantivos, adjetivos o cláusulas completas.',
              fr: '"Sowohl...als auch" (à la fois...et) relie deux éléments également valables. "Nicht nur...sondern auch" (non seulement...mais aussi) ajoute de l\'emphase au second élément. Les deux peuvent relier des noms, des adjectifs ou des propositions entières.',
            },
            exampleGerman: 'Sie spricht sowohl Deutsch als auch Englisch. / Er ist nicht nur klug, sondern auch fleißig.',
            exampleTranslation: {
              en: 'She speaks both German and English. / He is not only clever, but also hardworking.',
              de: 'Sie spricht sowohl Deutsch als auch Englisch. / Er ist nicht nur klug, sondern auch fleißig.',
              es: 'Ella habla tanto alemán como inglés. / Él no solo es inteligente, sino también trabajador.',
              fr: 'Elle parle à la fois allemand et anglais. / Il est non seulement intelligent, mais aussi travailleur.',
            },
          },
        ],
        summary: {
          en: 'Key pairs: entweder...oder (either/or), weder...noch (neither/nor), sowohl...als auch (both/and), nicht nur...sondern auch (not only/but also). These coordinate elements without sending verbs to the end (unlike subordinating conjunctions).',
          de: 'Wichtige Paare: entweder...oder, weder...noch, sowohl...als auch, nicht nur...sondern auch. Diese koordinieren Elemente ohne das Verb ans Ende zu schicken (anders als unterordnende Konjunktionen).',
          es: 'Pares clave: entweder...oder (o/o), weder...noch (ni/ni), sowohl...als auch (tanto/como), nicht nur...sondern auch (no solo/sino también). Estos coordinan elementos sin enviar verbos al final (a diferencia de las conjunciones subordinantes).',
          fr: 'Paires clés : entweder...oder (soit/soit), weder...noch (ni/ni), sowohl...als auch (à la fois/et), nicht nur...sondern auch (non seulement/mais aussi). Ils coordonnent les éléments sans envoyer les verbes à la fin (contrairement aux conjonctions de subordination).',
        },
        quiz: [
          {
            id: 'B1_two_part_q1',
            question: '___ komme ich heute, ___ ich komme morgen. (either...or)',
            options: ['Entweder / oder', 'Sowohl / als auch', 'Weder / noch', 'Nicht nur / sondern auch'],
            correctAnswer: 'Entweder / oder',
            explanation: {
              en: '"Entweder...oder" presents two alternatives: either I come today, or I come tomorrow.',
              de: '„Entweder...oder" stellt zwei Alternativen vor: Entweder komme ich heute, oder ich komme morgen.',
              es: '"Entweder...oder" presenta dos alternativas: o vengo hoy, o vengo mañana.',
              fr: '"Entweder...oder" présente deux alternatives : soit je viens aujourd\'hui, soit je viens demain.',
            },
          },
          {
            id: 'B1_two_part_q2',
            question: 'Er spricht ___ Spanisch ___ Italienisch. (neither...nor)',
            options: ['weder / noch', 'entweder / oder', 'sowohl / als auch', 'nicht nur / sondern auch'],
            correctAnswer: 'weder / noch',
            explanation: {
              en: '"Weder...noch" (neither...nor) negates both elements. He speaks neither Spanish nor Italian.',
              de: '„Weder...noch" (weder...noch) verneint beide Elemente. Er spricht weder Spanisch noch Italienisch.',
              es: '"Weder...noch" (ni...ni) niega ambos elementos. Él no habla ni español ni italiano.',
              fr: '"Weder...noch" (ni...ni) nie les deux éléments. Il ne parle ni espagnol ni italien.',
            },
          },
          {
            id: 'B1_two_part_q3',
            question: 'Sie ist ___ intelligent ___ freundlich. (not only...but also)',
            options: ['nicht nur / sondern auch', 'entweder / oder', 'sowohl / als auch', 'weder / noch'],
            correctAnswer: 'nicht nur / sondern auch',
            explanation: {
              en: '"Nicht nur...sondern auch" (not only...but also) adds emphasis. She is not only intelligent but also friendly.',
              de: '„Nicht nur...sondern auch" (nicht nur...sondern auch) betont das zweite Element. Sie ist nicht nur intelligent, sondern auch freundlich.',
              es: '"Nicht nur...sondern auch" (no solo...sino también) añade énfasis. Ella no solo es inteligente sino también amigable.',
              fr: '"Nicht nur...sondern auch" (non seulement...mais aussi) ajoute de l\'emphase. Elle est non seulement intelligente mais aussi aimable.',
            },
          },
        ],
      },
      {
        id: 'B1_reported_speech',
        title: {
          en: 'Reported Speech (Indirekte Rede)',
          de: 'Die indirekte Rede',
          es: 'Discurso Indirecto (Indirekte Rede)',
          fr: 'Le Discours Indirect (Indirekte Rede)',
        },
        description: {
          en: 'Report what others said without quoting them directly.',
          de: 'Berichten Sie, was andere gesagt haben, ohne sie direkt zu zitieren.',
          es: 'Reporta lo que otros dijeron sin citarlos directamente.',
          fr: 'Rapportez ce que d\'autres ont dit sans les citer directement.',
        },
        introduction: {
          en: 'Reported speech (indirekte Rede) is used when you report what someone else said, thought, or claimed, without quoting them word for word. In everyday spoken German, reported speech is often expressed with Konjunktiv II (würde, wäre, hätte) or with the indicative + "dass" clause. In formal written German (journalism, literature), Konjunktiv I is used. At B1, focus on the everyday approach using "dass" + indicative or Konjunktiv II.',
          de: 'Die indirekte Rede wird verwendet, wenn man berichtet, was jemand anderes gesagt, gedacht oder behauptet hat, ohne ihn wörtlich zu zitieren. Im alltäglichen gesprochenen Deutsch wird die indirekte Rede oft mit Konjunktiv II (würde, wäre, hätte) oder mit dem Indikativ + „dass"-Satz ausgedrückt. Im formellen schriftlichen Deutsch (Journalismus, Literatur) wird der Konjunktiv I verwendet. Auf B1-Niveau sollten Sie sich auf den Alltagsansatz mit „dass" + Indikativ oder Konjunktiv II konzentrieren.',
          es: 'El discurso indirecto se usa cuando reportas lo que alguien más dijo, pensó o afirmó, sin citarlos textualmente. En el alemán hablado cotidiano, el discurso indirecto se expresa a menudo con Konjunktiv II (würde, wäre, hätte) o con el indicativo + cláusula "dass". En el alemán escrito formal (periodismo, literatura), se usa Konjunktiv I. En B1, concéntrate en el enfoque cotidiano usando "dass" + indicativo o Konjunktiv II.',
          fr: 'Le discours indirect est utilisé quand on rapporte ce que quelqu\'un d\'autre a dit, pensé ou affirmé, sans le citer mot pour mot. Dans l\'allemand parlé quotidien, le discours indirect s\'exprime souvent avec le Konjunktiv II (würde, wäre, hätte) ou avec l\'indicatif + proposition "dass". Dans l\'allemand formel écrit (journalisme, littérature), le Konjunktiv I est utilisé. Au niveau B1, concentrez-vous sur l\'approche quotidienne en utilisant "dass" + indicatif ou Konjunktiv II.',
        },
        rules: [
          {
            title: {
              en: 'Reported Speech with "dass" (Everyday)',
              de: 'Indirekte Rede mit „dass" (Alltag)',
              es: 'Discurso Indirecto con "dass" (Cotidiano)',
              fr: 'Discours Indirect avec "dass" (Quotidien)',
            },
            explanation: {
              en: 'The most common way: use a reporting verb (sagen, erzählen, meinen, denken) + "dass" + subordinate clause. The verb goes to the end after "dass". Personal pronouns must be adjusted from the speaker\'s perspective. Example: Direct: "Ich bin müde." → Reported: "Er sagt, dass er müde ist."',
              de: 'Der häufigste Weg: Verwenden Sie ein Berichtsverb (sagen, erzählen, meinen, denken) + „dass" + Nebensatz. Das Verb steht nach „dass" am Ende. Personalpronomen müssen aus der Perspektive des Sprechers angepasst werden. Beispiel: Direkt: „Ich bin müde." → Indirekt: „Er sagt, dass er müde ist."',
              es: 'La forma más común: usa un verbo de reporte (sagen, erzählen, meinen, denken) + "dass" + cláusula subordinada. El verbo va al final después de "dass". Los pronombres personales deben ajustarse desde la perspectiva del hablante. Ejemplo: Directo: "Ich bin müde." → Reportado: "Er sagt, dass er müde ist."',
              fr: 'La façon la plus courante : utilisez un verbe de rapport (sagen, erzählen, meinen, denken) + "dass" + proposition subordonnée. Le verbe va à la fin après "dass". Les pronoms personnels doivent être ajustés du point de vue du locuteur. Exemple : Direct : "Ich bin müde." → Rapporté : "Er sagt, dass er müde ist."',
            },
            exampleGerman: 'Direkt: „Ich habe keine Zeit." → Indirekt: Sie sagt, dass sie keine Zeit hat.',
            exampleTranslation: {
              en: 'Direct: "I have no time." → Reported: She says that she has no time.',
              de: 'Direkt: „Ich habe keine Zeit." → Indirekt: Sie sagt, dass sie keine Zeit hat.',
              es: 'Directo: "No tengo tiempo." → Reportado: Ella dice que no tiene tiempo.',
              fr: 'Direct : "Je n\'ai pas le temps." → Rapporté : Elle dit qu\'elle n\'a pas le temps.',
            },
          },
          {
            title: {
              en: 'Reported Speech without "dass" (Verb-Second)',
              de: 'Indirekte Rede ohne „dass" (Verb-Zweit)',
              es: 'Discurso Indirecto sin "dass" (Verbo-Segundo)',
              fr: 'Discours Indirect sans "dass" (Verbe-Deuxième)',
            },
            explanation: {
              en: 'You can also report speech without "dass". In this case, the word order stays main-clause style (V2): subject + verb + rest. This is very common in spoken German. Example: "Er sagt, er ist müde." is the same meaning as "Er sagt, dass er müde ist."',
              de: 'Sie können die indirekte Rede auch ohne „dass" wiedergeben. In diesem Fall bleibt die Wortstellung wie im Hauptsatz (V2): Subjekt + Verb + Rest. Dies ist im gesprochenen Deutsch sehr häufig. Beispiel: „Er sagt, er ist müde." hat dieselbe Bedeutung wie „Er sagt, dass er müde ist."',
              es: 'También puedes reportar el discurso sin "dass". En este caso, el orden de palabras permanece como en una cláusula principal (V2): sujeto + verbo + resto. Esto es muy común en el alemán hablado. Ejemplo: "Er sagt, er ist müde." tiene el mismo significado que "Er sagt, dass er müde ist."',
              fr: 'Vous pouvez aussi rapporter le discours sans "dass". Dans ce cas, l\'ordre des mots reste comme dans une proposition principale (V2) : sujet + verbe + reste. C\'est très courant en allemand parlé. Exemple : "Er sagt, er ist müde." a le même sens que "Er sagt, dass er müde ist."',
            },
            exampleGerman: 'Er sagt, er kommt morgen nicht. (= Er sagt, dass er morgen nicht kommt.)',
            exampleTranslation: {
              en: 'He says he is not coming tomorrow. (Both structures are correct.)',
              de: 'Er sagt, er kommt morgen nicht. (= Er sagt, dass er morgen nicht kommt.)',
              es: 'Él dice que no viene mañana. (Ambas estructuras son correctas.)',
              fr: 'Il dit qu\'il ne vient pas demain. (Les deux structures sont correctes.)',
            },
          },
        ],
        summary: {
          en: 'Reported speech: use sagen/meinen/denken + "dass" + verb at end, OR without "dass" keeping V2 order. Adjust pronouns (ich → er/sie). In formal German, Konjunktiv I is used (see C2 level).',
          de: 'Indirekte Rede: sagen/meinen/denken + „dass" + Verb am Ende, ODER ohne „dass" mit V2-Stellung. Pronomen anpassen (ich → er/sie). Im formellen Deutsch wird Konjunktiv I verwendet (siehe C2-Niveau).',
          es: 'Discurso indirecto: usa sagen/meinen/denken + "dass" + verbo al final, O sin "dass" manteniendo el orden V2. Ajusta los pronombres (ich → er/sie). En el alemán formal se usa Konjunktiv I (ver nivel C2).',
          fr: 'Discours indirect : utilisez sagen/meinen/denken + "dass" + verbe à la fin, OU sans "dass" en gardant l\'ordre V2. Ajustez les pronoms (ich → er/sie). En allemand formel, le Konjunktiv I est utilisé (voir niveau C2).',
        },
        quiz: [
          {
            id: 'B1_reported_q1',
            question: 'Direkt: "Ich bin glücklich." → Indirekt: Er sagt, dass er ___ .',
            options: ['glücklich ist', 'ist glücklich', 'glücklich bin', 'glücklich sei'],
            correctAnswer: 'glücklich ist',
            explanation: {
              en: 'After "dass", the verb goes to the very end. "sein" conjugated for "er" = "ist". Pronoun changes: "ich" → "er".',
              de: 'Nach „dass" steht das Verb ganz am Ende. „sein" konjugiert für „er" = „ist". Pronomen ändert sich: „ich" → „er".',
              es: 'Después de "dass", el verbo va al final. "sein" conjugado para "er" = "ist". El pronombre cambia: "ich" → "er".',
              fr: 'Après "dass", le verbe va à la toute fin. "sein" conjugué pour "er" = "ist". Le pronom change : "ich" → "er".',
            },
          },
          {
            id: 'B1_reported_q2',
            question: 'Direkt: "Ich habe Hunger." → Indirekt: Sie sagt, ___ sie Hunger hat.',
            options: ['dass', 'weil', 'wenn', 'ob'],
            correctAnswer: 'dass',
            explanation: {
              en: '"dass" is the conjunction for reported statements ("that"). "weil" = because, "wenn" = when/if, "ob" = whether.',
              de: '„dass" ist die Konjunktion für berichtete Aussagen. „weil" = weil, „wenn" = wenn, „ob" = ob.',
              es: '"dass" es la conjunción para los enunciados reportados ("que"). "weil" = porque, "wenn" = cuando/si, "ob" = si.',
              fr: '"dass" est la conjonction pour les énoncés rapportés ("que"). "weil" = parce que, "wenn" = quand/si, "ob" = si.',
            },
          },
          {
            id: 'B1_reported_q3',
            question: 'Reported (no "dass"): Er sagt, er ___ morgen kommen. (können, present)',
            options: ['kann', 'konnte', 'könnte', 'kann er'],
            correctAnswer: 'kann',
            explanation: {
              en: 'Without "dass", V2 order applies. "er kann" — modal verb "können" conjugated for "er" in present tense.',
              de: 'Ohne „dass" gilt V2-Stellung. „er kann" — Modalverb „können" konjugiert für „er" im Präsens.',
              es: 'Sin "dass", se aplica el orden V2. "er kann" — verbo modal "können" conjugado para "er" en presente.',
              fr: 'Sans "dass", l\'ordre V2 s\'applique. "er kann" — verbe modal "können" conjugué pour "er" au présent.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'B2',
    title: 'Upper Intermediate (B2)',
    color: '#a855f7', // Purple
    accentColor: 'rgba(168, 85, 247, 0.1)',
    description: {
      en: 'Master passive sentences, handle abstract desires using Subjunctive II, and discuss formal ideas.',
      de: 'Meistern Sie Passivsätze, äußern Sie abstrakte Wünsche mit Konjunktiv II und diskutieren Sie formelle Ideen.',
      es: 'Domina oraciones pasivas, maneja deseos abstractos usando Subjuntivo II y discute ideas formales.',
      fr: 'Maîtrisez les phrases passives, exprimez des souhaits abstraits avec le Subjonctif II.',
    },
    lessons: [
      {
        id: 'B2_passive',
        title: {
          en: 'Passive Voice (Passiv)',
          de: 'Das Passiv',
          es: 'Voz Pasiva (Passiv)',
          fr: 'Voix Passive (Passiv)',
        },
        description: {
          en: 'Shift focus from "who did it" to "what was done" using "werden" + Partizip II.',
          de: 'Verschieben Sie den Fokus von "wer es tat" auf "was getan wurde" mit "werden" + Partizip II.',
          es: 'Cambia el enfoque de "quién lo hizo" a "qué se hizo" usando "werden" + Partizip II.',
          fr: 'Déplacez l\'attention de "qui l\'a fait" à "ce qui a été fait" en utilisant "werden" + Partizip II.',
        },
        introduction: {
          en: 'The passive voice is used to emphasize the action itself rather than the agent performing it. In German, the passive voice is formed with the auxiliary verb "werden" and the past participle (Partizip II) at the end.',
          de: 'Das Passiv wird verwendet, um die Handlung selbst zu betonen, anstatt die Person, die sie ausführt. Es wird mit dem Hilfsverb "werden" und dem Partizip II am Satzende gebildet.',
          es: 'La voz pasiva se usa para enfatizar la acción en sí más que el agente que la realiza. En alemán, la voz pasiva se forma con el verbo auxiliar "werden" y el participio pasado (Partizip II) al final.',
          fr: 'La voix passive est utilisée pour mettre l\'accent sur l\'action elle-même plutôt que sur l\'agent qui l\'accomplit. En allemand, la voix passive se forme avec le verbe auxiliaire "werden" et le participe passé (Partizip II) à la fin.',
        },
        rules: [
          {
            title: {
              en: 'Present Passive Structure',
              de: 'Präsens-Passiv-Struktur',
              es: 'Estructura Pasiva en Presente',
              fr: 'Structure Passive au Présent',
            },
            explanation: {
              en: 'Form: Subject + conjugated form of "werden" + ... + Partizip II (at the very end). Use "von" + Dative to name the agent.',
              de: 'Form: Subjekt + konjugierte Form von "werden" + ... + Partizip II (ganz am Ende). Verwenden Sie "von" + Dativ, um den Urheber zu nennen.',
              es: 'Forma: Sujeto + forma conjugada de "werden" + ... + Partizip II (al final). Usa "von" + Dativo para mencionar al agente.',
              fr: 'Forme : Sujet + forme conjuguée de "werden" + ... + Partizip II (à la toute fin). Utilisez "von" + Datif pour nommer l\'agent.',
            },
            exampleGerman: 'Das Haus wird von dem Architekten gebaut.',
            exampleTranslation: {
              en: 'The house is being built by the architect.',
              de: 'Das Haus wird von dem Architekten gebaut.',
              es: 'La casa está siendo construida por el arquitecto.',
              fr: 'La maison est construite par l\'architecte.',
            },
          },
          {
            title: {
              en: 'Past Passive Structure',
              de: 'Präteritum-Passiv-Struktur',
              es: 'Estructura Pasiva en Pasado',
              fr: 'Structure Passive au Passé',
            },
            explanation: {
              en: 'Form: Subject + conjugated past of "werden" ("wurden") + ... + Partizip II at the end.',
              de: 'Form: Subjekt + konjugierte Präteritum-Form von "werden" ("wurden") + ... + Partizip II am Ende.',
              es: 'Forma: Sujeto + pasado conjugado de "werden" ("wurden") + ... + Partizip II al final.',
              fr: 'Forme : Sujet + passé conjugué de "werden" ("wurden") + ... + Partizip II à la fin.',
            },
            exampleGerman: 'Das Auto wurde gestern repariert.',
            exampleTranslation: {
              en: 'The car was repaired yesterday.',
              de: 'Das Auto wurde gestern repariert.',
              es: 'El coche fue reparado ayer.',
              fr: 'La voiture a été réparée hier.',
            },
          },
        ],
        summary: {
          en: 'Always conjugate "werden" to match the passive subject (e.g., "das Haus wird...", "die Häuser werden...") and place the past participle strictly at the end.',
          de: 'Konjugieren Sie "werden" immer passend zum Passivsubjekt (z. B. "das Haus wird...", "die Häuser werden...") und stellen Sie das Partizip II ans Satzende.',
          es: 'Conjuga siempre "werden" para que coincida con el sujeto pasivo (p. ej., "das Haus wird...", "die Häuser werden...") y coloca el participio pasado estrictamente al final.',
          fr: 'Conjuguez toujours "werden" pour l\'accorder avec le sujet passif (ex: "das Haus wird...", "die Häuser werden...") et placez le participe passé strictement à la fin.',
        },
        quiz: [
          {
            id: 'B2_passive_q1',
            question: 'Hier ___ Deutsch gesprochen.',
            options: ['wird', 'werden', 'wurde', 'ist'],
            correctAnswer: 'wird',
            explanation: {
              en: 'Deutsch (German) is singular, so the present passive auxiliary is "wird".',
              de: 'Deutsch ist Singular, daher ist das Präsens-Passiv-Hilfsverb "wird".',
              es: '"Deutsch" (alemán) es singular, por lo que el auxiliar pasivo en presente es "wird".',
              fr: '"Deutsch" (l\'allemand) est singulier, donc l\'auxiliaire passif présent est "wird".',
            },
          },
          {
            id: 'B2_passive_q2',
            question: 'Die Briefe ___ gestern geschrieben.',
            options: ['wurden', 'wurdet', 'wurde', 'werden'],
            correctAnswer: 'wurden',
            explanation: {
              en: '"Briefe" (letters) is plural, and "gestern" (yesterday) signals past tense, so we use "wurden".',
              de: '"Briefe" ist Plural und "gestern" signalisiert Präteritum, daher verwenden wir "wurden".',
              es: '"Briefe" (cartas) es plural y "gestern" (ayer) señala el pasado simple, por lo que usamos "wurden".',
              fr: '"Briefe" (les lettres) est pluriel et "gestern" (hier) indique le passé, nous utilisons donc "wurden".',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'C1',
    title: 'Advanced (C1)',
    color: '#f59e0b', // Amber
    accentColor: 'rgba(245, 158, 11, 0.1)',
    description: {
      en: 'Acquire precise adjective declension rules, express hypothetical pasts using Future II.',
      de: 'Erwerben Sie präzise Regeln zur Adjektivdeklination, drücken Sie hypothetische Vergangenheiten mit Futur II aus.',
      es: 'Adquiere reglas precisas de declinación de adjetivos, expresa pasados hipotéticos con Futuro II.',
      fr: 'Acquérez des règles précises de déclinaison des adjectifs, exprimez des passés hypothétiques avec le Futur II.',
    },
    lessons: [
      {
        id: 'C1_adjectives',
        title: {
          en: 'Adjective Declension',
          de: 'Adjektivdeklination',
          es: 'Declinación de Adjetivos',
          fr: 'Déclinaison des Adjectifs',
        },
        description: {
          en: 'Learn weak, strong, and mixed adjective endings for flawless nouns modification.',
          de: 'Lernen Sie schwache, starke und gemischte Adjektivendungen für tadellose Nomen-Modifikationen.',
          es: 'Aprende las terminaciones de adjetivos débiles, fuertes y mixtas para modificar sustantivos sin errores.',
          fr: 'Apprenez les terminaisons d\'adjectifs faibles, fortes et mixtes pour modifier parfaitement les noms.',
        },
        introduction: {
          en: 'In German, adjectives before nouns must take endings that indicate gender (Masculine, Feminine, Neutral), number (Singular, Plural), and grammatical case. The ending also depends on whether the article is definite (weak), indefinite (mixed), or absent (strong).',
          de: 'Im Deutschen müssen Adjektive vor Nomen Endungen annehmen, die Genus, Numerus und Fall anzeigen. Die Endung hängt auch davon ab, ob ein bestimmter (schwach), unbestimmter (gemischt) oder kein Artikel (stark) vorausgeht.',
          es: 'En alemán, los adjetivos antes de los sustantivos deben tomar terminaciones que indiquen género, número y caso gramatical. La terminación también depende de si el artículo es definido (débil), indefinido (mixto) o si no hay artículo (fuerte).',
          fr: 'En allemand, les adjectifs placés devant un nom doivent prendre des terminaisons indiquant le genre, le nombre et le cas. La terminaison dépend également du fait que l\'article soit défini (faible), indéfini (mixte) ou absent (fort).',
        },
        rules: [
          {
            title: {
              en: 'Weak Declension (Definite Article)',
              de: 'Schwache Deklination (Bestimmter Artikel)',
              es: 'Declinación Débil (Artículo Definido)',
              fr: 'Déclinaison Faible (Article Défini)',
            },
            explanation: {
              en: 'When a definite article ("der, die, das") is present, it does the heavy lifting. The adjective takes simple endings: mostly "-e" in nominative singular, and "-en" in plural and other cases.',
              de: 'Wenn ein bestimmter Artikel vorausgeht, übernimmt dieser die Signalfunktion. Das Adjektiv erhält einfache Endungen: meist "-e" im Nominativ Singular und "-en" im Plural sowie in den anderen Fällen.',
              es: 'Cuando un artículo definido ("der, die, das") está presente, realiza el trabajo pesado. El adjetivo toma terminaciones simples: principalmente "-e" en nominativo singular, y "-en" en plural y otros casos.',
              fr: 'Lorsqu\'un article défini est présent, c\'est lui qui porte la marque du cas. L\'adjectif prend des terminaisons simples : principalement "-e" au nominatif singulier, et "-en" au pluriel et autres cas.',
            },
            exampleGerman: 'Der nette Mann hilft mir.',
            exampleTranslation: {
              en: 'The nice man helps me (Nominative, Masculine, Weak -> "-e").',
              de: 'Der nette Mann hilft mir.',
              es: 'El hombre amable me ayuda.',
              fr: 'L\'homme aimable m\'aide.',
            },
          },
          {
            title: {
              en: 'Mixed Declension (Indefinite Article)',
              de: 'Gemischte Deklination (Unbestimmter Artikel)',
              es: 'Declinación Mixta (Artículo Indefinido)',
              fr: 'Déclinaison Mixte (Article Indéfini)',
            },
            explanation: {
              en: 'With words like "ein", "kein" or possessive adjectives, the adjective takes endings that reveal gender in Nominative/Accusative (e.g. Masculine "-er", Feminine "-e", Neutral "-es").',
              de: 'Nach "ein", "kein" oder Possessivpronomen nimmt das Adjektiv Endungen an, die das Genus im Nominativ/Akkusativ anzeigen (z. B. Maskulin "-er", Feminin "-e", Neutral "-es").',
              es: 'Con palabras como "ein", "kein" o posesivos, el adjetivo toma terminaciones que revelan el género en Nominativo/Acusativo (p. ej., masculino "-er", femenino "-e", neutro "-es").',
              fr: 'Avec des mots comme "ein", "kein" ou des adjectifs possessifs, l\'adjectif prend des terminaisons qui révèlent le genre au Nominatif/Accusatif (ex : masculin "-er", féminin "-e", neutre "-es").',
            },
            exampleGerman: 'Ich habe einen schnellen Wagen.',
            exampleTranslation: {
              en: 'I have a fast car (Accusative, Masculine, Mixed -> "-en").',
              de: 'Ich habe einen schnellen Wagen.',
              es: 'Tengo un coche rápido.',
              fr: 'J\'ai une voiture rapide.',
            },
          },
        ],
        summary: {
          en: 'Adjective endings are critical for C1 proficiency. Practice case and article dependencies systematically!',
          de: 'Adjektivendungen sind entscheidend für C1-Kenntnisse. Üben Sie systematisch die Abhängigkeiten von Fall und Artikel!',
          es: 'Las terminaciones de adjetivos son críticas para la competencia C1. ¡Practica sistemáticamente las dependencias de caso y artículo!',
          fr: 'Les terminaisons des adjectifs sont essentielles pour le niveau C1. Pratiquez systématiquement les dépendances de cas et d\'article !',
        },
        quiz: [
          {
            id: 'C1_adjectives_q1',
            question: 'Ein ___ Hund (m, Nominative) bellt draußen.',
            options: ['großer', 'große', 'großen', 'großes'],
            correctAnswer: 'großer',
            explanation: {
              en: 'Following the indefinite article "Ein" in Nominative masculine, the adjective takes the mixed ending "-er" -> "großer".',
              de: 'Nach dem unbestimmten Artikel "Ein" im Nominativ maskulin nimmt das Adjektiv die gemischte Endung "-er" an -> "großer".',
              es: 'Después del artículo indefinido "Ein" en nominativo masculino, el adjetivo toma la terminación mixta "-er" -> "großer".',
              fr: 'Après l\'article indéfini "Ein" au Nominatif masculin, l\'adjectif prend la terminaison mixte "-er" -> "großer".',
            },
          },
          {
            id: 'C1_adjectives_q2',
            question: 'Wir helfen der ___ Frau (f, Dative).',
            options: ['alten', 'alte', 'alter', 'altes'],
            correctAnswer: 'alten',
            explanation: {
              en: '"der Frau" is Dative feminine. Under weak declension, all adjectives in Dative take "-en".',
              de: '"der Frau" ist Dativ feminin. In der schwachen Deklination erhalten alle Adjektive im Dativ die Endung "-en".',
              es: '"der Frau" es Dativo femenino. Bajo la declinación débil, todos los adjetivos en Dativo toman "-en".',
              fr: '"der Frau" est au Datif féminin. Dans la déclinaison faible, tous les adjectifs au Datif prennent "-en".',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'C2',
    title: 'Proficient (C2)',
    color: '#f43f5e', // Rose
    accentColor: 'rgba(244, 63, 94, 0.1)',
    description: {
      en: 'Perform indirect speech using Subjunctive I, master modal-like alternatives, and express ultra-complex styles.',
      de: 'Geben Sie indirekte Rede im Konjunktiv I wieder, meistern Sie modalverbähnliche Alternativen und drücken Sie komplexe Stile aus.',
      es: 'Realiza discurso indirecto usando Subjuntivo I, domina alternativas modales y expresa estilos ultra complejos.',
      fr: 'Rapportez le discours indirect avec le Subjonctif I, maîtrisez les structures modales complexes.',
    },
    lessons: [
      {
        id: 'C2_subjunctive_i',
        title: {
          en: 'Subjunctive I (Konjunktiv I)',
          de: 'Der Konjunktiv I',
          es: 'Subjuntivo I (Konjunktiv I)',
          fr: 'Le Subjonctif I (Konjunktiv I)',
        },
        description: {
          en: 'Master indirect speech for formal reportage and journalism.',
          de: 'Meistern Sie die indirekte Rede für formelle Berichterstattung und Journalismus.',
          es: 'Domina el discurso indirecto para reportajes formales y periodismo.',
          fr: 'Maîtrisez le discours indirect pour le reportage formel et le journalisme.',
        },
        introduction: {
          en: 'Konjunktiv I is primarily used in formal German writing, journalism, and news reports to represent indirect speech objectively, showing that the writer is reporting someone else\'s words without claiming they are absolute truth.',
          de: 'Der Konjunktiv I wird hauptsächlich in der Schriftsprache und im Journalismus verwendet, um indirekte Rede objektiv wiederzugeben.',
          es: 'El Konjunktiv I se usa principalmente en la escritura formal alemana, el periodismo y los informes de noticias para representar el discurso indirecto de manera objetiva.',
          fr: 'Le Konjunktiv I est principalement utilisé dans l\'écrit formel, le journalisme et les rapports d\'information pour représenter le discours indirect de manière objective.',
        },
        rules: [
          {
            title: {
              en: 'Formation of Konjunktiv I',
              de: 'Bildung des Konjunktivs I',
              es: 'Formación del Konjunktiv I',
              fr: 'Formation du Konjunktiv I',
            },
            explanation: {
              en: 'Konjunktiv I is formed by taking the verb stem (from infinitive) and adding endings: -e, -est, -e, -en, -et, -en. The verb "sein" is irregular (er sei).',
              de: 'Der Konjunktiv I wird gebildet, indem man an den Verbstamm (vom Infinitiv) folgende Endungen anhängt: -e, -est, -e, -en, -et, -en. "sein" ist unregelmäßig (er sei).',
              es: 'El Konjunktiv I se forma tomando la raíz del verbo (del infinitivo) y agregando las terminaciones: -e, -est, -e, -en, -et, -en. El verbo "sein" es irregular (er sei).',
              fr: 'Le Konjunktiv I se forme en prenant le radical du verbe (de l\'infinitif) et en ajoutant les terminaisons : -e, -est, -e, -en, -et, -en. Le verbe "sein" est irrégulier (er sei).',
            },
            exampleGerman: 'Der Minister sagte, er sei optimistisch.',
            exampleTranslation: {
              en: 'The minister said he was optimistic (indirect speech using "sei").',
              de: 'Der Minister sagte, er sei optimistisch.',
              es: 'El ministro dijo que estaba optimista.',
              fr: 'Le ministre a dit qu\'il était optimiste.',
            },
          },
          {
            title: {
              en: 'Avoiding overlap with Indicative',
              de: 'Überschneidungen mit dem Indikativ vermeiden',
              es: 'Evitar el traslape con el Indicativo',
              fr: 'Éviter le chevauchement avec l\'Indicatif',
            },
            explanation: {
              en: 'If a Konjunktiv I form is identical to the normal indicative (e.g. in first person plural "wir haben"), you must substitute it with Konjunktiv II ("wir hätten" or "wir würden haben").',
              de: 'Wenn eine Form des Konjunktivs I mit dem normalen Indikativ übereinstimmt (z. B. in der ersten Person Plural "wir haben"), müssen Sie sie durch den Konjunktiv II ersetzen ("wir hätten").',
              es: 'Si una forma del Konjunktiv I es idéntica al indicativo normal, debes sustituirla por el Konjunktiv II ("hätten" o "würden").',
              fr: 'Si une forme du Konjunktiv I est identique à l\'indicatif normal, vous devez la remplacer par le Subjonctif II ("hätten" ou "würden").',
            },
            exampleGerman: 'Sie meinten, sie hätten kein Geld.',
            exampleTranslation: {
              en: 'They said they had no money (using "hätten" instead of "haben" to mark subjunctive).',
              de: 'Sie meinten, sie hätten kein Geld.',
              es: 'Ellos dijeron que no tenían dinero.',
              fr: 'Ils ont dit qu\'ils n\'avaient pas d\'argent.',
            },
          },
        ],
        summary: {
          en: 'Konjunktiv I indicates neutrality. It is the pinnacle of formal German grammar expression, essential for reaching C2 mastery.',
          de: 'Der Konjunktiv I drückt Neutralität aus. Er ist der Höhepunkt der formellen deutschen Grammatik, unentbehrlich für das C2-Niveau.',
          es: 'El Konjunktiv I indica neutralidad. Es la cumbre de la gramática formal alemana, esencial para alcanzar la maestría C2.',
          fr: 'Le Konjunktiv I indique la neutralité. C\'est le sommet de la grammaire formelle allemande, essentiel pour maîtriser le niveau C2.',
        },
        quiz: [
          {
            id: 'C2_subjunctive_i_q1',
            question: 'Er behauptet, er ___ krank (from "sein").',
            options: ['sei', 'ist', 'wäre', 'seien'],
            correctAnswer: 'sei',
            explanation: {
              en: 'The irregular Konjunktiv I third-person singular form of "sein" is "sei".',
              de: 'Die unregelmäßige Konjunktiv I Form der dritten Person Singular von "sein" ist "sei".',
              es: 'La forma irregular de Konjunktiv I en tercera persona singular de "sein" es "sei".',
              fr: 'La forme irrégulière du Konjunktiv I à la troisième personne du singulier de "sein" est "sei".',
            },
          },
          {
            id: 'C2_subjunctive_i_q2',
            question: 'Sie sagten, sie ___ Deutsch (identical check: from "lernen").',
            options: ['lernten', 'lernen', 'lerneten', 'haben gelernt'],
            correctAnswer: 'lernten',
            explanation: {
              en: 'The standard Konjunktiv I "sie lernen" is identical to indicative. Thus, we substitute Konjunktiv II "sie lernten" (or "würden lernen").',
              de: 'Der normale Konjunktiv I "sie lernen" stimmt mit dem Indikativ überein. Daher ersetzen wir ihn durch den Konjunktiv II "sie lernten".',
              es: 'El Konjunktiv I estándar "sie lernen" es idéntico al indicativo. Por lo tanto, lo sustituimos por el Konjunktiv II "sie lernten".',
              fr: 'Le Konjunktiv I standard "sie lernen" est identique à l\'indicatif. Nous le remplaçons donc par le Subjonctif II "sie lernten".',
            },
          },
        ],
      },
    ],
  },
];

export const getLocalized = <T extends Record<LanguageCode, string>>(
  obj: T,
  lang: LanguageCode
): string => {
  return obj[lang] || obj['en'];
};
