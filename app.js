/* ============ Pellefina store engine (original code) ============ */
const LS = { p:'pf_products', c:'pf_cart', w:'pf_wish', o:'pf_orders', cur:'pf_currency', n:'pf_news' };
const WA_NUMBER = '923422625439'; // store WhatsApp for order copies
const GBP_RATE = 0.79, FREE_SHIP = 150;

const SEED = [
 {id:'p1', name:'Milano Briefcase', cat:'Bags', price:389, was:459, img:'assets/prod-briefcase.jpg', badge:'Bestseller', rating:4.9, reviews:212, colors:['Dark Brown','Black','Cognac'], desc:'A structured briefcase cut from a single bend of full-grain hide, with solid brass fittings and a padded 16-inch laptop sleeve. Built for boardrooms, broken in by life.', feats:['Full-grain vegetable-tanned hide','Solid brass lock & fittings','Padded 16" laptop sleeve','Cotton twill lining']},
 {id:'p2', name:'Voyager Weekender', cat:'Bags', price:459, was:0, img:'assets/hero-weekender.jpg', badge:'Iconic', rating:5.0, reviews:168, colors:['Cognac','Dark Brown'], desc:'Our signature carry-everything weekender in rich cognac hide. Cabin-sized, endlessly packable, and guaranteed to look better at year ten than day one.', feats:['Cabin-friendly 45L body','Detachable shoulder strap','Reinforced base studs','YKK solid-metal zips']},
 {id:'p3', name:'Heritage Duffle', cat:'Bags', price:429, was:499, img:'assets/prod-duffle.jpg', badge:'New', rating:4.8, reviews:74, colors:['Tan','Cognac'], desc:'A soft-structured duffle in sun-kissed tan hide that darkens into a deep honey patina. Rolls, folds and shrugs off a decade of departures.', feats:['Full-grain aniline hide','Hand-rolled handles','Interior zip vault pocket','Removable washable liner']},
 {id:'p4', name:'Siena Tote', cat:'Bags', price:289, was:0, img:'assets/prod-tote.jpg', badge:'Bestseller', rating:4.9, reviews:301, colors:['Cognac','Black','Tan'], desc:'The everyday tote, perfected. One unlined body of supple full-grain leather, an interior slip pocket, and straps burnished smooth by hand.', feats:['Single-hide unlined body','Fits 14" laptop','Interior slip + key loop','Hand-burnished straps']},
 {id:'p5', name:'Atlas Backpack', cat:'Bags', price:349, was:419, img:'assets/prod-backpack.jpg', badge:'Limited', rating:4.8, reviews:129, colors:['Vintage Brown','Black'], desc:'A heritage backpack with solid buckles, a padded back panel and a hide that carries scuffs like medals. Your commute, upgraded for life.', feats:['Solid brass buckles','Padded 15" laptop bay','Antique-finish hardware','Adjustable padded straps']},
 {id:'p6', name:'Bifold Wallet', cat:'Wallets', price:89, was:120, img:'assets/prod-wallet.jpg', badge:'Bestseller', rating:4.9, reviews:512, colors:['Brown','Black','Cognac'], desc:'Six cards, folded notes, nothing else — saddle-stitched from one piece of full-grain hide. The last wallet most of our customers ever buy.', feats:['Saddle-stitched by hand','6 cards + notes sleeve','RFID-safe lining option','Slim 8mm profile']},
 {id:'p7', name:'Slim Card Holder', cat:'Wallets', price:49, was:65, img:'assets/prod-cardholder.jpg', badge:'New', rating:4.7, reviews:203, colors:['Tan','Brown','Black'], desc:'Four cards and folded cash in a whisper-thin holder that disappears into any pocket — and develops a shine unique to your grip.', feats:['4 cards + cash fold','One-piece construction','Hand-dyed edges','Ages to a rich gloss']},
 {id:'p8', name:'Brass Buckle Belt', cat:'Accessories', price:79, was:99, img:'assets/prod-belt.jpg', badge:'Essential', rating:4.8, reviews:340, colors:['Brown','Black','Tan'], desc:'A single strap of 3.8mm belt-weight hide with a buckle cast from solid brass. No layers, no filler — it will outlast every pair of trousers you own.', feats:['Single-strap full-grain hide','Solid cast brass buckle','7 hand-punched holes','Bevelled, burnished edges']},
 {id:'p9', name:'Moto Leather Jacket', cat:'Apparel', price:549, was:699, img:'assets/prod-jacket.jpg', badge:'Iconic', rating:4.9, reviews:97, colors:['Brown','Black'], desc:'A timeless moto cut in drum-dyed full-grain lambskin-cowhide blend, quilted shoulders and a silhouette that moulds to you within a month.', feats:['Drum-dyed full-grain hide','Quilted shoulder panels','Satin lining, 2 inner pockets','Antique steel zips']},
 {id:'p10', name:'Dopp Toiletry Bag', cat:'Accessories', price:119, was:0, img:'assets/prod-toiletry.jpg', badge:'Travel', rating:4.8, reviews:156, colors:['Dark Brown','Cognac'], desc:'A wide-mouth toiletry bag on a frame opening, lined in wipe-clean cotton. Spills stay inside; style stays outside.', feats:['Frame wide-mouth opening','Wipe-clean lining','Solid metal zip','Hanging loop']},
 {id:'p11', name:'Frontier Fringe Chaps — Brown', cat:'Chaps', price:159, was:189, img:'assets/prod-chaps-1.jpg', badge:'Bestseller', rating:4.9, reviews:96, colors:['Vintage Brown','Black','Tan'], desc:'Full-length fringe chaps cut from heavyweight cowhide, with buckle straps, a side zip and a suede-look inner panel. Built for the saddle, finished for the street.', feats:['Heavyweight full-grain cowhide','Long hand-cut fringe','Buckle straps + side zip','Adjustable waist belt']},
 {id:'p12', name:'Midnight Fringe Chaps — Black', cat:'Chaps', price:159, was:0, img:'assets/prod-chaps-2.jpg', badge:'Iconic', rating:4.8, reviews:71, colors:['Black'], desc:'Black fringe chaps with silver stud detail and a smooth side zip. The pair that turns a plain ride into an entrance.', feats:['Full-grain black cowhide','Silver stud accents','Side zip entry','Snap leg closures']},
 {id:'p13', name:'Western Riding Chaps — Classic Brown', cat:'Chaps', price:149, was:175, img:'assets/prod-chaps-3.jpg', badge:'Essential', rating:4.8, reviews:58, colors:['Classic Brown','Dark Brown'], desc:'Clean, plain-cut western riding chaps in smooth brown hide. No fuss, no shortcuts — just honest leather that moulds to your leg.', feats:['Smooth full-grain hide','Adjustable back lacing','Reinforced inner leg','Built to outlast trends']},
 {id:'p14', name:'Heritage Western Chaps — Dark Brown', cat:'Chaps', price:149, was:0, img:'assets/prod-chaps-4.jpg', badge:'', rating:4.7, reviews:43, colors:['Dark Brown'], desc:'Dark chocolate western chaps with a whisper of fringe and a broken-in feel from the first wear.', feats:['Full-grain dark hide','Subtle fringe trim','Buckle front closure','Comfort flex waist']},
 {id:'p15', name:'Tooled Panel Chaps — Cognac', cat:'Chaps', price:229, was:279, img:'assets/prod-chaps-5.jpg', badge:'Limited', rating:5.0, reviews:37, colors:['Cognac'], desc:'Our flagship chaps: cognac hide with a hand-tooled style panel and lace detail, cut with extra care. The pair people ask about at every stop.', feats:['Premium cognac cowhide','Tooled-style yoke panel','Hand-laced detail','Numbered inside pocket']},
 {id:'p16', name:'Desert Suede Chaps — Tan & Red', cat:'Chaps', price:169, was:0, img:'assets/prod-chaps-6.jpg', badge:'New', rating:4.8, reviews:29, colors:['Tan / Red Panel'], desc:'Soft suede-look chaps in warm tan with a deep red side panel and long swinging fringe. Desert colours, highway manners.', feats:['Suede-finish cowhide','Long tan fringe','Contrast red panel','Buckle strap closure']},
 {id:'p17', name:'Hair-On Cowhide Chaps — Tan', cat:'Chaps', price:179, was:210, img:'assets/prod-chaps-7.jpg', badge:'', rating:4.8, reviews:44, colors:['Natural Tan'], desc:'Real hair-on cowhide chaps — every pair wears a pattern no other pair has. Ranch-true, road-ready.', feats:['Genuine hair-on cowhide','One-of-one pattern','Heavy-duty zips','Clean fringe-free cut']},
 {id:'p18', name:'Hair-On Fringe Chaps — Brown & White', cat:'Chaps', price:189, was:0, img:'assets/prod-chaps-8.jpg', badge:'Iconic', rating:4.9, reviews:52, colors:['Brown / White'], desc:'Brown and white hair-on hide with a full fringe fall. Bold in the right way, soft in the hand, guaranteed for life like everything we make.', feats:['Genuine hair-on cowhide','Full-length fringe','Buckle + zip closure','Each pair unique']},
 {id:'p19', name:'Hair-On Leather Chaps — Black & White', cat:'Chaps', price:189, was:225, img:'assets/prod-chaps-9.jpg', badge:'', rating:4.8, reviews:39, colors:['Black / White'], desc:'High-contrast black and white hair-on chaps with a clean silhouette. Rodeo presence, Pellefina finish.', feats:['Genuine hair-on cowhide','Striking natural pattern','Side zip entry','Reinforced stress points']},
 {id:'p20', name:'Speckled Cow Print Chaps — Women', cat:'Chaps', price:169, was:0, img:'assets/prod-chaps-10.jpg', badge:'New', rating:4.9, reviews:33, colors:['Speckled Brown / White'], desc:'Speckled cow-print fringe chaps cut for women — shaped waist, swinging fringe, and hide that only gets better with miles.', feats:['Genuine cowhide print','Women-specific cut','Long fringe fall','Adjustable waist']},
 {id:'p21', name:'Cow Print Fringe Chaps — Women', cat:'Chaps', price:169, was:199, img:'assets/prod-chaps-11.jpg', badge:'', rating:4.8, reviews:47, colors:['Black / White Print'], desc:'Black and white cow-print chaps with full fringe, tailored for women riders who want the classic ranch look with a modern fit.', feats:['Genuine cowhide print','Women-specific cut','Buckle straps','Side zip entry']},
 {id:'p22', name:'Ranch Hand Chaps — Men', cat:'Chaps', price:139, was:0, img:'assets/prod-chaps-12.jpg', badge:'Essential', rating:4.7, reviews:61, colors:['Rugged Brown'], desc:'Plain, rugged, fringe-free work chaps for men. Thick hide, honest stitching, zero decoration — made to be used hard for decades.', feats:['Thick full-grain hide','No-fuss work cut','Heavy-duty hardware','Breaks in, never breaks down']},
];

