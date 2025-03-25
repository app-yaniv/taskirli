'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'

interface PropertyCardProps {
  id: string
  title: string
  location: string
  images: string[]
  price: number
  rating?: number
  startDate?: string
  endDate?: string
}

export default function PropertyCard({
  id,
  title,
  location,
  images,
  price,
  rating,
  startDate,
  endDate,
}: PropertyCardProps) {
  return (
    <Link href={`/listings/${id}`} className="group">
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-xl relative">
          <Image
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={images[0]}
            alt={title}
          />
          <button className="absolute top-3 right-3 hover:scale-110 transition">
            <Heart className="w-6 h-6 text-white drop-shadow-md" />
          </button>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{location}</h3>
            {rating && (
              <div className="flex items-center gap-1">
                <span>★</span>
                <span>{rating}</span>
              </div>
            )}
          </div>
          <p className="text-gray-500 text-sm truncate">{title}</p>
          <div className="flex items-baseline gap-1">
            <span className="font-semibold">${price}</span>
            <span className="text-gray-500">night</span>
          </div>
          {startDate && endDate && (
            <p className="text-sm text-gray-500">
              {startDate} - {endDate}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
} 