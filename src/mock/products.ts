// src/mock/products.ts
export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    oldPrice?: number;
    description: string;
    image: string;
    isNew?: boolean;
    isSale?: boolean;
    ingredients?: string[];
    howToUse?: string;
  }
  
  export const products: Product[] = [
    {
      id: 'p1',
      name: 'BRIGHTENING FACE GEL',
      category: 'skin-care',
      price:  550.00,
      image: '/images/products/BRIGHTENINGFACEGEL.jpg',
      description: ' MYHERB`S BRIGHTENING FACE GEL, not only brightens your skin, but it can also help slow down early skin aging, prevent sun damage, and reduce the appearance of wrinkles, dark spots, and acne.',
      ingredients: ['Aqua', 'Vitamin C', 'Turmeric', 'Orange Essential Oil', 'Vitamin E'],
      howToUse: '1. Apply the Brightening Face Gel  (on the clean face) as often as necessary, anytime you need. 2. Can use in day and night. (Avoid direct sunlight) 3. Use everyday for better result',
    },
    {
      id: 'p2',
      name: 'ACNE CLEAR FACE GEL',
      category: 'skin-care',
      price: 550.00,
      image: '/images/products/ACNECLEARFACEGEL.jpg',
      description: 'MYHERB`S ACNE CLEAR FACE GEL,  a powerful blend of neem oil, tea tree oil, and turmeric oil, working synergistically to address acne-related concerns. Neem oil`s antibacterial properties help fight acne-causing bacteria, while tea tree oil`s antimicrobial nature aids in reducing inflammation and promoting clearer skin. Turmeric oil adds its anti-inflammatory and antioxidant benefits, providing a comprehensive solution for acne-prone skin. This lightweight face gel aims to soothe, heal, and nourish, leaving your skin refreshed and blemish-free.',
      ingredients: ['Aqua ', 'Neem', 'Turmeric', 'Tea tree essential oil', 'Vitamin E'],
      howToUse: '1. Apply the Acne Clear Gell  (on the clean face) as often as necessary, anytime you need. 2. Can use in day and night. 3. Use everyday for better result'
    },
    {
      id: 'p3',
      name: 'DARK CIRCLE REMOVER',
      category: 'skin-care',
      price: 1050.00,
      image: '/images/products/DARKCIRCLEREMOVER.jpg',
      description: 'MYHERB`S DARK CIRCLE REMOVER Transform tired eyes with our revolutionary Dark Circle Remover! Unveil a brighter, more youthful gaze as our potent formula works its magic. Say goodbye to shadows and hello to radiant confidence. Embrace the beauty of refreshed eyes with our must-have serum.',
      ingredients: ['Turmeric Extract', 'Vitamin C', 'Caffeine', 'Hyaluronic Acid', 'Peptide Complex'],
      howToUse: '1. Take a drop of the serum on to your finger tip. 2. Apply it on the area around your eye, gently and dab it lightly until absorbed.3. Apply daily for better results.',
    },
    {
      id: 'p4',
      name: 'KUMKUMADI NIGHT SERUM',
      category: 'skin-care',
      price: 1030.00,
      // oldPrice: 3019.95,
      image: '/images/products/KUMKUMADINIGHTSERUM.jpg',
      description: 'MYHERB`S KUMKUMADI NIGHT SERUM is made up with the goodness of 24 herbs. It is renowned for its potential benefits in improving the complexion and overall skin health.',
      ingredients: [' Kumkumadi oil is typically made from a blend of various natural ingredients, with saffron (Kesar) being a prominent component.', 'red sandalwood', 'hibiscus', 'orange peel', 'manjistha', 'venivel', 'cardamom', 'lotus', ' several other herbs and olive oil', 'grapeseed oil', 'almond oil'],
      howToUse: 'Apply few drops of Kumkumadi Night Serum on clean face & gently massage upward, keep it for 3-4 hours and wash it with mild cleanser.Not recommended for sensitive skin.',
      // isSale: true
    },
    {
      id: 'p5',
      name: 'AQUA GLOW SERUM',
      category: 'skin-care',
      price: 1200.00      ,
      image: '/images/products/AQUAGLOWSERUM.jpg',
      description: 'Your ultimate glow-up partner is finally here!💖🥳  We’ve been listening, working tirelessly &  perfecting a formula that your skin has been waiting for—and it’s worth the wait.',
      ingredients: [' Niacinamide: The ultimate multitasker that brightens, soothes, and strengthens your skin barrier. Say goodbye to redness, dullness, acne scars & uneven tone.', 'Alpha Arbutin: Your secret weapon against dark spots & pigmentation, giving you a smooth, radiant complexion.', 'Hyaluronic Acid: The hydration hero that plumps your skin, leaving it soft, dewy & deeply nourished.'],
      howToUse: 'Take out an adequate amount then gently apply along the skin texture the center of the face outwards, lightly pat the skin🌟Pregnant safe✅🌟For all skin types✅',
      // isNew: true
    },
    {
      id: 'p6',
      name: 'SAFFRON DAY CREAM',
      category: 'skin-care',
      price: 1000.00,
      image: '/images/products/SAFFRONDAYCREAM.jpg',
      description: 'MYHERB’S SAFFRON DAY CREAM, is designed to nourish and protect your skin throughout the day. Infused with the goodness of saffron extract, it helps to brighten and even out your complexion, while also providing essential hydration. This cream is enriched with antioxidants and moisturizing ingredients to combat the effects of environmental stressors and maintain a youthful, radiant appearance and is an excellent addition to your daily skincare routine."',
      ingredients: ['Aqua', 'Saffron', 'Sandalwood', 'Almond Oil', 'Rose Oil', 'Rosehip Oil', 'Vitamin E & Essential Oils'],
      howToUse: 'Gently apply the SAFFRON DAY CREAM on your face and neck. Massage it in with gentle upward strokes until fully absorbed. Use twice a day.'
    },
    {
      id: 'p7',
      name: 'FACIAL HAIR REMOVAL PACK',
      category: 'skin-care',
      price: 580.00,
      // oldPrice: 2232.95,
      image: '/images/products/FACIALHAIRREMOVAL.jpg',
      description: 'MYHERB’S FACIAL HAIR REMOVAL PACK, a natural solution for smooth, hair-free skin. Crafted with a blend of herbal powders known for their gentle yet effective hair removal properties, this pack offers a rejuvenating alternative to traditional methods. Discover the beauty of herbal care with each application, Embrace the power of nature for a softer, silkier you.',
      ingredients: ['Turmeric', 'Poolan kilangu', 'Chamomile Extract', 'Kuppaimeni and some more'],
      howToUse: '1. Mix one tbsp of Facepack powder with water/ rose water/ curd 2. Apply to the required area (upper lip,chin,sidelock) 3. Leave it for 20-30 minutes. 4. Wash off with water. 5. Can be used 3 -4 times a week.',
      // isSale: true
    },
    {
      id: 'p8',
      name: 'BRIGHTENING FACE PACK',
      category: 'skin-care',
      price: 680.00,
      image: '/images/products/BRIGHTENINGFACEPACK.jpg',
      description: 'MYHERB`S BRIGHTENING FACE PACK, meticulously crafted with 13 potent herbal powders including Velmi Venivel, Manjistha, Multani, Sandalwood and some more. Unleash the power of nature to rejuvenate your skin, leaving it visibly brighter and refreshed.',
      ingredients: ['Vitamin C', 'Hyaluronic Acid', 'Ferulic Acid', 'Vitamin E', 'Botanical Extracts'],
      howToUse: '1. Mix one tbsp of BRIGHTENING FACE PACK powder with water/ rosewater/milk/honey 2. Apply to the clean face & neck. 3. Leave on for 15-20minutes. 4. Wash it with water.'
    },
    {
      id: 'p9',
      name: 'GOLDEN HAIR OIL',
      category: 'hair-care',
      price: 580.00,
      image: '/images/products/GOLDENHAIROIL.jpg',
      description: 'MYHERB`s GOLDEN HAIR OIL is a carefully curated blend of nature`s finest ingredients, featuring Coconut oil, Castor oil, Almond oil, Black seed oil, Fenugreek & Essential oils.',
      ingredients: ['Coconut oil', 'Castor oil', 'Almond oil', 'Black seed oil', 'Fenugreek & Essential oils'],
      howToUse: '1. Take needed amount of oil 2. Apply on the scalp 3. Massage the scalp gently 4. Can use it before bedtime/ keep it at least 1 hour on the scalp5. Rinse off with mild shampoo'
    },
    {
      id: 'p10',
      name: 'EYEBROW & EYELASH GROWTH SERUM',
      category: 'skin-care',
      price: 700.00,
      image: '/images/products/EYEBROW & EYELASH GROWTH SERUM.jpg',
      description: 'MYHERB`s EYEBROW & EYELASH GROWTH SERUM,Enriched with nourishing castor oil, almond oil, and vitamin E, it stimulates follicles for fuller, healthier eyebrows and longer, thicker eyelashes. Transform your beauty routine with this natural, effective solution. Experience luscious lashes and defined brows with our growth serum.',
      ingredients: ['Shea Butter', 'Coconut Oil', 'Aloe Vera', 'Vitamin E', 'Essential Oils'],
      howToUse: 'Squeeze one drop on to your finger or a cotton swab and gently massage into eyebrow or lash line. It is best to do this at night to let it work overnight.'
    },
    {
      id: 'p11',
      name: 'BEETROOT LIP SCRUB',
      category: 'skin-care',
      price: 820.00,
      image: '/images/products/BEETROOTLIPSCRUB.jpg',
      description: 'Revitalize your lips with our luxurious Beetroot Lip Scrub. This gentle exfoliating scrub buffs away dry, flaky skin, leaving your lips soft & smooth. Enjoy the sweet, earthy aroma as it nourishes and moisturizes, revealing a radiant, healthy-looking pout. Say goodbye to chapped lips and hello to luscious hydration with our Beetroot Lip Scrub.',
      ingredients: ['Beetroot powder', 'Brown sugar', 'Shea butter', 'Cocoa butter', 'Beeswax', 'Almond oil', 'Coconut oil'],
      howToUse: 'Apply needed amount of BEETROOT LIP SCRUB on lips, gently scrub in circular motion for few minutes, then wipe of with wet towel.'
    },
    {
      id: 'p12',
      name: 'PINK LIP BALM',
      category: 'skin-care',
      price: 550.00,
      image: '/images/products/PINKLIPBALM.jpg',
      description: ' MYHERB`S PINK LIP BALM, Experience a delicate pink tint that enhances your lip`s natural beauty, courtesy of the alkanet root infusion.',
      ingredients: ['Alkanet root', 'Almond oil', 'Rose Oil', 'Shea Butter', 'Beeswax & Honey'],
      howToUse: 'For best results, apply generously on lips before bedtime, Can apply day & night.'
    },
    {
      id: 'p13',
      name: 'MYHERB’S PIMPLE CURE',
      category: 'combo-pack',
      price: 2330.00,
      image: '/images/products/PIMPLECURE.jpg',
      description: 'Long-lasting nail polish that delivers high-shine color in a single coat.',
      ingredients: ['Butyl Acetate', 'Ethyl Acetate', 'Nitrocellulose', 'Acetyl Tributyl Citrate', 'Isopropyl Alcohol'],
      howToUse: 'Apply to clean, dry nails and allow to dry. Apply a second coat for more intense color.'
    },
    {
      id: 'p14',
      name: 'MYHERB’S BRIGHTENING SOLUTION',
      category: 'combo-pack',
      price: 2380.00,
      image: '/images/products/BRIGHTENINGSOLUTION.jpg',
      description: 'Nourishing cuticle oil that softens and conditions dry, cracked cuticles.',
      ingredients: ['Jojoba Oil', 'Vitamin E', 'Lavender Oil', 'Rosemary Oil', 'Tea Tree Oil'],
      howToUse: 'Apply to cuticles and massage until absorbed. Use daily for best results.'
    }
  ];