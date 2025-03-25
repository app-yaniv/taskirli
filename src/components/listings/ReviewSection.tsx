'use client'

interface Review {
  id: number
  user: {
    name: string
    image: string
    joinedDate: string
  }
  rating: number
  date: string
  content: string
}

interface ReviewSectionProps {
  rating: number
  totalReviews: number
  reviews: Review[]
}

export default function ReviewSection({ rating, totalReviews, reviews }: ReviewSectionProps) {
  return (
    <div className="py-12 border-b">
      <div className="flex items-center gap-2 mb-8">
        <span>★</span>
        <span className="font-semibold">{rating}</span>
        <span>·</span>
        <span className="font-semibold">{totalReviews} reviews</span>
      </div>

      {/* Rating Categories */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 mb-12">
        {['Cleanliness', 'Accuracy', 'Communication', 'Location', 'Check-in', 'Value'].map((category) => (
          <div key={category} className="flex items-center justify-between">
            <span className="text-gray-600">{category}</span>
            <div className="flex items-center gap-3">
              <div className="w-32 h-1 bg-gray-300 rounded-full">
                <div className="w-full h-full bg-gray-900 rounded-full"></div>
              </div>
              <span className="font-medium">5.0</span>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={review.user.image}
                alt={review.user.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{review.user.name}</p>
                <p className="text-gray-500">{review.user.joinedDate}</p>
              </div>
            </div>
            <p className="text-gray-700 line-clamp-4">{review.content}</p>
            <button className="mt-2 font-medium underline">Show more</button>
          </div>
        ))}
      </div>

      <button className="mt-8 px-6 py-3 border border-gray-900 rounded-lg font-medium">
        Show all {totalReviews} reviews
      </button>
    </div>
  )
} 