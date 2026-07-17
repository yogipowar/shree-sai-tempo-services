import Button from '../components/Button';
import { CONTACT_INFO, telHref } from '../data/content';
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
          <p className="cta__subtitle">
            Book reliable transportation anywhere in India — call toll free {CONTACT_INFO.tollFree}.
          </p>
          <div className="cta__actions">
            <Button href="#contact" variant="orange">
              Book Now
            </Button>
            <Button href={telHref(CONTACT_INFO.tollFree)} variant="ghost-white">
              Call Toll Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
