// ============================================
// EDIT HERE: Your Telegram username (without @)
// ============================================
const TELEGRAM_USERNAME = "miko_610";

// ============================================
// EDIT HERE: Add, remove, or change products
// ============================================
const products = [
  {
    id: 1,
    nameEn: "Samsung Smart TV 55\"",
    nameZh: "三星55寸智能电视",

    category: "electronics",
    categoryLabel: "Electronics 电器",

    price: 12000,

    condition: "Very Good / 九成新",

    status: "reserved",
    statusLabel: "Reserved / 已预定",

    tag: "Bundle Option",
    shortNote: "Great quality; with Unblock TV box set is ₱20,000 / 质量很好，带安博盒子一套₱20,000",
    sellerNote:
      "The TV is in great condition and works well. Listed price is for the TV only; if you want it together with the Unblock TV box, the set is ₱20,000. / 电视质量很好，功能正常。页面价格为电视单独价格；如果带安博盒子，一套是 ₱20,000。",

    image: "image/01-tv.jpg",
},
  {
    id: 2,
    nameEn: "Massage Chair",
    nameZh: "按摩椅",

    category: "furniture",
    categoryLabel: "Furniture 家具",

    price: 40000,

    condition: "Good / 良好",

    status: "available",
    statusLabel: "Available / 可售",

    tag: "Premium Pick",
    shortNote: "Imported massage chair, very comfy / 海运来的按摩椅，很舒服",
    sellerNote:
      "Bought new for around RMB 20,000 and shipped here by sea. It massages really comfortably. Selling only because I am moving. / 全新购入约2万人民币，海运到菲律宾，按摩真的很舒服。因为搬家所以出售。",

    image: "image/02-massage-chair.jpg",
  },
  {
    id: 3,
    nameEn: "IKEA Dressing Table + MALM Drawer Set",
    nameZh: "IKEA 梳妆台 + 马尔姆斗柜套装",

    category: "furniture",
    categoryLabel: "Furniture 家具",

    price: 7000,

    condition: "Very Good / 九成新",

    status: "available",
    statusLabel: "Available / 可售",

    tag: "Very New",
    shortNote: "Very new and clean / 梳妆台也很新",
    sellerNote:
      "The dressing table set is still very new and clean. Good for anyone who wants a ready-to-use vanity setup. / 梳妆台套装整体很新很干净，适合想直接拥有完整化妆区的人。",

    image: "image/03-ikea-dressing-table-malm-set.jpg",
},
{
  id: 4,
  nameEn: "IKEA MALM Drawer Chest",
  nameZh: "IKEA 马尔姆斗柜",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 8000,

  condition: "Almost New / 几乎全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Almost New",
  shortNote: "Almost new MALM drawers / 马尔姆柜子几乎全新",
  sellerNote:
    "The MALM drawer chest is almost new and has been kept in very good condition. / 马尔姆斗柜几乎全新，保存状态很好。",

  image: "image/04-malm-drawer.jpg",
},
{
  id: 5,
  nameEn: "IKEA BILLY Shoe Cabinet",
  nameZh: "IKEA 毕利鞋柜",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 8000,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Extra Shelves",
  shortNote: "Extra shelves added, fits 5-6 more pairs / 加装隔板，可多放5-6双鞋",
  sellerNote:
    "We added several extra shelves inside, so it can hold about 5-6 more pairs of shoes than the original setup. / 鞋柜里面已经自己加装了好几个隔板，比原本可以多放大约5-6双鞋。",

  image: "image/05-billy-shoe-cabinet.jpg",
},
{
  id: 6,
  nameEn: "IKEA BILLY Bookcase",
  nameZh: "IKEA 毕利书柜",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 2500,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/06-billy-bookcase.jpg",
},
{
  id: 7,
  nameEn: "IKEA Tall Glass-Door Bookcase",
  nameZh: "IKEA 高款玻璃门书柜",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 3000,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/07-ikea-tall-glass-door-bookcase.png",
},
{
  id: 8,
  nameEn: "Nespresso Capsule Coffee Machine",
  nameZh: "Nespresso 雀巢胶囊咖啡机",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 6000,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  tag: "Super Handy",
  shortNote: "Super convenient capsule coffee machine / 真的超级方便",
  sellerNote:
    "This capsule coffee machine is really convenient for daily use, especially for quick coffee at home. / 胶囊咖啡机真的超级超级方便，很适合每天在家快速喝咖啡。",

  image: "image/08-nespresso-coffee-machine.jpeg",
},
{
  id: 9,
  nameEn: "IKEA Glassware Set",
  nameZh: "IKEA 玻璃杯套装",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 500,

  condition: "Very Good / 九成新",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/09-ikea-glassware-set.jpeg",
},
{
  id: 10,
  nameEn: "IKEA Mug Set with Wooden Stand",
  nameZh: "IKEA 马克杯套装带木架",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 600,

  condition: "Very Good / 九成新",

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/10-ikea-mug-set-with-stand.jpeg",
},
{
  id: 11,
  nameEn: "IKEA 3-Tier Utility Cart",
  nameZh: "IKEA 三层置物推车",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 1200,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  tag: "More Available",
  shortNote: "Several carts available; can send more photos / 有好几个，还有2个小的可拍",
  sellerNote:
    "There are several storage carts available, plus two smaller ones. Message me if you want more photos. / 置物架有好几个，还有2个小的，需要的话可以私信我再拍照片。",

  image: "image/11-ikea-utility-cart.jpeg",
},
{
  id: 12,
  nameEn: "IKEA Mesh Drawer Units, Set of 2",
  nameZh: "IKEA 网篮抽屉柜一对",

  category: "furniture",
  categoryLabel: "Furniture 家具",

    price: 1000,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/12-ikea-mesh-drawer-units.jpeg",
},
{
  id: 13,
  nameEn: "Morphy Richards Multi-Function Electric Cooker Set",
  nameZh: "摩飞 Morphy Richards 多功能锅套装 + 两个餐盘",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 7000,

  condition: "Very Good / 九成新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Full Set",
  shortNote: "High-use set with hotpot and grill plates / 使用率高，火锅烤肉锅都有",
  sellerNote:
    "This Morphy Richards set is very useful and has been used often. It comes with the hotpot and grill plates, plus two extra plates. / 摩飞锅使用率非常高，火锅、烤肉锅都有配，也包含另外两个餐盘。",

  image: "image/13-morphy-richards-electric-pot-set.jpeg",
},
{
  id: 14,
  nameEn: "Cooking Oil",
  nameZh: "食用油",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 250,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/14-cooking-oil.jpeg",
},
{
  id: 15,
  nameEn: "Condiments and Seasonings Set",
  nameZh: "调料调味品一组",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 500,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  tag: "Free Extras",
  shortNote: "More seasonings not pictured can be included / 还有没拍到的调料可送",
  sellerNote:
    "There are also some seasonings that are not shown in the photo, and they can be included as extras. / 还有一些调料没有拍上，也可以一起送。",

  image: "image/15-condiments-and-seasonings.jpeg",
},
{
  id: 16,
  nameEn: "Meta Quest 2 VR Headset 128GB",
  nameZh: "Meta Quest 2 VR 头显 128GB",

  category: "electronics",
  categoryLabel: "Electronics 电器",

    price: 13500,

  condition: "Very Good / 九成新",

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/16-meta-quest-2-128gb.jpeg",
},
{
  id: 17,
  nameEn: "Nintendo Switch + Games Bundle",
  nameZh: "Nintendo Switch 游戏机 + 游戏套装",

  category: "electronics",
  categoryLabel: "Electronics 电器",

    price: 18500,

  condition: "Almost New / 几乎全新",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  tag: "Almost New",
  shortNote: "Almost new Switch bundle / Switch 几乎全新",
  sellerNote:
    "The Nintendo Switch is almost new and comes as a bundle with games. / Switch 几乎全新，和游戏一起套装出售。",

  image: "image/17-nintendo-switch-game-bundle.jpeg",
},
{
  id: 18,
  nameEn: "Xiaomi Smart Scale",
  nameZh: "小米智能体重秤",

  category: "electronics",
  categoryLabel: "Electronics 电器",

    price: 500,

  condition: "Fair / 有使用痕迹",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Xiaomi",
  shortNote: "Xiaomi electronic scale / 小米电子秤",
  sellerNote:
    "Xiaomi electronic scale with visible signs of use, priced at ₱500. / 小米电子秤，有使用痕迹，标价 ₱500。",

  image: "image/50-xiaomi-smart-scale.jpeg",
},
{
  id: 19,
  nameEn: "Dinnerware Gift Set",
  nameZh: "餐具礼盒套装",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 1800,

  condition: "Very Good / 九成新",

  status: "available",
  statusLabel: "Available / 可售",

  images: [
    "image/19-dinnerware-gift-set.jpeg",
    "image/19-dinnerware-gift-set-extra.jpeg",
  ],
},
{
  id: 20,
  nameEn: "Electric Meat Grinder",
  nameZh: "电动绞肉机",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 800,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/20-electric-meat-grinder.jpeg",
},
{
  id: 21,
  nameEn: "Bear Electric Stew Pot",
  nameZh: "小熊电炖盅",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 1400,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/21-bear-electric-stew-pot.jpeg",
},
{
  id: 22,
  nameEn: "Electric Glass Kettle",
  nameZh: "玻璃电热水壶",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 600,

  condition: "Fair / 有使用痕迹",

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/22-electric-kettle.jpeg",
},
{
  id: 23,
  nameEn: "Midea Air Fryer",
  nameZh: "美的空气炸锅",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 1200,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/23-midea-air-fryer.jpeg",
},
{
  id: 24,
  nameEn: "Rice and Pantry Items",
  nameZh: "米类和厨房食材",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 800,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/24-rice-and-pantry-items.jpeg",
},
{
  id: 25,
  nameEn: "White Dining Chair",
  nameZh: "白色餐椅 / 化妆椅",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 600,

  condition: "Fair / 有使用痕迹",

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/25-white-dining-chair.jpeg",
},
{
  id: 26,
  nameEn: "5-Tier Storage Cabinet with Wheels",
  nameZh: "五层带轮透明门收纳柜",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 800,

  condition: "Very Good / 九成新",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/26-5-tier-storage-cabinet.jpeg",
},
{
  id: 27,
  nameEn: "Lighted Vanity Mirror",
  nameZh: "带灯化妆镜",

  category: "beauty",
  categoryLabel: "Beauty 美妆",

  price: 2000,

  condition: "Very Good / 九成新",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  image: "image/27-lighted-vanity-mirror.jpeg",
},
{
  id: 28,
  nameEn: "Standing Garment Steamer",
  nameZh: "立式挂烫机",

  category: "electronics",
  categoryLabel: "Electronics 电器",

  price: 1500,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  tag: "Home Care",
  shortNote: "Standing steamer for clothes / 立式衣物挂烫机",
  sellerNote:
    "Standing garment steamer for daily clothing care. Convenient for shirts, dresses, and delicate clothes. / 立式挂烫机，适合日常衣物护理，衬衫、裙子和比较娇气的衣服都很方便。",

  image: "image/28-garment-steamer.jpeg",
},
{
  id: 29,
  nameEn: "Makeup Mirror + Cosmetic Organizer Set",
  nameZh: "化妆镜 + 化妆收纳盒套装",

  category: "beauty",
  categoryLabel: "Beauty 美妆",

  price: 800,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  tag: "Set Sale",
  shortNote: "Mirror + cosmetic organizers set / 化妆镜和收纳盒一套",
  sellerNote:
    "Includes the lighted makeup mirror and cosmetic storage organizers shown in the photos. / 包含图片里的化妆镜和化妆收纳盒，一套 ₱800。",

  images: [
    "image/29-lighted-makeup-mirror.jpeg",
    "image/29-makeup-organizer.jpeg",
  ],
},
{
  id: 30,
  nameEn: "IKEA Black Bedside Table",
  nameZh: "宜家床头茶几",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 500,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "IKEA",
  shortNote: "Compact bedside table / 宜家床头小茶几",
  sellerNote:
    "Compact black IKEA bedside table, useful beside a bed or sofa. / 黑色宜家床头茶几，可放床边或沙发旁边。",

  image: "image/30-ikea-black-bedside-table.jpeg",
},
{
  id: 31,
  nameEn: "Queen Size Pillow",
  nameZh: "Queen 尺寸枕头",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 300,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Queen",
  shortNote: "Queen size pillow / Queen 尺寸枕头",
  sellerNote:
    "Queen size pillow in storage bag. / Queen 尺寸枕头，带收纳袋。",

  image: "image/31-queen-pillow.jpeg",
},
{
  id: 32,
  nameEn: "Purple Storage Baskets, Set of 2",
  nameZh: "紫色收纳框 2 个",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 200,

  condition: "Good / 良好",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  tag: "Set of 2",
  shortNote: "Two purple storage baskets / 紫色收纳框两个",
  sellerNote:
    "Set of two purple storage baskets, useful for closet, bathroom, or shelf organization. / 紫色收纳框两个，适合衣柜、浴室或架子收纳。",

  image: "image/32-purple-storage-baskets.jpeg",
},
{
  id: 33,
  nameEn: "1.5m Aircon Quilt",
  nameZh: "1.5 米空调被",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 350,

  condition: "Almost New / 基本没用",

  status: "reserved",
  statusLabel: "Reserved / 已预定",

  tag: "Almost New",
  shortNote: "Almost unused 1.5m aircon quilt / 1.5米空调被，基本没用",
  sellerNote:
    "1.5m aircon quilt, basically unused. / 1.5 米空调被，基本没用。",

  image: "image/33-aircon-quilt.jpeg",
},
{
  id: 34,
  nameEn: "Adjustable Study Desk",
  nameZh: "可调节学习桌 / 小桌",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 800,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Adjustable",
  shortNote: "Small adjustable desk with shelves / 可调节小桌，带置物层",
  sellerNote:
    "Small adjustable desk with lower shelves and wheels. Price is estimated first because it was not listed in the price screenshot. / 可调节小桌，带下层置物和轮子。价格先按 ₱800 上架，因为价格截图里没有写到这一件。",

  image: "image/34-adjustable-study-desk.jpeg",
},
{
  id: 35,
  nameEn: "LED Makeup Bag",
  nameZh: "LED 化妆包",

  category: "beauty",
  categoryLabel: "Beauty 美妆",

  price: 400,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "LED Mirror",
  shortNote: "Makeup bag with built-in LED mirror / 带 LED 镜子的化妆包",
  sellerNote:
    "Portable makeup bag with built-in LED mirror and adjustable dividers inside. / 便携化妆包，带 LED 镜子，里面有可调整分隔格。",

  image: "image/35-led-makeup-bag.jpeg",
},
{
  id: 36,
  nameEn: "Portable Handheld Iron",
  nameZh: "手持小型熨斗",

  category: "electronics",
  categoryLabel: "Electronics 电器",

  price: 800,

  condition: "Very Good / 九成新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Portable",
  shortNote: "Small handheld iron for clothes / 便携手持小型熨斗",
  sellerNote:
    "Compact handheld iron, useful for quick clothing touch-ups at home or before going out. / 小型手持熨斗，适合出门前快速整理衣服。",

  image: "image/36-portable-handheld-iron.jpeg",
},
{
  id: 37,
  nameEn: "IKEA Pegboard with Stand and Accessories",
  nameZh: "宜家洞洞板带支架和配件",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 1800,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "IKEA",
  shortNote: "Pegboard with stand and accessories / 洞洞板带支架和配件",
  sellerNote:
    "IKEA pegboard with stand and accessories, good for desk or craft storage. / 宜家洞洞板，带支架和配件，适合桌面、手工或小物收纳。",

  image: "image/37-ikea-pegboard-with-stand.jpeg",
},
{
  id: 38,
  nameEn: "Xiaomi Large-Capacity Rice Cooker",
  nameZh: "小米大容量电饭锅",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

  price: 800,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Large Capacity",
  shortNote: "Large-capacity Xiaomi rice cooker / 小米大容量电饭锅",
  sellerNote:
    "Large-capacity Xiaomi rice cooker, useful for daily cooking or cooking for several people. / 小米大容量电饭锅，适合日常做饭或多人使用。",

  image: "image/38-xiaomi-large-rice-cooker.jpeg",
},
{
  id: 39,
  nameEn: "Joyoung Soy Milk Maker",
  nameZh: "九阳豆浆机",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

  price: 300,

  condition: "Fair / 有使用痕迹",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "No Cord",
  shortNote: "Can make hot soy milk, but no power cord / 可以打热豆浆，但是没有线",
  sellerNote:
    "Super convenient soy milk maker that can make hot soy milk. Please note it does not come with a power cord. / 豆浆机超级方便，可以打热豆浆；注意没有电源线。",

  image: "image/39-joyoung-soy-milk-maker.jpeg",
},
{
  id: 40,
  nameEn: "Hanabishi Toaster",
  nameZh: "吐司机",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

  price: 500,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Toaster",
  shortNote: "Compact toaster / 家用吐司机",
  sellerNote:
    "Compact toaster for daily breakfast use. / 家用吐司机，适合日常早餐烤面包。",

  image: "image/40-hanabishi-toaster.jpeg",
},
{
  id: 41,
  nameEn: "Texas Hold'em Poker Full Set",
  nameZh: "德州扑克全套",

  category: "sports",
  categoryLabel: "Sports 运动",

  price: 10000,

  condition: "Very Good / 九成新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Full Set",
  shortNote: "Full poker set, includes 5 WPT decks / 德州扑克全套，送5副WPT扑克",
  sellerNote:
    "Texas Hold'em full set with table mat, poker chips, and 5 WPT playing card decks included. / 德州扑克全套，包含德州扑克桌垫、筹码套装，并送5副WPT扑克。",

  images: [
    "image/41-texas-holdem-table-mat.jpeg",
    "image/41-texas-holdem-poker-chip-set.jpeg",
    "image/41-wpt-playing-cards.jpeg",
  ],
},
{
  id: 42,
  nameEn: "Plastic Stools, Set of 3",
  nameZh: "塑料凳子 3 个",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 1000,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Set of 3",
  shortNote: "Three stackable stools / 三个凳子一套",
  sellerNote:
    "Set of three stackable plastic stools, easy to store and useful for extra seating. / 三个塑料凳子一套，可叠放，适合临时加座或日常使用。",

  image: "image/42-plastic-stools-set-of-3.jpeg",
},
{
  id: 43,
  nameEn: "AtourPlanet Deep Sleep Pillow Pro 3.0",
  nameZh: "亚朵星球深睡枕 Pro 3.0",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 2800,

  condition: "Very Good / 九成新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Super Comfy",
  shortNote: "Really comfortable, helps you sleep well / 真的很舒服，每天都睡很好",
  sellerNote:
    "AtourPlanet Deep Sleep Pillow Pro 3.0. It is really comfortable; after using it, I slept very well every day. / 亚朵星球深睡枕 Pro 3.0，真的很舒服，用完每天都睡很好。",

  images: [
    "image/43-atourplanet-sleep-pillow-main.jpeg",
    "image/43-atourplanet-sleep-pillow-details.jpeg",
  ],
},
{
  id: 44,
  nameEn: "Cosmetic Storage Box",
  nameZh: "收纳盒",

  category: "beauty",
  categoryLabel: "Beauty 美妆",

  price: 300,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Storage",
  shortNote: "Storage box with drawers / 带抽屉收纳盒",
  sellerNote:
    "Storage box with clear cover and drawers, useful for cosmetics, perfume, and small items. / 带透明盖和抽屉的收纳盒，适合放化妆品、香水和小物件。",

  image: "image/44-cosmetic-storage-box.jpeg",
},
{
  id: 45,
  nameEn: "180 x 230cm Throw Blanket",
  nameZh: "180 x 230cm 沙发毯 / 盖毯",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 1000,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "2 Available",
  shortNote: "180 x 230cm, 2 available, ₱1,000 each / 180x230cm，共2张，单张₱1,000",
  sellerNote:
    "180 x 230cm throw blanket. There are 2 available, priced at ₱1,000 each. / 180 x 230cm 沙发毯/盖毯，一共2张，单张 ₱1,000。",

  image: "image/45-180x230-throw-blanket.jpeg",
},
{
  id: 46,
  nameEn: "Vanity Table Full Set with Mirror",
  nameZh: "梳妆台整套加镜子",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 12000,

  condition: "Very Good / 九成新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Full Set",
  shortNote: "Full vanity set with mirror, excellent quality / 梳妆台整套加镜子，质量超级好",
  sellerNote:
    "Full vanity table set with mirror. The quality is excellent and the set is ready to use. / 梳妆台一整套加镜子，质量超级好，可以直接使用。",

  image: "image/46-vanity-table-mirror-set.png",
},
{
  id: 47,
  nameEn: "Electric Stew Pot",
  nameZh: "炖盅",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

  price: 500,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  shortNote: "Small electric stew pot / 小炖盅",
  sellerNote:
    "Small electric stew pot, useful for soup, porridge, and small daily cooking. / 小炖盅，适合炖汤、煮粥或日常小份烹饪。",

  image: "image/47-electric-stew-pot.jpeg",
},
{
  id: 48,
  nameEn: "Storage Carts, Black and White",
  nameZh: "黑色/白色置物推车",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 1000,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Each ₱1,000",
  shortNote: "Two carts available, ₱1,000 each / 两个置物推车，每个₱1,000",
  sellerNote:
    "Black and white storage carts are available. Each cart is ₱1,000. / 黑色和白色置物推车各一个，每个 ₱1,000。",

  images: [
    "image/48-black-white-storage-carts-black.jpeg",
    "image/48-black-white-storage-carts-white.jpeg",
  ],
},
{
  id: 49,
  nameEn: "White Mesh Storage Rack",
  nameZh: "白色网格置物架",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 500,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Storage",
  shortNote: "White rolling storage rack / 白色带轮置物架",
  sellerNote:
    "White mesh rolling storage rack, useful for bags, accessories, or small household items. / 白色网格带轮置物架，适合放包包、配件或家用小物。",

  image: "image/49-white-mesh-storage-rack.png",
},
{
  id: 50,
  nameEn: "White Printed Off-Shoulder Tee + Cargo Pants Set",
  nameZh: "白色印花露肩T恤 + 工装阔腿裤套装",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 1500,

  condition: "Very Good / 九成新，穿过一次",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Set",
  shortNote: "Worn once, about 90% new / 穿过一次，9成新",
  sellerNote:
    "White printed off-shoulder tee and cargo wide-leg pants set. Worn once and still about 90% new. / 白色印花露肩T恤 + 工装阔腿裤一套，穿过一次，9成新。",

  images: [
    "image/50-white-print-tee-cargo-pants-main.png",
    "image/50-white-print-tee-cargo-pants-top.jpg",
    "image/50-white-print-tee-cargo-pants-pants.jpg",
  ],
},
{
  id: 51,
  nameEn: "White Tie Blouse + Light Blue Jeans Set",
  nameZh: "白色飘带衬衫 + 浅蓝牛仔阔腿裤套装",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 2000,

  condition: "Brand New / 全新，已烫好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Brand New",
  shortNote: "Brand new and already ironed / 全新，已经烫好",
  sellerNote:
    "White tie blouse and light blue wide-leg jeans set. Brand new and already ironed, ready to wear. / 白色飘带衬衫 + 浅蓝牛仔阔腿裤一套，全新，已经烫好，可以直接穿。",

  images: [
    "image/51-white-tie-blouse-jeans-main.png",
    "image/51-white-tie-blouse-jeans-jeans.jpg",
    "image/51-white-tie-blouse-jeans-blouse.jpeg",
  ],
},
{
  id: 52,
  nameEn: "White Sleeveless Shirt + Denim Skirt Set",
  nameZh: "白色无袖衬衫 + 牛仔半裙套装",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 1200,

  condition: "Brand New / 全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Brand New",
  shortNote: "Brand new full set / 全新一套",
  sellerNote:
    "White sleeveless shirt and denim skirt set, brand new. / 白色无袖衬衫 + 牛仔半裙一套，全新。",

  images: [
    "image/52-white-shirt-denim-skirt-main.png",
    "image/52-white-shirt-denim-skirt-skirt.jpeg",
    "image/52-white-shirt-denim-skirt-shirt.jpeg",
  ],
},
{
  id: 53,
  nameEn: "Pink One-Shoulder Top + Mini Skirt Set",
  nameZh: "粉色单肩上衣 + 短裙套装",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 2000,

  condition: "Brand New / 全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Petite Friendly",
  shortNote: "Brand new, good for petite girls / 全新，适合小个子",
  sellerNote:
    "Pink one-shoulder top and mini skirt set. Brand new and especially suitable for petite girls. / 粉色单肩上衣 + 短裙一套，全新，适合小个子。",

  images: [
    "image/53-pink-top-mini-skirt-main.jpg",
    "image/53-pink-top-mini-skirt-alt.jpg",
  ],
},
{
  id: 54,
  nameEn: "Beige Lace Layered Outfit Set",
  nameZh: "米色蕾丝叠穿套装",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Brand New / 全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Lining Included",
  shortNote: "Brand new, includes separately bought inner lining / 全新，送单独买的内衬",
  sellerNote:
    "Beige lace layered outfit set, brand new. I bought the inner lining separately and it can be included for free. / 米色蕾丝叠穿套装，全新；自己单独买了里面的内衬，可以一起送。",

  image: "image/54-beige-lace-layered-set.jpg",
},
{
  id: 55,
  nameEn: "Grey Vest + Wide-Leg Pants Set",
  nameZh: "灰色背心 + 阔腿裤套装",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 2000,

  condition: "Brand New / 全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Petite Friendly",
  shortNote: "Brand new, good for petite girls / 全新，适合小个子",
  sellerNote:
    "Grey vest and wide-leg pants set. Brand new and suitable for petite girls. / 灰色背心 + 阔腿裤一套，全新，适合小个子。",

  images: [
    "image/55-grey-vest-wide-pants-main.jpg",
    "image/55-grey-vest-wide-pants-alt.jpg",
  ],
},
{
  id: 56,
  nameEn: "Black Sleeveless Top + Floral Skirt Set",
  nameZh: "黑色无袖上衣 + 花朵半裙套装",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 1500,

  condition: "Very Good / 穿过一次",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Necklace Included",
  shortNote: "Worn once, necklace included / 穿过一次，送单独买的项链",
  sellerNote:
    "Black sleeveless top and floral skirt full set. Worn once; the necklace was bought separately and is included. / 黑色无袖上衣 + 花朵半裙一整套，穿过一次；项链是单独买的，可以一起送。",

  image: "image/56-black-top-floral-skirt-necklace-set.jpg",
},
{
  id: 57,
  nameEn: "Dish Draining Rack",
  nameZh: "沥水篮",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

  price: 300,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  shortNote: "Dish draining rack / 沥水篮",
  sellerNote:
    "Dish draining rack for kitchen counter use. / 厨房台面用沥水篮。",

  image: "image/57-dish-draining-rack.jpeg",
},
{
  id: 58,
  nameEn: "Sewing Kit",
  nameZh: "针线盒",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 300,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Handy Kit",
  shortNote: "Sewing kit with thread and needles / 针线盒，含线和针",
  sellerNote:
    "Compact sewing kit with thread, needles, measuring tape, and small repair tools. / 小型针线盒，包含线、针、软尺和日常修补小工具。",

  images: [
    "image/58-sewing-kit-open.jpeg",
    "image/58-sewing-kit-closed.jpeg",
  ],
},
{
  id: 59,
  nameEn: "Fire Safety Set",
  nameZh: "消防套装",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 300,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Safety",
  shortNote: "Fire safety set / 消防套装",
  sellerNote:
    "Fire safety set, including fire cloak and escape hood. / 消防套装，包含防火斗篷和逃生面罩。",

  image: "image/59-fire-safety-set.jpeg",
},
{
  id: 60,
  nameEn: "Secondhand Closet Surprise Box",
  nameZh: "二手衣服盲盒",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 1000,

  condition: "Very Good / 基本只穿过一两次",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "5 Pieces",
  shortNote: "₱1,000 for 5 random pieces / ₱1,000五件随机衣服",
  sellerNote:
    "Secondhand closet surprise box: ₱1,000 for 5 random clothing pieces. Items were basically only worn once or twice. You can leave your height, weight, and style preferences, and I will try to match the box for you. Random accessories, false eyelashes, or similar small extras may be included. Please do not purchase if you mind surprise-box randomness or secondhand items. / 二手衣服盲盒，₱1,000 五件随机衣服。基本都只穿过一两次。可以备注身高体重和风格偏好，我会尽量帮忙搭配。可随机送配饰、假睫毛之类的小物。介意盲盒随机性或二手的小宝勿拍哦。",

  images: [
    "image/60-closet-surprise-box-main.png",
    "image/60-closet-surprise-box-details.png",
  ],
},
{
  id: 61,
  nameEn: "Secondhand Dress Collection",
  nameZh: "二手连衣裙合集",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Collection",
  shortNote: "₱800 each, choose from the dress listings / ₱800一件，点详情任选喜欢的",
  sellerNote:
    "Secondhand dress collection, ₱800 each. Some were worn once, some are brand new. Slight negotiation is okay. Please do not purchase if you mind secondhand items. / 二手连衣裙合集，₱800一件。基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  image: "image/61-secondhand-dress-collection-cover.png",
},
{
  id: 62,
  nameEn: "Taupe Slip Maxi Dress",
  nameZh: "燕麦色吊带长裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Taupe slip maxi dress / 燕麦色吊带长裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  image: "image/62-taupe-slip-maxi-dress.jpg",
},
{
  id: 63,
  nameEn: "Gradient Sleeveless Maxi Dress",
  nameZh: "渐变无袖长裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Gradient sleeveless maxi dress / 渐变无袖长裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  image: "image/63-gradient-sleeveless-maxi-dress.jpg",
},
{
  id: 64,
  nameEn: "Butterfly Print Slip Maxi Dress",
  nameZh: "蝴蝶印花吊带长裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Butterfly print slip maxi dress / 蝴蝶印花吊带长裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  image: "image/64-butterfly-slip-maxi-dress.jpg",
},
{
  id: 65,
  nameEn: "Navy Square-Neck Dress",
  nameZh: "藏蓝方领连衣裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Navy square-neck dress / 藏蓝方领连衣裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  image: "image/65-navy-square-neck-dress.jpg",
},
{
  id: 66,
  nameEn: "Black Halter Mini Dress",
  nameZh: "黑色挂脖短裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Black halter mini dress / 黑色挂脖短裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  images: [
    "image/66-black-halter-mini-dress-main.jpg",
    "image/66-black-halter-mini-dress-detail.jpg",
  ],
},
{
  id: 67,
  nameEn: "Black Sleeveless Long Dress",
  nameZh: "黑色无袖长裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Black sleeveless long dress / 黑色无袖长裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  images: [
    "image/67-black-sleeveless-long-dress-night.jpg",
    "image/67-black-sleeveless-long-dress-day.jpg",
  ],
},
{
  id: 68,
  nameEn: "Yellow and Black Strappy Maxi Dress",
  nameZh: "黄黑拼色吊带长裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Yellow and black strappy maxi dress / 黄黑拼色吊带长裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  images: [
    "image/68-yellow-black-maxi-dress-main.jpg",
    "image/68-yellow-black-maxi-dress-alt.jpg",
  ],
},
{
  id: 69,
  nameEn: "Black Knit Mini Dress",
  nameZh: "黑色针织短裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Black knit mini dress / 黑色针织短裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  images: [
    "image/69-black-knit-mini-dress-front.jpg",
    "image/69-black-knit-mini-dress-back.jpg",
  ],
},
{
  id: 70,
  nameEn: "Green Plaid Maxi Dress",
  nameZh: "绿色格纹长裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Green plaid maxi dress / 绿色格纹长裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  images: [
    "image/70-green-plaid-maxi-dress-main.jpg",
    "image/70-green-plaid-maxi-dress-alt.jpg",
  ],
},
{
  id: 71,
  nameEn: "Green Floral Slip Dress",
  nameZh: "绿色花朵吊带裙",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Dress",
  shortNote: "Green floral slip dress / 绿色花朵吊带裙",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  images: [
    "image/71-green-floral-slip-dress-close.jpg",
    "image/71-green-floral-slip-dress-full.jpg",
  ],
},
{
  id: 72,
  nameEn: "White Layered Maxi Set",
  nameZh: "白色层次感长裙套装",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Set",
  shortNote: "White layered maxi set / 白色层次感长裙套装",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  images: [
    "image/72-white-layered-maxi-set-main.jpg",
    "image/72-white-layered-maxi-set-alt.jpg",
  ],
},
{
  id: 73,
  nameEn: "White One-Shoulder Wide-Leg Jumpsuit",
  nameZh: "白色单肩阔腿连体裤",

  category: "clothing",
  categoryLabel: "Clothing 衣服",

  price: 800,

  condition: "Very Good / 基本只穿一次或全新",

  status: "available",
  statusLabel: "Available / 可售",

  tag: "Jumpsuit",
  shortNote: "White one-shoulder wide-leg jumpsuit / 白色单肩阔腿连体裤",
  sellerNote:
    "Basic note for this dress collection: some were worn once, some are brand new. Slight negotiation is okay. / 基本只穿了一次或者全新，可小刀，介意的小宝勿拍哦！！",

  image: "image/73-white-one-shoulder-jumpsuit.jpg",
},
];

