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
      price: 2615.00,
      // oldPrice: 3019.95,
      image: '/images/products/KUMKUMADINIGHTSERUM.jpg',
      description: 'MYHERB`S KUMKUMADI NIGHT SERUM is made up with the goodness of 24 herbs. It is renowned for its potential benefits in improving the complexion and overall skin health.',
      ingredients: [' Kumkumadi oil is typically made from a blend of various natural ingredients, with saffron (Kesar) being a prominent component.', 'red sandalwood', 'hibiscus', 'orange peel', 'manjistha', 'venivel', 'cardamom', 'lotus', ' several other herbs and olive oil', 'grapeseed oil', 'almond oil'],
      howToUse: 'Apply few drops of Kumkumadi Night Serum on clean face & gently massage upward, keep it for 3-4 hours and wash it with mild cleanser.Not recommended for sensitive skin.',
      // isSale: true
    },
    {
      id: 'p5',
      name: 'Body Lotion',
      category: 'skin-care',
      price: 4225.95,
      image: '/images/products/BodyLotion.jpg',
      description: 'Rich and hydrating body lotion that absorbs quickly for silky-smooth skin.',
      ingredients: ['Shea Butter', 'Coconut Oil', 'Aloe Vera', 'Vitamin E', 'Essential Oils'],
      howToUse: 'Apply to clean, dry skin and massage until absorbed. Use daily for best results.',
      isNew: true
    },
    {
      id: 'p6',
      name: 'Everything Body Soap',
      category: 'skin-care',
      price: 1119.95,
      image: '/images/body-soap.jpg',
      description: 'Gentle cleansing bar suitable for face, body, and even hair. Fragrance-free and pH balanced.',
      ingredients: ['Saponified Oils', 'Glycerin', 'Kaolin Clay', 'Oatmeal', 'Chamomile Extract'],
      howToUse: 'Lather between hands or on a washcloth and apply to wet skin. Rinse thoroughly.'
    },
    {
      id: 'p7',
      name: 'Micellar Shampoo',
      category: 'skin-care',
      price: 1528.95,
      oldPrice: 2232.95,
      image: '/images/shampoo.jpg',
      description: 'Gentle cleansing shampoo that removes buildup without stripping natural oils.',
      ingredients: ['Plant-derived Micelles', 'Aloe Vera', 'Chamomile Extract', 'Panthenol', 'Glycerin'],
      howToUse: 'Apply to wet hair and massage into scalp. Rinse thoroughly. Follow with conditioner.',
      isSale: true
    }
  ];