import Image from "next/image";
import Link from "next/link";

const featuredDestinations = [
  {
    id: 1,
    name: "Beachfront Villa",
    location: "Bali, Indonesia",
    price: 150,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Mountain Cabin",
    location: "Swiss Alps",
    price: 200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "City Loft",
    location: "New York, USA",
    price: 180,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Desert Retreat",
    location: "Dubai, UAE",
    price: 300,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Find your next stay
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center">
              Search deals on hotels, homes, and much more...
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full p-2 md:p-4 w-full max-w-4xl flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full px-4 py-2 text-gray-900 rounded-full focus:outline-none"
                />
              </div>
              <div className="flex gap-2 md:gap-4">
                <button className="flex-1 md:flex-none px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Featured places to stay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((destination) => (
            <Link href={`/listings/${destination.id}`} key={destination.id} className="group">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-200"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold">{destination.name}</h3>
                <p className="text-gray-600">{destination.location}</p>
                <p className="mt-1">
                  <span className="font-semibold">${destination.price}</span> night
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-sm">★ {destination.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Get Inspired Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Get inspired for your next trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80"
              alt="Inspiration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Explore unique experiences</h3>
                <p className="text-sm">Discover one-of-a-kind stays and activities</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80"
              alt="Inspiration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Travel with confidence</h3>
                <p className="text-sm">Find places with enhanced cleaning and safety measures</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
              alt="Inspiration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Long-term stays</h3>
                <p className="text-sm">Make anywhere feel like home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
