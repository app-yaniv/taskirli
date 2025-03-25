'use client'

import { notFound } from 'next/navigation'
import { Share, Heart } from 'lucide-react'
import ImageGallery from '@/components/listings/ImageGallery'
import HostSection from '@/components/listings/HostSection'
import ReviewSection from '@/components/listings/ReviewSection'
import AmenitiesSection from '@/components/listings/AmenitiesSection'
import BookingCard from '@/components/listings/BookingCard'
import { getListingById } from '@/lib/listings'

interface ListingPageProps {
  params: {
    id: string
  }
}

export default function ListingPage({ params }: ListingPageProps) {
  const listing = getListingById(params.id)

  if (!listing) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">{listing.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>★ {listing.rating}</span>
            <span>·</span>
            <span className="underline">{listing.totalReviews} reviews</span>
            <span>·</span>
            <span className="underline">{listing.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg">
              <Share className="w-5 h-5" />
              <span className="underline">Share</span>
            </button>
            <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg">
              <Heart className="w-5 h-5" />
              <span className="underline">Save</span>
            </button>
          </div>
        </div>
      </div>

      <ImageGallery images={listing.images} title={listing.title} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
        <div className="lg:col-span-2">
          <div className="pb-6 mb-6 border-b">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Hosted by {listing.host.name}
                </h2>
                <div className="flex gap-2 text-gray-600">
                  {listing.specifications.map((spec) => (
                    <span key={spec}>{spec}</span>
                  ))}
                </div>
              </div>
              <img
                src={listing.host.image}
                alt={listing.host.name}
                className="w-14 h-14 rounded-full"
              />
            </div>
          </div>

          <div className="pb-6 mb-6 border-b">
            <p className="text-gray-700">{listing.description}</p>
          </div>

          <AmenitiesSection amenities={listing.amenities} />
          <HostSection host={listing.host} />
          <ReviewSection
            rating={listing.rating}
            totalReviews={listing.totalReviews}
            reviews={listing.reviews}
          />
        </div>

        <div className="lg:col-span-1">
          <BookingCard
            pricePerNight={listing.price}
            rating={listing.rating}
            totalReviews={listing.totalReviews}
            cleaningFee={50}
            serviceFee={42}
          />
        </div>
      </div>
    </div>
  )
} 