import { FLEET } from '../data/content';
import { IMAGES } from '../data/images';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SafeImage from '../components/SafeImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Fleet.css';

export default function Fleet() {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <section id="fleet" className="section section--light">
      <div className="container">
        <SectionHeading
          label="Our Fleet"
          title="Vehicles for Every Need"
          subtitle="From autos and mini tempos to heavy trailers — vehicles for every load size, anywhere in India."
        />

        <div
          ref={ref}
          className={`fleet__grid fade-up ${visible ? 'visible' : ''}`}
        >
          {FLEET.map((vehicle, index) => (
            <article
              key={vehicle.name}
              className="fleet-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="fleet-card__image">
                <SafeImage
                  src={vehicle.image}
                  fallback={IMAGES.fallback}
                  alt={`${vehicle.name} vehicle`}
                  loading="lazy"
                />
              </div>
              <div className="fleet-card__body">
                <h3 className="fleet-card__name">{vehicle.name}</h3>
                <div className="fleet-card__meta">
                  <div>
                    <span className="fleet-card__label">Load Capacity</span>
                    <span className="fleet-card__value">{vehicle.capacity}</span>
                  </div>
                  <div>
                    <span className="fleet-card__label">Best For</span>
                    <span className="fleet-card__value">{vehicle.bestFor}</span>
                  </div>
                </div>
                <Button href="#contact" variant="orange" className="btn--sm fleet-card__btn">
                  Book Now
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
