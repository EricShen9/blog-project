'use client';
import { useRouter } from 'next/navigation';

// Images should be 3:2 aspect ratio

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

export default function ProjectCard({ title, description, imageUrl, url }: ProjectProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${url}`);
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow bg-white w-full shadow"
    >
      <img
        src={`/images/gallery/${imageUrl}`}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 h-[148] text-ellipsis mb-4 overflow-y-hidden">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </button>
  );
}
