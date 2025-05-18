import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[40vh] mb-16 rounded-2xl overflow-hidden">
          <Image
            src="/hero-section.jpeg"
            alt="Inside Manhaton Lane"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Our Story
            </h1>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">About Manhaton Lane</h2>
          <p className="text-gray-600 text-lg mb-6">
            Founded in 2025, Manhaton Lane was born from a passion for creating the perfect burger and providing 
            an exceptional dining experience in Brisbane. What started as a small burger joint has grown into 
            a beloved destination for burger enthusiasts and food lovers alike.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Our name, inspired by Manhattan's vibrant food scene and Brisbane's iconic laneways, represents our 
            commitment to bringing world-class flavors to our local community. We've combined international 
            inspiration with Australian ingredients to create something truly unique.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Quality Ingredients</h3>
            <p className="text-gray-600">
              We source the finest local ingredients, from premium Australian beef to fresh produce, 
              ensuring every dish meets our high standards.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Crafted with Care</h3>
            <p className="text-gray-600">
              Each burger and dish is prepared with attention to detail, following our carefully 
              developed recipes and techniques.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Community Focus</h3>
            <p className="text-gray-600">
              We're proud to be part of Brisbane's culinary scene and strive to create a welcoming 
              space for our community.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/lane-burger.jpeg"
              alt="Our team at work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-600 text-lg mb-6">
              Behind every great burger is a dedicated team of food lovers. Our chefs and staff 
              bring years of experience and passion to create the perfect dining experience for 
              our guests.
            </p>
            <p className="text-gray-600 text-lg">
              From our kitchen team who craft each dish with precision, to our front-of-house 
              staff who ensure your visit is memorable, we work together to deliver the best 
              possible experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 