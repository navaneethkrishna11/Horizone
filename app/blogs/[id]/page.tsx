import BlogCard from '../../_components/BlogCard';

interface BlogData {
  id: string;
  heading: string;
  para: string;
  avatar: string;
  productimg: string;
  createdAt: number;
  createdTime: number;
}

interface PageProps {
  params: { id: string };
}

export default async function BlogPage({ params }: PageProps) {
  const { id } = params;

  const res = await fetch(`https://69034a75d0f10a340b238871.mockapi.io/api/blog-data/1/${id}`, {
    // Next.js caching policy, adjust as needed
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // Handle error if blog not found or fetch failed
    return <p>Failed to load blog post.</p>;
  }

  const blogData: BlogData = await res.json();

  return (
    <main className="p-4">
      <BlogCard
        id={blogData.id}
        heading={blogData.heading}
        para={blogData.para}
        avatar={blogData.avatar}
        productimg={blogData.productimg}
        createdAt={blogData.createdAt}
        createdTime={blogData.createdTime}
      />
    </main>
  );
}
