Set up the frontend according to the following prompt:
  <frontend-prompt>
  Create detailed components with these requirements:
  1. Use 'use client' directive for client-side components
  2. Make sure to concatenate strings correctly using backslash
  3. Style with Tailwind CSS utility classes for responsive design
  4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
  5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
  6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
  7. Create root layout.tsx page that wraps necessary navigation items to all pages
  8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
  9. Accurately implement necessary grid layouts
  10. Follow proper import practices:
     - Use @/ path aliases
     - Keep component imports organized
     - Update current src/app/page.tsx with new comprehensive code
     - Don't forget root route (page.tsx) handling
     - You MUST complete the entire prompt before stopping
  </frontend-prompt>

  <summary_title>
Airbnb Property Listing Interface with Pool-Focused Filtering
</summary_title>

<image_analysis>
1. Navigation Elements:
- Primary navigation: Add Listing, Menu, Account (as specified)
- Secondary nav: Stays, Experiences in header
- Logo: Airbnb logo positioned top-left
- Search bar: Centered with Where/Check-in/Check-out/Who fields
- Language/currency selector and user profile in top-right
- Filter button and "Prices include all fees" toggle in listing view

2. Layout Components:
- Header height: 80px
- Search bar: 460px width, centered
- Category scroll bar: 100% width, 120px height
- Property cards: ~300px width, variable height
- Grid spacing: 24px between items

3. Content Sections:
- Category carousel with icons and labels
- Property listing grid (3 columns on desktop)
- Property cards showing:
  - Image carousel
  - Location/distance
  - Dates available
  - Price per night
  - Rating
  - Guest favorite badge

4. Interactive Controls:
- Heart icons for favoriting
- Image carousel dots
- Category scroll arrows
- Search bar with dropdown inputs
- Filter button
- Show map toggle

5. Colors:
- Primary: #FF385C (Airbnb red)
- Secondary: #222222 (Text)
- Background: #FFFFFF
- Border: #DDDDDD
- Rating star: #FF385C

6. Grid/Layout Structure:
- Max-width: 1760px
- Responsive grid: 3 columns desktop, 2 tablet, 1 mobile
- Padding: 24px container
- Gap: 24px between cards
</image_analysis>

<development_planning>
1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── SearchBar
│   │   └── CategoryBar
│   ├── features/
│   │   ├── PropertyCard
│   │   ├── ImageCarousel
│   │   └── Filters
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```

2. Key Features:
- Property search functionality
- Category filtering
- Image carousel
- Favoriting system
- Price display with currency conversion
- Rating system
- Guest favorite badges

3. State Management:
```typescript
interface AppState {
  search: {
    location: string;
    checkIn: Date;
    checkOut: Date;
    guests: number;
  };
  filters: {
    categories: string[];
    priceRange: [number, number];
    amenities: string[];
  };
  properties: {
    items: Property[];
    loading: boolean;
    error: string | null;
  };
}
```

4. Component Architecture:
- App
  |- Header
  |- SearchBar
  |- CategoryBar
  |- PropertyGrid
     |- PropertyCard
        |- ImageCarousel
        |- PropertyInfo
        |- PriceDisplay

5. Responsive Breakpoints:
```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 744px,
  'desktop': 1128px,
  'large': 1440px,
  'xlarge': 1760px
);
```
</development_planning>