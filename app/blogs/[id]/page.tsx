'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import ProductCard from '@/app/_components/ProductCard';
import Link from 'next/link';

// Types
interface BlogData {
  id: string;
  image: string;
  imageAlt: string;
  label: string;
  date: string;
  time: string;
  title: string;
  description: string;
}

// Fetch single blog data
const fetchBlogData = async (id: string): Promise<BlogData> => {
  const res = await fetch(
    `https://69034a75d0f10a340b238871.mockapi.io/api/blog-data/${id}`
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch blog data');
  }
  
  return res.json();
};

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // React Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blog-data', id],
    queryFn: () => fetchBlogData(id),
    enabled: !!id,
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">
            {error instanceof Error ? error.message : 'Something went wrong'}
          </p>
          <Link 
            href="/blogs"
            className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Main content
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back to Blogs
        </button>

        {/* Blog Content */}
        {data && (
          <div className="flex justify-center">
            <ProductCard
              image={data.image}
              imageAlt={data.imageAlt}
              label={data.label}
              date={data.date}
              time={data.time}
              title={data.title}
              description={data.description}
            />
          </div>
        )}
      </div>
    </main>
  );
}