import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const featuredItems = [
  {
    name: 'Manhattan Burger',
    description: 'Our signature burger with premium beef patty and special sauce',
    image: '/manhattan-burger.jpeg',
    slug: 'manhattan-burger'
  },
  {
    name: 'Rump Steak',
    description: 'Premium cut steak cooked to your liking',
    image: '/rump-steak.jpeg',
    slug: 'rump-steak'
  },
  {
    name: 'Spicy Parmy Schnitzel',
    description: 'Crispy chicken schnitzel with spicy sauce and melted cheese',
    image: '/spicy-parmy-schniztel.jpeg',
    slug: 'spicy-parmy-schnitzel'
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <Image
          src="/hero-section.jpeg"
          alt="Delicious burgers and steaks"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-normal mb-8 leading-tight">
            Brisbane&apos;s Best<br />Burgers &amp; Steaks
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
            Experience mouth-watering burgers, perfectly cooked steaks, and more at Manhaton Lane.
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
            <Link href="/menu">View Our Menu</Link>
          </Button>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-normal text-center mb-16">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <Link 
                key={index}
                href={`/menu/${item.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-normal mb-3">{item.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-normal mb-8">Welcome to Manhaton Lane</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Located in the heart of Brisbane, Manhaton Lane is your destination for premium burgers, steaks, and more. 
                We take pride in using the finest ingredients and cooking techniques to deliver an unforgettable dining experience.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/lane-burger.jpeg"
                alt="Inside Manhaton Lane"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
