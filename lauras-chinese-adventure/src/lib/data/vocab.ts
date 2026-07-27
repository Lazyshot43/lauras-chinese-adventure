import { VocabItem } from "@/types";

/**
 * Full HSK 1 + HSK 2 vocabulary dataset.
 * Every entry ALWAYS includes characters + pinyin + english.
 * Lessons reference subsets of these.
 * Expand later by adding more and creating new lessons.
 */

export const VOCAB: VocabItem[] = [
  // ========== HSK 1 ==========
  // Basics & Greetings
  { id: "h1-001", characters: "你", pinyin: "nǐ", english: "you", hskLevel: 1, category: "pronoun" },
  { id: "h1-002", characters: "好", pinyin: "hǎo", english: "good; well", hskLevel: 1, category: "adjective",
    exampleSentence: { characters: "你好！", pinyin: "Nǐ hǎo!", english: "Hello!" } },
  { id: "h1-003", characters: "我", pinyin: "wǒ", english: "I; me", hskLevel: 1, category: "pronoun" },
  { id: "h1-004", characters: "是", pinyin: "shì", english: "to be; is; are", hskLevel: 1, category: "verb" },
  { id: "h1-005", characters: "的", pinyin: "de", english: "possessive particle", hskLevel: 1, category: "particle" },
  { id: "h1-006", characters: "不", pinyin: "bù", english: "not; no", hskLevel: 1, category: "adverb" },
  { id: "h1-007", characters: "在", pinyin: "zài", english: "at; in; on", hskLevel: 1, category: "preposition" },
  { id: "h1-008", characters: "有", pinyin: "yǒu", english: "to have; there is", hskLevel: 1, category: "verb" },
  { id: "h1-009", characters: "人", pinyin: "rén", english: "person; people", hskLevel: 1, category: "noun" },
  { id: "h1-010", characters: "这", pinyin: "zhè", english: "this", hskLevel: 1, category: "pronoun" },
  { id: "h1-011", characters: "那", pinyin: "nà", english: "that", hskLevel: 1, category: "pronoun" },
  { id: "h1-012", characters: "什么", pinyin: "shénme", english: "what", hskLevel: 1, category: "pronoun" },
  { id: "h1-013", characters: "谁", pinyin: "shéi", english: "who", hskLevel: 1, category: "pronoun" },
  { id: "h1-014", characters: "哪", pinyin: "nǎ", english: "which", hskLevel: 1, category: "pronoun" },
  { id: "h1-015", characters: "怎么", pinyin: "zěnme", english: "how", hskLevel: 1, category: "adverb" },
  { id: "h1-016", characters: "为什么", pinyin: "wèishénme", english: "why", hskLevel: 1, category: "adverb" },
  { id: "h1-017", characters: "谢谢", pinyin: "xièxie", english: "thank you", hskLevel: 1, category: "expression",
    exampleSentence: { characters: "谢谢你！", pinyin: "Xièxie nǐ!", english: "Thank you!" } },
  { id: "h1-018", characters: "不客气", pinyin: "bú kèqi", english: "you're welcome", hskLevel: 1, category: "expression" },
  { id: "h1-019", characters: "对不起", pinyin: "duìbuqǐ", english: "sorry", hskLevel: 1, category: "expression" },
  { id: "h1-020", characters: "没关系", pinyin: "méi guānxi", english: "it's okay; no problem", hskLevel: 1, category: "expression" },

  // Numbers
  { id: "h1-021", characters: "一", pinyin: "yī", english: "one", hskLevel: 1, category: "number" },
  { id: "h1-022", characters: "二", pinyin: "èr", english: "two", hskLevel: 1, category: "number" },
  { id: "h1-023", characters: "三", pinyin: "sān", english: "three", hskLevel: 1, category: "number" },
  { id: "h1-024", characters: "四", pinyin: "sì", english: "four", hskLevel: 1, category: "number" },
  { id: "h1-025", characters: "五", pinyin: "wǔ", english: "five", hskLevel: 1, category: "number" },
  { id: "h1-026", characters: "六", pinyin: "liù", english: "six", hskLevel: 1, category: "number" },
  { id: "h1-027", characters: "七", pinyin: "qī", english: "seven", hskLevel: 1, category: "number" },
  { id: "h1-028", characters: "八", pinyin: "bā", english: "eight", hskLevel: 1, category: "number" },
  { id: "h1-029", characters: "九", pinyin: "jiǔ", english: "nine", hskLevel: 1, category: "number" },
  { id: "h1-030", characters: "十", pinyin: "shí", english: "ten", hskLevel: 1, category: "number" },
  { id: "h1-031", characters: "百", pinyin: "bǎi", english: "hundred", hskLevel: 1, category: "number" },
  { id: "h1-032", characters: "零", pinyin: "líng", english: "zero", hskLevel: 1, category: "number" },

  // Family & People
  { id: "h1-033", characters: "爸爸", pinyin: "bàba", english: "dad; father", hskLevel: 1, category: "family" },
  { id: "h1-034", characters: "妈妈", pinyin: "māma", english: "mom; mother", hskLevel: 1, category: "family" },
  { id: "h1-035", characters: "儿子", pinyin: "érzi", english: "son", hskLevel: 1, category: "family" },
  { id: "h1-036", characters: "女儿", pinyin: "nǚ'ér", english: "daughter", hskLevel: 1, category: "family" },
  { id: "h1-037", characters: "朋友", pinyin: "péngyou", english: "friend", hskLevel: 1, category: "people" },
  { id: "h1-038", characters: "老师", pinyin: "lǎoshī", english: "teacher", hskLevel: 1, category: "people" },
  { id: "h1-039", characters: "学生", pinyin: "xuésheng", english: "student", hskLevel: 1, category: "people" },
  { id: "h1-040", characters: "医生", pinyin: "yīshēng", english: "doctor", hskLevel: 1, category: "people" },

  // Time & Days
  { id: "h1-041", characters: "今天", pinyin: "jīntiān", english: "today", hskLevel: 1, category: "time" },
  { id: "h1-042", characters: "明天", pinyin: "míngtiān", english: "tomorrow", hskLevel: 1, category: "time" },
  { id: "h1-043", characters: "昨天", pinyin: "zuótiān", english: "yesterday", hskLevel: 1, category: "time" },
  { id: "h1-044", characters: "年", pinyin: "nián", english: "year", hskLevel: 1, category: "time" },
  { id: "h1-045", characters: "月", pinyin: "yuè", english: "month; moon", hskLevel: 1, category: "time" },
  { id: "h1-046", characters: "日", pinyin: "rì", english: "day; sun", hskLevel: 1, category: "time" },
  { id: "h1-047", characters: "星期", pinyin: "xīngqī", english: "week", hskLevel: 1, category: "time" },
  { id: "h1-048", characters: "点", pinyin: "diǎn", english: "o'clock; point", hskLevel: 1, category: "time" },
  { id: "h1-049", characters: "分", pinyin: "fēn", english: "minute", hskLevel: 1, category: "time" },
  { id: "h1-050", characters: "现在", pinyin: "xiànzài", english: "now", hskLevel: 1, category: "time" },

  // Places & Things
  { id: "h1-051", characters: "家", pinyin: "jiā", english: "home; family", hskLevel: 1, category: "place" },
  { id: "h1-052", characters: "学校", pinyin: "xuéxiào", english: "school", hskLevel: 1, category: "place" },
  { id: "h1-053", characters: "商店", pinyin: "shāngdiàn", english: "shop; store", hskLevel: 1, category: "place" },
  { id: "h1-054", characters: "医院", pinyin: "yīyuàn", english: "hospital", hskLevel: 1, category: "place" },
  { id: "h1-055", characters: "中国", pinyin: "Zhōngguó", english: "China", hskLevel: 1, category: "place" },
  { id: "h1-056", characters: "北京", pinyin: "Běijīng", english: "Beijing", hskLevel: 1, category: "place" },
  { id: "h1-057", characters: "水", pinyin: "shuǐ", english: "water", hskLevel: 1, category: "noun" },
  { id: "h1-058", characters: "茶", pinyin: "chá", english: "tea", hskLevel: 1, category: "noun" },
  { id: "h1-059", characters: "饭", pinyin: "fàn", english: "rice; meal", hskLevel: 1, category: "noun" },
  { id: "h1-060", characters: "菜", pinyin: "cài", english: "dish; vegetable", hskLevel: 1, category: "noun" },

  // Verbs common
  { id: "h1-061", characters: "去", pinyin: "qù", english: "to go", hskLevel: 1, category: "verb" },
  { id: "h1-062", characters: "来", pinyin: "lái", english: "to come", hskLevel: 1, category: "verb" },
  { id: "h1-063", characters: "看", pinyin: "kàn", english: "to look; to watch", hskLevel: 1, category: "verb" },
  { id: "h1-064", characters: "听", pinyin: "tīng", english: "to listen", hskLevel: 1, category: "verb" },
  { id: "h1-065", characters: "说", pinyin: "shuō", english: "to speak; to say", hskLevel: 1, category: "verb" },
  { id: "h1-066", characters: "读", pinyin: "dú", english: "to read", hskLevel: 1, category: "verb" },
  { id: "h1-067", characters: "写", pinyin: "xiě", english: "to write", hskLevel: 1, category: "verb" },
  { id: "h1-068", characters: "吃", pinyin: "chī", english: "to eat", hskLevel: 1, category: "verb" },
  { id: "h1-069", characters: "喝", pinyin: "hē", english: "to drink", hskLevel: 1, category: "verb" },
  { id: "h1-070", characters: "买", pinyin: "mǎi", english: "to buy", hskLevel: 1, category: "verb" },
  { id: "h1-071", characters: "喜欢", pinyin: "xǐhuan", english: "to like", hskLevel: 1, category: "verb" },
  { id: "h1-072", characters: "爱", pinyin: "ài", english: "to love", hskLevel: 1, category: "verb" },
  { id: "h1-073", characters: "想", pinyin: "xiǎng", english: "to want; to think", hskLevel: 1, category: "verb" },
  { id: "h1-074", characters: "知道", pinyin: "zhīdào", english: "to know", hskLevel: 1, category: "verb" },
  { id: "h1-075", characters: "认识", pinyin: "rènshi", english: "to know (someone); to recognize", hskLevel: 1, category: "verb" },

  // Adjectives
  { id: "h1-076", characters: "大", pinyin: "dà", english: "big", hskLevel: 1, category: "adjective" },
  { id: "h1-077", characters: "小", pinyin: "xiǎo", english: "small", hskLevel: 1, category: "adjective" },
  { id: "h1-078", characters: "多", pinyin: "duō", english: "many; much", hskLevel: 1, category: "adjective" },
  { id: "h1-079", characters: "少", pinyin: "shǎo", english: "few; little", hskLevel: 1, category: "adjective" },
  { id: "h1-080", characters: "热", pinyin: "rè", english: "hot", hskLevel: 1, category: "adjective" },
  { id: "h1-081", characters: "冷", pinyin: "lěng", english: "cold", hskLevel: 1, category: "adjective" },
  { id: "h1-082", characters: "高兴", pinyin: "gāoxìng", english: "happy", hskLevel: 1, category: "adjective" },
  { id: "h1-083", characters: "漂亮", pinyin: "piàoliang", english: "beautiful; pretty", hskLevel: 1, category: "adjective" },
  { id: "h1-084", characters: "好吃", pinyin: "hǎochī", english: "delicious", hskLevel: 1, category: "adjective" },
  { id: "h1-085", characters: "新", pinyin: "xīn", english: "new", hskLevel: 1, category: "adjective" },

  // More useful HSK1
  { id: "h1-086", characters: "请", pinyin: "qǐng", english: "please; to invite", hskLevel: 1, category: "verb" },
  { id: "h1-087", characters: "问", pinyin: "wèn", english: "to ask", hskLevel: 1, category: "verb" },
  { id: "h1-088", characters: "回", pinyin: "huí", english: "to return", hskLevel: 1, category: "verb" },
  { id: "h1-089", characters: "叫", pinyin: "jiào", english: "to call; to be called", hskLevel: 1, category: "verb" },
  { id: "h1-090", characters: "做", pinyin: "zuò", english: "to do; to make", hskLevel: 1, category: "verb" },
  { id: "h1-091", characters: "工作", pinyin: "gōngzuò", english: "work; job", hskLevel: 1, category: "noun" },
  { id: "h1-092", characters: "钱", pinyin: "qián", english: "money", hskLevel: 1, category: "noun" },
  { id: "h1-093", characters: "书", pinyin: "shū", english: "book", hskLevel: 1, category: "noun" },
  { id: "h1-094", characters: "电脑", pinyin: "diànnǎo", english: "computer", hskLevel: 1, category: "noun" },
  { id: "h1-095", characters: "电影", pinyin: "diànyǐng", english: "movie", hskLevel: 1, category: "noun" },
  { id: "h1-096", characters: "音乐", pinyin: "yīnyuè", english: "music", hskLevel: 1, category: "noun" },
  { id: "h1-097", characters: "汉语", pinyin: "Hànyǔ", english: "Chinese language", hskLevel: 1, category: "noun" },
  { id: "h1-098", characters: "字", pinyin: "zì", english: "character; word", hskLevel: 1, category: "noun" },
  { id: "h1-099", characters: "名字", pinyin: "míngzi", english: "name", hskLevel: 1, category: "noun" },
  { id: "h1-100", characters: "岁", pinyin: "suì", english: "years old", hskLevel: 1, category: "measure" },

  // ========== HSK 2 ==========
  { id: "h2-001", characters: "但是", pinyin: "dànshì", english: "but; however", hskLevel: 2, category: "conjunction" },
  { id: "h2-002", characters: "因为", pinyin: "yīnwèi", english: "because", hskLevel: 2, category: "conjunction" },
  { id: "h2-003", characters: "所以", pinyin: "suǒyǐ", english: "so; therefore", hskLevel: 2, category: "conjunction" },
  { id: "h2-004", characters: "虽然", pinyin: "suīrán", english: "although", hskLevel: 2, category: "conjunction" },
  { id: "h2-005", characters: "还是", pinyin: "háishì", english: "or; still", hskLevel: 2, category: "conjunction" },
  { id: "h2-006", characters: "或者", pinyin: "huòzhě", english: "or", hskLevel: 2, category: "conjunction" },
  { id: "h2-007", characters: "已经", pinyin: "yǐjīng", english: "already", hskLevel: 2, category: "adverb" },
  { id: "h2-008", characters: "正在", pinyin: "zhèngzài", english: "in the process of", hskLevel: 2, category: "adverb" },
  { id: "h2-009", characters: "也", pinyin: "yě", english: "also; too", hskLevel: 2, category: "adverb" },
  { id: "h2-010", characters: "都", pinyin: "dōu", english: "all; both", hskLevel: 2, category: "adverb" },
  { id: "h2-011", characters: "非常", pinyin: "fēicháng", english: "very; extremely", hskLevel: 2, category: "adverb" },
  { id: "h2-012", characters: "真", pinyin: "zhēn", english: "really; true", hskLevel: 2, category: "adverb" },
  { id: "h2-013", characters: "可能", pinyin: "kěnéng", english: "maybe; possible", hskLevel: 2, category: "adverb" },
  { id: "h2-014", characters: "可以", pinyin: "kěyǐ", english: "can; may", hskLevel: 2, category: "verb" },
  { id: "h2-015", characters: "要", pinyin: "yào", english: "to want; will", hskLevel: 2, category: "verb" },
  { id: "h2-016", characters: "会", pinyin: "huì", english: "can; will; to know how", hskLevel: 2, category: "verb" },
  { id: "h2-017", characters: "能", pinyin: "néng", english: "can; able to", hskLevel: 2, category: "verb" },
  { id: "h2-018", characters: "告诉", pinyin: "gàosu", english: "to tell", hskLevel: 2, category: "verb" },
  { id: "h2-019", characters: "觉得", pinyin: "juéde", english: "to feel; to think", hskLevel: 2, category: "verb" },
  { id: "h2-020", characters: "希望", pinyin: "xīwàng", english: "to hope", hskLevel: 2, category: "verb" },

  { id: "h2-021", characters: "帮助", pinyin: "bāngzhù", english: "to help", hskLevel: 2, category: "verb" },
  { id: "h2-022", characters: "开始", pinyin: "kāishǐ", english: "to begin; start", hskLevel: 2, category: "verb" },
  { id: "h2-023", characters: "完", pinyin: "wán", english: "to finish", hskLevel: 2, category: "verb" },
  { id: "h2-024", characters: "准备", pinyin: "zhǔnbèi", english: "to prepare", hskLevel: 2, category: "verb" },
  { id: "h2-025", characters: "介绍", pinyin: "jièshào", english: "to introduce", hskLevel: 2, category: "verb" },
  { id: "h2-026", characters: "旅行", pinyin: "lǚxíng", english: "to travel; trip", hskLevel: 2, category: "verb" },
  { id: "h2-027", characters: "运动", pinyin: "yùndòng", english: "sports; exercise", hskLevel: 2, category: "noun" },
  { id: "h2-028", characters: "休息", pinyin: "xiūxi", english: "to rest", hskLevel: 2, category: "verb" },
  { id: "h2-029", characters: "玩", pinyin: "wán", english: "to play", hskLevel: 2, category: "verb" },
  { id: "h2-030", characters: "笑", pinyin: "xiào", english: "to laugh; smile", hskLevel: 2, category: "verb" },

  { id: "h2-031", characters: "身体", pinyin: "shēntǐ", english: "body; health", hskLevel: 2, category: "noun" },
  { id: "h2-032", characters: "眼睛", pinyin: "yǎnjing", english: "eye", hskLevel: 2, category: "noun" },
  { id: "h2-033", characters: "手", pinyin: "shǒu", english: "hand", hskLevel: 2, category: "noun" },
  { id: "h2-034", characters: "脚", pinyin: "jiǎo", english: "foot", hskLevel: 2, category: "noun" },
  { id: "h2-035", characters: "头", pinyin: "tóu", english: "head", hskLevel: 2, category: "noun" },
  { id: "h2-036", characters: "脸", pinyin: "liǎn", english: "face", hskLevel: 2, category: "noun" },
  { id: "h2-037", characters: "衣服", pinyin: "yīfu", english: "clothes", hskLevel: 2, category: "noun" },
  { id: "h2-038", characters: "鞋", pinyin: "xié", english: "shoe", hskLevel: 2, category: "noun" },
  { id: "h2-039", characters: "颜色", pinyin: "yánsè", english: "color", hskLevel: 2, category: "noun" },
  { id: "h2-040", characters: "红", pinyin: "hóng", english: "red", hskLevel: 2, category: "color" },

  { id: "h2-041", characters: "黄", pinyin: "huáng", english: "yellow", hskLevel: 2, category: "color" },
  { id: "h2-042", characters: "蓝", pinyin: "lán", english: "blue", hskLevel: 2, category: "color" },
  { id: "h2-043", characters: "绿", pinyin: "lǜ", english: "green", hskLevel: 2, category: "color" },
  { id: "h2-044", characters: "白", pinyin: "bái", english: "white", hskLevel: 2, category: "color" },
  { id: "h2-045", characters: "黑", pinyin: "hēi", english: "black", hskLevel: 2, category: "color" },
  { id: "h2-046", characters: "天气", pinyin: "tiānqì", english: "weather", hskLevel: 2, category: "noun" },
  { id: "h2-047", characters: "晴", pinyin: "qíng", english: "sunny", hskLevel: 2, category: "adjective" },
  { id: "h2-048", characters: "下雨", pinyin: "xià yǔ", english: "to rain", hskLevel: 2, category: "verb" },
  { id: "h2-049", characters: "雪", pinyin: "xuě", english: "snow", hskLevel: 2, category: "noun" },
  { id: "h2-050", characters: "风", pinyin: "fēng", english: "wind", hskLevel: 2, category: "noun" },

  { id: "h2-051", characters: "机场", pinyin: "jīchǎng", english: "airport", hskLevel: 2, category: "place" },
  { id: "h2-052", characters: "火车站", pinyin: "huǒchēzhàn", english: "train station", hskLevel: 2, category: "place" },
  { id: "h2-053", characters: "公共汽车", pinyin: "gōnggòng qìchē", english: "bus", hskLevel: 2, category: "noun" },
  { id: "h2-054", characters: "出租车", pinyin: "chūzūchē", english: "taxi", hskLevel: 2, category: "noun" },
  { id: "h2-055", characters: "路", pinyin: "lù", english: "road; path", hskLevel: 2, category: "noun" },
  { id: "h2-056", characters: "远", pinyin: "yuǎn", english: "far", hskLevel: 2, category: "adjective" },
  { id: "h2-057", characters: "近", pinyin: "jìn", english: "near", hskLevel: 2, category: "adjective" },
  { id: "h2-058", characters: "左边", pinyin: "zuǒbiān", english: "left side", hskLevel: 2, category: "noun" },
  { id: "h2-059", characters: "右边", pinyin: "yòubiān", english: "right side", hskLevel: 2, category: "noun" },
  { id: "h2-060", characters: "旁边", pinyin: "pángbiān", english: "beside; next to", hskLevel: 2, category: "noun" },

  { id: "h2-061", characters: "公司", pinyin: "gōngsī", english: "company", hskLevel: 2, category: "noun" },
  { id: "h2-062", characters: "办公室", pinyin: "bàngōngshì", english: "office", hskLevel: 2, category: "noun" },
  { id: "h2-063", characters: "会议", pinyin: "huìyì", english: "meeting", hskLevel: 2, category: "noun" },
  { id: "h2-064", characters: "问题", pinyin: "wèntí", english: "question; problem", hskLevel: 2, category: "noun" },
  { id: "h2-065", characters: "答案", pinyin: "dá'àn", english: "answer", hskLevel: 2, category: "noun" },
  { id: "h2-066", characters: "意思", pinyin: "yìsi", english: "meaning", hskLevel: 2, category: "noun" },
  { id: "h2-067", characters: "时间", pinyin: "shíjiān", english: "time", hskLevel: 2, category: "noun" },
  { id: "h2-068", characters: "小时", pinyin: "xiǎoshí", english: "hour", hskLevel: 2, category: "noun" },
  { id: "h2-069", characters: "分钟", pinyin: "fēnzhōng", english: "minute", hskLevel: 2, category: "noun" },
  { id: "h2-070", characters: "早上", pinyin: "zǎoshang", english: "morning", hskLevel: 2, category: "time" },

  { id: "h2-071", characters: "中午", pinyin: "zhōngwǔ", english: "noon", hskLevel: 2, category: "time" },
  { id: "h2-072", characters: "下午", pinyin: "xiàwǔ", english: "afternoon", hskLevel: 2, category: "time" },
  { id: "h2-073", characters: "晚上", pinyin: "wǎnshang", english: "evening; night", hskLevel: 2, category: "time" },
  { id: "h2-074", characters: "生日", pinyin: "shēngrì", english: "birthday", hskLevel: 2, category: "noun" },
  { id: "h2-075", characters: "快乐", pinyin: "kuàilè", english: "happy", hskLevel: 2, category: "adjective" },
  { id: "h2-076", characters: "漂亮", pinyin: "piàoliang", english: "beautiful", hskLevel: 2, category: "adjective" },
  { id: "h2-077", characters: "忙", pinyin: "máng", english: "busy", hskLevel: 2, category: "adjective" },
  { id: "h2-078", characters: "累", pinyin: "lèi", english: "tired", hskLevel: 2, category: "adjective" },
  { id: "h2-079", characters: "便宜", pinyin: "piányi", english: "cheap", hskLevel: 2, category: "adjective" },
  { id: "h2-080", characters: "贵", pinyin: "guì", english: "expensive", hskLevel: 2, category: "adjective" },

  // Additional useful for lessons
  { id: "h2-081", characters: "水果", pinyin: "shuǐguǒ", english: "fruit", hskLevel: 2, category: "noun" },
  { id: "h2-082", characters: "苹果", pinyin: "píngguǒ", english: "apple", hskLevel: 2, category: "noun" },
  { id: "h2-083", characters: "香蕉", pinyin: "xiāngjiāo", english: "banana", hskLevel: 2, category: "noun" },
  { id: "h2-084", characters: "西瓜", pinyin: "xīguā", english: "watermelon", hskLevel: 2, category: "noun" },
  { id: "h2-085", characters: "牛奶", pinyin: "niúnǎi", english: "milk", hskLevel: 2, category: "noun" },
  { id: "h2-086", characters: "鸡蛋", pinyin: "jīdàn", english: "egg", hskLevel: 2, category: "noun" },
  { id: "h2-087", characters: "鱼", pinyin: "yú", english: "fish", hskLevel: 2, category: "noun" },
  { id: "h2-088", characters: "肉", pinyin: "ròu", english: "meat", hskLevel: 2, category: "noun" },
  { id: "h2-089", characters: "米饭", pinyin: "mǐfàn", english: "cooked rice", hskLevel: 2, category: "noun" },
  { id: "h2-090", characters: "面条", pinyin: "miàntiáo", english: "noodles", hskLevel: 2, category: "noun" },
];

/** Helper to get vocab by id */
export function getVocabById(id: string): VocabItem | undefined {
  return VOCAB.find((v) => v.id === id);
}

/** Get multiple by ids */
export function getVocabByIds(ids: string[]): VocabItem[] {
  return ids.map((id) => getVocabById(id)).filter(Boolean) as VocabItem[];
}
