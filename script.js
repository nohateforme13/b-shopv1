// Базовые товары
const products = [
  { id: 1, name: 'iPhone 15 Pro 128GB', category: 'phones', price: 549900, oldPrice: 589900, rating: 4.9, reviews: 128, badge: 'Хит', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80', desc: 'Флагманский смартфон с титановым корпусом, чипом A17 Pro и мощной системой камер.' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', category: 'phones', price: 599900, oldPrice: null, rating: 4.8, reviews: 95, badge: 'Новинка', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80', desc: 'Смартфон с искусственным интеллектом Galaxy AI, 200 Мп камерой и встроенным пером S Pen.' },
  { id: 3, name: 'MacBook Air 13 M2', category: 'laptops', price: 579900, oldPrice: 620000, rating: 4.9, reviews: 84, badge: '-7%', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80', desc: 'Ультратонкий ноутбук на базе процессора Apple M2 с аккумулятором до 18 часов работы.' },
  { id: 4, name: 'AirPods Pro 2 USB-C', category: 'audio', price: 129900, oldPrice: 145000, rating: 4.9, reviews: 210, badge: 'Топ', img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=500&q=80', desc: 'Беспроводные наушники с активным шумоподавлением и адаптивным аудио.' },
  { id: 5, name: 'Apple Watch Series 9', category: 'watches', price: 219900, oldPrice: null, rating: 4.7, reviews: 62, badge: null, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80', desc: 'Умные часы с процессором S9, жестовым управлением двойным касанием и датчиками здоровья.' },
  { id: 6, name: 'Sony PlayStation 5 Slim', category: 'gadgets', price: 279900, oldPrice: 299900, rating: 5.0, reviews: 310, badge: 'Хит', img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80', desc: 'Игровая консоль с графикой 4K, ультрабыстрым SSD и геймпадом DualSense.' }
];

// Состояние приложения
let state = {
  cart: JSON.parse(localStorage.getItem('cart_items') || '[]'),
  favorites: JSON.parse(localStorage.getItem('fav_items') || '[]'),
  category: 'all',
  searchQuery: '',
  sort: 'default',
  currentTab: 'home',
  activeProduct: null
};

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  setupEventListeners();
});

function setupEventListeners() {
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderProducts();
  });

  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.sort = e.target.value;
    renderProducts();
  });
}

// Рендер каталога
function renderProducts() {
  const container = document.getElementById('productsGrid');
  let filtered = products.filter(p => {
    const matchesCat = state.category === 'all' || p.category === state.category;
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery);
    return matchesCat && matchesSearch;
  });

  if (state.sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (state.sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400">
      <i class="bi bi-search text-4xl block mb-2"></i>
      <p>Ничего не найдено</p>
    </div>`;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isFav = state.favorites.includes(product.id);
    return `
      <div class="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm hover:shadow-md transition relative flex flex-col justify-between">
        ${product.badge ? `<span class="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">${product.badge}</span>` : ''}
        
        <button onclick="toggleFavorite(${product.id})" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center z-10">
          <i class="bi ${isFav ? 'bi-heart-fill text-red-500' : 'bi-heart text-slate-400'} text-sm"></i>
        </button>

        <div onclick="openProductModal(${product.id})" class="cursor-pointer">
          <div class="w-full h-36 rounded-xl bg-slate-50 overflow-hidden mb-3">
            <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover">
          </div>
          <div class="flex items-center space-x-1 mb-1">
            <i class="bi bi-star-fill text-amber-400 text-xs"></i>
            <span class="text-xs font-semibold text-slate-700">${product.rating}</span>
            <span class="text-[10px] text-slate-400">(${product.reviews})</span>
          </div>
          <h3 class="font-semibold text-xs sm:text-sm text-slate-800 line-clamp-2 leading-snug mb-2">${product.name}</h3>
        </div>

        <div class="pt-2 border-t border-slate-50 flex items-center justify-between">
          <div>
            <p class="font-bold text-sm sm:text-base text-slate-900">${product.price.toLocaleString()} ₸</p>
            ${product.oldPrice ? `<p class="text-[10px] text-slate-400 line-through">${product.oldPrice.toLocaleString()} ₸</p>` : ''}
          </div>
          <button onclick="addToCart(${product.id})" class="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center active:scale-95 transition">
            <i class="bi bi-bag-plus text-base"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Избранное
function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(favId => favId !== id);
  } else {
    state.favorites.push(id);
  }
  localStorage.setItem('fav_items', JSON.stringify(state.favorites));
  renderProducts();
}

// Фильтры категорий
function filterCategory(cat) {
  state.category = cat;
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white', 'shadow-blue-200');
    btn.classList.add('bg-slate-100', 'text-slate-600');
  });
  event.currentTarget.classList.remove('bg-slate-100', 'text-slate-600');
  event.currentTarget.classList.add('bg-blue-600', 'text-white', 'shadow-blue-200');
  renderProducts();
}

