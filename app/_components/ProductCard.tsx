import Image from 'next/image';

interface ProductCardProps {
  image: string;
  imageAlt: string;
  label: string;
  date: string;
  time: string;
  title: string;
  description: string;
}

export default function ProductCard({
  image,
  imageAlt,
  label,
  date,
  time,
  title,
  description,
}: ProductCardProps) {
  return (
    <article className="w-full max-w-sm">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] mb-4">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover rounded-[14px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Glass Morphism Label */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-white text-sm font-medium">
            {label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Date and Time */}
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <time dateTime={date}>{date}</time>
          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
          <span>{time}</span>
        </div>

        {/* Title */}
        <h3 className="text-black font-bold text-xl leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

// Example usage in a page:
// 
// <ProductCard
//   image="/product-image.jpg"
//   imageAlt="Beautiful sunset over mountains"
//   label="Featured"
//   date="24 Jan 2010"
//   time="2:30 PM"
//   title="Amazing Mountain Adventure"
//   description="Experience breathtaking views and unforgettable moments in the heart of nature."
// />