const GRADES = [
 {name:'Full-Grain', sub:'The top of the hide — what we use', score:98, text:'The uppermost layer of the hide with its natural grain untouched — never sanded, never corrected. It is the tightest, strongest fibre structure leather can offer, and the only grade that develops a true patina.', verdict:'Pellefina uses full-grain, A-grade hides only. Every piece on this site is cut from it.'},
 {name:'Top-Grain', sub:'Sanded & finished second layer', score:72, text:'The top layer after sanding away imperfections and stamping a uniform grain. Softer and more stain-resistant, but the natural fibre is broken — it will never patina like full-grain and wears thinner over time.', verdict:'Common in mid-range brands. Acceptable, but it is a compromise sold at near-full-grain prices.'},
 {name:'Genuine Leather', sub:'A marketing term, not a grade', score:38, text:'Despite the reassuring name, "genuine leather" usually means the split layers below the grain, coated and embossed to imitate the real thing. It cracks, peels and ages badly.', verdict:'If a listing hides behind the words "genuine leather", you are looking at the leftovers of the hide.'},
 {name:'Bonded Leather', sub:'Scraps, glue & plastic', score:12, text:'Shredded leather scraps bonded with polyurethane and rolled flat — the particleboard of leather. It looks passable for a season, then flakes apart.', verdict:'We will never sell it. If the price seems too good for "real leather", it is bonded.'},
];

