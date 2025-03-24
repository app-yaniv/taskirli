"use client";

interface GuestSearchProps {
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
  onChange: (guests: { adults: number; children: number; infants: number }) => void;
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
      [key]: value
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-1">
        <Counter
          label="Adults"
          description="Ages 13 or above"
          value={guests.adults}
          onChange={(value) => updateGuests('adults', value)}
          min={1}
        />
        <div className="border-b"></div>
        <Counter
          label="Children"
          description="Ages 2–12"
          value={guests.children}
          onChange={(value) => updateGuests('children', value)}
        />
        <div className="border-b"></div>
        <Counter
          label="Infants"
          description="Under 2"
          value={guests.infants}
          onChange={(value) => updateGuests('infants', value)}
        />
      </div>
    </div>
  );
} 