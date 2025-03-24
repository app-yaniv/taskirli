"use client";

interface GuestSearchProps {
  guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
  onChange: (guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }) => void;
}

interface CounterProps {
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
}

function Counter({ label, description, value, onChange, min = 0 }: CounterProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="flex items-center gap-4">
        <button
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition
            ${value <= min 
              ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
              : 'border-gray-400 text-gray-600 hover:border-gray-700 hover:text-gray-700'
            }`}
          onClick={() => value > min && onChange(value - 1)}
          disabled={value <= min}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <span className="w-6 text-center">{value}</span>
        <button
          className="w-8 h-8 rounded-full border border-gray-400 text-gray-600 flex items-center justify-center hover:border-gray-700 hover:text-gray-700 transition"
          onClick={() => onChange(value + 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function GuestSearch({ guests, onChange }: GuestSearchProps) {
  const updateGuests = (key: keyof typeof guests, value: number) => {
    onChange({
      ...guests,
      [key]: Math.max(0, value)
    });
  };

  return (
    <div className="bg-white rounded-2xl">
      {/* Adults */}
      <div className="flex items-center justify-between py-4">
        <div>
          <div className="font-medium">Adults</div>
          <div className="text-sm text-gray-500">Ages 13 or above</div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateGuests('adults', guests.adults - 1)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              guests.adults <= 0 ? 'border-gray-200 text-gray-200' : 'border-gray-400 text-gray-400 hover:border-gray-700 hover:text-gray-700'
            }`}
            disabled={guests.adults <= 0}
          >
            -
          </button>
          <span className="w-6 text-center">{guests.adults}</span>
          <button
            onClick={() => updateGuests('adults', guests.adults + 1)}
            className="w-8 h-8 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center hover:border-gray-700 hover:text-gray-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Children */}
      <div className="flex items-center justify-between py-4 border-t">
        <div>
          <div className="font-medium">Children</div>
          <div className="text-sm text-gray-500">Ages 2–12</div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateGuests('children', guests.children - 1)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              guests.children <= 0 ? 'border-gray-200 text-gray-200' : 'border-gray-400 text-gray-400 hover:border-gray-700 hover:text-gray-700'
            }`}
            disabled={guests.children <= 0}
          >
            -
          </button>
          <span className="w-6 text-center">{guests.children}</span>
          <button
            onClick={() => updateGuests('children', guests.children + 1)}
            className="w-8 h-8 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center hover:border-gray-700 hover:text-gray-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Infants */}
      <div className="flex items-center justify-between py-4 border-t">
        <div>
          <div className="font-medium">Infants</div>
          <div className="text-sm text-gray-500">Under 2</div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateGuests('infants', guests.infants - 1)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              guests.infants <= 0 ? 'border-gray-200 text-gray-200' : 'border-gray-400 text-gray-400 hover:border-gray-700 hover:text-gray-700'
            }`}
            disabled={guests.infants <= 0}
          >
            -
          </button>
          <span className="w-6 text-center">{guests.infants}</span>
          <button
            onClick={() => updateGuests('infants', guests.infants + 1)}
            className="w-8 h-8 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center hover:border-gray-700 hover:text-gray-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Pets */}
      <div className="flex items-center justify-between py-4 border-t">
        <div>
          <div className="font-medium">Pets</div>
          <div className="text-sm text-gray-500 underline cursor-pointer">Bringing a service animal?</div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateGuests('pets', guests.pets - 1)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              guests.pets <= 0 ? 'border-gray-200 text-gray-200' : 'border-gray-400 text-gray-400 hover:border-gray-700 hover:text-gray-700'
            }`}
            disabled={guests.pets <= 0}
          >
            -
          </button>
          <span className="w-6 text-center">{guests.pets}</span>
          <button
            onClick={() => updateGuests('pets', guests.pets + 1)}
            className="w-8 h-8 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center hover:border-gray-700 hover:text-gray-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
} 