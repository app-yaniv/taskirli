'use client'

import { X, Wifi, ChefHat, Waves, Fan, Thermometer, Dog } from 'lucide-react'
import { useState } from 'react'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [priceRange, setPriceRange] = useState([570, 4300])
  const [roomCounts, setRoomCounts] = useState({
    bedrooms: 'Any',
    beds: 'Any',
    bathrooms: 'Any'
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pointer-events-none">
      <div className="bg-white w-full max-w-2xl mt-24 rounded-xl shadow-2xl pointer-events-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </button>
          <h2 className="font-semibold">Filters</h2>
          <div className="w-8" /> {/* Spacer for centering */}
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-6">
          {/* Type of place */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Type of place</h3>
            <div className="flex gap-2">
              <button className="flex-1 px-6 py-4 border rounded-xl hover:border-black">
                Any type
              </button>
              <button className="flex-1 px-6 py-4 border rounded-xl hover:border-black">
                Room
              </button>
              <button className="flex-1 px-6 py-4 border rounded-xl hover:border-black">
                Entire home
              </button>
            </div>
          </div>

          {/* Price range */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Price range</h3>
            <p className="text-gray-500 text-sm mb-4">Nightly prices before fees and taxes</p>
            <div className="h-28 bg-gray-50 rounded-lg mb-4">
              {/* Price distribution graph would go here */}
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm text-gray-600">Minimum</label>
                <div className="mt-1 border rounded-lg p-2">₱{priceRange[0]}</div>
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-600">Maximum</label>
                <div className="mt-1 border rounded-lg p-2">₱{priceRange[1]}+</div>
              </div>
            </div>
          </div>

          {/* Rooms and beds */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Rooms and beds</h3>
            {['Bedrooms', 'Beds', 'Bathrooms'].map((type) => (
              <div key={type} className="flex items-center justify-between mb-4">
                <span>{type}</span>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border hover:border-black flex items-center justify-center">
                    -
                  </button>
                  <span className="w-16 text-center">
                    {roomCounts[type.toLowerCase() as keyof typeof roomCounts]}
                  </span>
                  <button className="w-8 h-8 rounded-full border hover:border-black flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <Wifi className="h-5 w-5" />
                <span>Wifi</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <ChefHat className="h-5 w-5" />
                <span>Kitchen</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <Waves className="h-5 w-5" />
                <span>Washer</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <Waves className="h-5 w-5" />
                <span>Dryer</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <Fan className="h-5 w-5" />
                <span>Air conditioning</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <Thermometer className="h-5 w-5" />
                <span>Heating</span>
              </button>
            </div>
            <button className="mt-4 text-black underline font-medium">
              Show more
            </button>
          </div>

          {/* Booking options */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Booking options</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <span className="text-xl">⚡</span>
                <span>Instant Book</span>
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <span className="text-xl">🔑</span>
                <span>Self check-in</span>
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <span className="text-xl">❌</span>
                <span>Free cancellation</span>
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl hover:border-black">
                <Dog className="h-5 w-5" />
                <span>Allows pets</span>
              </button>
            </div>
          </div>

          {/* Standout stays */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Standout stays</h3>
            <button className="w-full flex items-center gap-4 p-4 border rounded-xl hover:border-black">
              <span className="text-2xl">👣</span>
              <div className="text-left">
                <div className="font-medium">Guest favorite</div>
                <div className="text-sm text-gray-500">The most loved homes on Airbnb</div>
              </div>
            </button>
          </div>

          {/* Property type, Accessibility features, Host language */}
          {['Property type', 'Accessibility features', 'Host language'].map((section) => (
            <div key={section} className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{section}</h3>
                <button className="p-3">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t">
          <button className="font-medium underline">
            Clear all
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">
            Show 1,000+ places
          </button>
        </div>
      </div>
    </div>
  )
} 