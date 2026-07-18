import { assetUrl } from '../utils/assetUrl';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_BADGES = [
  'Pan-India Coverage',
  'Same Day Delivery',
  'All Vehicle Types',
  '24×7 Support',
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Years of Service' },
  { value: 5000, suffix: '+', label: 'Deliveries Completed' },
  { value: 1500, suffix: '+', label: 'Happy Customers' },
  { value: 24, suffix: '×7', label: 'Customer Support' },
];

export const DIRECTOR = {
  name: 'S G Jamadar',
  title: 'Founder & Director',
  profile:
    'With 5 years in transportation and logistics, I lead Shree Sai Tempo Services with one goal — safe, affordable, on-time goods movement across India for families and businesses alike.',
};

export const SERVICES = [
  {
    icon: '🚚',
    title: 'Local Goods Transport',
    description: 'Quick and reliable transport for local goods across cities in India with flexible scheduling and safe handling.',
  },
  {
    icon: '🏠',
    title: 'Home Shifting',
    description: 'Stress-free home relocation with careful packing, loading, and doorstep delivery at your new address.',
  },
  {
    icon: '🏢',
    title: 'Office Relocation',
    description: 'Efficient office moving services with minimal downtime and secure transport of equipment and furniture.',
  },
  {
    icon: '🛋️',
    title: 'Furniture Transportation',
    description: 'Safe transport of furniture and appliances with protective handling and experienced drivers.',
  },
  {
    icon: '🏭',
    title: 'Industrial Goods Transport',
    description: 'Heavy-duty logistics for industrial materials, machinery, and bulk goods with dedicated vehicles.',
  },
  {
    icon: '📦',
    title: 'Courier & Parcel Delivery',
    description: 'Fast parcel and courier delivery for businesses and individuals with same-day options available.',
  },
  {
    icon: '🏬',
    title: 'Warehouse Logistics',
    description: 'End-to-end warehouse pickup and distribution with organized loading and timely dispatch.',
  },
  {
    icon: '🚛',
    title: 'Commercial Transport',
    description: 'Scalable commercial transport solutions for retailers, wholesalers, and business operations across India.',
  },
];

export const WHY_CHOOSE_US = [
  'Safe Goods Handling',
  'GPS Tracking',
  'Experienced Drivers',
  'Affordable Pricing',
  'On-Time Delivery',
  'Doorstep Pickup & Drop',
  'Customer Support',
  'Flexible Booking',
];

export const HOW_IT_WORKS = [
  { step: 1, title: 'Book Online', icon: '📱' },
  { step: 2, title: 'Driver Assigned', icon: '👤' },
  { step: 3, title: 'Pickup', icon: '📍' },
  { step: 4, title: 'Safe Transportation', icon: '🛡️' },
  { step: 5, title: 'Successful Delivery', icon: '✅' },
];

export const FLEET = [
  {
    name: 'Auto / Three Wheeler',
    capacity: '300 kg',
    bestFor: 'Small parcels, last-mile delivery',
    image: assetUrl('images/Auto-Three-Wheeler.jpeg'),
  },
  {
    name: 'Mini Tempo',
    capacity: '500 kg',
    bestFor: 'Small parcels, local deliveries',
    image: assetUrl('images/Mini-Tempo.jpeg'),
  },
  {
    name: 'Mahindra Jeeto',
    capacity: '600 kg',
    bestFor: 'Urban deliveries, small loads',
    image: assetUrl('images/Mahindra-Jeeto.jpeg'),
  },
  {
    name: 'Tata Ace',
    capacity: '750 kg',
    bestFor: 'Commercial goods, parcels',
    image: assetUrl('images/Tata-Ace.jpeg'),
  },
  {
    name: 'Pickup Truck',
    capacity: '1 Ton',
    bestFor: 'Furniture, home shifting',
    image: assetUrl('images/Pickup-Truck.jpeg'),
  },
  {
    name: 'Tata 407 / Large Tempo',
    capacity: '2.5 Ton',
    bestFor: 'Industrial goods, bulk transport',
    image: assetUrl('images/Tata-470.jpg'),
  },
  {
    name: '14 ft Truck',
    capacity: '4 Ton',
    bestFor: 'Intercity goods, warehouse loads',
    image: assetUrl('images/14-ft-Truck.jpg'),
  },
  {
    name: '17 ft Truck',
    capacity: '6 Ton',
    bestFor: 'Commercial & industrial cargo',
    image: assetUrl('images/17-ft-Truck.jpg'),
  },
  {
    name: 'Container Truck',
    capacity: '9 Ton',
    bestFor: 'Secure long-distance shipments',
    image: assetUrl('images/Container-Truck.avif'),
  },
  {
    name: 'Heavy Trailer',
    capacity: '20+ Ton',
    bestFor: 'Heavy machinery, pan-India freight',
    image: assetUrl('images/Heavy-Trailer.webp'),
  },
];

