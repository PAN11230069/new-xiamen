// ============================================
// 2026 廈金五天四夜慢旅行 — 行程資料
// 之後要改行程/公告/待辦，只要改這個檔案就好
// ============================================

const tripInfo = {
  title: "2026 廈金五天四夜慢旅行",
  subtitle: "把行程、地圖、住宿和注意事項都放在這裡，出門只要打開這個網站就好。",
  startDate: "2026-07-19",
  endDate: "2026-07-23",
  departureDateTime: "2026-07-19T10:30:00",
  meetingTime: "7/19 10:30　龍潭住家上車",
  meetingPlace: "桃園市龍潭區住家",
  emergencyContact: "尚未填寫",
  outboundFlight: "B7-8821　松山→金門　14:30-15:35",
  outboundFlightTime: "2026-07-19T14:30:00",
  returnFlightNo: "B7-8836　金門→松山　20:15-21:15",
  returnFlight: "2026-07-23T20:15:00",
  ferryToXiamen: "2026-07-20T09:00:00",
  ferryToKinmen: "2026-07-23T17:00:00"
};

// 機場接送（大車包車）
const transfers = [
  {
    type: "送機",
    date: "2026-07-19",
    time: "10:30",
    pickup: "桃園市龍潭區住家",
    dropoff: "松山機場",
    passengers: "7 人",
    luggage: "7 件",
    flight: "B7-8821",
    city: "台北",
    note: "航班 14:30-15:35，建議提早抵達機場，預留報到與托運時間"
  },
  {
    type: "接機",
    date: "2026-07-23",
    time: "21:15 抵達後",
    pickup: "松山機場",
    dropoff: "桃園市龍潭區住家",
    passengers: "7 人",
    luggage: "7 件",
    flight: "B7-8836",
    city: "台北",
    note: "航班 20:15-21:15，抵達後搭接機車輛返回龍潭"
  }
];

// 市內交通（計程車 / 步行 / 地鐵等短程移動）
const localTraffic = [
  {
    route: "龍潭住家 → 松山機場",
    from: "桃園市龍潭區住家",
    to: "松山機場",
    transport: "包車 / 計程車",
    duration: "約 60 分鐘以上",
    city: "台北",
    note: "7/19 10:30 上車，建議行李提前整理完成"
  },
  {
    route: "金門機場 → 歡樂滿屋民宿",
    from: "金門機場",
    to: "歡樂滿屋民宿",
    transport: "計程車 / 接駁",
    duration: "約 20 分鐘",
    city: "金門",
    note: "抵達金門後先前往民宿入住"
  },
  {
    route: "金門住宿 → 金門碼頭",
    from: "歡樂滿屋民宿",
    to: "金門碼頭",
    transport: "計程車",
    duration: "依實際路況",
    city: "金門",
    note: "7/20 09:00 船班，請提早出發"
  },
  {
    route: "五通碼頭 → 廈門酒店",
    from: "五通碼頭",
    to: "廈門中山路步行街檀邑飯店",
    transport: "計程車",
    duration: "約 26 分鐘",
    city: "厦门",
    note: "抵達後可先寄放行李，再辦電話卡與開戶相關事項"
  },
  {
    route: "酒店 → 集美學村",
    from: "廈門中山路步行街檀邑飯店",
    to: "集美學村",
    transport: "地鐵 / 計程車",
    duration: "依實際路線",
    city: "厦门",
    note: "可從鎮海路地鐵站出發，注意回程時間"
  },
  {
    route: "酒店 → 東渡碼頭",
    from: "廈門中山路步行街檀邑飯店",
    to: "東渡碼頭",
    transport: "計程車",
    duration: "約 16 分鐘",
    city: "厦门",
    note: "鼓浪嶼船票需提前確認，記得攜帶證件"
  },
  {
    route: "三丘田碼頭 → 八市",
    from: "三丘田碼頭",
    to: "八市",
    transport: "船班返回後轉計程車",
    duration: "約 16 分鐘",
    city: "厦门",
    note: "返程人潮較多，晚餐時間需保留彈性"
  },
  {
    route: "沙波尾 → 華僑博物院 → 南普陀寺 → 廈門大學",
    from: "沙波尾",
    to: "廈門大學",
    transport: "步行",
    duration: "每段約 5–14 分鐘",
    city: "厦门",
    note: "7/22 步行較多，建議穿好走的鞋"
  },
  {
    route: "廈門大學 → 曾厝垵 → 酒店",
    from: "廈門大學",
    to: "曾厝垵",
    transport: "計程車",
    duration: "約 12–16 分鐘",
    city: "厦门",
    note: "曾厝垵人潮多，建議先約好集合點"
  },
  {
    route: "酒店 → 廈門植物園 → 五通碼頭",
    from: "廈門中山路步行街檀邑飯店",
    to: "五通碼頭",
    transport: "計程車",
    duration: "依實際路況",
    city: "厦门",
    note: "7/23 回程日，務必預留前往碼頭與通關時間"
  }
];