// Модальное окно товара
function openProductModal(id) {
  const p = products.find(prod => prod.id === id);
  state.activeProduct = p;
  document.getElementById('modalProductImg').src = p.img;
  document.getElementById('modalProductTitle').innerText = p.name;
  document.getElementById('modalProductPrice').innerText = `${p.price.toLocaleString()} ₸`;
  document.getElementById('modalProductDesc').innerText = p.desc;

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

// Корзина
function addToCart(id) {
  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.count += 1;
  } else {
    const product = products.find(p => p.id === id);
    state.cart.push({ ...product, count: 1 });
  }
  saveCart();
  showToast('Товар добавлен в корзину');
}

function updateCartCount(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.count += delta;
  if (item.count <= 0) {
    state.cart = state.cart.filter(i => i.id !== id);
  }
  saveCart();
  renderCartModal();
}

function saveCart() {
  localStorage.setItem('cart_items', JSON.stringify(state.cart));
  updateCartBadge();
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, i) => sum + i.count, 0);
  const badge = document.getElementById('cartBadge');
  if (totalCount > 0) {
    badge.innerText = totalCount;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

// Выдвижная корзина
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

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <i class="bi bi-bag-x text-5xl mb-3 block"></i>
        <p class="text-sm font-medium">Ваша корзина пуста</p>
      </div>`;
    footer.classList.add('hidden');
    return;
  }

  footer.classList.remove('hidden');
  let total = 0;

  container.innerHTML = state.cart.map(item => {
    const sum = item.price * item.count;
    total += sum;
    return `
      <div class="flex items-center space-x-3 bg-slate-50 p-3 rounded-xl">
        <img src="${item.img}" class="w-14 h-14 object-cover rounded-lg bg-white">
        <div class="flex-1 min-w-0">
          <h4 class="font-semibold text-xs text-slate-800 truncate">${item.name}</h4>
          <p class="font-bold text-xs text-blue-600 mt-0.5">${item.price.toLocaleString()} ₸</p>
        </div>
        <div class="flex items-center space-x-2 bg-white px-2 py-1 rounded-lg border border-slate-200">
          <button onclick="updateCartCount(${item.id}, -1)" class="text-slate-500 font-bold px-1">-</button>
          <span class="text-xs font-semibold">${item.count}</span>
          <button onclick="updateCartCount(${item.id}, 1)" class="text-slate-500 font-bold px-1">+</button>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cartTotalPrice').innerText = `${total.toLocaleString()} ₸`;
}

// Переход к оформлению
function openCheckout() {
  closeCartModal();
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.count), 0);
  document.getElementById('checkoutTotal').innerText = `${total.toLocaleString()} ₸`;
  document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.add('hidden');
}

// Оплата
function openPayment() {
  closeCheckoutModal();
  document.getElementById('paymentModal').classList.remove('hidden');
}

function closePaymentModal() {
  document.getElementById('paymentModal').classList.add('hidden');
}

function switchPaymentTab(tab) {
  const cardSection = document.getElementById('cardPaymentSection');
  const kaspiSection = document.getElementById('kaspiPaymentSection');
  const cardTab = document.getElementById('tabCard');
  const kaspiTab = document.getElementById('tabKaspi');

  if (tab === 'card') {
    cardSection.classList.remove('hidden');
    kaspiSection.classList.add('hidden');
    cardTab.className = 'flex-1 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-sm';
    kaspiTab.className = 'flex-1 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600';
  } else {
    cardSection.classList.add('hidden');
    kaspiSection.classList.remove('hidden');
    kaspiTab.className = 'flex-1 py-2 rounded-xl text-xs font-semibold bg-red-600 text-white shadow-sm';
    cardTab.className = 'flex-1 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600';
  }
}

function processPayment(e) {
  e.preventDefault();
  const btn = document.getElementById('paySubmitBtn');
  btn.disabled = true;
  btn.innerText = 'Обработка платежа...';

  setTimeout(() => {
    btn.disabled = false;
    btn.innerText = 'Оплатить заказ';
    closePaymentModal();
    state.cart = [];
    saveCart();
    showToast('Успешно! Заказ оформлен.');
  }, 1800);
}

// Уведомления (Toast)
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').innerText = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

// Переключение табов нижней навигации
function switchTab(tab) {
  state.currentTab = tab;
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.add('text-slate-400'));
  
  if (tab === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (tab === 'cart') {
    openCartModal();
  } else if (tab === 'fav') {
    state.category = 'all';
    const container = document.getElementById('productsGrid');
    const favProducts = products.filter(p => state.favorites.includes(p.id));
    
    if (favProducts.length === 0) {
      showToast('В избранном пока нет товаров');
    } else {
      showToast(`Избранное: ${favProducts.length} тов.`);
    }
  } else if (tab === 'profile') {
    showToast('Кабинет пользователя');
  }
}