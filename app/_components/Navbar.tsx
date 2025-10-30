import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="" aria-label="Home">
              {/* <Image
                src="/images/vercel.svg"
                alt="Horizon Logo"
                width={120}
                height={40}
                priority
                className="h-10 w-auto"
              /> */}
              Horizone
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
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search destination..."
                aria-label="Search"
                className=" px-4 py-2 pl-16 ml-6 bg-white/10 backdrop-blur-sm rounded-lg text-whit"
              />
              <svg
                className="absolute left-10 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Right Side: Language, Login, Signup */}
          <div className="flex items-center space-x-4">
            <button
              className="text-white hover:text-gray-200 transition-colors text-sm font-medium"
              aria-label="Change language to English"
            >
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