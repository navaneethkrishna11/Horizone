import ProductCard from './BlogCard';
import Link from 'next/link';

interface BlogData {
  id: string;
  createdAt: number;
  heading: string;
  avatar: string;
  createdTime: number;
  para: string;
  productimg: string;
  authorname:string;
  style:string;
}

async function getBlogs(): Promise<BlogData[]> {
  try {
    const res = await fetch(
      'https://69034a75d0f10a340b238871.mockapi.io/api/blog-data/1',
      {
        cache: 'no-store',
      }
    );
    
    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

const tags = ['All', 'Travel', 'Technology', 'Food', 'Lifestyle', 'Adventure'];

export default async function BlogListingPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Blog</h1>
          <p className="text-gray-700 text-sm mb-6">
            Here, we share travel tips, destination guides, and stories that inspire your next adventure.
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    tag === 'All'
                      ? 'bg-gray-200 text-black'
                      : 'text-black hover:bg-gray-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-by" className="text-black text-sm font-medium">
                Sort by:
              </label>
              <select
                id="sort-by"
                defaultValue="newest"
                className="px-3 py-2 border border-gray-300 rounded-lg text-black text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="popular">Popular</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.slice(0, 9).map((blog) => (
              <Link 
                key={blog.id} 
                href={`/blogs/${blog.id}`}
              >
                <ProductCard
                  id={blog.id}
                  heading={blog.heading}
                  para={blog.para}
                  avatar={blog.avatar}
                  productimg={blog.productimg}
                  createdAt={blog.createdAt}
                  createdTime={blog.createdTime}
                  authorname={blog.authorname}
                  style={blog.style}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No blogs available at the moment.</p>
          </div>
        )}

        {/* Pagination */}
        <nav aria-label="Pagination" className="flex justify-center">
          <ul className="flex items-center gap-2">
            <li>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
                disabled
              >
                ←
              </button>
            </li>
            {[1, 2, 3, 4, 5].map((page) => (
              <li key={page}>
                <button
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    page === 1
                      ? 'bg-gray-200 text-black'
                      : 'text-black hover:bg-gray-100'
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={page === 1 ? 'page' : undefined}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors text-black hover:bg-gray-100"
                aria-label="Next page"
              >
                →
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}