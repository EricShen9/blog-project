

import Image from "next/image";

const imageFilenames = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo10.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo11.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.jpg",
];

export default function PhotoGallery() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-4 gap-4">
      {imageFilenames.map((filename) => (
        <div key={filename} className="mb-4 break-inside-avoid rounded-md overflow-hidden transition-transform hover:scale-105 duration-300"> 
          <Image
            src={`/images/gallery/${filename}`}
            alt={filename}
            width = {0}
            height = {0}
            sizes = "300em"
            className="h-auto w-full object-contain rounded-md border border-gray-300"
          />
        </div>
      ))}
    </div>
  );
}







/*
//import Image from "next/image";

const imageFilenames = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  // Add more as needed
];

export default function PhotoGallery() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {imageFilenames.map((filename) => (
          <div key={filename} className="overflow-hidden rounded-md shadow-sm">
            <img
              src={`@/public/images/gallery/${filename}`}
              alt={filename}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
*/