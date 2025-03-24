import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Pools", icon: "🏊‍♂️" },
  { name: "Houses", icon: "🏠" },
  { name: "Apartments", icon: "🏢" },
  { name: "Camping", icon: "⛺" },
  { name: "Mountains", icon: "⛰️" },
  { name: "Beach", icon: "🏖️" },
];

const featuredStays = [
  {
    id: 1,
    name: "Cozy Mountain Cabin",
    location: "Swiss Alps",
    price: 200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Luxury Beach Villa",
    location: "Maldives",
    price: 500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Modern City Apartment",
    location: "New York",
    price: 300,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
              Find your next stay
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center">
              Search low prices on hotels, homes, and much more...
            </p>
            <button className="bg-rose-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-rose-600 transition">
              Start your search
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {categories.map((category) => (
              <Link 
                href={`/category/${category.name.toLowerCase()}`} 
                key={category.name}
                className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 transition group"
              >
                <div className="text-3xl group-hover:scale-110 transition duration-200">
                  {category.icon}
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Stays */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-8">Featured stays</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStays.map((stay) => (
            <Link href={`/stays/${stay.id}`} key={stay.id} className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-200"
                />
                <button 
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition"
                  aria-label="Add to favorites"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{stay.name}</h3>
                    <p className="text-gray-600">{stay.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>★</span>
                    <span>{stay.rating}</span>
                  </div>
                </div>
                <p className="mt-1">
                  <span className="font-medium">${stay.price}</span> night
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
