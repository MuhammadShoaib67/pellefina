/* ============ Pellefina store engine (original code) ============ */
const LS = { p:'pf_products', c:'pf_cart', w:'pf_wish', o:'pf_orders', cur:'pf_currency', n:'pf_news' };
const WA_NUMBER = '923422625439'; // store WhatsApp for order copies
const GBP_RATE = 0.79, FREE_SHIP = 150;

const SEED = [
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
 {id:'p23', name:'Midnight Biker Jacket', cat:'Jackets', price:219, was:259, img:'assets/prod-jacket-2.jpg', badge:'Bestseller', rating:4.9, reviews:143, colors:['Black'], desc:'The definitive black biker: asymmetric zip, snap lapels and a cut that sits close without binding. Drum-dyed hide that shines richer every season.', feats:['Full-grain drum-dyed hide','Asymmetric steel zip','Quilted shoulder panels','Satin lining, 2 inner pockets']},
 {id:'p24', name:'Navy Roadster Biker Jacket', cat:'Jackets', price:219, was:0, img:'assets/prod-jacket-3.jpg', badge:'New', rating:4.8, reviews:51, colors:['Navy Blue'], desc:'Our classic biker cut in deep navy — the colour that pairs with everything black cannot. Same heavy hide, same lifetime promise.', feats:['Full-grain navy hide','Asymmetric zip front','Snap-down lapels','Cotton body lining']},
 {id:'p25', name:'Shearling Collar Jacket — Brown', cat:'Jackets', price:249, was:299, img:'assets/prod-jacket-4.jpg', badge:'', rating:4.9, reviews:67, colors:['Brown'], desc:'A brown leather jacket crowned with a cream shearling collar. Winter warmth with a vintage soul, built from one continuous hide grade.', feats:['Full-grain brown hide','Real shearling collar','Heavy-duty front zip','Two slanted hand pockets']},
 {id:'p26', name:'Fringe Rider Jacket — Brown', cat:'Jackets', price:269, was:0, img:'assets/prod-jacket-5.jpg', badge:'Iconic', rating:4.8, reviews:44, colors:['Brown'], desc:'Western fringe across the chest and sleeves that moves when you do. Cut from supple brown cowhide with a tailored, modern body.', feats:['Hand-cut leather fringe','Full-grain brown cowhide','Zip front with storm flap','Fringe-safe reinforced seams']},
 {id:'p27', name:'Expedition Field Jacket — Brown', cat:'Jackets', price:239, was:279, img:'assets/prod-jacket-6.jpg', badge:'', rating:4.7, reviews:38, colors:['Brown'], desc:'Four bellows pockets, a belted waist and hide thick enough to shrug off weather. The jacket for people who actually go places.', feats:['Four bellows pockets','Adjustable belted waist','Weather-resistant finish','Corduroy collar facing']},
 {id:'p28', name:'Aviator Bomber Jacket — Black', cat:'Jackets', price:299, was:349, img:'assets/prod-jacket-7.jpg', badge:'Limited', rating:5.0, reviews:59, colors:['Black'], desc:'Our flagship aviator: black hide, ribbed cuffs and hem, and a plush collar. Cut slightly relaxed, finished like a heirloom.', feats:['Premium full-grain hide','Ribbed cuffs and hem','Plush shearling-style collar','Antique brass zips']},
 {id:'p29', name:'Classic Biker Vest — Black', cat:'Vests', price:139, was:165, img:'assets/prod-vest-1.jpg', badge:'Bestseller', rating:4.8, reviews:88, colors:['Black'], desc:'A black leather vest with side lacing for a perfect fit over anything from a tee to a hoodie. The layer every rider reaches for.', feats:['Full-grain black hide','Adjustable side lacing','Two inner pockets','Snap front closure']},
 {id:'p30', name:'Heritage Waistcoat — Brown', cat:'Vests', price:139, was:0, img:'assets/prod-vest-2.jpg', badge:'', rating:4.7, reviews:36, colors:['Brown'], desc:'A button-front brown waistcoat with a tailored, almost formal cut. Weddings, whiskey bars and everywhere in between.', feats:['Smooth full-grain hide','Five-button front','Adjustable back strap','Satin back panel']},
 {id:'p31', name:'Suede Vest — Brown', cat:'Vests', price:129, was:149, img:'assets/prod-vest-3.jpg', badge:'Essential', rating:4.7, reviews:41, colors:['Brown Suede'], desc:'Soft-touch brown suede in a clean western vest cut. Feather-light on the body, heavy on compliments.', feats:['Suede-finish cowhide','Western yoke detail','Snap closures','Unlined for breathability']},
 {id:'p32', name:'Suede Fringe Vest — Brown', cat:'Vests', price:139, was:0, img:'assets/prod-vest-4.jpg', badge:'Iconic', rating:4.8, reviews:33, colors:['Brown Suede'], desc:'Brown suede with a full fringe fall across the back and chest. Festival soul, biker bones, lifetime guarantee.', feats:['Suede-finish cowhide','Full hand-cut fringe','Concho snap buttons','Reinforced fringe roots']},
 {id:'p33', name:'Quilted Vest — Black', cat:'Vests', price:129, was:155, img:'assets/prod-vest-5.jpg', badge:'', rating:4.6, reviews:27, colors:['Black'], desc:'Diamond-quilted black leather vest with light padding — warmth without bulk, shine without noise.', feats:['Diamond quilt stitching','Light thermal padding','Full-grain black hide','Zip + snap front']},
 {id:'p34', name:'Western Vest — Brown', cat:'Vests', price:129, was:0, img:'assets/prod-vest-6.jpg', badge:'', rating:4.7, reviews:31, colors:['Brown'], desc:'A brown western vest with concho buttons and a pointed front hem. Ranch-hand roots, city manners.', feats:['Full-grain brown hide','Concho button front','Pointed front hem','Adjustable side ties']},
 {id:'p35', name:'Driving Gloves — Brown', cat:'Gloves', price:59, was:75, img:'assets/prod-glove-1.jpg', badge:'Essential', rating:4.8, reviews:112, colors:['Brown','Black'], desc:'Open-knuckle driving gloves in butter-soft brown hide with a snap strap. Grip the wheel, feel the road.', feats:['Deerskin-soft cowhide','Knuckle cut-outs','Snap wrist strap','Unlined for feel']},
 {id:'p36', name:'Gauntlet Gloves — Black', cat:'Gloves', price:69, was:0, img:'assets/prod-glove-2.jpg', badge:'', rating:4.7, reviews:54, colors:['Black'], desc:'Long-cuff black gauntlets that swallow a jacket sleeve. Maximum coverage, zero flap, all business.', feats:['Extended gauntlet cuff','Full-grain black hide','Reinforced palm patch','Adjustable cuff strap']},
 {id:'p37', name:'Shearling-Lined Winter Gloves', cat:'Gloves', price:79, was:95, img:'assets/prod-glove-3.jpg', badge:'', rating:4.8, reviews:63, colors:['Brown'], desc:'Brown leather gloves lined in real shearling. The pair that makes January feel like a rumour.', feats:['Real shearling lining','Full-grain brown hide','Windproof cuff','Stitched, not glued, seams']},
 {id:'p38', name:'Fingerless Rider Gloves — Black', cat:'Gloves', price:49, was:0, img:'assets/prod-glove-4.jpg', badge:'New', rating:4.6, reviews:48, colors:['Black'], desc:'Fingerless black gloves with a padded palm — throttle feel and knuckle freedom for summer miles.', feats:['Padded palm panel','Pull-off tabs','Velcro wrist closure','Perforated back']},
 {id:'p39', name:'Dress Gloves — Tan', cat:'Gloves', price:65, was:79, img:'assets/prod-glove-5.jpg', badge:'', rating:4.8, reviews:39, colors:['Tan','Brown'], desc:'Elegant tan dress gloves with three-stitch back detail. The finishing touch a good coat deserves.', feats:['Fine-grain dress hide','Three-point back stitching','Cashmere-blend lining option','Button wrist vent']},
 {id:'p40', name:'Touchscreen Gloves — Black', cat:'Gloves', price:69, was:0, img:'assets/prod-glove-6.jpg', badge:'New', rating:4.7, reviews:57, colors:['Black'], desc:'Full black leather gloves with conductive fingertips on thumb and index. Answer the phone, keep the warmth.', feats:['Touchscreen fingertips','Full-grain black hide','Fleece lining','Snug tailored fit']},
 {id:'p41', name:'Tooled Western Belt', cat:'Belts', price:49, was:59, img:'assets/prod-belt-2.jpg', badge:'Bestseller', rating:4.9, reviews:204, colors:['Tooled Brown'], desc:'A hand-tooled floral belt cut from a single strip of vegetable-tanned hide. The buckle is solid; the compliments are free.', feats:['Hand-tooled floral pattern','One-piece veg-tan strap','Solid metal buckle','Five-hole adjustment']},
 {id:'p42', name:'Full-Grain Belt — Black', cat:'Belts', price:45, was:0, img:'assets/prod-belt-3.jpg', badge:'Essential', rating:4.8, reviews:176, colors:['Black','Brown'], desc:'The plain black belt, done properly: one piece of full-grain hide, brushed steel buckle, edges burnished by hand.', feats:['Single-piece full-grain strap','Brushed steel buckle','Hand-burnished edges','No bonded layers, ever']},
 {id:'p43', name:'Riveted Biker Belt', cat:'Belts', price:55, was:65, img:'assets/prod-belt-4.jpg', badge:'', rating:4.7, reviews:92, colors:['Brown','Black'], desc:'A brown biker belt with metal rivets and a heavy buckle. Built to hold more than your jeans up.', feats:['Metal rivet detailing','Heavy-duty buckle','Thick full-grain strap','Reinforced tip']},
 {id:'p44', name:'Braided Belt — Brown', cat:'Belts', price:52, was:0, img:'assets/prod-belt-5.jpg', badge:'', rating:4.7, reviews:68, colors:['Braided Brown'], desc:'Hand-braided brown leather that flexes with you and fits between holes — the belt with infinite sizes.', feats:['Hand-braided straps','Infinite-fit weave','Solid brass roller buckle','Softens with wear']},
 {id:'p45', name:'Hair-On Cowhide Belt', cat:'Belts', price:59, was:69, img:'assets/prod-belt-6.jpg', badge:'Limited', rating:4.8, reviews:45, colors:['Natural Hair-On'], desc:'A belt cut from genuine hair-on cowhide — your pattern is the only one like it on Earth.', feats:['Genuine hair-on cowhide','One-of-one pattern','Leather-backed for strength','Solid metal buckle']},
 {id:'p46', name:'Hair-On Cowhide Tote — Brindle', cat:'Bags', price:189, was:225, img:'assets/prod-bag-hairon-1.jpg', badge:'', rating:4.8, reviews:41, colors:['Brindle Black / Cream'], desc:'A structured tote in brindle hair-on cowhide with leather handles. Carries a laptop, turns every head in the room.', feats:['Genuine hair-on cowhide','Fits a 14-inch laptop','Leather handles and base','Cotton twill lining']},
 {id:'p47', name:'Hair-On Fringe Bag — Black & White', cat:'Bags', price:209, was:0, img:'assets/prod-bag-hairon-2.jpg', badge:'Iconic', rating:4.9, reviews:36, colors:['Black / White'], desc:'Black and white hair-on hide with a long fringe fall and a shoulder strap. Western drama, everyday size.', feats:['Genuine hair-on cowhide','Long hand-cut fringe','Adjustable shoulder strap','Zip top closure']},
 {id:'p48', name:'Hair-On Clutch Bag', cat:'Bags', price:149, was:175, img:'assets/prod-bag-hairon-3.jpg', badge:'New', rating:4.7, reviews:24, colors:['Natural Brown / White'], desc:'A compact hair-on clutch that fits phone, cards and nerve. Small bag, enormous presence.', feats:['Genuine hair-on cowhide','Detachable wrist strap','Suede interior','Magnetic closure']},
 {id:'p49', name:'Hair-On Clutch Wallet', cat:'Wallets', price:119, was:0, img:'assets/prod-wallet-3.jpg', badge:'New', rating:4.8, reviews:29, colors:['Brindle Black / Cream'], desc:'Half wallet, half clutch, all hair-on cowhide. Cards, cash and phone in one unmistakable piece.', feats:['Genuine hair-on cowhide','8 card slots + phone sleeve','Zip coin pocket','Wrist strap included']},
 {id:'p50', name:'Trifold Wallet — Dark Brown', cat:'Wallets', price:69, was:85, img:'assets/prod-wallet-4.jpg', badge:'Essential', rating:4.8, reviews:231, colors:['Dark Brown','Black'], desc:'The classic trifold, minus the bulk: six cards, full-length bills, and hide that moulds to your pocket in a week.', feats:['6 card slots + bill sleeve','Full-grain dark hide','Slim trifold profile','Hand-stitched spine']},
 {id:'p51', name:'Money Clip Wallet — Black', cat:'Wallets', price:55, was:0, img:'assets/prod-wallet-5.jpg', badge:'', rating:4.7, reviews:148, colors:['Black'], desc:'A slim black wallet with a sprung money clip — front-pocket light, back-pocket tough.', feats:['Sprung steel money clip','4 quick-access slots','RFID-shielded lining','One-piece construction']},
 {id:'p52', name:'Biker Chain Wallet — Brown', cat:'Wallets', price:79, was:95, img:'assets/prod-wallet-6.jpg', badge:'', rating:4.8, reviews:87, colors:['Brown'], desc:'A long brown biker wallet with a detachable chain. Your grandfather had one; his still works.', feats:['Detachable steel chain','8 slots + long bill bay','Full-grain brown hide','Snap closure']},
 {id:'p53', name:'Leather Key Fob', cat:'Accessories', price:25, was:0, img:'assets/prod-acc-1.jpg', badge:'', rating:4.8, reviews:264, colors:['Brown','Black','Tan'], desc:'A loop of the same full-grain hide as our bags, with a solid brass ring. Small piece, same standards.', feats:['Full-grain leather loop','Solid brass ring','Snap closure','Fits all standard keys']},
 {id:'p54', name:'Luggage Tag Set — Tan', cat:'Accessories', price:29, was:35, img:'assets/prod-acc-2.jpg', badge:'', rating:4.7, reviews:119, colors:['Tan','Brown'], desc:'Two tan leather luggage tags with brass buckles and a privacy flap. Your bag, unmistakably yours.', feats:['Set of two tags','Brass buckle straps','Privacy cover flap','Free initials embossing']},
 {id:'p55', name:'Leather Valet Tray — Cognac', cat:'Accessories', price:45, was:0, img:'assets/prod-acc-3.jpg', badge:'', rating:4.9, reviews:156, colors:['Cognac'], desc:'A snap-corner valet tray in cognac hide for keys, watch and coins. The landing strip your pockets deserve.', feats:['Snap-corner construction','Full-grain cognac hide','Folds flat for travel','Wipes clean']},
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
const SEED_V = '4';
if (!products || !products.length || localStorage.getItem('pf_seed_v') !== SEED_V) { products = SEED; save(LS.p, products); localStorage.setItem('pf_seed_v', SEED_V); }
let cart = load(LS.c, []), wish = load(LS.w, []), currency = load(LS.cur, 'USD');
cart = cart.filter(ci => products.some(p => p.id === ci.id)); wish = wish.filter(id => products.some(p => p.id === id)); save(LS.c, cart); save(LS.w, wish);
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
