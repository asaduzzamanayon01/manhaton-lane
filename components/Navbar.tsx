import Link from 'next/link'
import Image from 'next/image'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/restaurant-logo.svg"
              alt="Manhaton Lane"
              width={180}
              height={60}
              className="h-24 w-auto"
              priority
            />
          </Link>

          <h1 className="text-6xl font-normal text-gray-900" style={{ fontFamily: 'Quesha' }}>Manhaton Lane</h1>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem>
                <Link href="/menu" className="text-lg font-medium hover:text-gray-600 transition-colors">
                  Menu
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="text-lg font-medium hover:text-gray-600 transition-colors">
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 