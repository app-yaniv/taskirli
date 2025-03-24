"use client";

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useLocale } from '@/app/contexts/LocaleContext';

// Language regions for organization
const regions = {
  AMERICAS: 'Americas',
  EUROPE: 'Europe',
  ASIA_PACIFIC: 'Asia Pacific',
  MIDDLE_EAST: 'Middle East',
  AFRICA: 'Africa',
} as const;

// Language options with English and native names
const languages = [
  // Americas
  { code: 'en-US', name: 'English', nativeName: 'English', region: 'United States', area: regions.AMERICAS },
  { code: 'en-CA', name: 'English', nativeName: 'English', region: 'Canada', area: regions.AMERICAS },
  { code: 'es-MX', name: 'Spanish', nativeName: 'Español', region: 'México', area: regions.AMERICAS },
  { code: 'pt-BR', name: 'Portuguese', nativeName: 'Português', region: 'Brasil', area: regions.AMERICAS },
  { code: 'es-AR', name: 'Spanish', nativeName: 'Español', region: 'Argentina', area: regions.AMERICAS },
  { code: 'fr-CA', name: 'French', nativeName: 'Français', region: 'Canada', area: regions.AMERICAS },

  // Europe
  { code: 'en-GB', name: 'English', nativeName: 'English', region: 'United Kingdom', area: regions.EUROPE },
  { code: 'fr-FR', name: 'French', nativeName: 'Français', region: 'France', area: regions.EUROPE },
  { code: 'de-DE', name: 'German', nativeName: 'Deutsch', region: 'Deutschland', area: regions.EUROPE },
  { code: 'it-IT', name: 'Italian', nativeName: 'Italiano', region: 'Italia', area: regions.EUROPE },
  { code: 'es-ES', name: 'Spanish', nativeName: 'Español', region: 'España', area: regions.EUROPE },
  { code: 'pt-PT', name: 'Portuguese', nativeName: 'Português', region: 'Portugal', area: regions.EUROPE },
  { code: 'nl-NL', name: 'Dutch', nativeName: 'Nederlands', region: 'Nederland', area: regions.EUROPE },
  { code: 'ru-RU', name: 'Russian', nativeName: 'Русский', region: 'Россия', area: regions.EUROPE },
  { code: 'pl-PL', name: 'Polish', nativeName: 'Polski', region: 'Polska', area: regions.EUROPE },
  { code: 'uk-UA', name: 'Ukrainian', nativeName: 'Українська', region: 'Україна', area: regions.EUROPE },
  { code: 'el-GR', name: 'Greek', nativeName: 'Ελληνικά', region: 'Ελλάδα', area: regions.EUROPE },
  { code: 'sv-SE', name: 'Swedish', nativeName: 'Svenska', region: 'Sverige', area: regions.EUROPE },
  { code: 'da-DK', name: 'Danish', nativeName: 'Dansk', region: 'Danmark', area: regions.EUROPE },
  { code: 'fi-FI', name: 'Finnish', nativeName: 'Suomi', region: 'Suomi', area: regions.EUROPE },
  { code: 'no-NO', name: 'Norwegian', nativeName: 'Norsk', region: 'Norge', area: regions.EUROPE },

  // Asia Pacific
  { code: 'ja-JP', name: 'Japanese', nativeName: '日本語', region: '日本', area: regions.ASIA_PACIFIC },
  { code: 'ko-KR', name: 'Korean', nativeName: '한국어', region: '대한민국', area: regions.ASIA_PACIFIC },
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '中文', region: '中国', area: regions.ASIA_PACIFIC },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '中文', region: '台灣', area: regions.ASIA_PACIFIC },
  { code: 'zh-HK', name: 'Chinese (Traditional)', nativeName: '中文', region: '香港', area: regions.ASIA_PACIFIC },
  { code: 'hi-IN', name: 'Hindi', nativeName: 'हिन्दी', region: 'भारत', area: regions.ASIA_PACIFIC },
  { code: 'bn-IN', name: 'Bengali', nativeName: 'বাংলা', region: 'ভারত', area: regions.ASIA_PACIFIC },
  { code: 'th-TH', name: 'Thai', nativeName: 'ไทย', region: 'ประเทศไทย', area: regions.ASIA_PACIFIC },
  { code: 'vi-VN', name: 'Vietnamese', nativeName: 'Tiếng Việt', region: 'Việt Nam', area: regions.ASIA_PACIFIC },
  { code: 'id-ID', name: 'Indonesian', nativeName: 'Bahasa Indonesia', region: 'Indonesia', area: regions.ASIA_PACIFIC },
  { code: 'ms-MY', name: 'Malay', nativeName: 'Bahasa Melayu', region: 'Malaysia', area: regions.ASIA_PACIFIC },
  { code: 'tl-PH', name: 'Filipino', nativeName: 'Filipino', region: 'Philippines', area: regions.ASIA_PACIFIC },

  // Middle East
  { code: 'he-IL', name: 'Hebrew', nativeName: 'עברית', region: 'ישראל', area: regions.MIDDLE_EAST, rtl: true },
  { code: 'ar-SA', name: 'Arabic', nativeName: 'العربية', region: 'السعودية', area: regions.MIDDLE_EAST, rtl: true },
  { code: 'ar-AE', name: 'Arabic', nativeName: 'العربية', region: 'الإمارات', area: regions.MIDDLE_EAST, rtl: true },
  { code: 'ar-EG', name: 'Arabic', nativeName: 'العربية', region: 'مصر', area: regions.MIDDLE_EAST, rtl: true },
  { code: 'fa-IR', name: 'Persian', nativeName: 'فارسی', region: 'ایران', area: regions.MIDDLE_EAST, rtl: true },
  { code: 'tr-TR', name: 'Turkish', nativeName: 'Türkçe', region: 'Türkiye', area: regions.MIDDLE_EAST },

  // Africa
  { code: 'ar-MA', name: 'Arabic', nativeName: 'العربية', region: 'المغرب', area: regions.AFRICA, rtl: true },
  { code: 'fr-MA', name: 'French', nativeName: 'Français', region: 'Maroc', area: regions.AFRICA },
  { code: 'ar-TN', name: 'Arabic', nativeName: 'العربية', region: 'تونس', area: regions.AFRICA, rtl: true },
  { code: 'fr-SN', name: 'French', nativeName: 'Français', region: 'Sénégal', area: regions.AFRICA },
  { code: 'en-NG', name: 'English', nativeName: 'English', region: 'Nigeria', area: regions.AFRICA },
  { code: 'en-ZA', name: 'English', nativeName: 'English', region: 'South Africa', area: regions.AFRICA },
  { code: 'sw-KE', name: 'Swahili', nativeName: 'Kiswahili', region: 'Kenya', area: regions.AFRICA },
];

