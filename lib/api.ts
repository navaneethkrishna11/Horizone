const API_URL = 'https://69034a75d0f10a340b238871.mockapi.io/api/blog-data/1';

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

// Fetch all blogs (for homepage)
export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(API_URL, {
      cache: 'no-store', // For SSR - always fresh data
      // Or use: next: { revalidate: 3600 } for ISR
    });
    
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Fetch single blog (for dynamic page)
export async function getBlogById(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      cache: 'no-store',
    });
    
    if (!res.ok) throw new Error('Failed to fetch blog');
    return res.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}