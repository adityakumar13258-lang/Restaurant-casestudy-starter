import { MenuItem, MenuCategory, RestaurantInfo } from './types';

// ==========================================
// CONFIGURATION: UPDATE DETAILS HERE
// ==========================================

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "The Saffron Table",
  tagline: "Authentic Flavors, Timeless Traditions",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  address: "12/B, Spice Garden Road, Indiranagar, Bangalore - 560038",
  // Generic embed URL for Bangalore - Replace with specific restaurant embed
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.6385!3d12.9719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin",
  hours: [
    "Mon - Sun: 11:30 AM – 3:30 PM",
    "Mon - Sun: 7:00 PM – 11:00 PM"
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 's1',
    name: 'Paneer Tikka',
    description: 'Cottage cheese cubes marinated in yogurt and spices, grilled to perfection in a tandoor.',
    price: 320,
    category: MenuCategory.STARTERS,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 's2',
    name: 'Chicken Seekh Kebab',
    description: 'Minced chicken spiced with herbs, skewered and grilled.',
    price: 380,
    category: MenuCategory.STARTERS,
    isVegetarian: false,
    isPopular: true
  },
  {
    id: 's3',
    name: 'Samosa Platter',
    description: 'Crispy pastry filled with spiced potatoes and peas, served with mint chutney.',
    price: 180,
    category: MenuCategory.STARTERS,
    isVegetarian: true
  },
  {
    id: 's4',
    name: 'Hara Bhara Kebab',
    description: 'Spinach and green pea patties, shallow fried.',
    price: 290,
    category: MenuCategory.STARTERS,
    isVegetarian: true
  },

  // MAINS
  {
    id: 'm1',
    name: 'Butter Chicken',
    description: 'Tandoori chicken simmered in a rich, creamy tomato gravy.',
    price: 450,
    category: MenuCategory.MAINS,
    isVegetarian: false,
    isPopular: true
  },
  {
    id: 'm2',
    name: 'Dal Makhani',
    description: 'Black lentils slow-cooked overnight with butter and cream.',
    price: 340,
    category: MenuCategory.MAINS,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'm3',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cubes in a rich tomato and cashew gravy.',
    price: 360,
    category: MenuCategory.MAINS,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'm4',
    name: 'Rogan Josh',
    description: 'Traditional Kashmiri lamb curry cooked with aromatic spices.',
    price: 520,
    category: MenuCategory.MAINS,
    isVegetarian: false,
    isSpicy: true
  },
  {
    id: 'm5',
    name: 'Palak Paneer',
    description: 'Fresh cottage cheese in a smooth spinach gravy.',
    price: 350,
    category: MenuCategory.MAINS,
    isVegetarian: true
  },

  // BREADS
  {
    id: 'b1',
    name: 'Butter Naan',
    description: 'Soft, leavened bread baked in tandoor with butter.',
    price: 60,
    category: MenuCategory.BREADS,
    isVegetarian: true
  },
  {
    id: 'b2',
    name: 'Garlic Naan',
    description: 'Leavened bread topped with chopped garlic and coriander.',
    price: 75,
    category: MenuCategory.BREADS,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'b3',
    name: 'Tandoori Roti',
    description: 'Whole wheat bread baked in a clay oven.',
    price: 45,
    category: MenuCategory.BREADS,
    isVegetarian: true
  },

  // RICE
  {
    id: 'r1',
    name: 'Chicken Dum Biryani',
    description: 'Basmati rice cooked with marinated chicken and aromatic spices on slow fire.',
    price: 420,
    category: MenuCategory.RICE,
    isVegetarian: false,
    isPopular: true
  },
  {
    id: 'r2',
    name: 'Jeera Rice',
    description: 'Basmati rice tempered with cumin seeds.',
    price: 180,
    category: MenuCategory.RICE,
    isVegetarian: true
  },
  {
    id: 'r3',
    name: 'Veg Biryani',
    description: 'Aromatic rice cooked with mixed vegetables and herbs.',
    price: 320,
    category: MenuCategory.RICE,
    isVegetarian: true
  },

  // BEVERAGES
  {
    id: 'd1',
    name: 'Mango Lassi',
    description: 'Thick, creamy yogurt drink blended with sweet mango pulp.',
    price: 120,
    category: MenuCategory.BEVERAGES,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'd2',
    name: 'Masala Chai',
    description: 'Traditional Indian tea brewed with spices and milk.',
    price: 50,
    category: MenuCategory.BEVERAGES,
    isVegetarian: true
  },
  {
    id: 'd3',
    name: 'Gulab Jamun (2 pcs)',
    description: 'Fried milk dumplings soaked in sugar syrup.',
    price: 110,
    category: MenuCategory.BEVERAGES,
    isVegetarian: true
  }
];