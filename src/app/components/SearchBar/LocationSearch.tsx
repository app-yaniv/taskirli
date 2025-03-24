"use client";

import { useState } from 'react';

interface LocationSearchProps {
  selected: string;
  onSelect: (location: string) => void;
}

const popularDestinations = [
  { name: 'London, United Kingdom', region: 'United Kingdom' },
  { name: 'Paris, France', region: 'France' },
  { name: 'New York, United States', region: 'United States' },
  { name: 'Tokyo, Japan', region: 'Japan' },
  { name: 'Dubai, UAE', region: 'United Arab Emirates' },
  { name: 'Barcelona, Spain', region: 'Spain' },
  { name: 'Baguio, Philippines', region: 'Philippines' },
  { name: 'Tagaytay, Philippines', region: 'Philippines' },
  { name: 'Makati, Philippines', region: 'Philippines' },
  { name: 'Quezon City, Philippines', region: 'Philippines' },
  { name: 'San Juan Beach, Philippines', region: 'Philippines' }
];

export default function LocationSearch({ selected, onSelect }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDestinations = searchQuery
    ? popularDestinations.filter(dest => 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.region.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularDestinations;

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search destinations"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>

      {/* Nearby Option - Always shown */}
      {!searchQuery && (
        <button 
          onClick={() => onSelect('Nearby')}
          className="flex items-center gap-4 w-full hover:bg-gray-100 p-4 rounded-2xl transition"
        >
          <div className="bg-gray-100 p-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="font-medium">Nearby</div>
            <div className="text-sm text-gray-500">Find what's around you</div>
          </div>
        </button>
      )}

      {/* Search Results */}
      {searchQuery && filteredDestinations.length > 0 && (
        <div className="space-y-2">
          {filteredDestinations.map((destination) => (
            <button 
              key={destination.name}
              onClick={() => onSelect(destination.name)}
              className="flex items-center gap-4 w-full hover:bg-gray-100 p-4 rounded-2xl transition"
            >
              <div className="bg-gray-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-medium">{destination.name}</div>
                <div className="text-sm text-gray-500">{destination.region}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {searchQuery && filteredDestinations.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No destinations found for "{searchQuery}"
        </div>
      )}

      {/* Popular Destinations - Shown when not searching */}
      {!searchQuery && (
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-800">Popular destinations</div>
          {popularDestinations.slice(0, 6).map((destination) => (
            <button 
              key={destination.name}
              onClick={() => onSelect(destination.name)}
              className="flex items-center gap-4 w-full hover:bg-gray-100 p-4 rounded-2xl transition"
            >
              <div className="bg-gray-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-medium">{destination.name}</div>
                <div className="text-sm text-gray-500">{destination.region}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 