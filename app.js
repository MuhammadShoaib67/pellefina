/* ============ Pellefina store engine (original code) ============ */
const LS = { p:'pf_products', c:'pf_cart', w:'pf_wish', o:'pf_orders', cur:'pf_currency', n:'pf_news' };
const WA_NUMBER = '923422625439'; // store WhatsApp for order copies
const GBP_RATE = 0.79, FREE_SHIP = 150;

const SEED = [
 {id:'p11', name:'Frontier Fringe Chaps — Brown', cat:'Chaps', price:149, was:179, img:'assets/prod-chaps-1.jpg', badge:'Bestseller', rating:4.9, reviews:96, colors:['Vintage Brown'], desc:'Full-length fringe chaps in warm brown cowhide with buckle straps, a side zip and a suede-look inner panel. Made for long days in the saddle.', feats:['Heavyweight cowhide','Long hand-cut fringe','Buckle straps + side zip','Adjustable waist belt']},
 {id:'p12', name:'Midnight Fringe Chaps — Black', cat:'Chaps', price:149, was:0, img:'assets/prod-chaps-2.jpg', badge:'Iconic', rating:4.8, reviews:71, colors:['Black'], desc:'Black fringe chaps with silver stud detail and a smooth side zip. The pair that turns an ordinary ride into an entrance.', feats:['Full-grain black cowhide','Silver stud accents','Side zip entry','Snap leg closures']},
 {id:'p13', name:'Western Riding Chaps — Classic Brown', cat:'Chaps', price:149, was:179, img:'assets/prod-chaps-3.jpg', badge:'Essential', rating:4.8, reviews:58, colors:['Classic Brown'], desc:'Clean-cut western riding chaps in smooth brown hide, made to order in your size. Honest leather that moulds to your leg.', feats:['Smooth full-grain hide','Custom sizes available','Reinforced inner leg','Buckle front closure']},
 {id:'p14', name:'Heritage Western Chaps — Dark Brown', cat:'Chaps', price:149, was:0, img:'assets/prod-chaps-4.jpg', badge:'', rating:4.7, reviews:43, colors:['Dark Brown'], desc:'Dark chocolate western chaps with flowing fringe and a broken-in feel from the very first wear.', feats:['Full-grain dark hide','Full fringe sides','Adjustable fit','Comfort flex waist']},
 {id:'p15', name:'Tooled Panel Chaps — Cognac', cat:'Chaps', price:189, was:229, img:'assets/prod-chaps-5.jpg', badge:'Limited', rating:5.0, reviews:37, colors:['Cognac'], desc:'Cognac hide with a tooled-style yoke panel, zip and lace detail. The pair people ask about at every stop.', feats:['Premium cognac cowhide','Tooled-style panel','Hand-laced detail','Zip + buckle fit']},
 {id:'p22', name:'Western Chaps — Adjustable Brown', cat:'Chaps', price:149, was:0, img:'assets/prod-chaps-12.jpg', badge:'', rating:4.7, reviews:39, colors:['Brown'], desc:'Everyday western chaps with an adjustable side-buckle fit. Simple, sturdy and ready to work.', feats:['Full-grain brown hide','Adjustable side buckles','Full-length cut','Reinforced stitching']},
 {id:'p56', name:'Rodeo Fringe Chaps — Classic', cat:'Chaps', price:189, was:229, img:'assets/prod-chaps-17.jpg', badge:'', rating:4.8, reviews:26, colors:['Brown / Natural'], desc:'Rodeo-ready fringe chaps in genuine cowhide, cut for movement and made to take a season of hard use.', feats:['Genuine cowhide','Full swinging fringe','Secure waist belt','Arena-proven cut']},
 {id:'p57', name:'Onyx Full-Grain Chaps — Black', cat:'Chaps', price:149, was:0, img:'assets/prod-chaps-14.jpg', badge:'', rating:4.7, reviews:22, colors:['Black'], desc:'Plain-cut black chaps in full-grain hide — no fringe, no fuss, just serious leather for serious miles.', feats:['Full-grain black hide','Clean fringe-free cut','Side zip entry','Adjustable waist']},
 {id:'p16', name:'Desert Suede Chaps — Tan & Red', cat:'Suede Chaps', price:149, was:0, img:'assets/prod-chaps-6.jpg', badge:'New', rating:4.8, reviews:29, colors:['Tan / Red Panel'], desc:'Suede-look chaps in warm tan with a deep red side panel and long swinging fringe. Desert colours, highway manners.', feats:['Suede-finish cowhide','Long tan fringe','Contrast red panel','Buckle strap closure']},
 {id:'p58', name:'Sand Suede Chaps — Fringe', cat:'Suede Chaps', price:149, was:179, img:'assets/prod-chaps-13.jpg', badge:'', rating:4.7, reviews:18, colors:['Sand'], desc:'Soft sand suede chaps with waist-down fringe, worn over jeans. Light in feel, heavy in character.', feats:['Soft suede finish','Full side fringe','Worn over denim','Buckle waist fit']},
 {id:'p17', name:'Hair-On Cowhide Chaps — Tan', cat:'Hair-On Chaps', price:159, was:189, img:'assets/prod-chaps-7.jpg', badge:'', rating:4.8, reviews:44, colors:['Natural Tan'], desc:'Real hair-on cowhide chaps with extra-long fringe. Every pair wears a pattern no other pair has.', feats:['Genuine hair-on cowhide','One-of-one pattern','Extra-long fringe','Heavy-duty hardware']},
 {id:'p18', name:'Hair-On Fringe Chaps — Brown & White', cat:'Hair-On Chaps', price:159, was:0, img:'assets/prod-chaps-8.jpg', badge:'', rating:4.8, reviews:41, colors:['Brown / White'], desc:'Brown and white hair-on fringe chaps with a true western silhouette. Ranch-true, road-ready.', feats:['Genuine hair-on hide','Natural patch pattern','Long fringe sides','Adjustable belt']},
 {id:'p19', name:'Hair-On Chaps — Black & White', cat:'Hair-On Chaps', price:159, was:189, img:'assets/prod-chaps-9.jpg', badge:'', rating:4.9, reviews:38, colors:['Black / White'], desc:'Black and white hair-on chaps with warm brown fringe — bold contrast, unmistakably western.', feats:['Genuine hair-on cowhide','Striking B/W pattern','Brown fringe trim','Rodeo cut']},
 {id:'p20', name:'Speckled Cow-Print Chaps — Women', cat:'Hair-On Chaps', price:189, was:0, img:'assets/prod-chaps-10.jpg', badge:'', rating:4.8, reviews:33, colors:['Brown Speckle'], desc:'Brown and white speckled cow-print fringe chaps for women, finished with a silver buckle.', feats:['Hair-on cow print','Silver buckle detail','Full fringe','Women’s cut']},
 {id:'p21', name:'Cow-Print Fringe Chaps — Women', cat:'Hair-On Chaps', price:189, was:229, img:'assets/prod-chaps-11.jpg', badge:'Bestseller', rating:4.9, reviews:52, colors:['Black / White Print'], desc:'Black and white cow-print fringe chaps — the festival and rodeo favourite, made from real cowhide.', feats:['Real cowhide print','Full side fringe','Secure buckle fit','Women’s sizing']},
 {id:'p59', name:'Natural Cowhide Fringe Chaps', cat:'Hair-On Chaps', price:189, was:0, img:'assets/prod-chaps-15.jpg', badge:'', rating:4.8, reviews:24, colors:['Natural'], desc:'Natural cowhide hair-on overpants with full fringe — each hide’s pattern is completely unique.', feats:['Genuine hair-on hide','One-of-one markings','Full fringe','Overpant style']},
 {id:'p60', name:'Cow-Print Chaps — Brown Cream', cat:'Hair-On Chaps', price:189, was:229, img:'assets/prod-chaps-16.jpg', badge:'', rating:4.7, reviews:21, colors:['Brown / Cream'], desc:'Soft brown and cream cow-print fringe chaps with an easy western drape.', feats:['Hair-on cow print','Cream-brown tones','Full fringe sides','Comfort waist']},
 {id:'p61', name:'Cow-Print Rodeo Chaps', cat:'Hair-On Chaps', price:159, was:0, img:'assets/prod-chaps-18.jpg', badge:'', rating:4.8, reviews:27, colors:['Cow Print'], desc:'Cow-print leather chaps for riding and rodeo days — genuine hide, honest weight, real fringe.', feats:['Genuine cowhide','Classic rodeo cut','Full fringe','Belted waist']},
 {id:'p23', name:'Asymmetric Biker Jacket — Black', cat:'Jackets', price:169, was:209, img:'assets/prod-jacket-1.jpg', badge:'', rating:4.9, reviews:63, colors:['Black'], desc:'Black biker jacket with an asymmetric zip, belted hem and snap lapels. The full café-racer kit in one jacket.', feats:['Full-grain black hide','Asymmetric front zip','Belted hem','Multiple pockets']},
 {id:'p24', name:'Classic Biker Jacket — Black', cat:'Jackets', price:149, was:0, img:'assets/prod-jacket-2.jpg', badge:'Bestseller', rating:4.9, reviews:88, colors:['Black'], desc:'The timeless black biker: clean lines, strong zips and hide that only gets better with every season.', feats:['Full-grain cowhide','Quilted lining','Antique hardware','Tailored fit']},
 {id:'p25', name:'Vintage Bomber Jacket — Brown', cat:'Jackets', price:159, was:189, img:'assets/prod-jacket-3.jpg', badge:'Iconic', rating:4.9, reviews:74, colors:['Vintage Brown'], desc:'Dark brown bomber in a vintage flight style with a zip front and roomy pockets. Our hero jacket.', feats:['Full-grain brown hide','Zip front closure','Ribbed cuffs','Two front pockets']},
 {id:'p26', name:'Suede Jacket — Navy', cat:'Jackets', price:149, was:0, img:'assets/prod-jacket-4.jpg', badge:'New', rating:4.7, reviews:31, colors:['Navy'], desc:'Navy suede jacket with a pointed collar and clean silver zip. Soft hand-feel, sharp outline.', feats:['Premium suede','Pointed collar','Silver front zip','Smooth lining']},
 {id:'p27', name:'Shearling Leather Jacket — Brown', cat:'Jackets', price:159, was:189, img:'assets/prod-jacket-5.jpg', badge:'', rating:4.8, reviews:36, colors:['Brown'], desc:'Brown shearling leather jacket built for cold mornings — warm pile inside, rugged hide outside.', feats:['Real shearling warmth','Full-grain outer','Secure zip front','Deep pockets']},
 {id:'p28', name:'Crocodile Biker Jacket — Dark Brown', cat:'Jackets', price:189, was:0, img:'assets/prod-jacket-6.jpg', badge:'Limited', rating:5.0, reviews:19, colors:['Dark Brown'], desc:'Dark brown crocodile-embossed biker jacket with an asymmetric chest zip. Rare texture, serious presence.', feats:['Croc-embossed hide','Asymmetric zip','Collector piece','Tailored cut']},
 {id:'p74', name:'Hair-On Jacket — Brown & White', cat:'Hair-On Jackets', price:159, was:189, img:'assets/prod-jacket-hairon-1.jpg', badge:'', rating:4.8, reviews:23, colors:['Brown / White'], desc:'Hair-on cowhide jacket with a natural patch pattern — no two jackets share the same markings.', feats:['Genuine hair-on hide','One-of-one pattern','Zip front','Fully lined']},
 {id:'p75', name:'Hair-On Jacket — Spotted', cat:'Hair-On Jackets', price:159, was:0, img:'assets/prod-jacket-hairon-2.jpg', badge:'', rating:4.7, reviews:17, colors:['Natural Spot'], desc:'Spotted hair-on jacket with a relaxed western fit and a hide that tells its own story.', feats:['Real hair-on cowhide','Natural spotting','Comfort fit','Snap + zip front']},
 {id:'p76', name:'Hair-On Jacket — Tricolor', cat:'Hair-On Jackets', price:159, was:189, img:'assets/prod-jacket-hairon-3.jpg', badge:'', rating:4.8, reviews:15, colors:['Tricolor'], desc:'Tricolor hair-on jacket — brown, black and cream in one natural, unrepeatable layout.', feats:['Genuine hair-on hide','Tricolor pattern','Warm lining','Statement piece']},
 {id:'p70', name:'Longline Trench Coat — Black', cat:'Coats', price:189, was:229, img:'assets/prod-coat-1.jpg', badge:'Limited', rating:5.0, reviews:21, colors:['Black'], desc:'Women’s black leather trench: longline, tailored, wide lapels and a clean button front.', feats:['Full-grain black hide','Longline tailored cut','Wide lapel collar','Button front']},
 {id:'p71', name:'Vintage Suede Trench — Brown', cat:'Coats', price:159, was:0, img:'assets/prod-coat-2.jpg', badge:'', rating:4.8, reviews:28, colors:['Vintage Brown'], desc:'A 70s-style brown suede trench with effortless fall drape. Vintage soul, modern finish.', feats:['Premium suede','70s trench styling','Belted waist','Smooth lining']},
 {id:'p72', name:'Suede-Look Long Coat — Sand', cat:'Coats', price:169, was:209, img:'assets/prod-coat-3.jpg', badge:'', rating:4.7, reviews:16, colors:['Sand'], desc:'Floor-skimming sand coat in a soft suede look — quiet luxury that moves beautifully.', feats:['Suede-look finish','Full-length cut','Clean lapels','Inner pocket']},
 {id:'p73', name:'Shearling Collar Coat — Brown', cat:'Coats', price:189, was:0, img:'assets/prod-coat-4.jpg', badge:'', rating:4.9, reviews:14, colors:['Brown'], desc:'Long brown coat with a plush shearling collar — winter weight with heirloom manners.', feats:['Full-grain hide','Real shearling collar','Full-length warmth','Button closure']},
 {id:'p29', name:'Steampunk Waistcoat — Dark Brown', cat:'Vests', price:149, was:179, img:'assets/prod-vest-1.jpg', badge:'', rating:4.8, reviews:34, colors:['Dark Brown'], desc:'Dark brown steampunk waistcoat with gold-tone buttons, an adjustable belt and side lacing.', feats:['Full-grain hide','Gold-tone buttons','Side lace detail','Adjustable belt']},
 {id:'p30', name:'Sherpa-Lined Vest — Dark Brown', cat:'Vests', price:149, was:0, img:'assets/prod-vest-2.jpg', badge:'', rating:4.8, reviews:42, colors:['Dark Brown'], desc:'Dark brown vest with a beige sherpa lining and full-zip front — the layer cold rides demand.', feats:['Sherpa fleece lining','Full-zip front','V-neck design','Two pockets']},
 {id:'p31', name:'Suede Fringe Vest — Women', cat:'Vests', price:139, was:169, img:'assets/prod-vest-3.jpg', badge:'', rating:4.7, reviews:29, colors:['Brown Suede'], desc:'Brown suede fringe vest for women with a western buckle front. Festival-ready, ranch-approved.', feats:['Soft suede finish','Full fringe','Buckle front','Women’s cut']},
 {id:'p32', name:'Utility Biker Waistcoat — Brown', cat:'Vests', price:139, was:0, img:'assets/prod-vest-4.jpg', badge:'', rating:4.7, reviews:26, colors:['Brown'], desc:'Vintage utility biker waistcoat in honest brown hide — pockets where you need them.', feats:['Full-grain hide','Utility pockets','Vintage styling','Snap front']},
 {id:'p33', name:'Quilted Biker Waistcoat — Black', cat:'Vests', price:139, was:169, img:'assets/prod-vest-5.jpg', badge:'', rating:4.8, reviews:31, colors:['Black'], desc:'Black quilted motorcycle waistcoat with clean padding and a sharp road fit.', feats:['Quilted panels','Full-grain black hide','Zip + snap front','Road fit']},
 {id:'p34', name:'Shearling Aviator Vest — B3', cat:'Vests', price:149, was:0, img:'assets/prod-vest-6.jpg', badge:'', rating:4.8, reviews:25, colors:['Brown'], desc:'B3-style shearling aviator gilet in brown hide — cockpit warmth without the sleeves.', feats:['Real shearling lining','Aviator styling','Buckle collar','Deep warmth']},
 {id:'p77', name:'Hair-On Vest — Brown & White', cat:'Hair-On Vests', price:139, was:169, img:'assets/prod-vest-hairon-1.jpg', badge:'', rating:4.7, reviews:19, colors:['Brown / White'], desc:'Long hair-on vest in natural brown and white — a layer that starts conversations.', feats:['Genuine hair-on hide','Natural pattern','Longline cut','Open front']},
 {id:'p78', name:'Hair-On Vest — Natural', cat:'Hair-On Vests', price:139, was:0, img:'assets/prod-vest-hairon-2.jpg', badge:'', rating:4.7, reviews:13, colors:['Natural'], desc:'Natural hair-on vest with a clean western line and one-of-one markings.', feats:['Real hair-on cowhide','Unique markings','Comfort fit','Snap front']},
 {id:'p79', name:'Moto Leather Pants — Camo Panel', cat:'Pants', price:159, was:189, img:'assets/prod-pants-1.jpg', badge:'', rating:4.7, reviews:18, colors:['Black / Camo'], desc:'Black moto-style leather pants with camouflage panels, zips, buckles and lacing detail.', feats:['Full-grain hide','Camo side panels','Zip + lace detail','Armoured look']},
 {id:'p80', name:'Classic Leather Pants — Brown', cat:'Pants', price:149, was:0, img:'assets/prod-pants-2.jpg', badge:'', rating:4.8, reviews:24, colors:['Brown'], desc:'Classic straight-leg leather pants in rich brown — the five-pocket jean, rebuilt in hide.', feats:['Full-grain brown hide','Five-pocket style','Straight leg','Moulds to you']},
 {id:'p81', name:'Suede-Look Pants — Tan', cat:'Pants', price:149, was:179, img:'assets/prod-pants-3.jpg', badge:'', rating:4.6, reviews:15, colors:['Tan'], desc:'Tan suede-look pants with a soft matte finish and an easy everyday fit.', feats:['Suede-look finish','Soft hand-feel','Everyday cut','Belt loops']},
 {id:'p82', name:'Hair-On Cowhide Pants', cat:'Pants', price:159, was:0, img:'assets/prod-pants-4.jpg', badge:'', rating:4.8, reviews:12, colors:['Brown / White'], desc:'Hair-on cowhide pants with a bold natural pattern — pure rodeo energy.', feats:['Genuine hair-on hide','One-of-one pattern','Straight leg','Statement wear']},
 {id:'p35', name:'Driving Gloves — Cognac', cat:'Gloves', price:79, was:99, img:'assets/prod-glove-1.jpg', badge:'', rating:4.8, reviews:47, colors:['Cognac'], desc:'Cognac driving gloves with open knuckles and perforated fingers — grip, feel and style in one.', feats:['Soft full-grain hide','Open-knuckle design','Perforated fingers','Wrist strap']},
 {id:'p36', name:'Gauntlet Gloves — Black', cat:'Gloves', price:89, was:0, img:'assets/prod-glove-2.jpg', badge:'', rating:4.8, reviews:33, colors:['Black'], desc:'Black leather gauntlet gloves — fingerless biker arm guards with long protective sleeves.', feats:['Extended gauntlet cuff','Fingerless grip','Arm-guard coverage','Buckle straps']},
 {id:'p37', name:'Shearling Cuff Gloves — Brown', cat:'Gloves', price:89, was:109, img:'assets/prod-glove-3.jpg', badge:'', rating:4.9, reviews:29, colors:['Brown'], desc:'Brown leather gloves with plush shearling cuffs — winter warmth with a soft landing.', feats:['Real shearling cuffs','Full-grain hide','Warm lining','Classic cut']},
 {id:'p38', name:'Fingerless Riding Gloves — Black', cat:'Gloves', price:79, was:0, img:'assets/prod-glove-4.jpg', badge:'', rating:4.7, reviews:38, colors:['Black'], desc:'Black fingerless riding gloves with padded knuckles — controls stay at your fingertips.', feats:['Padded knuckles','Fingerless design','Wrist buckle','Grip palms']},
 {id:'p39', name:'Dress Gloves — Tan', cat:'Gloves', price:79, was:99, img:'assets/prod-glove-5.jpg', badge:'', rating:4.8, reviews:21, colors:['Tan'], desc:'Tan dress gloves in smooth hide with fine stitched detailing — boardroom polish.', feats:['Smooth full-grain','Fine stitch detail','Unlined feel','Tailored fit']},
 {id:'p40', name:'Dress Gloves — Black', cat:'Gloves', price:79, was:0, img:'assets/prod-glove-6.jpg', badge:'', rating:4.8, reviews:26, colors:['Black'], desc:'Black dress gloves with an elasticated wrist — the quiet finishing touch.', feats:['Smooth black hide','Elastic wrist','Classic points','Evening ready']},
 {id:'p68', name:'Hair-On Gloves — Brown & White', cat:'Hair-On Gloves', price:89, was:109, img:'assets/prod-glove-hairon-1.jpg', badge:'', rating:4.7, reviews:14, colors:['Brown / White'], desc:'Hair-on gloves with patterned cuffs — natural markings, serious warmth.', feats:['Genuine hair-on hide','Patterned cuff','Warm lining','Unique pair']},
 {id:'p69', name:'Hair-On Gloves — Natural', cat:'Hair-On Gloves', price:89, was:0, img:'assets/prod-glove-hairon-2.jpg', badge:'', rating:4.7, reviews:11, colors:['Natural'], desc:'Natural hair-on gloves — every pair carries its own hide pattern.', feats:['Real hair-on cowhide','One-of-one pattern','Soft lining','Winter weight']},
 {id:'p41', name:'Classic Waist Belt — Brown', cat:'Belts', price:49, was:59, img:'assets/prod-belt-1.jpg', badge:'', rating:4.8, reviews:58, colors:['Brown'], desc:'A classic brown waist belt with an everyday buckle — the one you will reach for daily.', feats:['Full-grain strap','Classic buckle','5-hole fit','1.5 inch width']},
 {id:'p42', name:'Eyelet Stud Belt — Black', cat:'Belts', price:49, was:0, img:'assets/prod-belt-2.jpg', badge:'', rating:4.7, reviews:36, colors:['Black'], desc:'Black belt with silver-tone eyelets and stud accents — quiet hardware, loud character.', feats:['Full-grain black hide','Silver eyelets','Stud accents','Solid buckle']},
 {id:'p43', name:'Star-Stud Belt — Black', cat:'Belts', price:49, was:59, img:'assets/prod-belt-3.jpg', badge:'Bestseller', rating:4.8, reviews:49, colors:['Black'], desc:'Black belt set with star studs and eyelets over a silver-tone buckle.', feats:['Star stud detail','Silver-tone buckle','Full-grain strap','Statement fit']},
 {id:'p44', name:'Pebbled Belt — Brass Buckle', cat:'Belts', price:49, was:0, img:'assets/prod-belt-4.jpg', badge:'', rating:4.8, reviews:33, colors:['Brown'], desc:'Brown pebbled-grain belt with a warm brass-tone buckle — texture you can feel.', feats:['Pebbled grain hide','Brass-tone buckle','Stitched edges','Everyday width']},
 {id:'p62', name:'Pebbled Belt — Silver Buckle', cat:'Belts', price:49, was:59, img:'assets/prod-belt-6.jpg', badge:'', rating:4.7, reviews:27, colors:['Brown'], desc:'The pebbled brown classic, finished with a cool silver-tone buckle.', feats:['Pebbled grain hide','Silver-tone buckle','Full-grain strap','5-hole fit']},
 {id:'p45', name:'Hair-On Belt — Brown & White', cat:'Hair-On Belts', price:49, was:0, img:'assets/prod-belt-5.jpg', badge:'', rating:4.7, reviews:23, colors:['Brown / White'], desc:'Hair-on belt with natural brown and white markings and a solid brass-tone buckle.', feats:['Genuine hair-on hide','Unique pattern','Brass-tone buckle','Full-grain backing']},
 {id:'p101', name:'Hair-On Belt — Black & White', cat:'Hair-On Belts', price:49, was:59, img:'assets/prod-belt-hairon-2.jpg', badge:'', rating:4.7, reviews:19, colors:['Black / White'], desc:'Black and white hair-on belt — bold spots, honest hide, zero repeats.', feats:['Real hair-on cowhide','One-of-one spots','Solid buckle','Stitched edges']},
 {id:'p63', name:'Milano Briefcase — Dark Brown', cat:'Bags', price:139, was:169, img:'assets/prod-briefcase.jpg', badge:'', rating:4.9, reviews:41, colors:['Dark Brown'], desc:'A structured dark brown briefcase with brass clasps and corner guards — boardroom armour.', feats:['Full-grain hide','Brass clasp closures','Padded laptop sleeve','Corner guards']},
 {id:'p64', name:'Voyager Backpack — Brown', cat:'Bags', price:139, was:0, img:'assets/prod-backpack.jpg', badge:'', rating:4.8, reviews:37, colors:['Brown'], desc:'A buckle-front leather backpack with side pockets — built for commutes and long weekends alike.', feats:['Full-grain cowhide','Buckle flap front','Side pockets','Padded straps']},
 {id:'p65', name:'Weekender Duffle — Tan', cat:'Bags', price:159, was:189, img:'assets/prod-duffle.jpg', badge:'Bestseller', rating:4.9, reviews:55, colors:['Tan'], desc:'Our signature tan weekender with a detachable shoulder strap — cabin-sized, decade-proof.', feats:['Full-grain tan hide','Detachable strap','Cabin friendly','Reinforced base']},
 {id:'p66', name:'Siena Tote — Cognac', cat:'Bags', price:139, was:0, img:'assets/prod-tote.jpg', badge:'', rating:4.8, reviews:44, colors:['Cognac'], desc:'A cognac tote with clean lines and a roomy interior — carries the day without shouting.', feats:['Full-grain cognac hide','Roomy interior','Inner zip pocket','Twin handles']},
 {id:'p67', name:'Voyager Toiletry Bag — Brown', cat:'Bags', price:69, was:89, img:'assets/prod-toiletry.jpg', badge:'', rating:4.7, reviews:39, colors:['Brown'], desc:'A dark brown zip toiletry bag in water-friendly finished hide.', feats:['Full-grain hide','Wide zip opening','Wipe-clean lining','Hanging loop']},
 {id:'p46', name:'Cowhide Tote — Brown & White', cat:'Hair-On Bags', price:139, was:169, img:'assets/prod-bag-hairon-1.jpg', badge:'Bestseller', rating:4.9, reviews:47, colors:['Brown / White'], desc:'Brown and white cowhide tote with a natural hair-on pattern — every bag is the only one of its kind.', feats:['Genuine hair-on hide','One-of-one pattern','Roomy tote shape','Leather handles']},
 {id:'p47', name:'Cowhide Hobo Bag — Black & White', cat:'Hair-On Bags', price:139, was:0, img:'assets/prod-bag-hairon-2.jpg', badge:'', rating:4.8, reviews:35, colors:['Black / White'], desc:'Black and white cow-print hobo bag with a soft slouch and western soul.', feats:['Real hair-on cowhide','Slouchy hobo cut','Shoulder carry','Inner pocket']},
 {id:'p48', name:'Cowhide Tote with Strap — Hair-On', cat:'Hair-On Bags', price:139, was:169, img:'assets/prod-bag-hairon-4.jpg', badge:'', rating:4.8, reviews:29, colors:['Brown / White'], desc:'Hair-on tote with a detachable crossbody strap — two carries, one unrepeatable hide.', feats:['Genuine hair-on hide','Detachable strap','Tote + crossbody','Natural markings']},
 {id:'p102', name:'Cowhide Bucket Bag — Black & White', cat:'Hair-On Bags', price:139, was:0, img:'assets/prod-bag-hairon-5.jpg', badge:'', rating:4.7, reviews:26, colors:['Black / White'], desc:'Black and white cow-print bucket bag with a drawstring top — hands-free western, in real cowhide.', feats:['Real hair-on cowhide','Crossbody strap','Compact size','Zip closure']},
 {id:'p50', name:'Milano Bifold Wallet — Brown', cat:'Wallets', price:69, was:89, img:'assets/prod-wallet.jpg', badge:'', rating:4.9, reviews:63, colors:['Brown'], desc:'A classic brown bifold with card slots on both wings and a full-length note section.', feats:['Full-grain hide','8 card slots','Full note section','Slim profile']},
 {id:'p51', name:'Slim Card Wallet — Tan', cat:'Wallets', price:69, was:0, img:'assets/prod-cardholder.jpg', badge:'', rating:4.8, reviews:57, colors:['Tan'], desc:'A tan slim card wallet for the front-pocket minimalists — six cards, nothing else.', feats:['Full-grain tan hide','6 card slots','Front-pocket slim','Quick-access slot']},
 {id:'p52', name:'Heritage Bifold — Dark Brown', cat:'Wallets', price:69, was:89, img:'assets/prod-wallet-4.jpg', badge:'', rating:4.8, reviews:45, colors:['Dark Brown'], desc:'Dark brown bifold with a deep grain and a satisfyingly solid fold.', feats:['Full-grain hide','Deep natural grain','Note + card space','Gift ready']},
 {id:'p103', name:'Money Clip Wallet — Black', cat:'Wallets', price:69, was:0, img:'assets/prod-wallet-5.jpg', badge:'', rating:4.7, reviews:31, colors:['Black'], desc:'Black card wallet with a steel money clip — cash and cards, nothing more.', feats:['Full-grain black hide','Steel money clip','4 card slots','Ultra slim']},
 {id:'p104', name:'Chain Wallet — Vintage Brown', cat:'Wallets', price:79, was:99, img:'assets/prod-wallet-6.jpg', badge:'', rating:4.8, reviews:28, colors:['Vintage Brown'], desc:'Vintage brown chain wallet with studded flap — biker heritage in your back pocket.', feats:['Full-grain hide','Wallet chain included','Studded flap','Snap closure']},
 {id:'p49', name:'Hair-On Clutch Wallet — Cow Print', cat:'Hair-On Wallets', price:139, was:169, img:'assets/prod-wallet-hairon-1.jpg', badge:'', rating:4.8, reviews:32, colors:['Black / White'], desc:'Black and white cow-print hair-on clutch — part wallet, part handbag, all character.', feats:['Genuine hair-on hide','Clutch + wallet in one','Natural cow print','Secure closure']},
 {id:'p105', name:'Hair-On Wallet — Zebra', cat:'Hair-On Wallets', price:129, was:0, img:'assets/prod-wallet-3.jpg', badge:'', rating:4.7, reviews:17, colors:['Zebra'], desc:'Zebra-pattern hair-on envelope wallet with a snap flap — small bag energy, wallet size.', feats:['Real hair-on hide','Zebra pattern','Snap flap','Card + cash space']},
 {id:'p106', name:'Hair-On Wallet — Natural', cat:'Hair-On Wallets', price:129, was:159, img:'assets/prod-wallet-hairon-2.jpg', badge:'', rating:4.7, reviews:15, colors:['Natural'], desc:'Natural hair-on wallet with markings no other wallet will ever repeat.', feats:['Genuine hair-on hide','One-of-one pattern','Bifold interior','Slim carry']},
 {id:'p53', name:'Key Fob — Cognac', cat:'Accessories', price:39, was:0, img:'assets/prod-acc-1.jpg', badge:'', rating:4.8, reviews:52, colors:['Cognac'], desc:'A cognac leather key fob with solid brass ring and clip — small piece, daily pleasure.', feats:['Full-grain hide','Solid brass hardware','Clip + ring','Gift staple']},
 {id:'p54', name:'Luggage Tag Set — Tan', cat:'Accessories', price:49, was:59, img:'assets/prod-acc-2.jpg', badge:'', rating:4.7, reviews:29, colors:['Tan'], desc:'A pair of tan leather luggage tags with buckle straps — your bags, unmistakably yours.', feats:['Full-grain tan hide','Set of two','Buckle straps','ID window']},
 {id:'p55', name:'Valet Tray — Cognac', cat:'Accessories', price:49, was:0, img:'assets/prod-acc-3.jpg', badge:'', rating:4.9, reviews:34, colors:['Cognac'], desc:'A cognac valet tray that corrals keys, coins and the day’s small chaos in one handsome square.', feats:['Full-grain hide','Snap corners','Desk + dresser ready','Ages beautifully']},
 {id:'p83', name:'Top Hat — Black', cat:'Hats & Caps', price:89, was:109, img:'assets/prod-hat-1.jpg', badge:'Limited', rating:4.9, reviews:16, colors:['Black'], desc:'A black leather top hat with a mirror shine — steampunk ceremonies and bold entrances.', feats:['Full-grain hide','Structured crown','Smooth brim','Statement piece']},
 {id:'p84', name:'Hair-On Cap — Brown & White', cat:'Hats & Caps', price:79, was:0, img:'assets/prod-hat-2.jpg', badge:'', rating:4.7, reviews:22, colors:['Brown / White'], desc:'Brown and white hair-on baseball cap — ranch pattern, street fit.', feats:['Genuine hair-on hide','Natural pattern','Adjustable strap','Six-panel cut']},
 {id:'p85', name:'Flat Cap — Brown', cat:'Hats & Caps', price:79, was:99, img:'assets/prod-hat-3.jpg', badge:'', rating:4.8, reviews:27, colors:['Brown'], desc:'A brown leather flat cap with a soft broken-in feel — heritage headwear, daily comfort.', feats:['Full-grain hide','Classic flat profile','Warm lining','Timeless style']},
 {id:'p86', name:'Hair-On Cap — Black & White', cat:'Hats & Caps', price:79, was:0, img:'assets/prod-hat-4.jpg', badge:'', rating:4.7, reviews:19, colors:['Black / White'], desc:'Black and white hair-on cap — bold spots on a clean six-panel shape.', feats:['Real hair-on cowhide','One-of-one spots','Adjustable fit','Curved brim']},
 {id:'p87', name:'Tooled Dog Collar — Brown', cat:'Dog Collars & Harnesses', price:49, was:59, img:'assets/prod-dog-1.jpg', badge:'', rating:4.9, reviews:44, colors:['Brown'], desc:'A hand-tooled brown leather dog collar with a solid brass buckle — as handsome as its owner.', feats:['Full-grain hide','Hand-tooled pattern','Brass buckle','D-ring included']},
 {id:'p88', name:'Studded Dog Collar — Black', cat:'Dog Collars & Harnesses', price:49, was:0, img:'assets/prod-dog-2.jpg', badge:'', rating:4.8, reviews:37, colors:['Black'], desc:'Black studded collar with pyramid hardware — small dog, big attitude.', feats:['Full-grain black hide','Pyramid studs','Secure buckle','Padded comfort']},
 {id:'p89', name:'Leather Dog Harness — Brown', cat:'Dog Collars & Harnesses', price:59, was:69, img:'assets/prod-dog-3.jpg', badge:'', rating:4.9, reviews:31, colors:['Brown'], desc:'A brown leather step-in harness with brass fittings — control without the choke.', feats:['Full-grain hide','Step-in design','Brass fittings','Even pressure']},
 {id:'p90', name:'Hair-On Dog Collar', cat:'Dog Collars & Harnesses', price:49, was:0, img:'assets/prod-dog-4.jpg', badge:'', rating:4.7, reviews:18, colors:['Brown / White'], desc:'Hair-on cowhide dog collar with natural markings — the best-dressed dog on the trail.', feats:['Genuine hair-on hide','Unique pattern','Brass buckle','D-ring included']},
 {id:'p91', name:'Cowhide Rug — Brown & White', cat:'Hair-On Rugs', price:159, was:189, img:'assets/prod-rug-1.jpg', badge:'Bestseller', rating:4.9, reviews:39, colors:['Brown / White'], desc:'A full brown and white cowhide rug — natural shape, natural markings, instant warmth for any floor.', feats:['Genuine full hide','Natural shape','One-of-one pattern','Floor + throw use']},
 {id:'p92', name:'Cowhide Rug — Tricolor', cat:'Hair-On Rugs', price:159, was:0, img:'assets/prod-rug-2.jpg', badge:'', rating:4.8, reviews:24, colors:['Tricolor'], desc:'Tricolor cowhide rug with a rich natural layout — the room’s new centrepiece.', feats:['Real cowhide','Tricolor markings','Generous size','Lies flat']},
 {id:'p93', name:'Cowhide Rug — Spotted', cat:'Hair-On Rugs', price:129, was:159, img:'assets/prod-rug-3.jpg', badge:'', rating:4.8, reviews:21, colors:['Spotted'], desc:'A spotted cowhide rug in a smaller footprint — apartment-sized ranch character.', feats:['Genuine hide','Natural spotting','Compact size','Easy care']},
 {id:'p94', name:'Underbust Corset — Brown', cat:'Corsets', price:109, was:129, img:'assets/prod-corset-1.jpg', badge:'', rating:4.8, reviews:26, colors:['Brown'], desc:'A brown leather underbust corset with structured boning and back lacing.', feats:['Full-grain hide','Steel boning','Back lacing','Shaped waist']},
 {id:'p95', name:'Steampunk Corset — Dark Brown', cat:'Corsets', price:109, was:0, img:'assets/prod-corset-2.jpg', badge:'', rating:4.8, reviews:22, colors:['Dark Brown'], desc:'Dark brown steampunk corset with buckle details — costume drama, real leather.', feats:['Full-grain hide','Buckle accents','Structured fit','Back lacing']},
 {id:'p96', name:'Waist Cincher Corset — Black', cat:'Corsets', price:109, was:129, img:'assets/prod-corset-3.jpg', badge:'', rating:4.7, reviews:19, colors:['Black'], desc:'Black leather waist cincher with clean lines and a firm, comfortable hold.', feats:['Full-grain black hide','Firm shaping','Hook + lace fit','Smooth finish']},
 {id:'p97', name:'Tooled Corset — Cognac', cat:'Corsets', price:109, was:0, img:'assets/prod-corset-4.jpg', badge:'', rating:4.9, reviews:15, colors:['Cognac'], desc:'Cognac corset with tooled-style detailing — the statement piece of the collection.', feats:['Premium cognac hide','Tooled-style detail','Steel boning','Back lacing']},
 {id:'p98', name:'Vintage Leather Football — Brown', cat:'Footballs', price:79, was:99, img:'assets/prod-ball-1.jpg', badge:'', rating:4.8, reviews:29, colors:['Brown'], desc:'A hand-stitched vintage-style leather football in rich brown hide — display it or play it.', feats:['Full-grain hide','Hand-stitched panels','Vintage profile','Display ready']},
 {id:'p99', name:'Leather Football — Black & Tan', cat:'Footballs', price:79, was:0, img:'assets/prod-ball-2.jpg', badge:'', rating:4.7, reviews:21, colors:['Black / Tan'], desc:'Black and tan panelled leather football with a classic match-ball silhouette.', feats:['Full-grain panels','Two-tone design','Hand stitching','Gift favourite']},
 {id:'p100', name:'Leather Football — White & Gold', cat:'Footballs', price:79, was:99, img:'assets/prod-ball-3.jpg', badge:'', rating:4.8, reviews:17, colors:['White / Gold'], desc:'White and gold leather football — a collector’s piece with pitch presence.', feats:['Full-grain hide','White + gold panels','Hand-stitched','Collector grade']},
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
 shipping:{t:'Shipping & Delivery', b:['Every price on Pellefina already includes delivery — there are no shipping charges at checkout, on any order, anywhere in the world.','Pieces are handcrafted and dispatched from our Pakistan workshop; please allow around 12–17 business days in total for crafting and tracked international delivery.','You receive tracking by email the moment your order leaves our bench.']},
 returns:{t:'Returns & Exchanges', b:['You have 30 days to change your mind. Pieces must be unused and in their original condition.','To start a return, contact us on WhatsApp or email with your order number and we will guide you through it.','Refunds are issued to your original payment method within 7 days of the piece arriving back with us.']},
 warranty:{t:'Our Craft Promise', b:['Every Pellefina piece is cut, stitched and finished by hand in small batches — never mass-produced.','Before dispatch, each piece passes a 12-point quality check: hide, stitching, hardware, zips and finish.','Leather ageing, patina and character marks are not defects — they are the signature of real full-grain hide.']},
 privacy:{t:'Privacy Policy', b:['We collect only the details needed to fulfil your order: name, contact information and delivery address.','Your details are never sold. They are used for delivery, order updates and — only if you join The Hide List — our monthly letter.','You may request deletion of your details at any time by contacting us.']},
};

