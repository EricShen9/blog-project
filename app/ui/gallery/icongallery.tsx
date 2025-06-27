"use client";

import * as Icons from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Gallery() {
  const [search, setSearch] = useState('');

  const iconEntries = Object.entries(Icons).filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search icons..."
        className="mb-4 w-full p-2 border rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {iconEntries.map(([name, Icon]) => (
          <div key={name} className="flex flex-col items-center text-center">
            <Icon className="h-8 w-8 text-gray-700" />
            <span className="text-xs mt-1 text-gray-600">{name.replace('Icon', '')}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