// Group languages by region
const groupedLanguages = languages.reduce((acc, lang) => {
  if (!acc[lang.area]) {
    acc[lang.area] = [];
  }
  acc[lang.area].push(lang);
  return acc;
}, {} as Record<string, typeof languages>);

// Sort languages within each region alphabetically by region name
Object.keys(groupedLanguages).forEach(region => {
  groupedLanguages[region].sort((a, b) => a.region.localeCompare(b.region));
});

// Currency options with native names
const currencies = [
  // Major Global Currencies
  { code: 'USD', symbol: '$', name: 'US Dollar', nativeName: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro', nativeName: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound', nativeName: 'British Pound Sterling' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', nativeName: '日本円' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', nativeName: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', nativeName: 'Canadian Dollar' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', nativeName: '人民币' },
  { code: 'KRW', symbol: '₩', name: 'South Korean Won', nativeName: '대한민국 원' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', nativeName: 'भारतीय रुपया' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', nativeName: 'Real Brasileiro' },
  
  // European Currencies
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', nativeName: 'Schweizer Franken' },
  { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', nativeName: 'Svensk Krona' },
  { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', nativeName: 'Norsk Krone' },
  { code: 'DKK', symbol: 'kr', name: 'Danish Krone', nativeName: 'Dansk Krone' },
  { code: 'PLN', symbol: 'zł', name: 'Polish Złoty', nativeName: 'Polski Złoty' },
  { code: 'TRY', symbol: '₺', name: 'Turkish Lira', nativeName: 'Türk Lirası' },
  { code: 'RUB', symbol: '₽', name: 'Russian Ruble', nativeName: 'Российский рубль' },
  { code: 'HUF', symbol: 'Ft', name: 'Hungarian Forint', nativeName: 'Magyar Forint' },
  { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna', nativeName: 'Česká Koruna' },
  
  // Middle Eastern Currencies
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', nativeName: 'ريال سعودي' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', nativeName: 'درهم إماراتي' },
  { code: 'ILS', symbol: '₪', name: 'Israeli New Shekel', nativeName: 'שקל חדש' },
  { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound', nativeName: 'جنيه مصري' },
  { code: 'IRR', symbol: '﷼', name: 'Iranian Rial', nativeName: 'ریال ایران' },
  
  // Asian Currencies
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', nativeName: 'Singapore Dollar' },
  { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', nativeName: '港幣' },
  { code: 'TWD', symbol: 'NT$', name: 'New Taiwan Dollar', nativeName: '新台幣' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht', nativeName: 'บาทไทย' },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', nativeName: 'Rupiah Indonesia' },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', nativeName: 'Ringgit Malaysia' },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso', nativeName: 'Piso ng Pilipinas' },
  { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', nativeName: 'Đồng Việt Nam' },
  
  // African Currencies
  { code: 'ZAR', symbol: 'R', name: 'South African Rand', nativeName: 'South African Rand' },
  { code: 'MAD', symbol: 'د.م.', name: 'Moroccan Dirham', nativeName: 'درهم مغربي' },
  { code: 'TND', symbol: 'د.ت', name: 'Tunisian Dinar', nativeName: 'دينار تونسي' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', nativeName: 'Nigerian Naira' },
  { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling', nativeName: 'Kenyan Shilling' },
];

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LanguageModal({ isOpen, onClose }: LanguageModalProps) {
  const [activeTab, setActiveTab] = useState<'language' | 'currency'>('language');
  const { language, currency, setLanguage, setCurrency } = useLocale();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter languages based on search query
  const filteredLanguages = Object.entries(groupedLanguages).reduce((acc, [region, langs]) => {
    const filteredLangs = langs.filter(lang => 
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.region.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredLangs.length > 0) {
      acc[region] = filteredLangs;
    }
    return acc;
  }, {} as Record<string, typeof languages>);

  // Filter currencies based on search query
  const filteredCurrencies = currencies.filter(curr => 
    curr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    curr.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = () => {
    onClose();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                      Language and Currency
                    </Dialog.Title>

                    {/* Tabs */}
                    <div className="mt-4 border-b border-gray-200">
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <button
                          onClick={() => setActiveTab('language')}
                          className={`${
                            activeTab === 'language'
                              ? 'border-rose-500 text-rose-600'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                          } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                        >
                          Language
                        </button>
                        <button
                          onClick={() => setActiveTab('currency')}
                          className={`${
                            activeTab === 'currency'
                              ? 'border-rose-500 text-rose-600'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                          } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                        >
                          Currency
                        </button>
                      </nav>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-4 relative">
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                          placeholder={`Search ${activeTab === 'language' ? 'languages' : 'currencies'}...`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                      {activeTab === 'language' ? (
                        <div className="space-y-8">
                          {Object.entries(filteredLanguages).map(([region, langs]) => (
                            <div key={region}>
                              <h3 className="text-sm font-medium text-gray-500 mb-3">{region}</h3>
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {langs.map((lang) => (
                                  <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code)}
                                    className={`${
                                      language === lang.code
                                        ? 'border-rose-500 bg-rose-50'
                                        : 'border-gray-200 hover:bg-gray-50'
                                    } flex items-start space-x-4 rounded-lg border p-4 text-left ${
                                      lang.rtl ? 'text-right' : 'text-left'
                                    }`}
                                    dir={lang.rtl ? 'rtl' : 'ltr'}
                                  >
                                    <div>
                                      <p className="text-sm font-medium text-gray-900">{lang.name}</p>
                                      <p className="text-sm text-gray-500">{lang.nativeName}</p>
                                      <p className="text-sm text-gray-400">{lang.region}</p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                          {Object.keys(filteredLanguages).length === 0 && (
                            <div className="text-center py-4 text-gray-500">
                              No languages found matching your search.
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {filteredCurrencies.map((curr) => (
                            <button
                              key={curr.code}
                              onClick={() => setCurrency(curr.code)}
                              className={`${
                                currency === curr.code
                                  ? 'border-rose-500 bg-rose-50'
                                  : 'border-gray-200 hover:bg-gray-50'
                              } flex items-start space-x-4 rounded-lg border p-4 text-left`}
                            >
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {curr.symbol} - {curr.code}
                                </p>
                                <p className="text-sm text-gray-500">{curr.name}</p>
                                <p className="text-sm text-gray-400">{curr.nativeName}</p>
                              </div>
                            </button>
                          ))}
                          {filteredCurrencies.length === 0 && (
                            <div className="text-center py-4 text-gray-500 col-span-2">
                              No currencies found matching your search.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 sm:ml-3 sm:w-auto"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 