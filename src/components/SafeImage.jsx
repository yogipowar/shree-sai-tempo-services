import { useState } from 'react';
import { IMAGES } from '../data/images';

const FALLBACK = IMAGES.fallback;

export default function SafeImage({ src, fallback = FALLBACK, alt, className, loading }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