const QUOTES = [
 {text:'“Three years of daily carry and my Voyager looks better than the day it arrived. The patina is unreal.”', by:'James C. — Chicago, US', stars:5},
 {text:'“I have bought wallets every year for a decade. The Pellefina bifold ended that habit in one purchase.”', by:'Oliver H. — London, UK', stars:5},
 {text:'“The tote carries my laptop, my life, and somehow still gets compliments at every meeting.”', by:'Amelia R. — Manchester, UK', stars:5},
 {text:'“You can feel the difference the second you pick it up. This is what leather is supposed to be.”', by:'Daniel M. — Austin, US', stars:5},
];

const POLICIES = {
 shipping:{t:'Shipping & Delivery', b:['Orders are prepared within 2–3 business days and shipped with tracked express delivery to the United States and United Kingdom.','Shipping is free on orders over $150 (or the GBP equivalent); below that, a flat $12 applies.','You receive tracking by email the moment your order leaves our bench.']},
 returns:{t:'Returns & Exchanges', b:['You have 90 days to change your mind. Pieces must be unused and in their original condition.','To start a return, contact us on WhatsApp or email with your order number and we will guide you through it.','Refunds are issued to your original payment method within 7 days of the piece arriving back with us.']},
 warranty:{t:'Lifetime Guarantee', b:['Every Pellefina piece is guaranteed for life against defects in materials and craftsmanship.','If a stitch fails, a zip breaks or hardware gives way under normal use, we repair or replace the piece free of charge.','Leather ageing, patina and character marks are not defects — they are the signature of real full-grain hide.']},
 privacy:{t:'Privacy Policy', b:['We collect only the details needed to fulfil your order: name, contact information and delivery address.','Your details are never sold. They are used for delivery, order updates and — only if you join The Hide List — our monthly letter.','You may request deletion of your details at any time by contacting us.']},
};

