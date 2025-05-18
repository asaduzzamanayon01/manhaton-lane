import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="mb-2">425 Logan Rd</p>
            <p className="mb-2">Stones Corner QLD 4120</p>
            <p>Australia</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p className="mb-2">Monday - Thursday: 11am - 9pm</p>
            <p className="mb-2">Friday - Saturday: 11am - 10pm</p>
            <p>Sunday: 11am - 8pm</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Phone: (07) 1234 5678</p>
            <p className="mb-2">Email: info@manhatonlane.com.au</p>
            <div className="flex gap-4 mt-4">
              <Link href="https://facebook.com" className="hover:text-gray-400 transition-colors">
                Facebook
              </Link>
              <Link href="https://instagram.com" className="hover:text-gray-400 transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Manhaton Lane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 