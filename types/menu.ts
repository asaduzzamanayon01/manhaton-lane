export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface MenuItems {
  [category: string]: MenuItem[];
} 