/* ---------- state ---------- */
const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
let products = load(LS.p, null);
const SEED_V = '6';
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

function rotateHero(){
  const cats = ['Jackets','Hair-On Jackets','Coats','Chaps','Hair-On Chaps','Bags','Hair-On Bags','Vests','Hair-On Vests'];
  const pool = products.filter(p => cats.includes(p.cat));
  if (!pool.length) return;
  const p = pool[Math.floor(Math.random() * pool.length)];
  const img = document.querySelector('#heroCard img');
  if (img){ img.src = p.img; img.alt = 'Pellefina ' + p.name; }
  const foot = document.querySelector('.hero-card-foot');
  if (foot){
    foot.querySelector('strong').textContent = p.name.split(' — ')[0];
    foot.querySelector('span').textContent = p.cat + ' · Premium full-grain hide';
    const pr = foot.querySelector('.hero-price');
    pr.dataset.price = p.price; pr.textContent = money(p.price);
  }
}
function renderCraftRows(){
  const el = $('#craftRows'); if (!el) return;
  const rows = [
    {t:'Bestsellers', sub:'The pieces our customers reach for first', items: products.filter(p => p.badge === 'Bestseller').concat(products.filter(p => p.rating >= 4.9 && p.badge !== 'Bestseller')).slice(0, 8)},
    {t:'The Hair-On Collection', sub:'Real cowhide — every pattern one of one', items: products.filter(p => p.cat.startsWith('Hair-On')).slice(0, 8)},
    {t:'Everyday Essentials', sub:'Honest leather under $90', items: products.filter(p => p.price < 90).slice(0, 8)}
  ];
  el.innerHTML = rows.map(r => `<div class="p-row reveal"><div class="p-row-head"><h3>${r.t}</h3><span>${r.sub}</span></div><div class="row-strip">${r.items.map(cardHTML).join('')}</div></div>`).join('');
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
  $('#shopCount').textContent = list.length + (list.length === 1 ? ' piece' : ' pieces') + ' · full-grain leather, inspected piece by piece';
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
  $('#shipMsg').innerHTML = '🎉 <strong>Delivery is included</strong> in every price — no shipping charges, ever';
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
  const sub = cartTotal(), ship = 0;
  $('#coSubtotal').textContent = money(sub);
  $('#coShipping').textContent = sub ? 'Included' : money(0);
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
  const sub = cartTotal(), ship = 0;
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
$('#marqueeTrack').innerHTML = Array(2).fill(['Full-Grain Leather', 'Saddle-Stitched Seams', 'Solid Brass Hardware', 'Handcrafted in Small Batches', 'Free Worldwide Delivery — Always Included', '30-Day Easy Returns'].map(t => `<span>${t} ◆</span>`).join('')).join('');

/* init */
fillCats(); renderFeatured(); rotateHero(); renderCraftRows(); document.querySelectorAll('#craftRows .reveal').forEach(el => io.observe(el)); renderShop(); renderGrades(); renderQuotes(); restartQuotes(); updateBadges(); renderCart();
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
