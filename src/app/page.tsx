'use client'

import { useState } from 'react'
import { Sliders } from 'lucide-react'
import FilterModal from '@/components/features/FilterModal'
import PropertyCard from '@/components/PropertyCard'
import { getFeaturedListings } from '@/lib/listings'

export default function Home() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const featuredListings = getFeaturedListings()

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
        <h2 className="text-2xl font-semibold mb-6">Featured stays</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <PropertyCard
              key={listing.id}
              id={listing.id}
              title={listing.title}
              location={listing.location}
              images={listing.images}
              price={listing.price}
              rating={listing.rating}
            />
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
