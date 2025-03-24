"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PropertyType = "house" | "apartment" | "guesthouse" | "hotel";

interface PlaceTypeOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function PlaceTypePage() {
  const [placeType, setPlaceType] = useState("");
  const router = useRouter();
  const [selectedPropertyType, setSelectedPropertyType] = useState<PropertyType>("house");

  useEffect(() => {
    const propertyType = localStorage.getItem("propertyType") as PropertyType;
    if (propertyType) {
      setSelectedPropertyType(propertyType);
    }
  }, []);

  const placeTypes: Record<PropertyType, PlaceTypeOption[]> = {
    house: [
      {
        id: "entire-house",
        title: "An entire house",
        description: "Guests have the whole place to themselves",
        icon: "/images/place-types/entire-house.svg",
      },
      {
        id: "room",
        title: "A room",
        description: "Guests have their own room in a home, plus access to shared spaces",
        icon: "/images/place-types/room.svg",
      },
      {
        id: "shared-room",
        title: "A shared room",
        description: "Guests sleep in a room or common area that may be shared with you or others",
        icon: "/images/place-types/shared-room.svg",
      },
    ],
    apartment: [
      {
        id: "entire-apartment",
        title: "An entire apartment",
        description: "Guests have the whole place to themselves",
        icon: "/images/place-types/entire-apartment.svg",
      },
      {
        id: "private-room",
        title: "A private room",
        description: "Guests have their own room in an apartment, plus access to shared spaces",
        icon: "/images/place-types/room.svg",
      },
      {
        id: "shared-room",
        title: "A shared room",
        description: "Guests sleep in a room or common area that may be shared with you or others",
        icon: "/images/place-types/shared-room.svg",
      },
    ],
    guesthouse: [
      {
        id: "entire-guesthouse",
        title: "An entire guesthouse",
        description: "Guests have the whole guesthouse to themselves",
        icon: "/images/place-types/entire-house.svg",
      },
      {
        id: "private-room-guesthouse",
        title: "A private room",
        description: "Guests have their own room in a guesthouse, plus access to shared spaces",
        icon: "/images/place-types/room.svg",
      },
      {
        id: "shared-room-guesthouse",
        title: "A shared room",
        description: "Guests sleep in a room or common area that may be shared with others",
        icon: "/images/place-types/shared-room.svg",
      },
    ],
    hotel: [
      {
        id: "entire-hotel",
        title: "An entire hotel",
        description: "Guests have access to the whole hotel property",
        icon: "/images/place-types/hotel.svg",
      },
      {
        id: "hotel-room",
        title: "Hotel rooms",
        description: "Guests have private hotel rooms in your property",
        icon: "/images/place-types/room.svg",
      },
      {
        id: "boutique-hotel",
        title: "Boutique hotel",
        description: "A unique hotel experience with personalized service and distinctive character",
        icon: "/images/place-types/hotel.svg",
      },
    ],
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (placeType) {
      localStorage.setItem("placeType", placeType);
      router.push("/host/create/location");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-[32px] font-semibold text-[#222222] mb-4">
            What type of place will guests have?
          </h1>
          <p className="text-[#717171] text-lg">
            Choose the option that best describes your place
          </p>
        </div>

        <div className="space-y-4">
          {placeTypes[selectedPropertyType]?.map((type) => (
            <button
              key={type.id}
              onClick={() => setPlaceType(type.id)}
              className={`w-full flex items-center gap-6 p-6 rounded-xl border-2 transition-all ${
                placeType === type.id
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
              disabled={!placeType}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
                placeType
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