/* ---------- state ---------- */
const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
let products = load(LS.p, null);
const SEED_V = '2';
if (!products || !products.length || localStorage.getItem('pf_seed_v') !== SEED_V) { products = SEED; save(LS.p, products); localStorage.setItem('pf_seed_v', SEED_V); }
let cart = load(LS.c, []), wish = load(LS.w, []), currency = load(LS.cur, 'USD');
let modalId = null, modalQty = 1, quoteIdx = 0, quoteTimer = null;

const $ = s => document.querySelector(s);
const money = usd => currency === 'USD' ? '$' + usd.toFixed(2).replace(/\.00$/, '') : '£' + Math.round(usd * GBP_RATE);
const stars = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600); }
function refreshPrices(){ document.querySelectorAll('[data-price]').forEach(el => el.textContent = money(+el.dataset.price)); }

/* ---------- navigation ---------- */
function showView(name){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $('#view-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'wishlist') renderWish();
  if (name === 'checkout') renderCheckout();
  document.querySelector('#mainNav').classList.remove('open');
}
function goShop(cat){
  const sel = $('#shopCat');
  sel.value = cat || 'All';
  $('#shopTitle').textContent = (!cat || cat === 'All') ? 'Shop All' : cat;
  renderShop(); showView('shop');
}
document.addEventListener('click', e => {
  const nav = e.target.closest('[data-nav]');
  if (nav) { e.preventDefault(); nav.dataset.nav === 'home' ? showView('home') : goShop(nav.dataset.cat || 'All'); }
  const pol = e.target.closest('[data-policy]');
  if (pol) { e.preventDefault(); openPolicy(pol.dataset.policy); }
});

/* ---------- product cards ---------- */
function cardHTML(p){
  const inWish = wish.includes(p.id);
  return `<article class="card">
    <div class="card-img">
      ${p.badge ? `<span class="p-badge">${p.badge}</span>` : ''}
      <button class="p-heart ${inWish ? 'on' : ''}" data-wish="${p.id}" aria-label="wishlist">${inWish ? '♥' : '♡'}</button>
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <button class="quick-btn" data-quick="${p.id}">Quick View</button>
    </div>
    <div class="card-body">
      <p class="card-cat">${p.cat}</p>
      <h3 class="card-name">${p.name}</h3>
      <div class="stars">${stars(p.rating)}<span>${p.rating} (${p.reviews})</span></div>
      <div class="card-foot">
        <div class="price">${p.was ? `<s>${money(p.was)}</s>` : ''}${money(p.price)}</div>
        <button class="add-btn" data-add="${p.id}">Add to Cart</button>
      </div>
    </div>
  </article>`;
}
function renderFeatured(){ $('#featuredGrid').innerHTML = products.slice(0, 4).map(cardHTML).join(''); }

/* shop */
function fillCats(){
  const cats = ['All', ...new Set(products.map(p => p.cat))];
  $('#shopCat').innerHTML = cats.map(c => `<option>${c}</option>`).join('');
}
function renderShop(){
  const q = $('#shopSearch').value.trim().toLowerCase();
  const cat = $('#shopCat').value, sort = $('#shopSort').value, max = +$('#priceRange').value;
  $('#rangeVal').textContent = money(max);
  let list = products.filter(p => (cat === 'All' || p.cat === cat) && p.price <= max && (p.name + ' ' + p.cat).toLowerCase().includes(q));
  if (sort === 'low') list.sort((a, b) => a.price - b.price);
  if (sort === 'high') list.sort((a, b) => b.price - a.price);
  if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
  if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  $('#shopGrid').innerHTML = list.map(cardHTML).join('');
  $('#shopEmpty').hidden = list.length > 0;
  $('#shopCount').textContent = list.length + (list.length === 1 ? ' piece' : ' pieces') + ' · full-grain leather, guaranteed for life';
}

/* wishlist */
function renderWish(){
  const list = products.filter(p => wish.includes(p.id));
  $('#wishGrid').innerHTML = list.map(cardHTML).join('');
  $('#wishEmpty').textContent = list.length ? list.length + ' saved piece(s)' : 'Nothing saved yet — tap the ♡ on any piece to keep it here.';
  updateBadges();
}
function toggleWish(id){
  wish = wish.includes(id) ? wish.filter(x => x !== id) : [...wish, id];
  save(LS.w, wish); updateBadges();
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(b => { b.classList.toggle('on', wish.includes(id)); b.textContent = wish.includes(id) ? '♥' : '♡'; });
  toast(wish.includes(id) ? 'Saved to your wishlist ♡' : 'Removed from wishlist');
  if ($('#view-wishlist').classList.contains('active')) renderWish();
}

/* cart */
function cartQty(){ return cart.reduce((s, i) => s + i.qty, 0); }
function cartTotal(){ return cart.reduce((s, i) => { const p = products.find(x => x.id === i.id); return p ? s + p.price * i.qty : s; }, 0); }
function updateBadges(){ $('#cartCount').textContent = cartQty(); $('#wishCount').textContent = wish.length; }
function addToCart(id, qty = 1, opts = {}){
  const found = cart.find(i => i.id === id && i.color === (opts.color || '') && i.emboss === (opts.emboss || ''));
  if (found) found.qty += qty; else cart.push({ id, qty, color: opts.color || '', emboss: opts.emboss || '' });
  save(LS.c, cart); updateBadges(); renderCart();
  const p = products.find(x => x.id === id);
  toast(`Added — ${p ? p.name : 'piece'} × ${qty}`);
}
function renderCart(){
  const box = $('#drawerItems');
  $('#drawerCount').textContent = cartQty() ? `(${cartQty()})` : '';
  if (!cart.length) { box.innerHTML = '<p class="drawer-empty">Your cart is empty.<br>Beautiful leather is waiting.</p>'; }
  else box.innerHTML = cart.map((i, idx) => { const p = products.find(x => x.id === i.id); if (!p) return '';
    return `<div class="d-item"><img src="${p.img}" alt="${p.name}">
      <div class="d-info"><strong>${p.name}</strong>
      <span class="d-meta">${i.color || p.colors[0]}${i.emboss ? ' · Embossed: ' + i.emboss : ''} · ${money(p.price)}</span>
      <div class="d-row">
        <div class="qty-mini"><button data-dec="${idx}">−</button><span>${i.qty}</span><button data-inc="${idx}">+</button></div>
        <strong>${money(p.price * i.qty)}</strong>
      </div>
      <button class="d-remove" data-remove="${idx}">Remove</button></div></div>`; }).join('');
  const total = cartTotal();
  $('#drawerTotal').textContent = money(total);
  const pct = Math.min(100, total / FREE_SHIP * 100);
  $('#shipBar').style.width = pct + '%';
  $('#shipMsg').innerHTML = total >= FREE_SHIP ? '🎉 You unlocked <strong>FREE express shipping</strong>' : `Add <strong>${money(FREE_SHIP - total)}</strong> more for FREE express shipping`;
}
function openCart(){ renderCart(); $('#cartDrawer').classList.add('open'); $('#drawerOverlay').classList.add('open'); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#drawerOverlay').classList.remove('open'); }

/* modal */
function openModal(id){
  const p = products.find(x => x.id === id); if (!p) return;
  modalId = id; modalQty = 1; $('#qVal').textContent = 1;
  $('#mImg').src = p.img; $('#mImg').alt = p.name;
  $('#mBadge').textContent = p.badge || ''; $('#mBadge').style.display = p.badge ? '' : 'none';
  $('#mCat').textContent = p.cat; $('#mName').textContent = p.name;
  $('#mStars').innerHTML = stars(p.rating) + `<span>${p.rating} · ${p.reviews} reviews</span>`;
  $('#mPrice').innerHTML = (p.was ? `<s style="color:var(--mut);font-size:1.05rem;margin-right:.5rem">${money(p.was)}</s>` : '') + money(p.price);
  $('#mDesc').textContent = p.desc;
  $('#mFeats').innerHTML = (p.feats || []).map(f => `<li>${f}</li>`).join('');
  $('#mColor').innerHTML = p.colors.map(c => `<option>${c}</option>`).join('');
  $('#mEmboss').value = '';
  $('#mWish').classList.toggle('on', wish.includes(id)); $('#mWish').textContent = wish.includes(id) ? '♥' : '♡';
  $('#modalOverlay').classList.add('open');
}
function closeModal(){ $('#modalOverlay').classList.remove('open'); }

function openPolicy(key){ const p = POLICIES[key]; if (!p) return; $('#pTitle').textContent = p.t; $('#pBody').innerHTML = p.b.map(x => `<p>${x}</p>`).join(''); $('#policyOverlay').classList.add('open'); }

/* checkout */
function renderCheckout(){
  const box = $('#coItems');
  if (!cart.length) { box.innerHTML = '<p style="color:var(--mut)">Your cart is empty.</p>'; }
  else box.innerHTML = cart.map(i => { const p = products.find(x => x.id === i.id); if (!p) return '';
    return `<div class="co-item"><img src="${p.img}" alt=""><div><strong>${p.name} × ${i.qty}</strong><span>${i.color || p.colors[0]}${i.emboss ? ' · ' + i.emboss : ''}</span></div><strong>${money(p.price * i.qty)}</strong></div>`; }).join('');
  const sub = cartTotal(), ship = sub === 0 ? 0 : (sub >= FREE_SHIP ? 0 : 12);
  $('#coSubtotal').textContent = money(sub);
  $('#coShipping').textContent = ship === 0 ? (sub ? 'FREE' : money(0)) : money(ship);
  $('#coTotal').textContent = money(sub + ship);
}

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]'); if (add) { addToCart(add.dataset.add); openCart(); }
  const quick = e.target.closest('[data-quick]'); if (quick) openModal(quick.dataset.quick);
  const w = e.target.closest('[data-wish]'); if (w) toggleWish(w.dataset.wish);
  const inc = e.target.closest('[data-inc]'); if (inc) { cart[+inc.dataset.inc].qty++; save(LS.c, cart); updateBadges(); renderCart(); if ($('#view-checkout').classList.contains('active')) renderCheckout(); }
  const dec = e.target.closest('[data-dec]'); if (dec) { const i = +dec.dataset.dec; cart[i].qty = Math.max(1, cart[i].qty - 1); save(LS.c, cart); updateBadges(); renderCart(); }
  const rem = e.target.closest('[data-remove]'); if (rem) { cart.splice(+rem.dataset.remove, 1); save(LS.c, cart); updateBadges(); renderCart(); toast('Removed from cart'); }
  const card = e.target.closest('.card-img img'); if (card) { const wrap = card.closest('.card'); const btn = wrap && wrap.querySelector('[data-quick]'); if (btn) openModal(btn.dataset.quick); }
});
$('#cartBtn').addEventListener('click', openCart);
$('#drawerClose').addEventListener('click', closeCart);
$('#drawerOverlay').addEventListener('click', closeCart);
$('#continueBtn').addEventListener('click', closeCart);
$('#goCheckout').addEventListener('click', () => { if (!cart.length) { toast('Your cart is empty'); return; } closeCart(); showView('checkout'); });
$('#wishBtn').addEventListener('click', () => showView('wishlist'));
$('#burgerBtn').addEventListener('click', () => $('#mainNav').classList.toggle('open'));
$('#searchBtn').addEventListener('click', () => $('#searchBar').classList.toggle('open'));
$('#searchGo').addEventListener('click', () => { $('#shopSearch').value = $('#globalSearch').value; goShop('All'); });
$('#globalSearch').addEventListener('keydown', e => { if (e.key === 'Enter') $('#searchGo').click(); });
$('#modalClose').addEventListener('click', closeModal);
$('#modalOverlay').addEventListener('click', e => { if (e.target.id === 'modalOverlay') closeModal(); });
$('#policyClose').addEventListener('click', () => $('#policyOverlay').classList.remove('open'));
$('#policyOverlay').addEventListener('click', e => { if (e.target.id === 'policyOverlay') e.target.classList.remove('open'); });
$('#qPlus').addEventListener('click', () => { modalQty++; $('#qVal').textContent = modalQty; });
$('#qMinus').addEventListener('click', () => { modalQty = Math.max(1, modalQty - 1); $('#qVal').textContent = modalQty; });
$('#mAddCart').addEventListener('click', () => { addToCart(modalId, modalQty, { color: $('#mColor').value, emboss: $('#mEmboss').value.trim() }); closeModal(); openCart(); });
$('#mWish').addEventListener('click', () => { toggleWish(modalId); $('#mWish').classList.toggle('on', wish.includes(modalId)); $('#mWish').textContent = wish.includes(modalId) ? '♥' : '♡'; });
['shopSearch', 'shopCat', 'shopSort', 'priceRange'].forEach(id => { $('#' + id).addEventListener('input', renderShop); $('#' + id).addEventListener('change', renderShop); });
$('#footPatina').addEventListener('click', e => { e.preventDefault(); showView('home'); setTimeout(() => $('#patinaSection').scrollIntoView({ behavior: 'smooth' }), 80); });
$('#footGrades').addEventListener('click', e => { e.preventDefault(); showView('home'); setTimeout(() => $('#gradeTabs').scrollIntoView({ behavior: 'smooth' }), 80); });
$('#heroPatinaBtn').addEventListener('click', () => $('#patinaSection').scrollIntoView({ behavior: 'smooth' }));

