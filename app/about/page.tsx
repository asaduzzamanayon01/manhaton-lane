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
          <p className="text-lg text-gray-600 mb-6">
            Welcome to Manhaton Lane, Brisbane&apos;s premier destination for gourmet burgers and steaks founded in 2025. Our journey began with a simple vision: to create a dining experience that combines the comfort of casual dining with the quality of fine cuisine.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            What sets us apart isn&apos;t just our premium ingredients or our chef&apos;s expertise - it&apos;s our commitment to creating memorable dining experiences for every guest who walks through our doors.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Quality First</h3>
            <p className="text-gray-600">
              We source only the finest ingredients, from our premium beef to our freshly baked buns.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Crafted with Care</h3>
            <p className="text-gray-600">
              Every dish is prepared with attention to detail and passion for great food.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Community Focus</h3>
            <p className="text-gray-600">
              We&apos;re proud to be part of the Brisbane community and strive to create a welcoming atmosphere for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 