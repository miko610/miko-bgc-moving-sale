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

    status: "available",
    statusLabel: "Available / 可售",

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

    image: "image/03-ikea-dressing-table-malm-set.jpg",
},
{
  id: 4,
  nameEn: "IKEA MALM Drawer Chest",
  nameZh: "IKEA 马尔姆斗柜",

  category: "furniture",
  categoryLabel: "Furniture 家具",

  price: 8000,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/14-cooking-oil.jpeg",
},
{
  id: 15,
  nameEn: "Condiments and Seasonings Set",
  nameZh: "调料调味品一组",

  category: "kitchen",
  categoryLabel: "Kitchen 厨房",

    price: 700,

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

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

  condition: "Good / 良好",

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/17-nintendo-switch-game-bundle.jpeg",
},
{
  id: 18,
  nameEn: "Xiaomi Smart Scale",
  nameZh: "小米智能体重秤",

  category: "electronics",
  categoryLabel: "Electronics 电器",

    price: 700,

  condition: "Fair / 有使用痕迹",

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/18-xiaomi-smart-scale.jpeg",
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

  image: "image/19-dinnerware-gift-set.jpeg",
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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

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

  status: "available",
  statusLabel: "Available / 可售",

  image: "image/27-lighted-vanity-mirror.jpeg",
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

function matchesFilter(product) {
  const categoryMatch =
    activeCategory === "all" || product.category === activeCategory;

  const query = searchQuery.toLowerCase();
  const searchMatch =
    query === "" ||
    product.nameEn.toLowerCase().includes(query) ||
    product.nameZh.includes(query) ||
    product.categoryLabel.toLowerCase().includes(query);

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
    card.innerHTML =
      '<button class="card-image" data-image-id="' +
      product.id +
      '" aria-label="View full product image"><img src="' +
      product.image +
      '" alt="' +
      product.nameEn +
      '"></button>' +
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
  document.getElementById("modalImage").innerHTML =
    '<img src="' + product.image + '" alt="' + product.nameEn + '">';
  document.getElementById("modalNameEn").textContent = product.nameEn;
  document.getElementById("modalNameZh").textContent = product.nameZh;
  document.getElementById("modalCategory").textContent = product.categoryLabel;
  document.getElementById("modalPrice").textContent = formatPrice(product.price);
  document.getElementById("modalCondition").textContent = product.condition;
  document.getElementById("modalStatus").textContent = product.statusLabel;
  document.getElementById("modalTelegram").href = getTelegramLink();
  detailModal.hidden = false;
}

function closeModal() {
  detailModal.hidden = true;
}

function openImageModal(product) {
  const fullImage = document.getElementById("fullImage");
  fullImage.src = product.image;
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
