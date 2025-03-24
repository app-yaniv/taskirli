"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LocaleContextType {
  language: string;
  currency: string;
  setLanguage: (lang: string) => void;
  setCurrency: (currency: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('USD');

  // Load saved preferences from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const savedCurrency = localStorage.getItem('currency');
    
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedCurrency) setCurrency(savedCurrency);
  }, []);

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem('language', language);
    localStorage.setItem('currency', currency);
  }, [language, currency]);

  return (
    <LocaleContext.Provider value={{ language, currency, setLanguage, setCurrency }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
} 