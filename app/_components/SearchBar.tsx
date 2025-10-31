'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blogs/${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };
  return (
    <div>
        <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="search"
                placeholder="Search blogs..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-2 pl-16 ml-6 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <svg
                className="absolute left-10 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
          </div>
      
    </div>
  )
}
