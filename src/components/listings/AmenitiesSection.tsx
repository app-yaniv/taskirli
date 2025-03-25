'use client'

import * as React from 'react'
import {
  Wifi,
  Car,
  Tv,
  Utensils,
  Coffee,
  Bath,
  Wind,
  Snowflake,
  Waves,
  DoorOpen,
  Laptop,
  Dumbbell,
} from 'lucide-react'

interface Amenity {
  icon: React.ReactElement
  name: string
  description?: string
}

interface AmenitiesSectionProps {
  amenities: string[]
}

const amenityIcons: Record<string, React.ReactElement> = {
  wifi: <Wifi className="w-6 h-6" />,
  parking: <Car className="w-6 h-6" />,
  tv: <Tv className="w-6 h-6" />,
  kitchen: <Utensils className="w-6 h-6" />,
  coffee: <Coffee className="w-6 h-6" />,
  'private bathroom': <Bath className="w-6 h-6" />,
  'air conditioning': <Wind className="w-6 h-6" />,
  heating: <Snowflake className="w-6 h-6" />,
  pool: <Waves className="w-6 h-6" />,
  'private entrance': <DoorOpen className="w-6 h-6" />,
  'workspace': <Laptop className="w-6 h-6" />,
  gym: <Dumbbell className="w-6 h-6" />,
}

export default function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  return (
    <div className="py-12 border-b">
      <h2 className="text-2xl font-semibold mb-6">What this place offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-4">
            {amenityIcons[amenity.toLowerCase()] || (
              <div className="w-6 h-6" />
            )}
            <span>{amenity}</span>
          </div>
        ))}
      </div>
      <button className="mt-6 px-6 py-3 border border-gray-900 rounded-lg font-medium">
        Show all amenities
      </button>
    </div>
  )
} 