$('#checkoutForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!cart.length) { toast('Your cart is empty'); return; }
  const orders = load(LS.o, []);
  const num = 'PF-' + Date.now().toString().slice(-6);
  const sub = cartTotal(), ship = sub >= FREE_SHIP ? 0 : 12;
  const order = { num, date: new Date().toLocaleString(), name: $('#coName').value, phone: $('#coPhone').value, email: $('#coEmail').value,
    addr: $('#coAddr').value, city: $('#coCity').value, zip: $('#coZip').value, country: $('#coCountry').value, notes: $('#coNotes').value,
    items: cart.map(i => { const p = products.find(x => x.id === i.id); return { name: p ? p.name : i.id, qty: i.qty, price: p ? p.price : 0, color: i.color, emboss: i.emboss }; }),
    totalUSD: sub + ship, currency };
  orders.push(order); save(LS.o, orders);
  const lines = order.items.map(i => `• ${i.name} × ${i.qty} (${i.color || '—'}${i.emboss ? ', embossed ' + i.emboss : ''}) — $${i.price * i.qty}`).join('\n');
  const msg = `Hello Pellefina! I just placed order ${num}.\n\n${lines}\n\nTotal: $${order.totalUSD}\nName: ${order.name}\nAddress: ${order.addr}, ${order.city} ${order.zip}, ${order.country}\nPhone: ${order.phone}`;
  $('#waOrderBtn').href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  $('#orderDoneText').innerHTML = `Thank you, <strong>${order.name.split(' ')[0]}</strong>. Your order number is <strong>${num}</strong>.<br>Our team will contact you at ${order.email} to confirm delivery and secure payment.`;
  $('#checkoutForm').hidden = true; $('#orderDone').hidden = false;
  cart = []; save(LS.c, cart); updateBadges(); renderCheckout();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('#newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const em = $('#newsEmail').value.trim(); if (!em) return;
  const list = load(LS.n, []); list.push({ email: em, date: new Date().toLocaleString() }); save(LS.n, list);
  $('#newsMsg').textContent = 'Welcome to The Hide List — your first letter arrives with the new moon.';
  $('#newsEmail').value = ''; toast('Subscribed to The Hide List');
});

