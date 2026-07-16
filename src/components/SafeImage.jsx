import { useState } from 'react';

const FALLBACK = '/images/hero-tempo.jpg';

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
