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
      name: 'Lip Balm',
      category: 'skin-care',
      price: 1514.95,
      oldPrice: 2018.95,
      image: '/images/products/lipbalm.jpg',
      description: 'Hydrating lip balm with natural oils and butters to nourish and protect dry lips.',
      ingredients: ['Shea Butter', 'Coconut Oil', 'Beeswax', 'Vitamin E', 'Jojoba Oil'],
      howToUse: 'Apply to lips as needed throughout the day. For best results, use before bed for overnight hydration.',
      isSale: true
    },
    {
      id: 'p2',
      name: 'Micellar Conditioner',
      category: 'hair-care',
      price: 2229.95,
      image: '/images/products/MicellarConditioner.jpg',
      description: 'A lightweight conditioner that detangles and hydrates hair without weighing it down.',
      ingredients: ['Aloe Vera', 'Glycerin', 'Panthenol', 'Plant-derived Micelles', 'Argan Oil'],
      howToUse: 'After shampooing, apply to wet hair from mid-lengths to ends. Leave for 2-3 minutes before rinsing thoroughly.'
    },
    {
      id: 'p3',
      name: 'Turmeric Under-Eye Renewal',
      category: 'skin-care',
      price: 2539.95,
      image: '/images/products/TurmericRenewal.jpg',
      description: 'Brightening under-eye treatment with turmeric and vitamin C to reduce dark circles and puffiness.',
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