/* currency */
function setCurrency(c){
  currency = c; save(LS.cur, c);
  $('#curUSD').classList.toggle('active', c === 'USD'); $('#curGBP').classList.toggle('active', c === 'GBP');
  refreshPrices(); renderFeatured(); if ($('#view-shop').classList.contains('active')) renderShop(); renderCart();
}
$('#curUSD').addEventListener('click', () => setCurrency('USD'));
$('#curGBP').addEventListener('click', () => setCurrency('GBP'));

/* patina */
const PATINA_TEXT = [
 'Brand new — pale, matte, waiting for its first journey.',
 'Week one — the first warm glow appears where your hands land.',
 'Year one — honey tones deepen; the hide now knows your routine.',
 'Year three — rich caramel character, scratches buffed into story.',
 'Year five — a dark, glossy patina no factory could ever fake. Yours alone.'];
$('#patinaRange').addEventListener('input', e => {
  const v = +e.target.value;
  $('#patinaTop').style.clipPath = `inset(0 0 0 ${v}%)`;
  $('#patinaHandle').style.left = v + '%';
  $('#patinaReadout').textContent = PATINA_TEXT[Math.min(4, Math.floor(v / 21))];
});

/* grades */
function renderGrades(active = 0){
  $('#gradeTabs').innerHTML = GRADES.map((g, i) => `<button class="grade-tab ${i === active ? 'active' : ''}" data-grade="${i}">${g.name}<small>${g.sub}</small></button>`).join('');
  const g = GRADES[active];
  $('#gradePanel').innerHTML = `<h3>${g.name}</h3><p>${g.text}</p>
    <div class="meter"><div style="width:${g.score}%"></div></div>
    <div class="meter-labels"><span>Durability &amp; character</span><span>${g.score}/100</span></div>
    <div class="grade-verdict">${g.verdict}</div>`;
  document.querySelectorAll('[data-grade]').forEach(b => b.addEventListener('click', () => renderGrades(+b.dataset.grade)));
}

