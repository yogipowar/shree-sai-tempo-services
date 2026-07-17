import { assetUrl } from '../utils/assetUrl';

export const IMAGES = {
  logo: assetUrl('logo.png'),
  hero: assetUrl('images/tempo.webp'),
  about: assetUrl('images/tempo.webp'),
  whyUs: assetUrl('images/tempo2.webp'),
  puneSkyline: assetUrl('images/hero-tempo.jpg'),
  fleet: {
    auto: assetUrl('images/fleet-auto.jpg'),
    miniTempo: assetUrl('images/fleet-tata-ace.jpg'),
    pickup: assetUrl('images/fleet-bolero.jpg'),
    tataAce: assetUrl('images/fleet-tata-ace.jpg'),
    mahindraJeeto: assetUrl('images/why-us-tempo.jpg'),
    largeTempo: assetUrl('images/fleet-tata-407.jpg'),
  },
  fallback: assetUrl('images/hero-tempo.jpg'),
};

export function getAvatarUrl(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1A2B48&color=fff&size=150&bold=true&font-size=0.4`;
}
