"use client";

interface DateSearchProps {
  dates: {
    startDate: Date | null;
    endDate: Date | null;
  };
  onChange: (dates: { startDate: Date | null; endDate: Date | null }) => void;
}

export default function DateSearch({ dates, onChange }: DateSearchProps) {
  // For now, we'll just show a placeholder since we need to install a date picker library
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          When's your trip?
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="check-in" className="block text-sm text-gray-600 mb-1">Check in</label>
            <input
              type="date"
              id="check-in"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              value={dates.startDate?.toISOString().split('T')[0] || ''}
              onChange={(e) => {
                const newDate = e.target.value ? new Date(e.target.value) : null;
                onChange({
                  startDate: newDate,
                  endDate: dates.endDate
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="check-out" className="block text-sm text-gray-600 mb-1">Check out</label>
            <input
              type="date"
              id="check-out"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              value={dates.endDate?.toISOString().split('T')[0] || ''}
              min={dates.startDate?.toISOString().split('T')[0]}
              onChange={(e) => {
                const newDate = e.target.value ? new Date(e.target.value) : null;
                onChange({
                  startDate: dates.startDate,
                  endDate: newDate
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900">Quick select</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Weekend', 'Week', 'Month', 'Flexible'].map((option) => (
            <button
              key={option}
              className="px-4 py-3 text-center border rounded-xl hover:border-gray-400 transition"
              onClick={() => {
                // Here we would implement the logic for quick date selection
                // For now, it's just a placeholder
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 