/* testimonials */
function renderQuotes(){
  $('#quotesBox').innerHTML = QUOTES.map((q, i) => `<div class="quote-card ${i === quoteIdx ? 'on' : ''}"><div class="stars">${stars(q.stars)}</div><blockquote>${q.text}</blockquote><cite>${q.by}</cite></div>`).join('');
  $('#quoteDots').innerHTML = QUOTES.map((_, i) => `<button class="${i === quoteIdx ? 'on' : ''}" data-q="${i}" aria-label="quote ${i + 1}"></button>`).join('');
  document.querySelectorAll('[data-q]').forEach(b => b.addEventListener('click', () => { quoteIdx = +b.dataset.q; renderQuotes(); restartQuotes(); }));
}
function restartQuotes(){ clearInterval(quoteTimer); quoteTimer = setInterval(() => { quoteIdx = (quoteIdx + 1) % QUOTES.length; renderQuotes(); }, 5200); }

/* hero tilt + counters + reveal */
const heroCard = $('#heroCard');
if (heroCard && matchMedia('(pointer:fine)').matches) {
  heroCard.addEventListener('mousemove', e => {
    const r = heroCard.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    heroCard.style.transform = `rotateY(${(x - .5) * 14}deg) rotateX(${(.5 - y) * 10}deg)`;
    heroCard.style.setProperty('--gx', x * 100 + '%'); heroCard.style.setProperty('--gy', y * 100 + '%');
  });
  heroCard.addEventListener('mouseleave', () => heroCard.style.transform = '');
}
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
const cio = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return; cio.unobserve(en.target);
  const target = +en.target.dataset.count, t0 = performance.now();
  (function tick(t){ const p = Math.min(1, (t - t0) / 1400); en.target.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); })(t0);
}), { threshold: .5 });
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