// --- App state ---
let activeCategory = "all";
let searchQuery = "";

// --- DOM elements ---
const productGrid = document.getElementById("productGrid");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const detailModal = document.getElementById("detailModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const imageModal = document.getElementById("imageModal");
const imageModalBackdrop = document.getElementById("imageModalBackdrop");
const imageModalClose = document.getElementById("imageModalClose");

// --- Helpers ---
function formatPrice(price) {
  if (price === 0) return "FREE / 免费";
  return "₱" + price.toLocaleString();
}

function getTelegramLink() {
  return "https://t.me/" + TELEGRAM_USERNAME;
}

function getStatusClass(status) {
  if (status === "available") return "status-available";
  if (status === "reserved") return "status-reserved";
  return "status-sold";
}

function getProductImages(product) {
  return product.images || [product.image];
}

function getProductCover(product) {
  return getProductImages(product)[0];
}

function matchesFilter(product) {
  const categoryMatch =
    activeCategory === "all" || product.category === activeCategory;

  const query = searchQuery.toLowerCase();
  const searchMatch =
    query === "" ||
    product.nameEn.toLowerCase().includes(query) ||
    product.nameZh.includes(query) ||
    product.categoryLabel.toLowerCase().includes(query) ||
    (product.tag && product.tag.toLowerCase().includes(query)) ||
    (product.shortNote && product.shortNote.toLowerCase().includes(query)) ||
    (product.sellerNote && product.sellerNote.toLowerCase().includes(query));

  return categoryMatch && searchMatch;
}

// --- Render product cards ---
function renderProducts() {
  const filtered = products.filter(matchesFilter);
  productGrid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  filtered.forEach(function (product) {
    const card = document.createElement("article");
    card.className = "card";
    const tagMarkup = product.tag
      ? '<span class="image-tag">' + product.tag + "</span>"
      : "";
    const noteMarkup = product.shortNote
      ? '<p class="card-note">' + product.shortNote + "</p>"
      : "";
    card.innerHTML =
      '<button class="card-image" data-image-id="' +
      product.id +
      '" aria-label="View full product image"><img src="' +
      getProductCover(product) +
      '" alt="' +
      product.nameEn +
      '">' +
      tagMarkup +
      "</button>" +
      '<div class="card-body">' +
      '<h3 class="card-name-en">' +
      product.nameEn +
      "</h3>" +
      '<p class="card-name-zh">' +
      product.nameZh +
      "</p>" +
      '<p class="card-meta"><strong>Category:</strong> ' +
      product.categoryLabel +
      "</p>" +
      '<p class="card-meta"><strong>Condition:</strong> ' +
      product.condition +
      "</p>" +
      noteMarkup +
      '<p class="card-price">' +
      formatPrice(product.price) +
      "</p>" +
      '<span class="card-status ' +
      getStatusClass(product.status) +
      '">' +
      product.statusLabel +
      "</span>" +
      '<div class="card-actions">' +
      '<button class="btn btn-details" data-id="' +
      product.id +
      '">View Details / 查看详情</button>' +
      '<a class="btn btn-telegram" href="' +
      getTelegramLink() +
      '" target="_blank" rel="noopener">Telegram</a>' +
      "</div>" +
      "</div>";

    productGrid.appendChild(card);
  });

  // Attach detail button listeners
  productGrid.querySelectorAll(".btn-details").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = parseInt(btn.getAttribute("data-id"), 10);
      const product = products.find(function (p) {
        return p.id === id;
      });
      if (product) openModal(product);
    });
  });

  productGrid.querySelectorAll(".card-image").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = parseInt(btn.getAttribute("data-image-id"), 10);
      const product = products.find(function (p) {
        return p.id === id;
      });
      if (product) openImageModal(product);
    });
  });
}

