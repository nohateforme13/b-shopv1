// ==================== БАЗА ТОВАРОВ (Все товары от 20 000 ₸) ====================
const products = [
  // --- Зарядные станции и устройства ---
  {
    id: 1,
    name: "Зарядное устройство GaN 100W MultiPort",
    category: "chargers",
    price: 24500,
    oldPrice: 28000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=500&q=80",
    description: "Мощное сетевое GaN-зарядное устройство 100 Вт с 4 портами (3x Type-C, 1x USB-A) для быстрой зарядки MacBook Pro и смартфонов."
  },
  {
    id: 2,
    name: "Беспроводной Power Bank MagSafe 20000 mAh",
    category: "chargers",
    price: 22900,
    oldPrice: 26000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1609592424074-1218525b6c0b?auto=format&fit=crop&w=500&q=80",
    description: "Внешний аккумулятор с мощными магнитами MagSafe, дисплеем уровня заряда и сквозной быстрой зарядкой 22.5 Вт."
  },
  {
    id: 3,
    name: "Быстрая беспроводная станция 3-в-1 MagSafe",
    category: "stations",
    price: 27800,
    oldPrice: 32000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1609592424074-1218525b6c0b?auto=format&fit=crop&w=500&q=80",
    description: "Премиальная алюминиевая подставка для одновременной беспроводной зарядки iPhone, Apple Watch и AirPods."
  },
  {
    id: 4,
    name: "Настольная умная док-станция со спреем и LED",
    category: "stations",
    price: 31500,
    oldPrice: 36000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1609592424074-1218525b6c0b?auto=format&fit=crop&w=500&q=80",
    description: "Многофункциональная станция 4-в-1 с беспроводной зарядкой 15 Вт, часами, будильником и подсветкой."
  },

  // --- Аудио и акустика ---
  {
    id: 5,
    name: "Беспроводные наушники Pro ANC Space",
    category: "audio",
    price: 34900,
    oldPrice: 42000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    description: "Наушники с активным гибридным шумоподавлением (-42 дБ), автопаузой и автономностью до 40 часов."
  },
  {
    id: 6,
    name: "Полноразмерные Bluetooth наушники Studio Pro",
    category: "audio",
    price: 39900,
    oldPrice: 48000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    description: "Студийный звук Hi-Res Audio, амбушюры из эффектом памяти и поддержка кодека LDAC."
  },
  {
    id: 7,
    name: "Портативная акустика SoundPulse 40W IPX7",
    category: "audio",
    price: 29500,
    oldPrice: 35000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
    description: "Мощная влагозащищенная колонка с пассивными излучателями баса и динамическим световым шоу."
  },
  {
    id: 8,
    name: "Беспроводная микрофонная система 2-в-1",
    category: "audio",
    price: 26400,
    oldPrice: 31000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    description: "Двойной петличный радиомикрофон с кейсом-аккумулятором для записи интервью, блогов и контента."
  },

  // --- Смарт-часы ---
  {
    id: 9,
    name: "Смарт-часы Watch 8 Ultra Titanium",
    category: "watches",
    price: 38900,
    oldPrice: 45000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    description: "Корпус из титанового сплава, сапфировое стекло, AMOLED экран 2.02 дюйма, барометр и звонки по Bluetooth."
  },
  {
    id: 10,
    name: "Смарт-часы Elegance Pro AMOLED",
    category: "watches",
    price: 28500,
    oldPrice: 33000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80",
    description: "Классический круглый корпус, Always-On Display, измерение пульса, ЭКГ и 100+ циферблатов."
  },

  // --- Авто и гаджеты ---
  {
    id: 11,
    name: "Автомобильный держатель MagSafe 15W с охлаждением",
    category: "gadgets",
    price: 21900,
    oldPrice: 25000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    description: "Автомобильный держатель в воздуховод с встроенным элементом Пельтье для предотвращения перегрева телефона."
  },
  {
    id: 12,
    name: "Кольцевой светодиодный комплект 36см + Штатив 2m",
    category: "gadgets",
    price: 23500,
    oldPrice: 27000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    description: "Профессиональный студийный свет с дистанционным пультом управления и 3 держателями для смартфона."
  }
];