export const SERVICE_AREAS = [
  { name: 'Mumbai', x: 28, y: 52 },
  { name: 'Pune', x: 32, y: 56 },
  { name: 'Delhi NCR', x: 42, y: 22 },
  { name: 'Bengaluru', x: 42, y: 68 },
  { name: 'Hyderabad', x: 48, y: 58 },
  { name: 'Chennai', x: 52, y: 72 },
  { name: 'Kolkata', x: 72, y: 42 },
  { name: 'Ahmedabad', x: 26, y: 42 },
  { name: 'Jaipur', x: 34, y: 30 },
  { name: 'Lucknow', x: 52, y: 28 },
  { name: 'Chandigarh', x: 40, y: 18 },
  { name: 'Indore', x: 38, y: 44 },
  { name: 'Nagpur', x: 48, y: 48 },
  { name: 'Surat', x: 28, y: 48 },
  { name: 'Kochi', x: 38, y: 78 },
  { name: 'Bhopal', x: 42, y: 40 },
];

export const TESTIMONIALS = [
  {
    name: 'Vikram Mehta',
    rating: 5,
    review: 'Excellent service! They shifted my entire office in one day without any damage. Professional team and very affordable rates.',
  },
  {
    name: 'Priya Deshmukh',
    rating: 5,
    review: 'Used Shree Sai for home shifting. The driver was punctual, careful with our furniture, and the pricing was transparent. Highly recommended!',
  },
  {
    name: 'Amit Kulkarni',
    rating: 5,
    review: 'Best tempo service for pan-India transport. Same-day local delivery and reliable intercity options. GPS tracking gave us peace of mind throughout.',
  },
  {
    name: 'Sneha Joshi',
    rating: 5,
    review: 'Reliable and professional. Booked online at midnight and got pickup early morning. Great customer support team!',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How do I book a tempo?',
    answer: 'You can book online through our contact form, call our toll-free number, or message us on WhatsApp. Share pickup and drop locations, and we will confirm your booking within minutes.',
  },
  {
    question: 'Do you provide same-day delivery?',
    answer: 'Yes! We offer same-day delivery in major cities across India. Book before noon for guaranteed same-day pickup and delivery in your local area.',
  },
  {
    question: 'Do you operate pan-India?',
    answer: 'Yes. Shree Sai Tempo Services provides local and intercity transportation across India — from metros like Mumbai, Delhi, Bengaluru, and Hyderabad to other cities and towns nationwide.',
  },
  {
    question: 'What types of vehicles do you offer?',
    answer: 'We offer a full fleet — autos, mini tempos, Tata Ace, pickups, Tata 407, 14 ft and 17 ft trucks, container trucks, and heavy trailers — so you can choose the right vehicle for any load size.',
  },
  {
    question: 'What are your service charges?',
    answer: 'Our pricing depends on distance, load size, and vehicle type. We offer transparent, affordable rates with no hidden charges. Contact us for a free quote.',
  },
  {
    question: 'Do you offer office shifting services?',
    answer: 'Absolutely. We specialize in office relocation with careful handling of equipment, furniture, and documents. We work around your schedule to minimize downtime.',
  },
  {
    question: 'Do you transport fragile items?',
    answer: 'Yes, our experienced drivers handle fragile items with extra care. We use proper padding and secure loading techniques to ensure safe delivery.',
  },
  {
    question: 'Is driver support available 24×7?',
    answer: 'Our customer support team is available 24×7. You can reach us anytime via our toll-free number for booking, tracking, or any assistance during your delivery.',
  },
];

export const CONTACT_INFO = {
  address: 'Shree Sai Tempo Services, EIFFEL City, C-3, Flat No. 908, Kharabwadi, Chakan, Pune, Maharashtra 410501, India',
  phone: '+91 9845643130',
  phone2: '+91 9561133855',
  tollFree: '1800 890 1234',
  gst: '27AABCS1234A1Z5',
  email: 'info@shreesaitempo.com',
  whatsapp: '919876543210',
  hours: 'Monday – Sunday: 24×7 Available',
  mapsUrl: 'https://maps.app.goo.gl/6M2Hs2xxkhDJqfPz5',
  mapsEmbed:
    'https://www.google.com/maps?q=18.7589499,73.8344093&z=15&output=embed',
};

/** Digits-only for tel: links */
export function telHref(number) {
  return `tel:${String(number).replace(/[^\d+]/g, '')}`;
}
