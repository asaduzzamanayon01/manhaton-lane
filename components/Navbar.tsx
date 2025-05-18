import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

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

          <h1 className="hidden md:block text-6xl font-normal text-gray-900" style={{ fontFamily: 'Quesha' }}>Manhaton Lane</h1>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
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

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Manhaton Lane</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8 px-6">
                <Link 
                  href="/menu" 
                  className="text-2xl font-medium hover:text-gray-600 transition-colors py-2"
                >
                  Menu
                </Link>
                <Link 
                  href="/about" 
                  className="text-2xl font-medium hover:text-gray-600 transition-colors py-2"
                >
                  About
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 