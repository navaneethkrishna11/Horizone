import Image from 'next/image';

interface BlogCardProps {
  id: string;
  heading: string;
  para: string;
  avatar: string;
  productimg: string;
  createdAt: number;
  createdTime: number;
  authorname:string;
  style:string;
}

export default function BlogCard({
  heading,
  para,
  avatar,
  productimg,
  createdAt,
  createdTime,
  authorname,
  style,
}: BlogCardProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
 
   
  });

  return (
    <article className="w-full max-w-sm group">
      <div className="relative w-full aspect-4/3 mb-4 overflow-hidden rounded-2xl">
        <Image
          src={productimg}
          alt={heading}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <button className="mb-6 px-6 py-2 bg-[#838687] backdrop-blur-lg border border-transparent rounded-4xl text-white text-sm font-medium">
           {style}
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <time dateTime={new Date(createdAt).toISOString()}>
            {formattedDate}
          </time>
          <span className="w-1 h-1 rounded-full bg-gray-400" />
          <span>{createdTime} min read</span>
        </div>
        <h3 className="text-black font-bold text-xl leading-tight group-hover:text-gray-700 transition-colors line-clamp-2">
          {heading}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
          {para}
        </p>

       <div className="flex items-center gap-2">
        <Image width={100} height={100} src={avatar} alt="Author Avatar" className="w-8 h-8 rounded-full object-cover" />
        <div>
          <p className="text-sm text-black">{authorname}</p>
        </div>
      </div>

      </div>
    </article>
  );
}