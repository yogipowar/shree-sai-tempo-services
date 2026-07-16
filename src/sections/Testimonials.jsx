import { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../data/content';
import { getAvatarUrl } from '../data/images';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Testimonials.css';

function StarRating({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'stars__filled' : ''}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, visible] = useScrollAnimation(0.15);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" className="section section--light">
      <div className="container">
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          subtitle="Real reviews from satisfied customers across Pune."
        />

        <div
          ref={ref}
          className={`testimonials fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="testimonials__track">
            {TESTIMONIALS.map((item, index) => (
              <article
                key={item.name}
                className={`testimonial-card ${index === current ? 'testimonial-card--active' : ''}`}
                aria-hidden={index !== current}
              >
                <div className="testimonial-card__glass">
                  <img
                    src={getAvatarUrl(item.name)}
                    alt={item.name}
                    className="testimonial-card__photo"
                    loading="lazy"
                  />
                  <StarRating rating={item.rating} />
                  <p className="testimonial-card__review">&ldquo;{item.review}&rdquo;</p>
                  <h4 className="testimonial-card__name">{item.name}</h4>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonials__dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={index === current ? 'active' : ''}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
