export const IMAGES = {
  logo: '/logo.png',
  hero: '/images/hero-tempo.jpg',
  about: '/images/about-truck.jpg',
  whyUs: '/images/why-us-tempo.jpg',
  puneSkyline: '/images/hero-tempo.jpg',
  fleet: {
    miniTempo: '/images/fleet-tata-ace.jpg',
    pickup: '/images/fleet-bolero.jpg',
    tataAce: '/images/fleet-tata-ace.jpg',
    mahindraJeeto: '/images/why-us-tempo.jpg',
    largeTempo: '/images/fleet-tata-407.jpg',
  },
  fallback: '/images/hero-tempo.jpg',
};

export function getAvatarUrl(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1A2B48&color=fff&size=150&bold=true&font-size=0.4`;
}
