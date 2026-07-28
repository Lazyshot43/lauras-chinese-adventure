import { Lesson, QuizQuestion } from "@/types";

/**
 * 12 progressive lessons covering HSK 1 → HSK 2.
 * Completing one unlocks the next (enforced in app logic + DB).
 * Each lesson has clear goals, vocab subset, and 8–12 quiz questions.
 */

export const LESSONS: Lesson[] = [
  {
    id: "lesson-01",
    order: 1,
    title: "你好！",
    titlePinyin: "Nǐ hǎo!",
    description: "Learn the most essential greetings and basic pronouns. Start your adventure!",
    learningGoals: [
      "Greet someone with 你好 (nǐ hǎo)",
      "Say thank you and respond politely",
      "Use 我 (wǒ), 你 (nǐ), 是 (shì)",
    ],
    vocabIds: ["h1-001", "h1-002", "h1-003", "h1-004", "h1-017", "h1-018", "h1-019", "h1-020"],
    quizQuestionIds: ["q01-01", "q01-02", "q01-03", "q01-04", "q01-05", "q01-06", "q01-07", "q01-08"],
  },
  {
    id: "lesson-02",
    order: 2,
    title: "数字小达人",
    titlePinyin: "Shùzì xiǎo dárén",
    description: "Master numbers 0–10 and basic counting. Perfect for shopping and ages!",
    learningGoals: [
      "Count from 零 to 十",
      "Say your age with 岁",
      "Combine numbers naturally",
    ],
    vocabIds: ["h1-021", "h1-022", "h1-023", "h1-024", "h1-025", "h1-026", "h1-027", "h1-028", "h1-029", "h1-030", "h1-032", "h1-100"],
    quizQuestionIds: ["q02-01", "q02-02", "q02-03", "q02-04", "q02-05", "q02-06", "q02-07", "q02-08", "q02-09"],
    unlockRequirement: "lesson-01",
  },
  {
    id: "lesson-03",
    order: 3,
    title: "我的家人",
    titlePinyin: "Wǒ de jiārén",
    description: "Talk about your family and the people around you.",
    learningGoals: [
      "Name family members (爸爸, 妈妈…)",
      "Use 的 for possession",
      "Introduce friends and teachers",
    ],
    vocabIds: ["h1-033", "h1-034", "h1-035", "h1-036", "h1-037", "h1-038", "h1-039", "h1-005", "h1-009"],
    quizQuestionIds: ["q03-01", "q03-02", "q03-03", "q03-04", "q03-05", "q03-06", "q03-07", "q03-08"],
    unlockRequirement: "lesson-02",
  },
  {
    id: "lesson-04",
    order: 4,
    title: "今天几号？",
    titlePinyin: "Jīntiān jǐ hào?",
    description: "Talk about dates, days, and basic time expressions.",
    learningGoals: [
      "Say today / tomorrow / yesterday",
      "Talk about years, months, days",
      "Use 现在 (now)",
    ],
    vocabIds: ["h1-041", "h1-042", "h1-043", "h1-044", "h1-045", "h1-046", "h1-047", "h1-050"],
    quizQuestionIds: ["q04-01", "q04-02", "q04-03", "q04-04", "q04-05", "q04-06", "q04-07", "q04-08"],
    unlockRequirement: "lesson-03",
  },
  {
    id: "lesson-05",
    order: 5,
    title: "去哪儿？",
    titlePinyin: "Qù nǎr?",
    description: "Places, directions, and simple movement verbs.",
    learningGoals: [
      "Name common places (家, 学校, 商店…)",
      "Use 去 and 来",
      "Talk about China and Beijing",
    ],
    vocabIds: ["h1-051", "h1-052", "h1-053", "h1-054", "h1-055", "h1-056", "h1-061", "h1-062", "h1-007"],
    quizQuestionIds: ["q05-01", "q05-02", "q05-03", "q05-04", "q05-05", "q05-06", "q05-07", "q05-08", "q05-09"],
    unlockRequirement: "lesson-04",
  },
  {
    id: "lesson-06",
    order: 6,
    title: "吃什么？",
    titlePinyin: "Chī shénme?",
    description: "Food, drinks, and the most important verbs: 吃 and 喝!",
    learningGoals: [
      "Order simple food and drinks",
      "Use 吃, 喝, 买, 喜欢",
      "Describe tasty things with 好吃",
    ],
    vocabIds: ["h1-057", "h1-058", "h1-059", "h1-060", "h1-068", "h1-069", "h1-070", "h1-071", "h1-084"],
    quizQuestionIds: ["q06-01", "q06-02", "q06-03", "q06-04", "q06-05", "q06-06", "q06-07", "q06-08"],
    unlockRequirement: "lesson-05",
  },
  {
    id: "lesson-07",
    order: 7,
    title: "我喜欢…",
    titlePinyin: "Wǒ xǐhuan…",
    description: "Express preferences, hobbies, and simple feelings.",
    learningGoals: [
      "Talk about likes and dislikes",
      "Use 爱, 想, 知道, 认识",
      "Describe people and things (大, 小, 漂亮…)",
    ],
    vocabIds: ["h1-071", "h1-072", "h1-073", "h1-074", "h1-075", "h1-076", "h1-077", "h1-082", "h1-083"],
    quizQuestionIds: ["q07-01", "q07-02", "q07-03", "q07-04", "q07-05", "q07-06", "q07-07", "q07-08", "q07-09"],
    unlockRequirement: "lesson-06",
  },
  {
    id: "lesson-08",
    order: 8,
    title: "连接词入门",
    titlePinyin: "Liánjiēcí rùmén",
    description: "HSK 2 connectors: because, so, but, although… Make longer sentences!",
    learningGoals: [
      "Use 因为…所以…",
      "Contrast with 但是 and 虽然",
      "Offer choices with 还是 / 或者",
    ],
    vocabIds: ["h2-001", "h2-002", "h2-003", "h2-004", "h2-005", "h2-006", "h2-009", "h2-010"],
    quizQuestionIds: ["q08-01", "q08-02", "q08-03", "q08-04", "q08-05", "q08-06", "q08-07", "q08-08"],
    unlockRequirement: "lesson-07",
  },
  {
    id: "lesson-09",
    order: 9,
    title: "我可以吗？",
    titlePinyin: "Wǒ kěyǐ ma?",
    description: "Modal verbs and possibility: 可以, 会, 能, 要, 可能…",
    learningGoals: [
      "Ask and give permission with 可以",
      "Express ability with 会 and 能",
      "Talk about plans with 要 and 希望",
    ],
    vocabIds: ["h2-013", "h2-014", "h2-015", "h2-016", "h2-017", "h2-019", "h2-020", "h2-007"],
    quizQuestionIds: ["q09-01", "q09-02", "q09-03", "q09-04", "q09-05", "q09-06", "q09-07", "q09-08", "q09-09"],
    unlockRequirement: "lesson-08",
  },
  {
    id: "lesson-10",
    order: 10,
    title: "颜色与身体",
    titlePinyin: "Yánsè yǔ shēntǐ",
    description: "Colors, body parts, and describing appearance.",
    learningGoals: [
      "Name basic colors (红, 黄, 蓝…)",
      "Talk about body parts",
      "Describe clothes simply",
    ],
    vocabIds: ["h2-031", "h2-032", "h2-033", "h2-034", "h2-037", "h2-039", "h2-040", "h2-041", "h2-042", "h2-043", "h2-044", "h2-045"],
    quizQuestionIds: ["q10-01", "q10-02", "q10-03", "q10-04", "q10-05", "q10-06", "q10-07", "q10-08"],
    unlockRequirement: "lesson-09",
  },
  {
    id: "lesson-11",
    order: 11,
    title: "天气怎么样？",
    titlePinyin: "Tiānqì zěnmeyàng?",
    description: "Weather, travel, and getting around town.",
    learningGoals: [
      "Talk about weather (晴, 下雨, 雪…)",
      "Name transport (出租车, 公共汽车…)",
      "Give simple directions (左边, 右边…)",
    ],
    vocabIds: ["h2-046", "h2-047", "h2-048", "h2-049", "h2-050", "h2-051", "h2-053", "h2-054", "h2-056", "h2-057", "h2-058", "h2-059"],
    quizQuestionIds: ["q11-01", "q11-02", "q11-03", "q11-04", "q11-05", "q11-06", "q11-07", "q11-08", "q11-09"],
    unlockRequirement: "lesson-10",
  },
  {
    id: "lesson-12",
    order: 12,
    title: "美味中国",
    titlePinyin: "Měiwèi Zhōngguó",
    description: "Food vocabulary deep dive + everyday HSK 2 review. Celebrate your progress!",
    learningGoals: [
      "Talk about fruits and common dishes",
      "Order food confidently",
      "Combine everything you’ve learned so far",
    ],
    vocabIds: ["h2-081", "h2-082", "h2-083", "h2-084", "h2-085", "h2-086", "h2-087", "h2-088", "h2-089", "h2-090", "h1-084", "h2-011"],
    quizQuestionIds: ["q12-01", "q12-02", "q12-03", "q12-04", "q12-05", "q12-06", "q12-07", "q12-08", "q12-09", "q12-10"],
    unlockRequirement: "lesson-11",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Lesson 01
  { id: "q01-01", type: "char-to-en", prompt: "你好", promptPinyin: "nǐ hǎo", correctAnswer: "hello", options: ["hello", "goodbye", "thank you", "sorry"], relatedVocabId: "h1-002" },
  { id: "q01-02", type: "en-to-char", prompt: "thank you", correctAnswer: "谢谢", options: ["谢谢", "你好", "对不起", "没关系"], relatedVocabId: "h1-017" },
  { id: "q01-03", type: "char-to-en", prompt: "我", promptPinyin: "wǒ", correctAnswer: "I; me", options: ["I; me", "you", "he", "we"], relatedVocabId: "h1-003" },
  { id: "q01-04", type: "en-to-char", prompt: "you", correctAnswer: "你", options: ["你", "我", "他", "她"], relatedVocabId: "h1-001" },
  { id: "q01-05", type: "char-to-en", prompt: "是", promptPinyin: "shì", correctAnswer: "to be; is; are", options: ["to be; is; are", "to have", "to go", "to come"], relatedVocabId: "h1-004" },
  { id: "q01-06", type: "en-to-char", prompt: "you're welcome", correctAnswer: "不客气", options: ["不客气", "谢谢", "对不起", "你好"], relatedVocabId: "h1-018" },
  { id: "q01-07", type: "char-to-en", prompt: "对不起", promptPinyin: "duìbuqǐ", correctAnswer: "sorry", options: ["sorry", "hello", "thank you", "goodbye"], relatedVocabId: "h1-019" },
  { id: "q01-08", type: "en-to-char", prompt: "it's okay / no problem", correctAnswer: "没关系", options: ["没关系", "不客气", "谢谢", "对不起"], relatedVocabId: "h1-020" },

  // Lesson 02
  { id: "q02-01", type: "char-to-en", prompt: "一", promptPinyin: "yī", correctAnswer: "one", options: ["one", "two", "three", "ten"], relatedVocabId: "h1-021" },
  { id: "q02-02", type: "en-to-char", prompt: "five", correctAnswer: "五", options: ["五", "四", "六", "七"], relatedVocabId: "h1-025" },
  { id: "q02-03", type: "char-to-en", prompt: "十", promptPinyin: "shí", correctAnswer: "ten", options: ["ten", "hundred", "zero", "nine"], relatedVocabId: "h1-030" },
  { id: "q02-04", type: "en-to-char", prompt: "zero", correctAnswer: "零", options: ["零", "一", "十", "百"], relatedVocabId: "h1-032" },
  { id: "q02-05", type: "char-to-en", prompt: "三", promptPinyin: "sān", correctAnswer: "three", options: ["three", "four", "two", "five"], relatedVocabId: "h1-023" },
  { id: "q02-06", type: "en-to-char", prompt: "eight", correctAnswer: "八", options: ["八", "九", "七", "六"], relatedVocabId: "h1-028" },
  { id: "q02-07", type: "char-to-en", prompt: "岁", promptPinyin: "suì", correctAnswer: "years old", options: ["years old", "year", "month", "day"], relatedVocabId: "h1-100" },
  { id: "q02-08", type: "en-to-char", prompt: "two", correctAnswer: "二", options: ["二", "一", "三", "四"], relatedVocabId: "h1-022" },
  { id: "q02-09", type: "char-to-en", prompt: "七", promptPinyin: "qī", correctAnswer: "seven", options: ["seven", "six", "eight", "nine"], relatedVocabId: "h1-027" },

  // Lesson 03
  { id: "q03-01", type: "char-to-en", prompt: "爸爸", promptPinyin: "bàba", correctAnswer: "dad; father", options: ["dad; father", "mom", "son", "friend"], relatedVocabId: "h1-033" },
  { id: "q03-02", type: "en-to-char", prompt: "mom; mother", correctAnswer: "妈妈", options: ["妈妈", "爸爸", "女儿", "儿子"], relatedVocabId: "h1-034" },
  { id: "q03-03", type: "char-to-en", prompt: "朋友", promptPinyin: "péngyou", correctAnswer: "friend", options: ["friend", "teacher", "student", "doctor"], relatedVocabId: "h1-037" },
  { id: "q03-04", type: "en-to-char", prompt: "teacher", correctAnswer: "老师", options: ["老师", "学生", "医生", "朋友"], relatedVocabId: "h1-038" },
  { id: "q03-05", type: "char-to-en", prompt: "的", promptPinyin: "de", correctAnswer: "possessive particle", options: ["possessive particle", "not", "to be", "and"], relatedVocabId: "h1-005" },
  { id: "q03-06", type: "en-to-char", prompt: "student", correctAnswer: "学生", options: ["学生", "老师", "朋友", "医生"], relatedVocabId: "h1-039" },
  { id: "q03-07", type: "char-to-en", prompt: "女儿", promptPinyin: "nǚ'ér", correctAnswer: "daughter", options: ["daughter", "son", "mom", "dad"], relatedVocabId: "h1-036" },
  { id: "q03-08", type: "en-to-char", prompt: "son", correctAnswer: "儿子", options: ["儿子", "女儿", "爸爸", "妈妈"], relatedVocabId: "h1-035" },

  // Lesson 04
  { id: "q04-01", type: "char-to-en", prompt: "今天", promptPinyin: "jīntiān", correctAnswer: "today", options: ["today", "tomorrow", "yesterday", "now"], relatedVocabId: "h1-041" },
  { id: "q04-02", type: "en-to-char", prompt: "tomorrow", correctAnswer: "明天", options: ["明天", "今天", "昨天", "现在"], relatedVocabId: "h1-042" },
  { id: "q04-03", type: "char-to-en", prompt: "昨天", promptPinyin: "zuótiān", correctAnswer: "yesterday", options: ["yesterday", "today", "tomorrow", "week"], relatedVocabId: "h1-043" },
  { id: "q04-04", type: "en-to-char", prompt: "year", correctAnswer: "年", options: ["年", "月", "日", "星期"], relatedVocabId: "h1-044" },
  { id: "q04-05", type: "char-to-en", prompt: "现在", promptPinyin: "xiànzài", correctAnswer: "now", options: ["now", "today", "tomorrow", "yesterday"], relatedVocabId: "h1-050" },
  { id: "q04-06", type: "en-to-char", prompt: "month", correctAnswer: "月", options: ["月", "年", "日", "点"], relatedVocabId: "h1-045" },
  { id: "q04-07", type: "char-to-en", prompt: "星期", promptPinyin: "xīngqī", correctAnswer: "week", options: ["week", "month", "year", "day"], relatedVocabId: "h1-047" },
  { id: "q04-08", type: "en-to-char", prompt: "day / sun", correctAnswer: "日", options: ["日", "月", "年", "点"], relatedVocabId: "h1-046" },

  // Lesson 05
  { id: "q05-01", type: "char-to-en", prompt: "家", promptPinyin: "jiā", correctAnswer: "home; family", options: ["home; family", "school", "shop", "hospital"], relatedVocabId: "h1-051" },
  { id: "q05-02", type: "en-to-char", prompt: "school", correctAnswer: "学校", options: ["学校", "家", "商店", "医院"], relatedVocabId: "h1-052" },
  { id: "q05-03", type: "char-to-en", prompt: "去", promptPinyin: "qù", correctAnswer: "to go", options: ["to go", "to come", "to look", "to eat"], relatedVocabId: "h1-061" },
  { id: "q05-04", type: "en-to-char", prompt: "to come", correctAnswer: "来", options: ["来", "去", "看", "听"], relatedVocabId: "h1-062" },
  { id: "q05-05", type: "char-to-en", prompt: "中国", promptPinyin: "Zhōngguó", correctAnswer: "China", options: ["China", "Beijing", "school", "home"], relatedVocabId: "h1-055" },
  { id: "q05-06", type: "en-to-char", prompt: "Beijing", correctAnswer: "北京", options: ["北京", "中国", "学校", "医院"], relatedVocabId: "h1-056" },
  { id: "q05-07", type: "char-to-en", prompt: "商店", promptPinyin: "shāngdiàn", correctAnswer: "shop; store", options: ["shop; store", "hospital", "school", "home"], relatedVocabId: "h1-053" },
  { id: "q05-08", type: "en-to-char", prompt: "hospital", correctAnswer: "医院", options: ["医院", "学校", "商店", "家"], relatedVocabId: "h1-054" },
  { id: "q05-09", type: "char-to-en", prompt: "在", promptPinyin: "zài", correctAnswer: "at; in; on", options: ["at; in; on", "to have", "to be", "not"], relatedVocabId: "h1-007" },

  // Lesson 06
  { id: "q06-01", type: "char-to-en", prompt: "吃", promptPinyin: "chī", correctAnswer: "to eat", options: ["to eat", "to drink", "to buy", "to like"], relatedVocabId: "h1-068" },
  { id: "q06-02", type: "en-to-char", prompt: "to drink", correctAnswer: "喝", options: ["喝", "吃", "买", "看"], relatedVocabId: "h1-069" },
  { id: "q06-03", type: "char-to-en", prompt: "水", promptPinyin: "shuǐ", correctAnswer: "water", options: ["water", "tea", "rice", "dish"], relatedVocabId: "h1-057" },
  { id: "q06-04", type: "en-to-char", prompt: "tea", correctAnswer: "茶", options: ["茶", "水", "饭", "菜"], relatedVocabId: "h1-058" },
  { id: "q06-05", type: "char-to-en", prompt: "好吃", promptPinyin: "hǎochī", correctAnswer: "delicious", options: ["delicious", "beautiful", "happy", "hot"], relatedVocabId: "h1-084" },
  { id: "q06-06", type: "en-to-char", prompt: "to buy", correctAnswer: "买", options: ["买", "吃", "喝", "喜欢"], relatedVocabId: "h1-070" },
  { id: "q06-07", type: "char-to-en", prompt: "喜欢", promptPinyin: "xǐhuan", correctAnswer: "to like", options: ["to like", "to love", "to want", "to know"], relatedVocabId: "h1-071" },
  { id: "q06-08", type: "en-to-char", prompt: "rice; meal", correctAnswer: "饭", options: ["饭", "菜", "水", "茶"], relatedVocabId: "h1-059" },

  // Lesson 07
  { id: "q07-01", type: "char-to-en", prompt: "爱", promptPinyin: "ài", correctAnswer: "to love", options: ["to love", "to like", "to want", "to know"], relatedVocabId: "h1-072" },
  { id: "q07-02", type: "en-to-char", prompt: "to want; to think", correctAnswer: "想", options: ["想", "爱", "知道", "认识"], relatedVocabId: "h1-073" },
  { id: "q07-03", type: "char-to-en", prompt: "漂亮", promptPinyin: "piàoliang", correctAnswer: "beautiful; pretty", options: ["beautiful; pretty", "happy", "delicious", "big"], relatedVocabId: "h1-083" },
  { id: "q07-04", type: "en-to-char", prompt: "happy", correctAnswer: "高兴", options: ["高兴", "漂亮", "好吃", "大"], relatedVocabId: "h1-082" },
  { id: "q07-05", type: "char-to-en", prompt: "大", promptPinyin: "dà", correctAnswer: "big", options: ["big", "small", "many", "few"], relatedVocabId: "h1-076" },
  { id: "q07-06", type: "en-to-char", prompt: "small", correctAnswer: "小", options: ["小", "大", "多", "少"], relatedVocabId: "h1-077" },
  { id: "q07-07", type: "char-to-en", prompt: "知道", promptPinyin: "zhīdào", correctAnswer: "to know", options: ["to know", "to recognize", "to like", "to want"], relatedVocabId: "h1-074" },
  { id: "q07-08", type: "en-to-char", prompt: "to know (someone)", correctAnswer: "认识", options: ["认识", "知道", "喜欢", "想"], relatedVocabId: "h1-075" },
  { id: "q07-09", type: "char-to-en", prompt: "喜欢", promptPinyin: "xǐhuan", correctAnswer: "to like", options: ["to like", "to love", "to want", "happy"], relatedVocabId: "h1-071" },

  // Lesson 08
  { id: "q08-01", type: "char-to-en", prompt: "因为", promptPinyin: "yīnwèi", correctAnswer: "because", options: ["because", "so", "but", "although"], relatedVocabId: "h2-002" },
  { id: "q08-02", type: "en-to-char", prompt: "so; therefore", correctAnswer: "所以", options: ["所以", "因为", "但是", "虽然"], relatedVocabId: "h2-003" },
  { id: "q08-03", type: "char-to-en", prompt: "但是", promptPinyin: "dànshì", correctAnswer: "but; however", options: ["but; however", "because", "or", "also"], relatedVocabId: "h2-001" },
  { id: "q08-04", type: "en-to-char", prompt: "although", correctAnswer: "虽然", options: ["虽然", "但是", "因为", "所以"], relatedVocabId: "h2-004" },
  { id: "q08-05", type: "char-to-en", prompt: "也", promptPinyin: "yě", correctAnswer: "also; too", options: ["also; too", "all", "very", "already"], relatedVocabId: "h2-009" },
  { id: "q08-06", type: "en-to-char", prompt: "all; both", correctAnswer: "都", options: ["都", "也", "非常", "真"], relatedVocabId: "h2-010" },
  { id: "q08-07", type: "char-to-en", prompt: "还是", promptPinyin: "háishì", correctAnswer: "or; still", options: ["or; still", "or (choice)", "but", "so"], relatedVocabId: "h2-005" },
  { id: "q08-08", type: "en-to-char", prompt: "or", correctAnswer: "或者", options: ["或者", "还是", "但是", "因为"], relatedVocabId: "h2-006" },

  // Lesson 09
  { id: "q09-01", type: "char-to-en", prompt: "可以", promptPinyin: "kěyǐ", correctAnswer: "can; may", options: ["can; may", "will", "able to", "want"], relatedVocabId: "h2-014" },
  { id: "q09-02", type: "en-to-char", prompt: "can; will; to know how", correctAnswer: "会", options: ["会", "能", "可以", "要"], relatedVocabId: "h2-016" },
  { id: "q09-03", type: "char-to-en", prompt: "能", promptPinyin: "néng", correctAnswer: "can; able to", options: ["can; able to", "may", "will", "want"], relatedVocabId: "h2-017" },
  { id: "q09-04", type: "en-to-char", prompt: "to want; will", correctAnswer: "要", options: ["要", "会", "能", "可以"], relatedVocabId: "h2-015" },
  { id: "q09-05", type: "char-to-en", prompt: "可能", promptPinyin: "kěnéng", correctAnswer: "maybe; possible", options: ["maybe; possible", "already", "very", "really"], relatedVocabId: "h2-013" },
  { id: "q09-06", type: "en-to-char", prompt: "already", correctAnswer: "已经", options: ["已经", "正在", "可能", "非常"], relatedVocabId: "h2-007" },
  { id: "q09-07", type: "char-to-en", prompt: "希望", promptPinyin: "xīwàng", correctAnswer: "to hope", options: ["to hope", "to feel", "to tell", "to help"], relatedVocabId: "h2-020" },
  { id: "q09-08", type: "en-to-char", prompt: "to feel; to think", correctAnswer: "觉得", options: ["觉得", "希望", "告诉", "帮助"], relatedVocabId: "h2-019" },
  { id: "q09-09", type: "char-to-en", prompt: "告诉", promptPinyin: "gàosu", correctAnswer: "to tell", options: ["to tell", "to hope", "to feel", "to help"], relatedVocabId: "h2-018" },

  // Lesson 10
  { id: "q10-01", type: "char-to-en", prompt: "红", promptPinyin: "hóng", correctAnswer: "red", options: ["red", "yellow", "blue", "green"], relatedVocabId: "h2-040" },
  { id: "q10-02", type: "en-to-char", prompt: "blue", correctAnswer: "蓝", options: ["蓝", "红", "绿", "黄"], relatedVocabId: "h2-042" },
  { id: "q10-03", type: "char-to-en", prompt: "眼睛", promptPinyin: "yǎnjing", correctAnswer: "eye", options: ["eye", "hand", "foot", "head"], relatedVocabId: "h2-032" },
  { id: "q10-04", type: "en-to-char", prompt: "hand", correctAnswer: "手", options: ["手", "脚", "头", "脸"], relatedVocabId: "h2-033" },
  { id: "q10-05", type: "char-to-en", prompt: "衣服", promptPinyin: "yīfu", correctAnswer: "clothes", options: ["clothes", "shoe", "color", "body"], relatedVocabId: "h2-037" },
  { id: "q10-06", type: "en-to-char", prompt: "white", correctAnswer: "白", options: ["白", "黑", "红", "黄"], relatedVocabId: "h2-044" },
  { id: "q10-07", type: "char-to-en", prompt: "身体", promptPinyin: "shēntǐ", correctAnswer: "body; health", options: ["body; health", "face", "head", "eye"], relatedVocabId: "h2-031" },
  { id: "q10-08", type: "en-to-char", prompt: "black", correctAnswer: "黑", options: ["黑", "白", "蓝", "绿"], relatedVocabId: "h2-045" },

  // Lesson 11
  { id: "q11-01", type: "char-to-en", prompt: "天气", promptPinyin: "tiānqì", correctAnswer: "weather", options: ["weather", "sunny", "rain", "wind"], relatedVocabId: "h2-046" },
  { id: "q11-02", type: "en-to-char", prompt: "sunny", correctAnswer: "晴", options: ["晴", "下雨", "雪", "风"], relatedVocabId: "h2-047" },
  { id: "q11-03", type: "char-to-en", prompt: "下雨", promptPinyin: "xià yǔ", correctAnswer: "to rain", options: ["to rain", "snow", "wind", "sunny"], relatedVocabId: "h2-048" },
  { id: "q11-04", type: "en-to-char", prompt: "taxi", correctAnswer: "出租车", options: ["出租车", "公共汽车", "机场", "路"], relatedVocabId: "h2-054" },
  { id: "q11-05", type: "char-to-en", prompt: "左边", promptPinyin: "zuǒbiān", correctAnswer: "left side", options: ["left side", "right side", "beside", "far"], relatedVocabId: "h2-058" },
  { id: "q11-06", type: "en-to-char", prompt: "right side", correctAnswer: "右边", options: ["右边", "左边", "旁边", "近"], relatedVocabId: "h2-059" },
  { id: "q11-07", type: "char-to-en", prompt: "远", promptPinyin: "yuǎn", correctAnswer: "far", options: ["far", "near", "left", "right"], relatedVocabId: "h2-056" },
  { id: "q11-08", type: "en-to-char", prompt: "near", correctAnswer: "近", options: ["近", "远", "左", "右"], relatedVocabId: "h2-057" },
  { id: "q11-09", type: "char-to-en", prompt: "机场", promptPinyin: "jīchǎng", correctAnswer: "airport", options: ["airport", "train station", "bus", "road"], relatedVocabId: "h2-051" },

  // Lesson 12
  { id: "q12-01", type: "char-to-en", prompt: "苹果", promptPinyin: "píngguǒ", correctAnswer: "apple", options: ["apple", "banana", "watermelon", "fruit"], relatedVocabId: "h2-082" },
  { id: "q12-02", type: "en-to-char", prompt: "banana", correctAnswer: "香蕉", options: ["香蕉", "苹果", "西瓜", "水果"], relatedVocabId: "h2-083" },
  { id: "q12-03", type: "char-to-en", prompt: "水果", promptPinyin: "shuǐguǒ", correctAnswer: "fruit", options: ["fruit", "apple", "milk", "egg"], relatedVocabId: "h2-081" },
  { id: "q12-04", type: "en-to-char", prompt: "noodles", correctAnswer: "面条", options: ["面条", "米饭", "鱼", "肉"], relatedVocabId: "h2-090" },
  { id: "q12-05", type: "char-to-en", prompt: "牛奶", promptPinyin: "niúnǎi", correctAnswer: "milk", options: ["milk", "egg", "fish", "meat"], relatedVocabId: "h2-085" },
  { id: "q12-06", type: "en-to-char", prompt: "watermelon", correctAnswer: "西瓜", options: ["西瓜", "苹果", "香蕉", "水果"], relatedVocabId: "h2-084" },
  { id: "q12-07", type: "char-to-en", prompt: "非常", promptPinyin: "fēicháng", correctAnswer: "very; extremely", options: ["very; extremely", "really", "already", "maybe"], relatedVocabId: "h2-011" },
  { id: "q12-08", type: "en-to-char", prompt: "cooked rice", correctAnswer: "米饭", options: ["米饭", "面条", "鱼", "肉"], relatedVocabId: "h2-089" },
  { id: "q12-09", type: "char-to-en", prompt: "好吃", promptPinyin: "hǎochī", correctAnswer: "delicious", options: ["delicious", "beautiful", "happy", "busy"], relatedVocabId: "h1-084" },
  { id: "q12-10", type: "en-to-char", prompt: "fish", correctAnswer: "鱼", options: ["鱼", "肉", "鸡蛋", "牛奶"], relatedVocabId: "h2-087" },
];

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}

export function getQuestionsByIds(ids: string[]): QuizQuestion[] {
  return ids
    .map((id) => QUIZ_QUESTIONS.find((q) => q.id === id))
    .filter(Boolean) as QuizQuestion[];
}

export function getNextLesson(currentId: string): Lesson | undefined {
  const current = getLessonById(currentId);
  if (!current) return undefined;
  return LESSONS.find((l) => l.order === current.order + 1);
}
