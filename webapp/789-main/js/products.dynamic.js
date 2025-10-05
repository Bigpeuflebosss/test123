
// AUTO-GENERATED from legacy HTML — exact info preserved
window.products = [
  {
    id: "10g-shit-10g-beuh-100",
    category: "PROMOTIONS",
    name: "10g Shit + 10g Beuh = 100€",
    image: "images/IMG_1530.jpeg",
    variants: [
      { label: "Shit 40€", price: 40 },
      { label: "Beuh 60€", price: 60 }
    ]
  },
  {
    id: "mid-weed---tootsie-crunch",
    category: "WEEDS",
    name: "MID WEED - TOOTSIE CRUNCH 🍃",
    image: "images/IMG_1530.jpeg",
    variants: [
      { label: "20€", price: 20 },
      { label: "40€", price: 40 },
      { label: "70€", price: 70 },
      { label: "160€", price: 160 },
      { label: "260€", price: 260 }
    ]
  },
  {
    id: "top-weed---amnesia-lemon",
    category: "WEEDS",
    name: "TOP WEED - Amnesia Lemon 🍋",
    image: "images/amnesia_lemon.jpeg",
    variants: [
      { label: "20€", price: 20 },
      { label: "40€", price: 40 },
      { label: "80€", price: 80 },
      { label: "170€", price: 170 },
      { label: "280€", price: 280 }
    ]
  },
  {
    id: "mousseux---chanel",
    category: "HASH",
    name: "MOUSSEUX - Chanel 💸",
    image: "images/chanel.jpeg",
    variants: [
      { label: "20€", price: 20 },
      { label: "50€", price: 50 },
      { label: "100€", price: 100 },
      { label: "180€", price: 180 }
    ]
  },
  {
    id: "73u-no-farm-kush",
    category: "HASH",
    name: "73u NO FARM – Kush 🏔️",
    image: "images/goldenfarm.jpeg",
    variants: [
      { label: "20€", price: 20 },
      { label: "40€", price: 40 },
      { label: "70€", price: 70 },
      { label: "140€", price: 140 },
      { label: "250€", price: 250 }
    ]
  },
  {
    id: "static-sift-140-73u-drytech-x-goldenfarm-2k25-strawberry-banana",
    category: "HASH",
    name: "⚡ STATIC SIFT 140/73u – Drytech® x GoldenFarm® 2k25 – Strawberry Banana 🍓",
    image: "images/rolex.jpeg",
    variants: [
      { label: "20€", price: 20 },
      { label: "40€", price: 40 },
      { label: "80€", price: 80 },
      { label: "160€", price: 160 }
    ]
  },
  {
    id: "frozen-sift-120u-thv-2k25-ff-x-24k-x-g-c-x-26mm",
    category: "HASH",
    name: "🧊 FROZEN SIFT 120u – THV®2k25 – (FF x 24k) x (G.C. x 26mm) 🍓",
    image: "images/IMG_1530.jpeg",
    variants: [
      { label: "20€", price: 20 },
      { label: "40€", price: 40 },
      { label: "80€", price: 80 },
      { label: "170€", price: 170 }
    ]
  },
  {
    id: "frozen-sift-120u-thv-2k25-ff-x-24k-x-g-c-x-26mm",
    category: "HASH",
    name: "🧊 FROZEN SIFT 120u – THV®2k25 – (FF x 24k) x (G.C. x 26mm) 🍓",
    image: "images/IMG_1530.jpeg",
    variants: [
      { label: "20€", price: 20 },
      { label: "40€", price: 40 },
      { label: "80€", price: 80 },
      { label: "170€", price: 170 }
    ]
  },
  {
    id: "pack-test",
    category: "PACKS",
    name: "🧐 PACK TEST",
    image: "",
    variants: [
      { label: "10€", price: 10 }
    ]
  },
  {
    id: "pack-hash",
    category: "PACKS",
    name: "🍫 PACK HASH",
    image: "",
    variants: [
      { label: "90€", price: 90 }
    ]
  },
  {
    id: "pack-weed",
    category: "PACKS",
    name: "🌿 PACK WEED",
    image: "",
    variants: [
      { label: "90€", price: 90 }
    ]
  },
  {
    id: "pack-premium",
    category: "PACKS",
    name: "🧊⚡ PACK PREMIUM",
    image: "",
    variants: [
      { label: "140€", price: 140 }
    ]
  },
  {
    id: "le-big-pack",
    category: "PACKS",
    name: "💰 LE BIG PACK",
    image: "",
    variants: [
      { label: "230€", price: 230 }
    ]
  }
];

// Dynamic categories from products
window.getCategories = function() {
  const set = new Set();
  (window.products||[]).forEach(p => set.add((p.category||'').toUpperCase()));
  return Array.from(set).filter(Boolean).sort();
};

// Render filter buttons (no active state)
window.renderFilters = function() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  const cats = window.getCategories();
  bar.innerHTML = '<button onclick="filterCategory(\'ALL\')" aria-label="Afficher tout">Tout</button>' + 
    cats.map(c => `<button onclick="filterCategory('${c}')" aria-label="${c}">${c}</button>`).join('');
};

// === Renderer ===
window.renderProducts = function(category){
  const root = document.getElementById('products-root');
  if (!root) return;
  const cat = (category || 'ALL').toUpperCase();

  const list = (window.products||[]).filter(p => cat === 'ALL' ? true : (p.category || '').toUpperCase() === cat);
  if (list.length === 0) {
    root.innerHTML = '<p style="opacity:.7">Aucun article dans cette catégorie.</p>';
    return;
  }

  root.innerHTML = list.map(p => {
    const img = p.image ? `<img class="product-image" src="${p.image}" alt="${(p.name||'Produit')}" loading="lazy">` : '';
    const buttons = (p.variants||[]).map(v => {
      const safeName = (p.name||'Produit').replace(/"/g,'&quot;');
      const qty = (v.label||'').replace(/"/g,'&quot;');
      const price = Number(v.price)||0;
      return `
  <div class="price-line">
    <span class="price-label">\${v.label}</span>
    <button class="add-btn"
            onclick="addToCart('\${safeName}', '\${qty}', \${price});updateCartBadge();">
      Ajouter au panier
    </button>
  </div>
`;
    }).join('');
    return `
      <article class="product-card" tabindex="0" role="group" aria-label="${(p.name||'Produit')}">
        ${img}
        <h3 class="title">${p.name||''}</h3>
        <div class="details">
          <div class="prices">${buttons}</div>
        </div>
      </article>
    `;
  }).join('');
};

// Init
document.addEventListener('DOMContentLoaded', function(){
  try { window.renderFilters(); } catch(e){}
});
