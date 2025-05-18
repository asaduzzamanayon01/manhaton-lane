import Image from 'next/image'
import Link from 'next/link'
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

export default function MenuPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Menu</h1>

        {/* Menu Categories */}
        {Object.entries(menuItems).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold capitalize mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <Link 
                  key={index} 
                  href={`/menu/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <span className="text-lg font-semibold text-gray-900">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Note */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-center">
            All prices are in AUD and include GST. Menu items and prices are subject to change.
            Please inform our staff of any allergies or dietary requirements.
          </p>
        </div>
      </div>
    </div>
  )
} 