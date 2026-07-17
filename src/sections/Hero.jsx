import { TRUST_BADGES, CONTACT_INFO, telHref } from '../data/content';
import { IMAGES } from '../data/images';
import Button from '../components/Button';
import SafeImage from '../components/SafeImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Hero.css';

const FLOATING_ICONS = ['📦', '🚚', '📍', '✅'];

export default function Hero() {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__gradient hero__gradient--1" />
        <div className="hero__gradient hero__gradient--2" />
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      <div className="container hero__container">
        <div
          ref={ref}
          className={`hero__content fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="hero__text">
            <span className="hero__badge">India&apos;s Trusted Transport Partner</span>
            <h1 className="hero__title">
              Fast &amp; Reliable Tempo Services <span>Pan-India</span>
            </h1>
            <p className="hero__subtitle">
              We provide trusted local and commercial transportation solutions with on-time pickup,
              safe delivery, and affordable pricing across India — every city, every load size.
            </p>
            <div className="hero__actions">
              <Button href="#contact" variant="orange">
                Book Now
              </Button>
              <Button href={telHref(CONTACT_INFO.tollFree)} variant="secondary">
                Call Toll Free
              </Button>
            </div>
            <ul className="hero__trust">
              {TRUST_BADGES.map((badge) => (
                <li key={badge}>
                  <span className="hero__trust-icon">✔</span>
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__image-wrapper">
              <SafeImage
                src={IMAGES.hero}
                fallback={IMAGES.fallback}
                alt="Tempo truck for goods transportation across India"
                className="hero__image"
              />
              <div className="hero__road">
                <div className="hero__road-line" />
              </div>
            </div>

            {FLOATING_ICONS.map((icon, i) => (
              <span
                key={icon}
                className={`hero__float-icon hero__float-icon--${i + 1}`}
                aria-hidden="true"
              >
                {icon}
              </span>
            ))}

            <div className="hero__stat-card">
              <strong>5+</strong>
              <span>Years of Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
