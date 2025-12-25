export enum MenuCategory {
  STARTERS = 'Starters',
  MAINS = 'Main Course',
  BREADS = 'Breads',
  RICE = 'Rice & Biryani',
  BEVERAGES = 'Beverages & Desserts'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  isVegetarian: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  image?: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
  hours: string[];
}