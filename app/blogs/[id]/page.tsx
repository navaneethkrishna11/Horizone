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
  const { id } = await params;
  // console.log('Fetching blog with ID:', id);

  const res = await fetch(`https://69034a75d0f10a340b238871.mockapi.io/api/blog-data/1/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return <p className="text-center text-red-600 p-4">Failed to load blog post.</p>;
  }

  const blogData: BlogData = await res.json();

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-black mb-4">
          {blogData.heading}
        </h1>
        <p className="text-gray-700 text-base leading-relaxed">
          {blogData.para}
        </p>
      </div>
    </main>
  );
}