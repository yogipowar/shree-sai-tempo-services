import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import { CONTACT_INFO, DIRECTORS } from '../data/content';
import { IMAGES, getAvatarUrl } from '../data/images';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const FEATURES = [
  { icon: '🛡️', label: 'Licensed & Insured Operations' },
  { icon: '🇮🇳', label: 'Pan-India Coverage' },
  { icon: '💬', label: 'Transparent Pricing' },
  { icon: '🎧', label: 'Dedicated Customer Support' },
];

export default function About() {
  const [ref, visible] = useScrollAnimation(0.12);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          label="About Us"
          title="Your Trusted Logistics Partner Across India"
          subtitle="Five years of reliable tempo and goods transport — local deliveries to pan-India freight."
        />

        <div
          ref={ref}
          className={`about fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="about__media">
            <div className="about__media-frame">
              <SafeImage
                src={IMAGES.about}
                fallback={IMAGES.fallback}
                alt="Indian truck transporting goods on national highway"
              />
              <div className="about__media-fade" aria-hidden="true" />
              <div className="about__experience">
                <strong>5+</strong>
                <div>
                  <span className="about__experience-title">Years of Service</span>
                  <span className="about__experience-sub">Trusted across India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__copy">
            <p>
              Shree Sai Tempo Services is a transportation and logistics company serving customers
              pan-India. We help individuals and businesses move goods safely with reliable drivers,
              clear pricing, and support that is available around the clock.
            </p>
            <p>
              From autos and mini tempos to heavy trailers, our fleet is built for every load size —
              so your shipment reaches its destination on time, anywhere in India.
            </p>

            <ul className="about__features">
              {FEATURES.map((item) => (
                <li key={item.label}>
                  <span className="about__feature-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            <p className="about__gst">
              <span>GSTIN</span>
              {CONTACT_INFO.gst}
            </p>
          </div>
        </div>

        <div
          className={`about__directors fade-up ${visible ? 'visible' : ''}`}
          aria-label="Leadership team"
        >
          {DIRECTORS.map((director) => (
            <aside key={director.name} className="about__director">
              <div className="about__director-photo-wrap">
                <SafeImage
                  src={director.photo}
                  fallback={getAvatarUrl(director.name)}
                  alt={director.name}
                  className="about__director-photo"
                  loading="lazy"
                />
              </div>
              <blockquote className="about__director-quote">
                <p>{director.profile}</p>
                <footer>
                  <cite>{director.name}</cite>
                  <span>{director.title}</span>
                </footer>
              </blockquote>
            </aside>
          ))}
        </div>
      </div>
    </section>
  );
}
