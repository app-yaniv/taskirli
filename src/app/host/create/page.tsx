"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreateListingPage() {
  const [propertyType, setPropertyType] = useState("");
  const router = useRouter();

  const propertyTypes = [
    {
      id: "house",
      title: "House",
      description: "A home that may be free-standing or attached",
      icon: "/images/property-types/house.svg",
    },
    {
      id: "apartment",
      title: "Apartment",
      description: "A rental property within a residential building",
      icon: "/images/property-types/apartment.svg",
    },
    {
      id: "guesthouse",
      title: "Guesthouse",
      description: "A separate building on the same property as a house",
      icon: "/images/property-types/guesthouse.svg",
    },
    {
      id: "hotel",
      title: "Hotel",
      description: "A business offering private rooms for guests",
      icon: "/images/property-types/hotel.svg",
    },
  ];

  const handleBack = () => {
    router.push("/host");
  };

  const handleNext = () => {
    if (propertyType) {
      // Store the selected property type in localStorage or state management
      localStorage.setItem("propertyType", propertyType);
      router.push("/host/create/place-type");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-[32px] font-semibold text-[#222222] mb-4">
            What kind of place will you host?
          </h1>
          <p className="text-[#717171] text-lg">
            Choose the option that best describes your place
          </p>
        </div>

        <div className="space-y-4">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setPropertyType(type.id)}
              className={`w-full flex items-center gap-6 p-6 rounded-xl border-2 transition-all ${
                propertyType === type.id
                  ? "border-black bg-gray-50"
                  : "border-gray-200 hover:border-black"
              }`}
            >
              <div className="relative w-12 h-12">
                <Image
                  src={type.icon}
                  alt={type.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-medium text-[#222222]">
                  {type.title}
                </h3>
                <p className="text-[#717171]">{type.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <button 
              onClick={handleBack}
              className="font-semibold underline text-[#222222]"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!propertyType}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
                propertyType
                  ? "bg-[#FF385C] hover:bg-[#D70466]"
                  : "bg-[#DDC9CC] cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 