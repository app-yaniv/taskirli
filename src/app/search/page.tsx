"use client";

import { useState } from 'react';
import Link from 'next/link';
import LocationSearch from '../components/SearchBar/LocationSearch';
import DateSearch from '../components/SearchBar/DateSearch';
import GuestSearch from '../components/SearchBar/GuestSearch';

type SearchTab = 'stays' | 'experiences';
type SearchSection = 'where' | 'checkin' | 'checkout' | 'who';

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState<SearchTab>('stays');
  const [activeSection, setActiveSection] = useState<SearchSection>('where');
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0, pets: 0 });

  const formatDate = (date: Date | null) => {
    if (!date) return 'Add dates';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleDateChange = (newDates: { startDate: Date | null; endDate: Date | null }) => {
    setDates(newDates);
    if (newDates.startDate && !newDates.endDate) {
      setActiveSection('checkout');
    } else if (newDates.startDate && newDates.endDate) {
      setActiveSection('who');
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Header */}
      <header>
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            <Link href="/" className="text-rose-500 text-2xl font-bold">
              taskirli
            </Link>
          </div>
        </div>
      </header>

      {/* Main Tabs */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            <button
              className={`py-4 px-2 font-medium relative ${
                activeTab === 'stays' ? 'text-gray-900' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('stays')}
            >
              Stays
              {activeTab === 'stays' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800" />
              )}
            </button>
            <button
              className={`py-4 px-2 font-medium relative ${
                activeTab === 'experiences' ? 'text-gray-900' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('experiences')}
            >
              Experiences
              {activeTab === 'experiences' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Sections */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg divide-x divide-gray-200 flex">
            <button
              onClick={() => setActiveSection('where')}
              className={`flex-1 p-6 text-left ${activeSection === 'where' ? 'bg-gray-50' : ''}`}
            >
              <div className="text-xs font-bold mb-1">Where</div>
              <div className="text-gray-500">{location || 'Search destinations'}</div>
            </button>
            <button
              onClick={() => setActiveSection('checkin')}
              className={`flex-1 p-6 text-left ${activeSection === 'checkin' ? 'bg-gray-50' : ''}`}
            >
              <div className="text-xs font-bold mb-1">Check in</div>
              <div className="text-gray-500">{formatDate(dates.startDate)}</div>
            </button>
            <button
              onClick={() => setActiveSection('checkout')}
              className={`flex-1 p-6 text-left ${activeSection === 'checkout' ? 'bg-gray-50' : ''}`}
            >
              <div className="text-xs font-bold mb-1">Check out</div>
              <div className="text-gray-500">{formatDate(dates.endDate)}</div>
            </button>
            <button
              onClick={() => setActiveSection('who')}
              className={`flex-1 p-6 text-left ${activeSection === 'who' ? 'bg-gray-50' : ''}`}
            >
              <div className="text-xs font-bold mb-1">Who</div>
              <div className="text-gray-500">
                {guests.adults + guests.children > 0 
                  ? `${guests.adults + guests.children} guests${guests.infants ? `, ${guests.infants} infants` : ''}`
                  : 'Add guests'
                }
              </div>
            </button>
            <div className="flex items-center px-6">
              <button className="bg-rose-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-rose-600 transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {activeSection === 'where' && (
          <LocationSearch 
            selected={location}
            onSelect={(loc) => {
              setLocation(loc);
              setActiveSection('checkin');
            }}
          />
        )}
        
        {(activeSection === 'checkin' || activeSection === 'checkout') && (
          <DateSearch
            dates={dates}
            onChange={handleDateChange}
          />
        )}
        
        {activeSection === 'who' && (
          <GuestSearch
            guests={guests}
            onChange={setGuests}
          />
        )}
      </div>
    </div>
  );
} 