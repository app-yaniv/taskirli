'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Grid } from 'lucide-react'

interface ImageGalleryProps {
  images: string[]
  title: string
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 bg-white z-50">
        <div className="p-8">
          <button
            onClick={() => setShowAllPhotos(false)}
            className="fixed left-8 top-8 flex gap-1 py-2 px-4 rounded-lg bg-white shadow-md hover:shadow-lg transition"
          >
            <span>×</span> Close
          </button>
          <div className="mx-auto max-w-6xl columns-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="mb-4">
                <Image
                  width={800}
                  height={600}
                  src={image}
                  alt={`${title} - Photo ${index + 1}`}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden aspect-[16/9]">
        {images.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <Image
              fill
              src={image}
              alt={`${title} - Photo ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md hover:shadow-lg transition py-2 px-4 flex items-center gap-2"
      >
        <Grid className="w-4 h-4" />
        <span>Show all photos</span>
      </button>
    </div>
  )
} 