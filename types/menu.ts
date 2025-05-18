export type Category = 'burgers' | 'steaks' | 'chicken' | 'sides' | 'drinks';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
}

export type MenuItems = {
  [K in Category]: MenuItem[];
}

export type MenuItemSlug = string;

export function createSlug(name: string): MenuItemSlug {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function getSlugFromItem(item: MenuItem): MenuItemSlug {
  return createSlug(item.name);
} 