// Дополняем список аналогичными товарами от 20 000 KZT
for (let i = 13; i <= 45; i++) {
  const cat = ['chargers', 'audio', 'watches', 'stations', 'gadgets'][i % 5];
  const price = 20000 + (i * 750);
  products.push({
    id: i,
    name: `Премиум гаджет B-SHOP Pro Series #${i}`,
    category: cat,
    price: price,
    oldPrice: price + 4000,
    rating: (4.5 + (i % 5) * 0.1).toFixed(1),
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    description: "Оригинальное сертифицированное устройство B-SHOP с официальной гарантией и доставкой по Казахстану."
  });
}

// ==================== СОСТОЯНИЕ ПРИЛОЖЕНИЯ ====================
let cart = JSON.parse(localStorage.getItem('bshop_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('bshop_favs')) || [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'default';

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  setupEventListeners();
});

function setupEventListeners() {
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderProducts();
  });

  document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
}

// ==================== РЕНДЕР ТОВАРОВ ====================
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  let filtered = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = filtered.map(product => {
    const isFav = favorites.includes(product.id);
    return `
      <div class="bg-white rounded-2xl p-2.5 shadow-sm border border-slate-100 flex flex-col justify-between relative group">
        <button onclick="toggleFav(${product.id})" class="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-xs shadow-sm">
          <i class="bi ${isFav ? 'bi-heart-fill text-red-500' : 'bi-heart text-slate-400'}"></i>
        </button>
        
        <div onclick="openProductModal(${product.id})" class="cursor-pointer space-y-2">
          <div class="w-full h-32 bg-slate-50 rounded-xl overflow-hidden relative">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          </div>
          <div>
            <div class="flex items-center space-x-1 text-[10px] text-amber-500 font-semibold mb-0.5">
              <i class="bi bi-star-fill"></i>
              <span>${product.rating}</span>
            </div>
            <h4 class="text-xs font-semibold text-slate-800 line-clamp-2 leading-tight">${product.name}</h4>
          </div>
        </div>

        <div class="pt-2 mt-2 border-t border-slate-50 flex items-center justify-between">
          <div>
            <span class="text-xs font-black text-slate-900">${product.price.toLocaleString()} ₸</span>
          </div>
          <button onclick="addToCart(${product.id})" class="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center text-sm transition active:scale-95">
            <i class="bi bi-bag-plus"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ==================== ФИЛЬТРАЦИЯ КАТЕГОРИЙ ====================
function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('bg-slate-100', 'text-slate-600');
  });
  event.currentTarget.classList.remove('bg-slate-100', 'text-slate-600');
  event.currentTarget.classList.add('bg-blue-600', 'text-white');
  renderProducts();
}

// ==================== МОДАЛЬНОЕ ОКНО ТОВАРА ====================
function openProductModal(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;

  document.getElementById('modalProductImg').src = p.image;
  document.getElementById('modalProductTitle').innerText = p.name;
  document.getElementById('modalProductPrice').innerText = `${p.price.toLocaleString()} ₸`;
  document.getElementById('modalProductDesc').innerText = p.description;

  const btn = document.getElementById('modalAddToCartBtn');
  btn.onclick = () => {
    addToCart(p.id);
    closeProductModal();
  };

  document.getElementById('productModal').classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
}

// ==================== ИЗБРАННОЕ ====================
function toggleFav(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
    showToast("Удалено из избранного");
  } else {
    favorites.push(id);
    showToast("Добавлено в избранное");
  }
  localStorage.setItem('bshop_favs', JSON.stringify(favorites));
  renderProducts();
}

// ==================== КОРЗИНА ====================
function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  showToast("Товар добавлен в корзину");
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  saveCart();
  renderCartModal();
}

function saveCart() {
  localStorage.setItem('bshop_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  if (count > 0) {
    badge.innerText = count;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function openCartModal() {
  renderCartModal();
  document.getElementById('cartModal').classList.remove('hidden');
}

function closeCartModal() {
  document.getElementById('cartModal').classList.add('hidden');
}

function renderCartModal() {
  const container = document.getElementById('cartItemsContainer');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-400 space-y-2">
        <i class="bi bi-bag-x text-4xl"></i>
        <p class="text-xs font-medium">Ваша корзина пуста</p>
      </div>
    `;
    footer.classList.add('hidden');
    return;
  }

  footer.classList.remove('hidden');
  let total = 0;

  container.innerHTML = cart.map(cartItem => {
    const p = products.find(item => item.id === cartItem.id);
    if (!p) return '';
    const itemTotal = p.price * cartItem.qty;
    total += itemTotal;

    return `
      <div class="flex items-center space-x-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
        <img src="${p.image}" class="w-14 h-14 object-cover rounded-lg">
        <div class="flex-1 min-w-0">
          <h5 class="text-xs font-semibold text-slate-800 truncate">${p.name}</h5>
          <span class="text-xs font-bold text-blue-600">${p.price.toLocaleString()} ₸</span>
        </div>
        <div class="flex items-center space-x-2 bg-white px-2 py-1 rounded-lg border shadow-sm">
          <button onclick="updateCartQty(${p.id}, -1)" class="text-slate-500 font-bold px-1 text-xs">-</button>
          <span class="text-xs font-bold w-4 text-center">${cartItem.qty}</span>
          <button onclick="updateCartQty(${p.id}, 1)" class="text-slate-500 font-bold px-1 text-xs">+</button>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cartTotalPrice').innerText = `${total.toLocaleString()} ₸`;
}

// ==================== ОФОРМЛЕНИЕ И ПРОВЕРКА СОГЛАСИЯ ====================
function openCheckout() {
  closeCartModal();
  const total = cart.reduce((sum, item) => {
    const p = products.find(prod => prod.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);

  document.getElementById('checkoutTotal').innerText = `${total.toLocaleString()} ₸`;
  document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.add('hidden');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const checkPrivacy = document.getElementById('checkPrivacy').checked;
  const checkOffer = document.getElementById('checkOffer').checked;

  if (!checkPrivacy || !checkOffer) {
    showToast("Необходимо принять оферту и согласие!");
    return;
  }

  closeCheckoutModal();
  document.getElementById('paymentModal').classList.remove('hidden');
}

// ==================== ОПЛАТА ====================
function closePaymentModal() {
  document.getElementById('paymentModal').classList.add('hidden');
}

function switchPaymentTab(type) {
  const cardSec = document.getElementById('cardPaymentSection');
  const kaspiSec = document.getElementById('kaspiPaymentSection');
  const tabCard = document.getElementById('tabCard');
  const tabKaspi = document.getElementById('tabKaspi');

  if (type === 'card') {
    cardSec.classList.remove('hidden');
    kaspiSec.classList.add('hidden');
    tabCard.className = "flex-1 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-sm transition";
    tabKaspi.className = "flex-1 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 transition";
  } else {
    cardSec.classList.add('hidden');
    kaspiSec.classList.remove('hidden');
    tabKaspi.className = "flex-1 py-2 rounded-xl text-xs font-semibold bg-red-600 text-white shadow-sm transition";
    tabCard.className = "flex-1 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 transition";
  }
}

function processPayment(e) {
  if (e) e.preventDefault();
  closePaymentModal();
  cart = [];
  saveCart();
  showToast("🎉 Заказ оплачен! Менеджер свяжется с вами.");
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================
function switchTab(tab) {
  if (tab === 'home') {
    activeCategory = 'all';
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showToast("Раздел доступен в мобильной версии");
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').innerText = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}