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
      price: 2539.95,
      image: '/images/products/DARKCIRCLEREMOVER.jpg',
      description: 'MYHERB`S DARK CIRCLE REMOVER Transform tired eyes with our revolutionary Dark Circle Remover! Unveil a brighter, more youthful gaze as our potent formula works its magic. Say goodbye to shadows and hello to radiant confidence. Embrace the beauty of refreshed eyes with our must-have serum.',
      ingredients: ['Turmeric Extract', 'Vitamin C', 'Caffeine', 'Hyaluronic Acid', 'Peptide Complex'],
      howToUse: 'Gently pat a small amount around the eye area morning and evening. Avoid direct contact with eyes.',
      isNew: true
    },
    {
      id: 'p4',
      name: 'Nail Polish: Alveolar',
      category: 'nail-polish',
      price: 2615.00,
      oldPrice: 3019.95,
      image: '/images/products/NailPolish.jpg',
      description: 'A soft, muted pink shade for a natural and elegant look. 10-free formula.',
      ingredients: ['Butyl Acetate', 'Ethyl Acetate', 'Nitrocellulose', 'Plant-based Polymers'],
      howToUse: 'Apply base coat first. Follow with two thin coats of color, allowing each to dry. Finish with top coat for longer wear.',
      isSale: true
    },
    {
      id: 'p5',
      name: 'Body Lotion',
      category: 'body-care',
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
      category: 'body-care',
      price: 1119.95,
      image: '/images/body-soap.jpg',
      description: 'Gentle cleansing bar suitable for face, body, and even hair. Fragrance-free and pH balanced.',
      ingredients: ['Saponified Oils', 'Glycerin', 'Kaolin Clay', 'Oatmeal', 'Chamomile Extract'],
      howToUse: 'Lather between hands or on a washcloth and apply to wet skin. Rinse thoroughly.'
    },
    {
      id: 'p7',
      name: 'Micellar Shampoo',
      category: 'hair-care',
      price: 1528.95,
      oldPrice: 2232.95,
      image: '/images/shampoo.jpg',
      description: 'Gentle cleansing shampoo that removes buildup without stripping natural oils.',
      ingredients: ['Plant-derived Micelles', 'Aloe Vera', 'Chamomile Extract', 'Panthenol', 'Glycerin'],
      howToUse: 'Apply to wet hair and massage into scalp. Rinse thoroughly. Follow with conditioner.',
      isSale: true
    }
  ];