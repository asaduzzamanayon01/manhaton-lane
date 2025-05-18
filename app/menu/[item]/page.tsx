import Image from 'next/image'
import { notFound } from 'next/navigation'
import { menuItems } from '@/data/menu'
import { createSlug } from '@/types/menu'

interface PageProps {
  params: { item: string }
}

export default function Page({ params }: PageProps) {
  // Get all menu items in a flat array
  const allItems = Object.values(menuItems).flat()
  
  // Find the item by URL-friendly name
  const item = allItems.find(menuItem => createSlug(menuItem.name) === params.item)

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