/* marquee */
$('#marqueeTrack').innerHTML = Array(2).fill(['Full-Grain Leather', 'Saddle-Stitched Seams', 'Solid Brass Hardware', 'Lifetime Guarantee', 'Free US & UK Shipping $150+', '90-Day Returns'].map(t => `<span>${t} ◆</span>`).join('')).join('');

/* init */
fillCats(); renderFeatured(); renderShop(); renderGrades(); renderQuotes(); restartQuotes(); updateBadges(); renderCart();
$('#curUSD').classList.toggle('active', currency === 'USD'); $('#curGBP').classList.toggle('active', currency === 'GBP'); refreshPrices();

/* ---------- premium motion layer ---------- */
window.addEventListener('load', () => setTimeout(() => { const p = $('#preloader'); if (p) p.classList.add('done'); }, 500));
setTimeout(() => { const p = $('#preloader'); if (p) p.classList.add('done'); }, 2600); /* safety */
if (matchMedia('(pointer:fine)').matches) {
  const glow = $('#cursorGlow');
  addEventListener('mousemove', e => { glow.style.opacity = 1; glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });
  document.querySelectorAll('.btn-gold, .btn-dark').forEach(b => {
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .12}px, ${(e.clientY - r.top - r.height / 2) * .22}px)`; });
    b.addEventListener('mouseleave', () => b.style.transform = '');
  });
  addEventListener('scroll', () => { const h = document.querySelector('.hero-bgimg'); if (h) h.style.translate = `0 ${scrollY * .18}px`; }, { passive: true });
}
