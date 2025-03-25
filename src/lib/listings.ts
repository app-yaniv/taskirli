interface Review {
  id: number
  user: {
    name: string
    image: string
    joinedDate: string
  }
  rating: number
  date: string
  content: string
}

interface ListingData {
  id: string
  title: string
  location: string
  specifications: string[]
  rating: number
  totalReviews: number
  host: {
    name: string
    image: string
    isSuperhost: boolean
    joinDate: string
    responseRate: number
    responseTime: string
    about: string
    languages: string[]
    work: string
  }
  price: number
  images: string[]
  description: string
  amenities: string[]
  reviews: Review[]
}

const listings: ListingData[] = [
  {
    id: '1',
    title: 'Stunning Beachfront Villa with Private Pool',
    location: 'Bali, Indonesia',
    specifications: ['6 guests', '3 bedrooms', '3 beds', '2 baths'],
    rating: 4.97,
    totalReviews: 128,
    host: {
      name: 'Sarah',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      isSuperhost: true,
      joinDate: 'January 2018',
      responseRate: 100,
      responseTime: 'within an hour',
      about: 'I love traveling and meeting new people from around the world. I enjoy sharing my beautiful villa with guests and helping them create unforgettable memories in Bali.',
      languages: ['English', 'Indonesian'],
      work: 'Property Manager',
    },
    price: 350,
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
    ],
    description:
      'Experience luxury living in this stunning beachfront villa. Wake up to panoramic ocean views and enjoy your morning coffee by the private infinity pool. The villa features modern amenities, spacious living areas, and direct beach access.',
    amenities: [
      'Wifi',
      'Pool',
      'Kitchen',
      'Air conditioning',
      'Private entrance',
      'Workspace',
      'TV',
      'Coffee',
      'Private bathroom',
      'Parking',
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: 'John',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
          joinedDate: 'March 2020',
        },
        rating: 5,
        date: 'August 2023',
        content:
          'Amazing villa with breathtaking views! Sarah was an excellent host and made sure we had everything we needed. Will definitely come back!',
      },
      {
        id: 2,
        user: {
          name: 'Emma',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          joinedDate: 'June 2019',
        },
        rating: 5,
        date: 'July 2023',
        content:
          'Perfect location right on the beach. The villa is beautifully designed and well-maintained. Had a wonderful stay!',
      },
    ],
  },
  {
    id: '2',
    title: 'Modern Apartment in Downtown',
    location: 'Tokyo, Japan',
    specifications: ['4 guests', '2 bedrooms', '2 beds', '1 bath'],
    rating: 4.89,
    totalReviews: 95,
    host: {
      name: 'Ken',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      isSuperhost: true,
      joinDate: 'March 2019',
      responseRate: 98,
      responseTime: 'within a few hours',
      about: 'Passionate about architecture and design. I love sharing my modern apartment with travelers who appreciate minimalist aesthetics.',
      languages: ['Japanese', 'English'],
      work: 'Architect',
    },
    price: 200,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    ],
    description: 'Experience Tokyo living in this sleek, modern apartment. Located in the heart of the city, this space offers stunning city views and easy access to major attractions.',
    amenities: [
      'Wifi',
      'Kitchen',
      'Air conditioning',
      'Workspace',
      'TV',
      'Washing machine',
      'Private bathroom',
      'Elevator',
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: 'Maria',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          joinedDate: 'June 2020',
        },
        rating: 5,
        date: 'September 2023',
        content: 'Beautiful apartment with amazing city views. Ken was very helpful and responsive.',
      },
    ],
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, United States',
    specifications: ['8 guests', '4 bedrooms', '6 beds', '3 baths'],
    rating: 4.95,
    totalReviews: 156,
    host: {
      name: 'Michael',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      isSuperhost: true,
      joinDate: 'December 2017',
      responseRate: 100,
      responseTime: 'within an hour',
      about: 'Mountain enthusiast and local guide. I love helping guests discover the beauty of Aspen.',
      languages: ['English', 'Spanish'],
      work: 'Mountain Guide',
    },
    price: 400,
    images: [
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c',
    ],
    description: 'Escape to this luxurious mountain cabin. Perfect for families or groups, featuring stunning mountain views, a hot tub, and easy access to ski slopes.',
    amenities: [
      'Wifi',
      'Hot tub',
      'Kitchen',
      'Fireplace',
      'Ski-in/Ski-out',
      'Parking',
      'Washer/Dryer',
      'Heating',
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: 'David',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
          joinedDate: 'January 2021',
        },
        rating: 5,
        date: 'July 2023',
        content: 'Perfect winter getaway! The cabin is beautiful and Michael was an excellent host.',
      },
    ],
  },
  {
    id: '4',
    title: 'Luxury Penthouse with City Views',
    location: 'Dubai, UAE',
    specifications: ['6 guests', '3 bedrooms', '3 beds', '3.5 baths'],
    rating: 4.92,
    totalReviews: 84,
    host: {
      name: 'Fatima',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      isSuperhost: true,
      joinDate: 'June 2020',
      responseRate: 99,
      responseTime: 'within a few hours',
      about: 'Luxury property specialist with a passion for hospitality. I ensure all my guests have an unforgettable stay.',
      languages: ['Arabic', 'English'],
      work: 'Property Manager',
    },
    price: 800,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    ],
    description: 'Experience ultimate luxury in this stunning penthouse. Floor-to-ceiling windows offer breathtaking views of Dubai skyline. Features high-end amenities and designer furnishings.',
    amenities: [
      'Wifi',
      'Pool',
      'Gym',
      'Kitchen',
      'Air conditioning',
      'Private elevator',
      'Concierge',
      'Parking',
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: 'James',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
          joinedDate: 'April 2021',
        },
        rating: 5,
        date: 'August 2023',
        content: 'Absolutely incredible property! The views are unmatched and Fatima was a wonderful host.',
      },
    ],
  },
]

export function getListingById(id: string): ListingData | undefined {
  return listings.find(listing => listing.id === id)
}

export function getFeaturedListings() {
  return listings.map(({ id, title, location, images, price, rating }) => ({
    id,
    title,
    location,
    images,
    price,
    rating,
  }))
}

export type { ListingData, Review } 