// 兩岸航班與船班
const flights = [
  { date: "7/19", route: "松山 → 金門", no: "B7-8821", time: "14:30-15:35" },
  { date: "7/23", route: "金門 → 松山", no: "B7-8836", time: "20:15-21:15" }
];
const ferries = [
  { date: "7/20", route: "金門 → 五通", ship: "金瑞龍", time: "09:00-09:30" },
  { date: "7/23", route: "五通 → 金門", ship: "新金祥龍", time: "17:00-17:30" }
];

const announcement = {
  text: "目前行程仍在規劃中。請優先確認旅平險、鼓浪嶼船票、網卡，以及華僑博物院／廈門大學／南普陀寺預約。",
  updatedAt: "2026-07-04"
};

const members = [
  { name: "游家俊", role: "成員" },
  { name: "邵一蓓", role: "成員" },
  { name: "潘朝福", role: "成員" },
  { name: "王美鳳", role: "成員" },
  { name: "李萌漟", role: "成員" },
  { name: "蔡珮晴", role: "成員" },
  { name: "潘柏霖", role: "成員" }
];

const todoList = {
  order: [
    { name: "旅平險", done: false, note: "出發前完成" },
    { name: "機場接送", done: true, note: "7/2 已訂" },
    { name: "鼓浪嶼船票", done: false, note: "需實名制" },
    { name: "網卡", done: false, note: "或抵達後辦電話卡" }
  ],
  reserve: [
    { name: "華僑博物院", done: false, note: "7/22" },
    { name: "廈門大學", done: false, note: "7/22" },
    { name: "南普陀寺", done: false, note: "7/22" }
  ]
};

const hotels = [
  {
    name: "歡樂滿屋民宿",
    nights: "7/19",
    address: "金門縣金城鎮榜林村伯玉路一段236巷8號",
    checkin: "7/19 16:30",
    checkout: "7/20 08:00",
    phone: "0963 591 810",
    city: "金門",
    map: ""
  },
  {
    name: "廈門中山路步行街檀邑飯店",
    nights: "7/20 - 7/23",
    address: "廈門市思明區局口西二街109號",
    checkin: "7/20 14:30",
    checkout: "7/23 10:00",
    phone: "+86-592-6015999",
    city: "厦门",
    map: ""
  }
];

const packingList = [
  "台胞證", "身分證", "健保卡", "手機", "充電器", "行動電源",
  "網卡 / 電話卡", "現金", "銀行卡", "雨傘", "換洗衣物",
  "個人藥品", "船票資訊", "機票資訊", "旅平險資料", "住宿訂房資料",
  "充電線", "轉接頭", "面紙 / 濕紙巾", "簡易藥包"
];

const budgetItems = [
  { item: "住宿", amount: 0 },
  { item: "交通", amount: 0 },
  { item: "船票 / 機票", amount: 0 },
  { item: "門票", amount: 0 },
  { item: "餐費", amount: 0 },
  { item: "其他", amount: 0 }
];

const foodList = {
  mustEat: [
    { name: "八市晚餐", type: "小吃 / 海鮮", address: "廈門八市", note: "建議傍晚前往，可當作 7/21 晚餐", hours: "", city: "厦门" },
    { name: "曾厝垵小吃", type: "小吃街", address: "廈門曾厝垵", note: "人潮較多，建議先約定集合點", hours: "", city: "厦门" }
  ],
  backup: [
    { name: "鼓浪嶼附近美食", type: "咖啡廳 / 小吃", address: "鼓浪嶼", note: "可作為 7/21 午餐或下午茶備選", hours: "", city: "厦门" },
    { name: "中山路步行街美食", type: "小吃 / 甜點", address: "中山路步行街", note: "離酒店較近，適合臨時補餐", hours: "", city: "厦门" }
  ]
};

const rainyDayPlans = [
  { original: "鼓浪嶼戶外散步", backup: "室內咖啡廳 / 商場 / 博物館" },
  { original: "沙波尾、曾厝垵", backup: "華僑博物院 / 百貨商場 / 室內美食行程" },
  { original: "廈門植物園", backup: "中山路步行街 / 室內咖啡廳 / 提早前往碼頭" }
];

