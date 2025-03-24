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
];

export default function LocationSearch({ selected, onSelect }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDestinations = searchQuery
    ? popularDestinations.filter(dest => 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularDestinations;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4">
        <label htmlFor="location-search" className="block text-sm font-medium text-gray-700 mb-2">
          Where to?
        </label>
        <div className="relative">
          <input
            id="location-search"
            type="text"
            placeholder="Search destinations"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900">Popular destinations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredDestinations.map((destination) => (
            <button
              key={destination.name}
              onClick={() => onSelect(destination.name)}
              className={`flex items-start gap-3 p-4 rounded-2xl hover:bg-gray-50 transition ${
                selected === destination.name ? 'bg-gray-50 ring-2 ring-gray-100' : ''
              }`}
            >
              <div className="p-2 bg-gray-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-medium">{destination.name}</div>
                <div className="text-sm text-gray-500">{destination.region}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 