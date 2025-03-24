"use client";

import { useState } from 'react';

interface DateSearchProps {
  dates: {
    startDate: Date | null;
    endDate: Date | null;
  };
  onChange: (dates: { startDate: Date | null; endDate: Date | null }) => void;
}

type DateTab = 'dates' | 'months' | 'flexible';

export default function DateSearch({ dates, onChange }: DateSearchProps) {
  const [activeTab, setActiveTab] = useState<DateTab>('dates');
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const months = ['March 2025', 'April 2025'];
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const flexibleOptions = ['1 day', '2 days', '3 days', '7 days', '14 days'];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = (monthStr: string) => {
    const [month, year] = monthStr.split(' ');
    const monthIndex = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December']
                       .indexOf(month);
    const daysInMonth = getDaysInMonth(monthIndex, parseInt(year));
    const firstDay = getFirstDayOfMonth(monthIndex, parseInt(year));
    
    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="h-10"></div>);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(parseInt(year), monthIndex, i);
      const isStartDate = dates.startDate?.toDateString() === date.toDateString();
      const isEndDate = dates.endDate?.toDateString() === date.toDateString();
      const isInRange = dates.startDate && dates.endDate && 
                       date > dates.startDate && date < dates.endDate;

      calendarDays.push(
        <button
          key={`day-${i}`}
          onClick={() => {
            if (!dates.startDate || (dates.startDate && dates.endDate)) {
              // Start new selection
              onChange({ startDate: date, endDate: null });
            } else {
              // Complete the selection
              if (date < dates.startDate) {
                onChange({ startDate: date, endDate: dates.startDate });
              } else {
                onChange({ startDate: dates.startDate, endDate: date });
              }
            }
          }}
          className={`h-10 w-10 rounded-full flex items-center justify-center transition
            ${isStartDate || isEndDate ? 'bg-black text-white hover:bg-black' : 'hover:bg-gray-100'}
            ${isInRange ? 'bg-gray-100' : ''}
            ${date < new Date() ? 'text-gray-300 cursor-not-allowed' : ''}`}
          disabled={date < new Date()}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="w-full">
        <div className="font-medium mb-4">{monthStr}</div>
        <div className="grid grid-cols-7 gap-1 text-sm mb-2">
          {weekDays.map((day, index) => (
            <div key={`header-${index}`} className="h-10 flex items-center justify-center font-medium">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('dates')}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeTab === 'dates' ? 'bg-black text-white' : 'hover:bg-gray-100'
          }`}
        >
          Dates
        </button>
        <button
          onClick={() => setActiveTab('months')}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeTab === 'months' ? 'bg-black text-white' : 'hover:bg-gray-100'
          }`}
        >
          Months
        </button>
        <button
          onClick={() => setActiveTab('flexible')}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeTab === 'flexible' ? 'bg-black text-white' : 'hover:bg-gray-100'
          }`}
        >
          Flexible
        </button>
      </div>

      {/* Calendar View */}
      {activeTab === 'dates' && (
        <div className="grid grid-cols-2 gap-12">
          {months.map((month, index) => (
            <div key={`month-${index}`}>
              {renderCalendar(month)}
            </div>
          ))}
        </div>
      )}

      {/* Flexible Options */}
      {activeTab === 'flexible' && (
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 border rounded-full text-sm font-medium hover:border-black transition">
            Exact dates
          </button>
          {flexibleOptions.map(option => (
            <button
              key={option}
              className="px-4 py-2 border rounded-full text-sm font-medium hover:border-black transition"
            >
              ± {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 