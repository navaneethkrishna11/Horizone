import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="" aria-label="Home" className="flex items-center">
              <Image
                src="/images/H.png"
                alt="Horizon Logo"
                width={120}
                height={40}
                priority
                className="h-10 w-auto"
              />
              <span className="ml-2 font-semibold text-lg">Horizone</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 ml-10">
            <Link href="/products" className="text-white hover:text-gray-200 transition-colors text-sm font-medium">
              Hotel
            </Link>
            <Link href="/solutions" className="text-white hover:text-gray-200 transition-colors text-sm font-medium">
              Flight
            </Link>
            <Link href="/pricing" className="text-white hover:text-gray-200 transition-colors text-sm font-medium">
              Train
            </Link>
            <Link href="/resources" className="text-white hover:text-gray-200 transition-colors text-sm font-medium">
              Travel
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200 transition-colors text-sm font-medium">
              Car Rental
            </Link>
          </div>

          {/* Search Bar */}
           <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar/>
          </div>

         {/* Right Side*/}
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center text-white hover:text-gray-200 transition-colors text-sm font-medium"
              aria-label="Change language to English"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 010 20M12 2c3.87 8.19 7.74 8.19 11.61 0M12 22c-3.87-8.19-7.74-8.19-11.61 0" />
              </svg>
              EN
            </button>
            <Link
              href="/login"
              className="px-4 py-2 text-white text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}