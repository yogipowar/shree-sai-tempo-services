import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CTA.css';

export default function CTA() {
  const [ref, visible] = useScrollAnimation(0.2);

  return (
    <section className="cta">
      <div className="container">
        <div
          ref={ref}
          className={`cta__inner fade-up ${visible ? 'visible' : ''}`}
        >
          <h2 className="cta__title">Need a Tempo Today?</h2>
          <p className="cta__subtitle">Book reliable transportation in minutes.</p>
          <div className="cta__actions">
            <Button href="#contact" variant="orange">
              Book Now
            </Button>
            <Button href="tel:+919876543210" variant="ghost-white">
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
