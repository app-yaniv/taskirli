'use client'

import { useState } from 'react'
import { Sliders } from 'lucide-react'
import FilterModal from '@/components/features/FilterModal'

const featuredStays = [
  {
    id: 1,
    name: 'Cozy Mountain Cabin',
    location: 'Ontario, Norway',
    imageUrl: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3',
    rating: 4.8,
    price: 120
  },
  {
    id: 2,
    name: 'Luxury Beach Villa',
    location: 'Maldives',
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3',
    rating: 4.9,
    price: 450
  },
  {
    id: 3,
    name: 'Modern City Apartment',
    location: 'New York',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3',
    rating: 4.7,
    price: 200
  }
]

export default function Home() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3"
          alt="Mountain landscape"
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Find your next stay
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Search low prices on hotels, homes, and much more...
          </p>
          <button className="bg-[#FF385C] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E31C5F] transition-colors">
            Start your search
          </button>
        </div>
      </div>

      {/* White Box with Shadow */}
      <div className="sticky top-0 bg-white shadow-md py-6 z-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories Section */}
          <div className="flex items-center gap-4">
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-8 pr-4">
                {categories.map((category) => (
                  <button
                    key={category.label}
                    className="flex flex-col items-center gap-2 min-w-fit text-gray-600 hover:text-gray-900"
                  >
                    <img
                      src={`/icons/categories/${category.icon}.svg`}
                      alt={category.label}
                      className="w-6 h-6"
                    />
                    <span className="text-xs">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 border-l pl-4">
              <button
                onClick={() => setIsFilterModalOpen(true)}
                className="flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-gray-900"
              >
                <Sliders className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stays Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStays.map((stay) => (
            <div key={stay.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={stay.imageUrl}
                  alt={stay.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <div className="flex justify-between">
                  <h3 className="font-medium text-lg">{stay.name}</h3>
                  <div className="flex items-center gap-1">
                    <span>★</span>
                    <span>{stay.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500">{stay.location}</p>
                <p className="mt-1">
                  <span className="font-medium">${stay.price}</span> night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </main>
  )
}

const categories = [
  { label: 'Amazing views', icon: 'amazing-views' },
  { label: 'Beachfront', icon: 'beachfront' },
  { label: 'Lake', icon: 'lake' },
  { label: 'Beach', icon: 'beach' },
  { label: 'Tiny homes', icon: 'tiny-homes' },
  { label: 'Rooms', icon: 'rooms' },
  { label: 'Countryside', icon: 'countryside' },
  { label: 'Cabins', icon: 'cabins' },
  { label: 'Lakefront', icon: 'lakefront' },
  { label: 'Domes', icon: 'domes' },
  { label: 'OMG!', icon: 'omg' },
  { label: 'Treehouses', icon: 'treehouses' },
  { label: 'Bed & breakfasts', icon: 'bed-and-breakfasts' }
]