const tripData = [
  {
    day: "Day 1",
    date: "2026-07-19",
    displayDate: "7/19",
    week: "星期日",
    title: "出發與抵達金門",
    location: "桃園 / 台北 / 金門",
    plans: [
      {
        time: "10:30",
        start: "10:30",
        end: "11:30",
        place: "龍潭住家",
        activity: "集合上車，前往松山機場",
        transport: "包車 / 計程車",
        duration: "約 60 分鐘以上",
        ticket: false,
        reserve: false,
        city: "桃園",
        note: "請確認台胞證、身分證、機票資料與行李",
        map: ""
      },
      {
        time: "14:30",
        start: "14:30",
        end: "15:35",
        place: "松山機場",
        activity: "搭乘 B7-8821 前往金門",
        transport: "飛機 B7-8821",
        duration: "14:30-15:35",
        ticket: true,
        reserve: false,
        city: "台北",
        note: "建議提早抵達機場辦理報到與托運",
        map: ""
      },
      {
        time: "15:35",
        start: "15:35",
        end: "16:30",
        place: "金門機場",
        activity: "抵達金門，前往民宿",
        transport: "計程車 / 接駁",
        duration: "約 20 分鐘",
        ticket: false,
        reserve: false,
        city: "金門",
        note: "抵達後前往歡樂滿屋民宿",
        map: ""
      },
      {
        time: "16:30",
        start: "16:30",
        end: "22:00",
        place: "歡樂滿屋民宿",
        activity: "入住休息，自由活動",
        transport: "自行安排",
        duration: "住宿 1 晚",
        ticket: false,
        reserve: false,
        city: "金門",
        note: "隔天 09:00 搭船至廈門，建議提早休息",
        map: ""
      }
    ]
  },
  {
    day: "Day 2",
    date: "2026-07-20",
    displayDate: "7/20",
    week: "星期一",
    title: "前往廈門與集美學村",
    location: "金門 / 廈門",
    plans: [
      {
        time: "08:00",
        start: "08:00",
        end: "08:40",
        place: "歡樂滿屋民宿",
        activity: "退房，前往金門碼頭",
        transport: "計程車",
        duration: "依實際路況",
        ticket: false,
        reserve: false,
        city: "金門",
        note: "9:00 船班，請提早抵達碼頭",
        map: ""
      },
      {
        time: "09:00",
        start: "09:00",
        end: "09:30",
        place: "金門碼頭",
        activity: "搭船至廈門五通碼頭",
        transport: "船（金瑞龍）",
        duration: "09:00-09:30",
        ticket: true,
        reserve: false,
        city: "金門",
        note: "請提前到碼頭辦理相關手續",
        map: ""
      },
      {
        time: "09:30",
        start: "09:30",
        end: "12:00",
        place: "五通碼頭",
        activity: "辦電話卡、開戶",
        transport: "步行 / 計程車",
        duration: "依辦理時間",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "需準備台胞證與相關證件",
        map: ""
      },
      {
        time: "14:30",
        start: "14:30",
        end: "15:30",
        place: "廈門中山路步行街檀邑飯店",
        activity: "辦理住宿",
        transport: "計程車",
        duration: "約 26 分鐘",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "可先寄放行李，再視時間安排午餐或休息",
        map: ""
      },
      {
        time: "16:30",
        start: "16:30",
        end: "20:30",
        place: "集美學村",
        activity: "參觀、散步、晚餐",
        transport: "鎮海路地鐵站搭地鐵",
        duration: "依實際路線",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "注意回程時間與地鐵末班車",
        map: ""
      }
    ]
  },
  {
    day: "Day 3",
    date: "2026-07-21",
    displayDate: "7/21",
    week: "星期二",
    title: "鼓浪嶼與八市晚餐",
    location: "廈門 / 鼓浪嶼",
    plans: [
      {
        time: "09:00",
        start: "09:00",
        end: "09:30",
        place: "廈門中山路步行街檀邑飯店",
        activity: "出發前往東渡碼頭",
        transport: "計程車",
        duration: "約 16 分鐘",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "請確認鼓浪嶼船票、台胞證與隨身物品",
        map: ""
      },
      {
        time: "10:00",
        start: "10:00",
        end: "10:30",
        place: "東渡碼頭",
        activity: "搭船前往三丘田碼頭",
        transport: "船",
        duration: "約 20 分鐘",
        ticket: true,
        reserve: false,
        city: "厦门",
        note: "船票需提前購買，建議預留安檢與排隊時間",
        map: ""
      },
      {
        time: "10:30",
        start: "10:30",
        end: "16:30",
        place: "鼓浪嶼",
        activity: "鼓浪嶼自由行、拍照、午餐",
        transport: "步行",
        duration: "約 6 小時",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "島上以步行為主，建議穿好走的鞋",
        map: ""
      },
      {
        time: "17:30",
        start: "17:30",
        end: "20:00",
        place: "八市",
        activity: "晚餐",
        transport: "返程後轉計程車",
        duration: "約 16 分鐘",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "可安排小吃或海鮮，注意集合時間",
        map: ""
      }
    ]
  },
  {
    day: "Day 4",
    date: "2026-07-22",
    displayDate: "7/22",
    week: "星期三",
    title: "沙波尾、南普陀寺與廈門大學",
    location: "廈門市區",
    plans: [
      {
        time: "10:00",
        start: "10:00",
        end: "11:30",
        place: "沙波尾",
        activity: "散步、拍照",
        transport: "計程車",
        duration: "約 1.5 小時",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "文青街區，適合拍照",
        map: ""
      },
      {
        time: "12:00",
        start: "12:00",
        end: "13:20",
        place: "華僑博物院",
        activity: "參觀",
        transport: "步行",
        duration: "步行約 12 分鐘",
        ticket: false,
        reserve: true,
        city: "厦门",
        note: "需確認是否預約與開放時間",
        map: ""
      },
      {
        time: "14:00",
        start: "14:00",
        end: "14:50",
        place: "南普陀寺",
        activity: "參觀",
        transport: "步行",
        duration: "步行約 14 分鐘",
        ticket: false,
        reserve: true,
        city: "厦门",
        note: "待預約，注意入寺規定",
        map: ""
      },
      {
        time: "15:00",
        start: "15:00",
        end: "16:30",
        place: "廈門大學",
        activity: "參觀校園",
        transport: "步行",
        duration: "步行約 5 分鐘",
        ticket: false,
        reserve: true,
        city: "厦门",
        note: "待預約，需確認入校規定與證件",
        map: ""
      },
      {
        time: "17:00",
        start: "17:00",
        end: "19:30",
        place: "曾厝垵",
        activity: "逛街、晚餐",
        transport: "計程車",
        duration: "約 12 分鐘",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "人潮較多，請先約好集合點",
        map: ""
      },
      {
        time: "20:30",
        start: "20:30",
        end: "22:00",
        place: "廈門中山路步行街檀邑飯店",
        activity: "返回酒店",
        transport: "計程車",
        duration: "約 16 分鐘",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "整理隔天返台物品",
        map: ""
      }
    ]
  },
  {
    day: "Day 5",
    date: "2026-07-23",
    displayDate: "7/23",
    week: "星期四",
    title: "廈門植物園與返台",
    location: "廈門 / 金門 / 台灣",
    plans: [
      {
        time: "10:00",
        start: "10:00",
        end: "12:00",
        place: "廈門植物園",
        activity: "參觀",
        transport: "計程車",
        duration: "車程約 6 分鐘",
        ticket: true,
        reserve: false,
        city: "厦门",
        note: "回程日行程不要排太滿，注意天氣與體力",
        map: ""
      },
      {
        time: "14:30",
        start: "14:30",
        end: "15:30",
        place: "廈門中山路步行街檀邑飯店",
        activity: "取行李，前往五通碼頭",
        transport: "計程車",
        duration: "依實際路況",
        ticket: false,
        reserve: false,
        city: "厦门",
        note: "建議提早前往碼頭，避免回程銜接太趕",
        map: ""
      },
      {
        time: "17:00",
        start: "17:00",
        end: "17:30",
        place: "五通碼頭",
        activity: "搭船返回金門",
        transport: "船（新金祥龍）",
        duration: "17:00-17:30",
        ticket: true,
        reserve: false,
        city: "厦门",
        note: "務必提早到碼頭",
        map: ""
      },
      {
        time: "20:15",
        start: "20:15",
        end: "21:15",
        place: "金門機場",
        activity: "搭機返台（B7-8836）",
        transport: "飛機",
        duration: "20:15-21:15",
        ticket: true,
        reserve: false,
        city: "金門",
        note: "抵達松山後有接機車輛，直接返回龍潭住家",
        map: ""
      }
    ]
  }
];
