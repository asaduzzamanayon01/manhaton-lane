import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { MenuItems } from '@/types/menu'

const menuItems: MenuItems = {
  burgers: [
    {
      name: 'Manhattan Burger',
      description: 'Premium beef patty, lettuce, tomato, cheese, special sauce',
      price: '$18.90',
      image: '/manhattan-burger.jpeg',
      category: 'burgers'
    },
    {
      name: 'Lane Burger',
      description: 'Double beef patty, bacon, cheese, caramelized onions',
      price: '$21.90',
      image: '/lane-burger.jpeg',
      category: 'burgers'
    },
    {
      name: 'Aussie Burger',
      description: 'Beef patty, beetroot, egg, bacon, cheese, BBQ sauce',
      price: '$19.90',
      image: '/aussie-burger.jpeg',
      category: 'burgers'
    },
    {
      name: 'Original Burger',
      description: 'Classic beef patty with cheese and our signature sauce',
      price: '$16.90',
      image: '/original-burger.jpeg',
      category: 'burgers'
    }
  ],
  steaks: [
    {
      name: 'Rump Steak',
      description: '300g grain-fed rump steak cooked to your liking',
      price: '$32.90',
      image: '/rump-steak.jpeg',
      category: 'steaks'
    },
    {
      name: 'Mixed Grill',
      description: 'Steak, sausage, chicken, bacon, and grilled vegetables',
      price: '$38.90',
      image: '/mix-grill.jpeg',
      category: 'steaks'
    }
  ],
  chicken: [
    {
      name: 'Spicy Parmy Schnitzel',
      description: 'Crumbed chicken schnitzel with spicy sauce and melted cheese',
      price: '$24.90',
      image: '/spicy-parmy-schniztel.jpeg',
      category: 'chicken'
    },
    {
      name: 'Chicken Tenders',
      description: 'Crispy chicken tenders with choice of sauce',
      price: '$16.90',
      image: '/chicken-tenders.jpeg',
      category: 'chicken'
    },
    {
      name: 'Buffalo Nibbles',
      description: 'Spicy buffalo chicken bites with blue cheese sauce',
      price: '$15.90',
      image: '/buffalo-nibbles.jpeg',
      category: 'chicken'
    }
  ],
  sides: [
    {
      name: 'Fries',
      description: 'Crispy golden fries with seasoning',
      price: '$6.90',
      image: '/fries.jpeg',
      category: 'sides'
    },
    {
      name: 'Wedges',
      description: 'Seasoned potato wedges with sour cream and sweet chili',
      price: '$8.90',
      image: '/wedges.jpeg',
      category: 'sides'
    },
    {
      name: 'Garlic Bread',
      description: 'Toasted bread with garlic butter',
      price: '$6.90',
      image: '/garlic-bread.jpeg',
      category: 'sides'
    }
  ],
  drinks: [
    {
      name: 'Soft Drinks',
      description: 'Coke, Sprite, Fanta, etc.',
      price: '$4.90',
      image: '/cokes.jpeg',
      category: 'drinks'
    },
    {
      name: 'Milkshakes',
      description: 'Chocolate, Vanilla, Strawberry',
      price: '$7.90',
      image: '/shake.jpeg',
      category: 'drinks'
    }
  ]
}

export default function ItemPage({ params }: { params: { item: string } }) {
  // Get all menu items in a flat array
  const allItems = Object.values(menuItems).flat()
  
  // Find the item by URL-friendly name
  const item = allItems.find(i => i.name.toLowerCase().replace(/\s+/g, '-') === params.item)

  if (!item) {
    notFound()
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{item.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">{item.price}</span>
            <span className="text-lg text-gray-600 capitalize">{item.category}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 