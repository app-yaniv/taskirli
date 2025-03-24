"use client";

import { useState } from 'react';
import LocationSearch from './LocationSearch';
import DateSearch from './DateSearch';
import GuestSearch from './GuestSearch';

export default function SearchBar() {
  const [activeSection, setActiveSection] = useState<'location' | 'dates' | 'guests' | null>(null);
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0 });

  const handleSectionClick = (section: 'location' | 'dates' | 'guests') => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="relative">
      <div className="hidden md:flex items-center gap-4 px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition">
        <button 
          className={`font-medium text-left min-w-32 ${activeSection === 'location' ? 'text-rose-500' : ''}`}
          onClick={() => handleSectionClick('location')}
        >
          {location || 'Anywhere'}
        </button>
        
        <span className="h-5 w-px bg-gray-300"></span>
        
        <button 
          className={`font-medium whitespace-nowrap ${activeSection === 'dates' ? 'text-rose-500' : ''}`}
          onClick={() => handleSectionClick('dates')}
        >
          {dates.startDate ? 'Selected dates' : 'Any week'}
        </button>
        
        <span className="h-5 w-px bg-gray-300"></span>
        
        <button 
          className={`text-gray-600 ${activeSection === 'guests' ? 'text-rose-500' : ''}`}
          onClick={() => handleSectionClick('guests')}
        >
          {guests.adults + guests.children > 0 
            ? `${guests.adults + guests.children} guests${guests.infants ? `, ${guests.infants} infants` : ''}`
            : 'Add guests'
          }
        </button>
        
        <button 
          className="bg-rose-500 p-2 rounded-full text-white hover:bg-rose-600 transition"
          onClick={() => {
            // Handle search
            setActiveSection(null);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>

      {/* Dropdown Menus */}
      {activeSection && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-xl border p-6 z-50">
          {activeSection === 'location' && (
            <LocationSearch 
              selected={location}
              onSelect={(loc) => {
                setLocation(loc);
                setActiveSection(null);
              }}
            />
          )}
          
          {activeSection === 'dates' && (
            <DateSearch
              dates={dates}
              onChange={(newDates) => {
                setDates(newDates);
                setActiveSection(null);
              }}
            />
          )}
          
          {activeSection === 'guests' && (
            <GuestSearch
              guests={guests}
              onChange={(newGuests) => {
                setGuests(newGuests);
                setActiveSection(null);
              }}
            />
          )}
        </div>
      )}

      {/* Overlay when dropdown is open */}
      {activeSection && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setActiveSection(null)}
        />
      )}
    </div>
  );
} 