// --- Modal ---
function openModal(product) {
  const productImages = getProductImages(product);
  const modalImage = document.getElementById("modalImage");
  modalImage.classList.toggle("modal-image-gallery", productImages.length > 1);
  modalImage.innerHTML = productImages
    .map(function (image, index) {
      return (
        '<button class="modal-image-button" data-image-index="' +
        index +
        '" aria-label="View full product image"><img src="' +
        image +
        '" alt="' +
        product.nameEn +
        '"></button>'
      );
    })
    .join("");
  if (productImages.length > 1) {
    modalImage.insertAdjacentHTML(
      "beforeend",
      '<span class="modal-swipe-hint">Swipe / 左右滑动</span>'
    );
  }
  modalImage.querySelectorAll(".modal-image-button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const imageIndex = parseInt(btn.getAttribute("data-image-index"), 10);
      openImageModal(product, imageIndex);
    });
  });
  document.getElementById("modalNameEn").textContent = product.nameEn;
  document.getElementById("modalNameZh").textContent = product.nameZh;
  document.getElementById("modalCategory").textContent = product.categoryLabel;
  document.getElementById("modalPrice").textContent = formatPrice(product.price);
  document.getElementById("modalCondition").textContent = product.condition;
  document.getElementById("modalStatus").textContent = product.statusLabel;
  const modalNote = document.getElementById("modalSellerNote");
  const modalNoteText = document.getElementById("modalSellerNoteText");
  if (product.sellerNote) {
    modalNoteText.textContent = product.sellerNote;
    modalNote.hidden = false;
  } else {
    modalNoteText.textContent = "";
    modalNote.hidden = true;
  }
  document.getElementById("modalTelegram").href = getTelegramLink();
  detailModal.hidden = false;
}

function closeModal() {
  detailModal.hidden = true;
}

function openImageModal(product, imageIndex) {
  const productImages = getProductImages(product);
  const selectedImage = productImages[imageIndex || 0] || getProductCover(product);
  const fullImage = document.getElementById("fullImage");
  fullImage.src = selectedImage;
  fullImage.alt = product.nameEn;
  document.getElementById("fullImageCaption").textContent =
    product.nameEn + " / " + product.nameZh;
  imageModal.hidden = false;
}

function closeImageModal() {
  imageModal.hidden = true;
}

// --- Event listeners ---
searchInput.addEventListener("input", function (e) {
  searchQuery = e.target.value.trim();
  renderProducts();
});

categoryFilters.addEventListener("click", function (e) {
  if (!e.target.classList.contains("filter-btn")) return;

  categoryFilters.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
  activeCategory = e.target.getAttribute("data-category");
  renderProducts();
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
imageModalClose.addEventListener("click", closeImageModal);
imageModalBackdrop.addEventListener("click", closeImageModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
    closeImageModal();
  }
});

// --- Initial render ---
renderProducts();
